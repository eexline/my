'use client'

import { useState, useEffect } from 'react'
import { FiSend, FiCheck, FiZap } from 'react-icons/fi'
import { useTranslations } from '@/hooks/useTranslations'
import { renderTranslation } from '@/lib/render-translation'

interface TelegramFunnelProps {
  title?: string
  description?: string
  buttonText?: string
  variant?: 'primary' | 'secondary'
}

export function TelegramFunnel({
  title,
  description,
  buttonText,
  variant = 'primary'
}: TelegramFunnelProps) {
  const t = useTranslations()
  
  const defaultTitle = t.home.hero.cta
  const defaultDescription = t.home.hero.description
  const defaultButtonText = t.common.goToTelegram
  
  const finalTitle = title || defaultTitle
  const finalDescription = description || defaultDescription
  const finalButtonText = buttonText || defaultButtonText
  const [isClicked, setIsClicked] = useState(false)

  const [telegramLink, setTelegramLink] = useState('https://t.me/your_channel')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Загружаем ссылку из API
    import('@/lib/api-client').then(({ apiClient }) => {
      apiClient.getLinks()
        .then(links => {
          if (links.telegramChannel) {
            setTelegramLink(links.telegramChannel)
          }
        })
        .catch(() => {
          // Если API недоступен, используем fallback
        })
    })
  }, [])

  const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => {
      window.open(telegramLink, '_blank')
    }, 300)
  }

  const bgColor = variant === 'primary' 
    ? 'bg-gradient-to-r from-primary-600 to-primary-700' 
    : 'bg-gradient-to-r from-gray-800 to-gray-900'
  
  const buttonBg = variant === 'primary'
        ? 'bg-white text-primary-700 hover:bg-gray-100'
        : 'bg-primary-600 text-white hover:bg-primary-700'

  return (
    <section className={`${bgColor} text-white py-16 px-4`}>
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
          {finalTitle}
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
          {renderTranslation(finalDescription, variant === 'primary' ? 'light' : 'default')}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleClick}
            className={`btn-telegram px-8 py-4 text-lg min-w-[200px] justify-center`}
          >
            {isClicked ? (
              <>
                <FiCheck size={20} />
                {t.telegram.funnel.redirecting}
              </>
            ) : (
              <>
                <FiZap size={20} />
                {finalButtonText}
              </>
            )}
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-gray-200">{t.telegram.funnel.realTime}</div>
          </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-3xl font-bold mb-2">85%+</div>
            <div className="text-gray-200">{t.telegram.funnel.accuracy}</div>
          </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-3xl font-bold mb-2">1000+</div>
            <div className="text-gray-200">{t.telegram.funnel.activeTraders}</div>
          </div>
        </div>
      </div>
    </section>
  )
}


