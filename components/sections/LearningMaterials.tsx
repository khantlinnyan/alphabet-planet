import Section from "./Section";
import { siteContent } from "@/content/siteContent";

export default function LearningMaterials() {
  const { learningMaterials } = siteContent;

  return (
    <Section
      id="materials"
      eyebrow={learningMaterials.eyebrow}
      title={learningMaterials.title}
    >
      <div className="max-w-3xl">
        <p data-reveal className="text-white/70 leading-relaxed">
          {learningMaterials.intro}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {learningMaterials.materials.map((m) => (
          <div
            key={m.title}
            data-reveal
            className="rounded-3xl border border-white/10 bg-black/20 p-7"
          >
            <h3 className="font-[var(--font-serif)] text-2xl">{m.title}</h3>
            <p className="mt-3 text-white/70 leading-relaxed">{m.desc}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {m.chips.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        <div className="md:col-span-5">
          <div data-reveal className="rounded-3xl border border-white/10 bg-white/5 p-7">
            <p className="text-xs uppercase tracking-[0.22em] text-white/55">
              Workflow
            </p>
            <h4 className="mt-3 font-[var(--font-serif)] text-2xl leading-tight">
              {learningMaterials.combine.title}
            </h4>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              {learningMaterials.combine.note}
            </p>
          </div>
        </div>

        <div className="md:col-span-7 grid grid-cols-1 gap-4">
          {learningMaterials.combine.steps.map((s) => (
            <div
              key={s.title}
              data-reveal
              className="rounded-3xl border border-white/10 bg-black/20 p-6"
            >
              <p className="text-white/85 font-medium">{s.title}</p>
              <p className="mt-2 text-white/65 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
