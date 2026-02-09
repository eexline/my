'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { TelegramFunnel } from '@/components/TelegramFunnel'
import { FiCheck, FiUsers, FiClock, FiBarChart } from 'react-icons/fi'
import { useTranslations } from '@/hooks/useTranslations'

export function TelegramPageClient() {
  const t = useTranslations()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 md:py-28 px-4">
          {/* Градиентные орбы для глубины */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"></div>
          </div>
          <div className="absolute inset-0 opacity-10 bg-pattern-dense"></div>
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-balance leading-tight drop-shadow-lg">
                {t.telegram.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-10 md:mb-14 max-w-3xl mx-auto text-balance drop-shadow">
                {t.telegram.hero.description}
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative py-16 px-4 bg-white bg-pattern">
          <div className="container mx-auto max-w-6xl">
            <h2 className="section-title text-center mb-12">
              {t.telegram.benefits.title}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="card p-6 flex gap-4 hover:-translate-y-1 transition-all duration-200">
                <div className="flex-shrink-0">
                  <div className="icon-bubble">
                    <FiCheck size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {t.telegram.benefits.instant.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t.telegram.benefits.instant.description}
                  </p>
                </div>
              </div>

              <div className="card p-6 flex gap-4 hover:-translate-y-1 transition-all duration-200">
                <div className="flex-shrink-0">
                  <div className="icon-bubble">
                    <FiBarChart size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {t.telegram.benefits.analytics.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t.telegram.benefits.analytics.description}
                  </p>
                </div>
              </div>

              <div className="card p-6 flex gap-4 hover:-translate-y-1 transition-all duration-200">
                <div className="flex-shrink-0">
                  <div className="icon-bubble">
                    <FiUsers size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {t.telegram.benefits.community.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t.telegram.benefits.community.description}
                  </p>
                </div>
              </div>

              <div className="card p-6 flex gap-4 hover:-translate-y-1 transition-all duration-200">
                <div className="flex-shrink-0">
                  <div className="icon-bubble">
                    <FiClock size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {t.telegram.benefits.work24.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t.telegram.benefits.work24.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-16 px-4 bg-gray-50 bg-pattern">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="card-muted p-6">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">10,000+</div>
                <div className="text-gray-600">{t.telegram.stats.subscribers}</div>
              </div>
              <div className="card-muted p-6">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">85%+</div>
                <div className="text-gray-600">{t.telegram.stats.accuracy}</div>
              </div>
              <div className="card-muted p-6">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">1000+</div>
                <div className="text-gray-600">{t.telegram.stats.signalsPerDay}</div>
              </div>
              <div className="card-muted p-6">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-gray-600">{t.telegram.stats.support}</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <TelegramFunnel 
          title={t.telegram.funnel.title}
          description={t.telegram.funnel.description}
          buttonText={t.telegram.funnel.button}
        />
      </main>

      <Footer />
    </div>
  )
}

