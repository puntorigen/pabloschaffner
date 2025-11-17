"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

interface MediaItem {
  type: "image" | "youtube";
  src: string; // Image URL or YouTube video ID
  alt?: string; // For images
  caption?: string;
  title?: string; // For YouTube accessibility
}

interface MediaCarouselProps {
  items: MediaItem[];
  height?: string; // Custom height (e.g., "400px", "500px")
}

export function MediaCarousel({ items, height = "400px" }: MediaCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [apiReady, setApiReady] = useState(false);
  const playersRef = useRef<{ [key: number]: any }>({});
  const swiperRef = useRef<SwiperType | null>(null);

  // Load YouTube IFrame API
  useEffect(() => {
    // Check if API is already loaded
    if ((window as any).YT && (window as any).YT.Player) {
      setApiReady(true);
      return;
    }

    // Load YouTube IFrame API script
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Set up callback for when API is ready
    (window as any).onYouTubeIframeAPIReady = () => {
      setApiReady(true);
    };

    return () => {
      delete (window as any).onYouTubeIframeAPIReady;
    };
  }, []);

  // Initialize all YouTube players upfront for faster loading
  useEffect(() => {
    if (!apiReady || !items || items.length === 0) return;

    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      items.forEach((item, index) => {
        if (item.type === 'youtube' && !playersRef.current[index]) {
          const playerElement = document.getElementById(`youtube-player-${index}`);
          if (playerElement) {
            playersRef.current[index] = new (window as any).YT.Player(`youtube-player-${index}`, {
              videoId: item.src,
              playerVars: {
                autoplay: 0, // Don't autoplay on init, we'll control this manually
                controls: 1,
                rel: 0,
                modestbranding: 1,
                enablejsapi: 1,
              },
              events: {
                onReady: (event: any) => {
                  // If this is the first slide, play it
                  if (index === activeIndex) {
                    event.target.playVideo();
                  }
                },
              },
            });
          }
        }
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [apiReady, items, activeIndex]);

  // Control video playback based on active slide
  useEffect(() => {
    if (!apiReady || !items || items.length === 0) return;

    items.forEach((item, index) => {
      if (item.type === 'youtube') {
        const player = playersRef.current[index];
        if (player && player.playVideo && player.pauseVideo) {
          if (index === activeIndex) {
            // Play active video
            player.playVideo();
          } else {
            // Pause inactive videos
            player.pauseVideo();
          }
        }
      }
    });
  }, [activeIndex, apiReady, items]);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  // Check if items is empty after all hooks are called
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="my-8 max-w-3xl mx-auto">
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards, Autoplay, Pagination]}
        className="[&_.swiper-slide]:!rounded-lg"
        style={{ height }}
        cardsEffect={{
          perSlideOffset: 12,
          perSlideRotate: 3,
          rotate: true,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={items.length > 1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="!rounded-lg">
            <div className="h-full bg-card border-4 border-border rounded-lg overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col">
              {/* Media Content */}
              <div className="flex-1 relative bg-muted">
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt || "Gallery image"}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div 
                    id={`youtube-player-${index}`}
                    className="absolute inset-0 w-full h-full"
                  />
                )}
              </div>

              {/* Caption (Polaroid-style) */}
              {item.caption && (
                <div className="bg-card p-4 border-t-2 border-border">
                  <p className="text-center text-sm text-foreground font-medium">
                    {item.caption}
                  </p>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination dots styled neo-brutalist */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: hsl(var(--muted-foreground)) !important;
          opacity: 0.5 !important;
          width: 10px !important;
          height: 10px !important;
          border: 2px solid hsl(var(--border)) !important;
        }
        .swiper-pagination-bullet-active {
          background: hsl(var(--primary)) !important;
          opacity: 1 !important;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}

