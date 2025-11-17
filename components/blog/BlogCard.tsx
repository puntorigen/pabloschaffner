"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BlogPostMetadata } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPostMetadata;
  index?: number;
}

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  const colors = ["primary", "secondary", "accent"];
  const colorClass = colors[index % 3];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="group relative bg-card border-2 border-border rounded-lg overflow-hidden transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[2px] hover:-translate-y-[2px] h-full flex flex-col">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-0" />

          {/* Cover Image */}
          {post.coverImage && (
            <div className="relative w-full h-48 bg-muted border-b-2 border-border">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="relative p-6 flex-1 flex flex-col">
            {/* Category Badge */}
            <div className="inline-block mb-3">
              <span
                className={`px-2 py-1 bg-${colorClass}/10 text-${colorClass} border border-${colorClass}/30 rounded text-xs font-bold uppercase tracking-wide`}
              >
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-serif font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
              {post.title}
            </h3>

            {/* Subtitle */}
            {post.subtitle && (
              <p className="text-sm font-bold text-foreground/70 italic mb-3">
                {post.subtitle}
              </p>
            )}

            {/* Excerpt */}
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3 flex-1">
              {post.excerpt}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
              <div className="flex items-center gap-4">
                <span>{post.readingTime}</span>
                <span>•</span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>
              <span className="text-primary font-semibold group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>

            {/* Tech Stack (if available) */}
            {post.tech && post.tech.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-3">
                {post.tech.slice(0, 3).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 bg-muted border border-border rounded-full text-xs font-medium text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
                {post.tech.length > 3 && (
                  <span className="px-2 py-0.5 bg-muted border border-border rounded-full text-xs font-medium text-muted-foreground">
                    +{post.tech.length - 3}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

