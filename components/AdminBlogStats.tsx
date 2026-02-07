'use client'

import { useState, useEffect } from 'react'
import { apiClient } from '@/lib/api-client'
import { FiFileText, FiEye, FiEdit, FiTrendingUp } from 'react-icons/fi'

interface Stats {
  total: number
  published: number
  drafts: number
  totalViews: number
}

export function AdminBlogStats() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadStats()
  }, [])

  const loadStats = async () => {
    try {
      setLoading(true)
      const data = await apiClient.getBlogStats()
      setStats(data)
    } catch (err: any) {
      console.error('Failed to load stats:', err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="card p-4 animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
          </div>
        ))}
      </div>
    )
  }

  if (!stats) return null

  const statCards = [
    {
      label: 'Всего статей',
      value: stats.total,
      icon: FiFileText,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'Опубликовано',
      value: stats.published,
      icon: FiEye,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      label: 'Черновики',
      value: stats.drafts,
      icon: FiEdit,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      label: 'Всего просмотров',
      value: stats.totalViews.toLocaleString(),
      icon: FiTrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      {statCards.map((stat, index) => (
        <div key={index} className="card p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">{stat.label}</span>
            <div className={`${stat.bgColor} ${stat.color} p-2 rounded-lg`}>
              <stat.icon size={20} />
            </div>
          </div>
          <div className={`text-2xl font-bold ${stat.color}`}>
            {stat.value}
          </div>
        </div>
      ))}
    </div>
  )
}

