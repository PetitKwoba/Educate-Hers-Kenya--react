import React from 'react'
import SEO from '../components/SEO'

interface ResponsibilityProps {
  number: string
  title: string
  description: string
}

const Responsibility: React.FC<ResponsibilityProps> = ({ number, title, description }) => {
  return (
    <div className="responsibility-item">
      <div className="responsibility-number">{number}</div>
      <div className="responsibility-content">
        <h3 className="responsibility-title">{title}</h3>
        <p className="responsibility-description">{description}</p>
      </div>
    </div>
  )
}

interface QualificationProps {
  text: string
}

const Qualification: React.FC<QualificationProps> = ({ text }) => {
  return (
    <div className="qualification-item">
      <i className="fas fa-check-circle qualification-icon"></i>
      <p className="qualification-text">{text}</p>
    </div>
  )
}

interface BenefitProps {
  icon: string
  text: string
}

const Benefit: React.FC<BenefitProps> = ({ icon, text }) => {
  return (
    <div className="benefit-item">
      <div className="benefit-icon">{icon}</div>
      <p className="benefit-text">{text}</p>
    </div>
  )
}

export default function Volunteer() {
  return (
    <main className="volunteer-page">
      <SEO 
        title="Volunteer"
        description="Join EducateHers Kenya as a volunteer advocate for gender equality in education. Make a difference in girls' lives through mentorship, advocacy, and community outreach programs."
        keywords="volunteer Kenya, volunteer opportunities, gender equality volunteer, education volunteer, girls education advocate, volunteer Kenya NGO"
        url="https://educateherskenya.org/volunteer"
      />
      {/* Hero Section */}
      <section className="volunteer-hero">
        <div className="volunteer-hero-content">
          <h1 className="volunteer-main-title">Volunteer</h1>
          <h2 className="volunteer-subtitle">Join EducateHERs in Promoting Gender Equality in Education</h2>
        </div>
      </section>

      {/* Position Info */}
      <section className="position-info-section">
        <div className="position-info-container">
          <h2 className="position-title">Position: Volunteer Advocate for Gender Equality in Education</h2>
          <div className="position-details">
            <div className="position-detail-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <strong>Location:</strong> Remote (meetings may be conducted either in person or virtually)
              </div>
            </div>
            <div className="position-detail-item">
              <i className="fas fa-clock"></i>
              <div>
                <strong>Duration:</strong> Flexible, based on volunteer availability and commitment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          <h2 className="section-heading">About EducateHERs</h2>
          <p className="about-text">
            EducateHERs is a dynamic organization dedicated to promoting gender equality in education through consulting, training, advocacy, and awareness initiatives. Our mission is to create inclusive learning environments that empower all individuals, regardless of gender, to reach their full potential.
          </p>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="responsibilities-section">
        <div className="responsibilities-container">
          <h2 className="section-heading">Key Responsibilities</h2>
          <div className="responsibilities-grid">
            <Responsibility
              number="01"
              title="Advocacy Support"
              description="Assist in organizing and executing advocacy campaigns and awareness events aimed at addressing gender inequalities in education."
            />
            <Responsibility
              number="02"
              title="Community Engagement"
              description="Engage with diverse stakeholders, including schools, NGOs, government agencies, and local communities, to promote gender equality initiatives."
            />
            <Responsibility
              number="03"
              title="Meeting Participation"
              description="Attend regular meetings either in person or virtually to discuss ongoing projects, share insights, and collaborate with team members."
            />
            <Responsibility
              number="04"
              title="Content Creation"
              description="Contribute to the development of compelling content, including articles, social media posts, and educational resources, to raise awareness about gender equality in education."
            />
            <Responsibility
              number="05"
              title="Event Support"
              description="Provide assistance in organizing workshops, seminars, panel discussions, and conferences to engage the community and drive conversations about gender inclusive in education."
            />
            <Responsibility
              number="06"
              title="Collaborative Efforts"
              description="Work closely with other volunteers and team members to amplify the impact of our initiatives and foster collaboration with partner organizations."
            />
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="qualifications-section">
        <div className="qualifications-container">
          <h2 className="section-heading">Qualifications</h2>
          <div className="qualifications-grid">
            <Qualification text="Passion for promoting gender equality in education and creating positive social change." />
            <Qualification text="Excellent communication and interpersonal skills." />
            <Qualification text="Ability to work effectively both independently and as part of a team." />
            <Qualification text="Willingness to attend meetings either in person or virtually, based on availability." />
            <Qualification text="Commitment to upholding the values and mission of EducateHERs." />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section">
        <div className="benefits-container">
          <h2 className="section-heading">Benefits</h2>
          <div className="benefits-grid">
            <Benefit
              icon="🎯"
              text="Opportunity to contribute to meaningful advocacy efforts and drive real change in promoting gender equality in education."
            />
            <Benefit
              icon="📈"
              text="Gain valuable experience in advocacy, community engagement, and event coordination."
            />
            <Benefit
              icon="🤝"
              text="Expand your professional network by collaborating with diverse stakeholders and organizations."
            />
            <Benefit
              icon="💖"
              text="Personal satisfaction of making a difference in the lives of students, educators, and communities."
            />
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="application-cta-section">
        <div className="application-cta-container">
          <h2 className="application-cta-title">How to Apply</h2>
          <p className="application-cta-text">
            If you are passionate about gender equality in education and eager to make a difference, we invite you to join us as a Volunteer Advocate for EducateHERs. Please send a brief statement of interest outlining your motivation for volunteering and any relevant experience by filling application form.
          </p>
          <a 
            href="https://forms.gle/ogAkJ1SL8GmQzi3P6" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="application-btn"
          >
            Fill Application Form
            <i className="fas fa-arrow-right"></i>
          </a>
          <p className="volunteer-note">
            <strong>NOTE:</strong> THIS POSITION IS VOLUNTARY AND DOES NOT OFFER FINANCIAL COMPENSATION.
          </p>
          <p className="volunteer-tagline">
            Join us in shaping a more inclusive future for education!
          </p>
        </div>
      </section>
    </main>
  )
}
