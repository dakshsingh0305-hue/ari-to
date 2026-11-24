"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function IntroductionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="intro"
      ref={ref}
      className="relative py-32 md:py-48 px-6 md:px-12 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/[0.02] to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-accent-blue font-mono text-sm tracking-[0.3em] uppercase mb-6"
          >
            Who We Are
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            We don&apos;t just build digital solutions.
            <br />
            <span className="text-gradient">We reimagine how business works.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 md:gap-12"
        >
          <div className="glass rounded-2xl p-8 hover:border-accent-blue/20 transition-colors duration-500">
            <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent-blue">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Eliminate Repetition</h3>
            <p className="text-text-secondary leading-relaxed">
              We identify repetitive tasks that drain your team&apos;s time and energy, then replace them with intelligent automated workflows that run 24/7 without error.
            </p>
          </div>

          <div className="glass rounded-2xl p-8 hover:border-accent-violet/20 transition-colors duration-500">
            <div className="w-12 h-12 rounded-xl bg-accent-violet/10 flex items-center justify-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent-violet">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Connect Everything</h3>
            <p className="text-text-secondary leading-relaxed">
              Your tools shouldn&apos;t live in silos. We connect your CRM, messaging platforms, databases, and analytics into a unified system where data flows seamlessly.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 glass-strong rounded-2xl p-8 md:p-12 text-center"
        >
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
            At ARI-TO, we believe the businesses that thrive in the coming decade
            will be those that embrace automation not as a luxury, but as a
            <span className="text-white font-medium"> fundamental operating system</span>.
            We help you build that foundation — custom, scalable, and built for reality.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
