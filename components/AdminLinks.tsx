'use client'

import { useState, useEffect } from 'react'
import { apiClient } from '@/lib/api-client'
import { FiSave, FiRefreshCw, FiCheck, FiAlertCircle } from 'react-icons/fi'

export function AdminLinks() {
  const [config, setConfig] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    loadLinks()
  }, [])

  const loadLinks = async () => {
    try {
      setLoading(true)
      const links = await apiClient.getLinks()
      setConfig(links)
    } catch (err: any) {
      setError('Не удалось загрузить ссылки: ' + err.message)
      // Устанавливаем значения по умолчанию
      setConfig({
        pocketOptionRef: 'https://pocketoption.com',
        telegramChannel: 'https://t.me/your_channel',
      })
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (key: string, value: string) => {
    setConfig((prev) => ({
      ...prev,
      [key]: value,
    }))
    setSaved(false)
  }

  const handleSave = async () => {
    try {
      // Валидация URL
      const urlPattern = /^https?:\/\/.+/i
      if (config.pocketOptionRef && !urlPattern.test(config.pocketOptionRef)) {
        setError('Неверный формат URL для Pocket Option')
        return
      }
      if (config.telegramChannel && !urlPattern.test(config.telegramChannel)) {
        setError('Неверный формат URL для Telegram')
        return
      }

      setSaving(true)
      setError('')
      await apiClient.updateLinks(config)
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } catch (err: any) {
      setError('Ошибка при сохранении: ' + err.message)
    } finally {
      setSaving(false)
    }
  }

  const handleReset = async () => {
    const defaultConfig = {
      pocketOptionRef: 'https://pocketoption.com',
      telegramChannel: 'https://t.me/your_channel',
    }
    setConfig(defaultConfig)
    try {
      await apiClient.updateLinks(defaultConfig)
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } catch (err: any) {
      setError('Ошибка при сбросе: ' + err.message)
    }
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="card p-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Загрузка...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="card p-6 md:p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Управление ссылками</h2>
          <p className="text-gray-600">
            Измените реферальные ссылки и другие URL на сайте. Изменения применяются сразу после сохранения.
          </p>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2">
            <FiAlertCircle size={20} />
            {error}
          </div>
        )}

        {saved && (
          <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2">
            <FiCheck size={20} />
            Настройки сохранены успешно!
          </div>
        )}

        <div className="space-y-6">
          {/* Pocket Option Link */}
          <div>
            <label htmlFor="pocketOptionRef" className="block text-sm font-semibold text-gray-700 mb-2">
              Реферальная ссылка Pocket Option
            </label>
            <input
              id="pocketOptionRef"
              type="url"
              value={config.pocketOptionRef || ''}
              onChange={(e) => handleChange('pocketOptionRef', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="https://pocketoption.com/?ref=YOUR_CODE"
            />
            <p className="mt-2 text-sm text-gray-500">
              Все упоминания "Pocket Option" на сайте будут вести на эту ссылку
            </p>
          </div>

          {/* Telegram Channel */}
          <div>
            <label htmlFor="telegramChannel" className="block text-sm font-semibold text-gray-700 mb-2">
              Ссылка на Telegram канал
            </label>
            <input
              id="telegramChannel"
              type="url"
              value={config.telegramChannel || ''}
              onChange={(e) => handleChange('telegramChannel', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="https://t.me/your_channel"
            />
            <p className="mt-2 text-sm text-gray-500">
              Ссылка на ваш Telegram канал для получения сигналов
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleSave}
            disabled={saving}
            className="btn-primary flex-1 px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FiSave size={18} />
            {saving ? 'Сохранение...' : 'Сохранить изменения'}
          </button>
          <button
            onClick={handleReset}
            disabled={saving}
            className="btn bg-gray-100 text-gray-800 px-6 py-3 hover:bg-gray-200 disabled:opacity-50"
          >
            <FiRefreshCw size={18} />
            Сбросить
          </button>
        </div>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Важно:</strong> После сохранения изменения применяются сразу. 
            Обновите страницы сайта, чтобы увидеть обновленные ссылки.
          </p>
        </div>
      </div>
    </div>
  )
}
