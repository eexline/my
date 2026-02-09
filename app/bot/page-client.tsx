'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { TelegramFunnel } from '@/components/TelegramFunnel'
import { PocketOptionLink } from '@/components/PocketOptionLink'
import Link from 'next/link'
import { FiArrowRight, FiCheck, FiZap, FiCpu, FiShield, FiBarChart, FiClock, FiTrendingUp } from 'react-icons/fi'
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
                {renderTranslation(t.bot.hero.title.replace('Pocket Option', '<PocketOptionLink>Pocket Option</PocketOptionLink>'), 'light')}
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-10 md:mb-14 max-w-3xl mx-auto text-balance drop-shadow">
                {renderTranslation(t.bot.hero.description, 'light')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/telegram"
                  className="btn-telegram"
                >
                  {t.bot.hero.cta}
                  <FiZap size={20} />
                </Link>
                <Link
                  href="/strategies"
                  className="btn-secondary bg-white/10 backdrop-blur-md text-white border-2 border-white/30 hover:bg-white/20 hover:border-white/50 px-8 py-4 text-lg font-semibold shadow-xl"
                >
                  {t.bot.hero.ctaSecondary}
                  <FiArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-12 md:py-16 px-4 bg-white bg-pattern">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
              <div className="card-muted p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">85%+</div>
                <div className="text-gray-700 text-sm md:text-base">{t.bot.stats.accuracy}</div>
              </div>
              <div className="card-muted p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">1000+</div>
                <div className="text-gray-700 text-sm md:text-base">{t.bot.stats.signalsPerDay}</div>
              </div>
              <div className="card-muted p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-gray-700 text-sm md:text-base">{t.bot.stats.work}</div>
              </div>
              <div className="card-muted p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">&lt;1с</div>
                <div className="text-gray-700 text-sm md:text-base">{t.bot.stats.delay}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-12 md:py-16 px-4 bg-gray-50 bg-pattern">
          <div className="container mx-auto max-w-6xl">
            <h2 className="section-title text-center mb-8 md:mb-12">
              {t.bot.features.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="card p-6 hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon size={32} className="md:w-10 md:h-10 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {renderTranslation(feature.description, 'default')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="relative py-12 md:py-16 px-4 bg-white bg-pattern">
          <div className="container mx-auto max-w-6xl">
            <h2 className="section-title text-center mb-8 md:mb-12">
              {t.bot.howItWorks.title}
            </h2>
            <div className="space-y-6 md:space-y-8">
              {howItWorks.map((item) => (
                <div
                  key={item.step}
                  className="flex flex-col md:flex-row gap-6 card-muted p-6 md:p-8 hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-md">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="relative py-12 md:py-16 px-4 bg-primary-50 bg-pattern">
          <div className="container mx-auto max-w-6xl">
            <h2 className="section-title text-center mb-8 md:mb-12">
              {t.bot.technologies.title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="card p-4 text-center hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="text-gray-700 font-medium text-sm md:text-base">
                    {tech}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Signal Example */}
        <section className="relative py-12 md:py-16 px-4 bg-white bg-pattern">
          <div className="container mx-auto max-w-4xl">
            <h2 className="section-title text-center mb-8 md:mb-12">
              {t.bot.example.title}
            </h2>
            <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-primary-400 pb-4">
                  <span className="text-primary-200">{t.bot.example.asset}</span>
                  <span className="text-xl font-bold">EUR/USD</span>
                </div>
                <div className="flex items-center justify-between border-b border-primary-400 pb-4">
                  <span className="text-primary-200">{t.bot.example.direction}</span>
                  <span className="text-xl font-bold bg-white text-primary-600 px-4 py-2 rounded-lg">
                    CALL (UP)
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-primary-400 pb-4">
                  <span className="text-primary-200">{t.bot.example.entryLevel}</span>
                  <span className="text-xl font-bold">1.0850</span>
                </div>
                <div className="flex items-center justify-between border-b border-primary-400 pb-4">
                  <span className="text-primary-200">{t.bot.example.target}</span>
                  <span className="text-xl font-bold">1.0865</span>
                </div>
                <div className="flex items-center justify-between border-b border-primary-400 pb-4">
                  <span className="text-primary-200">{t.bot.example.stopLoss}</span>
                  <span className="text-xl font-bold">1.0840</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-primary-200">{t.bot.example.probability}</span>
                  <span className="text-2xl font-bold">87%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative py-12 md:py-16 px-4 bg-gray-50 bg-pattern">
          <div className="container mx-auto max-w-4xl">
            <h2 className="section-title text-center mb-8 md:mb-12">
              {t.bot.faq.title}
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="card p-6 hover:-translate-y-1 transition-all duration-200">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <TelegramFunnel 
          title={t.bot.funnel.title}
          description={t.bot.funnel.description}
          buttonText={t.bot.hero.cta}
        />
      </main>

      <Footer />
    </div>
  )
}

