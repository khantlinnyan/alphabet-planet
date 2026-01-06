"use client";

import { useEffect, useMemo, useRef } from "react";
import { cn } from "@/components/lib/cn";

type BookTab = {
  id: string;
  label: string;
};

export default function BookTabs({
  books,
  activeId,
  onChange,
  showingLabel,
}: {
  books: BookTab[];
  activeId: string;
  onChange: (id: string) => void;
  showingLabel: string;
}) {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeIndex = useMemo(
    () =>
      Math.max(
        0,
        books.findIndex((b) => b.id === activeId)
      ),
    [books, activeId]
  );

  useEffect(() => {
    tabRefs.current = tabRefs.current.slice(0, books.length);
  }, [books.length]);

  const focusTab = (idx: number) => {
    const clamped = (idx + books.length) % books.length;
    tabRefs.current[clamped]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      focusTab(activeIndex + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      focusTab(activeIndex - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusTab(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusTab(books.length - 1);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onChange(books[activeIndex].id);
    }
  };

  return (
    <div className="md:static sticky top-3 z-20">
      <div className="rounded-2xl border border-white/15 bg-black/30 backdrop-blur px-3 py-3">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.22em] text-white/65">
            {showingLabel}
          </p>
        </div>

        <div
          className="mt-3 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Books"
          onKeyDown={onKeyDown}
        >
          {books.map((b, idx) => {
            const selected = b.id === activeId;
            return (
              <button
                key={b.id}
                ref={(el) => {
                  tabRefs.current[idx] = el;
                }}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`panel-${b.id}`}
                id={`tab-${b.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => onChange(b.id)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm border transition select-none",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent)/0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-black/60",
                  selected
                    ? "border-accent/40 bg-[rgb(var(--accent)/0.14)] text-white shadow-[0_0_0_1px_rgba(139,92,246,0.16),0_10px_30px_rgba(139,92,246,0.08)]"
                    : "border-white/15 bg-black/20 text-white/80 hover:bg-white/10"
                )}
              >
                {b.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
