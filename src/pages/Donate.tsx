import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function Donate() {
  return (
    <main className="donate-page-modern">
      <SEO 
        title="Donate"
        description="Support EducateHers Kenya and help empower girls through education. Your donation provides scholarships, STEM programs, and educational resources to girls across Kenya. Make a difference today."
        keywords="donate to EducateHers Kenya, support girls education, Kenya education donation, scholarship fund, girls empowerment donation, support gender equality"
        url="https://educateherskenya.org/donate"
      />
      {/* Hero Section */}
      <section className="donate-hero-modern">
        <div className="container">
          <div className="hero-card-wrapper">
            <div className="hero-card-modern">
              <div className="hero-badge-modern">
                <span className="badge-pulse"></span>
                <i className="fas fa-heart"></i>
                <span>Make an Impact</span>
              </div>
              <h1 className="hero-title-large">
                Transform Lives Through 
                <span className="text-gradient"> Education</span>
              </h1>
              <p className="hero-subtitle-modern">
                Every contribution empowers girls across Kenya with quality education, 
                mentorship, and opportunities to reach their full potential.
              </p>
              <div className="hero-stats-modern">
                <div className="stat-modern">
                  <div className="stat-number">1,500+</div>
                  <div className="stat-label">Girls Empowered</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-modern">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Scholarships</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-modern">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Communities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .donate-hero-modern {
          background: linear-gradient(135deg, #00a9ce 0%, #0891b2 100%);
          padding: 60px 0;
          position: relative;
          overflow: hidden;
        }

        .donate-hero-modern::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          opacity: 0.4;
        }

        .hero-card-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-card-modern {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          padding: 60px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          max-width: 900px;
          width: 100%;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .hero-card-modern::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #00a9ce, #ff6b35, #00a9ce);
          border-radius: 24px 24px 0 0;
        }

        .hero-badge-modern {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #00a9ce 0%, #0891b2 100%);
          color: white;
          padding: 10px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 24px;
          box-shadow: 0 4px 12px rgba(0, 169, 206, 0.3);
          position: relative;
        }

        .badge-pulse {
          width: 8px;
          height: 8px;
          background: #fff;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        .hero-badge-modern i {
          font-size: 16px;
        }

        .hero-title-large {
          font-size: 48px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 20px;
          color: #1a1a1a;
        }

        .text-gradient {
          background: linear-gradient(135deg, #00a9ce 0%, #ff6b35 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle-modern {
          font-size: 18px;
          line-height: 1.6;
          color: #4a5568;
          margin-bottom: 40px;
          max-width: 700px;
        }

        .hero-stats-modern {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .stat-modern {
          text-align: center;
        }

        .stat-number {
          font-size: 36px;
          font-weight: 800;
          background: linear-gradient(135deg, #00a9ce 0%, #0891b2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 14px;
          color: #718096;
          font-weight: 500;
        }

        .stat-divider {
          width: 1px;
          height: 50px;
          background: linear-gradient(to bottom, transparent, #cbd5e0, transparent);
        }

        @media (max-width: 768px) {
          .donate-hero-modern {
            padding: 40px 0;
          }

          .hero-card-modern {
            padding: 40px 24px;
            border-radius: 16px;
          }

          .hero-title-large {
            font-size: 32px;
          }

          .hero-subtitle-modern {
            font-size: 16px;
          }

          .stat-number {
            font-size: 28px;
          }

          .stat-divider {
            display: none;
          }

          .hero-stats-modern {
            gap: 20px;
          }
        }
      `}</style>

      {/* Main Content */}
      <section className="donate-content-modern">
        <div className="container">
          <div className="content-grid-modern">
            
            {/* Impact Information */}
            <div className="impact-section-modern">
              <div className="impact-card-wrapper">
                <div className="section-header-modern">
                  <div className="label-with-icon">
                    <div className="label-icon-circle">
                      <i className="fas fa-bullseye"></i>
                    </div>
                    <span className="section-label-modern">Your Impact</span>
                  </div>
                  <h2 className="section-title-modern">Every Donation Creates Change</h2>
                  <p className="section-description-modern">
                    Your support directly funds education and life-changing opportunities for girls.
                  </p>
                </div>

                <div className="impact-tiers-modern">
                  <div className="tier-card-modern tier-bronze">
                    <div className="tier-icon-modern">
                      <span>📚</span>
                    </div>
                    <div className="tier-content-modern">
                      <div className="tier-amount-modern">KES 5,000</div>
                      <p className="tier-description-modern">School supplies for 5 girls</p>
                    </div>
                    <div className="tier-glow"></div>
                  </div>

                  <div className="tier-card-modern tier-silver">
                    <div className="tier-icon-modern">
                      <span>🎓</span>
                    </div>
                    <div className="tier-content-modern">
                      <div className="tier-amount-modern">KES 20,000</div>
                      <p className="tier-description-modern">One term of education</p>
                    </div>
                    <div className="tier-glow"></div>
                  </div>

                  <div className="tier-card-modern tier-gold">
                    <div className="tier-icon-modern">
                      <span>👥</span>
                    </div>
                    <div className="tier-content-modern">
                      <div className="tier-amount-modern">KES 50,000</div>
                      <p className="tier-description-modern">Mentorship for 20 girls</p>
                    </div>
                    <div className="tier-glow"></div>
                  </div>

                  <div className="tier-card-modern tier-platinum featured-tier">
                    <div className="featured-label">
                      <i className="fas fa-star"></i>
                      <span>Most Impact</span>
                    </div>
                    <div className="tier-icon-modern">
                      <span>🏆</span>
                    </div>
                    <div className="tier-content-modern">
                      <div className="tier-amount-modern">KES 100,000+</div>
                      <p className="tier-description-modern">Full year scholarship</p>
                    </div>
                    <div className="tier-glow"></div>
                  </div>
                </div>

                <div className="trust-badges-modern">
                  <div className="trust-badge-modern">
                    <div className="trust-icon-modern">
                      <i className="fas fa-certificate"></i>
                    </div>
                    <span className="trust-text-modern">Registered Non-Profit</span>
                  </div>
                  <div className="trust-badge-modern">
                    <div className="trust-icon-modern">
                      <i className="fas fa-check-double"></i>
                    </div>
                    <span className="trust-text-modern">100% Transparent</span>
                  </div>
                  <div className="trust-badge-modern">
                    <div className="trust-icon-modern">
                      <i className="fas fa-file-invoice-dollar"></i>
                    </div>
                    <span className="trust-text-modern">Tax Deductible</span>
                  </div>
                </div>
              </div>

              <style>{`
                .impact-section-modern {
                  margin-bottom: 40px;
                }

                .impact-card-wrapper {
                  background: white;
                  border-radius: 20px;
                  padding: 40px;
                  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
                  border: 1px solid rgba(0, 169, 206, 0.1);
                  position: relative;
                  overflow: hidden;
                }

                .impact-card-wrapper::before {
                  content: '';
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  height: 4px;
                  background: linear-gradient(90deg, #00a9ce, #ff6b35, #00a9ce);
                }

                .section-header-modern {
                  text-align: center;
                  margin-bottom: 40px;
                }

                .label-with-icon {
                  display: inline-flex;
                  align-items: center;
                  gap: 10px;
                  margin-bottom: 16px;
                }

                .label-icon-circle {
                  width: 40px;
                  height: 40px;
                  border-radius: 50%;
                  background: linear-gradient(135deg, #00a9ce, #0891b2);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: white;
                  font-size: 18px;
                  box-shadow: 0 4px 12px rgba(0, 169, 206, 0.3);
                }

                .section-label-modern {
                  font-size: 16px;
                  font-weight: 600;
                  color: #00a9ce;
                  text-transform: uppercase;
                  letter-spacing: 1px;
                }

                .section-title-modern {
                  font-size: 32px;
                  font-weight: 800;
                  color: #1a1a1a;
                  margin-bottom: 12px;
                }

                .section-description-modern {
                  font-size: 16px;
                  color: #4a5568;
                  max-width: 600px;
                  margin: 0 auto;
                  line-height: 1.6;
                }

                .impact-tiers-modern {
                  display: grid;
                  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                  gap: 20px;
                  margin-bottom: 40px;
                }

                .tier-card-modern {
                  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
                  border-radius: 16px;
                  padding: 30px 24px;
                  text-align: center;
                  position: relative;
                  transition: all 0.3s ease;
                  border: 2px solid transparent;
                  cursor: pointer;
                }

                .tier-card-modern:hover {
                  transform: translateY(-5px);
                  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
                }

                .tier-card-modern.tier-bronze {
                  border-color: #cd7f32;
                }

                .tier-card-modern.tier-bronze:hover {
                  background: linear-gradient(135deg, #fff5eb 0%, #ffe8d1 100%);
                  border-color: #cd7f32;
                }

                .tier-card-modern.tier-silver {
                  border-color: #c0c0c0;
                }

                .tier-card-modern.tier-silver:hover {
                  background: linear-gradient(135deg, #f7fafc 0%, #e2e8f0 100%);
                  border-color: #a0a0a0;
                }

                .tier-card-modern.tier-gold {
                  border-color: #ffd700;
                }

                .tier-card-modern.tier-gold:hover {
                  background: linear-gradient(135deg, #fffaeb 0%, #fff4d1 100%);
                  border-color: #f0c000;
                }

                .tier-card-modern.tier-platinum {
                  background: linear-gradient(135deg, #00a9ce 0%, #0891b2 100%);
                  border-color: #00a9ce;
                  color: white;
                }

                .tier-card-modern.tier-platinum:hover {
                  background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%);
                  box-shadow: 0 12px 30px rgba(0, 169, 206, 0.4);
                }

                .tier-card-modern.tier-platinum .tier-amount-modern,
                .tier-card-modern.tier-platinum .tier-description-modern {
                  color: white;
                }

                .featured-label {
                  position: absolute;
                  top: 12px;
                  right: 12px;
                  background: rgba(255, 255, 255, 0.3);
                  backdrop-filter: blur(10px);
                  padding: 6px 12px;
                  border-radius: 20px;
                  font-size: 12px;
                  font-weight: 600;
                  display: flex;
                  align-items: center;
                  gap: 4px;
                  color: white;
                }

                .featured-label i {
                  font-size: 10px;
                }

                .tier-icon-modern {
                  font-size: 48px;
                  margin-bottom: 16px;
                  display: inline-block;
                  transition: transform 0.3s ease;
                }

                .tier-card-modern:hover .tier-icon-modern {
                  transform: scale(1.1) rotate(5deg);
                }

                .tier-amount-modern {
                  font-size: 24px;
                  font-weight: 800;
                  color: #1a1a1a;
                  margin-bottom: 8px;
                }

                .tier-description-modern {
                  font-size: 14px;
                  color: #4a5568;
                  line-height: 1.5;
                }

                .tier-glow {
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  width: 100%;
                  height: 100%;
                  transform: translate(-50%, -50%);
                  background: radial-gradient(circle, rgba(0, 169, 206, 0.1) 0%, transparent 70%);
                  opacity: 0;
                  transition: opacity 0.3s ease;
                  pointer-events: none;
                }

                .tier-card-modern:hover .tier-glow {
                  opacity: 1;
                }

                .trust-badges-modern {
                  display: flex;
                  justify-content: center;
                  gap: 24px;
                  flex-wrap: wrap;
                  padding-top: 30px;
                  border-top: 1px solid #e2e8f0;
                }

                .trust-badge-modern {
                  display: flex;
                  align-items: center;
                  gap: 10px;
                  padding: 12px 20px;
                  background: #f7fafc;
                  border-radius: 50px;
                  transition: all 0.3s ease;
                }

                .trust-badge-modern:hover {
                  background: #edf2f7;
                  transform: translateY(-2px);
                }

                .trust-icon-modern {
                  width: 32px;
                  height: 32px;
                  border-radius: 50%;
                  background: linear-gradient(135deg, #00a9ce, #0891b2);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: white;
                  font-size: 14px;
                }

                .trust-text-modern {
                  font-size: 14px;
                  font-weight: 600;
                  color: #2d3748;
                }

                @media (max-width: 768px) {
                  .impact-card-wrapper {
                    padding: 30px 20px;
                  }

                  .section-title-modern {
                    font-size: 24px;
                  }

                  .impact-tiers-modern {
                    grid-template-columns: 1fr;
                    gap: 16px;
                  }

                  .trust-badges-modern {
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                  }
                }
              `}</style>
            </div>

            {/* Donation Card */}
            <div className="donation-section-modern">
              <div className="donation-card-wrapper">
                <div className="donation-card-modern">
                  <div className="card-header-modern">
                    <div className="header-icon-modern">
                      <i className="fas fa-hand-holding-heart"></i>
                    </div>
                    <h3 className="card-title-modern">Make Your Donation</h3>
                    <p className="card-subtitle-modern">Support our mission today</p>
                  </div>

                  <div className="upgrade-notice-modern">
                    <div className="notice-header">
                      <div className="notice-icon-modern">
                        <i className="fas fa-cog fa-spin"></i>
                      </div>
                      <div className="notice-badge-modern">Upgrading</div>
                    </div>
                    <h4 className="notice-title-modern">Payment System Enhancement</h4>
                    <p className="notice-text-modern">
                      We're enhancing our payment system with improved security and more options.
                    </p>
                    <ul className="features-list-modern">
                      <li><i className="fas fa-check-circle"></i> Mobile Money Integration</li>
                      <li><i className="fas fa-check-circle"></i> International Payments</li>
                      <li><i className="fas fa-check-circle"></i> Instant Receipts</li>
                    </ul>
                  </div>

                  <div className="contact-wrapper-modern">
                    <div className="contact-header-text">
                      <h4>Get in Touch to Donate</h4>
                      <p>Choose your preferred way to reach us</p>
                    </div>

                    <div className="contact-grid-modern">
                      <a href="mailto:info@educateherskenya.net" className="contact-card-item">
                        <div className="contact-card-inner">
                          <div className="contact-icon-wrapper email-icon">
                            <i className="fas fa-envelope"></i>
                          </div>
                          <h5 className="contact-method-title">Email Us</h5>
                          <p className="contact-method-value">info@educateherskenya.net</p>
                          <div className="contact-hover-arrow">
                            <i className="fas fa-arrow-right"></i>
                          </div>
                        </div>
                      </a>

                      <a href="tel:+254703257597" className="contact-card-item">
                        <div className="contact-card-inner">
                          <div className="contact-icon-wrapper phone-icon">
                            <i className="fas fa-phone-alt"></i>
                          </div>
                          <h5 className="contact-method-title">Call Us</h5>
                          <p className="contact-method-value">+254 703 257 597</p>
                          <div className="contact-hover-arrow">
                            <i className="fas fa-arrow-right"></i>
                          </div>
                        </div>
                      </a>

                      <Link to="/contact" className="contact-card-item">
                        <div className="contact-card-inner">
                          <div className="contact-icon-wrapper form-icon">
                            <i className="fas fa-paper-plane"></i>
                          </div>
                          <h5 className="contact-method-title">Send Message</h5>
                          <p className="contact-method-value">Fill out our form</p>
                          <div className="contact-hover-arrow">
                            <i className="fas fa-arrow-right"></i>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="security-badge-modern">
                      <div className="security-icon-circle">
                        <i className="fas fa-shield-check"></i>
                      </div>
                      <div className="security-text-content">
                        <span className="security-title">Secure & Confidential</span>
                        <span className="security-subtitle">Your information is protected</span>
                      </div>
                    </div>
                  </div>
                </div>

                <style>{`
                  .donation-card-wrapper {
                    background: white;
                    border-radius: 24px;
                    padding: 60px 40px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
                    position: relative;
                    overflow: hidden;
                    transition: all 0.4s ease;
                  }

                  .donation-card-wrapper::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 6px;
                    background: linear-gradient(90deg, #00a9ce 0%, #ff6b35 100%);
                  }

                  .donation-card-wrapper:hover {
                    box-shadow: 0 20px 60px rgba(0, 169, 206, 0.15);
                    transform: translateY(-5px);
                  }

                  .card-header-modern {
                    text-align: center;
                    margin-bottom: 50px;
                  }

                  .header-icon-modern {
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(135deg, #00a9ce 0%, #ff6b35 100%);
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 20px;
                    font-size: 2rem;
                    color: white;
                    box-shadow: 0 10px 30px rgba(0, 169, 206, 0.3);
                    transition: all 0.4s ease;
                  }

                  .donation-card-wrapper:hover .header-icon-modern {
                    transform: scale(1.1) rotate(5deg);
                    box-shadow: 0 15px 40px rgba(0, 169, 206, 0.4);
                  }

                  .card-title-modern {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #2d3748;
                    margin-bottom: 10px;
                    letter-spacing: -0.5px;
                  }

                  .card-subtitle-modern {
                    font-size: 1.2rem;
                    color: #718096;
                    font-weight: 400;
                  }

                  .upgrade-notice-modern {
                    background: linear-gradient(135deg, #00a9ce 0%, #0891b2 100%);
                    border-radius: 20px;
                    padding: 40px;
                    margin-bottom: 50px;
                    color: white;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0, 169, 206, 0.3);
                    transition: all 0.4s ease;
                  }

                  .upgrade-notice-modern::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    right: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
                    animation: pulse-glow 3s ease-in-out infinite;
                  }

                  .upgrade-notice-modern:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 15px 40px rgba(0, 169, 206, 0.4);
                  }

                  .notice-header {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    margin-bottom: 20px;
                  }

                  .notice-icon-modern {
                    width: 50px;
                    height: 50px;
                    background: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(10px);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                  }

                  .notice-badge-modern {
                    background: rgba(255, 255, 255, 0.25);
                    backdrop-filter: blur(10px);
                    padding: 8px 20px;
                    border-radius: 20px;
                    font-size: 0.95rem;
                    font-weight: 600;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                  }

                  .notice-title-modern {
                    font-size: 1.6rem;
                    font-weight: 700;
                    margin-bottom: 12px;
                    position: relative;
                    z-index: 1;
                  }

                  .notice-text-modern {
                    font-size: 1.05rem;
                    opacity: 0.95;
                    line-height: 1.6;
                    margin-bottom: 25px;
                    position: relative;
                    z-index: 1;
                  }

                  .features-list-modern {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: grid;
                    gap: 12px;
                    position: relative;
                    z-index: 1;
                  }

                  .features-list-modern li {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-size: 1rem;
                    padding: 12px 18px;
                    background: rgba(255, 255, 255, 0.15);
                    border-radius: 12px;
                    backdrop-filter: blur(5px);
                    transition: all 0.3s ease;
                  }

                  .features-list-modern li:hover {
                    background: rgba(255, 255, 255, 0.25);
                    transform: translateX(5px);
                  }

                  .features-list-modern li i {
                    color: #ff6b35;
                    font-size: 1.2rem;
                    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
                  }

                  .contact-wrapper-modern {
                    margin-top: 40px;
                  }

                  .contact-header-text {
                    text-align: center;
                    margin-bottom: 40px;
                  }

                  .contact-header-text h4 {
                    font-size: 1.8rem;
                    font-weight: 700;
                    color: #2d3748;
                    margin-bottom: 8px;
                  }

                  .contact-header-text p {
                    font-size: 1.05rem;
                    color: #718096;
                  }

                  .contact-grid-modern {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 25px;
                    margin-bottom: 40px;
                  }

                  .contact-card-item {
                    text-decoration: none;
                    display: block;
                    height: 100%;
                  }

                  .contact-card-inner {
                    background: white;
                    border: 2px solid #e0f2fe;
                    border-radius: 20px;
                    padding: 35px 25px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    height: 100%;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                  }

                  .contact-card-inner::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, #00a9ce 0%, #ff6b35 100%);
                    transform: scaleX(0);
                    transition: transform 0.4s ease;
                  }

                  .contact-card-item:hover .contact-card-inner {
                    border-color: #00a9ce;
                    transform: translateY(-8px);
                    box-shadow: 0 15px 40px rgba(0, 169, 206, 0.2);
                  }

                  .contact-card-item:hover .contact-card-inner::before {
                    transform: scaleX(1);
                  }

                  .contact-icon-wrapper {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 2rem;
                    color: white;
                    margin: 0 auto 20px;
                    position: relative;
                    transition: all 0.4s ease;
                  }

                  .contact-icon-wrapper::after {
                    content: '';
                    position: absolute;
                    inset: -8px;
                    border-radius: 50%;
                    background: inherit;
                    opacity: 0.2;
                    z-index: -1;
                    transition: all 0.4s ease;
                  }

                  .contact-card-item:hover .contact-icon-wrapper {
                    transform: scale(1.1) rotate(10deg);
                  }

                  .contact-card-item:hover .contact-icon-wrapper::after {
                    inset: -12px;
                    opacity: 0.3;
                  }

                  .contact-icon-wrapper.email-icon {
                    background: linear-gradient(135deg, #00a9ce 0%, #0891b2 100%);
                  }

                  .contact-icon-wrapper.phone-icon {
                    background: linear-gradient(135deg, #ff6b35 0%, #f97316 100%);
                  }

                  .contact-icon-wrapper.form-icon {
                    background: linear-gradient(135deg, #00a9ce 0%, #ff6b35 100%);
                  }

                  .contact-method-title {
                    font-size: 1.3rem;
                    font-weight: 700;
                    color: #2d3748;
                    margin-bottom: 10px;
                  }

                  .contact-method-value {
                    font-size: 1.05rem;
                    color: #00a9ce;
                    font-weight: 600;
                    margin-bottom: 15px;
                  }

                  .contact-hover-arrow {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #00a9ce;
                    font-size: 1rem;
                    margin-top: auto;
                    transition: all 0.4s ease;
                  }

                  .contact-card-item:hover .contact-hover-arrow {
                    background: linear-gradient(135deg, #00a9ce 0%, #0891b2 100%);
                    color: white;
                    transform: translateX(5px);
                  }

                  .security-badge-modern {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 15px;
                    padding: 25px 35px;
                    background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
                    border: 2px solid #86efac;
                    border-radius: 16px;
                    transition: all 0.3s ease;
                  }

                  .security-badge-modern:hover {
                    border-color: #4ade80;
                    box-shadow: 0 8px 20px rgba(74, 222, 128, 0.2);
                  }

                  .security-icon-circle {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    color: white;
                    flex-shrink: 0;
                    animation: shield-pulse 2s ease-in-out infinite;
                  }

                  .security-text-content {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                  }

                  .security-title {
                    font-size: 1.15rem;
                    font-weight: 700;
                    color: #166534;
                    display: block;
                  }

                  .security-subtitle {
                    font-size: 0.95rem;
                    color: #15803d;
                    display: block;
                  }

                  @keyframes pulse-glow {
                    0%, 100% {
                      opacity: 0.5;
                    }
                    50% {
                      opacity: 1;
                    }
                  }

                  @keyframes shield-pulse {
                    0%, 100% {
                      transform: scale(1);
                    }
                    50% {
                      transform: scale(1.1);
                    }
                  }

                  @media (max-width: 768px) {
                    .donation-card-wrapper {
                      padding: 40px 25px;
                      border-radius: 20px;
                    }

                    .header-icon-modern {
                      width: 70px;
                      height: 70px;
                      font-size: 1.7rem;
                    }

                    .card-title-modern {
                      font-size: 2rem;
                    }

                    .card-subtitle-modern {
                      font-size: 1.05rem;
                    }

                    .upgrade-notice-modern {
                      padding: 30px 25px;
                    }

                    .notice-header {
                      flex-direction: column;
                      align-items: flex-start;
                    }

                    .notice-title-modern {
                      font-size: 1.4rem;
                    }

                    .contact-grid-modern {
                      grid-template-columns: 1fr;
                      gap: 20px;
                    }

                    .contact-header-text h4 {
                      font-size: 1.5rem;
                    }

                    .contact-icon-wrapper {
                      width: 70px;
                      height: 70px;
                      font-size: 1.7rem;
                    }

                    .contact-method-title {
                      font-size: 1.15rem;
                    }

                    .contact-method-value {
                      font-size: 0.95rem;
                    }

                    .security-badge-modern {
                      flex-direction: column;
                      text-align: center;
                      padding: 25px 20px;
                    }

                    .security-icon-circle {
                      width: 50px;
                      height: 50px;
                      font-size: 1.3rem;
                    }

                    .divider-modern::before,
                    .divider-modern::after {
                      width: 25%;
                    }
                  }
                `}</style>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="other-ways-modern">
        <div className="container">
          <div className="other-ways-card-wrapper">
            <div className="section-header-modern center">
              <div className="label-with-icon centered">
                <div className="label-icon-circle">
                  <i className="fas fa-hands-helping"></i>
                </div>
                <span className="section-label-modern">More Ways to Help</span>
              </div>
              <h2 className="section-title-modern">Choose Your Impact Path</h2>
              <p className="section-description-modern">Multiple ways to support our mission</p>
            </div>

            <div className="ways-grid-modern">
              <div className="way-card-modern">
                <div className="way-icon-modern recurring">
                  <i className="fas fa-sync"></i>
                </div>
                <h3 className="way-title-modern">Monthly Giving</h3>
                <p className="way-description-modern">Create sustainable impact through recurring contributions</p>
                <Link to="/contact" className="way-link-modern">
                  Learn More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>

              <div className="way-card-modern">
                <div className="way-icon-modern inkind">
                  <i className="fas fa-boxes"></i>
                </div>
                <h3 className="way-title-modern">In-Kind Donations</h3>
                <p className="way-description-modern">Donate books, supplies, or educational materials</p>
                <Link to="/contact" className="way-link-modern">
                  Learn More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>

              <div className="way-card-modern">
                <div className="way-icon-modern corporate">
                  <i className="fas fa-briefcase"></i>
                </div>
                <h3 className="way-title-modern">Corporate Partnership</h3>
                <p className="way-description-modern">Align your CSR goals with our mission</p>
                <Link to="/contact" className="way-link-modern">
                  Partner With Us <i className="fas fa-arrow-right"></i>
                </Link>
              </div>

              <div className="way-card-modern">
                <div className="way-icon-modern fundraise">
                  <i className="fas fa-bullhorn"></i>
                </div>
                <h3 className="way-title-modern">Start a Campaign</h3>
                <p className="way-description-modern">Fundraise and rally your network</p>
                <Link to="/contact" className="way-link-modern">
                  Get Started <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            <style>{`
              .other-ways-card-wrapper {
                background: white;
                border-radius: 24px;
                padding: 60px 40px;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
                position: relative;
                overflow: hidden;
                transition: all 0.4s ease;
              }

              .other-ways-card-wrapper::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 6px;
                background: linear-gradient(90deg, #ff6b35 0%, #00a9ce 100%);
              }

              .other-ways-card-wrapper:hover {
                box-shadow: 0 20px 60px rgba(255, 107, 53, 0.15);
                transform: translateY(-5px);
              }

              .section-header-modern {
                text-align: center;
                margin-bottom: 50px;
              }

              .label-with-icon {
                display: flex;
                align-items: center;
                gap: 12px;
                margin-bottom: 20px;
              }

              .label-with-icon.centered {
                justify-content: center;
              }

              .label-icon-circle {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: linear-gradient(135deg, #ff6b35 0%, #00a9ce 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 1.3rem;
                box-shadow: 0 8px 20px rgba(255, 107, 53, 0.3);
              }

              .section-label-modern {
                font-size: 1rem;
                font-weight: 600;
                color: #ff6b35;
                text-transform: uppercase;
                letter-spacing: 1px;
              }

              .section-title-modern {
                font-size: 2.5rem;
                font-weight: 700;
                color: #2d3748;
                margin-bottom: 15px;
                letter-spacing: -0.5px;
              }

              .section-description-modern {
                font-size: 1.15rem;
                color: #718096;
              }

              .ways-grid-modern {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 30px;
              }

              .way-card-modern {
                background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                border: 2px solid #e2e8f0;
                border-radius: 20px;
                padding: 35px 30px;
                text-align: center;
                transition: all 0.4s ease;
                position: relative;
                overflow: hidden;
              }

              .way-card-modern::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                transform: scaleX(0);
                transition: transform 0.4s ease;
              }

              .way-card-modern:nth-child(1)::before {
                background: linear-gradient(90deg, #00a9ce 0%, #0891b2 100%);
              }

              .way-card-modern:nth-child(2)::before {
                background: linear-gradient(90deg, #ff6b35 0%, #f97316 100%);
              }

              .way-card-modern:nth-child(3)::before {
                background: linear-gradient(90deg, #00a9ce 0%, #ff6b35 100%);
              }

              .way-card-modern:nth-child(4)::before {
                background: linear-gradient(90deg, #ff6b35 0%, #00a9ce 100%);
              }

              .way-card-modern:hover {
                border-color: #00a9ce;
                transform: translateY(-8px);
                box-shadow: 0 15px 40px rgba(0, 169, 206, 0.2);
                background: white;
              }

              .way-card-modern:hover::before {
                transform: scaleX(1);
              }

              .way-icon-modern {
                width: 80px;
                height: 80px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 25px;
                font-size: 2rem;
                color: white;
                position: relative;
                transition: all 0.4s ease;
              }

              .way-icon-modern::after {
                content: '';
                position: absolute;
                inset: -8px;
                border-radius: 50%;
                background: inherit;
                opacity: 0.2;
                z-index: -1;
                transition: all 0.4s ease;
              }

              .way-card-modern:hover .way-icon-modern {
                transform: scale(1.1) rotate(10deg);
              }

              .way-card-modern:hover .way-icon-modern::after {
                inset: -12px;
                opacity: 0.3;
              }

              .way-icon-modern.recurring {
                background: linear-gradient(135deg, #00a9ce 0%, #0891b2 100%);
              }

              .way-icon-modern.inkind {
                background: linear-gradient(135deg, #ff6b35 0%, #f97316 100%);
              }

              .way-icon-modern.corporate {
                background: linear-gradient(135deg, #00a9ce 0%, #ff6b35 100%);
              }

              .way-icon-modern.fundraise {
                background: linear-gradient(135deg, #ff6b35 0%, #00a9ce 100%);
              }

              .way-title-modern {
                font-size: 1.5rem;
                font-weight: 700;
                color: #2d3748;
                margin-bottom: 15px;
              }

              .way-description-modern {
                font-size: 1.05rem;
                color: #64748b;
                line-height: 1.6;
                margin-bottom: 25px;
              }

              .way-link-modern {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 12px 24px;
                background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
                color: #00a9ce;
                text-decoration: none;
                border-radius: 25px;
                font-weight: 600;
                transition: all 0.3s ease;
              }

              .way-link-modern:hover {
                background: linear-gradient(135deg, #00a9ce 0%, #0891b2 100%);
                color: white;
                transform: translateX(5px);
                box-shadow: 0 8px 20px rgba(0, 169, 206, 0.3);
              }

              .way-link-modern i {
                transition: transform 0.3s ease;
              }

              .way-link-modern:hover i {
                transform: translateX(3px);
              }

              @media (max-width: 768px) {
                .other-ways-card-wrapper {
                  padding: 40px 25px;
                  border-radius: 20px;
                }

                .section-title-modern {
                  font-size: 2rem;
                }

                .ways-grid-modern {
                  grid-template-columns: 1fr;
                  gap: 20px;
                }

                .way-card-modern {
                  padding: 30px 25px;
                }

                .way-icon-modern {
                  width: 70px;
                  height: 70px;
                  font-size: 1.7rem;
                }

                .way-title-modern {
                  font-size: 1.3rem;
                }
              }
            `}</style>
          </div>
        </div>
      </section>
    </main>
  )
}
