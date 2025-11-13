"use client";

import { motion } from "framer-motion";
import { GridBackground } from "@/components/GridBackground";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 overflow-hidden relative">
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
              {["about", "work", "contact"].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  className="text-muted-foreground hover:text-foreground transition-colors relative"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <ThemeToggle />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-32 relative">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
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
                  Staff Engineer • AI Architect • System Designer
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
              Pablo Schaffner
            </motion.h1>
          </motion.div>

          {/* Headline */}
          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            I ship in{" "}
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
              3 weeks
            </motion.span>{" "}
            what most teams plan for{" "}
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
              6 months
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
              Building{" "}
              <span className="text-foreground font-semibold">
                production-grade AI systems
              </span>{" "}
              with enterprise reliability and startup velocity.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              Trusted by{" "}
              <span className="text-primary font-semibold">
                MercadoLibre ($14B, 100M users)
              </span>
              . Architected systems at Fortune 500 scale. Founded companies.
              Led teams. Shipped fast.
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
              <span className="relative z-10">Let&apos;s Talk</span>
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
              <span className="relative z-10">View My Work</span>
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
                value: "100M+",
                label: "USERS AT SCALE",
                color: "primary",
                delay: 0,
              },
              {
                value: "20+",
                label: "YEARS MASTERING",
                color: "secondary",
                delay: 0.1,
              },
              {
                value: "3",
                label: "WEEKS TO SHIP",
                color: "accent",
                delay: 0.2,
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className={`space-y-3 border-l-2 border-${stat.color} pl-6 relative group`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 + stat.delay, duration: 0.6 }}
                whileHover={{ x: 4 }}
              >
                <motion.div
                  className={`text-4xl md:text-5xl font-display font-bold text-${stat.color}`}
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
                <motion.div
                  className={`absolute left-0 top-0 bottom-0 w-0.5 bg-${stat.color}`}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.8, delay: stat.delay }}
                  style={{ originY: 0 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="border-y border-border bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground mb-8">
            Trusted by Fortune 500s and startups
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            <div className="text-2xl font-bold">MercadoLibre</div>
            <div className="text-2xl font-bold">Truepill</div>
            <div className="text-2xl font-bold">DocNexus</div>
            <div className="text-2xl font-bold">Healthcare</div>
            <div className="text-2xl font-bold">Insurance</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary text-sm font-mono tracking-wider">
                PHILOSOPHY
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mt-4 mb-6">
                Experience Lets You See
                <br />
                The Whole System Upfront
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
                After two decades—from architecting custom IDEs that powered
                100+ applications, to building ML systems for{" "}
                <span className="text-primary font-semibold">
                  100 million users at MercadoLibre
                </span>
                —I&apos;ve learned one truth:
              </p>

              <p className="text-2xl text-foreground font-semibold leading-relaxed">
                Most developers discover what they need after 6 months of
                building. I see it on day one.
              </p>

              <p className="text-xl text-muted-foreground leading-relaxed">
                That&apos;s not arrogance. That&apos;s pattern recognition from
                shipping hundreds of systems. I know what features
                you&apos;ll need, which abstractions will scale, where
                technical debt hides. I build complete, production-ready
                systems in weeks because I&apos;ve already solved these
                problems dozens of times.
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
                  <span className="text-primary">⚡</span> Okidoki.chat: Week 3
                  Delivered
                </h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Most teams would plan this as a 6-month milestone. I shipped
                  it production-ready in 3 weeks.
                </p>
                <div className="grid md:grid-cols-2 gap-3 text-sm text-foreground">
                  {[
                    "Voice + video meetings",
                    "Auto transcription + AI summaries",
                    "Intelligent lead profiling",
                    "Cron-based RAG automation",
                    "PDF + website scraping",
                    "Bot personality engine",
                    "Landing page generator",
                    "Production deployment",
                  ].map((feature, i) => (
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
                This isn&apos;t speed through shortcuts.
                <br />
                This is mastery through experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <span className="text-primary text-sm font-mono tracking-wider">
            EXPERIENCE
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mt-4 mb-12">
            Where I&apos;ve Built
          </h2>

          <div className="space-y-8">
            <div className="border-l-2 border-primary pl-6 py-2">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-2xl font-display font-bold">
                  MercadoLibre
                </h3>
                <span className="text-sm text-muted-foreground font-mono">
                  2023-2024
                </span>
              </div>
              <p className="text-primary font-semibold mb-2">
                Software Expert & Architect
              </p>
              <p className="text-muted-foreground">
                Built ML systems for 100M+ users. MercadoPlay streaming
                platform across 18 countries. Referenced expert for 300+
                engineers.
              </p>
            </div>

            <div className="border-l-2 border-secondary pl-6 py-2">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-2xl font-display font-bold">
                  AI Consulting
                </h3>
                <span className="text-sm text-muted-foreground font-mono">
                  2024-PRESENT
                </span>
              </div>
              <p className="text-secondary font-semibold mb-2">
                Punto Origen - AI Specialist
              </p>
              <p className="text-muted-foreground">
                Healthcare EMR migration, insurance document translation (150
                pages in 3 min), AI sales prospecting, enterprise AI
                implementations.
              </p>
            </div>

            <div className="border-l-2 border-accent pl-6 py-2">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-2xl font-display font-bold">
                  Creador S.A.
                </h3>
                <span className="text-sm text-muted-foreground font-mono">
                  2007-2020
                </span>
              </div>
              <p className="text-accent font-semibold mb-2">
                Founding Engineer & CEO
              </p>
              <p className="text-muted-foreground">
                Built custom IDE from scratch. Powered 100+ mobile
                applications. 13 years leading company serving major Latin
                American businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section Placeholder */}
      <section id="work" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <span className="text-primary text-sm font-mono tracking-wider">
            COMING SOON
          </span>
          <h2 className="text-4xl font-display font-bold mt-4">
            Detailed case studies, tech stack, and open source projects
          </h2>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 rounded-2xl p-12 md:p-16">
            <span className="text-primary text-sm font-mono tracking-wider">
              LET&apos;S BUILD
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mt-4 mb-6">
              Your 6-month roadmap?
              <br />
              Let&apos;s ship it in 3 weeks.
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Complete systems, not minimal prototypes. Production-ready from
              day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:pablo@creador.cl"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-display font-semibold hover:opacity-90 transition-opacity"
              >
                pablo@creador.cl
              </a>
              <a
                href="https://www.linkedin.com/in/pschaffner/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary/30 text-foreground rounded-lg font-display font-semibold hover:border-primary hover:bg-primary/5 transition-all"
              >
                LinkedIn
              </a>
            </div>
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
              Built with Next.js. Currently on v0.1.0. Always improving.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

