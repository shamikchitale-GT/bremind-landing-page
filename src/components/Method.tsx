import SectionReveal from "@/components/SectionReveal";

const steps = [
  {
    title: "Understand",
    description:
      "Know your internal state through your Breath Quotient in real time",
  },
  {
    title: "Train",
    description:
      "Follow personalized, state-specific practices designed to improve your performance",
  },
  {
    title: "Optimize",
    description:
      "Improve your thinking, emotional control, and decision-making through daily training",
  },
  {
    title: "Upgrade",
    description:
      "Build long-term performance habits that elevate how you think, act, and perform",
  },
];

export default function Method() {
  return (
    <section id="method" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-[2.45rem]">
            Train Your Breath. Upgrade Your Mind.
          </h2>
          <p className="mt-5 text-[1.05rem] leading-8 text-slate-700">
            Knowing your state is step one. Improving it is everything.
            BRemind goes beyond awareness by generating personalized daily
            practices based on your Breath Quotient to help you perform better.
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

