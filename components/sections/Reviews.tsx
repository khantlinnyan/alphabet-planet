import Section from "./Section";
import { siteContent } from "@/content/siteContent";

export default function Reviews() {
  const { reviews } = siteContent;

  return (
    <Section id="reviews" eyebrow={reviews.eyebrow} title={reviews.title}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div data-reveal className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <p className="text-xs uppercase tracking-[0.22em] text-white/55">
              {reviews.featured.label}
            </p>
            <p className="mt-4 font-[var(--font-serif)] text-2xl leading-snug">
              “{reviews.featured.quote}”
            </p>
            <p className="mt-4 text-sm text-white/55">{reviews.featured.byline}</p>
          </div>
        </div>

        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reviews.cards.map((q) => (
            <div
              key={q.quote}
              data-reveal
              className="rounded-3xl border border-white/10 bg-black/20 p-6 text-white/70"
            >
              <p className="leading-relaxed">“{q.quote}”</p>
              <p className="mt-4 text-xs text-white/50">{q.byline}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
