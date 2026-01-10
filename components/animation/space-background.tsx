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

type StarLayer = {
  boxShadow: string;
};

type StarShadowOptions = {
  minOpacity?: number;
  maxOpacity?: number;
  spreadChance?: number;
  blurChance?: number;
};

const buildStarShadows = (
  count: number,
  seed: number,
  {
    minOpacity = 0.35,
    maxOpacity = 0.9,
    spreadChance = 0.25,
    blurChance = 0.2,
  }: StarShadowOptions = {}
): StarLayer => {
  const rand = mulberry32(seed);
  const shadows: string[] = [];

  for (let i = 0; i < count; i++) {
    const x = (rand() * 100).toFixed(2);
    const y = (rand() * 100).toFixed(2);
    const opacity = (minOpacity + rand() * (maxOpacity - minOpacity)).toFixed(
      2
    );
    const blur = rand() < blurChance ? (rand() < 0.6 ? 1 : 2) : 0;
    const spread = rand() < spreadChance ? 1 : 0;
    shadows.push(
      `${x}vw ${y}vh ${blur}px ${spread}px rgba(255,255,255,${opacity})`
    );
  }

  return { boxShadow: shadows.join(", ") };
};

export default function SpaceBackground() {
  const starsFar = useMemo(
    () =>
      buildStarShadows(180, 42, {
        minOpacity: 0.28,
        maxOpacity: 0.65,
        spreadChance: 0.2,
        blurChance: 0.15,
      }),
    []
  );

  const starsNear = useMemo(
    () =>
      buildStarShadows(90, 84, {
        minOpacity: 0.45,
        maxOpacity: 0.95,
        spreadChance: 0.35,
        blurChance: 0.4,
      }),
    []
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(960px 720px at 50% 28%, rgba(129,140,248,0.22), transparent 62%), radial-gradient(820px 640px at 18% 8%, rgba(139,92,246,0.18), transparent 60%), radial-gradient(680px 520px at 82% 12%, rgba(34,211,238,0.14), transparent 60%), #0b0d17",
        }}
      />

      <div className="absolute inset-0 opacity-90">
        <div
          className="absolute -top-44 left-[-20%] h-[520px] w-[520px] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.38), transparent 58%)",
          }}
        />
        <div
          className="absolute top-[10%] right-[-16%] h-[640px] w-[640px] rounded-full blur-[130px]"
          style={{
            background:
              "radial-gradient(circle at 60% 40%, rgba(56,189,248,0.36), transparent 56%)",
          }}
        />
        <div
          className="absolute bottom-[-28%] left-[12%] h-[700px] w-[700px] rounded-full blur-[135px]"
          style={{
            background:
              "radial-gradient(circle at 40% 60%, rgba(59,130,246,0.2), transparent 58%)",
          }}
        />
        <div
          className="absolute bottom-[4%] right-[6%] h-[520px] w-[520px] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle at 60% 40%, rgba(16,185,129,0.18), transparent 58%)",
          }}
        />
      </div>

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 800px at 50% 25%, transparent 28%, rgba(0,0,0,0.82) 100%)",
        }}
      />

      {/* Soft horizon glow */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(900px 240px at 50% 0%, rgba(255,255,255,0.14), transparent 62%)",
        }}
      />

      {/* Starfield layers */}
      <div className="absolute inset-0 motion-safe:animate-star-drift-slow">
        <span
          className="absolute left-0 top-0 h-px w-px rounded-full bg-white/70 motion-safe:animate-star-twinkle"
          style={{
            boxShadow: starsFar.boxShadow,
            animationDuration: "7s",
          }}
        />
      </div>
      <div className="absolute inset-0 motion-safe:animate-star-drift-fast">
        <span
          className="absolute left-0 top-0 h-[2px] w-[2px] rounded-full bg-white/80 motion-safe:animate-star-twinkle"
          style={{
            boxShadow: starsNear.boxShadow,
            animationDuration: "4.8s",
          }}
        />
      </div>
    </div>
  );
}
