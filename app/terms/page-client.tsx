'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FiFileText, FiInfo, FiAlertTriangle, FiShield, FiEdit, FiZap, FiBarChart2 } from 'react-icons/fi'
import { useTranslations } from '@/hooks/useTranslations'
import { useLocale } from '@/contexts/LocaleContext'
import Link from 'next/link'

export function TermsPageClient() {
  const t = useTranslations()
  const { locale } = useLocale()
  const [currentDate, setCurrentDate] = useState<string>('')

  useEffect(() => {
    const date = new Date().toLocaleDateString(locale === 'en' ? 'en-US' : 'ru-RU', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
    setCurrentDate(date)
  }, [locale])

  const sections = [
    {
      icon: FiFileText,
      title: t.terms.sections.acceptance.title,
      content: t.terms.sections.acceptance.content,
    },
    {
      icon: FiInfo,
      title: t.terms.sections.service.title,
      content: t.terms.sections.service.content,
    },
    {
      icon: FiAlertTriangle,
      title: t.terms.sections.risks.title,
      content: t.terms.sections.risks.content,
    },
    {
      icon: FiShield,
      title: t.terms.sections.liability.title,
      content: t.terms.sections.liability.content,
    },
    {
      icon: FiEdit,
      title: t.terms.sections.changes.title,
      content: t.terms.sections.changes.content,
    },
  ]

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
                {t.terms.hero.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-4 md:mb-6 max-w-3xl mx-auto text-balance drop-shadow font-medium leading-relaxed">
                {t.terms.hero.description}
              </p>
              <p className="text-blue-200 text-sm md:text-base mb-8 md:mb-10" suppressHydrationWarning>
                {t.terms.lastUpdated}: {currentDate || ''}
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

        {/* Content Section */}
        <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50">
          {/* Сетка на фоне */}
          <div className="absolute inset-0 bg-grid-light opacity-40"></div>
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="space-y-8">
              {sections.map((section, idx) => {
                const Icon = section.icon
                return (
                  <div key={idx} className="bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-xl transition-[border-color,box-shadow] duration-200 ease-out">
                    <div className="flex gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <div className="icon-bubble-gradient">
                          <Icon size={24} />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                          {section.title}
                        </h2>
                        <p className="text-slate-700 leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

