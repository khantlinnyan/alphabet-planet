import Image from "next/image";
import Section from "./section";
import { featureSteps, FeatureStep } from "@/components/content/feature-steps";

type FeatureCardProps = {
  step: FeatureStep;
  revealDelay: number;
};

function FeatureCard({ step, revealDelay }: FeatureCardProps) {
  return (
    <div
      data-reveal
      data-reveal-delay={revealDelay}
      className="group relative min-w-[260px] snap-center rounded-[24px] border border-white/10 bg-gradient-to-br from-[#11162a] via-[#0f1222] to-[#0b0d17] p-5 shadow-[0_12px_36px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none md:min-w-0 md:p-7"
    >
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-white/60">
        <span>Step {step.step}</span>
      </div>

      <div className="relative mt-5 h-[140px] md:h-[200px]">
        <div
          aria-hidden
          className="absolute left-4 top-6 h-[110px] w-[110px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.18),transparent_68%)] md:h-[150px] md:w-[150px]"
        />
        <svg
          aria-hidden
          className="absolute -left-2 top-3 h-24 w-24 text-white/20"
          viewBox="0 0 120 120"
          fill="none"
        >
          <path
            d="M16 80 C40 24 88 24 104 80"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeDasharray="3 6"
          />
        </svg>
        <div className="relative ml-2 h-full w-full">
          <Image
            src={step.image}
            alt={step.alt}
            width={220}
            height={220}
            loading="lazy"
            className="h-full w-auto max-w-[200px] object-contain transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none"
          />
        </div>
      </div>

      <div className="mt-5 space-y-3 text-left">
        <h3 className="font-[var(--font-display)] text-xl text-white">
          {step.title}
        </h3>
        <p className="text-sm text-white/80">{step.description}</p>
        <p className="text-sm text-white/60">{step.why}</p>
      </div>
    </div>
  );
}

export default function FeatureCards() {
  return (
    <Section id="features" className="">
      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="max-w-2xl md:max-w-[60%]">
          <p className="text-xs tracking-[0.22em] uppercase text-white/75">
            How children learn on Alphabet Planet
          </p>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl md:text-4xl leading-tight text-white">
            Little learners remember sounds best when learning feels like play —
            not lessons.
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/80">
            Each letter is introduced through a gentle story, a simple song, and
            playful movement — so children aged 2-5 learn naturally, without
            pressure or drills.
          </p>
          <p className="mt-3 text-xs text-white/65">
            Designed by an early childhood educator with 18+ years of classroom
            experience.
          </p>
        </div>

        <div className="relative mt-10 md:mt-12">
          <div
            aria-hidden
            className="pointer-events-none absolute left-6 right-6 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-cyan-400/20 md:block"
          />

          <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 pr-2 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
            {featureSteps.map((step, index) => (
              <FeatureCard
                key={step.step}
                step={step}
                revealDelay={index * 0.14}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
