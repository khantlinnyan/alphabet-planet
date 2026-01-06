"use client";

import usePrefersReducedMotion from "@/components/lib/usePrefersReducedMotion";

export default function MaterialsKit({
  title,
  desc,
  chips,
  actions,
}: {
  title: string;
  desc: string;
  chips: string[];
  actions: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
    tertiary?: { label: string; href: string };
  };
}) {
  const reduced = usePrefersReducedMotion();
  const press = reduced ? "" : "active:translate-y-[1px] active:scale-[0.99]";

  return (
    <div
      data-reveal
      className="rounded-3xl border border-white/15 bg-white/[0.06] p-7 shadow-glow"
    >
      <p className="text-xs uppercase tracking-[0.22em] text-white/65">Kit</p>

      <h3 className="mt-3 font-[var(--font-serif)] text-2xl text-white">
        {title}
      </h3>

      <p className="mt-3 text-white/85 leading-relaxed">{desc}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {chips.map((c) => (
          <span
            key={c}
            className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-xs text-white/85"
          >
            {c}
          </span>
        ))}
      </div>

      <div className="mt-7 flex flex-col sm:flex-row gap-3">
        <a
          href={actions.primary.href}
          className={[
            "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm text-white",
            "bg-accent/90 hover:bg-accent transition shadow-glow",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent)/0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-black/60",
            press,
          ].join(" ")}
        >
          {actions.primary.label}
        </a>

        <a
          href={actions.secondary.href}
          className={[
            "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm",
            "border border-white/20 bg-black/20 text-white hover:bg-white/10 transition",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent)/0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-black/60",
            press,
          ].join(" ")}
        >
          {actions.secondary.label}
        </a>
      </div>

      {actions.tertiary ? (
        <a
          href={actions.tertiary.href}
          className="mt-4 inline-flex items-center gap-2 text-sm text-white/85 hover:text-white transition
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent)/0.55)]
                     focus-visible:ring-offset-2 focus-visible:ring-offset-black/60 rounded-md px-1"
        >
          <span className="underline decoration-white/25 underline-offset-4">
            {actions.tertiary.label}
          </span>
          <span className="text-white/60">→</span>
        </a>
      ) : null}
    </div>
  );
}
