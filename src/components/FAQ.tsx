"use client";

import { useState } from "react";
import SectionReveal from "@/components/SectionReveal";

const faqs = [
  {
    question: "What is Breath Quotient (BQ)?",
    answer:
      "Breath Quotient is a real-time indicator of your internal state based on your breathing patterns. It helps you understand whether you are in focus, stress, fatigue, or clarity.",
  },
  {
    question: "How is this different from meditation apps?",
    answer:
      "Meditation apps focus on relaxation sessions. BRemind is a real-time performance system that helps you act based on your current internal state.",
  },
  {
    question: "Do I need special hardware?",
    answer:
      "BRemind is designed to integrate with sensors, but the core system focuses on translating breath signals into actionable guidance.",
  },
  {
    question: "Who is this for?",
    answer:
      "Founders, students, professionals, athletes, and creators — anyone who wants to improve how they think, act, and perform.",
  },
  {
    question: "What is the long-term benefit?",
    answer:
      "You train your system to consistently operate from better internal states, leading to better decisions, performance, and outcomes.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-6 py-24 md:px-[60px] md:py-[120px]">
      <div className="mx-auto max-w-[800px]">
        <SectionReveal>
          <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
            <span className="block h-px w-6 bg-[var(--muted)]" />
            FAQ
          </div>

          <p className="mb-12 font-['Playfair_Display'] text-[clamp(22px,3vw,36px)] font-bold leading-[1.3] tracking-[-0.5px] text-[var(--text)]">
            Questions before you begin.
          </p>
        </SectionReveal>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <SectionReveal key={faq.question} delay={idx * 0.05}>
                <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] transition">

                  {/* QUESTION */}
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : idx)
                    }
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="text-sm font-medium text-[var(--text)]">
                      {faq.question}
                    </span>

                    <span className="text-[var(--muted)]">
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>

                  {/* ANSWER */}
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden px-6 pb-5 text-sm leading-[1.6] text-[var(--muted)]">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

