import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { ContactLink } from "./ContactLink";
import { MediaCarousel } from "./MediaCarousel";
import { CodeBlock } from "./CodeBlock";

// Section counter for alternating backgrounds
let sectionCounter = 0;
export function resetSectionCounter() {
  sectionCounter = 0;
}

type ColorOption = 'purple' | 'blue' | 'yellow' | 'pink' | 'green' | 'orange' | 'indigo' | 'teal' | 'red' | 'cyan' | 'slate' | 'emerald' | 'rose';

interface SectionProps {
  children: ReactNode;
  title: string;
  badge?: string;
  color?: ColorOption; // Color name (purple, blue, green, etc.)
  bgImage?: string; // Background image URL (overrides color)
  bgImageSize?: 'cover' | 'contain'; // Background size for image
  bgImagePosition?: string; // Background position (e.g., "center", "top right")
}

// Predefined color schemes - all classes are included at build time
const colorMap: Record<ColorOption, { bg: string; badge: string }> = {
  purple: {
    bg: 'bg-purple-200 dark:bg-purple-900/30',
    badge: 'bg-purple-600 text-white dark:bg-purple-500',
  },
  blue: {
    bg: 'bg-blue-200 dark:bg-blue-900/30',
    badge: 'bg-blue-600 text-white dark:bg-blue-500',
  },
  yellow: {
    bg: 'bg-yellow-200 dark:bg-yellow-900/30',
    badge: 'bg-yellow-600 text-white dark:bg-yellow-500',
  },
  pink: {
    bg: 'bg-pink-200 dark:bg-pink-900/30',
    badge: 'bg-pink-600 text-white dark:bg-pink-500',
  },
  green: {
    bg: 'bg-green-200 dark:bg-green-900/30',
    badge: 'bg-green-600 text-white dark:bg-green-500',
  },
  orange: {
    bg: 'bg-orange-200 dark:bg-orange-900/30',
    badge: 'bg-orange-600 text-white dark:bg-orange-500',
  },
  indigo: {
    bg: 'bg-indigo-200 dark:bg-indigo-900/30',
    badge: 'bg-indigo-600 text-white dark:bg-indigo-500',
  },
  teal: {
    bg: 'bg-teal-200 dark:bg-teal-900/30',
    badge: 'bg-teal-600 text-white dark:bg-teal-500',
  },
  red: {
    bg: 'bg-red-200 dark:bg-red-900/30',
    badge: 'bg-red-600 text-white dark:bg-red-500',
  },
  cyan: {
    bg: 'bg-cyan-200 dark:bg-cyan-900/30',
    badge: 'bg-cyan-600 text-white dark:bg-cyan-500',
  },
  slate: {
    bg: 'bg-slate-200 dark:bg-slate-800/40',
    badge: 'bg-slate-700 text-white dark:bg-slate-600',
  },
  emerald: {
    bg: 'bg-emerald-200 dark:bg-emerald-900/30',
    badge: 'bg-emerald-600 text-white dark:bg-emerald-500',
  },
  rose: {
    bg: 'bg-rose-200 dark:bg-rose-900/30',
    badge: 'bg-rose-600 text-white dark:bg-rose-500',
  },
};

export function Section({ children, title, badge, color, bgImage, bgImageSize = 'cover', bgImagePosition = 'center' }: SectionProps) {
  const index = sectionCounter++;
  
  // Default rotation for sections without explicit color
  const defaultColors: ColorOption[] = ['purple', 'blue', 'yellow', 'pink', 'green', 'orange', 'indigo', 'teal'];
  const defaultColor = defaultColors[index % defaultColors.length];
  
  const selectedColor = color || defaultColor;
  const { bg: bgClass, badge: badgeClass } = colorMap[selectedColor];
  
  // Inline styles for background image
  const bgStyle = bgImage ? {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: bgImageSize,
    backgroundPosition: bgImagePosition,
    backgroundRepeat: 'no-repeat',
  } : undefined;
  
  return (
    <section 
      className={`relative -ml-[calc((100vw-100%)/2-1rem)] -mr-[calc((100vw-100%)/2-1rem)] md:-ml-[calc((100vw-100%)/2-1rem)] md:-mr-[calc((100vw-100%)/2-1rem)] py-12 md:py-20 first:mt-0 ${!bgImage ? bgClass : 'bg-muted/20'}`}
      style={bgStyle}
    >
      <div className="px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-4">
            <span className={`px-4 py-2 ${badgeClass} text-sm font-bold rounded-md border-2 border-border uppercase tracking-wider`}>
              {badge || `Section ${index + 1}`}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-foreground mb-6">
            {title}
          </h2>
          <div className="prose prose-lg max-w-none">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

interface CalloutProps {
  children: ReactNode;
  type?: "info" | "warning" | "success" | "danger";
}

export function Callout({ children, type = "info" }: CalloutProps) {
  const styles = {
    info: "bg-blue/10 border-blue text-foreground",
    warning: "bg-yellow-500/10 border-yellow-600 text-foreground",
    success: "bg-green-500/10 border-green-600 text-foreground",
    danger: "bg-red-500/10 border-red-600 text-foreground",
  };

  const icons = {
    info: "ℹ️",
    warning: "⚠️",
    success: "✓",
    danger: "⚠️",
  };

  return (
    <div
      className={`my-6 p-4 border-l-4 ${styles[type]} rounded-md shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]`}
    >
      <div className="flex gap-3 items-start">
        <span className="text-xl">{icons[type]}</span>
        <div className="flex-1 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  contain?: boolean; // Use 'contain' instead of 'cover' for background
  bgColor?: string; // Custom background color for contain mode
}

export function ImageWithCaption({
  src,
  alt,
  caption,
  width = 1200,
  height = 675,
  contain = false,
  bgColor,
}: ImageWithCaptionProps) {
  // Calculate max-width based on provided width
  const maxWidth = width <= 500 ? 'max-w-md' : width <= 800 ? 'max-w-xl' : 'max-w-2xl';
  
  // Calculate aspect ratio from width/height when in contain mode
  const aspectRatio = contain ? `${width}/${height}` : '4/3';
  
  return (
    <figure className={`my-8 ${maxWidth} mx-auto`}>
      {/* Neo-brutalist Polaroid Card */}
      <div className="bg-card border-2 border-border rounded-lg p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        {/* Image container */}
        <div 
          className="relative w-full rounded-md overflow-hidden"
          style={{ 
            backgroundColor: bgColor || 'hsl(var(--muted))',
            aspectRatio: aspectRatio
          }}
        >
          {contain ? (
            // Background image style (for contain mode, like vic20)
            <div 
              className="absolute inset-0 p-8"
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
          ) : (
            // Next Image component (for cover mode)
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        {/* Polaroid caption */}
        {caption && (
          <p className="text-center text-sm text-muted-foreground mt-3 font-medium italic">
            {caption}
          </p>
        )}
      </div>
    </figure>
  );
}

// Code Screenshot component - optimized for code images with tight wrapping
interface CodeScreenshotProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export function CodeScreenshot({
  src,
  alt,
  caption,
  width = 960,
  height = 270,
}: CodeScreenshotProps) {
  return (
    <figure className="my-8 max-w-4xl mx-auto">
      {/* Neo-brutalist Code Card - tighter padding, auto height */}
      <div className="bg-card border-4 border-border rounded-lg p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all">
        {/* Image container - no forced aspect ratio */}
        <div className="relative w-full rounded-md overflow-hidden bg-muted">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-auto"
          />
        </div>

        {/* Caption (Bottom text) */}
        {caption && (
          <div className="mt-2 px-2">
            <p className="text-sm text-muted-foreground italic">{caption}</p>
          </div>
        )}
      </div>
    </figure>
  );
}

interface YouTubeEmbedProps {
  videoId: string; // YouTube video ID (e.g., "dQw4w9WgXcQ")
  caption?: string;
  title?: string; // For accessibility
}

export function YouTubeEmbed({ videoId, caption, title = "YouTube video" }: YouTubeEmbedProps) {
  return (
    <figure className="my-8 max-w-3xl mx-auto">
      {/* Neo-brutalist Card */}
      <div className="bg-card border-2 border-border rounded-lg p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        {/* Video container with 16:9 aspect ratio */}
        <div className="relative w-full aspect-video rounded-md overflow-hidden bg-muted">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
        {/* Caption */}
        {caption && (
          <p className="text-center text-sm text-muted-foreground mt-3 font-medium italic">
            {caption}
          </p>
        )}
      </div>
    </figure>
  );
}

interface TechStackProps {
  items: string[];
}

export function TechStack({ items }: TechStackProps) {
  return (
    <div className="my-6 flex flex-wrap gap-2">
      {items.map((tech, i) => (
        <span
          key={i}
          className="px-3 py-1 bg-muted border border-border rounded-full text-xs font-medium text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

interface StatsProps {
  items: { label: string; value: string }[];
}

export function Stats({ items }: StatsProps) {
  return (
    <div className="my-8 grid grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((stat, i) => (
        <div
          key={i}
          className="bg-card border-2 border-border rounded-lg p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
        >
          <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
            {stat.value}
          </div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

interface ToolCardProps {
  number: string;
  title: string;
  problem: string;
  solution: string;
  result?: string;
  link?: string;
  linkText?: string;
  children?: ReactNode;
}

export function ToolCard({ number, title, problem, solution, result, link, linkText, children }: ToolCardProps) {
  return (
    <div className="my-6 bg-card border-4 border-border rounded-lg p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all">
      {/* Header with number */}
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground border-2 border-border rounded-lg flex items-center justify-center font-bold text-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div>
          <span className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-md text-sm font-bold text-foreground mb-2">Problem</span>
          <p className="text-muted-foreground">{problem}</p>
        </div>

        <div>
          <span className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-md text-sm font-bold text-foreground mb-2">Solution</span>
          <p className="text-muted-foreground">{solution}</p>
        </div>

        {result && (
          <div>
            <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-md text-sm font-bold text-foreground mb-2">Result</span>
            <p className="text-muted-foreground font-medium">{result}</p>
          </div>
        )}

        {/* Children for additional content like images */}
        {children}

        {link && (
          <div className="pt-2">
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-bold underline underline-offset-4"
            >
              {linkText || 'View on GitHub'}
              <span>→</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

interface FeatureListProps {
  items: { label: string; text: string }[];
}

export function FeatureList({ items }: FeatureListProps) {
  return (
    <div className="my-6 space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-card border-2 border-border rounded-lg p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[1px] hover:-translate-y-[1px] transition-all"
        >
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
            <div className="flex-1">
              <span className="font-bold text-foreground">{item.label}:</span>{' '}
              <span className="text-muted-foreground">{item.text}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export const MDXComponents = {
  // Headings with custom styling
  h1: ({ children, ...props }: any) => (
    <h1
      className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-foreground mt-12 mb-6 first:mt-0"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: any) => (
    <h2
      className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-foreground mt-10 mb-5"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: any) => (
    <div className="mt-8 mb-6 not-prose">
      <div className="inline-block text-xl md:text-2xl font-serif font-bold text-foreground bg-primary/10 border-2 border-border rounded-lg px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[2px] hover:-translate-y-[2px] transition-all">
        {children}
      </div>
    </div>
  ),
  h4: ({ children, ...props }: any) => (
    <h4
      className="text-xl md:text-2xl font-serif font-bold text-foreground mt-6 mb-3"
      {...props}
    >
      {children}
    </h4>
  ),
  h5: ({ children, ...props }: any) => (
    <h5
      className="text-lg md:text-xl font-serif font-bold text-foreground mt-4 mb-2"
      {...props}
    >
      {children}
    </h5>
  ),
  h6: ({ children, ...props }: any) => (
    <h6
      className="text-base md:text-lg font-serif font-bold text-foreground mt-4 mb-2"
      {...props}
    >
      {children}
    </h6>
  ),

  // Paragraphs
  p: ({ children, ...props }: any) => (
    <p className="text-lg text-muted-foreground leading-relaxed mb-6" {...props}>
      {children}
    </p>
  ),

  // Links
  a: ({ children, href, ...props }: any) => {
    const isExternal = href?.startsWith("http");
    const isAnchor = href?.startsWith("#");
    const isContact = href === "/contact" || href === "#contact";

    if (isAnchor && !isContact) {
      return (
        <a
          href={href}
          className="text-primary hover:text-primary-hover underline underline-offset-4 transition-colors"
          {...props}
        >
          {children}
        </a>
      );
    }

    // Trigger Okidoki chat widget for /contact links
    if (isContact) {
      return (
        <ContactLink
          href={href}
          className="text-primary hover:text-primary-hover underline underline-offset-4 transition-colors cursor-pointer"
        >
          {children}
        </ContactLink>
      );
    }

    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary-hover underline underline-offset-4 transition-colors inline-flex items-center gap-1"
          {...props}
        >
          {children}
          <span className="text-xs">↗</span>
        </a>
      );
    }

    return (
      <Link
        href={href}
        className="text-primary hover:text-primary-hover underline underline-offset-4 transition-colors"
        {...props}
      >
        {children}
      </Link>
    );
  },

  // Lists
  ul: ({ children, ...props }: any) => (
    <ul className="list-disc list-outside ml-6 mb-6 space-y-2" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: any) => (
    <ol className="list-decimal list-outside ml-6 mb-6 space-y-2" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: any) => (
    <li className="text-lg text-muted-foreground leading-relaxed" {...props}>
      {children}
    </li>
  ),

  // Blockquote
  blockquote: ({ children, ...props }: any) => (
    <blockquote
      className="border-l-4 border-primary pl-6 py-2 my-6 italic text-lg text-foreground bg-primary/5"
      {...props}
    >
      {children}
    </blockquote>
  ),

  // Code blocks
  code: ({ children, className, ...props }: any) => {
    const isInline = !className;

    if (isInline) {
      return (
        <code
          className="px-1.5 py-0.5 bg-muted border border-border rounded text-sm font-mono text-foreground"
          {...props}
        >
          {children}
        </code>
      );
    }

    // For code blocks (inside pre)
    return (
      <code
        className={`${className} bg-transparent`}
        {...props}
      >
        {children}
      </code>
    );
  },

  // Pre (for code blocks)
  pre: ({ children, ...props }: any) => (
    <pre
      className="my-6 p-4 bg-slate-950 border-4 border-border rounded-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-x-auto font-mono [&_code]:bg-transparent"
      {...props}
    >
      {children}
    </pre>
  ),

  // Tables
  table: ({ children, ...props }: any) => (
    <div className="my-8 overflow-x-auto">
      <table
        className="w-full border-2 border-border rounded-lg overflow-hidden shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
        {...props}
      >
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }: any) => (
    <thead className="bg-muted" {...props}>
      {children}
    </thead>
  ),
  th: ({ children, ...props }: any) => (
    <th
      className="px-4 py-3 text-left text-sm font-bold text-foreground border-b-2 border-border"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }: any) => (
    <td
      className="px-4 py-3 text-muted-foreground border-b border-border"
      {...props}
    >
      {children}
    </td>
  ),

  // Horizontal rule
  hr: (props: any) => (
    <hr className="my-8 border-t-2 border-border" {...props} />
  ),

  // Strong/Bold
  strong: ({ children, ...props }: any) => (
    <strong className="font-bold text-foreground" {...props}>
      {children}
    </strong>
  ),

  // Emphasis/Italic
  em: ({ children, ...props }: any) => (
    <em className="italic" {...props}>
      {children}
    </em>
  ),

  // Custom components
  Section,
  Callout,
  ImageWithCaption,
  CodeBlock,
  CodeScreenshot,
  YouTubeEmbed,
  MediaCarousel,
  TechStack,
  Stats,
  ToolCard,
  FeatureList,
};

