'use client'

export function CardSkeleton() {
  return (
    <div className="card animate-pulse p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 bg-gray-200 rounded-2xl"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
        <div className="h-3 bg-gray-200 rounded w-4/6"></div>
      </div>
      <div className="h-10 bg-gray-200 rounded-lg w-32"></div>
    </div>
  )
}

