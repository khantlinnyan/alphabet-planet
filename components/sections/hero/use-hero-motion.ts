"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useHeroMotion = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const eyebrowRef = useRef<HTMLParagraphElement | null>(null);
  const headlineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const subRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const trustRef = useRef<HTMLParagraphElement | null>(null);
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const rocketRef = useRef<HTMLDivElement | null>(null);
  const rocketGlowRef = useRef<HTMLDivElement | null>(null);
  const earthRef = useRef<HTMLDivElement | null>(null);
  const planetRef = useRef<HTMLDivElement | null>(null);
  const astronautRef = useRef<HTMLDivElement | null>(null);
  const planetGlowRef = useRef<HTMLDivElement | null>(null);
  const orbitPathRef = useRef<SVGPathElement | null>(null);
  const primaryBtnRef = useRef<HTMLButtonElement | null>(null);
  const secondaryBtnRef = useRef<HTMLButtonElement | null>(null);

  useLayoutEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const prefersReduced = media.matches;
    const supportsHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    const cleanups: Array<() => void> = [];

    if (prefersReduced) {
      gsap.set(
        [
          eyebrowRef.current,
          ...headlineRefs.current,
          subRef.current,
          ctaRef.current,
          trustRef.current,
          sceneRef.current,
        ],
        { opacity: 1, y: 0 }
      );
      if (orbitPathRef.current) {
        orbitPathRef.current.style.strokeDashoffset = "0";
      }
      return;
    }

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "expo.out" } });
      intro
        .fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.55 },
          0
        )
        .fromTo(
          headlineRefs.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.08 },
          0.06
        )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.21
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.31
        )
        .fromTo(
          trustRef.current,
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.5 },
          0.42
        )
        .fromTo(
          sceneRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          0.35
        );

      if (orbitPathRef.current) {
        const length = orbitPathRef.current.getTotalLength();
        orbitPathRef.current.style.strokeDasharray = `${length}`;
        orbitPathRef.current.style.strokeDashoffset = `${length}`;
        gsap.to(orbitPathRef.current, {
          strokeDashoffset: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.18,
        });
      }

      if (rocketRef.current) {
        gsap.to(rocketRef.current, {
          y: -6,
          rotation: 1,
          duration: 5.6,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      if (planetGlowRef.current) {
        gsap.to(planetGlowRef.current, {
          opacity: 0.18,
          duration: 3.4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      if (planetRef.current) {
        gsap.to(planetRef.current, {
          y: -4,
          rotation: 1,
          duration: 6.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      if (astronautRef.current) {
        gsap.to(astronautRef.current, {
          y: -5,
          duration: 7.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      if (earthRef.current) {
        gsap.to(earthRef.current, {
          y: -4,
          duration: 8,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      const parallaxTargets = [
        { ref: earthRef, y: 12 },
        { ref: rocketRef, y: -18 },
        { ref: planetRef, y: -26 },
        { ref: astronautRef, y: -14 },
        { ref: planetGlowRef, y: -20 },
      ];

      parallaxTargets.forEach(({ ref, y }) => {
        if (!ref.current) return;
        gsap.to(ref.current, {
          y,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.7,
          },
        });
      });

      if (rocketRef.current && orbitPathRef.current) {
        ScrollTrigger.create({
          trigger: heroRef.current,
          start: "top top",
          end: "20% top",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.to(rocketRef.current, {
              rotation: gsap.utils.interpolate(-18, -10, progress),
              x: gsap.utils.interpolate(0, 20, progress),
              y: gsap.utils.interpolate(0, -10, progress),
              duration: 0.1,
              overwrite: true,
            });
            gsap.to(orbitPathRef.current, {
              opacity: gsap.utils.interpolate(0.12, 0.2, progress),
              duration: 0.1,
              overwrite: true,
            });
          },
        });
      }

      if (supportsHover) {
        const buttons = [primaryBtnRef.current, secondaryBtnRef.current].filter(
          Boolean
        ) as HTMLButtonElement[];

        buttons.forEach((btn) => {
          const setX = gsap.quickTo(btn, "x", {
            duration: 0.3,
            ease: "power3.out",
          });
          const setY = gsap.quickTo(btn, "y", {
            duration: 0.3,
            ease: "power3.out",
          });

          const handleMove = (event: PointerEvent) => {
            const rect = btn.getBoundingClientRect();
            const dx = event.clientX - (rect.left + rect.width / 2);
            const dy = event.clientY - (rect.top + rect.height / 2);
            const x = gsap.utils.clamp(-6, 6, dx * 0.08);
            const y = gsap.utils.clamp(-6, 6, dy * 0.08);
            setX(x);
            setY(y);
          };

          const handleLeave = () => {
            setX(0);
            setY(0);
          };

          btn.addEventListener("pointermove", handleMove);
          btn.addEventListener("pointerleave", handleLeave);
          ScrollTrigger.addEventListener("refreshInit", handleLeave);

          cleanups.push(() => {
            btn.removeEventListener("pointermove", handleMove);
            btn.removeEventListener("pointerleave", handleLeave);
            ScrollTrigger.removeEventListener("refreshInit", handleLeave);
          });
        });
      }

      if (primaryBtnRef.current && rocketGlowRef.current) {
        const glow = rocketGlowRef.current;
        const boostGlow = () =>
          gsap.to(glow, { opacity: 0.85, duration: 0.25 });
        const resetGlow = () => gsap.to(glow, { opacity: 0.4, duration: 0.3 });

        const handleEnter = () => boostGlow();
        const handleLeave = () => resetGlow();
        const handleClick = () => {
          if (prefersReduced || !rocketRef.current) {
            boostGlow();
            gsap.to(glow, { opacity: 0.5, duration: 0.4, delay: 0.1 });
            return;
          }

          const launch = gsap.timeline({ defaults: { ease: "power3.out" } });
          launch
            .to(glow, { opacity: 0.9, duration: 0.15 }, 0)
            .to(rocketRef.current, { x: "+=60", y: "-=20", duration: 0.5 }, 0)
            .to(rocketRef.current, { x: "-=60", y: "+=20", duration: 0.7 }, 0.5)
            .to(glow, { opacity: 0.5, duration: 0.3 }, 0.6);
        };

        primaryBtnRef.current.addEventListener("pointerenter", handleEnter);
        primaryBtnRef.current.addEventListener("pointerleave", handleLeave);
        primaryBtnRef.current.addEventListener("click", handleClick);

        cleanups.push(() => {
          primaryBtnRef.current?.removeEventListener("pointerenter", handleEnter);
          primaryBtnRef.current?.removeEventListener("pointerleave", handleLeave);
          primaryBtnRef.current?.removeEventListener("click", handleClick);
        });
      }
    }, heroRef);

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      ctx.revert();
    };
  }, []);

  return {
    heroRef,
    eyebrowRef,
    headlineRefs,
    subRef,
    ctaRef,
    trustRef,
    sceneRef,
    rocketRef,
    rocketGlowRef,
    earthRef,
    planetRef,
    astronautRef,
    planetGlowRef,
    orbitPathRef,
    primaryBtnRef,
    secondaryBtnRef,
  };
};

export default useHeroMotion;
