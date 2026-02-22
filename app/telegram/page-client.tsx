'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FiCheck, FiUsers, FiClock, FiBarChart, FiZap, FiBarChart2 } from 'react-icons/fi'
import { useTranslations } from '@/hooks/useTranslations'
import Link from 'next/link'

export function TelegramPageClient() {
  const t = useTranslations()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-4 sm:pt-6 md:pt-8 lg:pt-4 xl:pt-6 pb-12 sm:pb-16 md:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8 min-h-[85vh] sm:min-h-[90vh] md:min-h-screen flex items-center">
          {/* Градиентные орбы для глубины */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow will-change-opacity"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse-slow will-change-opacity" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow will-change-opacity" style={{ animationDelay: '2s' }}></div>
          </div>
          {/* Сетка на фоне */}
          <div className="absolute inset-0 bg-grid-dark opacity-30"></div>
          <div className="absolute inset-0 opacity-10 bg-pattern-dense"></div>
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 lg:mb-8 text-balance leading-[1.1] drop-shadow-lg">
                {t.telegram.hero.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 md:mb-10 lg:mb-12 max-w-3xl mx-auto text-balance drop-shadow font-medium leading-relaxed">
                {t.telegram.hero.description}
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

        {/* Benefits Section */}
        <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50">
          {/* Сетка на фоне */}
          <div className="absolute inset-0 bg-grid-light opacity-40"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                {t.telegram.benefits.title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 flex gap-4 hover:border-blue-500/50 hover:shadow-xl transition-[border-color,box-shadow] duration-200 ease-out">
                <div className="flex-shrink-0">
                  <div className="icon-bubble-gradient">
                    <FiCheck size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">
                    {t.telegram.benefits.instant.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {t.telegram.benefits.instant.description}
                  </p>
                </div>
              </div>

              <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 flex gap-4 hover:border-blue-500/50 hover:shadow-xl transition-[border-color,box-shadow] duration-200 ease-out">
                <div className="flex-shrink-0">
                  <div className="icon-bubble-gradient">
                    <FiBarChart size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">
                    {t.telegram.benefits.analytics.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {t.telegram.benefits.analytics.description}
                  </p>
                </div>
              </div>

              <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 flex gap-4 hover:border-blue-500/50 hover:shadow-xl transition-[border-color,box-shadow] duration-200 ease-out">
                <div className="flex-shrink-0">
                  <div className="icon-bubble-gradient">
                    <FiUsers size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">
                    {t.telegram.benefits.community.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {t.telegram.benefits.community.description}
                  </p>
                </div>
              </div>

              <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 flex gap-4 hover:border-blue-500/50 hover:shadow-xl transition-[border-color,box-shadow] duration-200 ease-out">
                <div className="flex-shrink-0">
                  <div className="icon-bubble-gradient">
                    <FiClock size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">
                    {t.telegram.benefits.work24.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {t.telegram.benefits.work24.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
          {/* Сетка на фоне */}
          <div className="absolute inset-0 bg-grid-dark opacity-30"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-600/30 hover:bg-slate-800/70 hover:border-blue-500/50 transition-[background-color,border-color] duration-200 ease-out">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 mb-2">10,000+</div>
                <div className="text-blue-200 text-sm md:text-base">{t.telegram.stats.subscribers}</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-600/30 hover:bg-slate-800/70 hover:border-blue-500/50 transition-[background-color,border-color] duration-200 ease-out">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 mb-2">85%+</div>
                <div className="text-blue-200 text-sm md:text-base">{t.telegram.stats.accuracy}</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-600/30 hover:bg-slate-800/70 hover:border-blue-500/50 transition-[background-color,border-color] duration-200 ease-out">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 mb-2">1000+</div>
                <div className="text-blue-200 text-sm md:text-base">{t.telegram.stats.signalsPerDay}</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-600/30 hover:bg-slate-800/70 hover:border-blue-500/50 transition-[background-color,border-color] duration-200 ease-out">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-blue-200 text-sm md:text-base">{t.telegram.stats.support}</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50">
          {/* Сетка на фоне */}
          <div className="absolute inset-0 bg-grid-light opacity-40"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center bg-white rounded-2xl p-6 md:p-8 lg:p-12 border-2 border-slate-200 shadow-xl">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 leading-tight px-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                {t.telegram.funnel.title}
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                {t.telegram.funnel.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                <Link
                  href="/app"
                  className="btn-primary px-6 py-4 md:px-10 md:py-5 text-base md:text-lg font-semibold shadow-2xl hover:scale-105 transition-transform duration-200 ease-out will-change-transform flex items-center justify-center gap-2"
                >
                  <FiBarChart2 size={20} className="md:w-6 md:h-6" />
                  <span>{t.home.hero.ctaWebApp}</span>
                </Link>
                <Link
                  href="/telegram"
                  className="btn-telegram-light px-6 py-4 md:px-10 md:py-5 text-base md:text-lg font-semibold shadow-2xl hover:scale-105 transition-transform duration-200 ease-out will-change-transform flex items-center justify-center gap-2"
                >
                  <FiZap size={20} className="md:w-6 md:h-6" />
                  <span>{t.home.hero.ctaTelegram}</span>
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

