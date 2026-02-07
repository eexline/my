'use client'

import dynamic from 'next/dynamic'
import { FiTrendingUp, FiShield, FiZap, FiBarChart2, FiArrowRight, FiDollarSign } from 'react-icons/fi'
import Link from 'next/link'
import { useTranslations } from '@/hooks/useTranslations'
import { renderTranslation } from '@/lib/render-translation'
import { AnimatedCounter } from '@/components/AnimatedCounter'

// Code splitting для тяжелых компонентов
const Header = dynamic(() => import('@/components/Header').then(mod => ({ default: mod.Header })), { 
  ssr: true,
  loading: () => <div className="h-16 bg-white border-b border-gray-200 animate-pulse" />
})
const Footer = dynamic(() => import('@/components/Footer').then(mod => ({ default: mod.Footer })), { 
  ssr: true,
  loading: () => <div className="h-32 bg-gray-50 animate-pulse" />
})
const TelegramFunnel = dynamic(() => import('@/components/TelegramFunnel').then(mod => ({ default: mod.TelegramFunnel })), { 
  ssr: true 
})
const PocketOptionLink = dynamic(() => import('@/components/PocketOptionLink').then(mod => ({ default: mod.PocketOptionLink })), { 
  ssr: true 
})

export function HomeClient() {
  const t = useTranslations()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100 py-12 md:py-20 px-4">
          <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.20),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.18),transparent_50%),radial-gradient(circle_at_60%_80%,rgba(2,132,199,0.12),transparent_55%)]" />
          <div className="container mx-auto max-w-6xl">
            <div className="relative text-center mb-8 md:mb-12">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 text-balance">
                {renderTranslation(t.home.hero.title)}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 md:mb-8 max-w-3xl mx-auto text-balance px-4">
                {renderTranslation(t.home.hero.description)}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                <Link
                  href="/telegram"
                  className="btn-primary px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
                >
                  <FiZap size={20} />
                  {t.home.hero.cta}
                </Link>
                <Link
                  href="/bot"
                  className="btn-secondary px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
                >
                  {t.home.hero.ctaSecondary}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-8 md:py-12 px-4 bg-white border-b border-gray-200">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                href="/strategies"
                className="group card p-4 md:p-6 text-center h-full hover:-translate-y-0.5 transition-transform"
              >
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">4+</div>
                <div className="text-sm md:text-base text-gray-700 font-medium">{t.home.quickLinks.strategies}</div>
                <div className="mt-3 text-sm text-primary-700 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {t.common.learnMore} <FiArrowRight className="inline" />
                </div>
              </Link>
              <Link
                href="/bot"
                className="group card p-4 md:p-6 text-center h-full hover:-translate-y-0.5 transition-transform"
              >
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">AI</div>
                <div className="text-sm md:text-base text-gray-700 font-medium">{t.home.quickLinks.bot}</div>
                <div className="mt-3 text-sm text-primary-700 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {t.common.learnMore} <FiArrowRight className="inline" />
                </div>
              </Link>
              <Link
                href="/broker"
                className="group card p-4 md:p-6 text-center h-full hover:-translate-y-0.5 transition-transform"
              >
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">92%</div>
                <div className="text-sm md:text-base text-gray-700 font-medium">{t.home.quickLinks.payouts}</div>
                <div className="mt-3 text-sm text-primary-700 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {t.common.learnMore} <FiArrowRight className="inline" />
                </div>
              </Link>
              <Link
                href="/telegram"
                className="group card p-4 md:p-6 text-center h-full hover:-translate-y-0.5 transition-transform"
              >
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">24/7</div>
                <div className="text-sm md:text-base text-gray-700 font-medium">{t.home.quickLinks.signals}</div>
                <div className="mt-3 text-sm text-primary-700 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {t.common.learnMore} <FiArrowRight className="inline" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-12 md:py-16 px-4 bg-white bg-pattern">
          <div className="container mx-auto max-w-6xl">
            <h2 className="section-title text-center mb-8 md:mb-12">{t.home.features.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="card p-5 md:p-6 text-center hover:bg-gray-50 group flex flex-col">
                <div className="mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FiTrendingUp size={32} className="md:w-10 md:h-10 text-primary-600" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">{t.home.features.accuracy.title}</h3>
                <p className="text-sm md:text-base text-gray-600 flex-grow mb-4">
                  {renderTranslation(t.home.features.accuracy.description)}
                </p>
                <div className="flex justify-center">
                  <Link href="/bot" className="link-primary text-sm">
                    {t.home.features.accuracy.link} <FiArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="card p-5 md:p-6 text-center hover:bg-gray-50 group flex flex-col">
                <div className="mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FiZap size={32} className="md:w-10 md:h-10 text-primary-600" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">{t.home.features.instant.title}</h3>
                <p className="text-sm md:text-base text-gray-600 flex-grow mb-4">
                  {renderTranslation(t.home.features.instant.description)}
                </p>
                <div className="flex justify-center">
                  <Link href="/telegram" className="link-primary text-sm">
                    {t.home.features.instant.link} <FiArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="card p-5 md:p-6 text-center hover:bg-gray-50 group flex flex-col">
                <div className="mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FiShield size={32} className="md:w-10 md:h-10 text-primary-600" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">{t.home.features.security.title}</h3>
                <p className="text-sm md:text-base text-gray-600 flex-grow mb-4">
                  {renderTranslation(t.home.features.security.description)}
                </p>
                <div className="flex justify-center">
                  <Link href="/broker" className="link-primary text-sm">
                    {t.home.features.security.link} <FiArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="card p-5 md:p-6 text-center hover:bg-gray-50 group flex flex-col">
                <div className="mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FiBarChart2 size={32} className="md:w-10 md:h-10 text-primary-600" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">{t.home.features.analytics.title}</h3>
                <p className="text-sm md:text-base text-gray-600 flex-grow mb-4">
                  {renderTranslation(t.home.features.analytics.description)}
                </p>
                <div className="flex justify-center">
                  <Link href="/strategies" className="link-primary text-sm">
                    {t.home.features.analytics.link} <FiArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-12 md:py-16 px-4 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-pattern-dense"></div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
              <div className="relative">
                <div className="absolute inset-0 bg-white/5 rounded-xl blur-xl"></div>
                <div className="relative px-4 py-6 border-r border-white/10 md:border-r md:border-b-0 border-b">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-br from-white to-primary-100 bg-clip-text text-transparent">
                    <AnimatedCounter value={10000} suffix="+" className="bg-gradient-to-br from-white to-primary-100 bg-clip-text text-transparent" />
                  </div>
                  <div className="text-sm md:text-base text-primary-100">{t.home.stats.users}</div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-white/5 rounded-xl blur-xl"></div>
                <div className="relative px-4 py-6 border-r border-white/10 md:border-r md:border-b-0 border-b">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-br from-white to-primary-100 bg-clip-text text-transparent">
                    <AnimatedCounter value={85} suffix="%" className="bg-gradient-to-br from-white to-primary-100 bg-clip-text text-transparent" />
                  </div>
                  <div className="text-sm md:text-base text-primary-100">{t.home.stats.accuracy}</div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-white/5 rounded-xl blur-xl"></div>
                <div className="relative px-4 py-6 border-r border-white/10 md:border-r md:border-b-0 border-b">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-br from-white to-primary-100 bg-clip-text text-transparent">24/7</div>
                  <div className="text-sm md:text-base text-primary-100">{t.home.stats.support}</div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-white/5 rounded-xl blur-xl"></div>
                <div className="relative px-4 py-6">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-br from-white to-primary-100 bg-clip-text text-transparent">
                    <AnimatedCounter value={1000} suffix="+" className="bg-gradient-to-br from-white to-primary-100 bg-clip-text text-transparent" />
                  </div>
                  <div className="text-sm md:text-base text-primary-100">{t.home.stats.signalsPerDay}</div>
                </div>
              </div>
            </div>
            <div className="mt-8 md:mt-12 text-center">
              <Link
                href="/telegram"
                className="btn-primary bg-primary-500 text-white hover:bg-primary-400 text-base md:text-lg shadow-xl hover:shadow-2xl px-6 md:px-8 py-3 md:py-4"
              >
                {t.home.stats.join}
                <FiZap size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 md:py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="section-title text-center mb-8 md:mb-12">{t.home.howItWorks.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="card p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">{t.home.howItWorks.step1.title}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">
                  {t.home.howItWorks.step1.description}
                </p>
                <Link href="/telegram" className="text-primary-600 hover:text-primary-700 text-sm font-semibold">
                  {t.home.howItWorks.step1.link}
                </Link>
              </div>
              <div className="card p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">{t.home.howItWorks.step2.title}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">
                  {t.home.howItWorks.step2.description}
                </p>
                <Link href="/bot" className="text-primary-600 hover:text-primary-700 text-sm font-semibold">
                  {t.home.howItWorks.step2.link}
                </Link>
              </div>
              <div className="card p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900">{t.home.howItWorks.step3.title}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">
                  {t.home.howItWorks.step3.description}
                </p>
                <Link href="/broker" className="text-primary-600 hover:text-primary-700 text-sm font-semibold">
                  {t.home.howItWorks.step3.link}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="relative py-12 md:py-16 px-4 bg-gray-50 bg-pattern">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="section-title mb-3">{t.common.learnMore}</h2>
              <p className="section-subtitle max-w-3xl mx-auto">{t.home.hero.ctaSecondary}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <Link href="/strategies" className="group card p-6 h-full flex flex-col hover:-translate-y-1 transition-all duration-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{renderTranslation(t.home.additionalInfo.strategies.title)}</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base flex-grow">
                  {renderTranslation(t.home.additionalInfo.strategies.description)}
                </p>
                <div className="flex justify-center">
                  <span className="link-primary text-sm inline-flex items-center gap-1">
                    {t.home.additionalInfo.strategies.link}
                    <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
              <Link href="/bot" className="group card p-6 h-full flex flex-col hover:-translate-y-1 transition-all duration-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{renderTranslation(t.home.additionalInfo.bot.title)}</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base flex-grow">
                  {renderTranslation(t.home.additionalInfo.bot.description)}
                </p>
                <div className="flex justify-center">
                  <span className="link-primary text-sm inline-flex items-center gap-1">
                    {t.home.additionalInfo.bot.link}
                    <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
              <Link href="/broker" className="group card p-6 h-full flex flex-col hover:-translate-y-1 transition-all duration-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{renderTranslation(t.home.additionalInfo.broker.title)}</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base flex-grow">
                  {renderTranslation(t.home.additionalInfo.broker.description)}
                </p>
                <div className="flex justify-center">
                  <span className="link-primary text-sm inline-flex items-center gap-1">
                    {t.home.additionalInfo.broker.link}
                    <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Telegram Funnel */}
        <TelegramFunnel />
      </main>

      <Footer />
    </div>
  )
}

