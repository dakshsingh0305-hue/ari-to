"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface Props {
  progress: number;
}

export default function HeroCanvas({ progress }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const meshRef = useRef<THREE.Group>(null);
  const ringsRef = useRef<THREE.Mesh[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return; // Skip 3D on touch devices for performance

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x526BFF, 0.3);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x526BFF, 2, 20);
    pointLight1.position.set(3, 3, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x9B5CFF, 1.5, 20);
    pointLight2.position.set(-3, -2, 4);
    scene.add(pointLight2);

    // Central sphere - wireframe
    const sphereGeo = new THREE.IcosahedronGeometry(1, 2);
    const sphereMat = new THREE.MeshPhysicalMaterial({
      color: 0x526BFF,
      metalness: 0.9,
      roughness: 0.1,
      transparent: true,
      opacity: 0.15,
      wireframe: false,
      emissive: 0x526BFF,
      emissiveIntensity: 0.1,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(sphere);

    // Wireframe overlay
    const wireGeo = new THREE.IcosahedronGeometry(1.01, 2);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x526BFF,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
    const wireSphere = new THREE.Mesh(wireGeo, wireMat);
    scene.add(wireSphere);

    // Orbital rings
    const ringConfigs = [
      { radius: 1.8, tube: 0.005, color: 0x526BFF, tiltX: 0.3, tiltZ: 0.1, speed: 0.5 },
      { radius: 2.2, tube: 0.003, color: 0x9B5CFF, tiltX: -0.5, tiltZ: 0.3, speed: -0.3 },
      { radius: 2.6, tube: 0.003, color: 0x00D4FF, tiltX: 0.8, tiltZ: -0.2, speed: 0.4 },
    ];

    ringConfigs.forEach((cfg) => {
      const ringGeo = new THREE.TorusGeometry(cfg.radius, cfg.tube, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color: cfg.color,
        transparent: true,
        opacity: 0.25,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = cfg.tiltX;
      ring.rotation.z = cfg.tiltZ;
      ring.userData = { speed: cfg.speed };
      scene.add(ring);
      ringsRef.current.push(ring);
    });

    // Floating particles around the object
    const particleCount = isTouch ? 0 : 60;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.5 + Math.random() * 2;
      positions[i] = r * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = r * Math.cos(phi);
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x526BFF,
      size: 0.02,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Connection lines between random particles
    const linePositions: number[] = [];
    for (let i = 0; i < Math.min(15, particleCount); i++) {
      const idx1 = Math.floor(Math.random() * particleCount) * 3;
      const idx2 = Math.floor(Math.random() * particleCount) * 3;
      linePositions.push(
        positions[idx1], positions[idx1 + 1], positions[idx1 + 2],
        positions[idx2], positions[idx2 + 1], positions[idx2 + 2]
      );
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x526BFF,
      transparent: true,
      opacity: 0.1,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lines);

    // Mouse tracking
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Resize
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    // Animation loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Rotate sphere subtly
      sphere.rotation.y = t * 0.1;
      sphere.rotation.x = Math.sin(t * 0.05) * 0.1;
      wireSphere.rotation.y = -t * 0.08;
      wireSphere.rotation.x = Math.cos(t * 0.05) * 0.1;

      // Ring rotation
      ringsRef.current.forEach((ring) => {
        ring.rotation.y += ring.userData.speed * 0.01;
      });

      // Particles rotation
      particles.rotation.y = t * 0.02;
      lines.rotation.y = t * 0.02;

      // Mouse influence
      sphere.rotation.x += mouseRef.current.y * 0.01;
      sphere.rotation.y += mouseRef.current.x * 0.01;
      pointLight1.position.x = 3 + mouseRef.current.x * 2;
      pointLight1.position.y = 3 + mouseRef.current.y * 2;

      // Scroll-based effects
      sphere.scale.setScalar(1 - progress * 0.3);
      sphere.position.x = -progress * 1.5;
      sphere.position.y = progress * 0.5;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [progress]);

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none" />;
}
