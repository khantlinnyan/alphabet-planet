"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import usePrefersReducedMotion from "@/components/lib/usePrefersReducedMotion";
import BookMetaChips from "./book-meta-chips";

export default function BookCoverMock({
  subtitle,
  cover,
  metaChips,
  lookInsideHref,
}: {
  subtitle: string;
  cover: { imageSrc: string; alt: string };
  metaChips: { label: string; value: string }[];
  lookInsideHref: string;
}) {
  const reduced = usePrefersReducedMotion();
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (reduced) return;
    if (!cardRef.current) return;

    const el = cardRef.current;
    let rxTo: any, ryTo: any;

    (async () => {
      const gsap = (await import("gsap")).default;
      rxTo = gsap.quickTo(el, "--rx", { duration: 0.25, ease: "power3.out" });
      ryTo = gsap.quickTo(el, "--ry", { duration: 0.25, ease: "power3.out" });
    })();

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;

      const ry = (px - 0.5) * 6; // subtle
      const rx = -(py - 0.5) * 6;

      rxTo?.(rx);
      ryTo?.(ry);
    };

    const onLeave = () => {
      rxTo?.(0);
      ryTo?.(0);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [reduced]);

  return (
    <div className="space-y-4">
      <div
        ref={cardRef}
        className="relative w-full max-w-[420px] aspect-[3/4] rounded-3xl overflow-hidden
                   border border-white/15 bg-white/5 shadow-glow"
        style={
          {
            transform:
              "perspective(900px) rotateX(calc(var(--rx, 0) * 1deg)) rotateY(calc(var(--ry, 0) * 1deg))",
            willChange: "transform",
          } as any
        }
      >
        {/* Edge highlight */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.20), rgba(255,255,255,0.02) 35%, rgba(255,255,255,0.08))",
            mixBlendMode: "overlay",
            opacity: 0.45,
          }}
        />

        {/* Glass reflection sweep */}
        <div
          className="absolute -left-[35%] top-[-20%] h-[140%] w-[55%] rotate-12 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.16), transparent)",
            opacity: 0.35,
          }}
        />

        {/* Nebula wash */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(520px 360px at 35% 20%, rgba(139,92,246,0.22), transparent 60%)",
          }}
        />

        <Image
          src={cover.imageSrc}
          alt={cover.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 90vw, 420px"
          priority={false}
        />

        {/* Small caption pill */}
        <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs text-white/85 backdrop-blur">
          {subtitle}
        </div>

        <div className="absolute inset-0 ring-1 ring-white/10 pointer-events-none" />
      </div>

      <BookMetaChips items={metaChips.slice(0, 3)} />

      <a
        href={lookInsideHref}
        className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent)/0.55)]
                   focus-visible:ring-offset-2 focus-visible:ring-offset-black/60 rounded-md px-1"
      >
        <span className="underline decoration-white/25 underline-offset-4">
          Look inside
        </span>
        <span className="text-white/60">→</span>
      </a>
    </div>
  );
}
