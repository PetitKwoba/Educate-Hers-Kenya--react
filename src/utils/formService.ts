// Form submission utilities using Web3Forms API
// Get your free access key at: https://web3forms.com

import { 
  sanitizeInput, 
  sanitizeEmail, 
  isValidEmail as validateEmail,
  isValidName,
  isValidMessage,
  checkRateLimit,
  getClientFingerprint,
  containsMaliciousContent,
  sanitizeFormData
} from './security'

interface ContactFormData {
  name: string
  email: string
  reason: string
  message: string
}

interface NewsletterData {
  email: string
}

interface FormResponse {
  success: boolean
  message: string
}

/**
 * Submit contact form using Web3Forms
 */
export async function submitContactForm(data: ContactFormData): Promise<FormResponse> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

  // Security validation
  const fingerprint = getClientFingerprint()
  
  // Rate limiting check (max 3 submissions per minute)
  if (!checkRateLimit(`contact-${fingerprint}`, 3, 60000)) {
    return {
      success: false,
      message: 'Too many submission attempts. Please wait a moment before trying again.'
    }
  }

  // Validate and sanitize inputs
  const sanitizedName = sanitizeInput(data.name)
  const sanitizedEmail = sanitizeEmail(data.email)
  const sanitizedMessage = sanitizeInput(data.message)
  const sanitizedReason = sanitizeInput(data.reason)

  // Enhanced validation
  if (!isValidName(sanitizedName)) {
    return {
      success: false,
      message: 'Please enter a valid name (2-100 characters, letters only).'
    }
  }

  if (!validateEmail(sanitizedEmail)) {
    return {
      success: false,
      message: 'Please enter a valid email address.'
    }
  }

  if (!isValidMessage(sanitizedMessage)) {
    return {
      success: false,
      message: 'Message must be between 10 and 5000 characters and contain appropriate content.'
    }
  }

  // Check for malicious content
  if (containsMaliciousContent(sanitizedMessage) || containsMaliciousContent(sanitizedName)) {
    return {
      success: false,
      message: 'Invalid content detected. Please remove any HTML or script tags.'
    }
  }

  if (!accessKey) {
    console.error('Web3Forms access key not configured. Please add VITE_WEB3FORMS_ACCESS_KEY to your .env file')
    // Return mock success for development
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('📧 Contact form submitted (mock):', {
          name: sanitizedName,
          email: sanitizedEmail,
          reason: sanitizedReason,
          message: sanitizedMessage.substring(0, 100) + '...'
        })
        resolve({
          success: true,
          message: 'Thank you for your message! We will get back to you soon. (Development mode - no email sent)'
        })
      }, 1000)
    })
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: sanitizedName,
        email: sanitizedEmail,
        subject: `Contact Form: ${sanitizedReason}`,
        message: `
Reason: ${sanitizedReason}

Message:
${sanitizedMessage}

---
From: ${sanitizedName}
Email: ${sanitizedEmail}
        `.trim(),
        from_name: 'EducateHers Kenya Website',
        replyto: sanitizedEmail,
        botcheck: false, // Disable bot check - enable in Web3Forms dashboard if needed
      }),
    })

    const result = await response.json()

    if (result.success) {
      return {
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
      }
    } else {
      throw new Error(result.message || 'Failed to submit form')
    }
  } catch (error) {
    console.error('Contact form submission error:', error)
    return {
      success: false,
      message: 'Sorry, something went wrong. Please try again or email us directly at info@educateherskenya.net',
    }
  }
}

/**
 * Submit newsletter subscription using Web3Forms
 */
export async function submitNewsletterSubscription(data: NewsletterData): Promise<FormResponse> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

  // Security validation
  const fingerprint = getClientFingerprint()
  
  // Rate limiting check (max 3 submissions per minute)
  if (!checkRateLimit(`newsletter-${fingerprint}`, 3, 60000)) {
    return {
      success: false,
      message: 'Too many subscription attempts. Please wait a moment before trying again.'
    }
  }

  // Validate and sanitize email
  const sanitizedEmail = sanitizeEmail(data.email)

  if (!validateEmail(sanitizedEmail)) {
    return {
      success: false,
      message: 'Please enter a valid email address.'
    }
  }

  // Check for malicious content
  if (containsMaliciousContent(sanitizedEmail)) {
    return {
      success: false,
      message: 'Invalid email format detected.'
    }
  }

  if (!accessKey) {
    console.error('Web3Forms access key not configured. Please add VITE_WEB3FORMS_ACCESS_KEY to your .env file')
    // Return mock success for development
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('📧 Newsletter subscription (mock):', { email: sanitizedEmail })
        resolve({
          success: true,
          message: 'Successfully subscribed! (Development mode - no email sent)'
        })
      }, 800)
    })
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        email: sanitizedEmail,
        subject: 'New Newsletter Subscription',
        message: `
New newsletter subscription request:

Email: ${sanitizedEmail}
Subscribed at: ${new Date().toLocaleString()}
        `.trim(),
        from_name: 'EducateHers Kenya Website',
        replyto: sanitizedEmail,
        botcheck: false, // Disable bot check - enable in Web3Forms dashboard if needed
      }),
    })

    const result = await response.json()

    if (result.success) {
      return {
        success: true,
        message: 'Successfully subscribed to our newsletter!',
      }
    } else {
      throw new Error(result.message || 'Failed to subscribe')
    }
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return {
      success: false,
      message: 'Sorry, something went wrong. Please try again later.',
    }
  }
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Alternative: Use EmailJS (if you prefer)
 * Uncomment and configure these functions if you want to use EmailJS instead
 */

/*
import emailjs from '@emailjs/browser'

export async function submitWithEmailJS(templateParams: any): Promise<FormResponse> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS not configured')
  }

  try {
    await emailjs.send(serviceId, templateId, templateParams, publicKey)
    return {
      success: true,
      message: 'Message sent successfully!'
    }
  } catch (error) {
    console.error('EmailJS error:', error)
    return {
      success: false,
      message: 'Failed to send message. Please try again.'
    }
  }
}
*/
