import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  lastModified?: string;
  author: string;
  category: string;
  tags: string[];
  excerpt: string;
  featured: boolean;
  featuredOrder?: number;
  draft?: boolean;
  image?: string;
  coverImage?: string;
  readingTime: string;
  language: string;
  projectUrl?: string;
  githubUrl?: string;
  tech?: string[];
  content: string;
}

export interface BlogPostMetadata extends Omit<BlogPost, "content"> {}

/**
 * Get all blog posts from the content/blog directory
 */
export function getAllPosts(language?: string, includeDrafts = false): BlogPostMetadata[] {
  // Create directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      return getPostBySlug(slug);
    })
    .filter((post): post is BlogPostMetadata => post !== null);

  // Filter by language if specified
  let filteredPosts = language
    ? allPosts.filter((post) => post.language === language)
    : allPosts;

  // Filter out drafts unless explicitly requested
  if (!includeDrafts) {
    filteredPosts = filteredPosts.filter((post) => !post.draft);
  }

  // Sort posts by date (newest first)
  return filteredPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(slug: string): BlogPostMetadata | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      // Try .md extension
      const mdPath = path.join(postsDirectory, `${slug}.md`);
      if (!fs.existsSync(mdPath)) {
        return null;
      }
      return getPostMetadata(mdPath, slug);
    }
    return getPostMetadata(fullPath, slug);
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

/**
 * Get post metadata from file
 */
function getPostMetadata(
  filePath: string,
  slug: string
): BlogPostMetadata | null {
  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    const readingTimeResult = readingTime(content);

    return {
      slug,
      title: data.title || "",
      subtitle: data.subtitle || "",
      date: data.date || "",
      lastModified: data.lastModified,
      author: data.author || "Pablo Schaffner",
      category: data.category || "Uncategorized",
      tags: data.tags || [],
      excerpt: data.excerpt || "",
      featured: data.featured || false,
      featuredOrder: data.featuredOrder,
      draft: data.draft || false,
      image: data.image || data.coverImage,
      coverImage: data.coverImage || data.image,
      readingTime: readingTimeResult.text,
      language: data.language || "en",
      projectUrl: data.projectUrl,
      githubUrl: data.githubUrl,
      tech: data.tech || [],
    };
  } catch (error) {
    console.error(`Error parsing metadata for ${slug}:`, error);
    return null;
  }
}

/**
 * Get post content including frontmatter
 */
export function getPostContent(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      const mdPath = path.join(postsDirectory, `${slug}.md`);
      if (!fs.existsSync(mdPath)) {
        return null;
      }
      return getFullPost(mdPath, slug);
    }
    return getFullPost(fullPath, slug);
  } catch (error) {
    console.error(`Error reading post content ${slug}:`, error);
    return null;
  }
}

/**
 * Get full post with content
 */
function getFullPost(filePath: string, slug: string): BlogPost | null {
  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    const readingTimeResult = readingTime(content);

    return {
      slug,
      title: data.title || "",
      subtitle: data.subtitle || "",
      date: data.date || "",
      lastModified: data.lastModified,
      author: data.author || "Pablo Schaffner",
      category: data.category || "Uncategorized",
      tags: data.tags || [],
      excerpt: data.excerpt || "",
      featured: data.featured || false,
      featuredOrder: data.featuredOrder,
      draft: data.draft || false,
      image: data.image || data.coverImage,
      coverImage: data.coverImage || data.image,
      readingTime: readingTimeResult.text,
      language: data.language || "en",
      projectUrl: data.projectUrl,
      githubUrl: data.githubUrl,
      tech: data.tech || [],
      content,
    };
  } catch (error) {
    console.error(`Error parsing full post ${slug}:`, error);
    return null;
  }
}

/**
 * Get posts by category
 */
export function getPostsByCategory(
  category: string,
  language?: string
): BlogPostMetadata[] {
  const allPosts = getAllPosts(language);
  return allPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Get posts by tag
 */
export function getPostsByTag(
  tag: string,
  language?: string
): BlogPostMetadata[] {
  const allPosts = getAllPosts(language);
  return allPosts.filter((post) =>
    post.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Get all unique categories
 */
export function getAllCategories(language?: string): string[] {
  const allPosts = getAllPosts(language);
  const categories = allPosts.map((post) => post.category);
  return Array.from(new Set(categories));
}

/**
 * Get all unique tags
 */
export function getAllTags(language?: string): string[] {
  const allPosts = getAllPosts(language);
  const tags = allPosts.flatMap((post) => post.tags);
  return Array.from(new Set(tags));
}

/**
 * Get featured posts
 */
export function getFeaturedPosts(language?: string): BlogPostMetadata[] {
  const allPosts = getAllPosts(language);
  const featured = allPosts.filter((post) => post.featured);
  
  // Sort by featuredOrder if specified, otherwise by date
  return featured.sort((a, b) => {
    if (a.featuredOrder !== undefined && b.featuredOrder !== undefined) {
      return a.featuredOrder - b.featuredOrder;
    }
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

/**
 * Get related posts based on category and tags
 */
export function getRelatedPosts(
  slug: string,
  limit: number = 3,
  language?: string
): BlogPostMetadata[] {
  const currentPost = getPostBySlug(slug);
  if (!currentPost) return [];

  const allPosts = getAllPosts(language);
  
  // Score posts based on similarity
  const scoredPosts = allPosts
    .filter((post) => post.slug !== slug)
    .map((post) => {
      let score = 0;
      
      // Same category = 3 points
      if (post.category === currentPost.category) {
        score += 3;
      }
      
      // Shared tags = 1 point each
      const sharedTags = post.tags.filter((tag) =>
        currentPost.tags.includes(tag)
      );
      score += sharedTags.length;
      
      return { post, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);

  return scoredPosts.slice(0, limit).map(({ post }) => post);
}

/**
 * Search posts by query string
 */
export function searchPosts(
  query: string,
  language?: string
): BlogPostMetadata[] {
  const allPosts = getAllPosts(language);
  const lowercaseQuery = query.toLowerCase();

  return allPosts.filter((post) => {
    return (
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.subtitle.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.category.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
    );
  });
}

