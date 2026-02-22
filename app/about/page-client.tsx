'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FiTarget, FiUsers, FiEye, FiTrendingUp, FiHeadphones, FiZap, FiBarChart2 } from 'react-icons/fi'
import { useTranslations } from '@/hooks/useTranslations'
import Link from 'next/link'

export function AboutPageClient() {
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
                {t.about.hero.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 md:mb-10 lg:mb-12 max-w-3xl mx-auto text-balance drop-shadow font-medium leading-relaxed">
                {t.about.hero.description}
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

        {/* Mission Section */}
        <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50">
          {/* Сетка на фоне */}
          <div className="absolute inset-0 bg-grid-light opacity-40"></div>
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="text-center mb-12">
              <div className="icon-bubble-gradient mx-auto mb-6">
                <FiTarget size={32} />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">{t.about.mission.title}</h2>
              <p className="text-slate-700 text-lg max-w-2xl mx-auto leading-relaxed">
                {t.about.mission.description}
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
          {/* Сетка на фоне */}
          <div className="absolute inset-0 bg-grid-dark opacity-30"></div>
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="text-center mb-12">
              <div className="icon-bubble-gradient mx-auto mb-6 bg-blue-500/20">
                <FiUsers size={32} />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">{t.about.team.title}</h2>
              <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
                {t.about.team.description}
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50">
          {/* Сетка на фоне */}
          <div className="absolute inset-0 bg-grid-light opacity-40"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">{t.about.values.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 text-center hover:border-blue-500/50 hover:shadow-xl transition-[border-color,box-shadow] duration-200 ease-out">
                <div className="icon-bubble-gradient mx-auto mb-4">
                  <FiEye size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {t.about.values.transparency.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t.about.values.transparency.description}
                </p>
              </div>
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 text-center hover:border-blue-500/50 hover:shadow-xl transition-[border-color,box-shadow] duration-200 ease-out">
                <div className="icon-bubble-gradient mx-auto mb-4">
                  <FiTrendingUp size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {t.about.values.accuracy.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t.about.values.accuracy.description}
                </p>
              </div>
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 text-center hover:border-blue-500/50 hover:shadow-xl transition-[border-color,box-shadow] duration-200 ease-out">
                <div className="icon-bubble-gradient mx-auto mb-4">
                  <FiHeadphones size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {t.about.values.support.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t.about.values.support.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
          {/* Сетка на фоне */}
          <div className="absolute inset-0 bg-grid-dark opacity-30"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-12 border border-blue-600/30 shadow-xl">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 leading-tight px-4">
                {t.home.hero.chooseMethod}
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-blue-200 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                Получайте торговые сигналы в Telegram или используйте веб-приложение
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
                  className="btn-telegram px-6 py-4 md:px-10 md:py-5 text-base md:text-lg font-semibold shadow-2xl hover:scale-105 transition-transform duration-200 ease-out will-change-transform flex items-center justify-center gap-2"
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

