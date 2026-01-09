import { cn } from "@/components/lib/cn";

type LeadCaptureFormProps = {
  className?: string;
  idPrefix?: string;
  title?: string;
  description?: string;
  ctaLabel?: string;
};

export default function LeadCaptureForm({
  className,
  idPrefix = "lead",
  title = "Free Sample Lesson Pack",
  description = "1 letter lesson - Story + song + printable - PDF + video - Takes 10 minutes",
  ctaLabel = "Get Free Sample Lesson",
}: LeadCaptureFormProps) {
  const audienceId = `${idPrefix}-audience`;
  const emailId = `${idPrefix}-email`;

  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6 shadow-glow",
        className
      )}
    >
      <p className="text-xs uppercase tracking-[0.22em] text-white/60">
        {title}
      </p>
      <p className="mt-2 text-sm text-white/70">{description}</p>

      <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-white/60">
        {["Instant download", "No pressure", "Parent + teacher friendly", "Try it today"].map(
          (item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
            >
              {item}
            </span>
          )
        )}
      </div>

      <form className="mt-4 grid gap-3">
        <label className="text-xs text-white/60" htmlFor={audienceId}>
          I am a
          <select
            id={audienceId}
            name="audience"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/85 outline-none focus:border-accent/40"
            defaultValue="parent"
          >
            <option value="parent">Parent / Caregiver</option>
            <option value="school">School / Preschool</option>
          </select>
        </label>

        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="sr-only" htmlFor={emailId}>
            Email address
          </label>
          <input
            id={emailId}
            type="email"
            placeholder="Enter your email"
            className="w-full flex-1 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/85 placeholder:text-white/35 outline-none focus:border-accent/40"
          />
          <button
            type="submit"
            className="rounded-2xl bg-accent/90 hover:bg-accent transition px-5 py-3 text-sm text-white shadow-glow"
          >
            {ctaLabel}
          </button>
        </div>
      </form>

      <p className="mt-3 text-xs text-white/50">
        We never share your email. Unsubscribe anytime.
      </p>
    </div>
  );
}
