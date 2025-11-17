"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="border-t border-border bg-slate-100/50 dark:bg-slate-900/30 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-display font-bold text-lg text-foreground">
            Pablo Schaffner
          </div>
          <div className="text-sm text-muted-foreground">
            {t.footer.built} {t.footer.by}. v0.1.1. {t.footer.version}
          </div>
        </div>
      </div>
    </footer>
  );
}

