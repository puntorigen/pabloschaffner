import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { GridBackground } from "@/components/GridBackground";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { MDXComponents, resetSectionCounter } from "@/components/blog/MDXComponents";
import {
  getAllPosts,
  getPostContent,
  getRelatedPosts,
} from "@/lib/blog";
import type { Metadata } from "next";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ ref?: string }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostContent(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const url = `https://pabloschaffner.com/blog/${slug}`;

  return {
    title: `${post.title} | Pablo Schaffner`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    keywords: [post.category, ...post.tags],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.lastModified,
      authors: [post.author],
      tags: post.tags,
      images: post.coverImage
        ? [
            {
              url: post.coverImage,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : undefined,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function BlogPostPage({ params, searchParams }: BlogPostPageProps) {
  const { slug } = await params;
  const { ref } = await searchParams;
  const post = getPostContent(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);
  const postUrl = `https://pabloschaffner.com/blog/${slug}`;
  
  // Reset section counter for each article
  resetSectionCounter();

  return (
    <main className="min-h-screen bg-background overflow-hidden relative px-[3px] md:px-[11px]">
      <GridBackground />

      {/* Navigation */}
      <Navigation currentPage="blog" />

      {/* Article Content */}
      <article className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <BlogHeader post={post} referrer={ref} />

            {/* MDX Content */}
            <div className="prose prose-lg max-w-none">
              <MDXRemote
                source={post.content}
                components={MDXComponents}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [
                      rehypeSlug,
                      [
                        rehypePrettyCode,
                        {
                          theme: "github-dark",
                          keepBackground: true,
                        },
                      ],
                      [
                        rehypeAutolinkHeadings,
                        {
                          behavior: "wrap",
                        },
                      ],
                    ],
                  },
                }}
              />
            </div>

            {/* Tech Stack (if available) */}
            {post.tech && post.tech.length > 0 && (
              <div className="mt-12 pt-8 border-t-2 border-border">
                <h3 className="text-lg font-serif font-bold text-foreground mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 bg-muted border border-border rounded-full text-sm font-medium text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Share Buttons */}
            <div className="mt-12 pt-8 border-t-2 border-border">
              <ShareButtons title={post.title} url={postUrl} />
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}
          </div>
        </div>
      </article>

      {/* Footer */}
      <Footer />
    </main>
  );
}

