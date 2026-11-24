"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Preloader() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(canvasRef, { once: false });

  useEffect(() => {
    const run = async () => {
      await controls.start({
        opacity: 1,
        transition: { duration: 0.8, ease: "easeInOut" },
      });
      await new Promise((r) => setTimeout(r, 1200));
      await controls.start({
        opacity: 0,
        y: -40,
        transition: { duration: 0.6, ease: "easeInOut" },
      });
      document.body.style.overflow = "";
      setTimeout(() => {
        const el = document.getElementById("preloader");
        if (el) el.remove();
      }, 600);
    };
    run();
  }, [controls]);

  return (
    <motion.div
      id="preloader"
      ref={canvasRef}
      initial={{ opacity: 1 }}
      animate={controls}
      className="preloader fixed inset-0 z-[99999] flex flex-col items-center justify-center gap-8 bg-[#050505]"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="preloader-logo tracking-[0.4em]"
      >
        ARI-TO
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col items-center gap-3"
      >
        <div className="w-48 h-[1px] bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-accent-blue to-accent-violet rounded-full"
          />
        </div>
        <p className="text-text-muted text-xs tracking-[0.3em] uppercase font-mono">
          Initializing Systems...
        </p>
      </motion.div>
    </motion.div>
  );
}
