import React from 'react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogData'

export default function Blog() {

  const categories = ["All", "Success Stories", "Impact", "Insights", "News", "Community", "Programs"]

  return (
    <main className="blog-page-modern">
      {/* Hero Section */}
      <section className="blog-hero-modern">
        <div className="container">
          <div className="hero-content-blog">
            <div className="hero-badge-blog">
              <i className="fas fa-book-open"></i>
              <span>Stories & Insights</span>
            </div>
            <h1 className="hero-title-blog">
              Blog & <span className="text-gradient-blog">Stories</span>
            </h1>
            <p className="hero-subtitle-blog">
              Read inspiring stories from our students, volunteers, and partners. Stay updated on our latest programs and impact.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section-modern">
        <div className="container">
          <div className="filter-wrapper">
            <div className="category-filters">
              {categories.map((category) => (
                <button 
                  key={category}
                  className={`filter-btn ${category === "All" ? "active" : ""}`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="search-box">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Search articles..." />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-posts-section">
        <div className="container">
          <div className="posts-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card-modern">
                <div className="card-image-wrapper" style={{ background: post.gradient }}>
                  <span className="post-emoji">{post.emoji}</span>
                  <div className="card-category">{post.category}</div>
                </div>
                <div className="card-content">
                  <div className="card-meta">
                    <span className="post-date">
                      <i className="fas fa-calendar"></i>
                      {post.date}
                    </span>
                    <span className="post-read-time">
                      <i className="fas fa-clock"></i>
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="read-more-btn">
                    Read Article
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="load-more-wrapper">
            <button className="load-more-btn">
              <span>Load More Stories</span>
              <i className="fas fa-chevron-down"></i>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="blog-cta-section">
        <div className="container">
          <div className="cta-card-blog">
            <div className="cta-icon-blog">
              <i className="fas fa-pen-fancy"></i>
            </div>
            <h3 className="cta-title-blog">Want to Share Your Story?</h3>
            <p className="cta-text-blog">
              We'd love to feature your experience with EducateHers Kenya on our blog.
            </p>
            <Link to="/contact" className="cta-button-blog">
              <span>Submit Your Story</span>
              <i className="fas fa-paper-plane"></i>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .blog-page-modern {
          background: #f8fafc;
        }

        /* Hero Section */
        .blog-hero-modern {
          background: linear-gradient(135deg, #00a9ce 0%, #0891b2 100%);
          padding: 80px 0 60px;
          position: relative;
          overflow: hidden;
        }

        .blog-hero-modern::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="2" fill="white" opacity="0.1"/></svg>');
          animation: float 20s linear infinite;
        }

        @keyframes float {
          from { transform: translateY(0); }
          to { transform: translateY(-100px); }
        }

        .hero-content-blog {
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .hero-badge-blog {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 10px 20px;
          border-radius: 25px;
          color: white;
          font-weight: 600;
          margin-bottom: 20px;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .hero-badge-blog i {
          font-size: 1.1rem;
        }

        .hero-title-blog {
          font-size: 3.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 20px;
          letter-spacing: -1px;
        }

        .text-gradient-blog {
          background: linear-gradient(90deg, #ff6b35 0%, #ffb366 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle-blog {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.95);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Filter Section */
        .filter-section-modern {
          background: white;
          padding: 30px 0;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .filter-wrapper {
          display: flex;
          gap: 20px;
          align-items: center;
          flex-wrap: wrap;
        }

        .category-filters {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          flex: 1;
        }

        .filter-btn {
          padding: 10px 20px;
          border: 2px solid #e2e8f0;
          background: white;
          border-radius: 20px;
          font-weight: 600;
          color: #64748b;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.95rem;
        }

        .filter-btn:hover {
          border-color: #00a9ce;
          color: #00a9ce;
          transform: translateY(-2px);
        }

        .filter-btn.active {
          background: linear-gradient(135deg, #00a9ce 0%, #0891b2 100%);
          border-color: #00a9ce;
          color: white;
        }

        .search-box {
          position: relative;
          flex-shrink: 0;
        }

        .search-box i {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
        }

        .search-box input {
          padding: 10px 20px 10px 45px;
          border: 2px solid #e2e8f0;
          border-radius: 20px;
          width: 250px;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .search-box input:focus {
          outline: none;
          border-color: #00a9ce;
          box-shadow: 0 0 0 3px rgba(0, 169, 206, 0.1);
        }

        /* Blog Posts Section */
        .blog-posts-section {
          padding: 60px 0;
        }

        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 50px;
        }

        .blog-card-modern {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.4s ease;
          border: 2px solid transparent;
        }

        .blog-card-modern:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 169, 206, 0.15);
          border-color: #00a9ce;
        }

        .card-image-wrapper {
          height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .card-image-wrapper::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .post-emoji {
          font-size: 4.5rem;
          position: relative;
          z-index: 1;
          transition: transform 0.4s ease;
        }

        .blog-card-modern:hover .post-emoji {
          transform: scale(1.2) rotate(5deg);
        }

        .card-category {
          position: absolute;
          top: 15px;
          right: 15px;
          background: rgba(255, 255, 255, 0.95);
          padding: 6px 15px;
          border-radius: 15px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #00a9ce;
          backdrop-filter: blur(10px);
        }

        .card-content {
          padding: 25px;
        }

        .card-meta {
          display: flex;
          gap: 20px;
          margin-bottom: 15px;
          font-size: 0.9rem;
          color: #64748b;
        }

        .card-meta span {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .card-meta i {
          color: #00a9ce;
        }

        .post-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #2d3748;
          margin-bottom: 12px;
          line-height: 1.4;
          transition: color 0.3s ease;
        }

        .blog-card-modern:hover .post-title {
          color: #00a9ce;
        }

        .post-excerpt {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .read-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
          color: #00a9ce;
          text-decoration: none;
          border-radius: 20px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .read-more-btn:hover {
          background: linear-gradient(135deg, #00a9ce 0%, #0891b2 100%);
          color: white;
          transform: translateX(5px);
          box-shadow: 0 5px 15px rgba(0, 169, 206, 0.3);
        }

        .read-more-btn i {
          transition: transform 0.3s ease;
        }

        .read-more-btn:hover i {
          transform: translateX(3px);
        }

        /* Load More */
        .load-more-wrapper {
          text-align: center;
        }

        .load-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 40px;
          background: white;
          border: 2px solid #e2e8f0;
          border-radius: 25px;
          font-weight: 600;
          color: #2d3748;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
        }

        .load-more-btn:hover {
          background: linear-gradient(135deg, #00a9ce 0%, #0891b2 100%);
          border-color: #00a9ce;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 169, 206, 0.3);
        }

        /* CTA Section */
        .blog-cta-section {
          padding: 60px 0 80px;
        }

        .cta-card-blog {
          background: linear-gradient(135deg, #ff6b35 0%, #00a9ce 100%);
          border-radius: 24px;
          padding: 60px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 169, 206, 0.2);
        }

        .cta-card-blog::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .cta-icon-blog {
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
          font-size: 2rem;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .cta-title-blog {
          font-size: 2.2rem;
          font-weight: 700;
          color: white;
          margin-bottom: 15px;
          position: relative;
          z-index: 1;
        }

        .cta-text-blog {
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: 30px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          z-index: 1;
        }

        .cta-button-blog {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 35px;
          background: white;
          color: #00a9ce;
          text-decoration: none;
          border-radius: 25px;
          font-weight: 700;
          font-size: 1.05rem;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .cta-button-blog:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
          background: #f0f9ff;
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-title-blog {
            font-size: 2.5rem;
          }

          .hero-subtitle-blog {
            font-size: 1.1rem;
          }

          .filter-wrapper {
            flex-direction: column;
            align-items: stretch;
          }

          .search-box input {
            width: 100%;
          }

          .posts-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .cta-title-blog {
            font-size: 1.8rem;
          }

          .cta-card-blog {
            padding: 40px 25px;
          }
        }
      `}</style>
    </main>
  )
}
