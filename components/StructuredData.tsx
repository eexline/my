'use client'

import { useEffect, useState } from 'react'

export function StructuredData() {
  const [siteUrl, setSiteUrl] = useState('https://your-domain.vercel.app')
  const [telegramUrl, setTelegramUrl] = useState('https://t.me/your_channel')

  useEffect(() => {
    setSiteUrl(process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.vercel.app')
    // Можно загрузить из API, но для простоты используем env
  }, [])

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LT TRADE",
    "description": "LT TRADE - Профессиональные торговые сигналы для Pocket Option с точностью 85%+",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "sameAs": [
      telegramUrl
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": ["Russian", "English"]
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "LT TRADE",
    "url": siteUrl,
    "alternateName": "LT TRADE Trading Signals",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Торговые сигналы для бинарных опционов",
    "provider": {
      "@type": "Organization",
      "name": "LT TRADE"
    },
    "name": "Профессиональные торговые сигналы",
    "description": "Автоматизированные торговые сигналы с точностью 85%+. AI-бот анализирует рынок 24/7 и отправляет сигналы в Telegram.",
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": telegramUrl,
      "serviceType": "Telegram Channel"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Главная",
        "item": siteUrl
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}

