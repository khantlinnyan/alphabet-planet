"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

type FloatingEffectProps = {
  children: React.ReactNode;
  className?: string;
  selector?: string;
  intensity?: number;
  minDuration?: number;
  maxDuration?: number;
  maxRotate?: number;
  maxX?: number;
  maxY?: number;
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const FloatingEffect = ({
  children,
  className,
  selector = "[data-float]",
  intensity = 1,
  minDuration = 2.4,
  maxDuration = 4.2,
  maxRotate = 5,
  maxX = 14,
  maxY = 22,
}: FloatingEffectProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current || prefersReducedMotion()) {
      return;
    }

    const ctx = gsap.context(() => {
      const container = containerRef.current;
      if (!container) return;

      let targets = gsap.utils.toArray<HTMLElement>(
        container.querySelectorAll(selector)
      );
      if (!targets.length) {
        targets = Array.from(container.children) as HTMLElement[];
      }

      const intensityScale = clamp(intensity, 0.2, 2);
      targets.forEach((target) => {
        target.style.willChange = "transform";
        gsap.to(target, {
          x: gsap.utils.random(-maxX, maxX) * intensityScale,
          y: gsap.utils.random(-maxY, maxY) * intensityScale,
          rotation: gsap.utils.random(-maxRotate, maxRotate) * intensityScale,
          duration: gsap.utils.random(minDuration, maxDuration),
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: gsap.utils.random(0, 0.6),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [
    selector,
    intensity,
    minDuration,
    maxDuration,
    maxRotate,
    maxX,
    maxY,
  ]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default FloatingEffect;
