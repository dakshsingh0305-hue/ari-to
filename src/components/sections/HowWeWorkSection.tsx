"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CONFIG } from "@/config";
import { Check } from "lucide-react";

export default function HowWeWorkSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" ref={ref} className="relative py-32 md:py-48 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-bg-primary" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-violet/5 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-accent-blue font-mono text-sm tracking-[0.3em] uppercase mb-4">
            Our Process
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            How We{" "}
            <span className="text-gradient">Build</span> Your Solution
          </h2>
        </motion.div>

        {/* Workflow steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONFIG.workflow.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="workflow-step"
            >
              {/* Step number */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-5xl font-bold text-white/5">{step.step}</span>
                <div className="w-8 h-8 rounded-full bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center">
                  <Check size={14} className="text-accent-blue" />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Connecting line (except last) */}
              {i < CONFIG.workflow.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-gradient-to-r from-accent-blue/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Decorative connection line */}
        <div className="hidden lg:block absolute top-[55%] left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-transparent via-accent-blue/20 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
