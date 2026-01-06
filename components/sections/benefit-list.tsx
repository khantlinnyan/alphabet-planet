function Icon({ name }: { name: "spark" | "book" | "clock" | "star" }) {
  // Simple inline SVG icons (no deps)
  const common = "h-4 w-4 text-white/85";
  switch (name) {
    case "spark":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 2l1.6 6.2L20 10l-6.4 1.8L12 18l-1.6-6.2L4 10l6.4-1.8L12 2z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      );
    case "book":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M6 4h10a2 2 0 0 1 2 2v14H8a2 2 0 0 0-2 2V4z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path d="M6 20h12" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "clock":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M12 7v6l4 2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "star":
    default:
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 3l2.6 5.7 6.2.6-4.7 4.1 1.4 6.1L12 16.9 6.5 19.5l1.4-6.1L3.2 9.3l6.2-.6L12 3z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      );
  }
}

type Benefit = {
  icon: "spark" | "book" | "clock" | "star";
  title: string;
  desc: string;
};

export default function BenefitList({
  benefits,
  bestFor,
}: {
  benefits: Benefit[];
  bestFor: string;
}) {
  // Ensure 3 benefit cards + 1 Best for card
  const firstThree = (benefits ?? []).slice(0, 3);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list">
      {firstThree.map((b) => (
        <div
          key={b.title}
          role="listitem"
          className="rounded-3xl border border-white/15 bg-white/[0.06] p-5"
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-2xl border border-white/15 bg-black/25">
              <Icon name={b.icon} />
            </span>
            <div>
              <p className="text-white font-medium">{b.title}</p>
              <p className="mt-1 text-sm text-white/80 leading-relaxed">
                {b.desc}
              </p>
            </div>
          </div>
        </div>
      ))}

      <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-5">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-2xl border border-white/15 bg-black/25">
            <Icon name="star" />
          </span>
          <div>
            <p className="text-white font-medium">Best for</p>
            <p className="mt-1 text-sm text-white/80 leading-relaxed">
              {bestFor || "Families who want calm, consistent progress."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
