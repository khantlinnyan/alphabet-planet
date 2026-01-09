import Section from "./section";

const kitItems = [
  {
    title: "Storybooks",
    desc: "Short alien adventures that attach meaning to each letter.",
  },
  {
    title: "Animated Videos",
    desc: "Character-led clips that reinforce sounds fast.",
  },
  {
    title: "Songs & Chants",
    desc: "Rhythm and repetition for instant recall.",
  },
  {
    title: "Flashcards",
    desc: "Quick, playful review without pressure.",
  },
  {
    title: "Workbooks",
    desc: "Hands-on practice that stays fun and simple.",
  },
  {
    title: "Teacher Guides",
    desc: "Ready-to-run plans for homes or classrooms.",
  },
];

export default function ProductKit() {
  return (
    <Section
      id="kit"
      eyebrow="What's Inside"
      title="Everything you need - nothing extra."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {kitItems.map((item) => (
          <div
            key={item.title}
            data-reveal
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="font-[var(--font-serif)] text-xl">{item.title}</h3>
            <p className="mt-2 text-sm text-white/70">{item.desc}</p>
          </div>
        ))}
      </div>

      <p data-reveal className="mt-8 text-sm text-white/70 max-w-2xl">
        You get a complete, ready-to-use kit that builds confidence through
        play, without clutter, filler, or busywork.
      </p>
    </Section>
  );
}
