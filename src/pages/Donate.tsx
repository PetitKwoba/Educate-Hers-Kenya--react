import React from 'react'
import { Link } from 'react-router-dom'

interface Campaign {
  id: string
  title: string
  description: string
  goal: number
  raised: number
  mchangaLink: string
  image: string
  category: string
  urgent?: boolean
}

export default function Donate() {
  const campaigns: Campaign[] = [
    {
      id: '1',
      title: 'School Supplies for 100 Girls',
      description: 'Help us provide essential school supplies including books, uniforms, and stationery for 100 girls in marginalized communities.',
      goal: 500000,
      raised: 320000,
      mchangaLink: 'https://changa.co.ke/educatehers-supplies',
      image: '/assets/campaigns/school-supplies.jpg',
      category: 'Education',
      urgent: true
    },
    {
      id: '2',
      title: 'Mentorship Program 2025',
      description: 'Support our year-long mentorship program connecting young girls with successful women leaders in various fields.',
      goal: 800000,
      raised: 450000,
      mchangaLink: 'https://changa.co.ke/educatehers-mentorship',
      image: '/assets/campaigns/mentorship.jpg',
      category: 'Mentorship'
    },
    {
      id: '3',
      title: 'STEM Workshop Series',
      description: 'Fund hands-on STEM workshops and coding bootcamps for girls interested in technology and science careers.',
      goal: 600000,
      raised: 280000,
      mchangaLink: 'https://changa.co.ke/educatehers-stem',
      image: '/assets/campaigns/stem.jpg',
      category: 'STEM'
    },
    {
      id: '4',
      title: 'Scholarship Fund',
      description: 'Contribute to our scholarship fund providing full secondary school education for girls from low-income families.',
      goal: 1200000,
      raised: 750000,
      mchangaLink: 'https://changa.co.ke/educatehers-scholarship',
      image: '/assets/campaigns/scholarship.jpg',
      category: 'Scholarships',
      urgent: true
    },
    {
      id: '5',
      title: 'Digital Learning Devices',
      description: 'Help us purchase tablets and laptops for girls to access online learning resources and digital literacy programs.',
      goal: 900000,
      raised: 520000,
      mchangaLink: 'https://changa.co.ke/educatehers-devices',
      image: '/assets/campaigns/digital.jpg',
      category: 'Technology'
    },
    {
      id: '6',
      title: 'Community Outreach Program',
      description: 'Support our community awareness campaigns on the importance of girl child education and gender equality.',
      goal: 400000,
      raised: 180000,
      mchangaLink: 'https://changa.co.ke/educatehers-outreach',
      image: '/assets/campaigns/outreach.jpg',
      category: 'Awareness'
    }
  ]

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0
    }).format(amount)
  }

  const getProgressPercentage = (raised: number, goal: number) => {
    return Math.min((raised / goal) * 100, 100)
  }

  return (
    <main className="donate-page">
      {/* Hero Section */}
      <section className="donate-hero">
        <div className="donate-hero-content">
          <h1 className="donate-hero-title">Make a Difference Today</h1>
          <p className="donate-hero-subtitle">
            Your donation empowers girls through education and creates lasting change in communities across Kenya
          </p>
          <div className="donate-hero-stats">
            <div className="donate-stat">
              <div className="donate-stat-number">500+</div>
              <div className="donate-stat-label">Girls Supported</div>
            </div>
            <div className="donate-stat">
              <div className="donate-stat-number">50+</div>
              <div className="donate-stat-label">Communities Reached</div>
            </div>
            <div className="donate-stat">
              <div className="donate-stat-number">KES 5M+</div>
              <div className="donate-stat-label">Funds Raised</div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="donate-impact">
        <div className="donate-container">
          <h2 className="section-title">Your Impact</h2>
          <p className="section-subtitle">See how your donation makes a difference</p>
          
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-icon">📚</div>
              <h3>KES 5,000</h3>
              <p>Provides school supplies for 5 girls for one term</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">👩‍🏫</div>
              <h3>KES 15,000</h3>
              <p>Sponsors one girl's mentorship program for 6 months</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">💻</div>
              <h3>KES 30,000</h3>
              <p>Funds a tablet for digital learning access</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">🎓</div>
              <h3>KES 100,000</h3>
              <p>Covers one year of secondary school education</p>
            </div>
          </div>
        </div>
      </section>

      {/* Campaigns Section */}
      <section className="donate-campaigns">
        <div className="donate-container">
          <h2 className="section-title">Active Campaigns</h2>
          <p className="section-subtitle">Choose a campaign that resonates with you</p>
          
          <div className="campaigns-grid">
            {campaigns.map((campaign) => (
              <article key={campaign.id} className="campaign-card">
                {campaign.urgent && (
                  <div className="campaign-urgent-badge">
                    <i className="fas fa-bolt"></i> Urgent
                  </div>
                )}
                
                <div className="campaign-image-container">
                  <img 
                    src={campaign.image} 
                    alt={campaign.title} 
                    className="campaign-image"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/400x250/00a9ce/ffffff?text=Campaign+Image'
                    }}
                  />
                  <div className="campaign-category">{campaign.category}</div>
                </div>
                
                <div className="campaign-content">
                  <h3 className="campaign-title">{campaign.title}</h3>
                  <p className="campaign-description">{campaign.description}</p>
                  
                  <div className="campaign-progress">
                    <div className="progress-stats">
                      <span className="progress-raised">{formatCurrency(campaign.raised)} raised</span>
                      <span className="progress-goal">of {formatCurrency(campaign.goal)}</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${getProgressPercentage(campaign.raised, campaign.goal)}%` }}
                      ></div>
                    </div>
                    <div className="progress-percentage">
                      {Math.round(getProgressPercentage(campaign.raised, campaign.goal))}% funded
                    </div>
                  </div>
                  
                  <a 
                    href={campaign.mchangaLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="campaign-donate-btn"
                  >
                    <i className="fas fa-heart"></i> Donate Now
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="other-ways">
        <div className="donate-container">
          <h2 className="section-title">Other Ways to Give</h2>
          
          <div className="other-ways-grid">
            <div className="other-way-card">
              <div className="other-way-icon">
                <i className="fas fa-money-bill-wave"></i>
              </div>
              <h3>Bank Transfer</h3>
              <p>Make a direct bank transfer to our account</p>
              <div className="bank-details">
                <p><strong>Bank:</strong> KCB Bank</p>
                <p><strong>Account:</strong> 1234567890</p>
                <p><strong>Branch:</strong> Karen Branch</p>
              </div>
            </div>
            
            <div className="other-way-card">
              <div className="other-way-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3>M-PESA Paybill</h3>
              <p>Send your donation via M-PESA</p>
              <div className="mpesa-details">
                <p><strong>Paybill:</strong> 123456</p>
                <p><strong>Account:</strong> EDUCATEHERS</p>
              </div>
            </div>
            
            <div className="other-way-card">
              <div className="other-way-icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Monthly Giving</h3>
              <p>Become a monthly donor and create lasting impact</p>
              <Link to="/contact" className="learn-more-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
            
            <div className="other-way-card">
              <div className="other-way-icon">
                <i className="fas fa-gift"></i>
              </div>
              <h3>In-Kind Donations</h3>
              <p>Donate books, supplies, or equipment</p>
              <Link to="/contact" className="learn-more-link">
                Contact Us <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Information */}
      <section className="tax-info">
        <div className="donate-container">
          <div className="tax-info-card">
            <div className="tax-info-icon">
              <i className="fas fa-info-circle"></i>
            </div>
            <div className="tax-info-content">
              <h3>Tax Deductible Donations</h3>
              <p>
                EducateHers Kenya is a registered non-profit organization. All donations are tax-deductible 
                to the extent allowed by law. You will receive a receipt for your donation for tax purposes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="donate-cta">
        <div className="donate-cta-content">
          <h2>Every Contribution Counts</h2>
          <p>Together, we can empower every girl to reach her full potential through education</p>
          <div className="donate-cta-buttons">
            <a 
              href="https://changa.co.ke/educatehers" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary-large"
            >
              Donate via M-Changa
            </a>
            <Link to="/contact" className="btn-secondary-large">
              Have Questions?
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
