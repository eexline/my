'use client'

interface SkeletonLoaderProps {
  variant?: 'card' | 'text' | 'circle' | 'table'
  className?: string
  lines?: number
}

export function SkeletonLoader({ variant = 'card', className = '', lines = 3 }: SkeletonLoaderProps) {
  if (variant === 'card') {
    return (
      <div className={`card animate-pulse ${className}`}>
        <div className="h-48 bg-gray-200 rounded-t-2xl"></div>
        <div className="p-6 space-y-4">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    )
  }

  if (variant === 'text') {
    return (
      <div className={`space-y-3 ${className}`}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={`h-4 bg-gray-200 rounded animate-pulse ${
              i === lines - 1 ? 'w-3/4' : 'w-full'
            }`}
          ></div>
        ))}
      </div>
    )
  }

  if (variant === 'circle') {
    return (
      <div className={`rounded-full bg-gray-200 animate-pulse ${className}`}></div>
    )
  }

  if (variant === 'table') {
    return (
      <div className={`space-y-4 ${className}`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex gap-4">
            <div className="h-4 bg-gray-200 rounded flex-1 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
          </div>
        ))}
      </div>
    )
  }

  return null
}

