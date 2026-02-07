export type Locale = 'ru' | 'en'

export const locales: Locale[] = ['ru', 'en']
export const defaultLocale: Locale = 'en' // Изменено на английский по умолчанию

// Список русскоязычных стран (ISO 3166-1 alpha-2 коды)
const russianSpeakingCountries = new Set([
  'RU', // Россия
  'BY', // Беларусь
  'KZ', // Казахстан
  'KG', // Кыргызстан
  'TJ', // Таджикистан
  'TM', // Туркменистан
  'UZ', // Узбекистан
  'MD', // Молдова
  'AM', // Армения
  'AZ', // Азербайджан
  'GE', // Грузия
  'UA', // Украина
])

/**
 * Определяет язык на основе кода страны
 * @param countryCode - ISO 3166-1 alpha-2 код страны (например, 'RU', 'US')
 * @returns 'ru' для русскоязычных стран, 'en' для всех остальных
 */
export function getLocaleFromCountry(countryCode: string | null): Locale {
  if (!countryCode) {
    return defaultLocale // Если страна не определена, возвращаем английский
  }
  
  const upperCountryCode = countryCode.toUpperCase().trim()
  
  // Если страна в списке русскоязычных, возвращаем русский
  if (russianSpeakingCountries.has(upperCountryCode)) {
    return 'ru'
  }
  
  // Для всех остальных стран - английский
  return 'en'
}

export function isValidLocale(locale: string | null): locale is Locale {
  return locale !== null && locales.includes(locale as Locale)
}

