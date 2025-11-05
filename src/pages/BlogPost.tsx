import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { getBlogPostBySlug, blogPosts } from '../data/blogData'

// Type definitions
type ParagraphBlock = { type: 'paragraph'; text: string }
type HeadingBlock = { type: 'heading'; text: string }
type QuoteBlock = { type: 'quote'; text: string; author?: string }
type ListBlock = { type: 'list'; items: string[] }
type StatsBlock = { type: 'stats'; items: Array<{ number: string; label: string; description: string }> }

type ContentBlock = ParagraphBlock | HeadingBlock | QuoteBlock | ListBlock | StatsBlock

export default function BlogPost() {
  const { slug } = useParams()
  const post = getBlogPostBySlug(slug || '')

  // Get related posts (excluding current post)
  const relatedPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3)

  if (!post) {
    return (
      <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h1>Blog post not found</h1>
        <Link to="/blog" style={{ color: '#00a9ce', textDecoration: 'underline' }}>
          Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <main className="blog-post-page">
      {/* Hero Section */}
      <section className="post-hero" style={{ background: post.gradient }}>
        <div className="container">
          <Link to="/blog" className="back-link">
            <i className="fas fa-arrow-left"></i>
            Back to Blog
          </Link>
          <div className="post-hero-content">
            <div className="category-badge">{post.category}</div>
            <h1 className="post-hero-title">{post.title}</h1>
            <div className="post-meta-info">
              <span className="meta-item">
                <i className="fas fa-calendar"></i>
                {post.date}
              </span>
              <span className="meta-item">
                <i className="fas fa-user"></i>
                {post.author}
              </span>
              <span className="meta-item">
                <i className="fas fa-clock"></i>
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="post-content-section">
        <div className="container">
          <div className="post-content-wrapper">
            <article className="post-article">
              {post.content.map((block, index) => {
                if (block.type === 'paragraph') {
                  return <p key={index} className="content-paragraph">{block.text}</p>
                }
                
                if (block.type === 'heading') {
                  return <h2 key={index} className="content-heading">{block.text}</h2>
                }
                
                if (block.type === 'quote') {
                  return (
                    <blockquote key={index} className="content-quote">
                      <p>"{block.text}"</p>
                      {'author' in block && block.author && <cite>— {block.author}</cite>}
                    </blockquote>
                  )
                }
                
                if (block.type === 'list' && 'items' in block && block.items) {
                  const listBlock = block as ListBlock
                  return (
                    <ul key={index} className="content-list">
                      {listBlock.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )
                }

                if (block.type === 'stats' && 'items' in block && block.items) {
                  const statsBlock = block as StatsBlock
                  return (
                    <div key={index} className="stats-grid">
                      {statsBlock.items.map((stat, i) => (
                        <div key={i} className="stat-card">
                          <div className="stat-number">{stat.number}</div>
                          <div className="stat-label">{stat.label}</div>
                          <div className="stat-description">{stat.description}</div>
                        </div>
                      ))}
                    </div>
                  )
                }
                
                return null
              })}
            </article>

            {/* Sidebar */}
            <aside className="post-sidebar">
              <div className="sidebar-card share-card">
                <h3>Share This Article</h3>
                <div className="share-buttons">
                  <button className="share-btn facebook">
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button className="share-btn twitter">
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button className="share-btn linkedin">
                    <i className="fab fa-linkedin-in"></i>
                  </button>
                  <button className="share-btn whatsapp">
                    <i className="fab fa-whatsapp"></i>
                  </button>
                </div>
              </div>

              <div className="sidebar-card cta-card">
                <div className="cta-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <h3>Support Our Mission</h3>
                <p>Help us empower more girls through education</p>
                <Link to="/donate" className="sidebar-cta-btn">
                  Donate Now
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>

              <div className="sidebar-card newsletter-card">
                <h3>Stay Updated</h3>
                <p>Get our latest stories delivered to your inbox</p>
                <input type="email" placeholder="Your email" className="newsletter-input" />
                <button className="newsletter-btn">Subscribe</button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="related-posts-section">
          <div className="container">
            <h2 className="section-title">Related Articles</h2>
            <div className="related-posts-grid">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`} className="related-post-card">
                  <div className="related-post-image" style={{ background: relatedPost.gradient }}>
                    <span>{relatedPost.emoji}</span>
                  </div>
                  <div className="related-post-content">
                    <span className="related-category">{relatedPost.category}</span>
                    <h4>{relatedPost.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        .blog-post-page {
          background: #f8fafc;
        }

        /* Hero Section */
        .post-hero {
          padding: 100px 0 60px;
          position: relative;
          overflow: hidden;
        }

        .post-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: white;
          text-decoration: none;
          font-weight: 600;
          margin-bottom: 30px;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .back-link:hover {
          transform: translateX(-5px);
        }

        .post-hero-content {
          max-width: 800px;
          position: relative;
          z-index: 1;
        }

        .category-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 8px 20px;
          border-radius: 20px;
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 20px;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .post-hero-title {
          font-size: 3rem;
          font-weight: 800;
          color: white;
          margin-bottom: 25px;
          line-height: 1.2;
        }

        .post-meta-info {
          display: flex;
          gap: 25px;
          flex-wrap: wrap;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.95);
          font-size: 0.95rem;
        }

        .meta-item i {
          color: rgba(255, 255, 255, 0.8);
        }

        /* Content Section */
        .post-content-section {
          padding: 60px 0;
        }

        .post-content-wrapper {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 50px;
          align-items: start;
        }

        .post-article {
          background: white;
          border-radius: 20px;
          padding: 50px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .content-paragraph {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #2d3748;
          margin-bottom: 25px;
        }

        .content-heading {
          font-size: 2rem;
          font-weight: 700;
          color: #00a9ce;
          margin: 40px 0 20px;
        }

        .content-quote {
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          border-left: 4px solid #00a9ce;
          padding: 25px 30px;
          margin: 30px 0;
          border-radius: 8px;
        }

        .content-quote p {
          font-size: 1.2rem;
          font-style: italic;
          color: #2d3748;
          margin-bottom: 10px;
        }

        .content-quote cite {
          color: #00a9ce;
          font-weight: 600;
        }

        .content-list {
          margin: 25px 0;
          padding-left: 0;
          list-style: none;
        }

        .content-list li {
          padding-left: 35px;
          position: relative;
          margin-bottom: 15px;
          font-size: 1.1rem;
          line-height: 1.7;
          color: #2d3748;
        }

        .content-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #00a9ce;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin: 40px 0;
        }

        .stat-card {
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          border: 2px solid #bae6fd;
          border-radius: 16px;
          padding: 25px;
          text-align: center;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: #00a9ce;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 1.1rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 5px;
        }

        .stat-description {
          font-size: 0.9rem;
          color: #64748b;
        }

        /* Sidebar */
        .post-sidebar {
          position: sticky;
          top: 20px;
        }

        .sidebar-card {
          background: white;
          border-radius: 16px;
          padding: 25px;
          margin-bottom: 20px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        }

        .sidebar-card h3 {
          font-size: 1.3rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 15px;
        }

        .share-buttons {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }

        .share-btn {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          border: none;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .share-btn:hover {
          transform: translateY(-3px);
        }

        .share-btn.facebook { background: #1877f2; }
        .share-btn.twitter { background: #1da1f2; }
        .share-btn.linkedin { background: #0077b5; }
        .share-btn.whatsapp { background: #25d366; }

        .cta-card {
          background: linear-gradient(135deg, #00a9ce 0%, #ff6b35 100%);
          color: white;
          text-align: center;
        }

        .cta-card h3,
        .cta-card p {
          color: white;
        }

        .cta-icon {
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 15px;
          font-size: 1.5rem;
        }

        .sidebar-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 25px;
          background: white;
          color: #00a9ce;
          text-decoration: none;
          border-radius: 20px;
          font-weight: 700;
          margin-top: 15px;
          transition: all 0.3s ease;
        }

        .sidebar-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .newsletter-input {
          width: 100%;
          padding: 12px 15px;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          margin: 15px 0 10px;
          font-size: 0.95rem;
        }

        .newsletter-input:focus {
          outline: none;
          border-color: #00a9ce;
        }

        .newsletter-btn {
          width: 100%;
          padding: 12px;
          background: linear-gradient(135deg, #00a9ce 0%, #0891b2 100%);
          color: white;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .newsletter-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 169, 206, 0.3);
        }

        /* Related Posts */
        .related-posts-section {
          padding: 60px 0 80px;
          background: white;
        }

        .section-title {
          font-size: 2.2rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 40px;
          text-align: center;
        }

        .related-posts-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .related-post-card {
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 16px;
          overflow: hidden;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .related-post-card:hover {
          transform: translateY(-5px);
          border-color: #00a9ce;
          box-shadow: 0 10px 30px rgba(0, 169, 206, 0.15);
        }

        .related-post-image {
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
        }

        .related-post-content {
          padding: 20px;
        }

        .related-category {
          display: inline-block;
          font-size: 0.85rem;
          color: #00a9ce;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .related-post-content h4 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #2d3748;
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .post-hero-title {
            font-size: 2rem;
          }

          .post-content-wrapper {
            grid-template-columns: 1fr;
          }

          .post-article {
            padding: 30px 20px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .related-posts-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  )
}
