'use client'

import Link from 'next/link'
import { useTranslations } from '@/hooks/useTranslations'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const t = useTranslations()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">{t.common.siteName}</h3>
            <p className="text-sm">
              {t.footer.description}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/strategies" className="hover:text-primary-400 transition-colors">
                  {t.nav.strategies}
                </Link>
              </li>
              <li>
                <Link href="/bot" className="hover:text-primary-400 transition-colors">
                  {t.nav.bot}
                </Link>
              </li>
              <li>
                <Link href="/broker" className="hover:text-primary-400 transition-colors">
                  {t.nav.broker}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary-400 transition-colors">
                  {t.nav.blog}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.resources}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/telegram" className="hover:text-primary-400 transition-colors">
                  {t.footer.telegramChannel}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors">
                  {t.footer.about}
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:text-primary-400 transition-colors">
                  {t.footer.contacts}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary-400 transition-colors">
                  {t.footer.terms}
                </Link>
              </li>
              <li>
                <Link href="/risk" className="hover:text-primary-400 transition-colors">
                  {t.footer.risk}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} {t.common.siteName}. {t.footer.copyright}</p>
          <p className="mt-2 text-xs text-gray-500">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  )
}


