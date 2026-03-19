import SectionReveal from "@/components/SectionReveal";

const problems = [
  {
    title: "Fragmented Attention",
    description:
      "Constant stimulation makes sustained focus increasingly difficult",
  },
  {
    title: "Emotional Overload",
    description:
      "Children struggle to regulate stress, frustration, and restlessness",
  },
  {
    title: "Lack of Daily Tools",
    description:
      "Families need simple, structured ways to build calm and clarity",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-[2.45rem]">
            Attention is under pressure in a constantly overstimulated world
          </h2>
          <p className="mt-6 text-pretty text-[1.05rem] leading-8 text-slate-700">
            Today&apos;s children are growing up in environments filled with
            constant stimulation, fragmented attention, and emotional overload.
            Focus feels harder to sustain, calm is harder to access, and
            traditional solutions often rely on distraction rather than
            regulation.
          </p>
          <p className="mt-4 text-pretty text-[1.05rem] leading-8 text-slate-700">
            Parents are not looking for more screen time. They are looking for
            tools that help children build real control over their attention,
            energy, and emotional state.
          </p>
        </SectionReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {problems.map((item, idx) => (
            <SectionReveal
              key={item.title}
              delay={idx * 0.08}
              className="rounded-2xl border border-slate-900/8 bg-white/78 p-6 shadow-[0_26px_62px_-42px_rgba(15,23,42,0.5)] backdrop-blur-md"
            >
              <p className="text-base font-semibold text-slate-900">{item.title}</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                {item.description}
              </p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

