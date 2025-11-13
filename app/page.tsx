"use client";

import { motion } from "framer-motion";
import { GridBackground } from "@/components/GridBackground";
import { ContactForm } from "@/components/ContactForm";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen bg-background overflow-hidden relative">
      <GridBackground />
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="font-display text-xl font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Pablo Schaffner
            </motion.div>
            <div className="flex items-center gap-6 text-sm">
              {(["about", "work", "contact"] as const).map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  className="text-muted-foreground hover:text-foreground transition-colors relative"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {t.nav[item]}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Animated gradient orbs - Full width background */}
        <div className="absolute inset-0 w-full pointer-events-none">
          <motion.div
            className="absolute -top-40 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 to-secondary/20 dark:from-primary/20 dark:to-secondary/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-secondary/30 to-accent/20 dark:from-secondary/20 dark:to-accent/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-accent/25 to-primary/15 dark:from-accent/15 dark:to-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
          {/* Name & Title */}
          <motion.div
            className="mb-8 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block">
              <motion.span
                className="text-primary text-sm font-mono tracking-wider uppercase relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="relative z-10">
                  {t.hero.title}
                </span>
                <motion.span
                  className="absolute inset-0 bg-primary/10 -z-10 rounded"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  style={{ originX: 0 }}
                />
              </motion.span>
            </div>
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {t.hero.name}
            </motion.h1>
          </motion.div>

          {/* Headline */}
          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {t.hero.headline1}{" "}
            <motion.span
              className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              {t.hero.headline2}
            </motion.span>{" "}
            {t.hero.headline3}{" "}
            <motion.span
              className="bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
                delay: 0.5,
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              {t.hero.headline4}
            </motion.span>
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
              className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-lg font-display font-semibold overflow-hidden inline-flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <span className="relative z-10">{t.hero.ctaPrimary}</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                →
              </motion.span>
            </motion.a>
            <motion.a
              href="#work"
              className="px-8 py-4 border-2 border-primary/30 text-foreground rounded-lg font-display font-semibold hover:border-primary hover:bg-primary/5 transition-all relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">{t.hero.ctaSecondary}</span>
              <motion.span
                className="absolute inset-0 bg-primary/5 -z-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
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
                color: "primary",
                delay: 0,
              },
              {
                value: t.hero.stat2Value,
                label: t.hero.stat2Label,
                color: "secondary",
                delay: 0.1,
              },
              {
                value: t.hero.stat3Value,
                label: t.hero.stat3Label,
                color: "accent",
                delay: 0.2,
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className={`space-y-3 pl-6 relative group`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 + stat.delay, duration: 0.6 }}
                whileHover={{ x: 4 }}
                style={{
                  borderLeft: `2px solid hsl(var(--${stat.color}))`,
                }}
              >
                <motion.div
                  className={`text-4xl md:text-5xl font-display font-bold`}
                  style={{ color: `hsl(var(--${stat.color}))` }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 1.3 + stat.delay,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm md:text-base text-muted-foreground font-mono">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="border-y border-border bg-gradient-to-r from-muted/30 via-muted/50 to-muted/30 py-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground mb-8 font-medium">
            {t.trustedBy.title}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80 dark:opacity-70">
            <div className="text-2xl font-bold">MercadoLibre</div>
            <div className="text-2xl font-bold">Truepill</div>
            <div className="text-2xl font-bold">DocNexus</div>
            <div className="text-2xl font-bold">Healthcare</div>
            <div className="text-2xl font-bold">Insurance</div>
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
              <span className="text-primary text-sm font-mono tracking-wider">
                {t.about.badge}
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mt-4 mb-6">
                {t.about.title}
              </h2>
            </motion.div>

            <motion.div
              className="prose prose-lg prose-invert max-w-none space-y-6"
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
                className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border border-primary/20 rounded-xl p-8 my-8 relative overflow-hidden"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  style={{ originX: 0 }}
                />
                <h3 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
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

              <p className="text-xl font-display font-bold text-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text">
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
          <span className="text-primary text-sm font-mono tracking-wider">
            {t.experience.badge}
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mt-4 mb-12">
            {t.experience.title}
          </h2>

          <div className="space-y-8">
            <div className="border-l-2 border-primary pl-6 py-2">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-2xl font-display font-bold">
                  {t.experience.mercadolibre.company}
                </h3>
                <span className="text-sm text-muted-foreground font-mono">
                  {t.experience.mercadolibre.period}
                </span>
              </div>
              <p className="text-primary font-semibold mb-2">
                {t.experience.mercadolibre.role}
              </p>
              <p className="text-muted-foreground">
                {t.experience.mercadolibre.description}
              </p>
            </div>

            <div className="border-l-2 border-secondary pl-6 py-2">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-2xl font-display font-bold">
                  {t.experience.consulting.company}
                </h3>
                <span className="text-sm text-muted-foreground font-mono">
                  {t.experience.consulting.period}
                </span>
              </div>
              <p className="text-secondary font-semibold mb-2">
                {t.experience.consulting.role}
              </p>
              <p className="text-muted-foreground">
                {t.experience.consulting.description}
              </p>
            </div>

            <div className="border-l-2 border-accent pl-6 py-2">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-2xl font-display font-bold">
                  {t.experience.creador.company}
                </h3>
                <span className="text-sm text-muted-foreground font-mono">
                  {t.experience.creador.period}
                </span>
              </div>
              <p className="text-accent font-semibold mb-2">
                {t.experience.creador.role}
              </p>
              <p className="text-muted-foreground">
                {t.experience.creador.description}
              </p>
            </div>
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
            <span className="text-primary text-sm font-mono tracking-wider">
              {t.caseStudies.badge}
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mt-4 mb-6">
              {t.caseStudies.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mb-16">
              {t.caseStudies.subtitle}
            </p>
          </motion.div>

          {/* Featured Case Study - Okidoki.chat */}
          <motion.div
            className="mb-20 relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Light mode: subtle shadow, Dark mode: glowing blur */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 dark:from-primary/20 dark:via-secondary/20 dark:to-accent/20 rounded-2xl blur-2xl dark:blur-2xl opacity-60 dark:opacity-100" />
            <div className="relative bg-card border border-primary/20 dark:border-primary/20 rounded-xl p-8 md:p-12 overflow-hidden shadow-lg dark:shadow-none">
              {/* Subtle gradient overlay instead of split pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 dark:to-primary/3 pointer-events-none" />

              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
                  <div>
                    <div className="inline-block px-3 py-1 bg-primary/10 dark:bg-primary/10 border border-primary/40 dark:border-primary/30 rounded-full text-xs font-mono text-primary mb-3">
                      {t.caseStudies.okidoki.featuredBadge}
                    </div>
                    <h3 className="text-3xl md:text-5xl font-display font-bold mb-2">
                      {t.caseStudies.okidoki.title}
                    </h3>
                    <p className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {t.caseStudies.okidoki.subtitle}
                    </p>
                  </div>
                  <motion.a
                    href="https://okidoki.chat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-primary/10 dark:bg-primary/10 border-2 border-primary/50 dark:border-primary/30 text-primary rounded-lg font-mono text-sm font-semibold hover:bg-primary/20 dark:hover:bg-primary/20 transition-all inline-flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t.caseStudies.okidoki.viewLive}
                    <span>→</span>
                  </motion.a>
                </div>

                {/* The Challenge */}
                <div className="mb-8">
                  <h4 className="text-lg font-display font-bold text-foreground mb-3">
                    {t.caseStudies.okidoki.challengeTitle}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {t.caseStudies.okidoki.challengeText}
                  </p>
                </div>

                {/* The Timeline */}
                <div className="mb-8">
                  <h4 className="text-lg font-display font-bold text-foreground mb-4">
                    {t.caseStudies.okidoki.timelineTitle}
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <motion.div
                      className="p-4 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-muted/50 dark:to-muted/50 border border-primary/30 dark:border-border rounded-lg"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="text-3xl font-display font-bold text-primary mb-2">
                        {t.caseStudies.okidoki.day3}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t.caseStudies.okidoki.day3Text}
                      </p>
                    </motion.div>
                    <motion.div
                      className="p-4 bg-gradient-to-br from-secondary/5 to-secondary/10 dark:from-muted/50 dark:to-muted/50 border border-secondary/30 dark:border-border rounded-lg"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="text-3xl font-display font-bold text-secondary mb-2">
                        {t.caseStudies.okidoki.week2}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t.caseStudies.okidoki.week2Text}
                      </p>
                    </motion.div>
                    <motion.div
                      className="p-4 bg-gradient-to-br from-accent/5 to-accent/10 dark:from-muted/50 dark:to-muted/50 border border-accent/30 dark:border-border rounded-lg"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="text-3xl font-display font-bold text-accent mb-2">
                        {t.caseStudies.okidoki.week3}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {t.caseStudies.okidoki.week3Text}
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Tech Delivered */}
                <div className="mb-8">
                  <h4 className="text-lg font-display font-bold text-foreground mb-4">
                    {t.caseStudies.okidoki.deliveredTitle}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {t.caseStudies.okidoki.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <span className="text-primary text-lg">✓</span>
                        <span className="text-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-lg font-display font-bold text-foreground mb-4">
                    {t.caseStudies.okidoki.techStackTitle}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {t.caseStudies.okidoki.techStack.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 bg-muted/80 dark:bg-muted border border-border rounded-full text-xs font-mono text-foreground/70 dark:text-muted-foreground"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.1, borderColor: "hsl(var(--primary))" }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* MercadoLibre */}
            <motion.div
              className="group relative bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <h3 className="text-2xl font-display font-bold mb-2">
                  MercadoLibre
                </h3>
                <p className="text-primary font-semibold mb-4">
                  ML Systems at 100M+ User Scale
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Architected machine learning systems serving 100+ million users
                  across 18 countries. Built MercadoPlay streaming platform.
                  Referenced expert for 300+ engineers.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "TensorFlow", "Kubernetes", "GCP", "ML"].map(
                    (tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-muted rounded text-xs font-mono text-muted-foreground"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.div>

            {/* Healthcare EMR */}
            <motion.div
              className="group relative bg-card border border-border rounded-xl p-8 hover:border-secondary/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <h3 className="text-2xl font-display font-bold mb-2">
                  Healthcare EMR
                </h3>
                <p className="text-secondary font-semibold mb-4">
                  HIPAA-Compliant AI Data Migration
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Autonomous migration of 10+ years of medical records between EMR
                  systems. Healthcare-grade reliability with complete audit trails.
                  Zero data loss.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["AI Agents", "HIPAA", "Python", "PostgreSQL", "Audit"].map(
                    (tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-muted rounded text-xs font-mono text-muted-foreground"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.div>

            {/* Insurance Translation */}
            <motion.div
              className="group relative bg-card border border-border rounded-xl p-8 hover:border-accent/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <h3 className="text-2xl font-display font-bold mb-2">
                  Insurance Docs
                </h3>
                <p className="text-accent font-semibold mb-4">
                  150-Page Translation in 3 Minutes
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Built AI system for high-speed document translation with perfect
                  formatting fidelity. Maintains complex layouts, tables, and legal
                  terminology.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["GPT-4", "OCR", "Python", "PDF Processing", "NLP"].map(
                    (tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-muted rounded text-xs font-mono text-muted-foreground"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.div>

            {/* Creador IDE */}
            <motion.div
              className="group relative bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <h3 className="text-2xl font-display font-bold mb-2">
                  Custom IDE
                </h3>
                <p className="text-primary font-semibold mb-4">
                  From Scratch to 100+ Apps
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Built complete IDE from ground up that powered 100+ mobile
                  applications. Led company for 13 years serving major Latin
                  American businesses.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["C++", "JavaScript", "Mobile", "Compiler", "IDE"].map(
                    (tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-muted rounded text-xs font-mono text-muted-foreground"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FenixBlack Portfolio Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Dramatic background with animated orbs */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/5" />
          <motion.div
            className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-transparent dark:from-primary/10 dark:to-transparent rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-secondary/20 to-transparent dark:from-secondary/10 dark:to-transparent rounded-full blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, 50, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="max-w-4xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  {t.fenixblack.title}
                </span>
              </motion.h2>
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <p className="text-xl text-foreground leading-relaxed">
                  {t.fenixblack.intro}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.fenixblack.description1} {t.fenixblack.description2}{" "}
                  <span className="text-accent font-semibold">{t.fenixblack.pythonNicegui}</span>
                  {t.fenixblack.description3}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.fenixblack.description4}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.fenixblack.description5}
                </p>
              </motion.div>
            </motion.div>

            {/* The Platform */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Glowing border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
                
                <motion.a
                  href="https://www.fenixblack.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative bg-card border-2 border-primary/30 dark:border-primary/20 rounded-2xl p-8 md:p-12 overflow-hidden">
                    {/* Animated gradient background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 dark:from-primary/5 dark:via-secondary/3 dark:to-accent/5"
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    
                    {/* Sparkle effect */}
                    <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                    
                    <div className="relative flex items-start justify-between flex-wrap gap-6">
                      <div className="flex-1">
                        <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs font-mono text-primary mb-4">
                          SAAS PLATFORM
                        </div>
                        <h4 className="text-3xl md:text-4xl font-display font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:via-secondary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all">
                          {t.fenixblack.mainTitle}
                        </h4>
                        <p className="text-lg text-muted-foreground mb-4">
                          {t.fenixblack.mainSubtitle}
                        </p>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-primary">✓</span>
                            <span className="text-muted-foreground">{t.fenixblack.feature1}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-secondary">✓</span>
                            <span className="text-muted-foreground">{t.fenixblack.feature2}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-accent">✓</span>
                            <span className="text-muted-foreground">{t.fenixblack.feature3}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 text-xs font-mono">
                          <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary">Python</span>
                          <span className="px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-secondary">NiceGUI</span>
                          <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent">Custom React Bridge</span>
                        </div>
                      </div>
                      <motion.div
                        className="flex items-center gap-2 text-primary text-lg font-semibold"
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <span>{t.fenixblack.visit}</span>
                        <span className="text-2xl">→</span>
                      </motion.div>
                    </div>
                  </div>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Micro-Apps Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
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
              ].map((app, i) => (
                <motion.div
                  key={i}
                  className="relative"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  {/* Card glow effect */}
                  <motion.div
                    className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 dark:from-primary/20 dark:to-secondary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.05 }}
                  />
                  
                  <motion.a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block bg-card border-2 border-border hover:border-primary/50 dark:hover:border-primary/30 rounded-xl p-6 h-full transition-all"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 dark:from-primary/3 dark:via-transparent dark:to-secondary/3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative">
                      {/* Icon with animation */}
                      <motion.div
                        className="text-5xl mb-4"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {app.icon}
                      </motion.div>
                      
                              <h4 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                                {t.fenixblack[app.nameKey as keyof typeof t.fenixblack].name}
                              </h4>
                              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                                {t.fenixblack[app.nameKey as keyof typeof t.fenixblack].description}
                              </p>
                      
                              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                                <span>{t.fenixblack.launchApp}</span>
                        <motion.span
                          animate={{ x: [0, 3, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          →
                        </motion.span>
                      </div>
                    </div>
                  </motion.a>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="border-y border-border bg-gradient-to-b from-muted/20 via-muted/40 to-muted/20 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary text-sm font-mono tracking-wider">
                {t.services.badge}
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mt-4 mb-6">
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
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-card border border-border rounded-xl p-8 md:p-10 h-full">
                  <div className="inline-block p-3 bg-primary/10 rounded-lg mb-6">
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
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                    {t.services.startups.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {t.services.startups.service1}. {t.services.startups.service2}.
                  </p>
                  <ul className="space-y-3">
                    {[
                      t.services.startups.service1,
                      t.services.startups.service2,
                      t.services.startups.service3,
                      t.services.startups.service4,
                    ].map((item, i) => (
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
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-accent rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-card border border-border rounded-xl p-8 md:p-10 h-full">
                  <div className="inline-block p-3 bg-secondary/10 rounded-lg mb-6">
                    <svg
                      className="w-8 h-8 text-secondary"
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
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                    For Enterprises
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    Scale AI systems to millions of users. Architect solutions that
                    handle Fortune 500 complexity with startup agility.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "AI/ML system architecture at scale",
                      "Production ML pipelines (100M+ users)",
                      "Technical due diligence & audits",
                      "Team leadership & training",
                      "HIPAA, SOC2, enterprise compliance",
                    ].map((item, i) => (
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
              <p className="text-sm text-muted-foreground mb-4 font-mono">
                CORE TECHNOLOGIES
              </p>
              <div className="flex flex-wrap justify-center gap-3">
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
                  <motion.span
                    key={i}
                    className="px-4 py-2 bg-muted border border-border rounded-lg text-sm font-mono hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.02 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
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
            <span className="text-primary text-sm font-mono tracking-wider">
              {t.contact.badge}
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mt-4 mb-6">
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
              className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 rounded-2xl p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-display font-bold mb-6">
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
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-display font-bold mb-6">
                  {t.contact.directContact}
                </h3>
                <div className="space-y-4">
                  <motion.a
                    href="https://www.linkedin.com/in/pschaffner/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 bg-muted/50 border border-border rounded-lg hover:border-primary/50 transition-all"
                    whileHover={{ x: 4 }}
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
              <div className="bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20 rounded-2xl p-8">
                <h3 className="text-2xl font-display font-bold mb-4">
                  {t.contact.scheduleCall}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {t.contact.scheduleDescription}
                </p>
                <motion.a
                  href="https://cal.com/pabloschaffner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-display font-semibold hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-display font-bold text-lg">
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

