import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function Home() {
  return (
    <main>
      <SEO 
        title="Home"
        description="EducateHers Kenya is a non-profit organization dedicated to empowering girls through education, advocating for gender equality, and creating opportunities for young women across Kenya."
        keywords="girls education Kenya, gender equality, education NGO, empower girls, Kenya education, girls empowerment, scholarship programs, STEM education for girls, gender-responsive education"
        url="https://educateherskenya.org"
      />
      {/* Hero Section with Background Image */}
      <section className="hero-section" aria-label="Hero banner">
        <div className="hero-overlay">
          <h1 className="hero-title">
            EDUCATE HER EMPOWER THE WORLD
          </h1>
          <p className="hero-subtitle">
            We promote gender equality in education through awareness-building, training programs, and the implementation of gender-responsive practices
          </p>
          <button className="hero-donate-btn" aria-label="Make a donation">
            Donate
          </button>
        </div>
      </section>

      {/* Ways to Help Section */}
      <section className="ways-to-help-section" aria-labelledby="ways-to-help-heading">
        <h2 id="ways-to-help-heading" className="visually-hidden">Ways to Help</h2>
        <div className="ways-grid">
          {/* Crowdfunding Card */}
          <article className="card help-card">
            <div className="help-icon teal" role="img" aria-label="Money emoji">💰</div>
            <h3 className="help-title teal">CROWDFUNDING</h3>
            <p className="help-description">
              We can't educate her alone, will be better with your donation. We call on fundraising from anything that you can.
            </p>
            <button className="help-btn btn-teal">
              Partner with us and Educate Her today
            </button>
          </article>

          {/* Scholarship Card */}
          <article className="card help-card">
            <div className="help-icon orange" role="img" aria-label="Graduation cap emoji">🎓</div>
            <h3 className="help-title orange">GIVE SCHOLARSHIP</h3>
            <p className="help-description">
              We think that education is best way to help needy. You are nonprofit organization, NGO, if you can, let do it.
            </p>
            <button className="help-btn btn-orange">
              Support a Scholar
            </button>
          </article>

          {/* Volunteer Card */}
          <article className="card help-card">
            <div className="help-icon teal" role="img" aria-label="Handshake emoji">🤝</div>
            <h3 className="help-title teal">VOLUNTEER</h3>
            <p className="help-description">
              Share your time, skills, and passion to mentor and empower young girls through our volunteer programs.
            </p>
            <Link to="/volunteer" className="help-btn-link">
              <button className="help-btn btn-teal">
                Join Our Team
              </button>
            </Link>
          </article>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="stats-section" aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="visually-hidden">Our Impact Statistics</h2>
        <div className="stats-grid">
          <StatCounter number="3+" label="Projects" />
          <StatCounter number="20,000+" label="Donations" />
          <StatCounter number="10+" label="Volunteers" />
          <StatCounter number="3+" label="Years" />
        </div>
      </section>

      {/* Help Us - Volunteer Section */}
      <section className="volunteer-info-section">
        <div className="volunteer-header">
          <h2 className="volunteer-main-title">Help Us</h2>
          <h3 className="volunteer-subtitle">Raise Your Funds For a Cause That You Care</h3>
          <p className="volunteer-intro">
            Hello. We have been present for over 3 years in the market. We are here to Educate Her
          </p>
        </div>

        <div className="volunteer-opportunities-grid">
          <VolunteerOpportunity 
            number="01"
            title="Advocacy Support"
            description="Assist in organizing and executing advocacy campaigns and awareness events aimed at addressing gender inequalities in education."
          />
          <VolunteerOpportunity 
            number="02"
            title="Community Engagement"
            description="Engage with diverse stakeholders, including schools, NGOs, government agencies, and local communities, to promote gender equality initiatives."
          />
          <VolunteerOpportunity 
            number="03"
            title="Event Support"
            description="Provide assistance in organizing workshops, seminars, panel discussions, and conferences to engage the community and drive conversations about gender inclusivity in education."
          />
          <VolunteerOpportunity 
            number="04"
            title="Collaborative Efforts"
            description="Work closely with other volunteers and team members to amplify the impact of our initiatives and foster collaboration with partner organizations"
          />
        </div>

        <div className="volunteer-cta">
          <Link to="/volunteer">
            <button className="volunteer-cta-btn">
              Become Our Volunteer
            </button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="why-choose-header">
          <p className="why-choose-tagline">ONE OF THE BEST AROUND</p>
          <h2 className="why-choose-title">Why You Should Choose Us</h2>
        </div>
        <div className="why-choose-grid">
          <div className="why-choose-card">
            <h3 className="why-choose-card-title">Empowering Girls</h3>
            <p className="why-choose-card-description">
              Education empowers girls by providing them with knowledge, skills, and confidence to make informed decisions about their lives. When girls are educated, they are more likely to marry later, have fewer children, and participate more actively in the workforce, thus increasing their opportunities for personal and professional growth.
            </p>
          </div>
          <div className="why-choose-card">
            <h3 className="why-choose-card-title">Breaking the Cycle of Poverty</h3>
            <p className="why-choose-card-description">
              Education is a powerful tool for breaking the cycle of poverty, and when girls are educated, they are more likely to escape poverty themselves and contribute to their communities' economic development. By donating to an organization that advocates for gender equality by educating girls, you are directly contributing to uplifting entire communities and fostering sustainable development.
            </p>
          </div>
          <div className="why-choose-card">
            <h3 className="why-choose-card-title">Building Resilient Communities</h3>
            <p className="why-choose-card-description">
              Educated girls are better equipped to face and respond to challenges such as climate change, conflict, and natural disasters. By supporting education initiatives for girls, you are investing in the resilience and sustainability of communities, as educated individuals are more adaptable, resourceful, and capable of driving positive change.
            </p>
          </div>
          <div className="why-choose-card">
            <h3 className="why-choose-card-title">Promoting Health and Well-being</h3>
            <p className="why-choose-card-description">
              Educated girls are more likely to have access to healthcare information and resources, leading to improved health outcomes for themselves and their families. By supporting initiatives that educate girls about health and hygiene, you are contributing to the overall well-being of communities and reducing the prevalence of diseases and maternal mortality rates.
            </p>
          </div>
          <div className="why-choose-card">
            <h3 className="why-choose-card-title">Creating Future Leaders</h3>
            <p className="why-choose-card-description">
              Educated girls are the future leaders, innovators, and changemakers of society. By investing in their education today, you are investing in the leaders of tomorrow who will advocate for justice, equality, and human rights. Your contribution can have a ripple effect, inspiring other girls to pursue education and become agents of positive change in their communities and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="team-section">
        <div className="team-header">
          <p className="team-tagline">OUR TEAMS</p>
          <h2 className="team-title">Our Awesome Team</h2>
          <p className="team-subtitle">We work with a very great team focused on helping Her be educated</p>
        </div>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-image-container">
              <img src="/assets/team/cyprian-chenani.png" alt="Cyprian Chenani" className="team-image" />
              <div className="team-overlay">
                <div className="team-social">
                  <a href="#" className="social-icon" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="social-icon" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="social-icon" aria-label="Email"><i className="fas fa-envelope"></i></a>
                </div>
              </div>
            </div>
            <div className="team-card-content">
              <h3 className="team-member-name">Cyprian Chenani, Bsc</h3>
              <p className="team-member-role">Founder/Lead Advocate</p>
              <p className="team-description">
                As the driving force behind our advocacy campaign, our Founder/Lead Advocate sets the vision and direction for our efforts. With a passion for social change and a commitment to empowering youth voices.
              </p>
            </div>
          </div>
          <div className="team-card">
            <div className="team-image-container">
              <img src="/assets/team/bramuel-wekesa-2.jpg" alt="Bramuel Wekesa" className="team-image" />
              <div className="team-overlay">
                <div className="team-social">
                  <a href="#" className="social-icon" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="social-icon" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="social-icon" aria-label="Email"><i className="fas fa-envelope"></i></a>
                </div>
              </div>
            </div>
            <div className="team-card-content">
              <h3 className="team-member-name">Bramuel Wekesa, Bsc</h3>
              <p className="team-member-role">Campaign Coordinator/Event Planner</p>
              <p className="team-description">
                The mastermind behind our advocacy events and campaigns, orchestrating every detail to ensure their success. From coordinating logistics to rallying support from partners and volunteers.
              </p>
            </div>
          </div>
          <div className="team-card">
            <div className="team-image-container">
              <img src="/assets/team/emmanuel-kwoba.jpeg" alt="Emmanuel P. Kwoba" className="team-image" />
              <div className="team-overlay">
                <div className="team-social">
                  <a href="#" className="social-icon" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="social-icon" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="social-icon" aria-label="Email"><i className="fas fa-envelope"></i></a>
                </div>
              </div>
            </div>
            <div className="team-card-content">
              <h3 className="team-member-name">Emmanuel P. Kwoba</h3>
              <p className="team-member-role">Web Developer/Technical Support</p>
              <p className="team-description">
                Ensures that our website runs smoothly and effectively serves as a hub for our advocacy efforts. Keeps our online platform up to date, secure, and user-friendly, empowering us to reach a wider audience.
              </p>
            </div>
          </div>
          <div className="team-card">
            <div className="team-image-container">
              <img src="/assets/team/eve-maina.jpg" alt="Eve Maina" className="team-image" />
              <div className="team-overlay">
                <div className="team-social">
                  <a href="#" className="social-icon" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="social-icon" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="social-icon" aria-label="Email"><i className="fas fa-envelope"></i></a>
                </div>
              </div>
            </div>
            <div className="team-card-content">
              <h3 className="team-member-name">Eve Maina</h3>
              <p className="team-member-role">Communications Specialist</p>
              <p className="team-description">
                The linchpin of our outreach efforts, responsible for crafting clear, concise, and compelling messaging that resonates with our target audience through strategic communication strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section" aria-labelledby="partners-heading">
        <div className="partners-container">
          <h2 id="partners-heading" className="partners-title">Our Partners & Collaborators</h2>
          <p className="partners-subtitle">
            Working together with organizations that share our vision for gender equality in education
          </p>
          <div className="partners-grid">
            {/* First set of partners */}
            <div className="partner-logo-container">
              <img src="/assets/partners/uniport-loans.png" alt="Uniport Loans Ltd" className="partner-logo" />
            </div>
            <div className="partner-logo-container">
              <img src="/assets/partners/apceiu.png" alt="APCEIU - Asia-Pacific Centre of Education for International Understanding" className="partner-logo" />
            </div>
            <div className="partner-logo-container">
              <img src="/assets/partners/biji-biji.png" alt="Biji Biji Initiative" className="partner-logo" />
            </div>
            <div className="partner-logo-container">
              <img src="/assets/partners/government-kenya.png" alt="The Government of Kenya" className="partner-logo" />
            </div>
            <div className="partner-logo-container">
              <img src="/assets/partners/ministry-education.png" alt="Ministry of Education Kenya" className="partner-logo" />
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="partner-logo-container">
              <img src="/assets/partners/uniport-loans.png" alt="Uniport Loans Ltd" className="partner-logo" />
            </div>
            <div className="partner-logo-container">
              <img src="/assets/partners/apceiu.png" alt="APCEIU - Asia-Pacific Centre of Education for International Understanding" className="partner-logo" />
            </div>
            <div className="partner-logo-container">
              <img src="/assets/partners/biji-biji.png" alt="Biji Biji Initiative" className="partner-logo" />
            </div>
            <div className="partner-logo-container">
              <img src="/assets/partners/government-kenya.png" alt="The Government of Kenya" className="partner-logo" />
            </div>
            <div className="partner-logo-container">
              <img src="/assets/partners/ministry-education.png" alt="Ministry of Education Kenya" className="partner-logo" />
            </div>
          </div>
          <p className="partners-cta-text">
            Interested in partnering with us? <Link to="/contact" className="partners-cta-link">Get in touch</Link>
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2 className="cta-title">Join Our Mission</h2>
        <p className="cta-description">
          Together, we can create lasting change. Whether through volunteering, donations, or spreading awareness, every action counts.
        </p>
        <Link to="/contact" className="cta-link">
          <button className="cta-btn">
            Contact Us
          </button>
        </Link>
      </section>
    </main>
  )
}

// Reusable Components
interface StatCounterProps {
  number: string
  label: string
}

function StatCounter({ number, label }: StatCounterProps) {
  return (
    <div className="stat-item">
      <div className="stat-number">{number}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

interface MissionCardProps {
  icon: string
  color: 'teal' | 'orange'
  title: string
  description: string
}

function MissionCard({ icon, color, title, description }: MissionCardProps) {
  return (
    <div className="card mission-card">
      <div className={`mission-icon ${color}`}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

interface VolunteerOpportunityProps {
  number: string
  title: string
  description: string
}

function VolunteerOpportunity({ number, title, description }: VolunteerOpportunityProps) {
  return (
    <div className="volunteer-opportunity">
      <div className="volunteer-number">{number}.</div>
      <div className="volunteer-content">
        <h4 className="volunteer-opportunity-title">{title}:</h4>
        <p className="volunteer-opportunity-description">{description}</p>
      </div>
    </div>
  )
}
