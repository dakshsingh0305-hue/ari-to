"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { CONFIG } from "@/config";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer ref={ref} className="relative pt-20 pb-8 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-bg-primary border-t border-white/5" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#hero" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-[0.2em]">
                <span className="text-gradient">ARI</span>
                <span className="text-white/90">-TO</span>
              </span>
            </Link>
            <p className="text-text-secondary max-w-sm leading-relaxed mb-6">
              Automate the Ordinary. Elevate the Extraordinary.
              <br />
              Building intelligent systems that help businesses operate smarter, faster, and better.
            </p>
            <p className="text-text-muted text-sm italic">
              &ldquo;Automating Possibilities. Building Tomorrow.&rdquo;
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
              Navigation
            </h4>
            <ul className="space-y-3">
              {CONFIG.navigation.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-text-muted hover:text-accent-blue transition-colors text-sm interactive"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
              Services
            </h4>
            <ul className="space-y-3">
              {CONFIG.services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-text-muted hover:text-accent-blue transition-colors text-sm interactive"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            &copy; {year} ARI-TO. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:dakshsingh0305@outlook.com"
              className="text-text-muted hover:text-accent-blue transition-colors text-sm interactive"
            >
              dakshsingh0305@outlook.com
            </a>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent-blue transition-colors text-sm interactive flex items-center gap-1"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
