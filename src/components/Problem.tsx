import SectionReveal from "@/components/SectionReveal";

const problems = [
  {
    icon: "📱",
    title: "We track external signals",
    description: "Steps. Calories. Sleep. Heart rate.",
  },
  {
    icon: "🫁",
    title: "We ignore internal state",
    description:
      "The one system that controls how we think, feel, and perform — our breath.",
  },
  {
    icon: "⚡",
    title: "We act without awareness",
    description:
      "We make decisions without checking whether we are calm, clear, reactive, or ready.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="bg-[var(--surface)] px-6 py-24 md:px-[60px] md:py-[120px]">
      <div className="mx-auto max-w-[1100px]">
        <SectionReveal>
          <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
            <span className="block h-px w-6 bg-[var(--muted)]" />
            The Problem
          </div>

          <p className="mb-14 max-w-[760px] font-['Playfair_Display'] text-[clamp(24px,3.4vw,44px)] font-bold leading-[1.18] tracking-[-0.7px] text-[var(--text)]">
            We track everything outside us. But we rarely check the system inside us.
          </p>
        </SectionReveal>

        <div className="grid gap-4 md:grid-cols-3">
          {problems.map((item, idx) => (
            <SectionReveal
              key={item.title}
              delay={idx * 0.08}
              className="rounded-2xl border border-[var(--border)] bg-[rgba(8,12,26,0.86)] p-7 shadow-[0_24px_70px_-45px_rgba(0,0,0,0.75)] transition hover:-translate-y-1 hover:border-[rgba(79,158,255,0.28)] hover:bg-[var(--surface2)]"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-white/[0.03] text-[22px]">
                {item.icon}
              </div>
              <h3 className="mb-2 text-[16px] font-semibold text-[var(--text)]">
                {item.title}
              </h3>
              <p className="text-sm leading-[1.65] text-[var(--muted)]">
                {item.description}
              </p>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="mt-14 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-[var(--border)] bg-[rgba(8,12,26,0.82)] p-7">
            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--blue)]">
              What we don&apos;t check
            </span>
            {["Your internal state", "Your breath pattern", "Your readiness before decisions"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-b border-[var(--border)] py-3 text-sm font-medium text-[var(--text)] last:border-b-0"
                >
                  <span className="text-[var(--blue)]">→</span>
                  {item}
                </div>
              )
            )}
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[linear-gradient(135deg,rgba(79,158,255,0.07),rgba(255,126,63,0.05))] p-7">
            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--orange)]">
              What we already check
            </span>
            {["Phone battery before leaving", "Time before a meeting", "Calendar before a call"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-b border-[var(--border)] py-3 text-sm text-[var(--muted)] last:border-b-0"
                >
                  <span className="text-[var(--orange)]">✓</span>
                  {item}
                </div>
              )
            )}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}