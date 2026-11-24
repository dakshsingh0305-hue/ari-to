"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  progress: number;
}

export default function CircularScrollIndicator({ progress }: Props) {
  const circleRef = useRef<SVGCircleElement>(null);
  const circumference = 2 * Math.PI * 18;

  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.style.strokeDashoffset = String(
        circumference * (1 - progress)
      );
    }
  }, [progress]);

  return (
    <div className="circular-scroll-indicator hidden lg:flex flex-col items-center gap-3">
      <div className="text-[10px] font-mono text-text-muted tracking-widest uppercase">
        {Math.round(progress * 100)}%
      </div>
      <div className="circular-scroll-ring">
        <svg width="36" height="36" viewBox="0 0 36 36">
          <circle
            ref={circleRef}
            cx="18"
            cy="18"
            r="18"
            fill="none"
            stroke="rgba(82, 107, 255, 0.2)"
            strokeWidth="1.5"
            strokeDasharray={circumference}
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="text-[10px] font-mono text-text-muted tracking-widest uppercase rotate-90 origin-center whitespace-nowrap mt-1">
        Scroll
      </div>
    </div>
  );
}
