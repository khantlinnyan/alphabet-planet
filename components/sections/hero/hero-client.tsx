"use client";

import Image from "next/image";
import ChapterReveals from "@/components/animation/chapter-reveals";
import SectionDivider from "@/components/sections/section-divider";
import useStickyCta from "@/components/sections/hero/use-sticky-cta";
import HeroNav from "@/components/sections/hero/hero-nav";

export default function HeroClient() {
  const { ctaRef, stickyRef, stickyMounted } = useStickyCta();

  return (
    <header id="top" className="relative overflow-visible">
      <ChapterReveals />

      <div className="relative mx-auto max-w-6xl px-6 pt-16 md:pt-24 pb-24">
        <HeroNav />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p
              data-reveal
              className="text-xs uppercase tracking-[0.24em] text-white/60"
            >
              Ages 2-5 | 26 alien characters | Story, song, play
            </p>

            <h1
              data-reveal
              className="mt-4 font-[var(--font-display)] text-4xl md:text-6xl leading-[1.02] bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Build letter-sound confidence before kindergarten.
            </h1>

            <p
              data-reveal
              className="mt-5 text-lg md:text-xl text-white/80 max-w-xl"
            >
              For ages 2-5, 26 friendly aliens teach every letter through
              stories, songs, and playful movement so sounds stick fast.
            </p>

            <div
              data-reveal
              className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <a
                href="#free-sample"
                ref={ctaRef}
                className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm
                           bg-accent/90 hover:bg-accent transition text-white shadow-glow"
              >
                Get a Free Sample Lesson
              </a>
              <a
                href="#schools"
                className="text-sm text-white/70 hover:text-white/90 transition underline decoration-white/30 underline-offset-4"
              >
                For schools →
              </a>
            </div>

            <p data-reveal className="mt-4 text-xs text-white/55">
              Built by Teacher Terry | 18+ years in early childhood classrooms.
            </p>
          </div>

          <div className="md:col-span-5">
            <div
              data-reveal
              className="relative mx-auto w-full max-w-[420px] aspect-square motion-safe:animate-hero-float"
            >
              <div
                aria-hidden
                className="absolute inset-0 rounded-[30%] border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(143,0,255,0.3),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.24),transparent_62%)] shadow-[0_30px_120px_rgba(0,0,0,0.55)]"
              />
              <div
                aria-hidden
                className="absolute inset-[12%] rounded-[28%] border border-white/10 bg-[radial-gradient(circle_at_40%_30%,rgba(255,255,255,0.16),transparent_60%)]"
              />

              {/* <div
                aria-hidden
                className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_40%_30%,rgba(56,189,248,0.95),rgba(14,116,144,0.7))] shadow-glow"
              >
                <div className="absolute left-[30%] top-[36%] h-6 w-6 rounded-full bg-white/85" />
                <div className="absolute right-[30%] top-[36%] h-6 w-6 rounded-full bg-white/85" />
                <div className="absolute left-1/2 top-[62%] h-3 w-9 -translate-x-1/2 rounded-full bg-black/30" />
              </div> */}
              <Image
                src={"/illustrations/astronaut.png"}
                alt="Hero"
                fill
                className="object-cover"
              />

              <div
                aria-hidden
                className="absolute left-1/2 top-[64%] h-[120px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 opacity-40 rotate-[-12deg]"
              />

              <div
                aria-hidden
                className="absolute right-10 top-10 h-12 w-12 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.7),transparent_60%)] opacity-70 blur-[1px]"
              />
              <div
                aria-hidden
                className="absolute left-6 bottom-10 h-8 w-8 rounded-full bg-white/10 blur-sm"
              />

              {/* <div
                aria-hidden
                className="absolute left-1/2 top-[3%] h-14 w-14 -translate-x-1/2 rounded-2xl border border-white/20 bg-black/30 shadow-glow"
              >
                <span className="flex h-full w-full items-center justify-center text-2xl font-[var(--font-display)] text-white/80">
                  A
                </span>
              </div> */}

              {[
                { left: "12%", top: "18%" },
                { left: "84%", top: "28%" },
                { left: "78%", top: "78%" },
                { left: "18%", top: "80%" },
              ].map((star, idx) => (
                <span
                  key={idx}
                  aria-hidden
                  className="absolute h-1.5 w-1.5 rounded-full bg-white/80 motion-safe:animate-star-twinkle"
                  style={{ left: star.left, top: star.top }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 hidden lg:block md:mt-20 space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">
              What you get
            </p>
            <h2 className="mt-3 font-[var(--font-display)] text-2xl md:text-3xl text-white">
              A full letter lesson you can try today.
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-white/70">
              {[
                "Story + character intro",
                "Sing-along audio",
                "Printable activity sheet",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div
            id="free-sample"
            className="relative lg:block hidden rounded-3xl border border-white/10 bg-white/[0.08] p-5 md:p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_18px_70px_rgba(143,0,255,0.35)] backdrop-blur-md"
          >
            <div
              aria-hidden
              className="absolute -inset-1 rounded-[32px] bg-[radial-gradient(circle_at_20%_20%,rgba(143,0,255,0.4),transparent_55%)] opacity-60 blur-2xl"
            />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.22em] text-white/70">
                Free Sample Lesson
              </p>
              <p className="mt-2 text-sm text-white/75">
                One letter pack. Story + song + printables. 10 minutes.
              </p>

              <form className="mt-4 flex flex-col gap-3 sm:flex-row">
                <label className="sr-only" htmlFor="hero-email">
                  Email address
                </label>
                <input
                  id="hero-email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full flex-1 rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-white/85 placeholder:text-white/40 outline-none focus:border-accent/40"
                />
                <button
                  type="submit"
                  className="rounded-2xl bg-accent/90 hover:bg-accent transition px-5 py-3 text-sm text-white shadow-[0_0_18px_rgba(143,0,255,0.6)]"
                >
                  Get a Free Sample Lesson
                </button>
              </form>

              <p className="mt-3 text-xs text-white/55">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      {stickyMounted ? (
        <div
          ref={stickyRef}
          className="fixed bottom-4 left-4 right-4 z-40 md:hidden"
          style={{ opacity: 0, transform: "translate3d(0, 8px, 0)" }}
        >
          <a
            href="#free-sample"
            className="flex items-center justify-center rounded-full px-6 py-3 text-sm
                       bg-accent/90 hover:bg-accent transition text-white shadow-glow"
          >
            Get a Free Sample Lesson
          </a>
        </div>
      ) : null}
    </header>
  );
}
