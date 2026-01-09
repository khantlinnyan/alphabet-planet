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
    const count = 130; // still calm, but more present
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
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 820px at 12% 6%, rgba(143,0,255,0.45), transparent 60%), radial-gradient(900px 640px at 86% 14%, rgba(56,189,248,0.3), transparent 60%), radial-gradient(980px 720px at 52% 92%, rgba(34,197,94,0.26), transparent 62%), radial-gradient(760px 520px at 30% 78%, rgba(248,113,113,0.18), transparent 58%), #0b0d17",
        }}
      />

      {/* Nebula gradients (soft + calm) */}
      <div className="absolute inset-0 opacity-100">
        <div
          className="absolute -top-44 left-[-20%] h-[540px] w-[540px] rounded-full blur-[110px]"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(143,0,255,0.65), transparent 58%)",
          }}
        />
        <div
          className="absolute top-[16%] right-[-18%] h-[660px] w-[660px] rounded-full blur-[125px]"
          style={{
            background:
              "radial-gradient(circle at 60% 40%, rgba(59,130,246,0.5), transparent 56%)",
          }}
        />
        <div
          className="absolute bottom-[-30%] left-[12%] h-[720px] w-[720px] rounded-full blur-[135px]"
          style={{
            background:
              "radial-gradient(circle at 40% 60%, rgba(34,197,94,0.42), transparent 58%)",
          }}
        />
        <div
          className="absolute bottom-[8%] right-[6%] h-[520px] w-[520px] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle at 60% 40%, rgba(249,115,22,0.28), transparent 58%)",
          }}
        />
      </div>

      {/* Star dust texture */}
      <div
        className="absolute inset-0 opacity-45"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "140px 140px, 220px 220px",
          backgroundPosition: "0 0, 60px 80px",
        }}
      />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 800px at 50% 30%, transparent 26%, rgba(0,0,0,0.82) 100%)",
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
