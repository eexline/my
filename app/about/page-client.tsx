'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { TelegramFunnel } from '@/components/TelegramFunnel'
import { FiTarget, FiUsers, FiEye, FiTrendingUp, FiHeadphones } from 'react-icons/fi'
import { useTranslations } from '@/hooks/useTranslations'
import Link from 'next/link'

export function AboutPageClient() {
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
                {t.about.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-10 md:mb-14 max-w-3xl mx-auto text-balance drop-shadow">
                {t.about.hero.description}
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                <FiTarget className="text-primary-600" size={32} />
              </div>
              <h2 className="section-title mb-4">{t.about.mission.title}</h2>
              <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                {t.about.mission.description}
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                <FiUsers className="text-primary-600" size={32} />
              </div>
              <h2 className="section-title mb-4">{t.about.team.title}</h2>
              <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                {t.about.team.description}
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="section-title text-center mb-12">{t.about.values.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-full mb-4">
                  <FiEye className="text-primary-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t.about.values.transparency.title}
                </h3>
                <p className="text-gray-600">
                  {t.about.values.transparency.description}
                </p>
              </div>
              <div className="card p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-full mb-4">
                  <FiTrendingUp className="text-primary-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t.about.values.accuracy.title}
                </h3>
                <p className="text-gray-600">
                  {t.about.values.accuracy.description}
                </p>
              </div>
              <div className="card p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-full mb-4">
                  <FiHeadphones className="text-primary-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t.about.values.support.title}
                </h3>
                <p className="text-gray-600">
                  {t.about.values.support.description}
                </p>
              </div>
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

