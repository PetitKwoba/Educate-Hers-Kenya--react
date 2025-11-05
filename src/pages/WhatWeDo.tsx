import React from 'react'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  color: 'teal' | 'orange'
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, color }) => {
  return (
    <article className={`service-card service-card-${color}`}>
      <div className="service-icon" role="img" aria-label={`${title} icon`}>
        {icon}
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </article>
  )
}

export default function WhatWeDo() {
  const services = [
    {
      icon: '💼',
      title: 'Consulting Services',
      description: 'We offer personalized consulting services to schools and educational organizations. Assess their current practices, policies, and curricula related to gender inclusion and provide recommendations for improvement.',
      color: 'teal' as const
    },
    {
      icon: '🎓',
      title: 'Workshops and Training',
      description: 'We design and conduct workshops, seminars, and training sessions for teachers, educators, parents, and students. These sessions cover topics such as gender stereotypes, promoting inclusive classrooms, creating safe spaces, and fostering gender equality.',
      color: 'orange' as const
    },
    {
      icon: '📚',
      title: 'Curriculum Development',
      description: 'We collaborate with schools to develop gender-inclusive curriculum materials, lesson plans, and teaching resources. These materials reflect diverse perspectives and challenge traditional gender roles.',
      color: 'teal' as const
    },
    {
      icon: '📖',
      title: 'Resource Creation',
      description: 'We create and provide educational resources, toolkits, and guides that institutions can use to integrate gender equality into their educational practices.',
      color: 'orange' as const
    },
    {
      icon: '💻',
      title: 'Online Courses',
      description: 'We develop online courses and webinars that educators and parents can access remotely. This allows for a broader reach and greater convenience for participants.',
      color: 'teal' as const
    },
    {
      icon: '📢',
      title: 'Awareness Campaigns/Campaign Strategy',
      description: 'We partner with schools, NGOs, and government agencies to create and implement awareness campaigns aimed at changing societal attitudes and perceptions about gender inequalities in education. Develop comprehensive campaign strategies that outline goals, target audiences, messaging, channels, and activities.',
      color: 'orange' as const
    },
    {
      icon: '📊',
      title: 'Impact Measurement',
      description: 'We offer evaluation and assessment services to measure the impact of gender equality initiatives. This data can help schools and organizations track progress and identify areas for improvement.',
      color: 'teal' as const
    },
    {
      icon: '🤝',
      title: 'Collaborations',
      description: 'We partner with schools, colleges, universities, NGOs, government bodies, and community organizations to create a united front for advocacy efforts.',
      color: 'orange' as const
    },
    {
      icon: '🎨',
      title: 'Content Creation',
      description: 'Develop compelling content, including videos, infographics, posters, articles, and social media posts, to convey key messages and raise awareness.',
      color: 'teal' as const
    },
    {
      icon: '🎯',
      title: 'Event Coordination',
      description: 'Organize workshops, seminars, panel discussions, conferences, and awareness events to engage the community, share insights, and drive conversations.',
      color: 'orange' as const
    },
    {
      icon: '🤲',
      title: 'Partnerships and Sponsorships',
      description: 'Collaborate with corporate sponsors, philanthropic organizations, and brands aligned with the cause to secure funding and resources for campaigns and events.',
      color: 'teal' as const
    },
    {
      icon: '🌐',
      title: 'Online Presence',
      description: 'Establish a strong online presence through social media platforms, a dedicated website, and email marketing to reach a wider audience and disseminate campaign messages.',
      color: 'orange' as const
    },
    {
      icon: '📈',
      title: 'Data Collection',
      description: 'Collect data and feedback to measure the impact of campaigns, which can be used to refine strategies and demonstrate outcomes to stakeholders.',
      color: 'teal' as const
    }
  ]

  return (
    <main className="what-we-do-page">
      {/* Hero Section */}
      <section className="what-we-do-hero">
        <div className="what-we-do-hero-content">
          <h1 className="what-we-do-main-title">What We Do</h1>
          <p className="what-we-do-intro">
            Empowering educators, transforming institutions, and advocating for gender equality in education through comprehensive services and strategic initiatives.
          </p>
        </div>
      </section>

      {/* Key Components Section */}
      <section className="key-components-section">
        <div className="key-components-header">
          <h2 className="key-components-title">Key Components</h2>
          <p className="key-components-subtitle">
            Our multi-faceted approach to advancing gender equality in education
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              color={service.color}
            />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="what-we-do-cta">
        <h2 className="what-we-do-cta-title">Ready to Partner With Us?</h2>
        <p className="what-we-do-cta-description">
          Join us in creating lasting change through education and advocacy
        </p>
        <div className="what-we-do-cta-buttons">
          <a href="/contact" className="cta-btn-primary">Get in Touch</a>
          <a href="/volunteer" className="cta-btn-secondary">Become a Volunteer</a>
        </div>
      </section>
    </main>
  )
}
