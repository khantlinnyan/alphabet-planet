import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Why It Works", href: "#why-it-works" },
  { label: "Stories", href: "#features" },
  { label: "Parents", href: "#parents" },
  { label: "Free Sample", href: "#free-sample" },
];

export default function HeroNav() {
  return (
    <nav className="flex items-center justify-between">
      <div className="text-sm tracking-wide text-white/70">
        <a href="#top" className="text-white/90 hover:text-white transition">
          Alphabet Planet
        </a>
        <span className="mx-2 text-white/25">/</span>
        <span className="text-white/55">Playful Phonics</span>
      </div>

      <div className="hidden md:flex items-center gap-6 text-sm text-white/60">
        {navItems.map((n) => (
          <Link
            key={n.href}
            href={n.href}
            className="hover:text-white/90 transition"
          >
            {n.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
