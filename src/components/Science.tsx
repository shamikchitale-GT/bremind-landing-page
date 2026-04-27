import SectionReveal from "@/components/SectionReveal";

const scienceCards = [
  {
    label: "Ancient Intelligence",
    title: "Swara Yoga",
    description:
      "Ancient systems understood how breath patterns influence brain function, emotion, and awareness long before modern science.",
  },
  {
    label: "Modern Neuroscience",
    title: "Cognitive & Emotional Impact",
    description:
      "Research confirms that breath directly affects cognition, focus, emotional regulation, and decision-making pathways.",
  },
  {
    label: "Real-Time Application",
    title: "BRemind System",
    description:
      "We transform this knowledge into a real-time system that reads your state and helps you optimize it instantly.",
  },
];

export default function Science() {
  return (
    <section
      id="science"
      className="px-6 py-24 md:px-[60px] md:py-[120px]"
    >
      <div className="mx-auto grid max-w-[1100px] items-start gap-16 md:grid-cols-2">

        {/* LEFT TEXT */}
        <SectionReveal>
          <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
            <span className="block h-px w-6 bg-[var(--muted)]" />
            The Science
          </div>

          <p className="mb-6 font-['Playfair_Display'] text-[clamp(22px,3vw,38px)] font-bold leading-[1.3] tracking-[-0.5px] text-[var(--text)]">
            Where ancient knowledge{" "}
            <em className="not-italic text-[var(--blue)]">
              meets modern science.
            </em>
          </p>

          <p className="mb-4 text-[15px] leading-[1.7] text-[var(--muted)]">
            Breath has always been the bridge between body and mind. Ancient
            systems understood how breath influences thought, emotion, and
            performance long before modern science could explain it.
          </p>

          <p className="text-[15px] leading-[1.7] text-[var(--muted)]">
            Today, neuroscience confirms that breath directly impacts cognition,
            emotional regulation, and decision-making. BRemind brings these
            insights together into a real-time performance system.
          </p>
        </SectionReveal>

        {/* RIGHT CARDS */}
        <div className="space-y-4">
          {scienceCards.map((card, idx) => (
            <SectionReveal
              key={card.title}
              delay={idx * 0.08}
              className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-7 py-7 transition hover:border-white/10 hover:bg-[var(--surface2)]"
            >
              <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
                {card.label}
              </span>

              <h3 className="mb-2 text-[15px] font-semibold text-[var(--text)]">
                {card.title}
              </h3>

              <p className="text-sm leading-[1.6] text-[var(--muted)]">
                {card.description}
              </p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

