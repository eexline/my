import { Metadata } from 'next'
import { AppPageClient } from './page-client'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Торговые Сигналы | LT TRADE',
    description: 'Веб-приложение для получения торговых сигналов в реальном времени',
  }
}

export default function AppPage() {
  return <AppPageClient />
}

