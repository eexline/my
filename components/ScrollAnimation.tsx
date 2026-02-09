'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  animation?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale'
  delay?: number
  duration?: number
  className?: string
  threshold?: number
}

export function ScrollAnimation({
  children,
  animation = 'fade-in',
  delay = 0,
  duration = 600,
  className = '',
  threshold = 0.1
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [threshold])

  const animations = {
    'fade-in': isVisible ? 'opacity-100' : 'opacity-0',
    'slide-up': isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
    'slide-left': isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0',
    'slide-right': isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0',
    'scale': isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0',
  }

  return (
    <div
      ref={elementRef}
      className={`transition-all ease-out ${animations[animation]} ${className} h-full`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

