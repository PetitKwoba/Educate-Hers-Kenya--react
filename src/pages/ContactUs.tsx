import React, { useState } from 'react'
import { submitContactForm, isValidEmail } from '../utils/formService'
import SEO from '../components/SEO'

type FormState = {
  name: string
  email: string
  reason: string
  message: string
}

export default function ContactUs() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', reason: '', message: '' })
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitError, setSubmitError] = useState(false)

  const validate = (): boolean => {
    const e: Partial<FormState> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!isValidEmail(form.email)) e.email = 'Please enter a valid email'
    if (!form.reason) e.reason = 'Please select a reason'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onChange = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [k]: e.target.value }))
    // Clear error when user starts typing
    if (errors[k]) {
      setErrors(prev => ({ ...prev, [k]: undefined }))
    }
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    
    setSubmitting(true)
    setSubmitError(false)
    setSubmitMessage('')
    
    try {
      const result = await submitContactForm(form)
      
      if (result.success) {
        setSent(true)
        setSubmitMessage(result.message)
        setForm({ name: '', email: '', reason: '', message: '' })
        setTimeout(() => {
          setSent(false)
          setSubmitMessage('')
        }, 7000)
      } else {
        setSubmitError(true)
        setSubmitMessage(result.message)
      }
    } catch (error) {
      setSubmitError(true)
      setSubmitMessage('An unexpected error occurred. Please try again or email us directly.')
      console.error('Form submission error:', error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section>
      <SEO 
        title="Contact Us"
        description="Get in touch with EducateHers Kenya. Have questions, want to volunteer, partner with us, or support our mission? We'd love to hear from you. Contact us today."
        keywords="contact EducateHers Kenya, Kenya NGO contact, email EducateHers, get involved, partner with us, support girls education"
        url="https://educateherskenya.org/contact"
      />
      <h1>Get In Touch</h1>
      <p style={{ fontSize: '1.15rem', marginBottom: '2rem' }}>
        Have questions or want to get involved? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </p>

      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginBottom: '2rem'
      }}>
        {/* Contact Info Cards */}
        <div>
          <div className="card" style={{ marginBottom: '1rem' }}>
            <h3 style={{ color: '#00a9ce', marginBottom: '0.5rem' }}>📧 Email</h3>
            <p style={{ margin: 0 }}>info@educateherskenya.net</p>
          </div>
          <div className="card" style={{ marginBottom: '1rem' }}>
            <h3 style={{ color: '#ff8c42', marginBottom: '0.5rem' }}>📱 Phone</h3>
            <p style={{ margin: 0 }}>+254 703 257 597</p>
          </div>
          <div className="card">
            <h3 style={{ color: '#00a9ce', marginBottom: '0.5rem' }}>📍 Location</h3>
            <p style={{ margin: 0 }}>
              Galleria Office and Business Park<br />
              Seminary Road, Karen Area<br />
              Nairobi, Kenya<br />
              P. O. Box 46162-00100
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          {sent && submitMessage && !submitError && (
            <div style={{ 
              background: 'linear-gradient(135deg, rgba(0,169,206,0.1), rgba(96,212,244,0.1))',
              border: '2px solid var(--primary-teal)',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <i className="fas fa-check-circle" style={{ color: 'var(--primary-teal)', fontSize: '1.5rem' }}></i>
              <span style={{ color: 'var(--primary-teal)', fontWeight: 600 }}>{submitMessage}</span>
            </div>
          )}

          {submitError && submitMessage && (
            <div style={{ 
              background: 'linear-gradient(135deg, rgba(255,140,66,0.1), rgba(255,107,53,0.1))',
              border: '2px solid var(--primary-orange)',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <i className="fas fa-exclamation-circle" style={{ color: 'var(--primary-orange)', fontSize: '1.5rem' }}></i>
              <span style={{ color: 'var(--primary-orange)', fontWeight: 600 }}>{submitMessage}</span>
            </div>
          )}

          <form onSubmit={onSubmit} noValidate>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="name">Name *</label>
              <input 
                id="name"
                type="text"
                value={form.name} 
                onChange={onChange('name')}
                style={{ 
                  borderColor: errors.name ? '#ef4444' : undefined 
                }}
              />
              {errors.name && (
                <div style={{ 
                  color: '#ef4444', 
                  fontSize: '0.875rem', 
                  marginTop: '0.25rem' 
                }}>
                  {errors.name}
                </div>
              )}
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="email">Email *</label>
              <input 
                id="email"
                type="email"
                value={form.email} 
                onChange={onChange('email')}
                style={{ 
                  borderColor: errors.email ? '#ef4444' : undefined 
                }}
              />
              {errors.email && (
                <div style={{ 
                  color: '#ef4444', 
                  fontSize: '0.875rem', 
                  marginTop: '0.25rem' 
                }}>
                  {errors.email}
                </div>
              )}
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="reason">Reason for Contact *</label>
              <select
                id="reason"
                value={form.reason}
                onChange={onChange('reason')}
                style={{ 
                  borderColor: errors.reason ? '#ef4444' : undefined,
                  width: '100%',
                  padding: '0.75rem',
                  fontSize: '1rem',
                  borderRadius: '8px',
                  border: '2px solid #ddd',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s'
                }}
              >
                <option value="">-- Select a reason --</option>
                <option value="volunteer">Volunteer Opportunities</option>
                <option value="partnership">Partnership Inquiry</option>
                <option value="donation">Donation Information</option>
                <option value="sponsorship">Sponsorship Programs</option>
                <option value="events">Event Information</option>
                <option value="general">General Inquiry</option>
                <option value="feedback">Feedback or Suggestions</option>
                <option value="media">Media/Press Inquiry</option>
                <option value="other">Other</option>
              </select>
              {errors.reason && (
                <div style={{ 
                  color: '#ef4444', 
                  fontSize: '0.875rem', 
                  marginTop: '0.25rem' 
                }}>
                  {errors.reason}
                </div>
              )}
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="message">Message *</label>
              <textarea 
                id="message"
                rows={6} 
                value={form.message} 
                onChange={onChange('message')}
                style={{ 
                  borderColor: errors.message ? '#ef4444' : undefined,
                  resize: 'vertical'
                }}
              />
              {errors.message && (
                <div style={{ 
                  color: '#ef4444', 
                  fontSize: '0.875rem', 
                  marginTop: '0.25rem' 
                }}>
                  {errors.message}
                </div>
              )}
            </div>

            <button 
              type="submit" 
              style={{ width: '100%', fontSize: '1.1rem' }}
              disabled={submitting}
            >
              {submitting ? (
                <>
                  <i className="fas fa-spinner fa-spin" style={{ marginRight: '0.5rem' }}></i>
                  Sending...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane" style={{ marginRight: '0.5rem' }}></i>
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Social Media / Additional Info */}
      <div style={{ 
        background: 'linear-gradient(135deg, rgba(255,140,66,0.1), rgba(255,179,102,0.1))',
        padding: '2rem',
        borderRadius: '12px',
        textAlign: 'center'
      }}>
        <h3>Follow Our Journey</h3>
        <p style={{ marginBottom: '1rem' }}>
          Stay connected and see the impact we're making every day.
        </p>
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <a 
            href="https://x.com/EducateHERs" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              background: '#1DA1F2',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              color: 'white',
              textDecoration: 'none',
              fontWeight: 600,
              transition: 'transform 0.2s',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <i className="fab fa-twitter"></i>
            Twitter
          </a>
          <a 
            href="https://www.facebook.com/educatehers" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              background: '#4267B2',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              color: 'white',
              textDecoration: 'none',
              fontWeight: 600,
              transition: 'transform 0.2s',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <i className="fab fa-facebook-f"></i>
            Facebook
          </a>
          <a 
            href="https://www.instagram.com/educateherskenya/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              background: '#E1306C',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              color: 'white',
              textDecoration: 'none',
              fontWeight: 600,
              transition: 'transform 0.2s',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <i className="fab fa-instagram"></i>
            Instagram
          </a>
          <a 
            href="https://www.linkedin.com/company/educate-hers/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              background: '#0077B5',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              color: 'white',
              textDecoration: 'none',
              fontWeight: 600,
              transition: 'transform 0.2s',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <i className="fab fa-linkedin-in"></i>
            LinkedIn
          </a>
          <a 
            href="https://www.youtube.com/@EducateHERs" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              background: '#FF0000',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              color: 'white',
              textDecoration: 'none',
              fontWeight: 600,
              transition: 'transform 0.2s',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <i className="fab fa-youtube"></i>
            YouTube
          </a>
        </div>
      </div>
    </section>
  )
}
