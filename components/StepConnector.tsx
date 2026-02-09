'use client'

interface StepConnectorProps {
  className?: string
  index?: number
}

export function StepConnector({ className = '', index = 0 }: StepConnectorProps) {
  const uniqueId = `stepGradient-${index}`
  
  return (
    <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 h-0.5 ${className} z-0`}>
      <svg
        width="100%"
        height="4"
        viewBox="0 0 100 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={uniqueId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.2" />
            <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <line
          x1="0"
          y1="2"
          x2="100"
          y2="2"
          stroke={`url(#${uniqueId})`}
          strokeWidth="2"
          strokeDasharray="6 4"
        />
        <circle
          cx="0"
          cy="2"
          r="2.5"
          fill="rgb(59, 130, 246)"
          opacity="0.4"
        />
        <circle
          cx="100"
          cy="2"
          r="2.5"
          fill="rgb(59, 130, 246)"
          opacity="0.4"
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  )
}

