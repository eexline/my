'use client'

import { ReactNode } from 'react'
import { FiCheckCircle, FiShield, FiTrendingUp, FiBarChart2 } from 'react-icons/fi'

interface TrustBadgeProps {
  text: string
  variant?: 'success' | 'primary' | 'info'
  icon?: ReactNode
  className?: string
}

export function TrustBadge({ text, variant = 'success', icon, className = '' }: TrustBadgeProps) {
  const variants = {
    success: 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 text-green-700',
    primary: 'bg-gradient-to-r from-primary-50 to-blue-50 border-primary-200 text-primary-700',
    info: 'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200 text-blue-700',
  }

  const defaultIcons = {
    success: <FiCheckCircle size={16} />,
    primary: <FiShield size={16} />,
    info: <FiTrendingUp size={16} />,
  }

  return (
    <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 md:px-3.5 md:py-2 rounded-full text-xs md:text-sm font-semibold border ${variants[variant]} shadow-sm whitespace-nowrap ${className}`}>
      {icon || defaultIcons[variant]}
      <span>{text}</span>
    </div>
  )
}

