"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CONFIG } from "@/config";
import { Zap, Clock, Link, Heart, TrendingUp, Code } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  zap: <Zap size={24} />,
  clock: <Clock size={24} />,
  link: <Link size={24} />,
  heart: <Heart size={24} />,
  "trending-up": <TrendingUp size={24} />,
  code: <Code size={24} />,
};

export default function WhyAritoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-32 md:py-48 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-bg-secondary/60" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-accent-cyan/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-accent-blue font-mono text-sm tracking-[0.3em] uppercase mb-4">
            Why ARI-TO
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Smarter Systems.{" "}
            <span className="text-gradient">Better Business.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONFIG.whyArito.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass rounded-2xl p-8 hover:border-accent-blue/20 transition-all duration-500 group interactive"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-violet/10 flex items-center justify-center mb-5 text-accent-blue group-hover:scale-110 transition-transform duration-300">
                {iconMap[item.icon]}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
