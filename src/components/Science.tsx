import SectionReveal from "@/components/SectionReveal";

const scienceCards = [
  {
    title: "Ancient Intelligence",
    description:
      "Ancient systems like Swara Yoga understood the connection between breath and the brain",
  },
  {
    title: "Modern Neuroscience",
    description:
      "Scientific research confirms that breath directly affects cognition, focus, and emotional regulation",
  },
  {
    title: "Real-Time Application",
    description:
      "BRemind transforms this knowledge into a real-time system that helps you understand and optimize your internal state",
  },
];

export default function Science() {
  return (
    <section id="science" className="relative overflow-hidden py-16 sm:py-20">
      <div
        aria-hidden
        className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-200/35 blur-3xl"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <SectionReveal className="max-w-xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-[2.45rem]">
            Where ancient knowledge meets modern science
          </h2>
          <p className="mt-6 text-pretty text-[1.05rem] leading-8 text-slate-700">
            Breath has always been the bridge between body and mind. Ancient
            systems understood how breath influences thought, emotion, and
            performance long before modern science could explain it.
          </p>
          <p className="mt-4 text-pretty text-[1.05rem] leading-8 text-slate-700">
            Today, neuroscience confirms that breath directly impacts cognition,
            emotional regulation, and decision-making. BRemind brings these
            insights together into a real-time performance system.
          </p>
        </SectionReveal>

        <SectionReveal className="relative rounded-3xl border border-slate-900/8 bg-white/80 p-6 shadow-[0_34px_90px_-54px_rgba(15,23,42,0.46)] backdrop-blur-md sm:p-8">
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[linear-gradient(140deg,rgba(34,211,238,0.08),rgba(59,130,246,0.03),rgba(20,184,166,0.08))]" />
          <div className="relative space-y-4">
            {scienceCards.map((card, idx) => (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-900/8 bg-white/85 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]"
              >
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400/90" />
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Layer {idx + 1}
                  </p>
                </div>
                <p className="mt-2 text-base font-semibold text-slate-900">
                  {card.title}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  {card.description}
                </p>
              </div>
            ))}
            <div className="absolute left-8 right-8 top-[24%] hidden h-px bg-gradient-to-r from-cyan-300/0 via-cyan-300/70 to-cyan-300/0 sm:block" />
            <div className="absolute left-8 right-8 top-[53%] hidden h-px bg-gradient-to-r from-sky-300/0 via-sky-300/70 to-sky-300/0 sm:block" />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

