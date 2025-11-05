import React, { useState } from 'react'
import { Link } from 'react-router-dom'

interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  category: 'Workshop' | 'Fundraiser' | 'Networking' | 'Training' | 'Community'
  description: string
  image: string
  spots?: number
  isPast: boolean
  isFeatured?: boolean
  registrationLink?: string
}

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedTab, setSelectedTab] = useState<'upcoming' | 'past'>('upcoming')
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

  const events: Event[] = [
    // Upcoming Events - Commented out for now
    /*
    {
      id: '1',
      title: 'Annual Scholarship Gala',
      date: 'December 15, 2025',
      time: '6:00 PM - 10:00 PM',
      location: 'Nairobi Serena Hotel',
      category: 'Fundraiser',
      description: 'Join us for an elegant evening of celebration and fundraising to support next year\'s scholarship recipients. Featuring inspiring keynote speakers, student performances, silent auction, and networking opportunities with community leaders.',
      image: '/assets/events/gala.jpg',
      spots: 45,
      isPast: false,
      isFeatured: true,
      registrationLink: '#'
    },
    {
      id: '2',
      title: 'STEM Workshop for Girls',
      date: 'January 20, 2026',
      time: '9:00 AM - 4:00 PM',
      location: 'iHub Nairobi',
      category: 'Workshop',
      description: 'Hands-on workshops in coding, robotics, and engineering for girls aged 12-18. Learn from industry professionals, participate in team challenges, and explore exciting career paths in technology and science.',
      image: '/assets/events/stem-workshop.jpg',
      spots: 12,
      isPast: false,
      isFeatured: true,
      registrationLink: '#'
    },
    {
      id: '3',
      title: 'Community Mentor Meetup',
      date: 'February 8, 2026',
      time: '2:00 PM - 5:00 PM',
      location: 'Karen Country Club',
      category: 'Networking',
      description: 'Connect with fellow mentors and mentees in an informal setting. Share experiences, best practices, and build lasting relationships within our mentorship community. Light refreshments provided.',
      image: '/assets/events/mentor-meetup.jpg',
      spots: 28,
      isPast: false,
      registrationLink: '#'
    },
    {
      id: '4',
      title: 'Leadership Training Camp',
      date: 'March 5-7, 2026',
      time: 'All Day',
      location: 'Great Rift Valley Lodge',
      category: 'Training',
      description: 'A 3-day intensive leadership development camp for selected girls. Activities include team building exercises, public speaking workshops, goal setting sessions, and mentorship circles.',
      image: '/assets/events/leadership-camp.jpg',
      spots: 8,
      isPast: false,
      registrationLink: '#'
    },
    {
      id: '5',
      title: 'Career Fair & Expo',
      date: 'April 12, 2026',
      time: '10:00 AM - 4:00 PM',
      location: 'KICC Nairobi',
      category: 'Networking',
      description: 'Explore diverse career opportunities and connect with potential employers and universities. Features career counseling sessions, university booths, and inspiring talks from successful women professionals.',
      image: '/assets/events/career-fair.jpg',
      isPast: false,
      registrationLink: '#'
    },
    {
      id: '6',
      title: 'Parent-Teacher Workshop',
      date: 'May 3, 2026',
      time: '9:00 AM - 12:00 PM',
      location: 'Virtual Event',
      category: 'Workshop',
      description: 'Educational workshop for parents and teachers on supporting girls\' education. Topics include addressing gender stereotypes, creating supportive learning environments, and fostering STEM interest.',
      image: '/assets/events/parent-workshop.jpg',
      isPast: false,
      registrationLink: '#'
    },
    */

    // Past Events
    {
      id: '7',
      title: 'Gender Inclusion Training Workshop – Turkana 2025',
      date: 'October 18, 2025',
      time: 'All Day',
      location: 'Lodwar Youth Empowerment Centre, Turkana County',
      category: 'Training',
      description: 'Intensive workshop bringing together youth leaders, teachers, and community representatives to strengthen advocacy for gender-inclusive education in Turkana County. Equipped 30 participants with practical tools to promote girls\' education, address cultural barriers such as early marriage, and foster inclusive classroom and community practices. Participants formed school-based EducateHers Clubs to sustain advocacy activities and mentorship beyond the workshop.',
      image: '/assets/events/turkana-training.jpg',
      isPast: true
    }
    
    // Other Past Events - Commented out for now
    /*
    {
      id: '8',
      title: 'Back-to-School Drive 2025',
      date: 'August 15, 2025',
      time: 'All Day',
      location: 'Multiple Locations',
      category: 'Community',
      description: 'Successfully provided school supplies, uniforms, and books to 250+ students across 5 communities. Thank you to all volunteers and donors who made this possible!',
      image: '/assets/events/school-drive.jpg',
      isPast: true
    },
    {
      id: '9',
      title: 'International Women\'s Day Celebration',
      date: 'March 8, 2025',
      time: '2:00 PM - 6:00 PM',
      location: 'Nairobi National Museum',
      category: 'Community',
      description: 'Celebrated with inspiring panel discussions featuring female leaders from various sectors, art exhibitions, cultural performances, and networking sessions.',
      image: '/assets/events/womens-day.jpg',
      isPast: true
    },
    {
      id: '10',
      title: 'Girls in Tech Summit',
      date: 'June 20, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'Strathmore University',
      category: 'Workshop',
      description: 'Full-day summit featuring tech workshops, coding bootcamps, and talks from female tech entrepreneurs. Over 150 girls participated in hands-on sessions.',
      image: '/assets/events/tech-summit.jpg',
      isPast: true
    },
    {
      id: '11',
      title: 'Annual Fundraising Dinner',
      date: 'October 10, 2025',
      time: '6:30 PM - 10:00 PM',
      location: 'Villa Rosa Kempinski',
      category: 'Fundraiser',
      description: 'Raised over KES 3.5M for scholarship programs. Featured keynote by Cabinet Secretary for Education and entertainment by local artists.',
      image: '/assets/events/dinner.jpg',
      isPast: true
    }
    */
  ]

  const categories = ['All', 'Workshop', 'Fundraiser', 'Networking', 'Training', 'Community']

  const filteredEvents = events
    .filter(event => selectedTab === 'upcoming' ? !event.isPast : event.isPast)
    .filter(event => selectedCategory === 'All' || event.category === selectedCategory)

  const featuredEvents = events.filter(event => !event.isPast && event.isFeatured)

  return (
    <main className="events-page">
      {/* Hero Section */}
      <section className="events-hero">
        <div className="events-hero-content">
          <h1 className="events-hero-title">Our Events</h1>
          <p className="events-hero-subtitle">
            Join us at our upcoming events and be part of the movement to empower girls through education
          </p>
        </div>
      </section>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="event-modal-overlay" onClick={() => setSelectedEvent(null)}>
          <div className="event-modal" onClick={(e) => e.stopPropagation()}>
            <button className="event-modal-close" onClick={() => setSelectedEvent(null)}>
              <i className="fas fa-times"></i>
            </button>
            
            <div className="event-modal-image">
              <img 
                src={selectedEvent.image} 
                alt={selectedEvent.title}
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/800x400/00a9ce/ffffff?text=Event+Image'
                }}
              />
              <div className="event-modal-category">{selectedEvent.category}</div>
            </div>

            <div className="event-modal-content">
              <h2 className="event-modal-title">{selectedEvent.title}</h2>
              
              <div className="event-modal-meta">
                <div className="event-meta-item">
                  <i className="fas fa-calendar-alt"></i>
                  <span>{selectedEvent.date}</span>
                </div>
                <div className="event-meta-item">
                  <i className="fas fa-clock"></i>
                  <span>{selectedEvent.time}</span>
                </div>
                <div className="event-meta-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{selectedEvent.location}</span>
                </div>
              </div>

              <div className="event-modal-description">
                <h3>About This Event</h3>
                <p>{selectedEvent.description}</p>
              </div>

              {!selectedEvent.isPast && selectedEvent.spots && (
                <div className="event-modal-spots">
                  <i className="fas fa-users"></i>
                  <strong>{selectedEvent.spots} spots remaining</strong> - Register soon!
                </div>
              )}

              {!selectedEvent.isPast && selectedEvent.registrationLink && (
                <div className="event-modal-actions">
                  <a href={selectedEvent.registrationLink} className="event-modal-register-btn">
                    <i className="fas fa-ticket-alt"></i> Register Now
                  </a>
                  <button className="event-modal-secondary-btn" onClick={() => setSelectedEvent(null)}>
                    Close
                  </button>
                </div>
              )}

              {selectedEvent.isPast && (
                <div className="event-modal-past-badge">
                  <i className="fas fa-check-circle"></i> This event has concluded
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <section className="featured-events-section">
          <div className="events-container">
            <h2 className="section-title">Featured Events</h2>
            <div className="featured-events-grid">
              {featuredEvents.map((event) => (
                <article key={event.id} className="featured-event-card">
                  <div className="featured-event-badge">Featured</div>
                  <div className="featured-event-image">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/600x400/00a9ce/ffffff?text=Event+Image'
                      }}
                    />
                    <div className="featured-event-category">{event.category}</div>
                  </div>
                  <div className="featured-event-content">
                    <h3>{event.title}</h3>
                    <div className="featured-event-meta">
                      <div className="event-meta-item">
                        <i className="fas fa-calendar-alt"></i>
                        <span>{event.date}</span>
                      </div>
                      <div className="event-meta-item">
                        <i className="fas fa-clock"></i>
                        <span>{event.time}</span>
                      </div>
                      <div className="event-meta-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="featured-event-description">{event.description}</p>
                    {event.spots && event.spots < 20 && (
                      <div className="spots-alert">
                        <i className="fas fa-exclamation-circle"></i>
                        Only {event.spots} spots remaining!
                      </div>
                    )}
                    <a href={event.registrationLink} className="featured-event-btn">
                      <i className="fas fa-ticket-alt"></i> Register Now
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Events List Section */}
      <section className="events-list-section">
        <div className="events-container">
          {/* Tabs */}
          <div className="events-tabs">
            <button
              className={`events-tab ${selectedTab === 'upcoming' ? 'active' : ''}`}
              onClick={() => setSelectedTab('upcoming')}
            >
              <i className="fas fa-calendar-plus"></i> Upcoming Events
            </button>
            <button
              className={`events-tab ${selectedTab === 'past' ? 'active' : ''}`}
              onClick={() => setSelectedTab('past')}
            >
              <i className="fas fa-history"></i> Past Events
            </button>
          </div>

          {/* Category Filter */}
          <div className="category-filter">
            <span className="filter-label">Filter by:</span>
            <div className="category-buttons">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          {filteredEvents.length > 0 ? (
            <div className="events-grid">
              {filteredEvents.map((event) => (
                <article 
                  key={event.id} 
                  className="event-card"
                  onClick={() => setSelectedEvent(event)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="event-card-image">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/400x250/00a9ce/ffffff?text=Event+Image'
                      }}
                    />
                    <div className="event-card-category">{event.category}</div>
                  </div>
                  <div className="event-card-content">
                    <h3 className="event-card-title">{event.title}</h3>
                    <div className="event-card-meta">
                      <div className="event-meta-item">
                        <i className="fas fa-calendar-alt"></i>
                        <span>{event.date}</span>
                      </div>
                      <div className="event-meta-item">
                        <i className="fas fa-clock"></i>
                        <span>{event.time}</span>
                      </div>
                      <div className="event-meta-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="event-card-description">{event.description}</p>
                    {!event.isPast && event.spots && (
                      <div className="event-spots">
                        <i className="fas fa-users"></i>
                        {event.spots} spots left
                      </div>
                    )}
                    <div className="event-card-btn-container">
                      <button className="event-card-btn">
                        {event.isPast ? 'View Details' : 'Learn More'}
                        <i className="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-events">
              <i className="fas fa-calendar-times"></i>
              <p>No events found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="events-cta">
        <div className="events-cta-content">
          <h2>Want to Host an Event with Us?</h2>
          <p>Partner with EducateHers Kenya to create impactful events for girls' education</p>
          <Link to="/contact" className="events-cta-btn">
            Get in Touch <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </main>
  )
}
