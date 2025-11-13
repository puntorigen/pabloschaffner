"use client";

import { motion } from "framer-motion";

interface StatBorderAnimationProps {
  color: string;
  direction: "up" | "down";
  delay?: number;
}

export function StatBorderAnimation({ 
  color, 
  direction, 
  delay = 0 
}: StatBorderAnimationProps) {
  return (
    <div className="absolute left-0 top-0 h-full w-[2px] overflow-hidden">
      {/* Single elegant scanning line */}
      <motion.div
        className="absolute left-0 w-full h-[60px]"
        style={{
          background: direction === "down"
            ? `linear-gradient(
                to bottom,
                transparent 0%,
                hsl(var(--${color}) / 0.0) 5%,
                hsl(var(--${color}) / 0.3) 25%,
                hsl(var(--${color}) / 0.8) 50%,
                hsl(var(--${color}) / 0.3) 75%,
                hsl(var(--${color}) / 0.0) 95%,
                transparent 100%
              )`
            : `linear-gradient(
                to top,
                transparent 0%,
                hsl(var(--${color}) / 0.0) 5%,
                hsl(var(--${color}) / 0.3) 25%,
                hsl(var(--${color}) / 0.8) 50%,
                hsl(var(--${color}) / 0.3) 75%,
                hsl(var(--${color}) / 0.0) 95%,
                transparent 100%
              )`,
        }}
        animate={{
          y: direction === "down" 
            ? ["-60px", "calc(100% + 60px)"] 
            : ["calc(100% + 60px)", "-60px"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay,
        }}
      />
      
      {/* Subtle bright spot at the center of the scanning line */}
      <motion.div
        className="absolute left-[-1px] w-[4px] h-[2px] rounded-full"
        style={{
          background: `hsl(var(--${color}))`,
          boxShadow: `0 0 8px hsl(var(--${color}) / 0.8), 0 0 12px hsl(var(--${color}) / 0.4)`,
        }}
        animate={{
          y: direction === "down" 
            ? ["-2px", "calc(100% + 2px)"] 
            : ["calc(100% + 2px)", "-2px"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay,
        }}
      />
    </div>
  );
}

