/**
 * ========================================
 * EXAMPLE: Adding a New Blog Post
 * ========================================
 * 
 * This file shows you exactly how to add a new blog post.
 * Simply copy the template below and customize it!
 */

// STEP 1: Open src/data/blogData.ts

// STEP 2: Find the blogPosts array (starts around line 23)

// STEP 3: Add this template at the END of the array (before the closing ])

/*

{
  id: "7",
  slug: "your-blog-post-title",  // ← URL-friendly: lowercase, hyphens, no spaces/special chars
  title: "Your Amazing Title Here",
  excerpt: "Write 2-3 sentences that will appear on the blog listing page. Make it engaging!",
  date: "November 5, 2025",  // ← Update to current date
  category: "Success Stories",  // ← Pick: Success Stories, Impact, Insights, News, Community, or Programs
  author: "Your Name",
  readTime: "5 min read",
  emoji: "🎉",  // ← Pick any emoji
  gradient: "linear-gradient(135deg, #00a9ce 0%, #0891b2 100%)",  // ← Use cyan or coral gradient
  content: [
    {
      type: "paragraph",
      text: "Start your blog post with an engaging opening paragraph. Set the context and hook the reader."
    },
    {
      type: "heading",
      text: "First Section Heading"
    },
    {
      type: "paragraph",
      text: "Continue with more content. You can have as many paragraphs as you need."
    },
    {
      type: "list",
      items: [
        "Use bullet points to list key information",
        "They make content easier to scan",
        "And more engaging to read"
      ]
    },
    {
      type: "quote",
      text: "Add inspiring quotes from students, volunteers, or team members to bring the story to life.",
      author: "Student Name"
    },
    {
      type: "heading",
      text: "Another Section"
    },
    {
      type: "paragraph",
      text: "Keep adding sections as needed. The content will automatically format beautifully on the page."
    }
  ]
},

*/

// STEP 4: Don't forget the comma after the closing }

// STEP 5: Save the file - your post appears automatically!

/**
 * ========================================
 * REAL EXAMPLE - Copy This!
 * ========================================
 */

/*

{
  id: "7",
  slug: "celebrating-100-graduates-year-of-success",
  title: "Celebrating 100 Graduates: A Year of Success",
  excerpt: "This year, 100 young women graduated from our programs and are now pursuing their dreams. Meet some of these incredible graduates and learn about their journeys.",
  date: "November 5, 2025",
  category: "Success Stories",
  author: "EducateHers Team",
  readTime: "6 min read",
  emoji: "🎓",
  gradient: "linear-gradient(135deg, #ff6b35 0%, #f97316 100%)",
  content: [
    {
      type: "paragraph",
      text: "This year marks a historic milestone for EducateHers Kenya as we celebrate 100 graduates from our various programs. Each of these young women has overcome incredible challenges to reach this point, and their futures are brighter than ever."
    },
    {
      type: "heading",
      text: "By the Numbers"
    },
    {
      type: "stats",
      items: [
        { number: "100", label: "Graduates", description: "Completed programs this year" },
        { number: "85%", label: "In Higher Ed", description: "Enrolled in university or college" },
        { number: "95%", label: "Employed", description: "Secured jobs or internships" },
        { number: "50+", label: "STEM Majors", description: "Pursuing science & technology" }
      ]
    },
    {
      type: "heading",
      text: "Meet Our Graduates"
    },
    {
      type: "paragraph",
      text: "From computer scientists to engineers, teachers to doctors, our graduates are making their mark across various fields. Here are just a few of their stories:"
    },
    {
      type: "list",
      items: [
        "Grace - Now studying Biomedical Engineering at University of Nairobi",
        "Faith - Received full scholarship to study Computer Science in the US",
        "Mercy - Working as a software developer at a leading tech company",
        "Aisha - Teaching mathematics at her former high school",
        "Linda - Pursuing her PhD in Environmental Science"
      ]
    },
    {
      type: "quote",
      text: "EducateHers didn't just give me an education - they gave me confidence, mentorship, and a community that believed in me. Now I want to give back and help other girls achieve their dreams.",
      author: "Grace, Biomedical Engineering Student"
    },
    {
      type: "heading",
      text: "Looking to the Future"
    },
    {
      type: "paragraph",
      text: "Our graduates are more than success stories - they're role models, mentors, and change-makers in their communities. Many have already started giving back, volunteering with EducateHers to inspire the next generation of young women."
    },
    {
      type: "paragraph",
      text: "As we celebrate these 100 graduates, we're also looking ahead. With your support, we aim to graduate 150 students next year and continue expanding our programs to reach even more girls across Kenya."
    }
  ]
}

*/

// That's it! Just customize the content above and paste it into blogData.ts
