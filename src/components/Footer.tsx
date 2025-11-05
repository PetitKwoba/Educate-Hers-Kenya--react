import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { submitNewsletterSubscription, isValidEmail } from '../utils/formService'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [subscribing, setSubscribing] = useState(false)
  const [error, setError] = useState('')

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim()) {
      setError('Please enter your email')
      return
    }
    
    if (!isValidEmail(email)) {
      setError('Please enter a valid email')
      return
    }

    setSubscribing(true)
    setError('')
    
    try {
      const result = await submitNewsletterSubscription({ email })
      
      if (result.success) {
        setSubscribed(true)
        setEmail('')
        setTimeout(() => setSubscribed(false), 5000)
      } else {
        setError(result.message)
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
      console.error('Newsletter subscription error:', err)
    } finally {
      setSubscribing(false)
    }
  }

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-column">
            <Link to="/" className="footer-brand">
              <img src="/assets/logo.jpg" alt="EducateHers Kenya" className="footer-logo" />
            </Link>
            <p className="footer-about">
              Empowering girls through education and advocating for gender equality in Kenya and beyond.
            </p>
            <div className="footer-social">
              <a 
                href="https://www.facebook.com/educatehers" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-icon"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://x.com/EducateHERs" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-icon"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href="https://www.instagram.com/educateherskenya/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-icon"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://www.linkedin.com/company/educate-hers/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a 
                href="https://www.youtube.com/@EducateHERs" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-icon"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/what-we-do">What We Do</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/volunteer">Volunteer</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div className="footer-column">
            <h3 className="footer-heading">Get Involved</h3>
            <ul className="footer-links">
              <li><Link to="/volunteer">Become a Volunteer</Link></li>
              <li><Link to="/donate">Make a Donation</Link></li>
              <li><Link to="/events">Attend an Event</Link></li>
              <li><Link to="/contact">Partner with Us</Link></li>
              <li><Link to="/donate">Sponsor a Girl</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="footer-column">
            <h3 className="footer-heading">Stay Connected</h3>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:info@educateherskenya.net">info@educateherskenya.net</a>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-phone"></i>
                <a href="tel:+254703257597">+254 703 257 597</a>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>
                  Galleria Office and Business Park<br />
                  Seminary Road, Karen Area<br />
                  Nairobi, Kenya<br />
                  P. O. Box 46162-00100
                </span>
              </div>
            </div>

            <div className="footer-newsletter">
              <h4 className="footer-newsletter-title">Newsletter</h4>
              <p className="footer-newsletter-text">Subscribe to get updates</p>
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError('')
                  }}
                  placeholder="Your email"
                  required
                  className="newsletter-input"
                  aria-label="Email address for newsletter"
                  disabled={subscribing}
                />
                <button 
                  type="submit" 
                  className="newsletter-btn" 
                  aria-label="Subscribe to newsletter"
                  disabled={subscribing}
                >
                  {subscribing ? (
                    <i className="fas fa-spinner fa-spin"></i>
                  ) : (
                    <i className="fas fa-paper-plane"></i>
                  )}
                </button>
              </form>
              {subscribed && (
                <p className="newsletter-success">
                  <i className="fas fa-check-circle"></i> Thank you for subscribing!
                </p>
              )}
              {error && (
                <p className="newsletter-error">
                  <i className="fas fa-exclamation-circle"></i> {error}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} EducateHers Kenya. All rights reserved.
          </p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="footer-divider">•</span>
            <Link to="/terms">Terms of Service</Link>
            <span className="footer-divider">•</span>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
