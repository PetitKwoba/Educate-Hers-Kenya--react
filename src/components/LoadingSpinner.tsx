import React from 'react'

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large'
  color?: string
}

export default function LoadingSpinner({ size = 'medium', color = '#00bcd4' }: LoadingSpinnerProps) {
  const sizeClasses = {
    small: 'spinner-small',
    medium: 'spinner-medium',
    large: 'spinner-large'
  }

  return (
    <div className="loading-spinner-container">
      <div 
        className={`loading-spinner ${sizeClasses[size]}`}
        style={{ borderTopColor: color }}
        role="status"
        aria-label="Loading"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}
