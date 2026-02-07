import { HomeClient } from './page-client'
import { getLocale } from '@/lib/get-locale'
import { getTranslations } from '@/lib/translations'

export async function generateMetadata() {
  const locale = await getLocale()
  const t = getTranslations(locale)
  
  return {
    title: locale === 'ru' 
      ? 'Торговые Сигналы для Pocket Option | Профессиональные Сигналы'
      : 'Trading Signals for Pocket Option | Professional Signals',
    description: locale === 'ru'
      ? 'Профессиональные торговые сигналы для Pocket Option. Автоматизированная торговля с точностью 85%+. Получайте сигналы в реальном времени в Telegram.'
      : 'Professional trading signals for Pocket Option. Automated trading with 85%+ accuracy. Receive signals in real-time in Telegram.',
    keywords: locale === 'ru'
      ? ['pocket option', 'торговые сигналы', 'бинарные опционы', 'pocket option сигналы', 'pocket option бот']
      : ['pocket option', 'trading signals', 'binary options', 'pocket option signals', 'pocket option bot'],
  }
}

export default async function Home() {
  return <HomeClient />
}


