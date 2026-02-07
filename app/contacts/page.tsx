import { ContactsPageClient } from './page-client'
import { getLocale } from '@/lib/get-locale'
import { getTranslations } from '@/lib/get-translations'

export async function generateMetadata() {
  const locale = await getLocale()
  const t = await getTranslations(locale)
  
  return {
    title: `${t.contacts.hero.title} | ${t.common.siteName}`,
    description: t.contacts.hero.description,
  }
}

export default async function ContactsPage() {
  return <ContactsPageClient />
}

