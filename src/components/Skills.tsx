import SectionReveal from "@/components/SectionReveal";

const skills = [
  {
    title: "Before a Meeting",
    description:
      "Align your state before important conversations to communicate clearly and confidently",
  },
  {
    title: "Before Studying",
    description:
      "Shift into a focused state to improve attention and learning efficiency",
  },
  {
    title: "Before a Decision",
    description:
      "Understand your internal state before making critical choices",
  },
  {
    title: "Before a Difficult Conversation",
    description:
      "Regulate your emotions to respond with clarity instead of reacting impulsively",
  },
  {
    title: "During Performance",
    description:
      "Stay calm, focused, and in control when it matters the most",
  },
  {
    title: "After Every Action",
    description:
      "Train your system to perform better next time through continuous improvement",
  },
];

export default function Skills() {
  return (
    <section id="benefits" className="relative py-16 sm:py-20">
      <div
        aria-hidden
        className="absolute right-10 top-24 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl"
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-[2.45rem]">
            Right State → Right Action → Better Outcome
          </h2>
        </SectionReveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, idx) => (
            <SectionReveal
              key={skill.title}
              delay={idx * 0.06}
              className="rounded-2xl border border-slate-900/8 bg-white/80 px-6 py-5 shadow-[0_22px_52px_-38px_rgba(15,23,42,0.48)] backdrop-blur-md"
            >
              <p className="text-base font-semibold text-slate-900">{skill.title}</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                {skill.description}
              </p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

