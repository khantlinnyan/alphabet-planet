"use client";

import usePrefersReducedMotion from "@/components/lib/usePrefersReducedMotion";

export default function BookActions({
  primary,
  secondary,
  tertiary,
}: {
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  tertiary?: { label: string; href: string };
}) {
  const reduced = usePrefersReducedMotion();

  // tiny press feedback (CSS only; respects reduced motion by having no aggressive transitions)
  const press = reduced ? "" : "active:translate-y-[1px] active:scale-[0.99]";

  return (
    <div className="pt-2">
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
        <a
          href={primary?.href ?? "#buy"}
          className={[
            "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm text-white",
            "bg-accent/90 hover:bg-accent transition shadow-glow",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent)/0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-black/60",
            press,
          ].join(" ")}
        >
          {primary?.label ?? "Buy this book"}
        </a>

        <a
          href={secondary?.href ?? "#"}
          className={[
            "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm",
            "border border-white/20 bg-white/[0.06] text-white hover:bg-white/10 transition",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent)/0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-black/60",
            press,
          ].join(" ")}
        >
          {secondary?.label ?? "See sample pages"}
        </a>
      </div>

      {tertiary ? (
        <div className="mt-4">
          <a
            href={tertiary.href}
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent)/0.55)]
                       focus-visible:ring-offset-2 focus-visible:ring-offset-black/60 rounded-md px-1"
          >
            <span className="underline decoration-white/25 underline-offset-4">
              {tertiary.label}
            </span>
            <span className="text-white/60">→</span>
          </a>
        </div>
      ) : null}
    </div>
  );
}
