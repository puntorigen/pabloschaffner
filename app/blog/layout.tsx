import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technical Blog | Pablo Schaffner',
  description: 'Deep dives into building AI systems, full-stack applications, and lessons learned from 20+ years of software engineering. Case studies, tutorials, and technical insights.',
  keywords: ['AI', 'Machine Learning', 'Full-Stack Development', 'Next.js', 'React', 'Python', 'Software Engineering', 'Technical Blog'],
  openGraph: {
    title: 'Technical Blog | Pablo Schaffner',
    description: 'Deep dives into building AI systems, full-stack applications, and lessons learned from 20+ years of software engineering.',
    type: 'website',
    url: 'https://pabloschaffner.com/blog',
    siteName: 'Pablo Schaffner',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical Blog | Pablo Schaffner',
    description: 'Deep dives into building AI systems, full-stack applications, and lessons learned from 20+ years of software engineering.',
  },
  alternates: {
    canonical: 'https://pabloschaffner.com/blog',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

