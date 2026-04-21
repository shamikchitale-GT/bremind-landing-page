"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[#FBFBFA]">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute -top-48 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.20),rgba(59,130,246,0.10),transparent_62%)] blur-3xl" />
        <div className="absolute -bottom-56 -right-48 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.16),rgba(34,211,238,0.08),transparent_60%)] blur-3xl" />
        <div className="absolute -bottom-56 -left-48 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.10),rgba(34,211,238,0.06),transparent_60%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(251,251,250,0.88),rgba(251,251,250,0.98))]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-14">
          <div className="max-w-xl">
            <p className="mb-6 inline-flex items-center rounded-full border border-slate-900/10 bg-white/70 px-3.5 py-1.5 text-xs font-medium tracking-wide text-slate-700 shadow-[0_10px_28px_-20px_rgba(15,23,42,0.6)] backdrop-blur">
              Introducing Breath Quotient (BQ)
            </p>

            <h1 className="text-balance text-[2.15rem] font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              We measure IQ. We measure EQ. But we never measure our breath.
            </h1>

            <p className="mt-6 text-pretty text-[1.05rem] leading-8 text-slate-700">
              A real-time system that reads your breath, identifies your internal state,
              and guides how you should act — before you act.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3.5">
              <a
                href="#early-access"
                className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-medium text-white shadow-[0_18px_46px_-22px_rgba(2,6,23,0.62)] transition hover:-translate-y-0.5 hover:bg-slate-900"
              >
                Start Operating Intelligently
              </a>
              <a
                href="#science"
                className="inline-flex h-12 items-center justify-center rounded-full border border-slate-900/10 bg-white/70 px-6 text-sm font-medium text-slate-900 shadow-[0_14px_38px_-24px_rgba(15,23,42,0.5)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
              >
                Get Early Access
              </a>
            </div>

            <p className="mt-5 text-sm text-slate-600/95">
              Measure your state. Train your mind. Upgrade your performance.
            </p>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <motion.div
              className="relative w-full max-w-[42rem]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),rgba(59,130,246,0.08),transparent_68%)] blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-900/8 bg-white/55 shadow-[0_40px_100px_-45px_rgba(15,23,42,0.42)] backdrop-blur-sm">
                <Image
                  src="/images/hero-brain.jpg"
                  alt="BRemind hero visual"
                  width={1400}
                  height={900}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

