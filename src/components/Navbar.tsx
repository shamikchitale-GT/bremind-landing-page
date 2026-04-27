"use client";

export default function Navbar() {
  const links = [
    { label: "Science", href: "#science" },
    { label: "Method", href: "#method" },
    { label: "Benefits", href: "#benefits" },
    { label: "How It Works", href: "#how-it-works" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[rgba(4,5,13,0.75)] border-b border-[var(--border)]">
      <nav className="mx-auto flex h-[80px] max-w-[1200px] items-center justify-between px-6">

        {/* LOGO (GRADIENT TEXT EXACT) */}
        <a href="#" className="text-[1.2rem] font-semibold tracking-tight bg-gradient-to-r from-[#4f9eff] to-[#ff7e3f] bg-clip-text text-transparent">
          BRemind
        </a>

        {/* LINKS */}
        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.9rem] text-[var(--muted)] transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA BUTTON */}
        <a
          href="#early-access"
          className="rounded-full border border-[var(--border)] bg-[var(--surface2)] px-5 py-2 text-[0.85rem] text-white transition hover:border-[var(--blue)] hover:shadow-[0_0_20px_var(--blue-glow)]"
        >
          Join Waitlist
        </a>
      </nav>
    </header>
  );
}
