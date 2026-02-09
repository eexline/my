'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { TelegramFunnel } from '@/components/TelegramFunnel'
import { FiMessageCircle, FiClock, FiHelpCircle, FiZap } from 'react-icons/fi'
import { useTranslations } from '@/hooks/useTranslations'
import Link from 'next/link'

export function ContactsPageClient() {
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
                {t.contacts.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 mb-10 md:mb-14 max-w-3xl mx-auto text-balance drop-shadow">
                {t.contacts.hero.description}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-full mb-4">
                  <FiMessageCircle className="text-primary-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t.contacts.telegram.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {t.contacts.telegram.description}
                </p>
                <Link href="/telegram" className="btn-telegram-light">
                  {t.contacts.telegram.button}
                  <FiZap size={20} />
                </Link>
              </div>
              <div className="card p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-full mb-4">
                  <FiHelpCircle className="text-primary-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t.contacts.support.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t.contacts.support.description}
                </p>
              </div>
              <div className="card p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-full mb-4">
                  <FiClock className="text-primary-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t.contacts.hours.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t.contacts.hours.description}
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

