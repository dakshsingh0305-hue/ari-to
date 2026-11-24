"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);
  const isTouchDevice = useRef(false);

  useEffect(() => {
    // Check for touch device
    isTouchDevice.current =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice.current) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const onTouchStart = () => {
      // Hide cursor on touch
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });

    const animate = () => {
      // Smooth interpolation for ring
      ringPos.current.x +=
        (mousePos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y +=
        (mousePos.current.y - ringPos.current.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mousePos.current.x - 4}px, ${mousePos.current.y - 4}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    // Add hover classes
    const addHover = () => ringRef.current?.classList.add("hovering");
    const removeHover = () => ringRef.current?.classList.remove("hovering");
    const addClick = () => ringRef.current?.classList.add("clicking");
    const removeClick = () => ringRef.current?.classList.remove("clicking");

    document.querySelectorAll(
      'a, button, .interactive, [data-cursor="hover"]'
    ).forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    window.addEventListener("mousedown", addClick);
    window.addEventListener("mouseup", removeClick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("mousedown", addClick);
      window.removeEventListener("mouseup", removeClick);
    };
  }, []);

  if (isTouchDevice.current) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot fixed top-0 left-0"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="cursor-ring fixed top-0 left-0"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
