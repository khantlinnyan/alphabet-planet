import { cn } from "@/components/lib/cn";

export default function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative mx-auto max-w-6xl px-6 py-20 md:py-28",
        className
      )}
    >
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="text-xs tracking-[0.22em] uppercase text-white/55">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-3 font-[var(--font-serif)] text-3xl md:text-4xl leading-tight">
          {title}
        </h2>
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}
