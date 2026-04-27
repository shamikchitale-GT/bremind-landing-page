import SectionReveal from "@/components/SectionReveal";

export default function Waitlist() {
  return (
    <section
      id="waitlist"
      className="relative overflow-hidden bg-[var(--surface)] px-6 py-24 md:px-[60px] md:py-[120px]"
    >
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(79,158,255,0.05)_0%,transparent_70%)]" />

      <SectionReveal className="relative z-[1] mx-auto max-w-[780px] text-center">
        <p className="mb-4 font-['Playfair_Display'] text-[clamp(22px,3.5vw,42px)] font-bold leading-[1.25] tracking-[-1px] text-[var(--text)]">
          Two people. Same skill.
          <br />
          Different breath. Different result.
        </p>

        <p className="mb-14 text-base font-light text-[var(--muted)]">
          Now imagine if one of them trains their breath daily.
        </p>

        <form className="rounded-3xl border border-[var(--border)] bg-[var(--surface2)] px-6 py-8 text-left md:px-11 md:py-10">
          <div className="mb-4 grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.06em] text-[var(--muted)]">
                First name
              </label>
              <input
                type="text"
                className="w-full rounded-[10px] border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[rgba(79,158,255,0.4)] focus:shadow-[0_0_0_3px_rgba(79,158,255,0.08)]"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.06em] text-[var(--muted)]">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-[10px] border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[rgba(79,158,255,0.4)] focus:shadow-[0_0_0_3px_rgba(79,158,255,0.08)]"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.06em] text-[var(--muted)]">
              I am a
            </label>
            <select className="w-full rounded-[10px] border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[rgba(79,158,255,0.4)] focus:shadow-[0_0_0_3px_rgba(79,158,255,0.08)]">
              <option>Founder</option>
              <option>Student</option>
              <option>Professional</option>
              <option>Athlete</option>
              <option>Creator</option>
              <option>Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="relative mt-2 w-full overflow-hidden rounded-xl bg-gradient-to-br from-[var(--blue)] to-[#2d6fd4] px-4 py-4 text-base font-bold text-white transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(79,158,255,0.3)]"
          >
            Join the Waitlist
          </button>

          <p className="mt-3.5 text-center text-xs text-[var(--muted)]">
            Operate with clarity. Perform with precision.
          </p>
        </form>
      </SectionReveal>
    </section>
  );
}
