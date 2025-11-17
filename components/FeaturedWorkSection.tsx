"use client";

import { getFeaturedPosts } from "@/lib/blog";
import { FeaturedWorkCarousel } from "@/components/FeaturedWorkCarousel";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BlogPostMetadata } from "@/lib/blog";

interface FeaturedWorkSectionProps {
  badge: string;
  title: string;
  subtitle: string;
  viewAllText?: string;
  language?: string;
}

export function FeaturedWorkSection({ 
  badge, 
  title, 
  subtitle,
  viewAllText = "View All Articles",
  language = 'en' 
}: FeaturedWorkSectionProps) {
  const [featuredPosts, setFeaturedPosts] = useState<BlogPostMetadata[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch posts client-side through API route
    fetch('/api/blog/featured?lang=' + language)
      .then(res => res.json())
      .then(data => {
        setFeaturedPosts(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Failed to load featured posts:', err);
        setIsLoading(false);
      });
  }, [language]);

  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto text-center py-20">
        <p className="text-muted-foreground">Loading featured work...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className="inline-block px-4 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-md border-2 border-border uppercase tracking-wider mb-4">
          {badge}
        </span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-foreground mb-4">
          {title}
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mb-0">
          {subtitle}
        </p>
      </motion.div>

      {/* Featured Work Carousel */}
      {featuredPosts.length > 0 && (
        <FeaturedWorkCarousel posts={featuredPosts} viewAllText={viewAllText} />
      )}
    </div>
  );
}

