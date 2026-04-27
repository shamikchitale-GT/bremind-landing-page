"use client";

import SectionReveal from "@/components/SectionReveal";
import { motion } from "framer-motion";

const points = [
  "What state you are in",
  "Which side of performance is dominant",
  "How ready you are to act",
  "What to do next",
];

export default function BQ() {
  return (
    <section id="bq" className="relative bg-[var(--surface)] px-6 py-24 md:px-[60px] md:py-[120px]">
      <div className="mx-auto grid max-w-[1100px] items-center gap-16 lg:grid-cols-2">
        <SectionReveal>
          <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
            <span className="block h-px w-6 bg-[var(--muted)]" />
            What is BQ
          </div>

          <h2 className="font-['Playfair_Display'] text-[clamp(30px,4vw,52px)] font-black leading-[1.1] tracking-[-1.5px] text-[var(--text)]">
            Breath Quotient{" "}
            <span className="bg-gradient-to-r from-[var(--blue)] to-[var(--orange)] bg-clip-text text-transparent">
              (BQ)
            </span>
          </h2>

          <p className="mt-6 max-w-[520px] text-[15px] leading-[1.7] text-[var(--muted)]">
            Just like IQ measures intelligence and EQ measures emotional
            awareness, BQ measures your breathing intelligence in real time.
          </p>

          <div className="mt-8 grid gap-3">
            {points.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[rgba(8,12,26,0.86)] px-5 py-4 text-sm text-[var(--text)]"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--blue-dim)] text-xs font-bold text-[var(--blue)]">
                  ✓
                </span>
                {point}
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="relative mx-auto flex h-[360px] w-[360px] items-center justify-center">
            <div className="absolute h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(79,158,255,0.18),transparent_65%)] blur-2xl" />

            <motion.div
              className="absolute h-[320px] w-[320px] rounded-full border border-[rgba(79,158,255,0.18)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
              className="absolute h-[260px] w-[260px] rounded-full border border-[rgba(255,126,63,0.16)]"
              animate={{ rotate: -360 }}
              transition={{ duration: 58, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative flex h-[210px] w-[210px] flex-col items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(8,12,26,0.92)] shadow-[0_0_70px_rgba(79,158,255,0.18)]">
              <span className="bg-gradient-to-r from-[var(--blue)] to-[var(--orange)] bg-clip-text font-['Playfair_Display'] text-[58px] font-black leading-none text-transparent">
                72
              </span>
              <span className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                Breath Quotient
              </span>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}