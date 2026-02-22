'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PocketOptionLink } from '@/components/PocketOptionLink'
import Link from 'next/link'
import { FiCheck, FiTrendingUp, FiClock, FiBarChart, FiZap, FiBarChart2 } from 'react-icons/fi'
import { renderTranslation } from '@/lib/render-translation'
import { useTranslations } from '@/hooks/useTranslations'

export function StrategiesPageClient() {
  const t = useTranslations()

  const strategies = [
    {
      id: 1,
      title: t.strategies.list.strategy1.title,
      timeframe: 'M1 - M15',
      winrate: '65-72%',
      complexity: t.strategies.list.strategy1.complexity,
      description: t.strategies.list.strategy1.description,
      details: t.strategies.list.strategy1.details,
      howItWorks: t.strategies.list.strategy1.how,
      bestAssets: t.strategies.list.strategy1.assets,
      riskManagement: t.strategies.list.strategy1.riskText,
      cta: t.strategies.list.strategy1.cta,
      ctaType: t.strategies.list.strategy1.ctaType,
    },
    {
      id: 2,
      title: t.strategies.list.strategy2.title,
      timeframe: 'M5 - H1',
      winrate: '60-68%',
      complexity: t.strategies.list.strategy2.complexity,
      description: t.strategies.list.strategy2.description,
      details: t.strategies.list.strategy2.details,
      howItWorks: t.strategies.list.strategy2.how,
      bestAssets: t.strategies.list.strategy2.assets,
      riskManagement: t.strategies.list.strategy2.riskText,
      cta: t.strategies.list.strategy2.cta,
      ctaType: t.strategies.list.strategy2.ctaType,
    },
    {
      id: 3,
      title: t.strategies.list.strategy3.title,
      timeframe: t.common.any,
      winrate: '70-85%',
      complexity: t.strategies.list.strategy3.complexity,
      description: t.strategies.list.strategy3.description,
      details: t.strategies.list.strategy3.details,
      howItWorks: t.strategies.list.strategy3.how,
      bestAssets: t.strategies.list.strategy3.assets,
      riskManagement: t.strategies.list.strategy3.riskText,
      cta: t.strategies.list.strategy3.cta,
      ctaType: t.strategies.list.strategy3.ctaType,
    },
    {
      id: 4,
      title: t.strategies.list.strategy4.title,
      timeframe: t.common.any,
      winrate: '75-90%',
      complexity: t.strategies.list.strategy4.complexity,
      description: t.strategies.list.strategy4.description,
      details: t.strategies.list.strategy4.details,
      howItWorks: t.strategies.list.strategy4.how,
      bestAssets: t.strategies.list.strategy4.assets,
      riskManagement: t.strategies.list.strategy4.riskText,
      cta: t.strategies.list.strategy4.cta,
      ctaType: t.strategies.list.strategy4.ctaType,
    }
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 lg:mb-8 text-balance leading-[1.1] drop-shadow-lg" suppressHydrationWarning>
                {renderTranslation(t.strategies.hero.title.replace('Pocket Option', '<PocketOptionLink>Pocket Option</PocketOptionLink>'), 'light', 'hero-title')}
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 md:mb-10 lg:mb-12 max-w-3xl mx-auto text-balance drop-shadow font-medium leading-relaxed" suppressHydrationWarning>
                {renderTranslation(t.strategies.hero.description, 'light', 'hero-description')}
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

        {/* Strategies List */}
        <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50">
          {/* Сетка на фоне */}
          <div className="absolute inset-0 bg-grid-light opacity-40"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="space-y-8 md:space-y-12">
              {strategies.map((strategy, index) => (
                <article
                  key={strategy.id}
                  className="bg-white border-2 border-slate-200 rounded-2xl p-6 md:p-8 hover:border-blue-500/50 hover:shadow-xl transition-[border-color,box-shadow] duration-200 ease-out"
                >
                  <div className="p-6 md:p-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                            {strategy.title}
                          </h2>
                          <span className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full text-sm font-semibold shadow-md">
                            {strategy.complexity}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm md:text-base text-slate-600 mb-4">
                          <span className="flex items-center gap-1.5">
                            <FiClock size={16} className="text-blue-600" />
                            {t.strategies.list.strategy1.timeframe}: <span className="font-semibold">{strategy.timeframe}</span>
                          </span>
                          <span className="flex items-center gap-1.5">
                            <FiTrendingUp size={16} className="text-blue-600" />
                            {t.strategies.list.strategy1.winrate}: <span className="font-semibold">{strategy.winrate}</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-700 text-base md:text-lg mb-6 leading-relaxed" suppressHydrationWarning>
                      {renderTranslation(strategy.description, 'default', `strategy-${strategy.id}-description`)}
                    </p>

                    {/* Details */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <div className="icon-bubble-gradient">
                          <FiBarChart size={24} />
                        </div>
                        {t.strategies.list.strategy1.features}
                      </h3>
                      <ul className="space-y-2">
                        {strategy.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-700">
                            <FiCheck size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* How It Works */}
                    <div className="mb-6 bg-slate-50 border border-slate-200 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-4">
                        {t.strategies.list.strategy1.howItWorks}
                      </h3>
                      <ol className="space-y-3">
                        {strategy.howItWorks.map((step, idx) => (
                          <li key={idx} className="flex gap-3 text-slate-700">
                            <span className="step-number step-number--compact flex-shrink-0">
                              {idx + 1}
                            </span>
                            <span className="leading-relaxed" suppressHydrationWarning>
                              {renderTranslation(step, 'default', `strategy-${strategy.id}-step-${idx}`)}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Best Assets & Risk Management */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-5">
                        <h3 className="text-lg font-semibold text-slate-900 mb-3">
                          {t.strategies.list.strategy1.bestAssets}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {strategy.bestAssets.map((asset, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 bg-white text-blue-700 rounded-lg text-sm font-medium border border-blue-200 shadow-sm"
                            >
                              {asset}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-5">
                        <h3 className="text-lg font-semibold text-slate-900 mb-3">
                          {t.strategies.list.strategy1.riskManagement}
                        </h3>
                        <p className="text-slate-700 text-sm leading-relaxed" suppressHydrationWarning>
                          {renderTranslation(strategy.riskManagement, 'default', `strategy-${strategy.id}-risk`)}
                        </p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4 border-t border-slate-200">
                      {strategy.ctaType === 'pocketoption' ? (
                        <PocketOptionLink
                          variant="button"
                          className="btn-primary w-full md:w-auto"
                        >
                          {strategy.cta}
                          <FiZap size={20} />
                        </PocketOptionLink>
                      ) : (
                        <Link
                          href="/telegram"
                          className="btn-telegram-light w-full md:w-auto"
                        >
                          {strategy.cta}
                          <FiZap size={20} />
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="relative py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
          {/* Сетка на фоне */}
          <div className="absolute inset-0 bg-grid-dark opacity-30"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight">
                {t.strategies.comparison.title}
              </h2>
            </div>
            <div className="overflow-x-auto -mx-2 sm:mx-0">
              <table className="w-full min-w-[320px] bg-slate-800/50 backdrop-blur-sm rounded-xl border border-blue-600/30 shadow-xl overflow-hidden">
                <thead className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                  <tr>
                    <th className="px-2 py-3 sm:px-4 sm:py-4 text-left text-xs sm:text-sm font-semibold">{t.strategies.comparison.strategy}</th>
                    <th className="px-2 py-3 sm:px-4 sm:py-4 text-center text-xs sm:text-sm font-semibold">{t.strategies.comparison.timeframe}</th>
                    <th className="px-2 py-3 sm:px-4 sm:py-4 text-center text-xs sm:text-sm font-semibold">{t.strategies.comparison.winrate}</th>
                    <th className="px-2 py-3 sm:px-4 sm:py-4 text-center text-xs sm:text-sm font-semibold">{t.strategies.comparison.complexity}</th>
                    <th className="px-2 py-3 sm:px-4 sm:py-4 text-center text-xs sm:text-sm font-semibold">{t.strategies.comparison.recommendation}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-600/20">
                  {strategies.map((strategy) => (
                    <tr key={strategy.id} className="hover:bg-slate-800/70 transition-[background-color] duration-200 ease-out">
                      <td className="px-2 py-3 sm:px-4 sm:py-4 font-medium text-white text-xs sm:text-sm">
                        {strategy.title}
                      </td>
                      <td className="px-2 py-3 sm:px-4 sm:py-4 text-center text-blue-200 text-xs sm:text-sm">
                        {strategy.timeframe}
                      </td>
                      <td className="px-2 py-3 sm:px-4 sm:py-4 text-center">
                        <span className="inline-block px-2 py-1 sm:px-3 sm:py-1.5 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap">
                          {strategy.winrate}
                        </span>
                      </td>
                      <td className="px-2 py-3 sm:px-4 sm:py-4 text-center text-blue-200 text-xs sm:text-sm">
                        {strategy.complexity}
                      </td>
                      <td className="px-2 py-3 sm:px-4 sm:py-4 text-center">
                        {strategies.find(s => s.id === strategy.id)?.ctaType === 'pocketoption' ? (
                          <PocketOptionLink
                            variant="button"
                            className="btn-telegram-light text-sm px-4 py-2"
                          >
                            {t.strategies.comparison.start}
                            <FiZap size={16} />
                          </PocketOptionLink>
                        ) : (
                          <Link
                            href="/telegram"
                            className="btn-telegram-light text-sm px-4 py-2"
                          >
                            {t.strategies.comparison.start}
                            <FiZap size={16} />
                          </Link>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                {t.strategies.funnel.title}
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                {t.strategies.funnel.description}
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

