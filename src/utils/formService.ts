// Form submission utilities using Web3Forms API
// Get your free access key at: https://web3forms.com

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

  if (!accessKey) {
    console.error('Web3Forms access key not configured. Please add VITE_WEB3FORMS_ACCESS_KEY to your .env file')
    // Return mock success for development
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('📧 Contact form submitted (mock):', data)
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
        name: data.name,
        email: data.email,
        subject: `Contact Form: ${data.reason}`,
        message: `
Reason: ${data.reason}

Message:
${data.message}

---
From: ${data.name}
Email: ${data.email}
        `.trim(),
        from_name: 'EducateHers Kenya Website',
        replyto: data.email,
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

  if (!accessKey) {
    console.error('Web3Forms access key not configured. Please add VITE_WEB3FORMS_ACCESS_KEY to your .env file')
    // Return mock success for development
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('📧 Newsletter subscription (mock):', data)
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
        email: data.email,
        subject: 'New Newsletter Subscription',
        message: `
New newsletter subscription request:

Email: ${data.email}
Subscribed at: ${new Date().toLocaleString()}
        `.trim(),
        from_name: 'EducateHers Kenya Website',
        replyto: data.email,
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
