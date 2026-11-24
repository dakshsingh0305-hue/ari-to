"use client";

import { useEffect, useRef, useState } from "react";
import Preloader from "@/components/preloader/Preloader";
import CustomCursor from "@/components/cursor/CustomCursor";
import MouseGradient from "@/components/cursor/MouseGradient";
import Navigation from "@/components/navigation/Navigation";
import CircularScrollIndicator from "@/components/scroll/CircularScrollIndicator";
import HeroSection from "@/components/hero/HeroSection";
import IntroductionSection from "@/components/sections/IntroductionSection";
import ServicesSection from "@/components/sections/ServicesSection";
import HowWeWorkSection from "@/components/sections/HowWeWorkSection";
import WhyAritoSection from "@/components/sections/WhyAritoSection";
import TechnologyStackSection from "@/components/sections/TechnologyStackSection";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/footer/Footer";
import ScrollProgress from "@/components/scroll/ScrollProgress";
import ParticleBackground from "@/components/animations/ParticleBackground";
import BackToTop from "@/components/ui/BackToTop";

export default function HomeClient() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const maxScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    maxScroll.current =
      document.documentElement.scrollHeight - window.innerHeight;
  }, []);

  const progress = Math.min(scrollY / maxScroll.current, 1);

  return (
    <>
      <Preloader />
      <CustomCursor />
      <MouseGradient />
      <ScrollProgress progress={progress} />
      <CircularScrollIndicator progress={progress} />
      <ParticleBackground />
      
      <Navigation isScrolled={isScrolled} />

      <main>
        <HeroSection progress={progress} />
        <IntroductionSection />
        <ServicesSection />
        <HowWeWorkSection />
        <WhyAritoSection />
        <TechnologyStackSection />
        <ProjectShowcase />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
