import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import ScrollAnimation from '../components/ScrollAnimation'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'

interface TeamMember {
  name: string
  role: string
  bio: string
  image?: string
  social?: {
    facebook?: string
    twitter?: string
    linkedin?: string
    email?: string
  }
}

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Jane Kamau",
    role: "Executive Director",
    bio: "With over 15 years of experience in education advocacy, Dr. Kamau leads our mission to empower girls through education across Kenya.",
    social: {
      linkedin: "#",
      email: "jane@educateherskenya.org"
    }
  },
  {
    name: "Peter Ochieng",
    role: "Programs Manager",
    bio: "Peter oversees all our education programs and partnerships with schools, ensuring impactful implementation of gender-responsive practices.",
    social: {
      linkedin: "#",
      email: "peter@educateherskenya.org"
    }
  },
  {
    name: "Grace Wanjiru",
    role: "Community Outreach Coordinator",
    bio: "Grace builds bridges between communities, schools, and EducateHers Kenya, fostering awareness and support for girls' education.",
    social: {
      facebook: "#",
      twitter: "#",
      email: "grace@educateherskenya.org"
    }
  },
  {
    name: "Michael Kiprono",
    role: "Finance & Operations Manager",
    bio: "Michael ensures transparent financial management and smooth operations, maximizing the impact of every donation we receive.",
    social: {
      linkedin: "#",
      email: "michael@educateherskenya.org"
    }
  },
  {
    name: "Sarah Akinyi",
    role: "Communications & Advocacy Lead",
    bio: "Sarah amplifies our voice through strategic communications, social media, and advocacy campaigns for gender equality in education.",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      email: "sarah@educateherskenya.org"
    }
  },
  {
    name: "David Mwangi",
    role: "Volunteer Coordinator",
    bio: "David manages our volunteer program, matching passionate individuals with meaningful opportunities to support girls' education.",
    social: {
      linkedin: "#",
      email: "david@educateherskenya.org"
    }
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
        <div className="container">
          <ScrollAnimation animation="fade-in">
            <div className="team-intro">
              <h2>Working Together for Change</h2>
              <p>
                Our diverse team brings together expertise in education, community development, 
                advocacy, and program management. United by a common goal, we work tirelessly 
                to ensure every girl in Kenya has access to quality education.
              </p>
            </div>
          </ScrollAnimation>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <ScrollAnimation 
                key={index} 
                animation="slide-up" 
                delay={index * 100}
              >
                <article className="team-card">
                  <div className="team-member-image">
                    {member.image ? (
                      <img src={member.image} alt={member.name} />
                    ) : (
                      <div className="team-member-placeholder">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>
                  <div className="team-member-info">
                    <h3>{member.name}</h3>
                    <p className="team-member-role">{member.role}</p>
                    <p className="team-member-bio">{member.bio}</p>
                    {member.social && (
                      <div className="team-member-social">
                        {member.social.facebook && (
                          <a href={member.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebookF />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaTwitter />
                          </a>
                        )}
                        {member.social.linkedin && (
                          <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedinIn />
                          </a>
                        )}
                        {member.social.email && (
                          <a href={`mailto:${member.social.email}`} aria-label="Email">
                            <FaEnvelope />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation animation="fade-in">
            <div className="team-cta">
              <h2>Join Our Mission</h2>
              <p>Want to be part of the change? We're always looking for passionate individuals to join our team.</p>
              <Link to="/volunteer" className="cta-button">
                Volunteer With Us
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  )
}
