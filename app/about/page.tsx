import { AboutPageClient } from './page-client'
import { getLocale } from '@/lib/get-locale'
import { getTranslations } from '@/lib/get-translations'

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations(locale)
  
  return {
    title: `${t.about.hero.title} | ${t.common.siteName}`,
    description: t.about.hero.description,
  }
}

export default async function AboutPage() {
  return <AboutPageClient />
}

