'use client'

import { useLocale } from '@/contexts/LocaleContext'
import { getTranslations } from '@/lib/translations'
import { Translations } from '@/lib/translations'

export function useTranslations(): Translations {
  const { locale } = useLocale()
  return getTranslations(locale)
}

