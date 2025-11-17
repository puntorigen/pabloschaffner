"use client";

import { motion } from "framer-motion";
import { GridBackground } from "@/components/GridBackground";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogPostMetadata } from "@/lib/blog";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useMemo, useEffect } from "react";
import Link from "next/link";

export default function BlogPage() {
  const { t } = useLanguage();
  const [allPosts, setAllPosts] = useState<BlogPostMetadata[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Fetch posts and categories
  useEffect(() => {
    fetch('/api/blog/posts?lang=en')
      .then(res => res.json())
      .then(data => {
        setAllPosts(data.posts || []);
        const allCategories = [t.blog.all, ...(data.categories || [])];
        setCategories(allCategories);
        // Set initial selected category to "All" if not already set
        setSelectedCategory(t.blog.all);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Failed to load posts:', err);
        setIsLoading(false);
      });
  }, [t.blog.all]);

  // Filter posts based on category and search
  const filteredPosts = useMemo(() => {
    let posts = allPosts;

    // Filter by category (only if a specific category is selected)
    if (selectedCategory && selectedCategory !== t.blog.all) {
      posts = posts.filter((post) => post.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.subtitle.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return posts;
  }, [allPosts, selectedCategory, searchQuery, t.blog.all]);

  const featuredPost = allPosts.find((post) => post.featured);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background overflow-hidden relative px-[3px] md:px-[11px]">
        <GridBackground />
        <Navigation currentPage="blog" />
        <div className="container mx-auto px-4 pt-32 pb-20">
          <div className="max-w-5xl mx-auto text-center py-20">
            <p className="text-xl text-muted-foreground">{t.blog.loading}</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background overflow-hidden relative px-[3px] md:px-[11px]">
      <GridBackground />

      {/* Navigation */}
      <Navigation currentPage="blog" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-5 py-2.5 bg-primary text-primary-foreground text-base font-black rounded-md border-2 border-border uppercase tracking-wider mb-6">
                {t.blog.badge}
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black tracking-tight leading-[0.95] text-foreground mb-6">
                {t.blog.title}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
                {t.blog.subtitle}
              </p>
            </motion.div>

            {/* Search and Filter */}
            <motion.div
              className="mb-12 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder={t.blog.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 bg-card border-2 border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                  🔍
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-md border-2 border-border font-bold text-sm transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[1px] hover:-translate-y-[1px] ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-card text-foreground hover:bg-secondary"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Results count */}
              <p className="text-sm text-muted-foreground">
                {filteredPosts.length} {filteredPosts.length === 1 ? t.blog.resultsCount.single : t.blog.resultsCount.plural}{" "}
                {searchQuery && `${t.blog.resultsCount.matching} "${searchQuery}"`}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Post (if exists and no filters) */}
      {featuredPost && !searchQuery && (!selectedCategory || selectedCategory === t.blog.all) && (
        <section className="container mx-auto px-4 pb-20">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center gap-3">
                <span>⭐</span>
                <span>{t.blog.featured}</span>
              </h2>
              <BlogCard post={featuredPost} index={0} />
            </motion.div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="container mx-auto px-4 pb-20 md:pb-32">
        <div className="max-w-5xl mx-auto">
          {filteredPosts.length === 0 ? (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl text-muted-foreground mb-4">
                {t.blog.noResults}
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory(t.blog.all);
                }}
                className="text-primary hover:text-primary-hover font-semibold underline"
              >
                {t.blog.clearFilters}
              </button>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredPosts
                .filter((post) => !featuredPost || post.slug !== featuredPost.slug || searchQuery || (selectedCategory && selectedCategory !== t.blog.all))
                .map((post, i) => (
                  <BlogCard key={post.slug} post={post} index={i} />
                ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

