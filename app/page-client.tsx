'use client'

import dynamic from 'next/dynamic'
import { FiZap, FiBarChart2, FiTrendingUp, FiClock, FiDollarSign, FiShield, FiCpu, FiAward, FiCheckCircle } from 'react-icons/fi'
import Link from 'next/link'
import { useTranslations } from '@/hooks/useTranslations'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import { TradingChart } from '@/components/TradingChart'

// Code splitting для тяжелых компонентов
const Header = dynamic(() => import('@/components/Header').then(mod => ({ default: mod.Header })), { 
  ssr: true,
  loading: () => <div className="h-16 bg-slate-900 border-b border-slate-800 animate-pulse" />
})
const Footer = dynamic(() => import('@/components/Footer').then(mod => ({ default: mod.Footer })), { 
  ssr: true,
  loading: () => <div className="h-32 bg-gray-50 animate-pulse" />
})
const PocketOptionLink = dynamic(() => import('@/components/PocketOptionLink').then(mod => ({ default: mod.PocketOptionLink })), { 
  ssr: true 
})

export function HomeClient() {
  const t = useTranslations()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section - Агрессивная воронка */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-4 sm:pt-6 md:pt-8 lg:pt-4 xl:pt-6 pb-12 sm:pb-16 md:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8 min-h-[85vh] sm:min-h-[90vh] md:min-h-screen flex items-center">
          {/* Градиентные орбы для глубины */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow will-change-opacity" style={{ animationDelay: '0s' }}></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse-slow will-change-opacity" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow will-change-opacity" style={{ animationDelay: '2s' }}></div>
          </div>
          {/* Сетка на фоне */}
          <div className="absolute inset-0 bg-grid-dark opacity-30"></div>
          <div className="absolute inset-0 opacity-10 bg-pattern-dense"></div>
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
              {/* Левая колонка - Текст и CTA */}
              <div className="text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 lg:mb-8 text-balance leading-[1.1] drop-shadow-lg">
                  {t.home.hero.title}
                </h1>
                
                {/* Два пути: Telegram или Веб-приложение */}
                <div className="mb-6 md:mb-8">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-4 md:mb-6 font-semibold">
                    {t.home.hero.chooseMethod}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-2xl mx-auto lg:mx-0">
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

                {/* Краткая статистика */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-3 md:gap-4 max-w-2xl mx-auto lg:mx-0 mt-8 md:mt-10 lg:mt-12">
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-blue-600/30 hover:bg-slate-800/70 hover:border-blue-500/50 transition-[background-color,border-color] duration-200 ease-out shadow-lg shadow-blue-900/20">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 text-white">
                      <AnimatedCounter value={85} suffix="%" />
                    </div>
                    <div className="text-xs sm:text-sm md:text-base text-white leading-tight">{t.home.stats.accuracy}</div>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-blue-600/30 hover:bg-slate-800/70 hover:border-blue-500/50 transition-[background-color,border-color] duration-200 ease-out shadow-lg shadow-blue-900/20">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 text-white">
                      <AnimatedCounter value={1000} suffix="+" />
                    </div>
                    <div className="text-xs sm:text-sm md:text-base text-white leading-tight">{t.home.stats.signalsPerDay}</div>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-blue-600/30 hover:bg-slate-800/70 hover:border-blue-500/50 transition-[background-color,border-color] duration-200 ease-out shadow-lg shadow-blue-900/20">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 text-white">
                      <AnimatedCounter value={10000} suffix="+" />
                    </div>
                    <div className="text-xs sm:text-sm md:text-base text-white leading-tight">{t.home.stats.users}</div>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-blue-600/30 hover:bg-slate-800/70 hover:border-blue-500/50 transition-[background-color,border-color] duration-200 ease-out shadow-lg shadow-blue-900/20">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 text-white">24/7</div>
                    <div className="text-xs sm:text-sm md:text-base text-white leading-tight">{t.home.stats.support}</div>
                  </div>
                </div>
              </div>

              {/* Правая колонка - Анимированный график */}
              <div className="hidden lg:block mt-8 lg:mt-0">
                <TradingChart />
              </div>
            </div>
          </div>
        </section>

        {/* Секция "Как это работает" с визуализацией */}
        <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50">
          {/* Сетка на фоне */}
          <div className="absolute inset-0 bg-grid-light opacity-40"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent leading-tight">
                {t.home.howItWorks.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed px-4">
                {t.home.howItWorks.subtitle}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-8 md:mb-12">
              {/* Шаг 1 */}
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 sm:p-6 md:p-8 text-center group relative hover:border-blue-500/50 hover:shadow-xl transition-[border-color,box-shadow] duration-200 ease-out h-full flex flex-col">
                <div className="icon-bubble-gradient mx-auto mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-200 ease-out will-change-transform w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
                  <FiBarChart2 size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2 sm:mb-3 md:mb-4">1</div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-2.5 md:mb-3 text-slate-900">{t.home.howItWorks.step1.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed flex-grow">
                  {t.home.howItWorks.step1.description}
                </p>
              </div>

              {/* Шаг 2 */}
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 sm:p-6 md:p-8 text-center group relative hover:border-blue-500/50 hover:shadow-xl transition-[border-color,box-shadow] duration-200 ease-out h-full flex flex-col">
                <div className="icon-bubble-gradient mx-auto mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-200 ease-out will-change-transform w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
                  <FiZap size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2 sm:mb-3 md:mb-4">2</div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-2.5 md:mb-3 text-slate-900">{t.home.howItWorks.step2.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed flex-grow">
                  {t.home.howItWorks.step2.description}
                </p>
              </div>

              {/* Шаг 3 */}
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 sm:p-6 md:p-8 text-center group relative hover:border-blue-500/50 hover:shadow-xl transition-all h-full flex flex-col sm:col-span-2 lg:col-span-1">
                <div className="icon-bubble-gradient mx-auto mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
                  <FiDollarSign size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2 sm:mb-3 md:mb-4">3</div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-2.5 md:mb-3 text-slate-900">{t.home.howItWorks.step3.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed flex-grow">
                  {t.home.howItWorks.step3.description}
                </p>
              </div>
            </div>

            {/* Мобильная версия графика */}
            <div className="lg:hidden mt-8">
              <TradingChart />
            </div>
          </div>
        </section>

        {/* Секция "Почему выбирают нас" */}
        <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
          {/* Сетка на фоне */}
          <div className="absolute inset-0 bg-grid-dark opacity-30"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight">
                {t.home.whyChooseUs.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed px-4">
                {t.home.whyChooseUs.subtitle}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
              {/* Преимущество 1 */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-blue-600/30 hover:bg-slate-800/70 hover:border-blue-500/50 transition-[background-color,border-color] duration-200 ease-out group h-full flex flex-col shadow-lg shadow-blue-900/20">
                <div className="icon-bubble-gradient mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-200 ease-out will-change-transform w-12 h-12 md:w-14 md:h-14">
                  <FiCpu size={24} className="md:w-7 md:h-7" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-center text-white">{t.home.whyChooseUs.aiAnalysis.title}</h3>
                <p className="text-white text-xs md:text-sm text-center leading-relaxed flex-grow">
                  {t.home.whyChooseUs.aiAnalysis.description}
                </p>
              </div>

              {/* Преимущество 2 */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-blue-600/30 hover:bg-slate-800/70 hover:border-blue-500/50 transition-[background-color,border-color] duration-200 ease-out group h-full flex flex-col shadow-lg shadow-blue-900/20">
                <div className="icon-bubble-gradient mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-200 ease-out will-change-transform w-12 h-12 md:w-14 md:h-14">
                  <FiAward size={24} className="md:w-7 md:h-7" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-center text-white">{t.home.whyChooseUs.accuracy.title}</h3>
                <p className="text-white text-xs md:text-sm text-center leading-relaxed flex-grow">
                  {t.home.whyChooseUs.accuracy.description}
                </p>
              </div>

              {/* Преимущество 3 */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-blue-600/30 hover:bg-slate-800/70 hover:border-blue-500/50 transition-[background-color,border-color] duration-200 ease-out group h-full flex flex-col shadow-lg shadow-blue-900/20">
                <div className="icon-bubble-gradient mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-200 ease-out will-change-transform w-12 h-12 md:w-14 md:h-14">
                  <FiZap size={24} className="md:w-7 md:h-7" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-center text-white">{t.home.whyChooseUs.instant.title}</h3>
                <p className="text-white text-xs md:text-sm text-center leading-relaxed flex-grow">
                  {t.home.whyChooseUs.instant.description}
                </p>
              </div>

              {/* Преимущество 4 */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-blue-600/30 hover:bg-slate-800/70 hover:border-blue-500/50 transition-all group h-full flex flex-col sm:col-span-2 lg:col-span-1 shadow-lg shadow-blue-900/20">
                <div className="icon-bubble-gradient mx-auto mb-3 md:mb-4 group-hover:scale-110 w-12 h-12 md:w-14 md:h-14">
                  <FiShield size={24} className="md:w-7 md:h-7" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-center text-white">{t.home.whyChooseUs.secure.title}</h3>
                <p className="text-white text-xs md:text-sm text-center leading-relaxed flex-grow">
                  {t.home.whyChooseUs.secure.description}
                </p>
              </div>
            </div>

            {/* Финальный CTA */}
            <div className="text-center bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-12 border border-blue-600/30 shadow-xl shadow-blue-900/30">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 leading-tight px-4">
                {t.home.whyChooseUs.finalCta.title}
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-white mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                {t.home.whyChooseUs.finalCta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                <Link
                  href="/app"
                  className="btn-primary px-6 py-4 md:px-10 md:py-5 text-base md:text-lg font-semibold shadow-2xl hover:scale-105 transition-transform duration-200 ease-out will-change-transform flex items-center justify-center gap-2"
                >
                  <FiBarChart2 size={20} className="md:w-6 md:h-6" />
                  <span>{t.home.whyChooseUs.finalCta.ctaWebApp}</span>
                </Link>
                <Link
                  href="/telegram"
                  className="btn-telegram px-6 py-4 md:px-10 md:py-5 text-base md:text-lg font-semibold shadow-2xl hover:scale-105 transition-transform duration-200 ease-out will-change-transform flex items-center justify-center gap-2"
                >
                  <FiZap size={20} className="md:w-6 md:h-6" />
                  <span>{t.home.whyChooseUs.finalCta.ctaTelegram}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
