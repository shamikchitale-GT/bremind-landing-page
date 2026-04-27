import SectionReveal from "@/components/SectionReveal";

const shifts = [
  {
    from: "Awareness without action",
    to: "Action guided by state",
  },
  {
    from: "Random productivity",
    to: "State-driven performance",
  },
  {
    from: "Reactive decisions",
    to: "Conscious execution",
  },
  {
    from: "External tracking",
    to: "Internal intelligence",
  },
];

export default function ParentInsights() {
  return (
    <section className="px-6 py-24 md:px-[60px] md:py-[120px]">
      <div className="mx-auto max-w-[1100px]">

        {/* HEADER */}
        <SectionReveal>
          <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
            <span className="block h-px w-6 bg-[var(--muted)]" />
            The Shift
          </div>

          <p className="mb-16 max-w-[700px] font-['Playfair_Display'] text-[clamp(22px,3vw,38px)] font-bold leading-[1.3] tracking-[-0.5px] text-[var(--text)]">
            From unconscious behavior{" "}
            <em className="not-italic text-[var(--orange)]">
              to intelligent action.
            </em>
          </p>
        </SectionReveal>

        {/* SHIFT GRID */}
        <div className="grid gap-px overflow-hidden rounded-2xl bg-[var(--border)] md:grid-cols-2">
          {shifts.map((item, idx) => (
            <SectionReveal
              key={idx}
              delay={idx * 0.08}
              className="bg-[var(--surface)] px-8 py-10 transition hover:bg-[var(--surface2)]"
            >
              <div className="flex flex-col gap-3 text-sm">

                {/* FROM */}
                <div className="flex items-center gap-2 text-[var(--muted)]">
                  <span>–</span>
                  {item.from}
                </div>

                {/* ARROW */}
                <div className="text-lg text-[var(--blue)]">→</div>

                {/* TO */}
                <div className="flex items-center gap-2 font-medium text-[var(--text)]">
                  <span>+</span>
                  {item.to}
                </div>

              </div>
            </SectionReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

