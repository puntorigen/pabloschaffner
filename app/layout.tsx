import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pabloschaffner.com'),
  title: {
    default: "Pablo Schaffner - AI Architect & Visionary Builder | Staff Software Engineer",
    template: "%s | Pablo Schaffner"
  },
  description:
    "Staff Software Engineer architecting AI systems for complex, ambitious problems. 20+ years building production systems from startups to 100M+ users. Founder & CTO with deep full-stack expertise in Python, Next.js, and AI/ML.",
  keywords: [
    "Pablo Schaffner",
    "AI Architect",
    "Staff Software Engineer",
    "AI Systems Architecture",
    "RAG Pipeline Developer",
    "LangChain Expert",
    "Full Stack Developer",
    "Fractional CTO",
    "AI Consultant",
    "Machine Learning Engineer",
    "Next.js Expert",
    "Python Developer",
    "React Developer",
    "TypeScript Developer",
    "AWS Architect",
    "Production AI Systems",
    "Multi-Agent Systems",
    "Technical Leadership",
    "Startup CTO",
    "Chile Software Engineer",
    "Santiago Tech",
    "Remote Software Engineer",
    "MercadoLibre Engineer",
    "AI Pioneer",
    "Custom IDE Developer",
    "Visionary Builder",
    "Complex Systems Architect",
  ],
  authors: [{ name: "Pablo Schaffner", url: "https://pabloschaffner.com" }],
  creator: "Pablo Schaffner",
  publisher: "Pablo Schaffner",
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon/favicon.svg',
      },
    ],
  },
  manifest: '/favicon/site.webmanifest',
  alternates: {
    canonical: "https://pabloschaffner.com",
    languages: {
      'en-US': 'https://pabloschaffner.com',
      'es-CL': 'https://pabloschaffner.com',
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_CL"],
    url: "https://pabloschaffner.com",
    title: "Pablo Schaffner - AI Architect & Visionary Builder",
    description:
      "Staff Software Engineer architecting AI systems for complex problems. 20+ years experience, Founder & CTO, 100M+ users at scale.",
    siteName: "Pablo Schaffner - Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pablo Schaffner - AI Architect & Staff Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pablo Schaffner - AI Architect & Visionary Builder",
    description:
      "Staff Software Engineer architecting AI systems for complex problems. 20+ years, Founder & CTO, 100M+ users at scale.",
    creator: "@pabloschaffner",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  category: "Technology",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Pablo Schaffner",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pablo Schaffner",
    url: "https://pabloschaffner.com",
    image: "https://pabloschaffner.com/og-image.png",
    jobTitle: "Staff Software Engineer & AI Architect",
    worksFor: {
      "@type": "Organization",
      name: "Punto Origen",
    },
    description: "Staff Software Engineer architecting AI systems for complex, ambitious problems. 20+ years building production systems from startups to 100M+ users.",
    sameAs: [
      "https://linkedin.com/in/pschaffner",
      "https://github.com/puntorigen",
      "https://twitter.com/pabloschaffner",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "AI Systems Architecture",
      "Full Stack Development",
      "Python",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "React",
      "AWS",
      "LangChain",
      "RAG Pipelines",
      "Multi-Agent Systems",
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "University of Toronto",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Santiago",
      addressCountry: "Chile",
    },
    email: "pablo@creador.cl",
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
        
        {/* Okidoki.chat Widget */}
        <Script
          src="https://www.okidoki.chat/embed/okidoki.js"
          data-app-id="pk_cb800bd7721bbe848df4b0f3f71601f9835a4cd022a41aa6"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

