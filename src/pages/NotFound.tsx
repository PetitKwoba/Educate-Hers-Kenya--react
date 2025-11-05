import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <div style={{ fontSize: '6rem', marginBottom: '1rem' }}>🔍</div>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404 - Page Not Found</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button style={{ fontSize: '1.1rem' }}>
            ← Back to Home
          </button>
        </Link>
        <Link to="/contact" style={{ textDecoration: 'none' }}>
          <button style={{ 
            fontSize: '1.1rem',
            background: 'linear-gradient(135deg, #ff8c42, #ffb366)'
          }}>
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  )
}
