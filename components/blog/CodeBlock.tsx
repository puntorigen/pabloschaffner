"use client";

import { useState } from "react";

interface CodeBlockProps {
  children: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ children, language = 'javascript', title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <figure className="my-6 not-prose">
      <div className="bg-card border-4 border-border rounded-lg overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        {/* Header */}
        {(title || language) && (
          <div className="flex items-center justify-between bg-muted border-b-4 border-border px-4 py-2">
            <div className="flex items-center gap-2">
              {language && (
                <span className="inline-block px-2 py-1 bg-primary text-primary-foreground text-xs font-bold rounded border-2 border-border shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  {language}
                </span>
              )}
              {title && (
                <span className="text-sm font-medium text-foreground">{title}</span>
              )}
            </div>
            <button
              onClick={handleCopy}
              className="px-3 py-1 text-xs font-bold bg-background border-2 border-border rounded hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              {copied ? '✓ Copied!' : 'Copy'}
            </button>
          </div>
        )}
        
        {/* Code content */}
        <pre className="p-4 overflow-x-auto bg-muted text-sm">
          <code className={`language-${language}`}>{children}</code>
        </pre>
      </div>
    </figure>
  );
}

