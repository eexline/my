'use client'

import { ReactNode, useState, useEffect } from 'react'
import { apiClient } from '@/lib/api-client'

interface PocketOptionLinkProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'underline' | 'button' | 'light'
  target?: '_blank' | '_self'
}

// Fallback ссылка, если API недоступен
const FALLBACK_LINK = 'https://pocketoption.com'

export function PocketOptionLink({ 
  children, 
  className = '', 
  variant = 'default',
  target = '_blank'
}: PocketOptionLinkProps) {
  const [link, setLink] = useState<string>(FALLBACK_LINK)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Загружаем ссылку из API
    apiClient.getLinks()
      .then(links => {
        if (links && links.pocketOptionRef) {
          setLink(links.pocketOptionRef)
        } else {
          // Если ссылка не найдена, используем fallback
          setLink(FALLBACK_LINK)
        }
      })
      .catch((error) => {
        // Если API недоступен, используем fallback
        console.warn('Failed to load Pocket Option link from API:', error)
        setLink(FALLBACK_LINK)
      })
  }, [])

  const baseClasses = 'text-primary-600 hover:text-primary-700 transition-colors font-semibold'
  
  const variantClasses = {
    default: baseClasses,
    underline: baseClasses,
    button: 'btn-primary',
    light: 'text-white hover:text-primary-100 transition-colors font-semibold'
  }

  const finalClassName = variant === 'default' 
    ? `${baseClasses} ${className}` 
    : `${variantClasses[variant]} ${className}`

  return (
    <a
      href={link}
      target={target}
      rel="noopener noreferrer"
      className={finalClassName}
      suppressHydrationWarning
    >
      {children}
    </a>
  )
}

