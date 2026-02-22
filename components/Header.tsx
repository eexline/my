'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'
import { LanguageSwitcher } from './LanguageSwitcher'
import { useTranslations } from '@/hooks/useTranslations'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const t = useTranslations()

  // Закрытие dropdown при клике вне его
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-slate-800/50 shadow-lg">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl md:text-2xl font-bold text-white hover:text-blue-300 transition-colors flex items-center gap-2">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                {t.common.siteName}
              </span>
            </Link>
            
            {/* Desktop Menu - Только важное на виду */}
            <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
              {/* Основные CTA */}
              <Link 
                href="/app" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 lg:px-6 py-2 rounded-lg text-sm lg:text-base whitespace-nowrap font-semibold transition-colors shadow-lg shadow-blue-600/30"
              >
                {t.home.hero.ctaWebApp}
              </Link>
              <Link 
                href="/telegram" 
                className="btn-telegram px-4 lg:px-6 py-2 text-sm lg:text-base whitespace-nowrap"
              >
                {t.nav.telegram}
              </Link>
              
              {/* Dropdown меню для остального */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors text-sm lg:text-base font-medium px-3 py-2 rounded-lg hover:bg-slate-800/50"
                >
                  <span>{t.nav.menu}</span>
                  <FiChevronDown size={16} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-slate-800/95 backdrop-blur-lg rounded-lg border border-slate-700/50 shadow-xl py-2 z-50">
                    <div className="px-3 py-2 border-b border-slate-700/50">
                      <p className="text-xs text-slate-400 uppercase font-semibold">{t.nav.main}</p>
                    </div>
                    <Link 
                      href="/bot" 
                      className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors text-sm"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {t.nav.bot}
                    </Link>
                    <Link 
                      href="/strategies" 
                      className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors text-sm"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {t.nav.strategies}
                    </Link>
                    <Link 
                      href="/broker" 
                      className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors text-sm"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {t.nav.broker}
                    </Link>
                    <Link 
                      href="/blog" 
                      className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors text-sm"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {t.nav.blog}
                    </Link>
                    
                    <div className="px-3 py-2 mt-2 border-t border-slate-700/50">
                      <p className="text-xs text-slate-400 uppercase font-semibold mb-1">{t.nav.info}</p>
                    </div>
                    <Link 
                      href="/about" 
                      className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors text-sm"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {t.nav.about}
                    </Link>
                    <Link 
                      href="/contacts" 
                      className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors text-sm"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {t.nav.contacts}
                    </Link>
                    
                    <div className="px-3 py-2 mt-2 border-t border-slate-700/50">
                      <p className="text-xs text-slate-400 uppercase font-semibold mb-1">{t.nav.legal}</p>
                    </div>
                    <Link 
                      href="/privacy" 
                      className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors text-sm"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {t.nav.privacy}
                    </Link>
                    <Link 
                      href="/terms" 
                      className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors text-sm"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {t.nav.terms}
                    </Link>
                    <Link 
                      href="/risk" 
                      className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors text-sm"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {t.nav.risk}
                    </Link>
                  </div>
                )}
              </div>
              
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </nav>
      </header>
      
      {/* Mobile Menu - вынесен за пределы header для правильного позиционирования */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          {/* Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-slate-900/98 backdrop-blur-lg z-[70] md:hidden flex flex-col shadow-2xl border-l border-slate-800/50">
              {/* Header with close button */}
              <div className="flex items-center justify-between p-4 border-b border-slate-800/50">
                <Link 
                  href="/" 
                  className="text-xl font-bold text-white hover:text-blue-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    {t.common.siteName}
                  </span>
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-300 hover:text-white transition-colors p-2"
                  aria-label="Close menu"
                >
                  <FiX size={24} />
                </button>
              </div>
              
              {/* Scrollable content */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-4 space-y-3">
                  {/* Основные CTA наверху */}
                  <Link 
                    href="/app" 
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-center font-semibold rounded-lg transition-colors shadow-lg shadow-blue-600/30"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t.home.hero.ctaWebApp}
                  </Link>
                  <Link 
                    href="/telegram" 
                    className="btn-telegram w-full px-6 py-3 text-center font-semibold"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t.nav.telegram}
                  </Link>
                  
                  <div className="pt-2">
                    <LanguageSwitcher />
                  </div>
                  
                  <div className="pt-4 mt-4 border-t border-slate-700/50">
                    <p className="text-xs text-slate-400 uppercase font-semibold mb-2 px-2">{t.nav.main}</p>
                    <Link 
                      href="/bot" 
                      className="block py-2.5 px-4 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors rounded-lg font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t.nav.bot}
                    </Link>
                    <Link 
                      href="/strategies" 
                      className="block py-2.5 px-4 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors rounded-lg font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t.nav.strategies}
                    </Link>
                    <Link 
                      href="/broker" 
                      className="block py-2.5 px-4 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors rounded-lg font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t.nav.broker}
                    </Link>
                    <Link 
                      href="/blog" 
                      className="block py-2.5 px-4 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors rounded-lg font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t.nav.blog}
                    </Link>
                  </div>
                  
                  <div className="pt-4 mt-2 border-t border-slate-700/50">
                    <p className="text-xs text-slate-400 uppercase font-semibold mb-2 px-2">{t.nav.info}</p>
                    <Link 
                      href="/about" 
                      className="block py-2.5 px-4 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors rounded-lg font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t.nav.about}
                    </Link>
                    <Link 
                      href="/contacts" 
                      className="block py-2.5 px-4 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors rounded-lg font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t.nav.contacts}
                    </Link>
                  </div>
                  
                  <div className="pt-4 mt-2 border-t border-slate-700/50">
                    <p className="text-xs text-slate-400 uppercase font-semibold mb-2 px-2">{t.nav.legal}</p>
                    <Link 
                      href="/privacy" 
                      className="block py-2.5 px-4 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors rounded-lg font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t.nav.privacy}
                    </Link>
                    <Link 
                      href="/terms" 
                      className="block py-2.5 px-4 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors rounded-lg font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t.nav.terms}
                    </Link>
                    <Link 
                      href="/risk" 
                      className="block py-2.5 px-4 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors rounded-lg font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t.nav.risk}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
    </>
  )
}


