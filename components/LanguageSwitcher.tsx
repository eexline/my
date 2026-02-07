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
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700 font-medium text-sm md:text-base"
        aria-label="Change language"
      >
        <span className="hidden sm:inline-flex items-center">
          <Image 
            src={languageFlags[locale]} 
            alt={languageNames[locale]}
            width={20}
            height={20}
            className="rounded-sm"
          />
        </span>
        <span className="hidden md:inline">{languageNames[locale]}</span>
        <FiChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => handleLanguageChange(loc)}
              className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center gap-3 ${
                locale === loc ? 'bg-primary-50 text-primary-600 font-semibold' : 'text-gray-700'
              }`}
            >
              <Image 
                src={languageFlags[loc]} 
                alt={languageNames[loc]}
                width={20}
                height={20}
                className="rounded-sm flex-shrink-0"
              />
              <span>{languageNames[loc]}</span>
              {locale === loc && (
                <span className="ml-auto text-primary-600">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

