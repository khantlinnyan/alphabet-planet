import Section from "./section";

export default function SplitFunnel() {
  return (
    <Section
      id="paths"
      eyebrow="Pick Your Path"
      title="Built for parents at home and teachers in class."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          data-reveal
          id="parents"
          className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-white/55">
            For Parents
          </p>
          <h3 className="mt-3 font-[var(--font-serif)] text-2xl">
            Simple, playful, low-pressure learning.
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>10 minutes a day, easy to keep consistent.</li>
            <li>Zero worksheets or drilling.</li>
            <li>Confidence-first progress your child enjoys.</li>
          </ul>
          <div className="mt-6">
            <a
              href="#free-sample"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm
                         bg-accent/90 hover:bg-accent transition text-white shadow-glow"
            >
              Get Free Sample Lesson
            </a>
          </div>
        </div>

        <div
          data-reveal
          id="schools"
          className="rounded-3xl border border-white/10 bg-black/30 p-6 md:p-7"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-white/55">
            For Schools
          </p>
          <h3 className="mt-3 font-[var(--font-serif)] text-2xl">
            Structured, classroom-ready, and scalable.
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li>Teacher guides and ready-to-run lesson plans.</li>
            <li>Clear readiness outcomes and progression.</li>
            <li>Training support for easy adoption.</li>
          </ul>
          <div className="mt-6">
            <a
              href="#school-inquiry"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm
                         border border-white/15 bg-white/5 hover:bg-white/10 transition text-white/85"
            >
              Request School Kit
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
