"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CONFIG } from "@/config";
import { ArrowUpRight, Tag } from "lucide-react";

export default function ProjectShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" ref={ref} className="relative py-32 md:py-48 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-bg-secondary/40" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent-violet/5 rounded-full blur-[180px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-accent-blue font-mono text-sm tracking-[0.3em] uppercase mb-4">
              Featured Work
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Concepts That{" "}
              <span className="text-gradient">Define the Future</span>
            </h2>
            <p className="text-text-secondary mt-4 max-w-lg">
              Explore sample automation concepts we&apos;ve developed to showcase what&apos;s possible. These represent the direction we help businesses move toward.
            </p>
          </div>
          <span className="text-text-muted text-xs font-mono tracking-wider uppercase border border-white/10 px-3 py-1.5 rounded-full">
            Concept Showcase
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {CONFIG.projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="project-card interactive"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Abstract visual representation */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background: `radial-gradient(ellipse at ${hoveredIndex === i ? '70% 30%' : '50% 50%'}, ${project.color}20, transparent 70%)`,
                  transition: 'background 0.5s ease',
                }}
              />

              {/* Geometric decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                <svg viewBox="0 0 200 200" fill="none">
                  <circle cx="100" cy="100" r="80" stroke={project.color} strokeWidth="0.5" />
                  <circle cx="100" cy="100" r="60" stroke={project.color} strokeWidth="0.5" strokeDasharray="4 4" />
                  <circle cx="100" cy="100" r="40" stroke={project.color} strokeWidth="0.5" />
                  <line x1="20" y1="100" x2="180" y2="100" stroke={project.color} strokeWidth="0.3" />
                  <line x1="100" y1="20" x2="100" y2="180" stroke={project.color} strokeWidth="0.3" />
                </svg>
              </div>

              {/* Content */}
              <div className="relative h-full p-8 flex flex-col justify-end min-h-[280px]">
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="text-xs font-mono tracking-wider uppercase px-2 py-1 rounded-full border"
                    style={{ borderColor: project.color + "40", color: project.color }}
                  >
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-text-muted font-mono px-2 py-1 rounded bg-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-accent-blue hover:border-accent-blue/30 transition-all interactive">
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
