'use client'

import { useLocale } from '@/contexts/LocaleContext'
import { Locale, locales } from '@/lib/i18n'
import { useState, useRef, useEffect } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import Image from 'next/image'

const languageNames: Record<Locale, string> = {
  ru: 'Русский',
  en: 'English',
}

const languageFlags: Record<Locale, string> = {
  ru: '/flags/ru.svg',
  en: '/flags/gb.svg',
}

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleLanguageChange = (newLocale: Locale) => {
    setLocale(newLocale)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl hover:bg-primary-50 transition-all duration-200 text-gray-800 font-medium text-sm md:text-base border-2 border-gray-200 hover:border-primary-400 bg-white shadow-sm hover:shadow-md w-full justify-between"
        aria-label="Change language"
      >
        <div className="flex items-center gap-2.5">
          <div className="relative w-6 h-6 flex-shrink-0">
            <Image 
              src={languageFlags[locale]} 
              alt={languageNames[locale]}
              width={24}
              height={24}
              className="rounded-md w-full h-full object-contain"
              sizes="24px"
            />
          </div>
          <span className="font-semibold text-gray-900">{languageNames[locale]}</span>
        </div>
        <FiChevronDown size={18} className={`transition-transform duration-200 text-gray-500 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 left-0 mt-2 bg-white rounded-xl shadow-2xl border-2 border-gray-100 overflow-hidden z-50">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => handleLanguageChange(loc)}
              className={`w-full px-4 py-3.5 text-left hover:bg-primary-50 transition-all duration-150 flex items-center gap-3 ${
                locale === loc 
                  ? 'bg-gradient-to-r from-primary-50 to-primary-100 text-primary-700 font-semibold border-l-4 border-primary-500' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              <div className="relative w-7 h-7 flex-shrink-0">
                <Image 
                  src={languageFlags[loc]} 
                  alt={languageNames[loc]}
                  width={28}
                  height={28}
                  className="rounded-md w-full h-full object-contain"
                  sizes="28px"
                />
              </div>
              <span className="text-base font-medium flex-grow">{languageNames[loc]}</span>
              {locale === loc && (
                <span className="ml-auto text-primary-600 font-bold text-lg">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

