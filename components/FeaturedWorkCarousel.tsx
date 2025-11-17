"use client";

import { useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { BlogPostMetadata } from "@/lib/blog";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

interface FeaturedWorkCarouselProps {
  posts: BlogPostMetadata[];
}

export function FeaturedWorkCarousel({ posts }: FeaturedWorkCarouselProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => {
    if (!swiperRef.current) return;
    if (swiperRef.current.activeIndex === 0) {
      // Jump to last slide
      swiperRef.current.slideTo(posts.length - 1);
    } else {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (!swiperRef.current) return;
    if (swiperRef.current.activeIndex === posts.length - 1) {
      // Jump to first slide
      swiperRef.current.slideTo(0);
    } else {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="relative">
      {/* Swiper Container */}
      <div className="relative max-w-2xl mx-auto">
        <Swiper
          effect="cards"
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          className="h-[420px] md:h-[380px] w-full [&_.swiper-slide]:!rounded-lg"
          cardsEffect={{
            perSlideOffset: 12,
            perSlideRotate: 3,
            rotate: true,
            slideShadows: false,
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={false}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            // Auto-loop when reaching the end via autoplay
            if (swiper.activeIndex === posts.length - 1 && swiper.autoplay.running) {
              setTimeout(() => {
                swiper.slideTo(0);
              }, 6000);
            }
          }}
        >
          {posts.map((post) => (
            <SwiperSlide key={post.slug} className="!rounded-lg">
              <Link href={`/blog/${post.slug}?ref=home`} className="block h-full">
                <div className="group relative bg-card border-4 border-border rounded-lg p-5 md:p-7 overflow-hidden h-full flex flex-col justify-between shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue/10 opacity-50" />

                  <div className="relative">
                    {/* Category Badge */}
                    <div className="inline-block mb-2">
                      <span className="px-2.5 py-1 bg-primary text-primary-foreground border-2 border-border rounded-md text-xs font-bold uppercase tracking-wide">
                        {post.featured && '⭐ '}Featured • {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif font-bold mb-2 text-foreground text-2xl md:text-3xl group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Subtitle */}
                    {post.subtitle && (
                      <p className="font-bold text-foreground/80 italic mb-3 text-base md:text-lg line-clamp-1">
                        {post.subtitle}
                      </p>
                    )}

                    {/* Excerpt */}
                    {post.excerpt && (
                      <p className="text-muted-foreground mb-3 leading-relaxed line-clamp-2 text-sm md:text-base">
                        {post.excerpt}
                      </p>
                    )}

                    {/* Tech Stack */}
                    {post.tech && post.tech.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
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

                    {/* Read More CTA */}
                    <div className="inline-flex items-center gap-2 text-primary font-bold text-base group-hover:translate-x-2 transition-transform">
                      <span>Read Full Story</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation and View All Link */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
        {/* Previous Arrow */}
        <button
          onClick={handlePrev}
          className="bg-primary hover:bg-primary-hover text-primary-foreground border-4 border-border rounded-full p-3 md:p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[2px] hover:-translate-y-[2px] active:scale-95 transition-all"
          aria-label="Previous project"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* View All Link */}
        <Link
          href="/blog?category=Case Study"
          className="inline-flex items-center gap-2 px-6 py-3 bg-card border-2 border-border text-foreground rounded-md font-sans font-bold hover:bg-secondary transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[2px] hover:-translate-y-[2px]"
        >
          <span>View All Case Studies</span>
          <span>→</span>
        </Link>

        {/* Next Arrow */}
        <button
          onClick={handleNext}
          className="bg-primary hover:bg-primary-hover text-primary-foreground border-4 border-border rounded-full p-3 md:p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[2px] hover:-translate-y-[2px] active:scale-95 transition-all"
          aria-label="Next project"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
