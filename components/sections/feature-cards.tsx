import SectionDivider from "./section-divider";

const features = [
  {
    title: "Stories",
    desc: "Mini alien adventures that anchor each letter sound in memory.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M5 4h10a2 2 0 0 1 2 2v13H7a2 2 0 0 0-2 2V4z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M7 20h12"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    ),
  },
  {
    title: "Songs",
    desc: "Catchy chants that lock in sounds with rhythm and repetition.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M15 4v10.4a2.6 2.6 0 1 1-1.4-2.3V6.2l6-1.4V12a2.6 2.6 0 1 1-1.4-2.3V4.8L15 6z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    ),
  },
  {
    title: "Play",
    desc: "Movement games that turn practice into joyful, active learning.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
        <path
          d="M12 3l2.6 5.7 6.2.6-4.7 4.1 1.4 6.1L12 16.9 6.5 19.5l1.4-6.1L3.2 9.3l6.2-.6L12 3z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    ),
  },
];

export default function FeatureCards() {
  return (
    <section
      id="features"
      className="relative bg-[#0f1222] py-20 md:py-28"
    >
      <SectionDivider position="top" fill="#0f1222" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-[0.22em] uppercase text-white/60">
            Three ways they learn
          </p>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl md:text-4xl leading-tight text-white">
            Stories, songs, and play that keep tiny learners engaged.
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/70">
            Each letter lives in a short story, a sing-along hook, and a
            movement moment so kids remember sounds without pressure.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border-beam group rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-black/40 p-6 transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3 text-white/80">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-black/30">
                  {feature.icon}
                </span>
                <h3 className="font-[var(--font-display)] text-xl text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="mt-4 text-sm text-white/70">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <SectionDivider position="bottom" fill="#0b0d17" />
    </section>
  );
}
