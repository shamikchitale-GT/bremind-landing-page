import SectionReveal from "@/components/SectionReveal";

const features = [
  {
    title: "Short, Manageable Sessions",
    description: "Designed to fit into daily routines",
  },
  {
    title: "Clear Progress and Patterns",
    description: "Understand how your child’s focus and state evolve",
  },
  {
    title: "Built for Real Life",
    description: "Practical, repeatable, and easy to integrate",
  },
];

export default function ParentInsights() {
  return (
    <section id="parent-insights" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-[2.45rem]">
            Clarity for parents. Confidence for children.
          </h2>
          <p className="mt-6 text-[1.05rem] leading-8 text-slate-700">
            BRemind is designed for real family life — simple to follow,
            structured without being rigid, and focused on long-term growth
            rather than quick fixes.
          </p>
          <p className="mt-4 text-[1.05rem] leading-8 text-slate-700">
            Parents gain visibility into their child&apos;s patterns, while
            children build the internal tools they need to manage focus, energy,
            and emotions more independently.
          </p>
        </SectionReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {features.map((feature, idx) => (
            <SectionReveal
              key={feature.title}
              delay={idx * 0.08}
              className="rounded-2xl border border-slate-900/8 bg-white/80 p-6 shadow-[0_24px_58px_-42px_rgba(15,23,42,0.46)] backdrop-blur-md"
            >
              <p className="text-base font-semibold text-slate-900">
                {feature.title}
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                {feature.description}
              </p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

