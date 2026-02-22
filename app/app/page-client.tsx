'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { useTranslations } from '@/hooks/useTranslations'
import { useLocale } from '@/contexts/LocaleContext'
import { apiClient } from '@/lib/api-client'
import { FiZap, FiTrendingUp, FiTrendingDown, FiClock, FiX, FiCheck, FiAlertCircle, FiUserPlus, FiCreditCard, FiCopy, FiLogIn, FiArrowRight, FiDollarSign, FiChevronDown } from 'react-icons/fi'

interface Signal {
  id: string
  pair: string
  direction: 'BUY' | 'SELL'
  entryPrice: number
  takeProfit: number
  stopLoss: number
  timeframe: string
  timestamp: string
  status: 'active' | 'closed' | 'cancelled'
  result?: 'win' | 'loss'
}

interface UserCheck {
  registered: boolean
  hasDeposit: boolean
  email?: string
}

const FALLBACK_LINK = 'https://pocketoption.com'

export function AppPageClient() {
  const t = useTranslations()
  const { locale } = useLocale()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isChecking, setIsChecking] = useState(true)
  const [userEmail, setUserEmail] = useState('')
  const [signals, setSignals] = useState<Signal[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState<{ pair?: string; direction?: 'BUY' | 'SELL' }>({})
  const [userType, setUserType] = useState<'existing' | 'new' | null>(null)
  const [pocketOptionLink, setPocketOptionLink] = useState<string>(FALLBACK_LINK)
  const [pairs, setPairs] = useState<string[]>(['EUR/USD', 'GBP/USD', 'USD/JPY', 'AUD/USD', 'XAU/USD'])
  const [otcPairs, setOtcPairs] = useState<string[]>(['EUR/USD OTC', 'GBP/USD OTC', 'XAU/USD OTC'])
  const [timeframes, setTimeframes] = useState<string[]>(['M1', 'M5', 'M15', 'M30', 'H1'])
  const [assetType, setAssetType] = useState<'forex' | 'otc'>('forex')
  const [selectedPair, setSelectedPair] = useState<string>('EUR/USD')
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>('M5')
  const [currentSignal, setCurrentSignal] = useState<Signal | null>(null)
  const [gettingSignal, setGettingSignal] = useState(false)
  const [cooldownRemaining, setCooldownRemaining] = useState(0)
  const COOLDOWN_SEC = 60

  // Проверка пользователя через серверный API веб-приложения
  const checkUser = async (traderId: string) => {
    setIsChecking(true)
    setError(null)
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'
      const response = await fetch(`${apiUrl}/api/webapp/check-user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ traderId }),
      })

      if (!response.ok) {
        throw new Error(t.app.auth.errors.checkError)
      }

      const data: UserCheck = await response.json()

      if (data.registered && data.hasDeposit) {
        setIsAuthenticated(true)
        setUserEmail(data.email || traderId)
        localStorage.setItem('traderId', traderId)
      } else {
        setError(
          !data.registered
            ? t.app.auth.errors.notFound
            : t.app.auth.errors.noDeposit
        )
      }
    } catch (err) {
      setError(t.app.auth.errors.connection)
      console.error(err)
    } finally {
      setIsChecking(false)
    }
  }

  // Загрузка сигналов через серверный API веб-приложения
  const loadSignals = async () => {
    setLoading(true)
    try {
      const savedTraderId = localStorage.getItem('traderId')
      if (!savedTraderId) {
        setSignals([])
        return
      }

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'
      const response = await fetch(`${apiUrl}/api/webapp/signals?traderId=${encodeURIComponent(savedTraderId)}`)
      if (!response.ok) throw new Error('Ошибка загрузки сигналов')
      const data = await response.json()
      setSignals(data.signals || [])
    } catch (err) {
      console.error('Ошибка загрузки сигналов:', err)
      setSignals([])
    } finally {
      setLoading(false)
    }
  }

  // Загрузка ссылки Pocket Option из API
  useEffect(() => {
    apiClient.getLinks()
      .then(links => {
        if (links && links.pocketOptionRef) {
          setPocketOptionLink(links.pocketOptionRef)
        } else {
          setPocketOptionLink(FALLBACK_LINK)
        }
      })
      .catch((error) => {
        console.warn('Failed to load Pocket Option link from API:', error)
        setPocketOptionLink(FALLBACK_LINK)
      })
  }, [])

  // Проверка при загрузке страницы
  useEffect(() => {
    const savedTraderId = localStorage.getItem('traderId')
    if (savedTraderId) {
      checkUser(savedTraderId)
    } else {
      setIsChecking(false)
      setUserType(null) // Показываем выбор типа пользователя
    }
  }, [])

  // Загрузка опций (пары forex/otc, таймфреймы) с сервера при входе
  useEffect(() => {
    if (!isAuthenticated) return
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'
    fetch(`${apiUrl}/api/webapp/options`)
      .then((res) => res.ok ? res.json() : null)
      .then((data: { pairs?: string[]; otcPairs?: string[]; timeframes?: string[] } | null) => {
        if (data?.pairs?.length) setPairs(data.pairs)
        if (data?.otcPairs?.length) setOtcPairs(data.otcPairs)
        if (data?.timeframes?.length) setTimeframes(data.timeframes)
      })
      .catch(() => {})
  }, [isAuthenticated])

  // При переключении Forex/OTC подставляем первую пару из списка
  const currentPairs = assetType === 'otc' ? otcPairs : pairs
  useEffect(() => {
    const list = assetType === 'otc' ? otcPairs : pairs
    if (list[0]) setSelectedPair(list[0])
  }, [assetType, pairs, otcPairs])

  // Кулдаун: таймер каждую секунду
  useEffect(() => {
    if (cooldownRemaining <= 0) return
    const t = setInterval(() => {
      setCooldownRemaining((s) => (s <= 1 ? 0 : s - 1))
    }, 1000)
    return () => clearInterval(t)
  }, [cooldownRemaining])

  // Запрос одного сигнала с сервера (логика на сервере)
  const getSignal = async () => {
    const savedTraderId = localStorage.getItem('traderId')
    if (!savedTraderId || cooldownRemaining > 0) return
    setGettingSignal(true)
    setError(null)
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'
      const response = await fetch(`${apiUrl}/api/webapp/get-signal`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          traderId: savedTraderId,
          pair: selectedPair,
          timeframe: selectedTimeframe,
          assetType,
        }),
      })
      if (!response.ok) throw new Error('Ошибка получения сигнала')
      const data: { signal: Signal } = await response.json()
      setCurrentSignal(data.signal)
      setCooldownRemaining(COOLDOWN_SEC)
    } catch (err) {
      setError(t.app.auth.errors.connection)
      setCurrentSignal(null)
    } finally {
      setGettingSignal(false)
    }
  }

  // Фильтрация сигналов
  const filteredSignals = signals.filter((signal) => {
    if (filter.pair && signal.pair !== filter.pair) return false
    if (filter.direction && signal.direction !== filter.direction) return false
    return true
  })

  // Получение уникальных валютных пар
  const uniquePairs = Array.from(new Set(signals.map((s) => s.pair)))

  if (isChecking) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
            <p className="text-gray-600">{t.app.checking}</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (!isAuthenticated) {
    // Выбор типа пользователя
    if (userType === null) {
      return (
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow flex items-center justify-center py-12 px-4 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
            {/* Градиентные орбы для глубины */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow will-change-opacity"></div>
              <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse-slow will-change-opacity" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-1/2 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow will-change-opacity" style={{ animationDelay: '2s' }}></div>
            </div>
            {/* Сетка на фоне */}
            <div className="absolute inset-0 bg-grid-dark opacity-30"></div>
            <div className="max-w-2xl w-full relative z-10">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-blue-600/30 shadow-xl text-center">
                <div className="icon-bubble-gradient mx-auto mb-6 bg-blue-500/20">
                  <FiZap size={32} />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">{t.app.title}</h1>
                <p className="text-blue-200 mb-8 text-lg">
                  {t.app.userTypeQuestion}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    onClick={() => setUserType('existing')}
                    className="btn-primary px-8 py-6 text-lg font-semibold shadow-2xl hover:scale-105 transition-transform duration-200 ease-out will-change-transform"
                  >
                    {t.app.existingUser}
                  </button>
                  <button
                    onClick={() => setUserType('new')}
                    className="bg-slate-700/50 hover:bg-slate-700/70 border border-slate-600/50 hover:border-slate-500/50 text-white px-8 py-6 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    {t.app.newUser}
                  </button>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      )
    }

    // Шаги для новичков
    if (userType === 'new') {
      return (
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow py-4 sm:py-6 md:py-12 px-3 sm:px-4 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
            {/* Декоративные элементы фона */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
            </div>
            {/* Сетка на фоне */}
            <div className="absolute inset-0 bg-grid-light opacity-30"></div>
            <div className="container mx-auto max-w-4xl relative z-10">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-slate-200/50 shadow-2xl">
                <div className="text-center mb-8 sm:mb-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg">
                    <FiZap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-5 bg-gradient-to-r from-slate-900 via-blue-700 to-slate-900 bg-clip-text text-transparent drop-shadow-sm">
                    {t.app.howToStart.title}
                  </h1>
                  <p className="text-slate-600 text-base sm:text-lg md:text-xl px-2 max-w-2xl mx-auto leading-relaxed">
                    {t.app.howToStart.description}
                  </p>
                </div>

                <div className="space-y-5 sm:space-y-6 mb-8 sm:mb-10">
                  {/* Шаг 1 */}
                  <div className="group relative flex flex-col sm:flex-row gap-4 sm:gap-5 p-5 sm:p-6 md:p-7 bg-gradient-to-br from-blue-50 via-blue-50/50 to-indigo-50/30 border-2 border-blue-200/60 rounded-2xl shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex-shrink-0 flex justify-center sm:justify-start">
                      <div className="relative">
                        <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                        <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <FiUserPlus className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="relative flex-grow min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs sm:text-sm font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-md">{t.app.howToStart.stepLabel} 1</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900 group-hover:text-blue-700 transition-colors">{t.app.howToStart.step1.title}</h3>
                      <p className="text-slate-600 mb-4 text-sm sm:text-base leading-relaxed">
                        {t.app.howToStart.step1.description}
                      </p>
                      <a
                        href={pocketOptionLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 btn-primary px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold w-full sm:w-auto text-center justify-center group/btn hover:gap-3 transition-all duration-200 shadow-md hover:shadow-lg"
                      >
                        {t.app.howToStart.step1.button}
                        <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>

                  {/* Шаг 2 */}
                  <div className="group relative flex flex-col sm:flex-row gap-4 sm:gap-5 p-5 sm:p-6 md:p-7 bg-gradient-to-br from-green-50 via-emerald-50/50 to-teal-50/30 border-2 border-green-200/60 rounded-2xl shadow-lg hover:shadow-xl hover:border-green-300 transition-all duration-300 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex-shrink-0 flex justify-center sm:justify-start">
                      <div className="relative">
                        <div className="absolute inset-0 bg-green-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                        <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <FiCreditCard className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="relative flex-grow min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs sm:text-sm font-bold text-green-600 bg-green-100 px-2 py-1 rounded-md">{t.app.howToStart.stepLabel} 2</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900 group-hover:text-green-700 transition-colors">{t.app.howToStart.step2.title}</h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {t.app.howToStart.step2.description}
                      </p>
                    </div>
                  </div>

                  {/* Шаг 3 */}
                  <div className="group relative flex flex-col sm:flex-row gap-4 sm:gap-5 p-5 sm:p-6 md:p-7 bg-gradient-to-br from-amber-50 via-yellow-50/50 to-orange-50/30 border-2 border-amber-200/60 rounded-2xl shadow-lg hover:shadow-xl hover:border-amber-300 transition-all duration-300 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex-shrink-0 flex justify-center sm:justify-start">
                      <div className="relative">
                        <div className="absolute inset-0 bg-amber-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                        <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <FiCopy className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="relative flex-grow min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs sm:text-sm font-bold text-amber-600 bg-amber-100 px-2 py-1 rounded-md">{t.app.howToStart.stepLabel} 3</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900 group-hover:text-amber-700 transition-colors">{t.app.howToStart.step3.title}</h3>
                      <p className="text-slate-600 mb-4 text-sm sm:text-base leading-relaxed">
                        {t.app.howToStart.step3.description}
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 rounded-xl p-4 sm:p-5 font-mono text-xs sm:text-sm text-slate-700 break-words shadow-inner">
                        <div className="flex items-start gap-2">
                          <FiCopy className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                          <span>{t.app.howToStart.step3.hint}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Шаг 4 */}
                  <div className="group relative flex flex-col sm:flex-row gap-4 sm:gap-5 p-5 sm:p-6 md:p-7 bg-gradient-to-br from-purple-50 via-violet-50/50 to-indigo-50/30 border-2 border-purple-200/60 rounded-2xl shadow-lg hover:shadow-xl hover:border-purple-300 transition-all duration-300 hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex-shrink-0 flex justify-center sm:justify-start">
                      <div className="relative">
                        <div className="absolute inset-0 bg-purple-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                        <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <FiLogIn className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="relative flex-grow min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs sm:text-sm font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded-md">{t.app.howToStart.stepLabel} 4</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900 group-hover:text-purple-700 transition-colors">{t.app.howToStart.step4.title}</h3>
                      <p className="text-slate-600 mb-4 text-sm sm:text-base leading-relaxed">
                        {t.app.howToStart.step4.description}
                      </p>
                      <button
                        onClick={() => setUserType('existing')}
                        className="inline-flex items-center gap-2 btn-primary px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold w-full sm:w-auto justify-center group/btn hover:gap-3 transition-all duration-200 shadow-md hover:shadow-lg"
                      >
                        {t.app.howToStart.step4.button}
                        <FiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-4 sm:pt-6">
                  <button
                    onClick={() => setUserType(null)}
                    className="text-slate-600 hover:text-slate-900 transition-colors text-sm sm:text-base w-full sm:w-auto text-center sm:text-left"
                  >
                    {t.app.howToStart.back}
                  </button>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      )
    }

    // Форма авторизации для существующих пользователей
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center py-12 px-4 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
          {/* Градиентные орбы для глубины */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow will-change-opacity"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse-slow will-change-opacity" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow will-change-opacity" style={{ animationDelay: '2s' }}></div>
          </div>
          {/* Сетка на фоне */}
          <div className="absolute inset-0 bg-grid-dark opacity-30"></div>
          <div className="max-w-md w-full relative z-10">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-600/30 shadow-xl text-center">
              <div className="icon-bubble-gradient mx-auto mb-6 bg-blue-500/20">
                <FiZap size={32} />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white">{t.app.auth.title}</h1>
              <p className="text-blue-200 mb-6">
                {t.app.auth.description}
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  const formData = new FormData(e.currentTarget)
                  const traderId = formData.get('traderId') as string
                  if (traderId) checkUser(traderId)
                }}
                className="space-y-4"
              >
                <div>
                  <input
                    type="text"
                    name="traderId"
                    placeholder={t.app.auth.placeholder}
                    required
                    onPaste={(e) => {
                      // Разрешаем вставку и очищаем от лишних символов
                      e.preventDefault()
                      const pastedText = e.clipboardData.getData('text')
                      // Удаляем все символы кроме цифр
                      const cleanedText = pastedText.replace(/\D/g, '')
                      const input = e.currentTarget
                      const start = input.selectionStart || 0
                      const end = input.selectionEnd || 0
                      const currentValue = input.value
                      const newValue = currentValue.substring(0, start) + cleanedText + currentValue.substring(end)
                      input.value = newValue
                      // Устанавливаем курсор после вставленного текста
                      const newCursorPos = start + cleanedText.length
                      setTimeout(() => {
                        input.setSelectionRange(newCursorPos, newCursorPos)
                        input.focus()
                      }, 0)
                    }}
                    className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600/50 text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                {error && (
                  <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg flex items-center gap-2">
                    <FiAlertCircle size={20} />
                    <span className="text-sm">{error}</span>
                  </div>
                )}
                <button
                  type="submit"
                  className="btn-primary w-full py-3 text-lg font-semibold"
                  disabled={isChecking}
                >
                  {isChecking ? t.app.auth.checking : t.app.auth.login}
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-slate-700/50">
                <button
                  onClick={() => setUserType(null)}
                  className="text-blue-300 hover:text-white transition-colors text-sm"
                >
                  {t.app.auth.back}
                </button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        {/* Фон в стиле сайта */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow will-change-opacity" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse-slow will-change-opacity" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute inset-0 bg-grid-dark opacity-30" />
        <div className="container mx-auto max-w-2xl relative z-10">
          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-white drop-shadow-lg">
              {t.app.signals.title}
            </h1>
            <p className="text-blue-200 text-sm sm:text-base">
              {t.app.signals.welcome} {userEmail}
            </p>
          </div>

          {/* Тумблер Forex / OTC */}
          <div className="flex justify-center mb-4">
            <div className="inline-flex p-1 rounded-xl bg-slate-800/60 border border-slate-600/50">
              <button
                type="button"
                onClick={() => setAssetType('forex')}
                className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  assetType === 'forex'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.app.signals.forex}
              </button>
              <button
                type="button"
                onClick={() => setAssetType('otc')}
                className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  assetType === 'otc'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.app.signals.otc}
              </button>
            </div>
          </div>

          {/* Карточка выбора и кнопка — логика сигнала на сервере */}
          <div
            className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-blue-600/30 shadow-xl mb-6 transition-all duration-300 ${
              gettingSignal ? 'signal-generating border-blue-500/50' : ''
            }`}
          >
            <div className="space-y-5">
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-blue-200 mb-2">
                  <FiDollarSign size={16} className="text-blue-400" />
                  {t.app.signals.selectPair}
                </label>
                <div className="relative group">
                  <select
                    value={selectedPair}
                    onChange={(e) => setSelectedPair(e.target.value)}
                    className="select-app w-full pl-11 pr-11 py-3.5 rounded-xl bg-gradient-to-br from-slate-700/80 to-slate-800/80 border border-slate-600/60 text-white font-medium focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/50 outline-none appearance-none cursor-pointer transition-all duration-200 hover:border-slate-500/60 group-hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.25)]"
                  >
                    {currentPairs.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-blue-400/80 group-hover:text-blue-400 transition-colors">
                    <FiDollarSign size={18} />
                  </span>
                  <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-slate-300 transition-colors">
                    <FiChevronDown size={20} />
                  </span>
                </div>
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-blue-200 mb-2">
                  <FiClock size={16} className="text-blue-400" />
                  {t.app.signals.selectTimeframe}
                </label>
                <div className="relative group">
                  <select
                    value={selectedTimeframe}
                    onChange={(e) => setSelectedTimeframe(e.target.value)}
                    className="select-app w-full pl-11 pr-11 py-3.5 rounded-xl bg-gradient-to-br from-slate-700/80 to-slate-800/80 border border-slate-600/60 text-white font-medium focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/50 outline-none appearance-none cursor-pointer transition-all duration-200 hover:border-slate-500/60 group-hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.25)]"
                  >
                    {timeframes.map((tf) => (
                      <option key={tf} value={tf}>{tf}</option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-blue-400/80 group-hover:text-blue-400 transition-colors">
                    <FiClock size={18} />
                  </span>
                  <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-slate-300 transition-colors">
                    <FiChevronDown size={20} />
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={getSignal}
                disabled={gettingSignal || cooldownRemaining > 0}
                className="btn-primary w-full py-4 text-lg font-semibold shadow-lg hover:scale-[1.02] transition-transform duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {gettingSignal ? (
                  <>
                    <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                    {t.app.signals.getting}
                  </>
                ) : cooldownRemaining > 0 ? (
                  <span>
                    {t.app.signals.cooldown.replace('{{sec}}', String(cooldownRemaining))}
                  </span>
                ) : (
                  <>
                    <FiZap size={22} />
                    {t.app.signals.getSignal}
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Результат сигнала с сервера */}
          {error && (
            <div className="mb-6 bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-xl flex items-center gap-2">
              <FiAlertCircle size={20} />
              <span className="text-sm">{error}</span>
            </div>
          )}
          {currentSignal && (
            <div
              key={currentSignal.id}
              className="signal-card-enter bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-blue-600/30 shadow-xl"
            >
              <h2 className="text-lg font-semibold text-blue-200 mb-4">{t.app.signals.yourSignal}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center justify-between sm:justify-start gap-3 p-4 rounded-xl bg-slate-700/40 border border-slate-600/40">
                  <span className="text-slate-400 text-sm">{t.app.signals.table.pair}</span>
                  <span className="font-bold text-white">{currentSignal.pair}</span>
                </div>
                <div className="flex items-center justify-between sm:justify-start gap-3 p-4 rounded-xl bg-slate-700/40 border border-slate-600/40">
                  <span className="text-slate-400 text-sm">{t.app.signals.table.timeframe}</span>
                  <span className="font-bold text-white">{currentSignal.timeframe}</span>
                </div>
                <div className="sm:col-span-2 flex items-center justify-between gap-3 p-4 rounded-xl bg-slate-700/40 border border-slate-600/40">
                  <span className="text-slate-400 text-sm">{t.app.signals.table.direction}</span>
                  <span
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-lg font-bold ${
                      currentSignal.direction === 'BUY'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/40'
                        : 'bg-red-500/20 text-red-400 border border-red-500/40'
                    }`}
                  >
                    {currentSignal.direction === 'BUY' ? <FiTrendingUp size={24} /> : <FiTrendingDown size={24} />}
                    {currentSignal.direction}
                  </span>
                </div>
                <div className="sm:col-span-2 text-slate-400 text-sm">
                  {t.app.signals.table.time}:{' '}
                  <span className="text-white">
                    {new Date(currentSignal.timestamp).toLocaleString(locale === 'en' ? 'en-US' : 'ru-RU')}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

