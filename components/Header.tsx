'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { LanguageSwitcher } from './LanguageSwitcher'
import { useTranslations } from '@/hooks/useTranslations'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = useTranslations()

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl md:text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
            {t.common.siteName}
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors text-sm lg:text-base">
              {t.nav.home}
            </Link>
            <Link href="/strategies" className="text-gray-700 hover:text-primary-600 transition-colors text-sm lg:text-base">
              {t.nav.strategies}
            </Link>
            <Link href="/bot" className="text-gray-700 hover:text-primary-600 transition-colors text-sm lg:text-base">
              {t.nav.bot}
            </Link>
            <Link href="/broker" className="text-gray-700 hover:text-primary-600 transition-colors text-sm lg:text-base">
              {t.nav.broker}
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary-600 transition-colors text-sm lg:text-base">
              {t.nav.blog}
            </Link>
            <Link 
              href="/telegram" 
              className="btn-primary px-4 lg:px-6 py-2 text-sm lg:text-base whitespace-nowrap"
            >
              {t.nav.telegram}
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <Link 
              href="/" 
              className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.home}
            </Link>
            <Link 
              href="/strategies" 
              className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.strategies}
            </Link>
            <Link 
              href="/bot" 
              className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.bot}
            </Link>
            <Link 
              href="/broker" 
              className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.broker}
            </Link>
            <Link 
              href="/blog" 
              className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.blog}
            </Link>
            <Link 
              href="/telegram" 
              className="btn-primary w-full px-6 py-3 text-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.telegram}
            </Link>
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}


