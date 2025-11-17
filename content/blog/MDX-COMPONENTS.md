# MDX Components Reference

Quick reference for custom components available in blog articles.

## Section

Full-width colored sections with badge and title (like homepage sections).

**Props:**
- `title` (required): Section heading
- `badge` (optional): Small label above title (defaults to "Section N")
- `color` (optional): Background color - `purple`, `blue`, `yellow`, `pink`, `green`, `orange`, `indigo`, `teal`, `red`, `cyan`, `slate`, `emerald`, `rose`
- `bgImage` (optional): Background image URL (overrides color)
- `bgImageSize` (optional): `cover` or `contain` (default: `cover`)
- `bgImagePosition` (optional): CSS position like `center`, `top right` (default: `center`)

**Usage:**
```mdx
<Section title="The Origin Story" badge="2007" color="blue">

Your content here. Can include **markdown** and other components.

</Section>

<Section 
  title="Technical Deep Dive" 
  badge="Architecture"
  bgImage="/images/tech-background.jpg"
  bgImageSize="cover"
>

Content with background image.

</Section>
```

**Notes:**
- Sections auto-number if no badge provided
- Full page width with proper content padding
- Dark mode support included

---

## Callout

Highlighted boxes for important information.

**Props:**
- `type` (optional): `info` (default), `warning`, `success`, `danger`

**Usage:**
```mdx
<Callout type="info">
This is an informational callout with emoji ℹ️
</Callout>

<Callout type="warning">
⚠️ Important warning message
</Callout>

<Callout type="success">
✅ Success message
</Callout>

<Callout type="danger">
🚨 Critical alert
</Callout>
```

---

## ImageWithCaption

Neo-brutalist Polaroid-style image card.

**Props:**
- `src` (required): Image URL
- `alt` (required): Alt text for accessibility
- `caption` (optional): Text below image
- `width` (optional): Image width (default: 1200)
- `height` (optional): Image height (default: 675)
- `contain` (optional): Use `true` for contain mode instead of cover (good for logos)

**Usage:**
```mdx
<ImageWithCaption 
  src="/blog/screenshot.jpg" 
  alt="Application screenshot"
  caption="The IDE interface showing the mindmap editor"
/>

<ImageWithCaption 
  src="/blog/logo.png" 
  alt="Project logo"
  caption="Original Concepto logo from 2007"
  contain={true}
/>
```

**Notes:**
- Auto card styling with border and shadow
- 4:3 aspect ratio container
- Max width 2xl (672px)

---

## YouTubeEmbed

Embedded YouTube video in neo-brutalist card.

**Props:**
- `videoId` (required): YouTube video ID (from URL)
- `caption` (optional): Text below video
- `title` (optional): Accessibility title (default: "YouTube video")

**Usage:**
```mdx
<YouTubeEmbed 
  videoId="dQw4w9WgXcQ" 
  caption="Demo of the Concepto DSL IDE in action"
  title="Concepto IDE Tutorial"
/>
```

**Finding Video ID:**
- From `https://www.youtube.com/watch?v=dQw4w9WgXcQ` → use `dQw4w9WgXcQ`
- From `https://youtu.be/dQw4w9WgXcQ` → use `dQw4w9WgXcQ`

**Notes:**
- 16:9 aspect ratio (responsive)
- Max width 3xl (768px)
- Fullscreen enabled

---

## MediaCarousel

Swipeable carousel for images and YouTube videos (deck of cards style).

**Props:**
- `items` (required): Array of media items with properties:
  - `type`: `"image"` or `"youtube"`
  - `src`: Image URL or YouTube video ID
  - `alt`: Alt text (for images)
  - `caption`: Text below media
  - `title`: Accessibility title (for YouTube)
- `height` (optional): Custom height like `"400px"`, `"500px"` (default: `"400px"`)

**Usage:**
```mdx
<MediaCarousel 
  items={[
    {
      type: "image",
      src: "/blog/screenshot1.jpg",
      alt: "IDE interface",
      caption: "The mindmap editor view"
    },
    {
      type: "youtube",
      src: "dQw4w9WgXcQ",
      title: "Demo video",
      caption: "Live coding session"
    },
    {
      type: "image",
      src: "/blog/screenshot2.jpg",
      alt: "Generated code",
      caption: "Auto-generated React components"
    }
  ]}
  height="500px"
/>
```

**Notes:**
- Auto-plays through items (5s delay)
- **YouTube videos auto-play when active** and pause when not visible
- **All videos preload in background** for instant playback when swiped
- Swipeable on touch devices
- Pagination dots show progress
- Cards effect (like homepage carousel)
- No navigation arrows (swipe/auto only)
- Pauses carousel on hover
- Max width 3xl (768px)
- Uses YouTube IFrame API for video control
- Optimized for fast video switching

---

## TechStack

Display technology tags/badges.

**Props:**
- `items` (required): Array of technology names

**Usage:**
```mdx
<TechStack items={["React", "Next.js", "TypeScript", "Tailwind CSS"]} />
```

**Notes:**
- Horizontal flex layout with wrapping
- Hover effects on badges

---

## Stats

Display key metrics in a grid.

**Props:**
- `items` (required): Array of `{ label: string, value: string }` objects

**Usage:**
```mdx
<Stats items={[
  { label: "Apps Built", value: "100+" },
  { label: "Years Active", value: "13" },
  { label: "Team Size", value: "5-10" }
]} />
```

**Notes:**
- Responsive grid (2 cols mobile, 3 cols desktop)
- Neo-brutalist card style per stat

---

## Contact Links (Automatic)

Links to `/contact` or `#contact` automatically trigger the Okidoki chat widget.

**Usage:**
```mdx
[Let's talk](/contact)
[Schedule a call](#contact)
[Get in touch](/contact)
```

**Notes:**
- No special component needed
- Prevents page navigation
- Opens chat widget modal
- Same styling as regular links

---

## Standard Markdown

All standard markdown is supported with custom styling:

- **Headings:** `#`, `##`, `###`, `####` (serif font, proper spacing)
- **Links:** Auto-styled, external links get ↗ icon
- **Lists:** Styled bullets and numbered lists
- **Code:** Inline `code` and ```code blocks``` with syntax highlighting
- **Blockquotes:** `>` styled with left border
- **Bold/Italic:** `**bold**`, `*italic*`, `***both***`
- **Images:** Regular `![alt](src)` supported but consider using `ImageWithCaption` for better styling

---

## Frontmatter Example

```yaml
---
title: "Article Title"
subtitle: "Optional subtitle"
slug: "article-url-slug"
date: "2024-01-15"
lastModified: "2024-01-20"
author: "Pablo Schaffner"
category: "Case Study"
tags: ["Tag1", "Tag2", "Tag3"]
excerpt: "Brief description for previews"
featured: true
featuredOrder: 1
draft: false
coverImage: "/blog/cover.jpg"
tech: ["React", "Python", "AWS"]
language: "en"
projectUrl: "https://project.com"
githubUrl: "https://github.com/user/repo"
---
```

**Key Fields:**
- `draft: true` → Hide from listings (still accessible via URL)
- `featured: true` + `featuredOrder` → Show in homepage carousel
- `language` → "en" or "es" for filtering
- `coverImage` → Header image for article

---

## Tips

1. **Section Colors:** Use contrasting colors between adjacent sections for visual hierarchy
2. **Images:** Place in `/public/blog/` directory, reference as `/blog/image.jpg`
3. **Code Blocks:** Use triple backticks with language for syntax highlighting
4. **Spacing:** Components auto-handle spacing, don't add extra blank lines
5. **Draft Mode:** Test articles with `draft: true` before publishing

