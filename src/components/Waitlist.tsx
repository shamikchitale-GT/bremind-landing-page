import SectionReveal from "@/components/SectionReveal";

export default function Waitlist() {
  return (
    <section
      id="waitlist"
      className="relative overflow-hidden bg-[var(--surface)] px-6 py-24 md:px-[60px] md:py-[120px]"
    >
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(79,158,255,0.08)_0%,transparent_70%)]" />

      <SectionReveal className="relative z-[1] mx-auto max-w-[820px] text-center">
        <div className="rounded-[28px] border border-[var(--border)] bg-[rgba(8,12,26,0.88)] px-7 py-12 shadow-[0_30px_100px_-60px_rgba(79,158,255,0.55)] md:px-14 md:py-16">
          <p className="mb-5 font-['Playfair_Display'] text-[clamp(28px,4vw,52px)] font-bold leading-[1.12] tracking-[-1px] text-[var(--text)]">
            Two people. Same skill.
            <br />
            Different breath. Different result.
          </p>

          <p className="mx-auto mb-9 max-w-[560px] text-[16px] font-light leading-[1.7] text-[var(--muted)]">
            Now imagine if one of them trains their breath daily. Start your
            Breath Intelligence journey and learn to operate with clarity.
          </p>

          <a
            href="YOUR_FORM_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-gradient-to-br from-[var(--blue)] to-[#2d6fd4] px-8 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(79,158,255,0.35)]"
          >
            Join the Waitlist
          </a>

          <p className="mt-5 text-xs text-[var(--muted)]">
            Operate with clarity. Perform with precision.
          </p>
        </div>
      </SectionReveal>
    </section>
  );
}
