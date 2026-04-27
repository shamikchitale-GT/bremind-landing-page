import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";

const steps = [
  {
    number: "01",
    title: "Capture",
    description:
      "Sensors capture real-time breath patterns and physiological signals.",
  },
  {
    number: "02",
    title: "Analyze",
    description:
      "AI identifies your internal state — focus, stress, fatigue, or flow.",
  },
  {
    number: "03",
    title: "Guide",
    description:
      "Receive immediate, actionable guidance tailored to your state.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-24 md:px-[60px] md:py-[120px]">
      <div className="mx-auto max-w-[1100px]">
        <SectionReveal>
          <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
            <span className="block h-px w-6 bg-[var(--muted)]" />
            How It Works
          </div>

          <p className="mb-12 max-w-[720px] font-['Playfair_Display'] text-[clamp(24px,3.4vw,44px)] font-bold leading-[1.18] tracking-[-0.7px] text-[var(--text)]">
            A real-time system that reads your breath and guides your actions{" "}
            <em className="not-italic text-[var(--blue)]">before you act.</em>
          </p>
        </SectionReveal>

        <SectionReveal>
          <div className="mx-auto mb-12 max-w-[620px] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_28px_80px_-50px_rgba(79,158,255,0.55)]">
            <Image
              src="/images/bq-process.jpg"
              alt="BRemind process"
              width={1200}
              height={700}
              className="h-auto w-full object-contain opacity-95"
            />
          </div>
        </SectionReveal>

        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step, idx) => (
            <SectionReveal
              key={step.title}
              delay={idx * 0.08}
              className="rounded-2xl border border-[var(--border)] bg-[rgba(8,12,26,0.86)] p-7 shadow-[0_24px_70px_-48px_rgba(0,0,0,0.75)] transition hover:-translate-y-1 hover:border-[rgba(79,158,255,0.28)] hover:bg-[var(--surface2)]"
            >
              <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-white/[0.03] text-xs font-semibold text-[var(--blue)]">
                {step.number}
              </span>
              <h3 className="mb-2 text-[16px] font-semibold text-[var(--text)]">
                {step.title}
              </h3>
              <p className="text-sm leading-[1.65] text-[var(--muted)]">
                {step.description}
              </p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

