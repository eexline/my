import { TermsPageClient } from './page-client'
import { getLocale } from '@/lib/get-locale'
import { getTranslations } from '@/lib/get-translations'

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations(locale)
  
  return {
    title: `${t.terms.hero.title} | ${t.common.siteName}`,
    description: t.terms.hero.description,
  }
}

export default async function TermsPage() {
  return <TermsPageClient />
}

