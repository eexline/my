'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { TelegramFunnel } from '@/components/TelegramFunnel'
import { FiMessageCircle, FiClock, FiHelpCircle } from 'react-icons/fi'
import { useTranslations } from '@/hooks/useTranslations'
import Link from 'next/link'

export function ContactsPageClient() {
  const t = useTranslations()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-pattern-dense"></div>
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h1 className="section-title text-white mb-6 text-balance">
              {t.contacts.hero.title}
            </h1>
            <p className="section-subtitle text-primary-100 mb-8 text-balance">
              {t.contacts.hero.description}
            </p>
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
                <Link href="/telegram" className="btn-primary">
                  {t.contacts.telegram.button}
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

