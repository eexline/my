'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FiAlertTriangle, FiTrendingDown, FiBarChart, FiSettings, FiInfo, FiZap, FiBarChart2 } from 'react-icons/fi'
import { useTranslations } from '@/hooks/useTranslations'
import Link from 'next/link'

export function RiskPageClient() {
  const t = useTranslations()

  const riskTypes = [
    {
      icon: FiTrendingDown,
      title: t.risk.risks.market.title,
      description: t.risk.risks.market.description,
    },
    {
      icon: FiBarChart,
      title: t.risk.risks.leverage.title,
      description: t.risk.risks.leverage.description,
    },
    {
      icon: FiSettings,
      title: t.risk.risks.technical.title,
      description: t.risk.risks.technical.description,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white pt-4 sm:pt-6 md:pt-8 lg:pt-4 xl:pt-6 pb-12 sm:pb-16 md:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8 min-h-[85vh] sm:min-h-[90vh] md:min-h-screen flex items-center">
          {/* Градиентные орбы для глубины */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse-slow will-change-opacity"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse-slow will-change-opacity" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 md:w-96 md:h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse-slow will-change-opacity" style={{ animationDelay: '2s' }}></div>
          </div>
          {/* Сетка на фоне */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
          <div className="absolute inset-0 opacity-10 bg-pattern-dense"></div>
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="icon-bubble-gradient mx-auto mb-6 bg-red-500/20">
                <FiAlertTriangle size={32} />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 lg:mb-8 text-balance leading-[1.1] drop-shadow-lg">
                {t.risk.hero.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-red-100 mb-8 md:mb-10 lg:mb-12 max-w-3xl mx-auto text-balance drop-shadow font-medium leading-relaxed">
                {t.risk.hero.description}
              </p>
              
              {/* Два пути: Telegram или Веб-приложение */}
              <div className="mb-6 md:mb-8">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-4 md:mb-6 font-semibold">
                  {t.home.hero.chooseMethod}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-2xl mx-auto">
                  {/* Кнопка Telegram */}
                  <Link
                    href="/telegram"
                    className="btn-telegram flex-1 px-6 py-4 md:px-8 md:py-5 text-base md:text-lg font-semibold shadow-2xl hover:scale-105 transition-transform duration-200 ease-out will-change-transform flex items-center justify-center gap-2"
                  >
                    <FiZap size={20} className="md:w-6 md:h-6" />
                    <span>{t.home.hero.ctaTelegram}</span>
                  </Link>
                  {/* Кнопка Веб-приложение */}
                  <Link
                    href="/app"
                    className="btn-primary flex-1 px-6 py-4 md:px-8 md:py-5 text-base md:text-lg font-semibold shadow-2xl hover:shadow-blue-500/50 glow-primary hover:scale-105 transition-[transform,box-shadow] duration-200 ease-out will-change-transform flex items-center justify-center gap-2"
                  >
                    <FiBarChart2 size={20} className="md:w-6 md:h-6" />
                    <span>{t.home.hero.ctaWebApp}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Warning Section */}
        <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-red-50 via-red-50 to-red-100">
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="bg-red-100 border-2 border-red-300 rounded-2xl p-6 shadow-lg">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <FiAlertTriangle className="text-red-600" size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-red-900 mb-3">
                    {t.risk.warning.title}
                  </h2>
                  <p className="text-red-800 leading-relaxed text-lg">
                    {t.risk.warning.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Risks Section */}
        <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50">
          {/* Сетка на фоне */}
          <div className="absolute inset-0 bg-grid-light opacity-40"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">{t.risk.risks.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {riskTypes.map((risk, idx) => {
                const Icon = risk.icon
                return (
                  <div key={idx} className="bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-red-500/50 hover:shadow-xl transition-[border-color,box-shadow] duration-200 ease-out">
                    <div className="icon-bubble-gradient mb-4 bg-red-500/20">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {risk.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {risk.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Recommendations Section */}
        <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-yellow-50 to-amber-50">
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="bg-yellow-100 border-2 border-yellow-300 rounded-2xl p-6 shadow-lg">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <FiInfo className="text-yellow-600" size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-yellow-900 mb-3">
                    {t.risk.recommendations.title}
                  </h2>
                  <p className="text-yellow-800 leading-relaxed">
                    {t.risk.recommendations.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50">
          {/* Сетка на фоне */}
          <div className="absolute inset-0 bg-grid-light opacity-40"></div>
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-xl transition-[border-color,box-shadow] duration-200 ease-out">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="icon-bubble-gradient">
                    <FiInfo size={32} />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                    {t.risk.disclaimer.title}
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    {t.risk.disclaimer.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

