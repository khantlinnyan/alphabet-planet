"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import usePrefersReducedMotion from "@/components/lib/usePrefersReducedMotion";

export default function CombineStepper({
  combine,
}: {
  combine: {
    title: string;
    steps: { title: string; desc: string; time?: string }[];
    note: string;
    totalTime?: string;
  };
}) {
  const reduced = usePrefersReducedMotion();
  const steps = combine.steps ?? [];
  const [active, setActive] = useState(0);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const totalTime = combine.totalTime ?? "8–12 min";

  const activeStep = useMemo(() => steps[active] ?? steps[0], [steps, active]);

  useEffect(() => {
    if (reduced) return;
    if (!panelRef.current) return;

    (async () => {
      const gsap = (await import("gsap")).default;
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.2, ease: "power3.out" }
      );
    })();
  }, [active, reduced]);

  // Mobile: readable + tap-friendly, Desktop: stepper
  return (
    <div
      data-reveal
      className="rounded-3xl border border-white/15 bg-black/20 p-7 md:p-8"
      role="region"
      aria-label="How to combine materials with books"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-white/65">
            Workflow
          </p>
          <h3 className="mt-3 font-[var(--font-serif)] text-2xl md:text-3xl text-white">
            {combine.title}
          </h3>
          <p className="mt-3 text-white/80 leading-relaxed">{combine.note}</p>
        </div>

        <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs text-white/85">
          Total: {totalTime}
        </span>
      </div>

      {/* Stepper */}
      <div className="mt-7 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div
          className="lg:col-span-5 flex flex-col gap-2"
          role="tablist"
          aria-label="Workflow steps"
        >
          {steps.map((s, idx) => {
            const selected = idx === active;
            return (
              <button
                key={s.title}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`step-panel-${idx}`}
                id={`step-tab-${idx}`}
                onClick={() => setActive(idx)}
                className={[
                  "text-left rounded-2xl border px-4 py-3 transition",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent)/0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-black/60",
                  selected
                    ? "border-accent/40 bg-[rgb(var(--accent)/0.10)] text-white"
                    : "border-white/15 bg-white/[0.04] text-white/85 hover:bg-white/[0.06]",
                ].join(" ")}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-medium">{s.title}</span>
                  {s.time ? (
                    <span className="text-xs text-white/70">{s.time}</span>
                  ) : null}
                </div>
              </button>
            );
          })}
        </div>

        <div className="lg:col-span-7">
          <div
            ref={panelRef}
            id={`step-panel-${active}`}
            role="tabpanel"
            aria-labelledby={`step-tab-${active}`}
            className="rounded-3xl border border-white/15 bg-white/[0.06] p-6"
          >
            <p className="text-white font-medium">{activeStep?.title}</p>
            <p className="mt-2 text-white/85 leading-relaxed">
              {activeStep?.desc}
            </p>

            <div className="mt-4 rounded-2xl border border-white/15 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-white/65">
                Tip
              </p>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">
                Keep it short. End early while it still feels good.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
