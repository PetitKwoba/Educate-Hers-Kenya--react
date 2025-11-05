import React from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  author?: string
  image?: string
  url?: string
  type?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
}

export default function SEO({
  title = 'EducateHers Kenya - Empowering Girls Through Education',
  description = 'EducateHers Kenya is a non-profit organization dedicated to empowering girls through education, advocating for gender equality, and creating opportunities for young women in Kenya.',
  keywords = 'girls education Kenya, gender equality, education NGO, empower girls, Kenya education, girls empowerment, scholarship programs, STEM education for girls',
  author = 'EducateHers Kenya',
  image = 'https://educateherskenya.org/og-image.jpg',
  url = 'https://educateherskenya.org',
  type = 'website',
  publishedTime,
  modifiedTime,
  section,
  tags = []
}: SEOProps) {
  const fullTitle = title.includes('EducateHers Kenya') ? title : `${title} | EducateHers Kenya`
  const siteUrl = typeof window !== 'undefined' ? window.location.href : url

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="EducateHers Kenya" />
      <meta property="og:locale" content="en_US" />
      
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map(tag => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@EducateHERs" />
      <meta name="twitter:creator" content="@EducateHERs" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#00a9ce" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Geographic Meta Tags */}
      <meta name="geo.region" content="KE" />
      <meta name="geo.placename" content="Kenya" />
      
      {/* Schema.org for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NGO",
          "name": "EducateHers Kenya",
          "alternateName": "EducateHers",
          "url": "https://educateherskenya.org",
          "logo": "https://educateherskenya.org/logo.png",
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KE",
            "addressLocality": "Kenya"
          },
          "sameAs": [
            "https://www.facebook.com/educatehers",
            "https://x.com/EducateHERs",
            "https://www.instagram.com/educateherskenya/",
            "https://www.linkedin.com/company/educate-hers/",
            "https://www.youtube.com/@EducateHERs"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "email": "info@educateherskenya.org"
          }
        })}
      </script>
    </Helmet>
  )
}
