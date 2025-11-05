# Blog Post Structure Quick Reference

## File Organization

```
src/
├── data/
│   └── blogData.ts          ← ADD NEW BLOGS HERE
├── pages/
│   ├── Blog.tsx             (Blog listing page - no editing needed)
│   └── BlogPost.tsx         (Individual post page - no editing needed)
└── App.tsx                  (Routes - no editing needed)
```

## Blog Post Template

Copy and paste this template into `src/data/blogData.ts`:

```typescript
{
  id: "X",                    // Use next available number
  slug: "your-blog-post-title", // URL-friendly version (lowercase, hyphens, no special chars)
  title: "",                  // Main title (shows in listing and post page)
  excerpt: "",                // 2-3 sentence summary (shows in listing only)
  date: "Month Day, Year",    // Publication date
  category: "",               // See categories below
  author: "",                 // Author name
  readTime: "X min read",     // Estimated reading time
  emoji: "📚",                // Icon for the post
  gradient: "",               // See gradients below
  content: [
    // Content blocks go here
  ]
},
```

## Content Block Types

### 1. Paragraph
```typescript
{ type: "paragraph", text: "Text here..." }
```

### 2. Heading
```typescript
{ type: "heading", text: "Section Title" }
```

### 3. Quote
```typescript
{ type: "quote", text: "Quote text...", author: "Name" }
```

### 4. Bullet List
```typescript
{ type: "list", items: ["Item 1", "Item 2", "Item 3"] }
```

### 5. Stats Grid
```typescript
{
  type: "stats",
  items: [
    { number: "100+", label: "Label", description: "Description" }
  ]
}
```

## Categories (pick one)
- `"Success Stories"` - Student transformations
- `"Impact"` - Statistics & achievements  
- `"Insights"` - Research & education topics
- `"News"` - Announcements & launches
- `"Community"` - Volunteers & stories
- `"Programs"` - Program details

## Gradients (copy exactly)

**Cyan (Education/Learning):**
```typescript
"linear-gradient(135deg, #00a9ce 0%, #0891b2 100%)"
```

**Coral (Impact/Achievement):**
```typescript
"linear-gradient(135deg, #ff6b35 0%, #f97316 100%)"
```

**Cyan to Coral:**
```typescript
"linear-gradient(135deg, #00a9ce 0%, #ff6b35 100%)"
```

**Coral to Cyan:**
```typescript
"linear-gradient(135deg, #ff6b35 0%, #00a9ce 100%)"
```

## Example Blog Post

```typescript
{
  id: "7",
  slug: "new-scholarship-program-launched",
  title: "New Scholarship Program Launched",
  excerpt: "We're excited to announce 50 new scholarships for girls in rural Kenya. Applications open next month.",
  date: "December 1, 2025",
  category: "News",
  author: "Scholarships Team",
  readTime: "3 min read",
  emoji: "🎓",
  gradient: "linear-gradient(135deg, #ff6b35 0%, #f97316 100%)",
  content: [
    {
      type: "paragraph",
      text: "Today marks a significant milestone as we launch our expanded scholarship program."
    },
    {
      type: "heading",
      text: "Program Details"
    },
    {
      type: "list",
      items: [
        "50 full scholarships available",
        "Covers tuition, books, and uniforms",
        "Includes mentorship program",
        "4-year commitment"
      ]
    },
    {
      type: "quote",
      text: "This program will change lives and communities.",
      author: "Program Director"
    },
    {
      type: "heading",
      text: "How to Apply"
    },
    {
      type: "paragraph",
      text: "Applications open December 15th. Visit our website for details."
    }
  ]
}
```

## Where to Add

1. Open `src/data/blogData.ts`
2. Find the `export const blogPosts: BlogPost[] = [` line
3. Add your new post object before the closing `]`
4. Remember to add a comma after the previous post
5. Save the file
6. Your post appears automatically!

---

💡 **Pro Tip:** Always test your new post by viewing it in the browser before publishing!
