'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FiMessageCircle, FiClock, FiHelpCircle, FiZap, FiBarChart2 } from 'react-icons/fi'
import { useTranslations } from '@/hooks/useTranslations'
import Link from 'next/link'

export function ContactsPageClient() {
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
                {t.contacts.hero.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 md:mb-10 lg:mb-12 max-w-3xl mx-auto text-balance drop-shadow font-medium leading-relaxed">
                {t.contacts.hero.description}
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

        {/* Contact Methods */}
        <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50">
          {/* Сетка на фоне */}
          <div className="absolute inset-0 bg-grid-light opacity-40"></div>
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 text-center hover:border-blue-500/50 hover:shadow-xl transition-[border-color,box-shadow] duration-200 ease-out">
                <div className="icon-bubble-gradient mx-auto mb-4">
                  <FiMessageCircle size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {t.contacts.telegram.title}
                </h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {t.contacts.telegram.description}
                </p>
                <Link href="/telegram" className="btn-telegram-light">
                  {t.contacts.telegram.button}
                  <FiZap size={20} />
                </Link>
              </div>
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 text-center hover:border-blue-500/50 hover:shadow-xl transition-[border-color,box-shadow] duration-200 ease-out">
                <div className="icon-bubble-gradient mx-auto mb-4">
                  <FiHelpCircle size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {t.contacts.support.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {t.contacts.support.description}
                </p>
              </div>
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 text-center hover:border-blue-500/50 hover:shadow-xl transition-[border-color,box-shadow] duration-200 ease-out">
                <div className="icon-bubble-gradient mx-auto mb-4">
                  <FiClock size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {t.contacts.hours.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {t.contacts.hours.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

