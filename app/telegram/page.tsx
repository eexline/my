import { TelegramPageClient } from './page-client'
import { getLocale } from '@/lib/get-locale'

export const metadata = {
  title: 'Telegram Канал | Торговые Сигналы',
  description: 'Присоединяйтесь к нашему Telegram каналу и получайте торговые сигналы в реальном времени. Высокая точность, мгновенные уведомления.',
}

export default async function TelegramPage() {
  return <TelegramPageClient />
}


