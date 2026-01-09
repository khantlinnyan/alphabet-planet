import Section from "./section";

export default function ProblemSolution() {
  return (
    <Section
      id="why-it-works"
      eyebrow="The Academic Gap"
      title="Phonics fails early when it feels like school."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        <div
          data-reveal
          className="md:col-span-6 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-white/55">
            Why it misses ages 2-4
          </p>
          <h3 className="mt-3 font-[var(--font-serif)] text-2xl">
            Too academic. Too early. Too boring.
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>Built for 5+ reading readiness, not playful discovery.</li>
            <li>Worksheet-heavy formats drain curiosity fast.</li>
            <li>Little movement or story means low memory.</li>
          </ul>
        </div>

        <div
          data-reveal
          className="md:col-span-6 rounded-3xl border border-white/10 bg-black/30 p-6 md:p-7"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-white/55">
            The Alphabet Planet fix
          </p>
          <h3 className="mt-3 font-[var(--font-serif)] text-2xl">
            Play, story, and movement lock in sounds.
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>26 alien characters make letters feel like friends.</li>
            <li>Songs and motion create stickier memory.</li>
            <li>Short, joyful sessions build confidence without pressure.</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
