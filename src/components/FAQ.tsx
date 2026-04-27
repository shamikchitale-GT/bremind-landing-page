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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative px-6 py-24 md:px-[60px] md:py-[120px]"
    >
      <div className="pointer-events-none absolute left-0 top-20 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(255,126,63,0.12),transparent_70%)] blur-3xl" />

      <div className="mx-auto max-w-[850px]">
        <SectionReveal>
          <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
            <span className="block h-px w-6 bg-[var(--muted)]" />
            FAQ
          </div>

          <p className="mb-12 font-['Playfair_Display'] text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.15] tracking-[-0.7px] text-[var(--text)]">
            Questions before you begin.
          </p>
        </SectionReveal>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <SectionReveal key={faq.question} delay={idx * 0.04}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-[rgba(8,12,26,0.86)] shadow-[0_20px_60px_-45px_rgba(0,0,0,0.75)] transition duration-300 ${
                    isOpen
                      ? "border-[rgba(79,158,255,0.35)]"
                      : "border-[var(--border)] hover:border-[rgba(79,158,255,0.22)]"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left md:px-7"
                  >
                    <span className="text-[15px] font-semibold text-[var(--text)]">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg transition ${
                        isOpen
                          ? "border-[rgba(79,158,255,0.35)] bg-[var(--blue-dim)] text-[var(--blue)] rotate-45"
                          : "border-[var(--border)] bg-white/[0.03] text-[var(--muted)]"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden px-6 pb-6 md:px-7">
                      <p className="max-w-[680px] text-sm leading-[1.7] text-[var(--muted)]">
                        {faq.answer}
                      </p>
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

