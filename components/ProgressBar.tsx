'use client'

import { useEffect, useState } from 'react'

interface ProgressBarProps {
  value: number
  max?: number
  showLabel?: boolean
  label?: string
  className?: string
  animated?: boolean
}

export function ProgressBar({ 
  value, 
  max = 100, 
  showLabel = true, 
  label,
  className = '',
  animated = true 
}: ProgressBarProps) {
  const [progress, setProgress] = useState(animated ? 0 : value)

  useEffect(() => {
    if (animated) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      const stepDuration = duration / steps
      
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setProgress(value)
          clearInterval(timer)
        } else {
          setProgress(current)
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }
  }, [value, animated])

  const percentage = Math.min((progress / max) * 100, 100)

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-gray-700">{label || `${Math.round(progress)}%`}</span>
          <span className="text-sm text-gray-500">{max}%</span>
        </div>
      )}
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 rounded-full transition-all duration-300 ease-out shadow-sm"
          style={{ width: `${percentage}%` }}
        >
          <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        </div>
      </div>
    </div>
  )
}

