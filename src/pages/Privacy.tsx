import React from 'react'
import { Link } from 'react-router-dom'

export default function Privacy() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Last Updated: November 5, 2025</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Introduction</h2>
            <p>
              EducateHers Kenya ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Information We Collect</h2>
            
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Register for our programs or volunteer opportunities</li>
              <li>Make a donation</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us via our contact form</li>
              <li>Participate in our events</li>
            </ul>
            <p>This information may include:</p>
            <ul>
              <li>Name and contact information (email address, phone number, postal address)</li>
              <li>Demographic information</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
              <li>Volunteer application information</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect certain information, including:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Device information</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process donations and maintain donation records</li>
              <li>Communicate with you about our programs and services</li>
              <li>Send newsletters and updates (with your consent)</li>
              <li>Process volunteer applications</li>
              <li>Respond to your inquiries and requests</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and enhance security</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Sharing Your Information</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
            <ul>
              <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website, conducting our operations, or servicing you (e.g., payment processors, email service providers)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition</li>
              <li><strong>With Your Consent:</strong> When you have given us explicit permission to share your information</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Data Portability:</strong> Request a copy of your personal information in a structured format</li>
            </ul>
            <p>
              To exercise these rights, please contact us at <a href="mailto:info@educateherskenya.net">info@educateherskenya.net</a>
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our website. For more information about how we use cookies, please see our <Link to="/cookies">Cookie Policy</Link>.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Children's Privacy</h2>
            <p>
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. International Data Transfers</h2>
            <p>
              Your information may be transferred to and maintained on computers located outside of Kenya or your jurisdiction where data protection laws may differ. By using our services, you consent to this transfer.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section className="legal-section">
            <h2>12. Contact Us</h2>
            <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
            <div className="contact-info">
              <p><strong>EducateHers Kenya</strong></p>
              <p>Galleria Office and Business Park<br />
              Seminary Road, Karen Area<br />
              Nairobi, Kenya<br />
              P. O. Box 46162-00100</p>
              <p>Email: <a href="mailto:info@educateherskenya.net">info@educateherskenya.net</a></p>
              <p>Phone: <a href="tel:+254703257597">+254 703 257 597</a></p>
            </div>
          </section>
        </div>

        <div className="legal-footer">
          <Link to="/" className="back-link">
            <i className="fas fa-arrow-left"></i> Back to Home
          </Link>
          <div className="legal-links">
            <Link to="/terms">Terms of Service</Link>
            <span>•</span>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
