"use client";

import { useMemo, useRef, useState } from "react";
import Section from "./section";
import { siteContent, SiteContent } from "../content/site-content";
import usePrefersReducedMotion from "@/components/lib/usePrefersReducedMotion";
import BookTabs from "./book-tabs";
import BookCoverMock from "./book-cover-mock";
import BenefitList from "./benefit-list";
import BookActions from "./book-actions";

export default function Books() {
  const reduced = usePrefersReducedMotion();
  const { booksSection } = siteContent;

  const books = booksSection.books;
  const [activeId, setActiveId] = useState(books[0]?.id);

  const active = useMemo(
    () => books.find((b) => b.id === activeId) ?? books[0],
    [activeId, books]
  );

  const coverWrapRef = useRef<HTMLDivElement | null>(null);
  const rightWrapRef = useRef<HTMLDivElement | null>(null);

  const animateSwap = async () => {
    if (reduced) return;

    const gsap = (await import("gsap")).default;
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    if (coverWrapRef.current) {
      tl.to(coverWrapRef.current, { opacity: 0, y: 8, duration: 0.12 }, 0);
      tl.to(coverWrapRef.current, { opacity: 1, y: 0, duration: 0.2 }, 0.12);
    }
    if (rightWrapRef.current) {
      tl.to(rightWrapRef.current, { opacity: 0, y: 8, duration: 0.12 }, 0);
      tl.to(rightWrapRef.current, { opacity: 1, y: 0, duration: 0.2 }, 0.12);
    }
    await tl.play();
  };

  const onPick = async (id: string) => {
    if (id === activeId) return;
    // fade out current, swap, then fade in
    if (!reduced) {
      const gsap = (await import("gsap")).default;
      await gsap.to(
        [coverWrapRef.current, rightWrapRef.current].filter(Boolean),
        {
          opacity: 0,
          y: 8,
          duration: 0.12,
          ease: "power2.out",
        }
      );
    }

    setActiveId(id);

    // allow React to commit the new content before fading in
    requestAnimationFrame(async () => {
      if (reduced) return;
      const gsap = (await import("gsap")).default;
      await gsap.to(
        [coverWrapRef.current, rightWrapRef.current].filter(Boolean),
        {
          opacity: 1,
          y: 0,
          duration: 0.2,
          ease: "power3.out",
        }
      );
    });
  };

  return (
    <Section
      id="books"
      eyebrow={booksSection.eyebrow}
      title={booksSection.title}
    >
      <div className="max-w-3xl">
        <p data-reveal className="text-white/80 leading-relaxed">
          {booksSection.intro}
        </p>
      </div>

      {/* Sticky tabs on mobile */}
      <div className="mt-8">
        <BookTabs
          books={books}
          activeId={activeId}
          onChange={onPick}
          showingLabel={`Showing: ${active.label}`}
        />
      </div>

      {/* 12-col grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        {/* Left: 5 cols */}
        <div
          className="md:col-span-5"
          ref={coverWrapRef}
          style={{ opacity: 1 }}
        >
          <BookCoverMock
            subtitle={active.subtitle}
            cover={active.cover}
            metaChips={active.metaChips ?? []}
            lookInsideHref={
              active.lookInsideHref ?? active.actions?.secondary?.href ?? "#"
            }
          />
        </div>

        {/* Right: 7 cols */}
        <div
          className="md:col-span-7"
          ref={rightWrapRef}
          style={{ opacity: 1 }}
        >
          <div className="space-y-6">
            {/* Smaller than section headline */}
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/65">
                {active.subtitle}
              </p>
              <h3 className="mt-2 font-[var(--font-serif)] text-2xl md:text-3xl leading-tight text-white">
                {active.title}
              </h3>
              <p className="mt-3 text-white/80 leading-relaxed">
                {active.synopsis}
              </p>
            </div>

            {/* Benefits: consistent 2x2 card grid (4th = Best for) */}
            <BenefitList
              benefits={active.benefits ?? []}
              bestFor={active.bestFor ?? ""}
            />

            {/* Actions */}
            <BookActions
              primary={active.actions?.primary}
              secondary={active.actions?.secondary}
              tertiary={active.actions?.tertiary}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
