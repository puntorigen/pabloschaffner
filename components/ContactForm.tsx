"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export const ContactForm = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Send via Okidoki.chat widget
      if (typeof window !== 'undefined' && (window as any).OkidokiWidget) {
        (window as any).OkidokiWidget.sendEmail({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        });
      }
      
      setStatus("success");
      setShowSuccess(true);
      
      // Reset after animation - longer delay to enjoy the effect
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setShowSuccess(false);
        setStatus("idle");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {showSuccess ? (
          // Success Animation
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative"
          >
            {/* Particle burst effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: `hsl(var(--${['primary', 'secondary', 'accent'][i % 3]}))`,
                    left: '50%',
                    top: '50%',
                  }}
                  initial={{ 
                    x: 0, 
                    y: 0, 
                    scale: 0,
                    opacity: 1 
                  }}
                  animate={{
                    x: (Math.random() - 0.5) * 400,
                    y: (Math.random() - 0.5) * 400,
                    scale: [0, 1, 0],
                    opacity: [1, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    delay: i * 0.02,
                  }}
                />
              ))}
            </div>

            {/* Success card */}
            <motion.div
              className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/50 rounded-2xl p-12 text-center relative overflow-hidden"
              initial={{ rotateY: 90 }}
              animate={{ rotateY: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              {/* Glowing background pulse */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Check mark animation */}
              <motion.div
                className="relative mx-auto mb-6 w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.2,
                }}
              >
                <motion.svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </motion.svg>
              </motion.div>

              {/* Success text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-3xl font-display font-bold text-foreground mb-3">
                  {t.contact.success}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {t.contact.successSubtitle}
                </p>
              </motion.div>

              {/* Sparkle effects */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 2) * 40}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.6 + i * 0.1,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        ) : (
          // Form
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-foreground mb-2"
        >
          {t.contact.name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground transition-all"
          placeholder={t.contact.name}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground mb-2"
        >
          {t.contact.email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground transition-all"
          placeholder={t.contact.email}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-2"
        >
          {t.contact.message}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground transition-all resize-none"
          placeholder={t.contact.message}
        />
      </div>

      <motion.button
        type="submit"
        disabled={status === "sending"}
        className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-display font-semibold disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
        whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
        whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
      >
        {status === "idle" && t.contact.send}
        {status === "sending" && t.contact.sending}
        {status === "success" && `✓ ${t.contact.success}`}
        {status === "error" && t.contact.error}
      </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

