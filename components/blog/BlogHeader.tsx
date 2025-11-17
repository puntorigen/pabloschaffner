"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BlogPostMetadata } from "@/lib/blog";

interface BlogHeaderProps {
  post: BlogPostMetadata;
  referrer?: string | null;
}

export function BlogHeader({ post, referrer }: BlogHeaderProps) {
  const backLink = referrer === 'home' ? '/#work' : '/blog';
  const backText = referrer === 'home' ? 'Back to Home' : 'Back to Blog';
  
  return (
    <div className="relative">
      {/* Back Button */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href={backLink}
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
        >
          <span>←</span>
          <span>{backText}</span>
        </Link>
      </motion.div>

      {/* Category Badge */}
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <span className="inline-block px-3 py-1.5 bg-primary text-primary-foreground border-2 border-border rounded-md text-xs font-bold uppercase tracking-wide">
          {post.category}
        </span>
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-serif font-black tracking-tight text-foreground mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {post.title}
      </motion.h1>

      {/* Subtitle */}
      {post.subtitle && (
        <motion.p
          className="text-xl md:text-2xl font-bold text-foreground/80 italic mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {post.subtitle}
        </motion.p>
      )}

      {/* Metadata */}
      <motion.div
        className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex items-center gap-2">
          <span className="font-semibold text-foreground">{post.author}</span>
        </div>
        <span>•</span>
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <span>•</span>
        <span>{post.readingTime}</span>
        {post.lastModified && (
          <>
            <span>•</span>
            <span>
              Updated{" "}
              {new Date(post.lastModified).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </>
        )}
      </motion.div>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <motion.div
          className="flex flex-wrap gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {post.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-muted border border-border rounded-full text-xs font-medium text-muted-foreground hover:border-primary hover:text-primary transition-colors"
            >
              #{tag}
            </span>
          ))}
        </motion.div>
      )}

      {/* Cover Image */}
      {post.coverImage && (
        <motion.div
          className="relative w-full aspect-[21/9] mb-12 rounded-lg overflow-hidden border-2 border-border shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      )}

      {/* Project Links */}
      {(post.projectUrl || post.githubUrl) && (
        <motion.div
          className="flex flex-wrap gap-4 mb-8 pb-8 border-b-2 border-border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {post.projectUrl && (
            <a
              href={post.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-hover text-primary-foreground rounded-md font-sans font-bold transition-all border-2 border-border shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              <span>🌐</span>
              <span>View Live Project</span>
              <span>→</span>
            </a>
          )}
          {post.githubUrl && (
            <a
              href={post.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-card border-2 border-border hover:border-primary text-foreground rounded-md font-sans font-bold transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              <span>⚡</span>
              <span>View Code</span>
              <span>→</span>
            </a>
          )}
        </motion.div>
      )}
    </div>
  );
}

