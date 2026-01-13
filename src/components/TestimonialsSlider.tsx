import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa'

interface Testimonial {
  name: string
  role: string
  quote: string
  image?: string
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Mwangi",
    role: "Scholarship Recipient, 2023",
    quote: "EducateHers Kenya changed my life. Thanks to their scholarship program, I'm now pursuing my dream of becoming a teacher. I want to inspire other girls just like they inspired me."
  },
  {
    name: "James Omondi",
    role: "School Principal, Turkana",
    quote: "The gender-responsive education training from EducateHers Kenya transformed our school. We've seen a significant increase in girls' enrollment and performance. Their approach is truly impactful."
  },
  {
    name: "Grace Achieng",
    role: "Community Leader",
    quote: "Working with EducateHers Kenya has empowered our community to value girls' education. The awareness campaigns and workshops have changed mindsets and created lasting positive change."
  },
  {
    name: "Mary Njeri",
    role: "University Student",
    quote: "I'm forever grateful to EducateHers Kenya. Their mentorship program gave me the confidence to pursue STEM education. Now I'm studying engineering and want to be a role model for other girls."
  }
]

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <section className="testimonials-section" aria-labelledby="testimonials-heading">
      <div className="testimonials-container">
        <h2 id="testimonials-heading" className="testimonials-title">Success Stories</h2>
        <p className="testimonials-subtitle">Hear from those whose lives we've touched</p>

        <div className="testimonials-slider">
          <button 
            className="slider-arrow left"
            onClick={goToPrevious}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>

          <div className="testimonials-content">
            <FaQuoteLeft className="quote-icon" aria-hidden="true" />
            <blockquote className="testimonial-quote">
              <p>{testimonials[currentIndex].quote}</p>
            </blockquote>
            <div className="testimonial-author">
              <h3>{testimonials[currentIndex].name}</h3>
              <p>{testimonials[currentIndex].role}</p>
            </div>
          </div>

          <button 
            className="slider-arrow right"
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="slider-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
