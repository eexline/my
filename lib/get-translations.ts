import { Locale } from './i18n'
import { ru } from './translations/ru'
import { en } from './translations/en'

export function getTranslations(locale: Locale) {
  return locale === 'en' ? en : ru
}

