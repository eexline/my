'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FiAlertTriangle, FiTrendingDown, FiBarChart, FiSettings, FiInfo } from 'react-icons/fi'
import { useTranslations } from '@/hooks/useTranslations'

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
        <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-pattern-dense"></div>
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-6">
              <FiAlertTriangle className="text-white" size={32} />
            </div>
            <h1 className="section-title text-white mb-6 text-balance">
              {t.risk.hero.title}
            </h1>
            <p className="section-subtitle text-red-100 mb-8 text-balance">
              {t.risk.hero.description}
            </p>
          </div>
        </section>

        {/* Warning Section */}
        <section className="py-16 px-4 bg-red-50 border-b-4 border-red-200">
          <div className="container mx-auto max-w-4xl">
            <div className="card bg-red-100 border-2 border-red-300 p-6">
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
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="section-title text-center mb-12">{t.risk.risks.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {riskTypes.map((risk, idx) => {
                const Icon = risk.icon
                return (
                  <div key={idx} className="card p-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-red-100 rounded-full mb-4">
                      <Icon className="text-red-600" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {risk.title}
                    </h3>
                    <p className="text-gray-600">
                      {risk.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Recommendations Section */}
        <section className="py-16 px-4 bg-yellow-50">
          <div className="container mx-auto max-w-4xl">
            <div className="card bg-yellow-100 border-2 border-yellow-300 p-6">
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
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <div className="card p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <FiInfo className="text-gray-600" size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                    {t.risk.disclaimer.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
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

