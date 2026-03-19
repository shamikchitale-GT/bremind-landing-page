import SectionReveal from "@/components/SectionReveal";

const steps = [
  {
    title: "Regulate",
    description: "Calm the system and settle the body through guided breathing",
  },
  {
    title: "Focus",
    description: "Train attention through simple, structured awareness practices",
  },
  {
    title: "Strengthen",
    description: "Build emotional steadiness and cognitive readiness over time",
  },
  {
    title: "Grow",
    description:
      "Develop consistent habits that support learning, calm, and clarity",
  },
];

export default function Method() {
  return (
    <section id="method" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-[2.45rem]">
            A simple structure designed for real growth
          </h2>
          <p className="mt-5 text-[1.05rem] leading-8 text-slate-700">
            BRemind is built on a structured progression that helps children
            regulate first, focus better, and build long-term mental resilience.
          </p>
        </SectionReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <SectionReveal
              key={step.title}
              delay={idx * 0.08}
              className="rounded-2xl border border-slate-900/8 bg-white/78 p-6 shadow-[0_24px_56px_-38px_rgba(15,23,42,0.45)] backdrop-blur-md"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700/80">
                Step {idx + 1}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                {step.description}
              </p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

