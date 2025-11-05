# Security Documentation

## Overview

This document outlines the security measures implemented in the EducateHers Kenya website to protect against common web vulnerabilities and ensure safe handling of user data.

## Security Features Implemented

### 1. Input Sanitization & Validation

**Location:** `src/utils/security.ts`

All user inputs are sanitized and validated before processing:

#### Input Sanitization
- **HTML/XSS Prevention**: Removes HTML tags, JavaScript protocols, and event handlers
- **Length Limits**: Enforces maximum input lengths (10,000 characters general, 254 for emails)
- **Whitespace Trimming**: Removes leading/trailing whitespace

#### Email Validation
- **Format Validation**: RFC 5321 compliant email regex validation
- **Disposable Email Blocking**: Prevents submissions from temporary email services
- **Sanitization**: Lowercase conversion, trimming, length limits

#### Content Validation
- **Name Validation**: 2-100 characters, letters/spaces/hyphens/apostrophes only
- **Message Validation**: 10-5000 characters with spam pattern detection
- **Malicious Content Detection**: Identifies script injection attempts (script tags, iframes, embeds, objects)

### 2. Rate Limiting

**Implementation:** Client-side rate limiting in `src/utils/security.ts`

- **Contact Form**: Maximum 3 submissions per 60 seconds per user
- **Newsletter**: Maximum 3 subscriptions per 60 seconds per user
- **Fingerprinting**: Browser-based user identification (User-Agent, language, timezone, screen size)
- **Storage**: Uses localStorage for rate limit tracking

### 3. Spam Detection

**Location:** `src/utils/security.ts` - `isValidMessage()` function

Detects common spam patterns:
- Pharmaceutical spam (viagra, cialis, pharmacy)
- Gambling content (casino, poker, betting)
- Multiple URLs (>2 HTTP/HTTPS links)
- Prevents automated spam submissions

### 4. Form Security

**Location:** `src/utils/formService.ts`

All form submissions go through security layers:

1. **Rate Limit Check**: Prevents abuse
2. **Input Sanitization**: Cleans all inputs
3. **Validation**: Ensures data meets requirements
4. **Malicious Content Check**: Blocks injection attempts
5. **API Submission**: Only sanitized data sent to Web3Forms

### 5. HTTP Security Headers

#### Development (Vite)
**Location:** `vite.config.ts`

Headers applied during `npm run dev`:
- **Content-Security-Policy**: Restricts resource loading sources
- **X-Content-Type-Options**: Prevents MIME sniffing
- **X-Frame-Options**: Prevents clickjacking
- **X-XSS-Protection**: Legacy XSS protection
- **Referrer-Policy**: Controls referrer information
- **Permissions-Policy**: Restricts browser features

#### Production (Apache)
**Location:** `public/.htaccess`

Headers applied on Hostinger:
- All development headers plus:
- **Strict-Transport-Security**: Forces HTTPS for 1 year
- **File Protection**: Blocks access to .env, .json, .log, .md files

### 6. HTTPS Enforcement

**Location:** `public/.htaccess`

- Automatic HTTP to HTTPS redirect (301 permanent)
- HSTS header ensures browsers always use HTTPS
- Preload directive for browser HSTS preload lists

### 7. External Link Security

All external links include:
- `target="_blank"`: Opens in new tab
- `rel="noopener noreferrer"`: Prevents window.opener exploitation

**Verified Locations:**
- Footer social media links
- ContactUs social media buttons
- Volunteer application form link
- Donate M-Changa links
- Cookie policy reference links

### 8. Environment Variable Protection

**Security Measures:**
- `.env` file in `.gitignore` (never committed to Git)
- API keys prefixed with `VITE_` for client-side use
- `.htaccess` blocks direct access to `.env` files
- Separate production secrets in GitHub Secrets

**Current Protected Variables:**
- `VITE_WEB3FORMS_ACCESS_KEY`: Form submission API key

### 9. Content Security Policy (CSP)

**Allowed Sources:**
- **default-src**: Only same origin
- **script-src**: Self + inline (for React)
- **style-src**: Self + inline + Google Fonts
- **font-src**: Self + Google Fonts CDN
- **img-src**: Self + data URLs + HTTPS images
- **connect-src**: Self + Web3Forms API
- **frame-ancestors**: None (prevents embedding)
- **form-action**: Self + Web3Forms API

## Security Best Practices

### For Developers

1. **Never Commit Secrets**
   - Always add sensitive files to `.gitignore`
   - Use environment variables for API keys
   - Check Git history before pushing

2. **Validate All Inputs**
   - Use security utility functions from `security.ts`
   - Never trust user input
   - Sanitize before processing and displaying

3. **Keep Dependencies Updated**
   ```powershell
   npm audit
   npm update
   ```

4. **Test Security Features**
   - Try XSS attempts: `<script>alert('xss')</script>`
   - Test rate limiting with rapid submissions
   - Verify spam detection with spam content
   - Test with disposable emails

5. **Review External Libraries**
   - Check npm audit before adding new packages
   - Review security advisories
   - Use trusted, maintained packages only

### For Administrators

1. **GitHub Secrets Management**
   - Store production credentials in GitHub Secrets
   - Never expose secrets in workflow logs
   - Rotate keys periodically

2. **Monitor Form Submissions**
   - Check Web3Forms dashboard regularly
   - Look for suspicious patterns
   - Block abusive IP addresses if needed

3. **Server Configuration**
   - Ensure mod_headers is enabled on Apache
   - Verify HTTPS certificate is valid
   - Check security headers are applied:
     ```bash
     curl -I https://yourdomain.com
     ```

4. **Regular Audits**
   - Review form submissions weekly
   - Check rate limit effectiveness
   - Monitor for spam attempts
   - Update security policies as needed

## Testing Security Features

### Manual Testing

#### Test Input Sanitization
```javascript
// Try these in form fields:
<script>alert('xss')</script>
<img src=x onerror=alert(1)>
javascript:alert('xss')
<iframe src="evil.com"></iframe>
```
Expected: Input should be sanitized/rejected

#### Test Rate Limiting
1. Submit contact form 3 times quickly
2. 4th submission should be blocked
3. Wait 60 seconds
4. Should be able to submit again

#### Test Spam Detection
```
Message with viagra and casino links:
http://spam1.com http://spam2.com http://spam3.com
```
Expected: Should be rejected

#### Test Disposable Email
```
test@tempmail.com
test@guerrillamail.com
test@10minutemail.com
```
Expected: Should be rejected

### Browser DevTools Testing

#### Check Security Headers
```javascript
// In browser console:
fetch('/').then(r => {
  console.log('Security Headers:')
  console.log('CSP:', r.headers.get('content-security-policy'))
  console.log('X-Frame-Options:', r.headers.get('x-frame-options'))
  console.log('HSTS:', r.headers.get('strict-transport-security'))
})
```

#### Check Rate Limiting Storage
```javascript
// View rate limit data:
console.log(localStorage.getItem('rate_limit_contact-<fingerprint>'))
```

## Incident Response

### If Security Issue Discovered

1. **Immediate Actions**
   - Document the issue (what, when, how)
   - Assess impact (data exposed? systems affected?)
   - Disable affected functionality if critical

2. **Short-term Response**
   - Apply hotfix if available
   - Notify stakeholders
   - Monitor for exploitation attempts

3. **Long-term Response**
   - Root cause analysis
   - Update security measures
   - Add tests to prevent recurrence
   - Document lessons learned

### Reporting Security Issues

If you discover a security vulnerability:
1. **Do NOT** create public GitHub issue
2. Email: info@educateherskenya.net
3. Subject: "SECURITY: [Brief Description]"
4. Include:
   - Description of vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

## Security Checklist

### Pre-Deployment
- [ ] All external links have `rel="noopener noreferrer"`
- [ ] `.env` file in `.gitignore`
- [ ] No secrets in Git history
- [ ] Security headers configured
- [ ] Input sanitization implemented
- [ ] Rate limiting active
- [ ] Spam detection enabled
- [ ] HTTPS enforced
- [ ] CSP configured
- [ ] `npm audit` clean

### Post-Deployment
- [ ] HTTPS certificate valid
- [ ] Security headers applied (check with curl)
- [ ] Forms work correctly
- [ ] Rate limiting functional
- [ ] Spam detection active
- [ ] External links open safely
- [ ] .env files inaccessible
- [ ] Error messages don't leak info

## Security Tools & Resources

### Automated Testing
- **npm audit**: Check for vulnerable dependencies
- **Snyk**: Continuous security monitoring
- **OWASP ZAP**: Web application security scanner

### Manual Testing
- **curl**: Test HTTP headers
- **Browser DevTools**: Inspect network requests
- **Postman**: Test API endpoints

### Learning Resources
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
- [Web3Forms Security](https://web3forms.com/docs)

## Compliance

### GDPR Considerations
- User data processed via Web3Forms (EU-compliant)
- No personal data stored in application
- Users can request data deletion from Web3Forms
- Cookie policy disclosed to users

### Data Retention
- Form submissions retained by Web3Forms
- No local database storage
- Contact Web3Forms for data retention policies

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2024 | Initial security implementation |
| | | - Input sanitization |
| | | - Rate limiting |
| | | - Security headers |
| | | - Spam detection |
| | | - HTTPS enforcement |

---

**Last Updated:** 2024  
**Maintained By:** EducateHers Kenya Development Team  
**Contact:** info@educateherskenya.net
