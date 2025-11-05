import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Security headers plugin
function securityHeaders() {
  return {
    name: 'security-headers',
    configureServer(server: any) {
      server.middlewares.use((_req: any, res: any, next: any) => {
        // Content Security Policy
        res.setHeader(
          'Content-Security-Policy',
          "default-src 'self'; " +
          "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
          "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
          "font-src 'self' https://fonts.gstatic.com; " +
          "img-src 'self' data: https:; " +
          "connect-src 'self' https://api.web3forms.com; " +
          "frame-ancestors 'none'; " +
          "base-uri 'self'; " +
          "form-action 'self' https://api.web3forms.com;"
        )
        
        // Prevent MIME type sniffing
        res.setHeader('X-Content-Type-Options', 'nosniff')
        
        // Prevent clickjacking
        res.setHeader('X-Frame-Options', 'DENY')
        
        // XSS Protection (legacy browsers)
        res.setHeader('X-XSS-Protection', '1; mode=block')
        
        // Referrer policy
        res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
        
        // Permissions policy
        res.setHeader(
          'Permissions-Policy',
          'geolocation=(), microphone=(), camera=(), payment=()'
        )
        
        next()
      })
    }
  }
}

export default defineConfig({
  plugins: [react(), securityHeaders()],
})
