// Blog Post Data
// To add a new blog post, simply add a new object to the blogPosts array below
// Follow the structure of existing posts

export type ContentBlock = 
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'quote'; text: string; author?: string }
  | { type: 'list'; items: string[] }
  | { type: 'stats'; items: Array<{ number: string; label: string; description: string }> }

export interface BlogPost {
  id: string
  slug: string  // URL-friendly version of the title
  title: string
  excerpt: string
  date: string
  category: 'Success Stories' | 'Impact' | 'Insights' | 'News' | 'Community' | 'Programs'
  author: string
  readTime: string
  emoji: string
  gradient: string
  content: ContentBlock[]
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "gced-in-action-empowering-girls-turkana-kenya",
    title: "[GCED in Action] Empowering Girls through Youth Training: Unveiling Gender Barriers in Turkana, Kenya",
    excerpt: "A transformative youth workshop in Turkana's marginalized Lokori area addresses severe gender disparities in education, where only 46.6% of girls are enrolled compared to the national average of 92.5%.",
    date: "August 5, 2023",
    category: "Impact",
    author: "EducateHers Kenya Team",
    readTime: "8 min read",
    emoji: "🎓",
    gradient: "linear-gradient(135deg, #00a9ce 0%, #ff6b35 100%)",
    content: [
      {
        type: "paragraph",
        text: "This transformative effort seeks to combat gender disparities in education through a youth workshop recently conducted in the marginalized Lokori area of Turkana, Kenya. For years, the region has faced severe gender discrimination in education. The school enrollment rate for children aged 6-13 in Turkana stands at a mere 50%, with even lower figures for girls at 46.6%, compared to the national average of 92.5% (Turkana County Government, 2015)."
      },
      {
        type: "paragraph",
        text: "High levels of insecurity, cultural biases, extreme poverty, and inadequate infrastructure have further marginalized this community. Supported by UNESCO APCEIU and the Biji-Biji Initiative, the groundbreaking initiative, named #EducateHERs, Empower the World, convened stakeholders, facilitators, and participants on August 5th, 2023, to address the pressing issue of unequal education opportunities. The workshop aimed to advocate for Sustainable Development Goals (SDGs) 4 and 5, promoting Inclusive Education and Gender Equality."
      },
      {
        type: "heading",
        text: "Unveiling Barriers: Insights Before the Workshop"
      },
      {
        type: "paragraph",
        text: "The pre-workshop survey, conducted among respondents including youth, teachers, and parents from Turkana, provided crucial insights into the region's educational landscape. Participants unanimously pointed out that 'Poverty and financial constraints' (73%) and 'Cultural and traditional beliefs' (55%) were the main contributors to unequal educational opportunities for girls. This highlights the considerable impact of both socio-economic difficulties and entrenched cultural norms in maintaining gender disparities."
      },
      {
        type: "paragraph",
        text: "The survey also illuminated various challenges faced by girls in pursuing education, with 'Early marriage' (64%), 'Gender-based violence and insecurity' (45%), and 'Cultural beliefs' (18%) emerging as significant obstacles. These findings emphasize the need to address concerns such as early marriage, violence, and cultural hindrances that impede girls' educational progress."
      },
      {
        type: "heading",
        text: "A Transformative Workshop That Ignited Change"
      },
      {
        type: "paragraph",
        text: "The workshop's transformative influence became apparent in the post-workshop evaluations. Following their participation, 90% of attendees noted an improved grasp of obstacles to girls' education. Their confidence in recognizing and addressing these challenges experienced a favourable change, as 80% now expressed elevated levels of assurance. The workshop also facilitated the formulation of practical recommendations aimed at eliminating gender-related obstacles."
      },
      {
        type: "heading",
        text: "Addressing Disparities: A Paradigm Shift"
      },
      {
        type: "paragraph",
        text: "Participants' perceptions underwent a significant transformation before and after the workshop. Initially, 55% of respondents acknowledged 'Cultural and traditional beliefs' as a hindrance, a figure that surged to 100% post-workshop. This shift underscores the workshop's profound impact on heightening awareness of how cultural norms perpetuate unequal educational opportunities."
      },
      {
        type: "quote",
        text: "The program enabled many girls who lacked exposure to envision the broader world. The workshop's success in generating awareness among them will carry back to their communities, fostering transformative change.",
        author: "Val Omoro, Youth Participant"
      },
      {
        type: "paragraph",
        text: "More feedback can be found in our documentary: https://www.youtube.com/watch?v=3ZJSrqGdOfo"
      },
      {
        type: "heading",
        text: "Sustaining Change: Extending to Social Media and Beyond"
      },
      {
        type: "paragraph",
        text: "The campaign's reach extended beyond the workshop to social media platforms such as Facebook (https://fb.watch/mG1zMoJIfN/), Twitter, and YouTube. Engagement metrics consistently exceeded set targets, with views, likes, and comments reflecting a strong resonance with the campaign's content."
      },
      {
        type: "heading",
        text: "Educators' Role in Fostering Inclusion"
      },
      {
        type: "paragraph",
        text: "The Google Classroom analysis revealed an encouraging scenario: a substantial majority of teachers (74%) displayed a solid grasp of the gender inclusion concept. This understanding was mirrored in their confidence, with educators supporting community sensitization on gender inclusion in education (82%) and advocating for educating parents on the importance of sending their daughters to school (73%)."
      },
      {
        type: "stats",
        items: [
          { number: "90%", label: "Improved Understanding", description: "Attendees gained better grasp of obstacles" },
          { number: "80%", label: "Elevated Confidence", description: "Increased assurance in addressing challenges" },
          { number: "100%", label: "Cultural Awareness", description: "Post-workshop recognition of cultural barriers" },
          { number: "82%", label: "Community Support", description: "Teachers backing gender inclusion efforts" }
        ]
      },
      {
        type: "paragraph",
        text: "A remarkable 100% of participants recognized the importance of supporting girls' education by addressing basic needs and challenging cultural beliefs."
      },
      {
        type: "quote",
        text: "I learnt that by educating a girl, you educate the whole nation and the generation that comes after the girl.",
        author: "Susan Wanjiku, Student at AIC Kangitit Girls"
      },
      {
        type: "paragraph",
        text: "We aspire to engage numerous educators in supporting the initiative through the adoption of gender-inclusive language and participation in professional development training (79%) to tackle gender-related subjects, cultivating an inclusive atmosphere that goes beyond stereotypes."
      },
      {
        type: "heading",
        text: "Paving the Path Forward"
      },
      {
        type: "paragraph",
        text: "As the transformative #EducateHERs, Empower the World campaign concluded, the participants' determination to pave a new path for girls' education in Turkana was palpable. The collaborative efforts of local organizations, educators, and community members have ignited a beacon of change."
      },
      {
        type: "paragraph",
        text: "We hope that through this initiative we will experience a higher retention of girls in schools. We plan to continue our efforts to bring about change through more initiatives and campaigns. Follow us or support our future project through our socials."
      }
    ]
  }
]

// Helper function to get a blog post by ID
export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id)
}

// Helper function to get a blog post by slug (URL-friendly title)
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug)
}

// Helper function to get posts by category
export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  if (category === 'All') return blogPosts
  return blogPosts.filter(post => post.category === category)
}

// Helper function to search posts
export const searchBlogPosts = (query: string): BlogPost[] => {
  const lowercaseQuery = query.toLowerCase()
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.category.toLowerCase().includes(lowercaseQuery)
  )
}
