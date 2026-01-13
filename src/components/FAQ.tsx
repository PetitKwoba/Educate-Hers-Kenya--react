import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What is EducateHers Kenya's mission?",
    answer: "Our mission is to promote gender equality in education through awareness-building, training programs, and the implementation of gender-responsive practices. We empower girls through education and create opportunities for young women across Kenya."
  },
  {
    question: "How can I donate to EducateHers Kenya?",
    answer: "You can donate through our website by clicking the 'Donate' button. We accept various payment methods and all donations go directly towards supporting girls' education programs, scholarships, and community initiatives."
  },
  {
    question: "Can I volunteer with EducateHers Kenya?",
    answer: "Yes! We welcome volunteers who are passionate about girls' education and gender equality. Visit our Volunteer page to learn about current opportunities and how to apply. We offer both remote and on-site volunteer positions."
  },
  {
    question: "How are donations used?",
    answer: "Donations are used to fund scholarships, educational materials, training programs for teachers and communities, advocacy initiatives, and operational costs. We maintain full transparency and provide regular updates on how funds are utilized."
  },
  {
    question: "Where does EducateHers Kenya operate?",
    answer: "We primarily operate in Kenya, with a focus on underserved communities where girls face significant barriers to education. Our recent projects include work in Turkana County and other regions across the country."
  },
  {
    question: "How can schools partner with EducateHers Kenya?",
    answer: "Schools interested in partnering with us can contact us through our Contact page. We collaborate with schools to implement gender-responsive education practices, provide training, and support girls' educational initiatives."
  },
  {
    question: "What is gender-responsive education?",
    answer: "Gender-responsive education addresses the different needs, experiences, and circumstances of girls and boys. It includes teaching methods, curricula, and school environments that promote gender equality and empower all students to reach their full potential."
  },
  {
    question: "How can I stay updated on your work?",
    answer: "Follow us on social media (Facebook, Twitter, Instagram, LinkedIn, and YouTube) and check our blog regularly for updates on our programs, events, and impact stories. You can also subscribe to our newsletter for monthly updates."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-section" aria-labelledby="faq-heading">
      <div className="faq-container">
        <h2 id="faq-heading" className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">Find answers to common questions about our organization and programs</p>
        
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${openIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{faq.question}</span>
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`faq-answer ${openIndex === index ? 'open' : ''}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
