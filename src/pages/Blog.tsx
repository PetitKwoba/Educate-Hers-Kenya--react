import React from 'react'

export default function Blog() {
  return (
    <section>
      <h1>Blog & Stories</h1>
      <p style={{ fontSize: '1.15rem', marginBottom: '2rem' }}>
        Read inspiring stories from our students, volunteers, and partners. Stay updated on our latest programs and impact.
      </p>

      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <article className="card">
          <div style={{ 
            height: '200px',
            background: 'linear-gradient(135deg, #00a9ce, #60d4f4)',
            borderRadius: '8px',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '3rem'
          }}>
            📚
          </div>
          <p style={{ color: '#ff8c42', fontWeight: 600, fontSize: '0.9rem' }}>November 1, 2025</p>
          <h3>From Classroom to Career: Sarah's Journey</h3>
          <p>
            Meet Sarah, one of our scholarship recipients who just graduated with honors in Computer Science. Learn how EducateHers Kenya helped her overcome challenges and pursue her dreams in technology.
          </p>
          <button style={{ marginTop: '1rem' }}>Read More</button>
        </article>

        <article className="card">
          <div style={{ 
            height: '200px',
            background: 'linear-gradient(135deg, #ff8c42, #ffb366)',
            borderRadius: '8px',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '3rem'
          }}>
            🌟
          </div>
          <p style={{ color: '#ff8c42', fontWeight: 600, fontSize: '0.9rem' }}>October 15, 2025</p>
          <h3>Impact Report: 2025 Highlights</h3>
          <p>
            This year, we've reached new milestones: 500+ girls supported, 50+ mentors engaged, and partnerships with 15 schools. Explore our achievements and the stories behind the numbers.
          </p>
          <button style={{ marginTop: '1rem' }}>Read More</button>
        </article>

        <article className="card">
          <div style={{ 
            height: '200px',
            background: 'linear-gradient(135deg, #00a9ce, #60d4f4)',
            borderRadius: '8px',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '3rem'
          }}>
            💡
          </div>
          <p style={{ color: '#ff8c42', fontWeight: 600, fontSize: '0.9rem' }}>September 28, 2025</p>
          <h3>Why Girls' Education Matters</h3>
          <p>
            Investing in girls' education creates a ripple effect that transforms families, communities, and entire nations. Discover the data and stories that prove education is the key to breaking cycles of poverty.
          </p>
          <button style={{ marginTop: '1rem' }}>Read More</button>
        </article>
      </div>

      <div style={{ 
        textAlign: 'center',
        marginTop: '2rem',
        padding: '2rem',
        background: 'rgba(0,169,206,0.05)',
        borderRadius: '12px'
      }}>
        <h3>Want to Share Your Story?</h3>
        <p>We'd love to feature your experience with EducateHers Kenya on our blog.</p>
        <button style={{ marginTop: '1rem' }}>Submit Your Story</button>
      </div>
    </section>
  )
}
