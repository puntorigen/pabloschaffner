"use client";

import { MouseEvent, ReactNode } from "react";

interface ContactLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function ContactLink({ href, children, className }: ContactLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && (window as any).OkidokiWidget) {
      (window as any).OkidokiWidget.scheduleMeeting();
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}

