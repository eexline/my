'use client'

import Link from 'next/link'
import { useTranslations } from '@/hooks/useTranslations'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const t = useTranslations()

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-white text-lg md:text-xl font-bold mb-3 md:mb-4">{t.common.siteName}</h3>
            <p className="text-xs md:text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">{t.footer.navigation}</h4>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/strategies" className="hover:text-blue-400 transition-colors">
                  {t.nav.strategies}
                </Link>
              </li>
              <li>
                <Link href="/bot" className="hover:text-blue-400 transition-colors">
                  {t.nav.bot}
                </Link>
              </li>
              <li>
                <Link href="/broker" className="hover:text-blue-400 transition-colors">
                  {t.nav.broker}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-400 transition-colors">
                  {t.nav.blog}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">{t.footer.resources}</h4>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
              <li>
                <Link href="/telegram" className="hover:text-blue-400 transition-colors">
                  {t.footer.telegramChannel}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  {t.footer.about}
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:text-blue-400 transition-colors">
                  {t.footer.contacts}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">{t.footer.legal}</h4>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
              <li>
                <Link href="/privacy" className="hover:text-blue-400 transition-colors">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-400 transition-colors">
                  {t.footer.terms}
                </Link>
              </li>
              <li>
                <Link href="/risk" className="hover:text-blue-400 transition-colors">
                  {t.footer.risk}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-xs md:text-sm">
          <p>&copy; {currentYear} {t.common.siteName}. {t.footer.copyright}</p>
          <p className="mt-2 text-xs text-slate-500">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  )
}


