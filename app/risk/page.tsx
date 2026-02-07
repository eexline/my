import { RiskPageClient } from './page-client'
import { getLocale } from '@/lib/get-locale'
import { getTranslations } from '@/lib/get-translations'

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations(locale)
  
  return {
    title: `${t.risk.hero.title} | ${t.common.siteName}`,
    description: t.risk.hero.description,
  }
}

export default async function RiskPage() {
  return <RiskPageClient />
}

