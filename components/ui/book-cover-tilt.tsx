"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import usePrefersReducedMotion from "@/components/lib/usePrefersReducedMotion";

export default function BookCoverTilt({
  imageSrc,
  alt,
  badge,
}: {
  imageSrc: string;
  alt: string;
  badge?: string;
}) {
  const reduced = usePrefersReducedMotion();
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const el = cardRef.current;
    let gsap: any;
    let rxTo: any, ryTo: any, glowTo: any;

    (async () => {
      gsap = (await import("gsap")).default;
      rxTo = gsap.quickTo(el, "--rx", { duration: 0.35, ease: "power3.out" });
      ryTo = gsap.quickTo(el, "--ry", { duration: 0.35, ease: "power3.out" });
      glowTo = gsap.quickTo(el, "--glow", {
        duration: 0.35,
        ease: "power3.out",
      });
    })();

    function onMove(e: PointerEvent) {
      if (reduced) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;

      const ry = (px - 0.5) * 10;
      const rx = -(py - 0.5) * 10;

      rxTo?.(rx);
      ryTo?.(ry);
      glowTo?.(1);
    }

    function onLeave() {
      rxTo?.(0);
      ryTo?.(0);
      glowTo?.(0);
    }

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [reduced]);

  return (
    <div
      ref={cardRef}
      className="relative w-[280px] sm:w-[320px] md:w-[360px] aspect-[3/4]
                 rounded-3xl border border-white/10 bg-white/[0.03] shadow-glow overflow-hidden"
      style={
        {
          transform:
            "perspective(900px) rotateX(calc(var(--rx, 0) * 1deg)) rotateY(calc(var(--ry, 0) * 1deg))",
          willChange: "transform",
        } as any
      }
    >
      {/* glow */}
      <div
        className="absolute inset-0 opacity-0"
        style={{
          opacity: "calc(var(--glow, 0) * 1)",
          background:
            "radial-gradient(500px 300px at 30% 20%, rgba(139,92,246,0.35), transparent 60%)",
        }}
      />
      {badge ? (
        <div className="absolute left-4 top-4 z-10 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/75 backdrop-blur">
          {badge}
        </div>
      ) : null}

      <Image
        src={imageSrc}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 320px, 360px"
        priority
      />

      {/* subtle edge highlight */}
      <div className="absolute inset-0 ring-1 ring-white/10" />
    </div>
  );
}
