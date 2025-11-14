"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations } from '@/lib/translations';

// Type that accepts any translation structure with string values
type Translation = typeof translations.en;
type TranslationStructure = {
  [K in keyof Translation]: Translation[K] extends object
    ? Translation[K] extends readonly any[]
      ? readonly string[]
      : { [P in keyof Translation[K]]: Translation[K][P] extends object
          ? Translation[K][P] extends readonly any[]
            ? readonly string[]
            : { [Q in keyof Translation[K][P]]: string }
          : string }
    : string;
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationStructure;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Load saved language from localStorage
    const saved = localStorage.getItem('language') as Language;
    const initialLang = (saved === 'en' || saved === 'es') ? saved : 'en';
    setLanguageState(initialLang);
    
    // Wait for Okidoki widget to load, then sync language
    const syncWidgetLanguage = () => {
      if ((window as any).OkidokiWidget) {
        (window as any).OkidokiWidget.setLanguage(initialLang);
      } else {
        // Widget not loaded yet, try again in 500ms
        setTimeout(syncWidgetLanguage, 500);
      }
    };
    
    // Start checking for widget after a short delay
    setTimeout(syncWidgetLanguage, 1000);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    
    // Sync with Okidoki.chat widget
    if (typeof window !== 'undefined' && (window as any).OkidokiWidget) {
      (window as any).OkidokiWidget.setLanguage(lang);
    }
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

