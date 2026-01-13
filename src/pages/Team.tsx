import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const teamMembers = [
  {
    name: "Cyprian Chenani, Bsc",
    role: "Founder/Lead Advocate",
    description: "As the driving force behind our advocacy campaign, our Founder/Lead Advocate sets the vision and direction for our efforts. With a passion for social change and a commitment to empowering youth voices.",
    image: "/assets/team/cyprian-chenani.png"
  },
  {
    name: "Bramuel Wekesa, Bsc",
    role: "Campaign Coordinator/Event Planner",
    description: "The mastermind behind our advocacy events and campaigns, orchestrating every detail to ensure their success. From coordinating logistics to rallying support from partners and volunteers.",
    image: "/assets/team/bramuel-wekesa-2.jpg"
  },
  {
    name: "Emmanuel P. Kwoba",
    role: "Web Developer/Technical Support",
    description: "Ensures that our website runs smoothly and effectively serves as a hub for our advocacy efforts. Keeps our online platform up to date, secure, and user-friendly, empowering us to reach a wider audience.",
    image: "/assets/team/emmanuel-kwoba.jpeg"
  },
  {
    name: "Eve Maina",
    role: "Communications Specialist",
    description: "The linchpin of our outreach efforts, responsible for crafting clear, concise, and compelling messaging that resonates with our target audience through strategic communication strategies.",
    image: "assets/team/eve-main.png"
  }
]

export default function Team() {
  return (
    <main className="team-page">
      <SEO
        title="Our Team"
        description="Meet the dedicated team behind EducateHers Kenya. Our passionate professionals work tirelessly to promote gender equality in education and empower girls across Kenya."
        keywords="EducateHers Kenya team, education NGO staff, gender equality advocates, nonprofit team Kenya"
        url="https://educateherskenya.org/team"
      />

      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Our Team</h1>
          <p>Meet the passionate individuals driving change in girls' education</p>
        </div>
      </section>

      <section className="team-section">
        <div className="team-header">
          <p className="team-tagline">OUR TEAMS</p>
          <h2 className="team-title">Our Awesome Team</h2>
          <p className="team-subtitle">We work with a very great team focused on helping Her be educated</p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image-container">
                <img src={member.image} alt={member.name} className="team-image" />
                <div className="team-overlay">
                  <div className="team-social">
                    <a href="#" className="social-icon" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                    <a href="#" className="social-icon" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="social-icon" aria-label="Email"><i className="fas fa-envelope"></i></a>
                  </div>
                </div>
              </div>
              <div className="team-card-content">
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
                <p className="team-description">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2 className="cta-title">Join Our Mission</h2>
        <p className="cta-description">
          Together, we can create lasting change. Whether through volunteering, donations, or spreading awareness, every action counts.
        </p>
        <Link to="/volunteer" className="cta-link">
          <button className="cta-btn">
            Become a Volunteer
          </button>
        </Link>
      </section>
    </main>
  )
}
