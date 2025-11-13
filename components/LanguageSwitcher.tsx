"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative flex items-center gap-2 bg-muted/30 rounded-full p-1">
      {/* Sliding background */}
      <motion.div
        className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-primary rounded-full"
        animate={{
          x: language === 'en' ? 4 : 'calc(100% + 4px)',
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      />
      
      {/* EN Button */}
      <button
        onClick={() => setLanguage('en')}
        className={`relative z-10 px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
          language === 'en'
            ? 'text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      
      {/* ES Button */}
      <button
        onClick={() => setLanguage('es')}
        className={`relative z-10 px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
          language === 'es'
            ? 'text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );
}

