import React, { useEffect, useRef, useState } from 'react'

interface CounterAnimationProps {
  end: number
  duration?: number
  suffix?: string
}

export default function CounterAnimation({ end, duration = 2000, suffix = '' }: CounterAnimationProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          
          const startTime = Date.now()
          const endValue = typeof end === 'string' ? parseInt(end.replace(/\D/g, '')) : end

          const animate = () => {
            const currentTime = Date.now()
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)

            const currentCount = Math.floor(progress * endValue)
            setCount(currentCount)

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCount(endValue)
            }
          }

          animate()
        }
      },
      { threshold: 0.5 }
    )

    const currentElement = counterRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [end, duration, hasAnimated])

  return (
    <span ref={counterRef} className="counter-animation">
      {count.toLocaleString()}{suffix}
    </span>
  )
}
