import ChapterReveals from "../animation/chapter-reveals";
import BookCoverTilt from "../ui/book-cover-tilt";
import { siteContent } from "../content/site-content";

export default function Hero() {
  const { brand, hero } = siteContent;

  return (
    <header className="relative mx-auto max-w-6xl px-6 pt-16 md:pt-24 pb-14 md:pb-20">
      <ChapterReveals />

      <nav className="flex items-center justify-between">
        <div className="text-sm tracking-wide text-white/70">
          <span className="text-white/90">{brand.authorName}</span>
          <span className="mx-2 text-white/25">/</span>
          <span className="text-white/55">{brand.siteTagline}</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm text-white/60">
          {brand.nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="hover:text-white/90 transition"
            >
              {n.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <p
            data-reveal
            className="text-xs uppercase tracking-[0.22em] text-white/55"
          >
            {hero.eyebrow}
          </p>

          <h1
            data-reveal
            className="mt-4 font-[var(--font-serif)] text-4xl md:text-6xl leading-[1.04]"
          >
            {hero.title}
          </h1>

          <p
            data-reveal
            className="mt-5 text-lg md:text-xl text-white/70 max-w-xl"
          >
            {hero.promise}
          </p>

          <p data-reveal className="mt-4 text-sm text-white/55 max-w-xl">
            {hero.subtext}
          </p>

          <div data-reveal className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={hero.ctas.primary.href}
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm
                         bg-accent/90 hover:bg-accent transition text-white shadow-glow"
            >
              {hero.ctas.primary.label}
            </a>
            <a
              href={hero.ctas.secondary.href}
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm
                         border border-white/15 bg-white/5 hover:bg-white/10 transition text-white/85"
            >
              {hero.ctas.secondary.label}
            </a>
          </div>

          <div
            data-reveal
            className="mt-10 flex flex-wrap gap-2 text-xs text-white/55"
          >
            {hero.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="md:col-span-5">
          <div data-reveal className="md:justify-self-end">
            <BookCoverTilt
              imageSrc={hero.cover.imageSrc}
              alt={hero.cover.alt}
              badge={hero.cover.badge}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
