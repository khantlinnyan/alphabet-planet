"use client";

import { useMemo } from "react";

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Star = {
  left: string;
  top: string;
  size: number;
  opacity: number;
  twinkle: boolean;
  delay: number;
  duration: number;
  glow: boolean;
};

export default function SpaceBackground() {
  const buildStars = (
    seed: number,
    {
      count,
      sizeOptions,
      minOpacity,
      maxOpacity,
      twinkleChance,
      glowChance,
      minDuration,
      maxDuration,
    }: {
      count: number;
      sizeOptions: number[];
      minOpacity: number;
      maxOpacity: number;
      twinkleChance: number;
      glowChance: number;
      minDuration: number;
      maxDuration: number;
    }
  ) => {
    const rand = mulberry32(seed);
    const out: Star[] = [];
    for (let i = 0; i < count; i++) {
      const size =
        sizeOptions[Math.floor(rand() * sizeOptions.length)] ?? sizeOptions[0];
      out.push({
        left: `${rand() * 100}%`,
        top: `${rand() * 100}%`,
        size,
        opacity: minOpacity + rand() * (maxOpacity - minOpacity),
        twinkle: rand() < twinkleChance,
        delay: rand() * 4,
        duration: minDuration + rand() * (maxDuration - minDuration),
        glow: rand() < glowChance,
      });
    }
    return out;
  };

  const starsFar = useMemo(
    () =>
      buildStars(42, {
        count: 140,
        sizeOptions: [1, 1.5, 2],
        minOpacity: 0.18,
        maxOpacity: 0.7,
        twinkleChance: 0.25,
        glowChance: 0.2,
        minDuration: 3,
        maxDuration: 6.2,
      }),
    []
  );

  const starsNear = useMemo(
    () =>
      buildStars(84, {
        count: 70,
        sizeOptions: [1.5, 2, 2.5, 3],
        minOpacity: 0.35,
        maxOpacity: 0.95,
        twinkleChance: 0.48,
        glowChance: 0.45,
        minDuration: 2,
        maxDuration: 4.5,
      }),
    []
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {/* Base space */}
      <div className="absolute inset-0 bg-[#03040a]" />

      {/* Nebula gradients (soft + calm) */}
      <div className="absolute inset-0 opacity-70">
        <div
          className="absolute -top-40 left-[-20%] h-[520px] w-[520px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(139,92,246,0.22), transparent 62%)",
          }}
        />
        <div
          className="absolute top-[20%] right-[-18%] h-[620px] w-[620px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 60% 40%, rgba(99,102,241,0.16), transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-[-28%] left-[18%] h-[680px] w-[680px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 40% 60%, rgba(16,185,129,0.08), transparent 62%)",
          }}
        />
      </div>

      {/* Moving sport lights */}
      <div className="absolute inset-0 opacity-70 mix-blend-screen">
        <div
          className="absolute -top-32 left-[35%] h-[480px] w-[520px] rounded-full blur-[80px] motion-safe:animate-spotlight-sweep"
          style={{
            background:
              "radial-gradient(closest-side, rgba(56,189,248,0.35), transparent 70%)",
          }}
        />
        <div
          className="absolute top-[30%] -left-[10%] h-[520px] w-[520px] rounded-full blur-[90px] motion-safe:animate-spotlight-sweep-reverse"
          style={{
            background:
              "radial-gradient(closest-side, rgba(168,85,247,0.35), transparent 72%)",
          }}
        />
      </div>

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 800px at 50% 30%, transparent 35%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      {/* Stars drift layers */}
      <div className="absolute inset-0 motion-safe:animate-drift-slow">
        {starsFar.map((s, idx) => (
          <span
            key={idx}
            className={[
              "absolute rounded-full bg-white/90",
              s.twinkle ? "motion-safe:animate-twinkle" : "",
            ].join(" ")}
            style={{
              left: s.left,
              top: s.top,
              width: `${s.size}px`,
              height: `${s.size}px`,
              opacity: s.opacity,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
              filter:
                s.size >= 2 || s.glow
                  ? "drop-shadow(0 0 10px rgba(255,255,255,0.25))"
                  : "none",
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 motion-safe:animate-drift-fast">
        {starsNear.map((s, idx) => (
          <span
            key={idx}
            className={[
              "absolute rounded-full bg-white/95",
              s.twinkle ? "motion-safe:animate-twinkle-strong" : "",
            ].join(" ")}
            style={{
              left: s.left,
              top: s.top,
              width: `${s.size}px`,
              height: `${s.size}px`,
              opacity: s.opacity,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
              filter: s.glow
                ? "drop-shadow(0 0 12px rgba(255,255,255,0.35))"
                : "none",
            }}
          />
        ))}
      </div>
    </div>
  );
}
