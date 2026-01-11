"use client";

import { useEffect } from "react";
import usePrefersReducedMotion from "@/components/lib/usePrefersReducedMotion";

export default function ChapterReveals() {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;

    let ctx: any;
    (async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const blocks = gsap.utils.toArray<HTMLElement>("[data-reveal]");
        blocks.forEach((el) => {
          const delayAttr = el.getAttribute("data-reveal-delay");
          const delay = delayAttr ? Number(delayAttr) : 0;
          gsap.fromTo(
            el,
            { y: 14, opacity: 0, filter: "blur(6px)" },
            {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.9,
              ease: "power3.out",
              delay: Number.isFinite(delay) ? delay : 0,
              scrollTrigger: {
                trigger: el,
                start: "top 78%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      });
    })();

    return () => ctx?.revert?.();
  }, [reduced]);

  return null;
}
    
