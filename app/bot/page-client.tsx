'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PocketOptionLink } from '@/components/PocketOptionLink'
import { TradingChart } from '@/components/TradingChart'
import Link from 'next/link'
import { FiZap, FiBarChart2, FiCpu, FiShield, FiBarChart, FiClock, FiTrendingUp } from 'react-icons/fi'
import { renderTranslation } from '@/lib/render-translation'
import { useTranslations } from '@/hooks/useTranslations'

export function BotPageClient() {
  const t = useTranslations()

  const features = [
    {
      icon: FiCpu,
      title: t.bot.features.ai.title,
      description: t.bot.features.ai.description,
    },
    {
      icon: FiZap,
      title: t.bot.features.instant.title,
      description: t.bot.features.instant.description,
    },
    {
      icon: FiBarChart,
      title: t.bot.features.indicators.title,
      description: t.bot.features.indicators.description,
    },
    {
      icon: FiShield,
      title: t.bot.features.filtering.title,
      description: t.bot.features.filtering.description,
    },
    {
      icon: FiClock,
      title: t.bot.features.work24.title,
      description: t.bot.features.work24.description,
    },
    {
      icon: FiTrendingUp,
      title: t.bot.features.analytics.title,
      description: t.bot.features.analytics.description,
    }
  ]

  const howItWorks = [
    {
      step: 1,
      title: t.bot.howItWorks.step1.title,
      description: t.bot.howItWorks.step1.description,
    },
    {
      step: 2,
      title: t.bot.howItWorks.step2.title,
      description: t.bot.howItWorks.step2.description,
    },
    {
      step: 3,
      title: t.bot.howItWorks.step3.title,
      description: t.bot.howItWorks.step3.description,
    },
    {
      step: 4,
      title: t.bot.howItWorks.step4.title,
      description: t.bot.howItWorks.step4.description,
    },
    {
      step: 5,
      title: t.bot.howItWorks.step5.title,
      description: t.bot.howItWorks.step5.description,
    }
  ]

  const technologies = t.bot.technologies.list

  const faqs = [
    {
      question: t.bot.faq.q1.question,
      answer: t.bot.faq.q1.answer,
    },
    {
      question: t.bot.faq.q2.question,
      answer: t.bot.faq.q2.answer,
    },
    {
      question: t.bot.faq.q3.question,
      answer: t.bot.faq.q3.answer,
    },
    {
      question: t.bot.faq.q4.question,
      answer: t.bot.faq.q4.answer,
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
                {renderTranslation(t.bot.hero.title.replace('Pocket Option', '<PocketOptionLink>Pocket Option</PocketOptionLink>'), 'light')}
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 md:mb-10 lg:mb-12 max-w-3xl mx-auto text-balance drop-shadow font-medium leading-relaxed">
                {renderTranslation(t.bot.hero.description, 'light')}
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

        {/* Stats Section */}
        <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50">
          {/* Сетка на фоне */}
          <div className="absolute inset-0 bg-grid-light opacity-40"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 sm:p-6 md:p-8 hover:border-blue-500/50 hover:shadow-xl transition-[border-color,box-shadow] duration-200 ease-out">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">85%+</div>
                <div className="text-slate-600 text-sm md:text-base font-medium">{t.bot.stats.accuracy}</div>
              </div>
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 sm:p-6 md:p-8 hover:border-blue-500/50 hover:shadow-xl transition-[border-color,box-shadow] duration-200 ease-out">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">1000+</div>
                <div className="text-slate-600 text-sm md:text-base font-medium">{t.bot.stats.signalsPerDay}</div>
              </div>
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 sm:p-6 md:p-8 hover:border-blue-500/50 hover:shadow-xl transition-[border-color,box-shadow] duration-200 ease-out">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">24/7</div>
                <div className="text-slate-600 text-sm md:text-base font-medium">{t.bot.stats.work}</div>
              </div>
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-5 sm:p-6 md:p-8 hover:border-blue-500/50 hover:shadow-xl transition-[border-color,box-shadow] duration-200 ease-out">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">&lt;1с</div>
                <div className="text-slate-600 text-sm md:text-base font-medium">{t.bot.stats.delay}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
          {/* Сетка на фоне */}
          <div className="absolute inset-0 bg-grid-dark opacity-30"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight">
                {t.bot.features.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-blue-600/30 hover:bg-slate-800/70 hover:border-blue-500/50 transition-[background-color,border-color] duration-200 ease-out group h-full flex flex-col shadow-lg shadow-blue-900/20"
                >
                  <div className="icon-bubble-gradient mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-200 ease-out will-change-transform w-12 h-12 md:w-14 md:h-14">
                    <feature.icon size={24} className="md:w-7 md:h-7" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-center text-white">
                    {feature.title}
                  </h3>
                  <p className="text-white text-xs md:text-sm text-center leading-relaxed flex-grow">
                    {renderTranslation(feature.description, 'default')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50">
          {/* Сетка на фоне */}
          <div className="absolute inset-0 bg-grid-light opacity-40"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent leading-tight">
                {t.bot.howItWorks.title}
              </h2>
            </div>
            <div className="space-y-4 md:space-y-6">
              {howItWorks.map((item) => (
                <div
                  key={item.step}
                  className="bg-white border-2 border-slate-200 rounded-2xl p-5 sm:p-6 md:p-8 hover:border-blue-500/50 hover:shadow-xl transition-[border-color,box-shadow] duration-200 ease-out flex flex-col md:flex-row gap-4 md:gap-6 items-center"
                >
                  <div className="flex-shrink-0">
                    <div className="step-number w-14 h-14 md:w-16 md:h-16 text-xl md:text-2xl">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
          {/* Сетка на фоне */}
          <div className="absolute inset-0 bg-grid-dark opacity-30"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight">
                {t.bot.technologies.title}
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-blue-600/30 hover:bg-slate-800/70 hover:border-blue-500/50 transition-[background-color,border-color] duration-200 ease-out text-center shadow-lg shadow-blue-900/20"
                >
                  <div className="text-white font-medium text-sm md:text-base">
                    {tech}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Signal Example */}
        <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50">
          {/* Сетка на фоне */}
          <div className="absolute inset-0 bg-grid-light opacity-40"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent leading-tight">
                {t.bot.example.title}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed px-4">
                Пример того, как выглядит сигнал от бота
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <TradingChart />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
          {/* Сетка на фоне */}
          <div className="absolute inset-0 bg-grid-dark opacity-30"></div>
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight">
                {t.bot.faq.title}
              </h2>
            </div>
            <div className="space-y-4 md:space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-blue-600/30 hover:bg-slate-800/70 hover:border-blue-500/50 transition-[background-color,border-color] duration-200 ease-out shadow-lg shadow-blue-900/20">
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">
                    {faq.question}
                  </h3>
                  <p className="text-white text-sm md:text-base leading-relaxed opacity-90">
                    {faq.answer}
                  </p>
                </div>
              ))}
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
                {t.bot.funnel.title}
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                {t.bot.funnel.description}
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

