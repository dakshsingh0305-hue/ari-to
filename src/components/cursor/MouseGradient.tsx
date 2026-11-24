"use client";

import { useEffect, useRef } from "react";

export default function MouseGradient() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const onMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.setProperty("--mouse-x", `${e.clientX}px`);
        ref.current.style.setProperty("--mouse-y", `${e.clientY}px`);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return <div ref={ref} className="mouse-gradient fixed inset-0 pointer-events-none z-[2]" />;
}
