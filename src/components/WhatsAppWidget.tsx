import React, { useState } from 'react'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const phoneNumber = '254703257597'
  const message = 'Hello EducateHers Kenya! I would like to know more about your programs.'

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <button
        className="whatsapp-widget"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp chat"
      >
        {isOpen ? <FaTimes /> : <FaWhatsapp />}
      </button>

      {isOpen && (
        <div className="whatsapp-popup">
          <div className="whatsapp-header">
            <FaWhatsapp />
            <h3>Chat with us</h3>
            <button 
              onClick={() => setIsOpen(false)}
              aria-label="Close WhatsApp popup"
            >
              <FaTimes />
            </button>
          </div>
          <div className="whatsapp-body">
            <p>Hello! 👋</p>
            <p>How can we help you today?</p>
            <button 
              className="whatsapp-start-chat"
              onClick={openWhatsApp}
            >
              Start Chat
            </button>
          </div>
        </div>
      )}
    </>
  )
}
