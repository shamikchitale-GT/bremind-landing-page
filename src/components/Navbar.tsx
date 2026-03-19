export default function Navbar() {
  const links = [
    { label: "Science", href: "#science" },
    { label: "Method", href: "#method" },
    { label: "Benefits", href: "#benefits" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Early Access", href: "#early-access" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/6 bg-[#FBFBFA]/88 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#" className="text-[1.05rem] font-semibold tracking-tight text-slate-950">
          BRemind
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700/95 transition hover:text-slate-950"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#early-access"
          className="inline-flex h-10 items-center justify-center rounded-full border border-cyan-200/60 bg-white/78 px-4 text-sm font-medium text-slate-900 shadow-[0_12px_30px_-20px_rgba(15,23,42,0.55)] transition hover:-translate-y-0.5 hover:bg-white"
        >
          Join Waitlist
        </a>
      </nav>
    </header>
  );
}

