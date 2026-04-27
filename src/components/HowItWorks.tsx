import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";

const steps = [
  {
    number: "01",
    title: "Capture",
    description:
      "Sensors capture real-time breath patterns and physiological signals",
  },
  {
    number: "02",
    title: "Analyze",
    description:
      "AI identifies your internal state — focus, stress, fatigue, or flow",
  },
  {
    number: "03",
    title: "Guide",
    description:
      "Receive immediate, actionable guidance tailored to your state",
  },
];

export default function HowItWorks() {
  return (
    <section id="bq" className="px-6 py-24 md:px-[60px] md:py-[120px]">
      <div className="mx-auto max-w-[1100px]">

        <SectionReveal>
          <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
            <span className="block h-px w-6 bg-[var(--muted)]" />
            How It Works
          </div>

          <p className="mb-16 max-w-[700px] font-['Playfair_Display'] text-[clamp(22px,3vw,38px)] font-bold leading-[1.3] tracking-[-0.5px] text-[var(--text)]">
            A real-time system that reads your breath and guides your actions{" "}
            <em className="not-italic text-[var(--blue)]">
              before you act.
            </em>
          </p>
        </SectionReveal>

        {/* IMAGE */}
        <SectionReveal>
          <div className="relative mb-12 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)]">
            <Image
              src="/images/bq-process.jpg"
              alt="BRemind process"
              width={1400}
              height={800}
              className="w-full object-cover opacity-90"
            />
          </div>
        </SectionReveal>

        {/* STEPS */}
        <div className="grid gap-px overflow-hidden rounded-2xl bg-[var(--border)] md:grid-cols-3">
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

