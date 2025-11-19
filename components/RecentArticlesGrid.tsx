"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BlogPostMetadata } from "@/lib/blog";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface RecentArticlesGridProps {
  title?: string;
  subtitle?: string;
  limit?: number;
}

export function RecentArticlesGrid({ 
  title = "Recent Articles",
  subtitle = "Latest insights and tutorials",
  limit = 4 
}: RecentArticlesGridProps) {
  const { language } = useLanguage();
  const [articles, setArticles] = useState<BlogPostMetadata[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Try to fetch posts in current language, fallback to all posts if none found
    fetch(`/api/blog/posts?lang=${language}`)
      .then(res => res.json())
      .then(data => {
        // Get non-featured articles in current language
        let nonFeatured = (data.posts || [])
          .filter((post: BlogPostMetadata) => !post.featured)
          .slice(0, limit);
        
        // If no articles in current language, fetch all posts as fallback
        if (nonFeatured.length === 0 && language !== 'en') {
          return fetch('/api/blog/posts?lang=en')
            .then(res => res.json())
            .then(englishData => {
              const englishNonFeatured = (englishData.posts || [])
                .filter((post: BlogPostMetadata) => !post.featured)
                .slice(0, limit);
              setArticles(englishNonFeatured);
              setIsLoading(false);
            });
        }
        
        setArticles(nonFeatured);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Failed to load recent articles:', err);
        setIsLoading(false);
      });
  }, [limit, language]);

  if (isLoading || articles.length === 0) {
    return null;
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {subtitle}
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link href={`/blog/${article.slug}`}>
                <div className="group bg-card border-2 border-border rounded-lg p-5 h-full transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[2px] hover:-translate-y-[2px] flex flex-col">
                  {/* Category Badge */}
                  <span className="inline-block w-fit px-2 py-1 bg-primary/10 text-primary border border-primary/30 rounded text-xs font-bold uppercase tracking-wide mb-3">
                    {article.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-serif font-bold mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  {article.excerpt && (
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                      {article.excerpt}
                    </p>
                  )}

                  {/* Meta */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-auto">
                    <span>{article.readingTime}</span>
                    <span>•</span>
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

