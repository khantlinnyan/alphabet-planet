import ChapterReveals from "../animation/chapter-reveals";
import LeadCaptureForm from "./lead-capture-form";

export default function Hero() {
  return (
    <header className="relative mx-auto max-w-6xl px-6 pt-16 md:pt-24 pb-16">
      <ChapterReveals />

      <nav className="flex items-center justify-between">
        <div className="text-sm tracking-wide text-white/70">
          <span className="text-white/90">Alphabet Planet</span>
          <span className="mx-2 text-white/25">/</span>
          <span className="text-white/55">Playful Phonics</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm text-white/60">
          {[
            { label: "Why It Works", href: "#why-it-works" },
            { label: "Parents", href: "#parents" },
            { label: "Schools", href: "#schools" },
            { label: "Free Sample", href: "#free-sample" },
          ].map((n) => (
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

      <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <p
            data-reveal
            className="text-xs uppercase tracking-[0.24em] text-white/55"
          >
            Ages 2-5 | Reading readiness through play
          </p>

          <h1
            data-reveal
            className="mt-4 font-[var(--font-serif)] text-4xl md:text-6xl leading-[1.02]"
          >
            Make reading readiness feel like playtime.
          </h1>

          <p
            data-reveal
            className="mt-5 text-lg md:text-xl text-white/80 max-w-xl"
          >
            Meet 26 alien characters who turn every letter into a story,
            song, and movement moment so kids remember sounds before formal
            reading begins.
          </p>

          <div
            data-reveal
            className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
          >
            <a
              href="#free-sample"
              className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm
                         bg-accent/90 hover:bg-accent transition text-white shadow-glow"
            >
              Get Free Sample Lesson
            </a>
            <a
              href="#schools"
              className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm
                         border border-white/15 bg-white/5 hover:bg-white/10 transition text-white/85"
            >
              For Schools
            </a>
          </div>

          <div
            data-reveal
            className="mt-6 flex flex-wrap gap-2 text-xs text-white/55"
          >
            {[
              "10-minute lessons",
              "No-pressure learning",
              "Story + song + movement",
              "Created by Teacher Terry",
            ].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
              >
                {chip}
              </span>
            ))}
          </div>

          <div data-reveal className="mt-8">
            <LeadCaptureForm idPrefix="hero-lead" />
          </div>

          <p data-reveal className="mt-4 text-xs text-white/55">
            Built by Teacher Terry | 18+ years in early childhood classrooms.
          </p>
        </div>

        <div className="md:col-span-5">
          <div
            data-reveal
            className="relative mx-auto w-full max-w-[360px] md:max-w-none aspect-square"
          >
            <div
              aria-hidden
              className="absolute inset-0 rounded-[34%] border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(143,0,255,0.25),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.2),transparent_62%)] shadow-glow animate-float"
            />
            <div
              aria-hidden
              className="absolute inset-6 rounded-[30%] border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.12),transparent_60%)]"
            />

            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_40%_30%,rgba(110,231,183,0.85),rgba(16,185,129,0.7))] shadow-glow animate-float-slow"
            >
              <div className="absolute left-[32%] top-[36%] h-6 w-6 rounded-full bg-white/80" />
              <div className="absolute right-[32%] top-[36%] h-6 w-6 rounded-full bg-white/80" />
              <div className="absolute left-1/2 top-[62%] h-3 w-8 -translate-x-1/2 rounded-full bg-black/30" />
            </div>

            <div
              aria-hidden
              className="absolute -right-6 -bottom-4 h-16 w-16 rounded-full bg-[radial-gradient(circle,rgba(143,0,255,0.7),transparent_60%)] opacity-80 blur-[1px]"
            />
            <div
              aria-hidden
              className="absolute left-5 top-6 h-10 w-10 rounded-full bg-white/10 blur-sm"
            />
          </div>

          <p className="mt-4 text-center text-xs text-white/55">
            Floating 3D alien placeholder
          </p>
        </div>
      </div>

      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
        <a
          href="#free-sample"
          className="flex items-center justify-center rounded-full px-6 py-3 text-sm
                     bg-accent/90 hover:bg-accent transition text-white shadow-glow"
        >
          Get Free Sample Lesson
        </a>
      </div>
    </header>
  );
}
