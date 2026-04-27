export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 border-t border-[var(--border)] bg-[var(--surface)] px-6 py-10 md:px-[60px] md:py-[60px]">
      <div>
        <p className="bg-gradient-to-r from-[var(--blue)] to-[var(--orange)] bg-clip-text font-['Playfair_Display'] text-xl font-black text-transparent">
          BRemind
        </p>
        <p className="mt-1.5 text-[13px] text-[var(--muted)]">
          Measure your state. Train your mind. Upgrade your performance.
        </p>
      </div>

      <div className="flex flex-wrap gap-6">
        <a href="#bq" className="text-[13px] text-[var(--muted)] transition hover:text-[var(--text)]">
          What is BQ
        </a>
        <a href="#science" className="text-[13px] text-[var(--muted)] transition hover:text-[var(--text)]">
          Science
        </a>
        <a href="#waitlist" className="text-[13px] text-[var(--muted)] transition hover:text-[var(--text)]">
          Waitlist
        </a>
      </div>

      <p className="text-xs text-[var(--muted)]">
        © 2026 BRemind. All rights reserved.
      </p>
    </footer>
  );
}

