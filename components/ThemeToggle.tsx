"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // Check localStorage and system preference on mount
    const stored = localStorage.getItem("theme") as "dark" | "light" | null;
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const initialTheme = stored || systemPreference;
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-muted border-2 border-border flex items-center px-1 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {/* Toggle background */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary"
        initial={false}
        animate={{
          opacity: theme === "dark" ? 0.3 : 0.2,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Sliding circle */}
      <motion.div
        className="relative w-5 h-5 rounded-full bg-foreground shadow-lg flex items-center justify-center"
        initial={false}
        animate={{
          x: theme === "dark" ? 0 : 24,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {/* Icon */}
        <motion.div
          initial={false}
          animate={{
            rotate: theme === "dark" ? 0 : 180,
            scale: theme === "dark" ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        >
          {theme === "dark" ? (
            // Moon icon
            <svg
              className="w-3 h-3 text-background"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            // Sun icon
            <svg
              className="w-3 h-3 text-background"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

