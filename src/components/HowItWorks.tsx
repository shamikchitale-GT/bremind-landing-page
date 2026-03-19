import SectionReveal from "@/components/SectionReveal";

const timeline = [
  {
    title: "Check-in",
    description:
      "A simple starting point to understand the child’s current state",
  },
  {
    title: "Guided Breath Session",
    description: "Structured breathing practices to regulate the system",
  },
  {
    title: "Focus Activity",
    description: "Short exercises designed to train attention and awareness",
  },
  {
    title: "Progress Tracking",
    description:
      "Clear insights that help parents understand patterns over time",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-[2.45rem]">
            Built for just a few mindful minutes a day
          </h2>
          <p className="mt-5 text-[1.05rem] leading-8 text-slate-700">
            BRemind is designed to fit naturally into daily routines, without
            overwhelming children or parents.
          </p>
        </SectionReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {timeline.map((step, idx) => (
            <SectionReveal
              key={step.title}
              delay={idx * 0.08}
              className="rounded-2xl border border-slate-900/8 bg-white/80 p-6 shadow-[0_24px_56px_-40px_rgba(15,23,42,0.48)] backdrop-blur-md"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {String(idx + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 text-base font-semibold text-slate-900">
                {step.title}
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                {step.description}
              </p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

