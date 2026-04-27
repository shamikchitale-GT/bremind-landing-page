import SectionReveal from "@/components/SectionReveal";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Know your internal state through your Breath Quotient in real time",
  },
  {
    number: "02",
    title: "Train",
    description:
      "Follow personalized, state-specific practices designed to improve your performance",
  },
  {
    number: "03",
    title: "Optimize",
    description:
      "Improve your thinking, emotional control, and decision-making through daily training",
  },
  {
    number: "04",
    title: "Upgrade",
    description:
      "Build long-term performance habits that elevate how you think, act, and perform",
  },
];

export default function Method() {
  return (
    <section
      id="method"
      className="bg-[var(--surface)] px-6 py-24 md:px-[60px] md:py-[120px]"
    >
      <div className="mx-auto max-w-[1100px]">
        <SectionReveal>
          <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
            <span className="block h-px w-6 bg-[var(--muted)]" />
            The Method
          </div>

          <p className="mb-16 max-w-[700px] font-['Playfair_Display'] text-[clamp(22px,3vw,38px)] font-bold leading-[1.3] tracking-[-0.5px] text-[var(--text)]">
            Train your breath.{" "}
            <em className="not-italic text-[var(--orange)]">
              Upgrade your mind.
            </em>
          </p>
        </SectionReveal>

        <div className="grid gap-px overflow-hidden rounded-2xl bg-[var(--border)] md:grid-cols-4">
          {steps.map((step, idx) => (
            <SectionReveal
              key={step.title}
              delay={idx * 0.08}
              className="bg-[var(--surface)] px-8 py-10 transition hover:bg-[var(--surface2)]"
            >
              <span className="mb-4 block text-[11px] font-semibold text-[var(--muted)]">
                {step.number}
              </span>

              <h3 className="mb-2 text-[15px] font-semibold text-[var(--text)]">
                {step.title}
              </h3>

              <p className="text-sm leading-[1.6] text-[var(--muted)]">
                {step.description}
              </p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

