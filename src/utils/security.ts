// Security utilities for input sanitization and validation

/**
 * Sanitize string input to prevent XSS attacks
 */
export function sanitizeInput(input: string): string {
  if (!input) return ''
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove < and > to prevent HTML injection
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .slice(0, 10000) // Limit length to prevent DOS attacks
}

/**
 * Sanitize email to ensure it's valid and safe
 */
export function sanitizeEmail(email: string): string {
  if (!email) return ''
  
  return email
    .trim()
    .toLowerCase()
    .slice(0, 254) // Max email length per RFC 5321
}

/**
 * Enhanced email validation with security checks
 */
export function isValidEmail(email: string): boolean {
  if (!email || email.length > 254) return false
  
  // Comprehensive email regex
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  
  if (!emailRegex.test(email)) return false
  
  // Check for common disposable email patterns (basic check)
  const disposableDomains = ['tempmail', 'throwaway', 'guerrillamail', '10minutemail']
  const domain = email.split('@')[1]?.toLowerCase() || ''
  
  if (disposableDomains.some(d => domain.includes(d))) {
    return false
  }
  
  return true
}

/**
 * Validate name input
 */
export function isValidName(name: string): boolean {
  if (!name || name.trim().length < 2) return false
  if (name.length > 100) return false
  
  // Allow letters, spaces, hyphens, apostrophes, and accented characters
  const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/
  return nameRegex.test(name)
}

/**
 * Validate message content
 */
export function isValidMessage(message: string): boolean {
  if (!message || message.trim().length < 10) return false
  if (message.length > 5000) return false // Reasonable message length
  
  // Check for spam patterns
  const spamPatterns = [
    /\b(viagra|cialis|casino|lottery|prize)\b/gi,
    /\b(click here|buy now|limited offer)\b/gi,
    /(http[s]?:\/\/){3,}/gi, // Multiple URLs
  ]
  
  return !spamPatterns.some(pattern => pattern.test(message))
}

/**
 * Rate limiting check (client-side)
 * Prevents rapid form submissions
 */
const submissionTimes: { [key: string]: number[] } = {}

export function checkRateLimit(identifier: string, maxAttempts: number = 3, windowMs: number = 60000): boolean {
  const now = Date.now()
  
  if (!submissionTimes[identifier]) {
    submissionTimes[identifier] = []
  }
  
  // Remove old entries outside the window
  submissionTimes[identifier] = submissionTimes[identifier].filter(
    time => now - time < windowMs
  )
  
  // Check if rate limit exceeded
  if (submissionTimes[identifier].length >= maxAttempts) {
    return false
  }
  
  // Add current submission
  submissionTimes[identifier].push(now)
  return true
}

/**
 * Clear rate limit for identifier
 */
export function clearRateLimit(identifier: string): void {
  delete submissionTimes[identifier]
}

/**
 * Sanitize form data before submission
 */
export function sanitizeFormData(data: Record<string, any>): Record<string, any> {
  const sanitized: Record<string, any> = {}
  
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      sanitized[key] = sanitizeInput(value)
    } else {
      sanitized[key] = value
    }
  }
  
  return sanitized
}

/**
 * Generate a simple client-side fingerprint for rate limiting
 */
export function getClientFingerprint(): string {
  const components = [
    navigator.userAgent,
    navigator.language,
    new Date().getTimezoneOffset(),
    screen.width,
    screen.height,
  ]
  
  // Simple hash function
  let hash = 0
  const str = components.join('|')
  
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32bit integer
  }
  
  return hash.toString(36)
}

/**
 * Check if content might be malicious
 */
export function containsMaliciousContent(content: string): boolean {
  const maliciousPatterns = [
    /<script[^>]*>.*?<\/script>/gi,
    /<iframe[^>]*>.*?<\/iframe>/gi,
    /javascript:/gi,
    /onerror\s*=/gi,
    /onclick\s*=/gi,
    /<embed[^>]*>/gi,
    /<object[^>]*>/gi,
  ]
  
  return maliciousPatterns.some(pattern => pattern.test(content))
}

/**
 * Escape HTML to prevent XSS
 */
export function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }
  
  return text.replace(/[&<>"']/g, char => map[char])
}
