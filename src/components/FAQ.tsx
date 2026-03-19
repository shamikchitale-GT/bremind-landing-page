import SectionReveal from "@/components/SectionReveal";

const faqs = [
  {
    question: "Is BRemind a meditation app for kids?",
    answer:
      "BRemind is not positioned as a traditional meditation app. It focuses on guided breath-based routines and structured focus practices designed to support regulation, attention, and calm in a practical way.",
  },
  {
    question: "What age group is it designed for?",
    answer:
      "BRemind is designed for growing children, with routines that are simple, guided, and easy to integrate into everyday family life.",
  },
  {
    question: "Is it science-backed?",
    answer:
      "Yes. BRemind is grounded in modern understanding of breath, nervous system regulation, and attention, while drawing inspiration from established breath-centered practices.",
  },
  {
    question: "How long does a daily session take?",
    answer:
      "Sessions are intentionally short, designed to fit into daily routines without adding pressure.",
  },
  {
    question: "Can parents track progress?",
    answer:
      "Yes. BRemind is designed to help parents understand patterns, support consistency, and guide their child’s development over time.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionReveal className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-[2.45rem]">
            Frequently asked questions
          </h2>
        </SectionReveal>

        <div className="mt-10 space-y-3.5">
          {faqs.map((faq, idx) => (
            <SectionReveal
              key={faq.question}
              delay={idx * 0.05}
              className="rounded-2xl border border-slate-900/8 bg-white/80 px-5 py-4 shadow-[0_20px_48px_-36px_rgba(15,23,42,0.44)] backdrop-blur-md sm:px-6 sm:py-5"
            >
              <details className="group">
                <summary className="cursor-pointer list-none text-left text-base font-medium text-slate-900 marker:content-none">
                  {faq.question}
                </summary>
                <p className="mt-3 text-left text-sm leading-7 text-slate-700">
                  {faq.answer}
                </p>
              </details>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

