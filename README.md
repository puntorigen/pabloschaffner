# Pablo Schaffner - Personal Website

Modern, high-performance personal website built with Next.js 15, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel Pro

## Design System

### Colors
- **Primary**: Electric Cyan (#00F5FF)
- **Secondary**: Vivid Purple (#8B5CF6)
- **Accent**: Pink (#EC4899)
- **Background**: Deep Black (#0A0A0A)

### Features
- Dark mode by default
- Responsive design (mobile-first)
- Smooth animations
- Optimized performance (targeting Lighthouse 100/100/100/100)
- SEO-optimized

## Getting Started

### Install dependencies
```bash
pnpm install
```

### Run development server
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Build for production
```bash
pnpm build
pnpm start
```

## Project Structure

```
personal-website/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles & design system
├── components/          # React components
├── lib/                # Utility functions
│   └── utils.ts        # cn() utility for className merging
├── public/             # Static assets
└── plans/              # Strategy & planning documents
```

## Deployment

This site is optimized for deployment on Vercel Pro:

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

## Positioning

**Headline**: "I Ship in 3 Weeks What Most Teams Plan for 6 Months"

**Core Message**: Full-featured, production-ready AI systems. Not prototypes. 20 years of experience makes the difference.

## Contact

- **Website**: https://www.pabloschaffner.com
- **GitHub**: https://github.com/puntorigen
- **LinkedIn**: https://www.linkedin.com/in/pschaffner/

---

Built with ❤️ using Next.js. Currently on v0.0.1. Always improving.

