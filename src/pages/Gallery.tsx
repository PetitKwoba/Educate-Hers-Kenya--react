import React, { useState } from 'react'
import SEO from '../components/SEO'
import ScrollAnimation from '../components/ScrollAnimation'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface GalleryImage {
  src: string
  alt: string
  category: 'events' | 'programs' | 'community' | 'workshops'
  caption?: string
}

const galleryImages: GalleryImage[] = [
  {
    src: '/images/gallery/event1.jpg',
    alt: 'Girls at educational workshop',
    category: 'workshops',
    caption: 'Gender-Responsive Education Workshop in Turkana County'
  },
  {
    src: '/images/gallery/event2.jpg',
    alt: 'Community gathering for girls education',
    category: 'community',
    caption: 'Community awareness session on girls\' education'
  },
  {
    src: '/images/gallery/program1.jpg',
    alt: 'Scholarship recipients graduation',
    category: 'programs',
    caption: 'Scholarship program graduation ceremony'
  },
  {
    src: '/images/gallery/event3.jpg',
    alt: 'Annual fundraising event',
    category: 'events',
    caption: 'Annual fundraising gala 2025'
  },
  {
    src: '/images/gallery/workshop1.jpg',
    alt: 'Teachers training session',
    category: 'workshops',
    caption: 'Teacher training on gender equality'
  },
  {
    src: '/images/gallery/community1.jpg',
    alt: 'Village outreach program',
    category: 'community',
    caption: 'Village outreach program'
  }
]

type Category = 'all' | 'events' | 'programs' | 'community' | 'workshops'

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const goToPrevious = () => {
    if (lightboxIndex === null) return
    setLightboxIndex(lightboxIndex === 0 ? filteredImages.length - 1 : lightboxIndex - 1)
  }

  const goToNext = () => {
    if (lightboxIndex === null) return
    setLightboxIndex(lightboxIndex === filteredImages.length - 1 ? 0 : lightboxIndex + 1)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') goToPrevious()
    if (e.key === 'ArrowRight') goToNext()
  }

  return (
    <main className="gallery-page">
      <SEO
        title="Photo Gallery"
        description="Browse photos from our programs, events, workshops, and community initiatives. See the impact of EducateHers Kenya in empowering girls through education."
        keywords="EducateHers Kenya photos, girls education events, community programs Kenya, education workshops"
        url="https://educateherskenya.org/gallery"
      />

      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Photo Gallery</h1>
          <p>Capturing moments of empowerment and change</p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <ScrollAnimation animation="fade-in">
            <div className="gallery-filters">
              <button
                className={selectedCategory === 'all' ? 'active' : ''}
                onClick={() => setSelectedCategory('all')}
              >
                All
              </button>
              <button
                className={selectedCategory === 'events' ? 'active' : ''}
                onClick={() => setSelectedCategory('events')}
              >
                Events
              </button>
              <button
                className={selectedCategory === 'programs' ? 'active' : ''}
                onClick={() => setSelectedCategory('programs')}
              >
                Programs
              </button>
              <button
                className={selectedCategory === 'community' ? 'active' : ''}
                onClick={() => setSelectedCategory('community')}
              >
                Community
              </button>
              <button
                className={selectedCategory === 'workshops' ? 'active' : ''}
                onClick={() => setSelectedCategory('workshops')}
              >
                Workshops
              </button>
            </div>
          </ScrollAnimation>

          <div className="gallery-grid">
            {filteredImages.map((image, index) => (
              <ScrollAnimation key={index} animation="fade-in" delay={index * 50}>
                <div 
                  className="gallery-item"
                  onClick={() => openLightbox(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
                >
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <div className="gallery-overlay">
                    <p>{image.caption || image.alt}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div 
          className="lightbox-overlay"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button 
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <FaTimes />
          </button>

          <button 
            className="lightbox-arrow left"
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            aria-label="Previous image"
          >
            <FaChevronLeft />
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={filteredImages[lightboxIndex].src} 
              alt={filteredImages[lightboxIndex].alt}
            />
            {filteredImages[lightboxIndex].caption && (
              <p className="lightbox-caption">{filteredImages[lightboxIndex].caption}</p>
            )}
          </div>

          <button 
            className="lightbox-arrow right"
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            aria-label="Next image"
          >
            <FaChevronRight />
          </button>

          <div className="lightbox-counter">
            {lightboxIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </main>
  )
}
