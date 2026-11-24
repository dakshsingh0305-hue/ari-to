"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CONFIG } from "@/config";
import { ArrowRight, MessageCircle, Phone, Cpu, Settings, Globe, Lightbulb } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "message-circle": <MessageCircle size={28} />,
  phone: <Phone size={28} />,
  cpu: <Cpu size={28} />,
  settings: <Settings size={28} />,
  globe: <Globe size={28} />,
  lightbulb: <Lightbulb size={28} />,
};

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="relative py-32 md:py-48 px-6 md:px-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-bg-secondary/50" />
      <div className="absolute top-1/2 left-0 w-[600px] h.[600px] bg-accent-blue/5 rounded-full blur-[200px] -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-accent-blue font-mono text-sm tracking-[0.3em] uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Intelligence Built Into{" "}
            <span className="text-gradient">Every Workflow</span>
          </h2>
          <p className="text-text-secondary text-lg mt-6 max-w-2xl mx-auto">
            From WhatsApp to voice, from CRM to custom applications — we automate
            the systems that power your business.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONFIG.services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="service-card interactive group"
            >
              <div className="service-card-glow" />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 text-white border border-white/5`}>
                {iconMap[service.icon]}
              </div>

              {/* Title & desc */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent-blue transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 4).map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-2 text-sm text-text-muted">
                    <span className="w-1 h-1 rounded-full bg-accent-blue/60 mt-1.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn more */}
              <button className="inline-flex items-center gap-2 text-sm text-accent-blue/80 hover:text-accent-blue transition-colors group/btn">
                Learn more
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
