import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Pablo Schaffner - Staff Software Engineer & AI Expert",
  description:
    "I ship in 3 weeks what most teams plan for 6 months. Full-featured AI systems, not prototypes. 20 years of experience building for startups and Fortune 500s.",
  keywords: [
    "Pablo Schaffner",
    "AI Engineer",
    "Staff Software Engineer",
    "Full Stack Developer",
    "AI Consultant",
    "Machine Learning",
    "Next.js",
    "React",
    "TypeScript",
    "Chile",
    "Santiago",
  ],
  authors: [{ name: "Pablo Schaffner", url: "https://pabloschaffner.com" }],
  creator: "Pablo Schaffner",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pabloschaffner.com",
    title: "Pablo Schaffner - Staff Software Engineer & AI Expert",
    description:
      "I ship in 3 weeks what most teams plan for 6 months. Full-featured AI systems, not prototypes.",
    siteName: "Pablo Schaffner",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pablo Schaffner - Staff Software Engineer & AI Expert",
    description:
      "I ship in 3 weeks what most teams plan for 6 months. Full-featured AI systems, not prototypes.",
    creator: "@pabloschaffner",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
        
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

