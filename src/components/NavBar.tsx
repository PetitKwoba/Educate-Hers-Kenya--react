import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      <Link to="/" className="brand" onClick={closeMenu}>
        <img 
          src="/assets/logo.jpg" 
          alt="EducateHers Kenya" 
          className="brand-logo"
          onError={(e) => {
            // Fallback if logo not loaded
            console.error('Logo failed to load');
            e.currentTarget.style.display = 'none';
          }}
        />
      </Link>

      {/* Hamburger Menu Button */}
      <button 
        className={`hamburger ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Links */}
      <ul className={`navlinks ${isOpen ? 'open' : ''}`}>
        <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
        <li><NavLink to="/what-we-do" onClick={closeMenu}>What We Do</NavLink></li>
        <li><NavLink to="/events" onClick={closeMenu}>Events</NavLink></li>
        <li><NavLink to="/volunteer" onClick={closeMenu}>Volunteer</NavLink></li>
        <li><NavLink to="/blog" onClick={closeMenu}>Blog</NavLink></li>
        <li><NavLink to="/team" onClick={closeMenu}>Team</NavLink></li>
        <li><NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink></li>
        <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
        <li className="theme-toggle-nav">
          <ThemeToggle />
        </li>
        <li>
          <Link to="/donate" className="donate-btn" onClick={closeMenu}>
            ❤️ Donate
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
