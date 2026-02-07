import { cookies, headers } from 'next/headers'
import { Locale, defaultLocale, isValidLocale, getLocaleFromCountry } from './i18n'

export async function getLocale(): Promise<Locale> {
  // Сначала проверяем cookies (выбор пользователя)
  const cookieStore = await cookies()
  const cookieLocale = cookieStore.get('locale')?.value ?? null
  
  if (cookieLocale && isValidLocale(cookieLocale)) {
    return cookieLocale
  }
  
  // Определяем страну из заголовков хостинга
  const headersList = await headers()
  
  // Cloudflare заголовок
  const cfCountry = headersList.get('cf-ipcountry')
  // Vercel заголовок
  const vercelCountry = headersList.get('x-vercel-ip-country')
  
  const country = cfCountry || vercelCountry
  
  if (country) {
    return getLocaleFromCountry(country)
  }
  
  // Если заголовки страны недоступны, используем IP-геолокацию через заголовок IP
  const forwardedFor = headersList.get('x-forwarded-for')
  const realIp = headersList.get('x-real-ip')
  const ip = forwardedFor?.split(',')[0] || realIp
  
  if (ip) {
    // Используем fallback - определяем по IP через внешний API (опционально)
    // Пока возвращаем английский по умолчанию, если страна не определена
    return 'en'
  }
  
  // Если ничего не помогло, возвращаем английский (как просил пользователь)
  return 'en'
}

