'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { apiClient } from '@/lib/api-client'
import { AdminLinks } from '@/components/AdminLinks'
import { AdminBlogsEnhanced } from '@/components/AdminBlogsEnhanced'
import { AdminContentProtection } from '@/components/AdminContentProtection'
import { FiLock, FiLogOut, FiLink, FiFileText } from 'react-icons/fi'

export default function AdminPage() {
  const router = useRouter()
  const [auth, setAuth] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState<'links' | 'blogs'>('links')

  useEffect(() => {
    // Проверяем токен при загрузке
    const checkAuth = async () => {
      try {
        await apiClient.verify()
        setAuth(true)
      } catch {
        apiClient.clearToken()
      }
    }
    checkAuth()
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      await apiClient.login(username, password)
      setAuth(true)
    } catch (err: any) {
      setError(err.message || 'Ошибка входа')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    apiClient.clearToken()
    setAuth(false)
    setUsername('')
    setPassword('')
    router.push('/')
  }

  if (!auth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full card p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
              <FiLock size={32} className="text-primary-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Админ-панель</h1>
            <p className="text-gray-600">Введите пароль для доступа</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Имя пользователя
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Введите имя пользователя"
                autoFocus
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Пароль
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Введите пароль"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-2 px-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Вход...' : 'Войти'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Подключитесь к API серверу</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminContentProtection />
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Админ-панель</h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <FiLogOut size={18} />
              Выйти
            </button>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex space-x-1">
            <button
              onClick={() => setActiveTab('links')}
              className={`flex items-center gap-2 px-6 py-4 border-b-2 font-semibold transition-colors ${
                activeTab === 'links'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <FiLink size={18} />
              Ссылки
            </button>
            <button
              onClick={() => setActiveTab('blogs')}
              className={`flex items-center gap-2 px-6 py-4 border-b-2 font-semibold transition-colors ${
                activeTab === 'blogs'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <FiFileText size={18} />
              Блог
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'links' && <AdminLinks />}
        {activeTab === 'blogs' && <AdminBlogsEnhanced />}
      </main>
    </div>
  )
}

