import { siteContent } from "../content/site-content";

export default function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="relative mx-auto max-w-6xl px-6 pb-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-6">
            <p className="text-xs uppercase tracking-[0.22em] text-white/55">
              {footer.newsletter.eyebrow}
            </p>
            <h3 className="mt-3 font-[var(--font-serif)] text-2xl md:text-3xl">
              {footer.newsletter.title}
            </h3>
            <p className="mt-3 text-white/65">{footer.newsletter.desc}</p>
          </div>

          <div className="md:col-span-6">
            <form className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-end">
              <input
                type="email"
                placeholder={footer.newsletter.placeholder}
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/80 placeholder:text-white/35 outline-none focus:border-accent/40"
              />
              <button
                type="button"
                className="rounded-2xl bg-accent/90 hover:bg-accent transition px-5 py-3 text-sm text-white shadow-glow"
              >
                {footer.newsletter.button}
              </button>
            </form>

            <div className="mt-6 flex flex-wrap gap-3 justify-start sm:justify-end text-sm text-white/60">
              {footer.contactLinks.map((l, idx) => (
                <span key={l.href} className="flex items-center gap-3">
                  <a className="hover:text-white/90 transition" href={l.href}>
                    {l.label}
                  </a>
                  {idx !== footer.contactLinks.length - 1 ? (
                    <span className="text-white/25">•</span>
                  ) : null}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-white/45">
          <p>
            © {new Date().getFullYear()} {footer.copyrightName}. All rights
            reserved.
          </p>
          <p>{footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
