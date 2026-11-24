"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CONFIG } from "@/config";

export default function TechnologyStackSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-32 md:py-40 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-bg-primary" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent-blue font-mono text-sm tracking-[0.3em] uppercase mb-4">
            Technology Ecosystem
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Tools That{" "}
            <span className="text-gradient">Power Everything</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            We work with industry-leading platforms and modern frameworks to build reliable, scalable solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
        >
          {CONFIG.technologies.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.03, duration: 0.4 }}
              className="tech-badge cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Divider text marquee */}
        <div className="mt-20 overflow-hidden">
          <div className="marquee-track whitespace-nowrap">
            {[...Array(2)].map((_, row) => (
              <span key={row} className="inline-flex items-center gap-8 text-text-muted/30 text-sm font-mono tracking-widest uppercase">
                {CONFIG.technologies.map((tech) => (
                  <span key={`${tech}-${row}`}>{tech}</span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
