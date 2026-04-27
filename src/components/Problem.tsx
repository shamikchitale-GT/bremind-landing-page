import SectionReveal from "@/components/SectionReveal";

const problems = [
  {
    icon: "📱",
    title: "External tracking",
    description: "Steps. Calories. Sleep. Heart rate.",
  },
  {
    icon: "🫁",
    title: "Internal system ignored",
    description:
      "The one system that controls how we think, feel, and perform — our breath.",
  },
  {
    icon: "⚡",
    title: "Decisions without state awareness",
    description:
      "We check batteries, calendars, and time — but not our internal state before acting.",
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

          <p className="mb-16 max-w-[700px] font-['Playfair_Display'] text-[clamp(22px,3vw,38px)] font-bold leading-[1.3] tracking-[-0.5px] text-[var(--text)]">
            We track everything. But we ignore the one system that controls how
            we <em className="not-italic text-[var(--orange)]"> think, feel, and perform.</em>
          </p>
        </SectionReveal>

        <div className="grid gap-px overflow-hidden rounded-2xl bg-[var(--border)] md:grid-cols-3">
          {problems.map((item, idx) => (
            <SectionReveal
              key={item.title}
              delay={idx * 0.08}
              className={`bg-[var(--surface)] px-8 py-9 transition hover:bg-[var(--surface2)] ${
                idx === 1
                  ? "border-t-2 border-[var(--orange)] bg-[linear-gradient(180deg,rgba(255,126,63,0.06),var(--surface))]"
                  : ""
              }`}
            >
              <div className="mb-4 text-[28px]">{item.icon}</div>
              <h3
                className={`mb-2.5 text-base font-semibold ${
                  idx === 1 ? "text-[var(--orange)]" : "text-[var(--text)]"
                }`}
              >
                {item.title}
              </h3>
              <p className="text-sm leading-[1.6] text-[var(--muted)]">
                {item.description}
              </p>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="mt-[60px] grid overflow-hidden rounded-2xl bg-[var(--border)] md:grid-cols-2">
          <div className="bg-white/[0.02] px-9 py-10">
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--muted)]">
              What we check
            </span>
            {["Phone battery before leaving", "Time before a meeting", "Calendar before a call"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-b border-[var(--border)] py-3 text-sm text-[var(--muted)] last:border-b-0"
                >
                  <span className="text-lg">✓</span>
                  {item}
                </div>
              )
            )}
          </div>

          <div className="bg-[linear-gradient(135deg,rgba(79,158,255,0.05),rgba(255,126,63,0.05))] px-9 py-10">
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--blue)]">
              What we don&apos;t check
            </span>
            {["Your internal state", "Your breath pattern", "Your readiness before decisions"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-b border-[var(--border)] py-3 text-sm text-[var(--text)] last:border-b-0"
                >
                  <span className="text-lg">→</span>
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