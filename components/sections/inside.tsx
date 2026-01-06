"use client";

import Section from "./section";
import { useMemo, useState } from "react";
import usePrefersReducedMotion from "@/components/lib/usePrefersReducedMotion";

export default function Inside() {
  const reduced = usePrefersReducedMotion();
  const excerpts = useMemo(
    () => [
      {
        title: "Arrival",
        text: "The sky is quiet here — a soft black velvet dotted with tiny lights. A new friend waves from the horizon, as if a letter could smile.",
      },
      {
        title: "Names of sounds",
        text: "Some sounds whisper. Some sounds sing. The universe doesn’t rush you — it introduces itself, one small sparkle at a time.",
      },
      {
        title: "A gentle rule",
        text: "We don’t push. We repeat. We return. And little by little, the shapes and sounds begin to feel familiar.",
      },
      {
        title: "The planet grows",
        text: "Every character adds a new color to the map — not louder, just clearer. Like constellations forming in your mind.",
      },
    ],
    []
  );

  const [i, setI] = useState(0);

  async function animateSwap() {
    if (reduced) return;
    const gsap = (await import("gsap")).default;
    const el = document.querySelector("[data-excerpt]") as HTMLElement | null;
    if (!el) return;
    await gsap.to(el, { opacity: 0, y: 6, duration: 0.18, ease: "power2.out" });
    await gsap.to(el, { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" });
  }

  const prev = async () => {
    setI((v) => (v - 1 + excerpts.length) % excerpts.length);
    await animateSwap();
  };

  const next = async () => {
    setI((v) => (v + 1) % excerpts.length);
    await animateSwap();
  };

  return (
    <Section
      id="inside"
      eyebrow="Inside the book"
      title="A few pages, softly lit"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-7">
          <div
            data-reveal
            className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm text-white/60">Excerpt slider</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70 hover:bg-white/10 transition"
                >
                  Prev
                </button>
                <button
                  onClick={next}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70 hover:bg-white/10 transition"
                >
                  Next
                </button>
              </div>
            </div>

            <div data-excerpt className="mt-6">
              <h3 className="font-[var(--font-serif)] text-2xl leading-tight">
                {excerpts[i].title}
              </h3>
              <p className="mt-3 text-white/70 leading-relaxed">
                {excerpts[i].text}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#buy"
                className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm
                           bg-accent/90 hover:bg-accent transition text-white shadow-glow"
              >
                Read first chapter
              </a>
              <p className="text-xs text-white/50">
                Replace these excerpts with your real 3–5 highlights.
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="space-y-4">
            <p data-reveal className="text-white/70 leading-relaxed">
              The experience is paced like chapters: small blocks appear as you
              scroll, giving breathing room between ideas.
            </p>
            <div
              data-reveal
              className="rounded-3xl border border-white/10 bg-black/20 p-6"
            >
              <p className="text-sm text-white/60">Sample structure</p>
              <ul className="mt-4 space-y-2 text-sm text-white/65">
                <li>• Short scenes, simple lines</li>
                <li>• Soft repetition</li>
                <li>• Minimal visual clutter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
