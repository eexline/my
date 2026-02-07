import { Locale } from '@/lib/i18n'
import { ru } from './ru'
import { en } from './en'

export const translations = {
  ru,
  en,
} as const

export function getTranslations(locale: Locale) {
  return translations[locale]
}

export type Translations = typeof ru

