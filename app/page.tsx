"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GridBackground } from "@/components/GridBackground";
import { ContactForm } from "@/components/ContactForm";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { FeaturedWorkSection } from "@/components/FeaturedWorkSection";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

export default function Home() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <main className="min-h-screen bg-background overflow-hidden relative px-[3px] md:px-[11px]">
      <GridBackground />
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-[3px] right-[3px] md:left-[11px] md:right-[11px] z-50 bg-card/95 backdrop-blur-sm border-b-2 border-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-serif text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              aria-label="Scroll to top"
            >
              Pablo Schaffner
            </motion.button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6 text-sm">
              {(["about", "approach", "work", "blog", "contact"] as const).map((item, i) => (
                item === "blog" ? (
                  <motion.a
                    key={item}
                    href="/blog"
                    className="text-foreground hover:text-primary transition-colors relative font-medium uppercase tracking-wide cursor-pointer"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i, duration: 0.3 }}
                  >
                    {t.nav[item]}
                  </motion.a>
                ) : (
                  <motion.button
                    key={item}
                    onClick={() => {
                      const element = document.getElementById(item);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="text-foreground hover:text-primary transition-colors relative font-medium uppercase tracking-wide cursor-pointer"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i, duration: 0.3 }}
                  >
                    {t.nav[item]}
                  </motion.button>
                )
              ))}
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-4">
              <LanguageSwitcher />
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-foreground hover:text-primary transition-colors"
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {mobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: mobileMenuOpen ? "auto" : 0,
            opacity: mobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden border-t-2 border-border"
        >
          <div className="container mx-auto px-4 py-6 space-y-4">
            {(["about", "approach", "work", "blog", "contact"] as const).map((item, i) => (
              item === "blog" ? (
                <motion.a
                  key={item}
                  href="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium uppercase tracking-wide text-lg py-2 cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : -20 }}
                  transition={{ delay: mobileMenuOpen ? 0.1 * i : 0, duration: 0.3 }}
                >
                  {t.nav[item]}
                </motion.a>
              ) : (
                <motion.button
                  key={item}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setTimeout(() => {
                      const element = document.getElementById(item);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }, 350);
                  }}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium uppercase tracking-wide text-lg py-2 cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : -20 }}
                  transition={{ delay: mobileMenuOpen ? 0.1 * i : 0, duration: 0.3 }}
                >
                  {t.nav[item]}
                </motion.button>
              )
            ))}
          </div>
        </motion.div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background Image with padding */}
        <div className="absolute left-0 right-0 bottom-0 top-[67px] md:top-[83px] z-0 overflow-hidden">
          <Image
            src="/manquehue.jpg"
            alt="Santiago, Chile - my home"
            fill
            priority
            className="object-cover object-center opacity-50"
            quality={95}
          />
          {/* Subtle gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/75" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
          {/* Name & Title */}
          <motion.div
            className="mb-10 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-5 py-2.5 bg-blue text-blue-foreground text-base font-black rounded-md border-2 border-border uppercase tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {t.hero.title}
            </motion.span>
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-black tracking-tight leading-[0.95] text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {t.hero.name}
            </motion.h1>
          </motion.div>

          {/* Headline */}
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-serif font-extrabold tracking-tight leading-tight text-foreground max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {t.hero.headline}
          </motion.h2>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-5 pt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <motion.a
              href="#contact"
              className="px-10 py-5 bg-primary hover:bg-primary-hover text-primary-foreground rounded-md font-sans font-black text-lg inline-flex items-center gap-3 justify-center transition-all border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
              whileTap={{ scale: 0.98 }}
            >
              <span>{t.hero.ctaPrimary}</span>
              <span>→</span>
            </motion.a>
            <motion.a
              href="#work"
              className="px-10 py-5 border-2 border-border bg-card text-foreground rounded-md font-sans font-black text-lg hover:bg-secondary transition-all justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
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
      <section className="border-y border-border bg-slate-50/40 dark:bg-slate-900/20 py-12">
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

      {/* Key Pillars Section */}
      <section id="about" className="container mx-auto px-4 py-20 md:py-32 relative bg-purple-50/30 dark:bg-purple-950/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-md border-2 border-border uppercase tracking-wider mb-4">
              {t.pillars.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-foreground">
              {t.pillars.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { key: 'aiSystems', icon: '🤖' },
              { key: 'fullStack', icon: '⚡' },
              { key: 'scale', icon: '📈' },
              { key: 'leadership', icon: '👥' },
            ].map((pillar, i) => {
              const pillarData = (t.pillars as any)[pillar.key];
              return (
                <motion.div
                  key={pillar.key}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="relative bg-card border-2 border-border rounded-lg p-8 h-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                    <div className="text-4xl mb-4">{pillar.icon}</div>
                    <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">
                      {pillarData.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {pillarData.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Track Record Section */}
      <section className="border-y border-border bg-cyan-50/50 dark:bg-cyan-950/20 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-5 py-2.5 bg-primary text-primary-foreground text-base font-black rounded-md border-2 border-border uppercase tracking-wider mb-6">
                {t.trackRecord.badge}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black tracking-tight text-foreground mb-6">
                {t.trackRecord.title}
              </h2>
              <p className="text-xl md:text-2xl font-bold text-foreground leading-tight mb-10">
                {t.trackRecord.summary}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-5">
              {(t.trackRecord.highlights as unknown as readonly string[]).map((highlight, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <span className="text-primary mt-1 flex-shrink-0 text-xl font-bold">✓</span>
                  <span className="text-foreground font-medium text-lg">{highlight}</span>
                </motion.div>
              ))}
            </div>
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
              const isEven = i % 2 === 1;
              return (
                <motion.div
                  key={exp.key}
                  className={`border-l-4 ${isEven ? 'border-blue hover:border-blue-hover' : 'border-primary hover:border-primary-hover'} pl-6 py-2 transition-colors`}
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

      {/* Projects / Case Studies Section */}
      <section id="work" className="container mx-auto px-4 py-20 md:py-32">
        <FeaturedWorkSection 
          badge={t.projects.badge}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />
      </section>

      {/* Open Source Section */}
      <section id="opensource" className="bg-muted/30 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="inline-block px-4 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-md border-2 border-border uppercase tracking-wider mb-4">
              {t.opensource.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-foreground mb-4">
              {t.opensource.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mb-6">
              {t.opensource.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={t.opensource.pypiLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-card border-2 border-border rounded-lg text-sm font-semibold hover:border-blue hover:text-blue transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              >
                <span>🐍</span>
                <span>{t.opensource.viewAllPyPI}</span>
                <span>→</span>
              </a>
              <a
                href={t.opensource.npmLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-card border-2 border-border rounded-lg text-sm font-semibold hover:border-blue hover:text-blue transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              >
                <span>📦</span>
                <span>{t.opensource.viewAllNPM}</span>
                <span>→</span>
              </a>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              t.opensource.brainProxy,
              t.opensource.asyncPromptic,
              t.opensource.easyModel,
              t.opensource.niceguiReact,
              t.opensource.gptResearch,
              t.opensource.aiCode,
              t.opensource.prRules,
            ].map((project, i) => (
              <motion.div
                key={i}
                className="group relative bg-card border-2 border-border rounded-lg p-6 hover:border-primary transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[2px] hover:-translate-y-[2px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                
                <div className="relative h-full flex flex-col">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <h3 className="text-xl font-serif font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  </a>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-muted border border-border rounded-full text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-muted border border-border rounded-full text-xs font-medium text-muted-foreground">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  {('article' in project && project.article) ? (
                    <a
                      href={project.article as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
                    >
                      <span>📄</span>
                      <span>{t.opensource.readArticle}</span>
                      <span>→</span>
                    </a>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Hero Image + Story */}
      <section id="approach" className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          {/* Vic20 Hero Card - Polaroid Style */}
          <motion.div
            className="relative w-full max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card border-2 border-border rounded-lg p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              {/* Image container */}
              <div 
                className="relative w-full aspect-[4/3] rounded-md overflow-hidden bg-muted"
              >
                <div 
                  className="absolute inset-0 p-8"
                  style={{
                    backgroundImage: 'url(/vic20.jpg)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
              </div>
              {/* Polaroid caption */}
              <p className="text-center text-sm text-muted-foreground mt-3 font-medium italic">
                {t.mission.imageCaption}
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <span className="inline-block px-4 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-md border-2 border-border uppercase tracking-wider mb-4">
              {t.mission.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-foreground mb-8">
              {t.mission.title}
            </h2>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-4">
              {t.mission.origin}
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t.mission.problem}
            </p>
            <p className="text-xl text-foreground font-semibold leading-relaxed">
              {t.mission.whoIHelp}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.mission.approach}
            </p>
            <p className="text-xl text-primary font-bold leading-relaxed">
              {t.mission.focus}
            </p>
          </motion.div>
        </div>
      </section>

      {/* How We Can Work Together Section */}
      <section className="border-y border-border bg-pink-50/40 dark:bg-pink-950/15 py-20 md:py-32">
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
              {t.workTogether.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-foreground mb-4">
              {t.workTogether.title}
            </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t.workTogether.subtitle}
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
                    {t.workTogether.startups.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t.workTogether.startups.description}
                  </p>
                  <ul className="space-y-3">
                    {(t.workTogether.startups.services as unknown as readonly string[]).map((item, i) => (
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
                    {t.workTogether.enterprises.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {t.workTogether.enterprises.description}
                  </p>
                  <ul className="space-y-3">
                    {(t.workTogether.enterprises.services as unknown as readonly string[]).map((item, i) => (
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
                    className="group flex items-center gap-4 p-4 bg-muted border border-border rounded-md hover:border-linkedin transition-all"
                    whileHover={{ x: 2 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-linkedin/10 rounded-lg flex items-center justify-center group-hover:bg-linkedin/20 transition-colors">
                      <svg
                        className="w-6 h-6 text-linkedin"
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
                      <div className="font-semibold text-foreground group-hover:text-linkedin transition-colors">
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
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue hover:bg-blue-hover text-blue-foreground rounded-md font-sans font-bold transition-all w-full md:w-auto justify-center border-2 border-border shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
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
      <Footer />
    </main>
  );
}

