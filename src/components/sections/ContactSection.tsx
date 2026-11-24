"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CONFIG } from "@/config";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    whatsapp: "",
    service: "",
    budget: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    // Simulate form submission - replace with actual backend in production
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormState("success");
      setFormData({
        name: "",
        business: "",
        email: "",
        whatsapp: "",
        service: "",
        budget: "",
        description: "",
      });
    } catch {
      setFormState("error");
    }
  };

  return (
    <section id="contact" ref={ref} className="relative py-32 md:py-48 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-bg-secondary/60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-accent-blue/5 via-accent-violet/5 to-transparent rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent-blue font-mono text-sm tracking-[0.3em] uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Let&apos;s Build Something{" "}
              <span className="text-gradient">Intelligent.</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-10">
              Tell us what you&apos;re trying to automate. We&apos;ll help you explore the possibilities and find the right path forward.
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              {[
                {
                  icon: "mail",
                  label: "Email",
                  value: "hello@ari-to.com",
                  href: "mailto:hello@ari-to.com",
                },
                {
                  icon: "message-circle",
                  label: "WhatsApp",
                  value: "Message us directly",
                  href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""}?text=${encodeURIComponent(CONFIG.contact.whatsappMessage)}`,
                  external: true,
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 group interactive"
                >
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-accent-blue group-hover:border-accent-blue/30 transition-colors">
                    {item.icon === "mail" ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <p className="text-text-muted text-xs font-mono tracking-wider uppercase">
                      {item.label}
                    </p>
                    <p className="text-white group-hover:text-accent-blue transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-strong rounded-2xl p-8 md:p-10 space-y-5">
              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-accent-blue/10 flex items-center justify-center mb-6">
                    <CheckCircle size={32} className="text-accent-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Message Received
                  </h3>
                  <p className="text-text-secondary text-sm">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormState("idle")}
                    className="mt-8 text-sm text-accent-blue hover:text-accent-violet transition-colors interactive"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-text-muted text-xs font-mono tracking-wider uppercase mb-2">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block text-text-muted text-xs font-mono tracking-wider uppercase mb-2">
                        Business Name
                      </label>
                      <input
                        type="text"
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-text-muted text-xs font-mono tracking-wider uppercase mb-2">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block text-text-muted text-xs font-mono tracking-wider uppercase mb-2">
                        WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-text-muted text-xs font-mono tracking-wider uppercase mb-2">
                      Service Required <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="form-input appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-bg-card">
                        Select a service...
                      </option>
                      {CONFIG.services.map((s) => (
                        <option key={s.id} value={s.id} className="bg-bg-card">
                          {s.title}
                        </option>
                      ))}
                      <option value="other" className="bg-bg-card">
                        Other
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-text-muted text-xs font-mono tracking-wider uppercase mb-2">
                      Project Budget (Optional)
                    </label>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="e.g., $5,000 - $10,000"
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label className="block text-text-muted text-xs font-mono tracking-wider uppercase mb-2">
                      Project Description <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="description"
                      required
                      rows={4}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      className="form-input resize-none"
                    />
                  </div>

                  {formState === "error" && (
                    <div className="flex items-center gap-2 text-red-400 text-sm">
                      <AlertCircle size={16} />
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="magnetic-btn primary w-full interactive disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === "loading" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Start a Project
                      </>
                    )}
                  </button>

                  <p className="text-text-muted text-xs text-center">
                    By submitting this form, you agree to our privacy practices.
                    We&apos;ll only use your information to respond to your inquiry.
                  </p>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
