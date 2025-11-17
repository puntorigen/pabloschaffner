"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

interface NavigationProps {
  currentPage?: 'home' | 'blog';
}

export function Navigation({ currentPage = 'home' }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const menuItems = [
    { id: 'about' as const, href: '/#about' },
    { id: 'approach' as const, href: '/#approach' },
    { id: 'work' as const, href: '/#work' },
    { id: 'blog' as const, href: '/blog' },
    { id: 'contact' as const, href: '/#contact' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-[3px] right-[3px] md:left-[11px] md:right-[11px] z-50 bg-card/95 backdrop-blur-sm border-b-2 border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-colors"
          >
            Pablo Schaffner
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            {menuItems.map((item, i) => (
              <motion.a
                key={item.id}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors relative font-medium uppercase tracking-wide cursor-pointer"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.3 }}
              >
                {t.nav[item.id]}
              </motion.a>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <LanguageSwitcher />
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: mobileMenuOpen ? "auto" : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden border-t-2 border-border"
      >
        <div className="container mx-auto px-4 py-6 space-y-4">
          {menuItems.map((item, i) => (
            <motion.a
              key={item.id}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium uppercase tracking-wide text-lg py-2 cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : -20 }}
              transition={{ delay: mobileMenuOpen ? 0.1 * i : 0, duration: 0.3 }}
            >
              {t.nav[item.id]}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}

