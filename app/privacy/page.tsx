import { PrivacyPageClient } from './page-client'
import { getLocale } from '@/lib/get-locale'
import { getTranslations } from '@/lib/get-translations'

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations(locale)
  
  return {
    title: `${t.privacy.hero.title} | ${t.common.siteName}`,
    description: t.privacy.hero.description,
  }
}

export default async function PrivacyPage() {
  return <PrivacyPageClient />
}

