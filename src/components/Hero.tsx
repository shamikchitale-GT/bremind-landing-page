"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-24 pt-36 md:px-[60px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_75%_50%,rgba(79,158,255,0.08)_0%,transparent_60%),radial-gradient(ellipse_50%_50%_at_25%_60%,rgba(255,126,63,0.06)_0%,transparent_60%),radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(4,5,13,0.9)_0%,transparent_100%)]" />

      <div className="pointer-events-none absolute right-0 top-0 z-[1] hidden h-full w-[55%] overflow-hidden md:block">
        <Image
          src="/images/hero-brain.jpg"
          alt="BRemind hero visual"
          width={1400}
          height={900}
          priority
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[rgba(4,5,13,0.25)] to-transparent" />
      </div>

      <div className="relative z-[2] max-w-[600px]">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[rgba(79,158,255,0.3)] bg-[rgba(79,158,255,0.08)] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--blue)] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--blue)] before:shadow-[0_0_8px_var(--blue)]">
          Breath Intelligence System
        </div>

        <h1 className="mb-5 font-['Playfair_Display'] text-[clamp(40px,5.5vw,72px)] font-black leading-[1.05] tracking-[-2px] text-[var(--text)]">
          We measure IQ.
          <br />
          We measure EQ.
          <br />
          <span className="bg-gradient-to-r from-[var(--blue)] to-[var(--orange)] bg-clip-text text-transparent">
            But we never measure our breath.
          </span>
        </h1>

        <p className="mb-9 max-w-[500px] text-[17px] font-light leading-[1.7] text-[var(--muted)]">
          Introducing Breath Quotient (BQ) — a real-time system that reads your
          breath, identifies your internal state, and guides how you should act
          before you act.
        </p>

        <div className="mb-12 flex flex-wrap gap-3.5">
          <a
            href="#waitlist"
            className="relative inline-block overflow-hidden rounded-full bg-gradient-to-br from-[var(--blue)] to-[#2d6fd4] px-[30px] py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(79,158,255,0.35)]"
          >
            Start Operating Intelligently
          </a>
          <a
            href="#bq"
            className="inline-block rounded-full border border-[var(--border)] px-[30px] py-3.5 text-sm font-medium text-[var(--text)] transition hover:border-white/20 hover:bg-white/[0.04]"
          >
            Explore BQ
          </a>
        </div>

        <div className="flex flex-wrap gap-6">
          <div className="text-xs font-medium text-[var(--muted)]">
            Measure your state
          </div>
          <div className="text-xs font-medium text-[var(--muted)]">
            Train your mind
          </div>
          <div className="text-xs font-medium text-[var(--muted)]">
            Upgrade performance
          </div>
        </div>
      </div>
    </section>
  );
}

