'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FiShield, FiInfo, FiLock, FiSettings, FiUser } from 'react-icons/fi'
import { useTranslations } from '@/hooks/useTranslations'
import { useLocale } from '@/contexts/LocaleContext'

export function PrivacyPageClient() {
  const t = useTranslations()
  const { locale } = useLocale()
  const [currentDate, setCurrentDate] = useState<string>('')

  useEffect(() => {
    const date = new Date().toLocaleDateString(locale === 'en' ? 'en-US' : 'ru-RU', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
    setCurrentDate(date)
  }, [locale])

  const sections = [
    {
      icon: FiInfo,
      title: t.privacy.sections.dataCollection.title,
      content: t.privacy.sections.dataCollection.content,
    },
    {
      icon: FiShield,
      title: t.privacy.sections.dataUsage.title,
      content: t.privacy.sections.dataUsage.content,
    },
    {
      icon: FiLock,
      title: t.privacy.sections.dataProtection.title,
      content: t.privacy.sections.dataProtection.content,
    },
    {
      icon: FiSettings,
      title: t.privacy.sections.cookies.title,
      content: t.privacy.sections.cookies.content,
    },
    {
      icon: FiUser,
      title: t.privacy.sections.rights.title,
      content: t.privacy.sections.rights.content,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-pattern-dense"></div>
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h1 className="section-title text-white mb-6 text-balance">
              {t.privacy.hero.title}
            </h1>
            <p className="section-subtitle text-primary-100 mb-8 text-balance">
              {t.privacy.hero.description}
            </p>
            <p className="text-primary-200 text-sm" suppressHydrationWarning>
              {t.privacy.lastUpdated}: {currentDate || ''}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-8">
              {sections.map((section, idx) => {
                const Icon = section.icon
                return (
                  <div key={idx} className="card p-6">
                    <div className="flex gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full">
                          <Icon className="text-primary-600" size={24} />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                          {section.title}
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

