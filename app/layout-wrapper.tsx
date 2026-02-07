'use client'

import { LocaleProvider } from '@/contexts/LocaleContext'
import { Locale, isValidLocale } from '@/lib/i18n'

export function LayoutWrapper({ 
  children, 
  initialLocale 
}: { 
  children: React.ReactNode
  initialLocale: Locale 
}) {
  return (
    <LocaleProvider initialLocale={initialLocale}>
      {children}
    </LocaleProvider>
  )
}

