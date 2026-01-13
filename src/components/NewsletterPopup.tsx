import React, { useState, useEffect } from 'react'
import { FaTimes, FaEnvelope } from 'react-icons/fa'

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    // Check if user has already seen/closed the popup
    const hasSeenPopup = localStorage.getItem('newsletterPopupSeen')
    if (hasSeenPopup) return

    // Show popup on exit intent
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsVisible(true)
      }
    }

    // Also show after 30 seconds if user hasn't left
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('newsletterPopupSeen')
      if (!hasSeenPopup) {
        setIsVisible(true)
      }
    }, 30000)

    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem('newsletterPopupSeen', 'true')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically integrate with your email service
    console.log('Newsletter signup:', email)
    setIsSubmitted(true)
    setTimeout(() => {
      handleClose()
    }, 2000)
  }

  if (!isVisible) return null

  return (
    <div className="newsletter-overlay" onClick={handleClose}>
      <div className="newsletter-popup" onClick={(e) => e.stopPropagation()}>
        <button 
          className="newsletter-close"
          onClick={handleClose}
          aria-label="Close newsletter popup"
        >
          <FaTimes />
        </button>

        {!isSubmitted ? (
          <>
            <div className="newsletter-icon">
              <FaEnvelope />
            </div>
            <h2>Stay Connected!</h2>
            <p>Subscribe to our newsletter for updates on our programs, events, and impact stories.</p>
            
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
              />
              <button type="submit">Subscribe</button>
            </form>
            
            <p className="newsletter-privacy">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </>
        ) : (
          <div className="newsletter-success">
            <h2>Thank You! 🎉</h2>
            <p>You've successfully subscribed to our newsletter.</p>
          </div>
        )}
      </div>
    </div>
  )
}
