import SectionReveal from "@/components/SectionReveal";

const useCases = [
  {
    icon: "💼",
    context: "Before a meeting",
    title: "Enter with clarity",
    description:
      "Align your state before important conversations so you communicate clearly and confidently.",
    outcome: "Clearer execution",
  },
  {
    icon: "📚",
    context: "Before studying",
    title: "Shift into focus",
    description:
      "Move into a focused state before deep work, studying, or learning sessions.",
    outcome: "Better attention",
  },
  {
    icon: "⚖️",
    context: "Before a decision",
    title: "Know your state first",
    description:
      "Understand whether you are acting from clarity, stress, fatigue, or impulse.",
    outcome: "Better decisions",
  },
  {
    icon: "🗣️",
    context: "Difficult conversation",
    title: "Respond, don’t react",
    description:
      "Regulate your emotional state before high-pressure or sensitive conversations.",
    outcome: "Emotional control",
  },
  {
    icon: "⚡",
    context: "During performance",
    title: "Stay composed",
    description:
      "Maintain calm, focus, and control when the moment matters most.",
    outcome: "Precision under pressure",
  },
  {
    icon: "🔁",
    context: "After every action",
    title: "Train the system",
    description:
      "Review, reset, and train your internal state to perform better next time.",
    outcome: "Long-term growth",
  },
];

export default function Skills() {
  return (
    <section id="usecases" className="px-6 py-24 md:px-[60px] md:py-[120px]">
      <div className="mx-auto max-w-[1100px]">
        <SectionReveal>
          <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
            <span className="block h-px w-6 bg-[var(--muted)]" />
            Use Cases
          </div>

          <p className="mb-12 max-w-[700px] font-['Playfair_Display'] text-[clamp(22px,3vw,38px)] font-bold leading-[1.3] tracking-[-0.5px] text-[var(--text)]">
            Right state → right action →{" "}
            <em className="not-italic text-[var(--blue)]">better outcome.</em>
          </p>
        </SectionReveal>

        <div className="mb-14 flex flex-wrap gap-2.5">
          {["Founders", "Students", "Professionals", "Athletes", "Creators"].map(
            (persona) => (
              <div
                key={persona}
                className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-[13px] font-medium text-[var(--text)] transition hover:border-[rgba(79,158,255,0.3)] hover:bg-[rgba(79,158,255,0.06)]"
              >
                {persona}
              </div>
            )
          )}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item, idx) => (
            <SectionReveal
              key={item.title}
              delay={idx * 0.06}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-7 transition hover:-translate-y-1 hover:border-[rgba(79,158,255,0.2)]"
            >
              <div className="mb-3 text-2xl">{item.icon}</div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.07em] text-[var(--muted)]">
                {item.context}
              </p>
              <h4 className="mb-2 text-[15px] font-semibold text-[var(--text)]">
                {item.title}
              </h4>
              <p className="mb-3 text-[13px] leading-[1.5] text-[var(--muted)]">
                {item.description}
              </p>
              <span className="inline-block rounded-md bg-[var(--blue-dim)] px-2.5 py-1 text-xs font-semibold text-[var(--blue)]">
                {item.outcome}
              </span>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

