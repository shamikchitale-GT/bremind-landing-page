"use client";

import SectionReveal from "@/components/SectionReveal";
import { motion } from "framer-motion";

export default function BQ() {
  return (
    <section id="bq" className="px-6 py-24 md:px-[60px] md:py-[120px]">
      <div className="mx-auto max-w-[1100px] grid gap-16 lg:grid-cols-2 items-center">

        {/* LEFT CONTENT */}
        <SectionReveal>
          <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
            <span className="block h-px w-6 bg-[var(--muted)]" />
            What is BQ
          </div>

          <h2 className="font-['Playfair_Display'] text-[clamp(24px,3vw,42px)] font-bold leading-[1.3] text-[var(--text)]">
            Breath Quotient (BQ)
          </h2>

          <p className="mt-6 text-[15px] leading-[1.7] text-[var(--muted)]">
            A real-time indicator of your internal state based on your breathing patterns.
          </p>

          <p className="mt-4 text-[15px] leading-[1.7] text-[var(--muted)]">
            It tells you whether you are operating from clarity, stress, fatigue, or focus — before you act.
          </p>
        </SectionReveal>

        {/* RIGHT VISUAL (GAUGE) */}
        <SectionReveal>
          <div className="relative flex items-center justify-center">

            {/* GLOW */}
            <div className="absolute h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(79,158,255,0.2)_0%,transparent_70%)] blur-2xl" />

            {/* OUTER RING */}
            <motion.div
              className="absolute h-[260px] w-[260px] rounded-full border border-[rgba(79,158,255,0.2)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />

            {/* INNER RING */}
            <motion.div
              className="absolute h-[200px] w-[200px] rounded-full border border-[rgba(255,255,255,0.08)]"
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />

            {/* CENTER */}
            <div className="relative flex h-[140px] w-[140px] items-center justify-center rounded-full bg-[var(--surface)] border border-[var(--border)] shadow-[0_0_40px_rgba(79,158,255,0.2)]">
              <span className="text-[28px] font-bold text-[var(--blue)]">
                BQ
              </span>
            </div>

          </div>
        </SectionReveal>

      </div>
    </section>
  );
}