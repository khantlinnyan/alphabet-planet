import Image from "next/image";
import Section from "./section";

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About the author"
      title="A builder of small worlds"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-5">
          <div
            data-reveal
            className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-glow"
          >
            <Image
              src="/author.jpg"
              alt="Author portrait"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 420px"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(500px 320px at 40% 20%, rgba(139,92,246,0.22), transparent 62%)",
              }}
            />
          </div>
        </div>

        <div className="md:col-span-7 space-y-6">
          <p data-reveal className="text-white/70 leading-relaxed">
            I’m Teacher Terry (U Thura Kyaw). I build story-led learning worlds
            that feel calm, playful, and easy to remember.
          </p>
          <p data-reveal className="text-white/65 leading-relaxed">
            Over time, I noticed that early resources often feel too academic
            too soon — so I started designing with imagination first:
            characters, rhythm, and gentle repetition.
          </p>

          <div data-reveal className="flex flex-wrap gap-3 pt-2">
            {[
              { label: "Instagram", href: "#" },
              { label: "YouTube", href: "#" },
              { label: "X", href: "#" },
              { label: "Email", href: "mailto:hello@example.com" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/70 hover:bg-white/10 transition"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
