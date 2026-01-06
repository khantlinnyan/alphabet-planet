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
};

export default function SpaceBackground() {
  const stars = useMemo(() => {
    const rand = mulberry32(42);
    const count = 90; // sparse
    const out: Star[] = [];
    for (let i = 0; i < count; i++) {
      const size = rand() < 0.82 ? 1 : rand() < 0.95 ? 1.5 : 2;
      const opacity = 0.18 + rand() * 0.55;
      const twinkle = rand() < 0.12; // only a few twinkle
      out.push({
        left: `${rand() * 100}%`,
        top: `${rand() * 100}%`,
        size,
        opacity,
        twinkle,
        delay: rand() * 4,
        duration: 2.6 + rand() * 3.5,
      });
    }
    return out;
  }, []);

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

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 800px at 50% 30%, transparent 35%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      {/* Stars drift layer */}
      <div className="absolute inset-0 animate-drift">
        {stars.map((s, idx) => (
          <span
            key={idx}
            className={[
              "absolute rounded-full bg-white/90",
              s.twinkle ? "animate-twinkle" : "",
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
                s.size >= 2
                  ? "drop-shadow(0 0 8px rgba(255,255,255,0.22))"
                  : "none",
            }}
          />
        ))}
      </div>
    </div>
  );
}
