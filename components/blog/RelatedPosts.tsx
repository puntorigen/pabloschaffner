"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BlogPostMetadata } from "@/lib/blog";

interface RelatedPostsProps {
  posts: BlogPostMetadata[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <div className="mt-16 pt-12 border-t-2 border-border">
      <motion.h2
        className="text-3xl font-serif font-bold text-foreground mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Related Articles
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="group relative bg-card border-2 border-border rounded-lg p-6 h-full transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[2px] hover:-translate-y-[2px]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />

                <div className="relative">
                  {/* Category */}
                  <span className="inline-block px-2 py-1 bg-primary/10 text-primary border border-primary/30 rounded text-xs font-bold uppercase tracking-wide mb-3">
                    {post.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-serif font-bold mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{post.readingTime}</span>
                    <span>•</span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

