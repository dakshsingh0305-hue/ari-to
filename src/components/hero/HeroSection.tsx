"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import the 3D canvas to avoid SSR issues
const HeroCanvas = dynamic(() => import("@/components/hero/HeroCanvas"), {
  ssr: false,
  loading: () => <HeroFallback />,
});

function HeroFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-accent-blue/10 via-accent-violet/5 to-transparent border border-accent-blue/20 animate-pulse" />
    </div>
  );
}

interface Props {
  progress: number;
}

export default function HeroSection({ progress }: Props) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  // Circular ring rotation based on scroll
  const ringRotation = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const ringScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-bg-primary">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-accent-blue/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent-violet/5 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(ellipse_at_center,rgba(82,107,255,0.03),transparent_70%)]" />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* 3D Scene */}
      <div className="absolute inset-0 z-[2]">
        <HeroCanvas progress={progress} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <motion.div
            style={{ y: y1, opacity }}
            className="flex flex-col gap-6"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-mono tracking-[0.2em] text-text-secondary w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
              BUILDING WHAT&apos;S NEXT
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight"
            >
              THE FUTURE OF YOUR{" "}
              <span className="text-gradient">BUSINESS</span>
              <br />
              IS{" "}
              <span className="relative inline-block">
                <span>AUTOMATED</span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-accent-blue to-accent-violet rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 3.2, duration: 0.8 }}
                />
              </span>
              .
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 0.8 }}
              className="text-lg md:text-xl text-text-secondary max-w-lg leading-relaxed"
            >
              We design intelligent automation systems, connected applications,
              and digital experiences that help businesses operate smarter,
              faster, and better.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.0, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="magnetic-btn primary interactive group"
              >
                Explore Our Services
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="magnetic-btn secondary interactive"
              >
                Start a Project
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.4, duration: 0.6 }}
              className="flex gap-8 pt-8 border-t border-white/5 mt-4"
            >
              {[
                { label: "Automations Built", value: "50+" },
                { label: "Businesses Served", value: "30+" },
                { label: "Hours Saved Monthly", value: "∞" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-text-muted font-mono tracking-wider uppercase mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Visual area handled by 3D component */}
          <div className="hidden lg:block relative h-[600px]" />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-text-muted text-xs font-mono tracking-[0.3em] uppercase">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-accent-blue to-transparent"
        />
      </motion.div>
    </section>
  );
}
