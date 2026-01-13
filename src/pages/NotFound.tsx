import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { FaHome, FaEnvelope, FaSearch, FaBook } from 'react-icons/fa'

export default function NotFound() {
  return (
    <main className="not-found-page">
      <SEO
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist. Return to EducateHers Kenya homepage."
        url="https://educateherskenya.org/404"
      />
      <section className="not-found-section">
        <div className="not-found-container">
          <div className="not-found-icon">
            <FaSearch />
          </div>
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">Oops! Page Not Found</h2>
          <p className="not-found-description">
            The page you're looking for doesn't exist or has been moved. 
            But don't worry, you can find plenty of other ways to support girls' education!
          </p>
          
          <div className="not-found-actions">
            <Link to="/" className="not-found-btn primary">
              <FaHome /> Back to Home
            </Link>
            <Link to="/blog" className="not-found-btn secondary">
              <FaBook /> Read Our Blog
            </Link>
            <Link to="/contact" className="not-found-btn secondary">
              <FaEnvelope /> Contact Us
            </Link>
          </div>

          <div className="not-found-suggestions">
            <h3>You might be interested in:</h3>
            <div className="suggestions-grid">
              <Link to="/what-we-do" className="suggestion-card">
                <h4>Our Programs</h4>
                <p>Learn about our gender-responsive education initiatives</p>
              </Link>
              <Link to="/donate" className="suggestion-card">
                <h4>Make a Donation</h4>
                <p>Support girls' education in Kenya</p>
              </Link>
              <Link to="/volunteer" className="suggestion-card">
                <h4>Volunteer</h4>
                <p>Join our team and make a difference</p>
              </Link>
              <Link to="/events" className="suggestion-card">
                <h4>Upcoming Events</h4>
                <p>See what we're working on next</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
