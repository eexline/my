'use client'

import { useState, useEffect } from 'react'
import { apiClient } from '@/lib/api-client'
import { FiCheckCircle, FiXCircle, FiAlertCircle } from 'react-icons/fi'

export function ApiStatus() {
  const [status, setStatus] = useState<'checking' | 'online' | 'offline'>('checking')
  const [error, setError] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    checkApi()
    const interval = setInterval(checkApi, 30000) // Проверка каждые 30 секунд
    return () => clearInterval(interval)
  }, [])

  const checkApi = async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL
      if (!apiUrl) {
        setStatus('offline')
        setError('API URL не настроен')
        return
      }
      const response = await fetch(`${apiUrl}/health`)
      if (response.ok) {
        setStatus('online')
        setError('')
      } else {
        setStatus('offline')
        setError('API вернул ошибку')
      }
    } catch (err: any) {
      setStatus('offline')
      setError('API недоступен')
    }
  }

  // Не рендерим на сервере, только на клиенте
  if (!mounted || status === 'checking') {
    return null
  }

  if (status === 'offline') {
    return (
      <div className="fixed bottom-4 right-4 bg-red-50 border border-red-200 rounded-lg p-4 shadow-lg max-w-sm z-50" suppressHydrationWarning>
        <div className="flex items-start gap-3">
          <FiXCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h4 className="font-semibold text-red-900 mb-1">API недоступен</h4>
            <p className="text-sm text-red-700 mb-2">{error}</p>
          </div>
        </div>
      </div>
    )
  }

  return null
}

