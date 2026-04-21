import SectionReveal from "@/components/SectionReveal";

const problems = [
  {
    title: "We track everything",
    description:
      "Steps. Calories. Sleep. Heart rate.",
  },
  {
    title: "But we ignore what matters most",
    description:
      "The one system that controls how we think, feel, and perform — our breath.",
  },
  {
    title: "We act without checking our state",
    description:
      "You check your phone battery and the time before a meeting, but not your internal state before making decisions.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-[2.45rem]">
            We track everything. But we ignore the one system that controls how we think, feel, and perform.
          </h2>
          <p className="mt-6 text-pretty text-[1.05rem] leading-8 text-slate-700">
            Steps. Calories. Sleep. Heart rate. But we ignore the one system
            that controls how we think, feel, and perform — our breath.
          </p>
          <p className="mt-4 text-pretty text-[1.05rem] leading-8 text-slate-700">
            You check your phone battery before leaving. You check the time
            before a meeting. But you don&apos;t check your internal state before
            making decisions.
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