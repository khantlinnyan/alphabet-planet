function Icon({ name }: { name: "cards" | "audio" | "games" | "poster" }) {
  const cls = "h-4 w-4 text-white/85";
  switch (name) {
    case "audio":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 3v10a4 4 0 1 1-2-3.46V6l10-3v8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "games":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M7 15h10l2 5H5l2-5Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M9 11h6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M8 8h8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "poster":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M6 3h12v18H6V3Z" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M9 7h6M9 11h6M9 15h4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "cards":
    default:
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M6 7h12v12H6V7Z" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M8 5h12v12"
            stroke="currentColor"
            strokeWidth="1.6"
            opacity="0.6"
          />
        </svg>
      );
  }
}

function guessIcon(title: string) {
  const t = title.toLowerCase();
  if (t.includes("audio")) return "audio";
  if (t.includes("game")) return "games";
  if (t.includes("poster") || t.includes("wall")) return "poster";
  return "cards";
}

export default function MaterialsGrid({
  items,
}: {
  items: {
    title: string;
    desc: string;
    chips: string[];
    meta?: { label: string; value: string }[];
    cta?: { label: string; href: string };
  }[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((m) => (
        <div
          key={m.title}
          data-reveal
          className="rounded-3xl border border-white/15 bg-white/[0.06] p-7 transition
                     hover:bg-white/[0.08] hover:-translate-y-[2px]"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl border border-white/15 bg-black/25">
                <Icon name={guessIcon(m.title)} />
              </span>
              <div>
                <h3 className="font-[var(--font-serif)] text-2xl text-white">
                  {m.title}
                </h3>
                <p className="mt-2 text-white/85 leading-relaxed">{m.desc}</p>
              </div>
            </div>

            {m.cta ? (
              <a
                href={m.cta.href}
                className="text-sm text-white/85 hover:text-white transition
                           underline decoration-white/25 underline-offset-4"
              >
                {m.cta.label}
              </a>
            ) : null}
          </div>

          {/* Meta row (Format / Time / Use with) */}
          {m.meta?.length ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {m.meta.slice(0, 3).map((it) => (
                <span
                  key={`${m.title}-${it.label}`}
                  className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-xs text-white/85"
                >
                  <span className="text-white/70">{it.label}:</span>{" "}
                  <span className="text-white">{it.value}</span>
                </span>
              ))}
            </div>
          ) : null}

          {/* Chips (your existing chips) */}
          <div className="mt-4 flex flex-wrap gap-2">
            {(m.chips ?? []).slice(0, 3).map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs text-white/80"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
