import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import GoogleAnalytics from './components/GoogleAnalytics'
import WhatsAppWidget from './components/WhatsAppWidget'
import NewsletterPopup from './components/NewsletterPopup'
import DonationExitPopup from './components/DonationExitPopup'
import Home from './pages/Home'
import Events from './pages/Events'
import Volunteer from './pages/Volunteer'
import WhatWeDo from './pages/WhatWeDo'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import ContactUs from './pages/ContactUs'
import Donate from './pages/Donate'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Cookies from './pages/Cookies'
import Team from './pages/Team'
import Gallery from './pages/Gallery'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <HelmetProvider>
      <GoogleAnalytics />
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <WhatsAppWidget />
        <NewsletterPopup />
        <DonationExitPopup />
      </div>
    </HelmetProvider>
  )
}
