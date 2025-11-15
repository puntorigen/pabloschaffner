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
              className="bg-card border-2 border-border rounded-lg p-12 text-center relative overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, type: "spring" }}
            >
              {/* Subtle background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />

              {/* Check mark animation */}
              <motion.div
                className="relative mx-auto mb-6 w-20 h-20 rounded-full bg-primary flex items-center justify-center border-2 border-border"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.1,
                }}
              >
                <motion.svg
                  className="w-10 h-10 text-primary-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
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
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                  {t.contact.success}
                </h3>
                <p className="text-muted-foreground">
                  {t.contact.successSubtitle}
                </p>
              </motion.div>
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
          className="w-full px-4 py-3 bg-card border-2 border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-foreground placeholder-muted-foreground transition-all font-sans"
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
          className="w-full px-4 py-3 bg-card border-2 border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-foreground placeholder-muted-foreground transition-all font-sans"
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
          className="w-full px-4 py-3 bg-card border-2 border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-foreground placeholder-muted-foreground transition-all resize-none font-sans"
          placeholder={t.contact.message}
        />
      </div>

      <motion.button
        type="submit"
        disabled={status === "sending"}
        className="w-full px-8 py-4 bg-primary hover:bg-primary-hover text-primary-foreground rounded-md font-sans font-bold disabled:opacity-50 disabled:cursor-not-allowed transition-all border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] disabled:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] disabled:translate-x-[2px] disabled:translate-y-[2px]"
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

