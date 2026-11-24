"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface Props {
  progress: number;
}

export default function ScrollProgress({ progress }: Props) {
  return (
    <div className="scroll-progress-bar fixed top-0 left-0 z-[9999]" style={{ transform: `scaleX(${progress})`, transformOrigin: "left" }}>
    </div>
  );
}
