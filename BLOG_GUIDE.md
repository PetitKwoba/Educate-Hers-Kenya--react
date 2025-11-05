# How to Add New Blog Posts

This guide explains how to easily add new blog posts to the EducateHers Kenya website.

## Quick Start

All blog posts are managed in a single file:
```
src/data/blogData.ts
```

## Adding a New Blog Post

### Step 1: Open the blogData.ts file

Navigate to `src/data/blogData.ts` in your code editor.

### Step 2: Add Your Blog Post

Add a new object to the `blogPosts` array. Here's a template:

```typescript
{
  id: "7",  // Increment this number for each new post
  title: "Your Blog Title Here",
  excerpt: "A brief summary of your blog post (2-3 sentences). This appears on the blog listing page.",
  date: "November 5, 2025",  // Format: Month Day, Year
  category: "Success Stories",  // Choose one: Success Stories, Impact, Insights, News, Community, Programs
  author: "Author Name",
  readTime: "5 min read",  // Estimate reading time
  emoji: "📚",  // Choose an emoji that represents the post
  gradient: "linear-gradient(135deg, #00a9ce 0%, #0891b2 100%)",  // See gradient options below
  content: [
    // Add content blocks here (see Step 3)
  ]
}
```

### Step 3: Add Content Blocks

The `content` array accepts different types of blocks:

#### Paragraph
```typescript
{
  type: "paragraph",
  text: "Your paragraph text goes here. It can be as long as needed."
}
```

#### Heading
```typescript
{
  type: "heading",
  text: "Section Heading"
}
```

#### Quote
```typescript
{
  type: "quote",
  text: "The quote text goes here.",
  author: "Person Name"  // Optional
}
```

#### List
```typescript
{
  type: "list",
  items: [
    "First bullet point",
    "Second bullet point",
    "Third bullet point"
  ]
}
```

#### Statistics (Grid of Stats)
```typescript
{
  type: "stats",
  items: [
    { number: "500+", label: "Girls Supported", description: "Full scholarships and mentorship" },
    { number: "50+", label: "Active Mentors", description: "Professional women guiding students" }
  ]
}
```

## Available Options

### Categories
- `Success Stories` - Student success and transformation stories
- `Impact` - Impact reports and statistics
- `Insights` - Educational insights and research
- `News` - Announcements and program launches
- `Community` - Volunteer and community stories
- `Programs` - Program details and achievements

### Gradient Colors
Choose from these gradient options (matching brand colors):

**Cyan Primary:**
```typescript
gradient: "linear-gradient(135deg, #00a9ce 0%, #0891b2 100%)"
```

**Coral Primary:**
```typescript
gradient: "linear-gradient(135deg, #ff6b35 0%, #f97316 100%)"
```

**Cyan to Coral:**
```typescript
gradient: "linear-gradient(135deg, #00a9ce 0%, #ff6b35 100%)"
```

**Coral to Cyan:**
```typescript
gradient: "linear-gradient(135deg, #ff6b35 0%, #00a9ce 100%)"
```

### Emoji Ideas
- 📚 Education/Learning
- 🌟 Impact/Achievement
- 💡 Insights/Ideas
- 🤝 Partnership/Mentorship
- 👩‍🏫 Teaching/Volunteering
- 🔬 STEM/Science
- 🎓 Graduation/Success
- 💪 Empowerment
- ❤️ Community/Love
- 🚀 Launch/Innovation

## Complete Example

Here's a complete blog post example:

```typescript
{
  id: "7",
  title: "New Computer Lab Opens in Nairobi",
  excerpt: "Thanks to our generous donors, we've opened a state-of-the-art computer lab serving 200 girls. See the amazing impact this facility is making.",
  date: "November 5, 2025",
  category: "News",
  author: "Infrastructure Team",
  readTime: "4 min read",
  emoji: "💻",
  gradient: "linear-gradient(135deg, #00a9ce 0%, #0891b2 100%)",
  content: [
    {
      type: "paragraph",
      text: "We're thrilled to announce the opening of our newest computer lab in Nairobi, equipped with 50 computers and high-speed internet."
    },
    {
      type: "heading",
      text: "Facility Features"
    },
    {
      type: "list",
      items: [
        "50 modern computers with latest software",
        "High-speed fiber internet connection",
        "Air-conditioned learning environment",
        "Dedicated instructor station"
      ]
    },
    {
      type: "quote",
      text: "This lab is a dream come true. Now I can practice coding every day!",
      author: "Mary, Student"
    },
    {
      type: "paragraph",
      text: "The lab will serve 200 girls from three nearby schools, offering after-school programs in coding, digital literacy, and graphic design."
    }
  ]
}
```

## Tips for Great Blog Posts

1. **Keep excerpts engaging** - This is what readers see first
2. **Use headings to organize** - Break long posts into sections
3. **Mix content types** - Combine paragraphs, lists, quotes, and stats
4. **Choose appropriate emojis** - They make posts more visually appealing
5. **Match gradients to category** - Use cyan for educational content, coral for impact/achievement
6. **Add quotes when possible** - Personal testimonials make posts more engaging

## Testing Your Post

After adding a new post:

1. Save the `blogData.ts` file
2. The development server will auto-reload
3. Navigate to `/blog` to see your new post in the listing
4. Click "Read Article" to view the full post
5. Check that all content blocks render correctly

## Need Help?

- Check existing posts in `blogData.ts` for reference
- Make sure all required fields are filled
- Ensure the ID is unique
- Verify that commas are placed correctly in the array

---

**That's it!** You can now easily add blog posts without touching any component code. Just edit `src/data/blogData.ts` and your posts will automatically appear on the website.
