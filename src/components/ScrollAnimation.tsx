import React, { useEffect, useRef, useState, ReactNode } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  animation?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right'
  delay?: number
  threshold?: number
}

export default function ScrollAnimation({ 
  children, 
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold }
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [delay, threshold])

  return (
    <div
      ref={elementRef}
      className={`scroll-animation ${animation} ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </div>
  )
}
