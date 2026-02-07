'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { TelegramFunnel } from '@/components/TelegramFunnel'
import { PocketOptionLink } from '@/components/PocketOptionLink'
import Link from 'next/link'
import { FiArrowRight, FiCheck, FiTrendingUp, FiClock, FiBarChart } from 'react-icons/fi'
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
        <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-12 md:py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-pattern-dense"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center">
              <h1 className="section-title text-white mb-4 md:mb-6 text-balance" suppressHydrationWarning>
                {renderTranslation(t.strategies.hero.title.replace('Pocket Option', '<PocketOptionLink>Pocket Option</PocketOptionLink>'), 'light', 'hero-title')}
              </h1>
              <p className="section-subtitle text-primary-100 max-w-3xl mx-auto text-balance mb-8" suppressHydrationWarning>
                {renderTranslation(t.strategies.hero.description, 'light', 'hero-description')}
              </p>
              <Link
                href="/telegram"
                className="btn-primary"
              >
                {t.strategies.hero.cta}
                <FiArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Strategies List */}
        <section className="relative py-12 md:py-16 px-4 bg-white bg-pattern">
          <div className="container mx-auto max-w-6xl">
            <div className="space-y-8 md:space-y-12">
              {strategies.map((strategy, index) => (
                <article
                  key={strategy.id}
                  className="card hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="p-6 md:p-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            {strategy.title}
                          </h2>
                          <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                            {strategy.complexity}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm md:text-base text-gray-600 mb-4">
                          <span className="flex items-center gap-1">
                            <FiClock size={16} />
                            {t.strategies.list.strategy1.timeframe}: {strategy.timeframe}
                          </span>
                          <span className="flex items-center gap-1">
                            <FiTrendingUp size={16} />
                            {t.strategies.list.strategy1.winrate}: {strategy.winrate}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed" suppressHydrationWarning>
                      {renderTranslation(strategy.description, 'default', `strategy-${strategy.id}-description`)}
                    </p>

                    {/* Details */}
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <FiBarChart size={32} className="md:w-10 md:h-10 text-primary-600" />
                        {t.strategies.list.strategy1.features}
                      </h3>
                      <ul className="space-y-2">
                        {strategy.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <FiCheck size={20} className="text-primary-600 flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* How It Works */}
                    <div className="mb-6 card-muted p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {t.strategies.list.strategy1.howItWorks}
                      </h3>
                      <ol className="space-y-3">
                        {strategy.howItWorks.map((step, idx) => (
                          <li key={idx} className="flex gap-3 text-gray-700">
                            <span className="flex-shrink-0 w-7 h-7 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
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
                      <div className="bg-primary-50 rounded-lg p-5">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {t.strategies.list.strategy1.bestAssets}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {strategy.bestAssets.map((asset, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-white text-primary-700 rounded-md text-sm font-medium"
                            >
                              {asset}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {t.strategies.list.strategy1.riskManagement}
                        </h3>
                        <p className="text-gray-700 text-sm leading-relaxed" suppressHydrationWarning>
                          {renderTranslation(strategy.riskManagement, 'default', `strategy-${strategy.id}-risk`)}
                        </p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4 border-t border-gray-200">
                      {strategy.ctaType === 'pocketoption' ? (
                        <PocketOptionLink
                          variant="button"
                          className="btn-primary w-full md:w-auto"
                        >
                          {strategy.cta}
                          <FiArrowRight size={20} />
                        </PocketOptionLink>
                      ) : (
                        <Link
                          href="/telegram"
                          className="btn-primary w-full md:w-auto"
                        >
                          {strategy.cta}
                          <FiArrowRight size={20} />
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
        <section className="relative py-12 md:py-16 px-4 bg-gray-50 bg-pattern">
          <div className="container mx-auto max-w-6xl">
            <h2 className="section-title text-center mb-8 md:mb-12">
              {t.strategies.comparison.title}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
                <thead className="bg-primary-600 text-white">
                  <tr>
                    <th className="px-4 py-4 text-left font-semibold">{t.strategies.comparison.strategy}</th>
                    <th className="px-4 py-4 text-center font-semibold">{t.strategies.comparison.timeframe}</th>
                    <th className="px-4 py-4 text-center font-semibold">{t.strategies.comparison.winrate}</th>
                    <th className="px-4 py-4 text-center font-semibold">{t.strategies.comparison.complexity}</th>
                    <th className="px-4 py-4 text-center font-semibold">{t.strategies.comparison.recommendation}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {strategies.map((strategy) => (
                    <tr key={strategy.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-4 font-medium text-gray-900">
                        {strategy.title}
                      </td>
                      <td className="px-4 py-4 text-center text-gray-700">
                        {strategy.timeframe}
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                          {strategy.winrate}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center text-gray-700">
                        {strategy.complexity}
                      </td>
                      <td className="px-4 py-4 text-center">
                        {strategies.find(s => s.id === strategy.id)?.ctaType === 'pocketoption' ? (
                          <PocketOptionLink
                            variant="underline"
                            className="text-sm"
                          >
                            {t.strategies.comparison.start}
                            <FiArrowRight size={14} className="inline ml-1" />
                          </PocketOptionLink>
                        ) : (
                          <Link
                            href="/telegram"
                            className="link-primary text-sm"
                          >
                            {t.strategies.comparison.start}
                            <FiArrowRight size={14} className="inline ml-1" />
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

        {/* Telegram Funnel */}
        <TelegramFunnel 
          title={t.strategies.funnel.title}
          description={t.strategies.funnel.description}
          buttonText={t.strategies.funnel.button}
        />
      </main>

      <Footer />
    </div>
  )
}

