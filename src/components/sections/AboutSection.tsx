"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="relative py-32 md:py-48 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-bg-primary" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Concentric rings */}
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-accent-blue/10"
                  style={{
                    scale: 1 - i * 0.18,
                    opacity: 1 - i * 0.2,
                  }}
                  animate={{
                    rotate: i % 2 === 0 ? 360 : -360,
                    transition: {
                      duration: 20 + i * 5,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                />
              ))}

              {/* Center glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent-blue/30 to-accent-violet/20 blur-xl animate-pulse" />
              </div>

              {/* Orbiting dots */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-accent-blue"
                  style={{
                    top: "50%",
                    left: "50%",
                  }}
                  animate={{
                    x: [
                      Math.cos((angle * Math.PI) / 180) * 120,
                      Math.cos(((angle + 360) * Math.PI) / 180) * 120,
                    ],
                    y: [
                      Math.sin((angle * Math.PI) / 180) * 120,
                      Math.sin(((angle + 360) * Math.PI) / 180) * 120,
                    ],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.5,
                  }}
                />
              ))}

              {/* Center text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-gradient tracking-widest">
                  ARI
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-accent-blue font-mono text-sm tracking-[0.3em] uppercase mb-4">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
              Built for the{" "}
              <span className="text-gradient">Next Generation</span> of Business.
            </h2>
            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>
                ARI-TO was founded on a simple conviction: automation shouldn&apos;t be complex, expensive, or reserved for enterprises with massive budgets. Every business — regardless of size — deserves systems that work as hard as they do.
              </p>
              <p>
                We combine deep technical expertise in integration platforms, AI, and modern web development with a genuine understanding of how businesses operate. The result? Solutions that aren&apos;t just clever — they&apos;re practical, maintainable, and genuinely useful.
              </p>
              <p>
                Our approach is collaborative. We don&apos;t believe in throwing technology at problems without understanding them first. Every engagement begins with listening, diagnosing, and then designing solutions that fit your reality — not someone else&apos;s template.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-6">
              {[
                { label: "Automation First", desc: "Every solution starts with the question: what can be automated?" },
                { label: "Built to Scale", desc: "Systems designed to grow with your business, not hold it back." },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-white font-semibold">{item.label}</p>
                  <p className="text-text-muted text-sm mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
