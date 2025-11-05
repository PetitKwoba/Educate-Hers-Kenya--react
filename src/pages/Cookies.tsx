import React from 'react'
import { Link } from 'react-router-dom'

export default function Cookies() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <h1>Cookie Policy</h1>
          <p className="legal-updated">Last Updated: November 5, 2025</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
            <p>
              Cookies allow websites to recognize your device and store some information about your preferences or past actions.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. How We Use Cookies</h2>
            <p>
              EducateHers Kenya uses cookies to enhance your experience on our website and to help us understand how our website is being used. We use cookies for the following purposes:
            </p>
            <ul>
              <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Analytics Cookies:</strong> Help us improve our website by collecting anonymous information</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Types of Cookies We Use</h2>
            
            <h3>Essential Cookies</h3>
            <p>
              These cookies are strictly necessary for the operation of our website. They enable core functionality such as security, network management, and accessibility. Without these cookies, services you have requested cannot be provided.
            </p>
            <table className="cookie-table">
              <thead>
                <tr>
                  <th>Cookie Name</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>session_id</td>
                  <td>Maintains your session state</td>
                  <td>Session</td>
                </tr>
                <tr>
                  <td>csrf_token</td>
                  <td>Security protection</td>
                  <td>Session</td>
                </tr>
              </tbody>
            </table>

            <h3>Performance and Analytics Cookies</h3>
            <p>
              These cookies collect information about how visitors use our website, such as which pages are visited most often. This data helps us optimize our website and improve user experience.
            </p>
            <table className="cookie-table">
              <thead>
                <tr>
                  <th>Cookie Name</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>_ga</td>
                  <td>Google Analytics - tracks user behavior</td>
                  <td>2 years</td>
                </tr>
                <tr>
                  <td>_gid</td>
                  <td>Google Analytics - distinguishes users</td>
                  <td>24 hours</td>
                </tr>
              </tbody>
            </table>

            <h3>Functionality Cookies</h3>
            <p>
              These cookies allow our website to remember choices you make (such as your language preference) and provide enhanced, personalized features.
            </p>
            <table className="cookie-table">
              <thead>
                <tr>
                  <th>Cookie Name</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>language_pref</td>
                  <td>Remembers your language preference</td>
                  <td>1 year</td>
                </tr>
                <tr>
                  <td>newsletter_dismissed</td>
                  <td>Remembers if you dismissed the newsletter popup</td>
                  <td>30 days</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="legal-section">
            <h2>4. Third-Party Cookies</h2>
            <p>
              We may use third-party services that also set cookies on your device. These include:
            </p>
            <ul>
              <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
              <li><strong>Social Media Platforms:</strong> To enable social sharing and display social media content</li>
              <li><strong>Payment Processors:</strong> To process secure donations (M-Changa, payment gateways)</li>
              <li><strong>Video Platforms:</strong> To embed videos from YouTube or other platforms</li>
            </ul>
            <p>
              These third parties have their own privacy and cookie policies, which we encourage you to review.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. How Long Do Cookies Last?</h2>
            <p>Cookies can be either:</p>
            <ul>
              <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</li>
              <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until you delete them</li>
            </ul>
            <p>
              The duration of each cookie varies based on its purpose. Most of our cookies are session cookies or expire within 1-2 years.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Managing Cookies</h2>
            
            <h3>Browser Settings</h3>
            <p>
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul>
              <li>View what cookies are stored on your device</li>
              <li>Delete existing cookies</li>
              <li>Block all cookies</li>
              <li>Block third-party cookies only</li>
              <li>Set your browser to ask before accepting cookies</li>
            </ul>

            <h3>How to Control Cookies in Different Browsers:</h3>
            <ul>
              <li><strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
              <li><strong>Microsoft Edge:</strong> Settings → Privacy, search, and services → Cookies and site permissions</li>
            </ul>

            <h3>Important Note</h3>
            <p>
              Please note that blocking or deleting cookies may impact your experience on our website and prevent you from accessing certain features. Some parts of our website may not function properly if you disable cookies.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Do Not Track Signals</h2>
            <p>
              Some browsers have a "Do Not Track" feature that signals to websites that you do not want to have your online activity tracked. Currently, there is no standard for how websites should respond to these signals. We do not currently respond to "Do Not Track" signals.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Mobile Devices</h2>
            <p>
              If you access our website through a mobile device, you can control cookies through your device settings. The process varies by device manufacturer and operating system.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Updates to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. Any changes will be posted on this page with an updated "Last Updated" date.
            </p>
            <p>
              We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Your Consent</h2>
            <p>
              By using our website, you consent to our use of cookies as described in this Cookie Policy. If you do not agree to our use of cookies, please adjust your browser settings or refrain from using our website.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. More Information</h2>
            <p>
              For more information about how we protect your privacy, please read our <Link to="/privacy">Privacy Policy</Link>.
            </p>
            <p>
              To learn more about cookies in general, you can visit:
            </p>
            <ul>
              <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">All About Cookies</a></li>
              <li><a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer">Your Online Choices</a></li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>12. Contact Us</h2>
            <p>If you have questions about our use of cookies, please contact us:</p>
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
            <Link to="/privacy">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
