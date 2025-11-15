"use client";

import { motion } from "framer-motion";
import { GridBackground } from "@/components/GridBackground";
import { ContactForm } from "@/components/ContactForm";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

export default function Home() {
  const { t } = useLanguage();
  const [featuredCase, setFeaturedCase] = useState<string>('fenixblack');
  
  return (
    <main className="min-h-screen bg-background overflow-hidden relative">
      <GridBackground />
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b-2 border-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="font-serif text-2xl font-bold text-foreground"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Pablo Schaffner
            </motion.div>
            <div className="flex items-center gap-6 text-sm">
              {(["about", "work", "contact"] as const).map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  className="text-foreground hover:text-primary transition-colors relative font-medium uppercase tracking-wide"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.3 }}
                >
                  {t.nav[item]}
                </motion.a>
              ))}
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
          {/* Name & Title */}
          <motion.div
            className="mb-8 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-4 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-md border-2 border-border uppercase tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {t.hero.title}
            </motion.span>
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight leading-tight text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {t.hero.name}
            </motion.h1>
          </motion.div>

          {/* Headline */}
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold tracking-tight leading-tight mb-6 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {t.hero.headline1}{" "}
            <span className="italic">
              {t.hero.headline2}
            </span>{" "}
            {t.hero.headline3}{" "}
            <span className="italic">
              {t.hero.headline4}
            </span>
          </motion.h2>

          {/* Subheadline */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              {t.hero.subheadline1}{" "}
              <span className="text-foreground font-semibold">
                {t.hero.subheadline1Bold}
              </span>{" "}
              {t.hero.subheadline2}
            </p>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              {t.hero.subheadline3}{" "}
              <span className="text-primary font-semibold">
                {t.hero.subheadline3Bold}
              </span>
              {t.hero.subheadline4}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-primary hover:bg-primary-hover text-primary-foreground rounded-md font-sans font-bold inline-flex items-center gap-2 justify-center transition-all border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
              whileTap={{ scale: 0.98 }}
            >
              <span>{t.hero.ctaPrimary}</span>
              <span>→</span>
            </motion.a>
            <motion.a
              href="#work"
              className="px-8 py-4 border-2 border-border bg-card text-foreground rounded-md font-sans font-bold hover:bg-secondary transition-all justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
              whileTap={{ scale: 0.98 }}
            >
              {t.hero.ctaSecondary}
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 pt-20 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            {[
              {
                value: t.hero.stat1Value,
                label: t.hero.stat1Label,
                delay: 0,
              },
              {
                value: t.hero.stat2Value,
                label: t.hero.stat2Label,
                delay: 0.1,
              },
              {
                value: t.hero.stat3Value,
                label: t.hero.stat3Label,
                delay: 0.2,
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + stat.delay, duration: 0.6 }}
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="border-y border-border bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground mb-8 font-medium text-sm">
            {t.trustedBy.title}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="text-xl md:text-2xl font-bold text-foreground/60">MercadoLibre</div>
            <div className="text-xl md:text-2xl font-bold text-foreground/60">Truepill</div>
            <div className="text-xl md:text-2xl font-bold text-foreground/60">DocNexus</div>
            <div className="text-xl md:text-2xl font-bold text-foreground/60">Healthcare</div>
            <div className="text-xl md:text-2xl font-bold text-foreground/60">Insurance</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-md border-2 border-border uppercase tracking-wider mb-4">
                {t.about.badge}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-foreground">
                {t.about.title}
              </h2>
            </motion.div>

            <motion.div
              className="max-w-none space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t.about.intro}{" "}
                <span className="text-primary font-semibold">
                  {t.about.introHighlight}
                </span>
                {t.about.introEnd}
              </p>

              <p className="text-2xl text-foreground font-semibold leading-relaxed">
                {t.about.insight}
              </p>

              <p className="text-xl text-muted-foreground leading-relaxed">
                {t.about.description}
              </p>

              <motion.div
                className="bg-card border-2 border-border rounded-lg p-8 my-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-full h-2 bg-primary rounded-sm mb-6" />
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-primary">⚡</span> {t.about.okidokiTitle}
                </h3>
                <p className="text-lg text-muted-foreground mb-4">
                  {t.about.okidokiDescription}
                </p>
                <div className="grid md:grid-cols-2 gap-3 text-sm text-foreground">
                  {t.about.okidokiFeatures.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.05 }}
                    >
                      <span className="text-primary">✓</span>
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <p className="text-xl font-display font-bold text-primary">
                {t.about.closing1}
                <br />
                {t.about.closing2}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-md border-2 border-border uppercase tracking-wider mb-4">
            {t.experience.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-foreground mb-12">
            {t.experience.title}
          </h2>

          <div className="space-y-6">
            {[
              { key: 'consulting' },
              { key: 'mercadolibre' },
              { key: 'docnexus' },
              { key: 'truepill' },
              { key: 'vpublicidad' },
              { key: 'creador' },
              { key: 'trabajando' },
              { key: 'celmedia' },
            ].map((exp, i) => {
              const experience = (t.experience as any)[exp.key];
              return (
                <motion.div
                  key={exp.key}
                  className="border-l-4 border-primary pl-6 py-2 hover:border-primary-hover transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                >
                  <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                    <h3 className="text-xl font-serif font-bold text-foreground">
                      {experience.company}
                    </h3>
                    <span className="text-sm text-muted-foreground font-mono">
                      {experience.period}
                    </span>
                  </div>
                  <p className="font-bold mb-2 text-foreground">
                    {experience.role}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="work" className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-md border-2 border-border uppercase tracking-wider mb-4">
              {t.caseStudies.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-foreground mb-4">
              {t.caseStudies.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mb-16">
              {t.caseStudies.subtitle}
            </p>
          </motion.div>

          {/* Define all case studies */}
          {(() => {
            const caseStudies = {
              fenixblack: {
                id: 'fenixblack',
                title: t.fenixblack.mainTitle,
                subtitle: t.fenixblack.mainSubtitle,
                badge: 'SAAS PLATFORM',
                description: t.fenixblack.intro,
                features: [
                  t.fenixblack.feature1,
                  t.fenixblack.feature2,
                  t.fenixblack.feature3,
                ],
                tech: ['Python', 'NiceGUI', 'Custom React Bridge', 'Next.js', 'Vercel'],
                link: 'https://www.fenixblack.ai',
                linkText: t.fenixblack.visit,
                color: 'primary',
                type: 'fenixblack',
                microApps: [
                  {
                    nameKey: "holidays",
                    url: "https://holidays.fenixblack.ai",
                    icon: "🎥",
                    color: "primary",
                  },
                  {
                    nameKey: "brand",
                    url: "https://brand.fenixblack.ai",
                    icon: "🎨",
                    color: "secondary",
                  },
                  {
                    nameKey: "backgrounds",
                    url: "https://backgrounds.fenixblack.ai",
                    icon: "🖼️",
                    color: "accent",
                  },
                  {
                    nameKey: "canvas",
                    url: "https://canvas.fenixblack.ai",
                    icon: "✏️",
                    color: "primary",
                  },
                  {
                    nameKey: "restore",
                    url: "https://restore.fenixblack.ai",
                    icon: "📸",
                    color: "secondary",
                  },
                  {
                    nameKey: "growth",
                    url: "https://growth.fenixblack.ai",
                    icon: "📊",
                    color: "accent",
                  },
                ],
              },
              mercadolibre: {
                id: 'mercadolibre',
                title: 'MercadoLibre',
                subtitle: 'ML Systems at 100M+ User Scale',
                badge: 'ML AT SCALE',
                description: 'Architected machine learning systems serving 100+ million users across 18 countries. Built MercadoPlay streaming platform. Referenced expert for 300+ engineers.',
                features: [
                  'Created ML classifiers to analyze video content and place strategic ads',
                  'Developed Python module for e-commerce catalog matching from movie content',
                  'Engineered high-performance dynamic menu system for millions of concurrent users',
                  'Conducted system design reviews and PR reviews across multiple teams',
                  'Served 100M+ users across 18 countries',
                ],
                tech: ['Python', 'TensorFlow', 'Kubernetes', 'GCP', 'ML', 'Java', 'Docker'],
                color: 'primary',
                type: 'standard',
              },
              healthcare: {
                id: 'healthcare',
                title: 'Healthcare EMR',
                subtitle: 'HIPAA-Compliant AI Data Migration',
                badge: 'HEALTHCARE AI',
                description: 'Autonomous migration of 10+ years of medical records between EMR systems. Healthcare-grade reliability with complete audit trails. Zero data loss.',
                features: [
                  'Developed efficient XML data extraction for terabyte-scale government datasets',
                  'Built Neo4j graph database pipeline with daily updates',
                  'Optimized Cypher queries for search performance',
                  'Created ReactJS dashboards with Storybook UI kit',
                  'Built FastAPI backend + PostgreSQL storage',
                  'HIPAA-compliant with complete audit trails',
                ],
                tech: ['AI Agents', 'HIPAA', 'Python', 'PostgreSQL', 'Neo4j', 'FastAPI', 'React'],
                color: 'secondary',
                type: 'standard',
              },
              insurance: {
                id: 'insurance',
                title: 'Insurance Docs',
                subtitle: '150-Page Translation in 3 Minutes',
                badge: 'HIGH-SPEED AI',
                description: 'Built AI system for high-speed document translation with perfect formatting fidelity. Maintains complex layouts, tables, and legal terminology.',
                features: [
                  '150-200 page documents translated in < 3 minutes',
                  'Formatting preservation across complex layouts',
                  'Secure PII detection and handling',
                  'Multi-LLM orchestration with custom load balancing',
                  'GDPR-compliant data processing',
                  'Perfect terminology preservation',
                ],
                tech: ['GPT-4', 'OCR', 'Python', 'PDF Processing', 'NLP', 'FastAPI', 'RAG'],
                color: 'accent',
                type: 'standard',
              },
              ide: {
                id: 'ide',
                title: 'Custom IDE',
                subtitle: 'From Scratch to 100+ Apps',
                badge: 'CUSTOM TOOLING',
                description: 'Built complete IDE from ground up that powered 100+ mobile applications. Led company for 13 years serving major Latin American businesses.',
                features: [
                  'Built custom IDE in Java with mindmap-like low-code environment',
                  'Automatic code generation: Node.js backends + React/Vue frontends',
                  'Real-time task management apps with Node.js sockets',
                  'Medical apps with image recognition',
                  'Data scraping with Algolia integration',
                  'Served media, finance, and government sectors across LATAM',
                ],
                tech: ['Java', 'C++', 'JavaScript', 'Mobile', 'Compiler', 'IDE', 'Node.js'],
                color: 'primary',
                type: 'standard',
              },
            };

            const featured = caseStudies[featuredCase as keyof typeof caseStudies];
            const otherCases = Object.values(caseStudies).filter(c => c.id !== featuredCase);

            return (
              <>
                {/* Featured Case Study Display */}
                <motion.div
                  key={featuredCase}
                  className="mb-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="group relative block">
                      <div className="relative bg-card border-2 border-border rounded-lg p-8 md:p-12 overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                        {/* Subtle gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                        
                        <div className="relative">
                          <div className="flex items-start justify-between flex-wrap gap-6 mb-6">
                            <div className="flex-1">
                              <div className="inline-block px-3 py-1 bg-primary text-primary-foreground border-2 border-border rounded-md text-xs font-bold uppercase tracking-wider mb-4">
                                FEATURED • {featured.badge}
                              </div>
                              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-3 text-foreground">
                                {featured.title}
                              </h3>
                              <p className="text-xl font-bold text-foreground italic mb-4">
                                {featured.subtitle}
                              </p>
                            </div>
                            {'link' in featured && featured.link && (
                              <motion.a
                                href={featured.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-primary text-base font-semibold hover:text-primary-hover transition-colors"
                                whileHover={{ x: 4 }}
                              >
                                <span>{'linkText' in featured ? featured.linkText : 'View Project'}</span>
                                <span>→</span>
                              </motion.a>
                            )}
                          </div>

                          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            {featured.description}
                          </p>

                          <div className="mb-6">
                            <h4 className="text-lg font-display font-bold mb-3">Key Features:</h4>
                            <div className="grid md:grid-cols-2 gap-3">
                              {featured.features.map((feature, i) => (
                                <motion.div
                                  key={i}
                                  className="flex items-start gap-2 text-sm"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.05 }}
                                >
                                  <span className="text-primary text-lg">✓</span>
                                  <span className="text-muted-foreground">{feature}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          <div className="mb-4">
                            <h4 className="text-base font-display font-bold mb-3 text-foreground">Tech Stack:</h4>
                            <div className="flex flex-wrap gap-2">
                              {featured.tech.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-muted border border-border rounded-full text-xs font-medium text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* FenixBlack Micro-Apps Grid (only when fenixblack is featured) */}
                  {featured.type === 'fenixblack' && 'microApps' in featured && featured.microApps && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                      {featured.microApps.map((app: any, i: number) => (
                        <motion.div
                          key={i}
                          className="relative"
                          initial={{ opacity: 0, y: 30, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: i * 0.1,
                            type: "spring",
                            stiffness: 100
                          }}
                        >
                          <motion.a
                            href={app.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block bg-card border-2 border-border hover:border-border rounded-lg p-6 h-full transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[2px] hover:-translate-y-[2px]"
                            transition={{ duration: 0.2 }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                            
                            <div className="relative">
                              <motion.div
                                className="text-5xl mb-4"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                              >
                                {app.icon}
                              </motion.div>
                              
                              <h4 className="text-lg font-serif font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                                {(t.fenixblack as any)[app.nameKey].name}
                              </h4>
                              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                {(t.fenixblack as any)[app.nameKey].description}
                              </p>
                              
                              <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                                <span>{t.fenixblack.launchApp}</span>
                                <span>→</span>
                              </div>
                            </div>
                          </motion.a>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>

                {/* Other Case Studies Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {otherCases.map((caseStudy, i) => (
                    <motion.div
                      key={caseStudy.id}
                      className="group relative bg-card border-2 border-border rounded-lg overflow-hidden transition-all cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[2px] hover:-translate-y-[2px]"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      onClick={() => setFeaturedCase(caseStudy.id)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="p-8">
                        <div className="relative">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-serif font-bold mb-2 text-foreground">
                                {caseStudy.title}
                              </h3>
                              <p className="font-bold mb-4 text-foreground italic">
                                {caseStudy.subtitle}
                              </p>
                            </div>
                            <motion.div
                              className="text-muted-foreground"
                              whileHover={{ scale: 1.2 }}
                            >
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </motion.div>
                          </div>
                          
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {caseStudy.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {caseStudy.tech.slice(0, 5).map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-muted border border-border rounded-full text-xs font-medium text-muted-foreground"
                              >
                                {tech}
                              </span>
                            ))}
                            {caseStudy.tech.length > 5 && (
                              <span className="px-2 py-1 bg-muted border border-border rounded-full text-xs font-medium text-muted-foreground">
                                +{caseStudy.tech.length - 5}
                              </span>
                            )}
                          </div>

                          <div className="text-xs text-primary font-semibold group-hover:text-primary-hover transition-colors">
                            Click to view details →
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
            );
          })()}
        </div>
      </section>

      {/* Services Section */}
      <section className="border-y border-border bg-muted/30 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
            <span className="inline-block px-4 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-md border-2 border-border uppercase tracking-wider mb-4">
              {t.services.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-foreground mb-4">
              {t.services.title}
            </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t.services.subtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* For Startups */}
              <motion.div
                className="relative group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative bg-card border-2 border-border rounded-lg p-8 md:p-10 h-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <div className="inline-block p-3 bg-primary/10 rounded-lg mb-6 border-2 border-border">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">
                    {t.services.startups.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t.services.startups.description}
                  </p>
                  <ul className="space-y-3">
                    {(t.services.startups.services as unknown as readonly string[]).map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-foreground">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* For Enterprises */}
              <motion.div
                className="relative group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative bg-card border-2 border-border rounded-lg p-8 md:p-10 h-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <div className="inline-block p-3 bg-secondary/10 rounded-lg mb-6 border-2 border-border">
                    <svg
                      className="w-8 h-8 text-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">
                    {t.services.enterprises.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t.services.enterprises.description}
                  </p>
                  <ul className="space-y-3">
                    {(t.services.enterprises.services as unknown as readonly string[]).map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <span className="text-secondary mt-1">✓</span>
                        <span className="text-foreground">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Tech Stack Highlight */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-sm text-muted-foreground mb-4 font-semibold">
                CORE TECHNOLOGIES
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Python",
                  "Node.js",
                  "PostgreSQL",
                  "OpenAI",
                  "Vercel AI SDK",
                  "LangChain",
                  "Pinecone",
                  "TensorFlow",
                  "Docker",
                  "Kubernetes",
                  "AWS",
                  "GCP",
                  "Vercel",
                ].map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-2 bg-muted border border-border rounded-full text-sm font-medium text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-md border-2 border-border uppercase tracking-wider mb-4">
              {t.contact.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-foreground mb-4">
              {t.contact.title1}
              <br />
              {t.contact.title2}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              className="bg-card border-2 border-border rounded-lg p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-serif font-bold mb-6 text-foreground">
                {t.contact.formTitle}
              </h3>
              <ContactForm />
            </motion.div>

            {/* Quick Contact & Cal.com */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Direct Contact */}
              <div className="bg-card border-2 border-border rounded-lg p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-2xl font-serif font-bold mb-6 text-foreground">
                  {t.contact.directContact}
                </h3>
                <div className="space-y-4">
                  <motion.a
                    href="https://www.linkedin.com/in/pschaffner/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 bg-muted border border-border rounded-md hover:border-primary transition-all"
                    whileHover={{ x: 2 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        LinkedIn
                      </div>
                      <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        /in/pschaffner
                      </div>
                    </div>
                  </motion.a>
                </div>
              </div>

              {/* Schedule a Call */}
              <div className="bg-card border-2 border-border rounded-lg p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">
                  {t.contact.scheduleCall}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {t.contact.scheduleDescription}
                </p>
                <motion.button
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).OkidokiWidget) {
                      (window as any).OkidokiWidget.scheduleMeeting();
                    }
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-primary-foreground rounded-md font-sans font-bold transition-all w-full md:w-auto justify-center border-2 border-border shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
                  whileTap={{ scale: 0.98 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {t.contact.bookMeeting}
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/20 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-display font-bold text-lg text-foreground">
              Pablo Schaffner
            </div>
            <div className="text-sm text-muted-foreground">
              {t.footer.built} Next.js {t.footer.by}. v0.1.0. {t.footer.version}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

