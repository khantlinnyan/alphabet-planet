import { useEffect, useRef, useState, type RefObject } from "react";
import { gsap } from "gsap";
import usePrefersReducedMotion from "@/components/lib/usePrefersReducedMotion";

type StickyCtaOptions = {
  threshold?: number;
  enterY?: number;
  exitY?: number;
  enterDuration?: number;
  exitDuration?: number;
};

type StickyCtaState = {
  ctaRef: RefObject<HTMLAnchorElement>;
  stickyRef: RefObject<HTMLDivElement>;
  stickyMounted: boolean;
};

export default function useStickyCta(
  options: StickyCtaOptions = {}
): StickyCtaState {
  const {
    threshold = 0.4,
    enterY = 10,
    exitY = 8,
    enterDuration = 0.28,
    exitDuration = 0.2,
  } = options;

  const ctaRef = useRef<HTMLAnchorElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const [showSticky, setShowSticky] = useState(false);
  const [stickyMounted, setStickyMounted] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const cta = ctaRef.current;
    if (!cta) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSticky(!entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(cta);
    return () => observer.disconnect();
  }, [threshold]);

  useEffect(() => {
    if (showSticky) {
      setStickyMounted(true);
    }
  }, [showSticky]);

  useEffect(() => {
    const node = stickyRef.current;
    if (!node) return;

    gsap.killTweensOf(node);

    if (showSticky) {
      if (reduced) {
        gsap.set(node, { autoAlpha: 1, y: 0, clearProps: "transform" });
        return;
      }
      gsap.fromTo(
        node,
        { autoAlpha: 0, y: enterY },
        { autoAlpha: 1, y: 0, duration: enterDuration, ease: "power2.out" }
      );
      return;
    }

    if (reduced) {
      gsap.set(node, { autoAlpha: 0, y: exitY });
      setStickyMounted(false);
      return;
    }

    gsap.to(node, {
      autoAlpha: 0,
      y: exitY,
      duration: exitDuration,
      ease: "power2.in",
      onComplete: () => setStickyMounted(false),
    });
  }, [showSticky, reduced, enterY, exitY, enterDuration, exitDuration]);

  return { ctaRef, stickyRef, stickyMounted };
}
