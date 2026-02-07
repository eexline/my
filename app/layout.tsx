import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { ContentProtection } from '@/components/ContentProtection'
import { StructuredData } from '@/components/StructuredData'
import { ApiStatus } from '@/components/ApiStatus'
import { LayoutWrapper } from './layout-wrapper'
import { getLocale } from '@/lib/get-locale'

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-montserrat',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  title: {
    default: 'Pocket Option Community | Торговые Сигналы для Pocket Option',
    template: '%s | Pocket Option Community'
  },
  description: 'Pocket Option Community - Профессиональные торговые сигналы для Pocket Option. Автоматизированная торговля с точностью 85%+. Получайте сигналы в реальном времени в Telegram.',
  keywords: ['pocket option', 'pocket option community', 'торговые сигналы', 'pocket option сигналы', 'бинарные опционы', 'трейдинг', 'telegram сигналы', 'автоматическая торговля'],
  authors: [{ name: 'Pocket Option Community' }],
  creator: 'Pocket Option Community',
  publisher: 'Pocket Option Community',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    alternateLocale: ['en_US'],
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.vercel.app',
    title: 'Pocket Option Community | Торговые Сигналы для Pocket Option',
    description: 'Pocket Option Community - Профессиональные торговые сигналы для Pocket Option. Автоматизированная торговля с точностью 85%+. Получайте сигналы в реальном времени в Telegram.',
    siteName: 'Pocket Option Community',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.vercel.app'}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Pocket Option Community - Торговые Сигналы для Pocket Option',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pocket Option Community | Торговые Сигналы для Pocket Option',
    description: 'Pocket Option Community - Профессиональные торговые сигналы для Pocket Option. Автоматизированная торговля с точностью 85%+.',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.vercel.app'}/og-image.jpg`],
    creator: '@tradingsignals',
    site: '@tradingsignals',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'ZMO9Q5GngLKrPHwTOjdCcBuT5frejI_1m3uzvzd9Il4',
    yandex: '2c4327811c52d395',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale()
  
  return (
    <html lang={locale} className={montserrat.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body className="no-context-menu">
        <StructuredData />
        <ContentProtection />
        <ApiStatus />
        <LayoutWrapper initialLocale={locale}>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  )
}


