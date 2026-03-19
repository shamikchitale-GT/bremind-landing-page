"use client";

import { motion, useScroll, useTransform } from "framer-motion";

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
              Science-backed routines for focus and calm
            </p>

            <h1 className="text-balance text-[2.15rem] font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              The science of breath and mind for growing brains
            </h1>

            <p className="mt-6 text-pretty text-[1.05rem] leading-8 text-slate-700">
              BRemind helps children build focus, emotional balance, and mental
              clarity through guided breath-based routines grounded in
              neuroscience and inspired by timeless breath practices.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3.5">
              <a
                href="#early-access"
                className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-medium text-white shadow-[0_18px_46px_-22px_rgba(2,6,23,0.62)] transition hover:-translate-y-0.5 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBFBFA]"
              >
                Join Early Access
              </a>
              <a
                href="#science"
                className="inline-flex h-12 items-center justify-center rounded-full border border-slate-900/10 bg-white/70 px-6 text-sm font-medium text-slate-900 shadow-[0_14px_38px_-24px_rgba(15,23,42,0.5)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBFBFA]"
              >
                Explore the Science
              </a>
            </div>

            <p className="mt-5 text-sm text-slate-600/95">
              Short daily routines • Parent-friendly • Built for growing minds
            </p>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <BrainVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function BrainVisual() {
  const { scrollYProgress } = useScroll();
  const scrollRotate = useTransform(scrollYProgress, [0, 1], [-8, 10]);

  return (
    <motion.div
      className="relative h-[19.5rem] w-[19.5rem] sm:h-[23rem] sm:w-[23rem] lg:h-[28.75rem] lg:w-[28.75rem]"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 9.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <div
        aria-hidden
        className="absolute -inset-7 rounded-full bg-[radial-gradient(circle_at_35%_38%,rgba(34,211,238,0.24),transparent_56%),radial-gradient(circle_at_68%_56%,rgba(59,130,246,0.18),transparent_62%),radial-gradient(circle_at_48%_82%,rgba(20,184,166,0.14),transparent_64%)] blur-3xl"
      />

      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-[42%] bg-[radial-gradient(circle_at_28%_24%,rgba(255,255,255,0.85),rgba(255,255,255,0.18),transparent_58%)] blur-[2px]"
        animate={{ opacity: [0.58, 0.84, 0.58] }}
        transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden
        className="absolute inset-1 rounded-[42%] border border-white/45 bg-[radial-gradient(circle_at_32%_30%,rgba(34,211,238,0.12),transparent_58%),radial-gradient(circle_at_72%_58%,rgba(59,130,246,0.12),transparent_62%),radial-gradient(circle_at_45%_82%,rgba(20,184,166,0.10),transparent_64%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]"
        animate={{ opacity: [0.72, 0.96, 0.72] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        aria-hidden
        className="absolute inset-4 rounded-[42%] border border-slate-900/5 bg-[radial-gradient(circle_at_32%_28%,rgba(255,255,255,0.88),rgba(226,232,240,0.38),rgba(34,211,238,0.08),transparent_64%)] shadow-[0_50px_120px_-70px_rgba(2,132,199,0.4)]"
        style={{ rotate: scrollRotate }}
      >
        <motion.div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-[44%] border border-white/35 shadow-[inset_0_0_0_1px_rgba(2,6,23,0.05)]"
          animate={{ rotate: -360 }}
          transition={{ duration: 260, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[76%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-[44%] border border-cyan-200/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 290, repeat: Infinity, ease: "linear" }}
        />

        <BrainSvg />
      </motion.div>

      <OuterNodes />
    </motion.div>
  );
}

function BrainSvg() {
  return (
    <motion.svg
      viewBox="0 0 520 520"
      className="absolute inset-0 h-full w-full"
      initial={false}
      aria-hidden
    >
      <defs>
        <linearGradient id="brainStroke" x1="108" y1="98" x2="420" y2="430">
          <stop offset="0%" stopColor="rgba(34,211,238,0.92)" />
          <stop offset="50%" stopColor="rgba(59,130,246,0.74)" />
          <stop offset="100%" stopColor="rgba(20,184,166,0.72)" />
        </linearGradient>
        <linearGradient id="brainStrokeSoft" x1="120" y1="100" x2="396" y2="420">
          <stop offset="0%" stopColor="rgba(34,211,238,0.45)" />
          <stop offset="55%" stopColor="rgba(59,130,246,0.33)" />
          <stop offset="100%" stopColor="rgba(20,184,166,0.32)" />
        </linearGradient>
        <filter id="brainGlow" x="-35%" y="-35%" width="170%" height="170%">
          <feGaussianBlur stdDeviation="3.4" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.78 0"
            result="glow"
          />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <ellipse
        cx="260"
        cy="258"
        rx="176"
        ry="170"
        fill="url(#brainStrokeSoft)"
        opacity="0.08"
      />

      <g filter="url(#brainGlow)" opacity="0.92">
        <motion.path
          d="M260 92
             C220 88 178 106 150 140
             C124 172 118 212 128 246
             C110 274 110 310 126 340
             C144 374 178 396 212 396
             C226 420 244 434 260 434
             C276 434 294 420 308 396
             C342 396 376 374 394 340
             C410 310 410 274 392 246
             C402 212 396 172 370 140
             C342 106 300 88 260 92 Z"
          fill="none"
          stroke="url(#brainStrokeSoft)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ opacity: [0.42, 0.72, 0.42] }}
          transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </g>

      <motion.path
        d="M260 96
           C222 92 184 110 158 142
           C134 172 128 210 138 242
           C120 268 120 304 136 332
           C154 364 186 384 216 382
           C228 406 246 420 260 420
           C274 420 292 406 304 382
           C334 384 366 364 384 332
           C400 304 400 268 382 242
           C392 210 386 172 362 142
           C336 110 298 92 260 96 Z"
        fill="none"
        stroke="url(#brainStroke)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ opacity: [0.72, 1, 0.72] }}
        transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.path
        d="M260 128 C260 190 260 238 260 382"
        fill="none"
        stroke="rgba(15,23,42,0.12)"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeDasharray="2 10"
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <GyriLines side="left" />
      <GyriLines side="right" />
    </motion.svg>
  );
}

function GyriLines({ side }: { side: "left" | "right" }) {
  const isLeft = side === "left";
  const lines = isLeft
    ? [
        "M238 142 C218 144 198 154 188 170 C176 188 176 208 190 220",
        "M230 182 C208 186 194 202 194 220 C194 240 208 252 226 258",
        "M228 224 C206 230 196 248 200 266 C204 284 220 294 238 298",
        "M236 264 C218 272 210 286 214 302 C218 318 232 328 248 332",
        "M242 304 C228 316 226 332 236 344 C246 356 258 360 268 362",
      ]
    : [
        "M282 142 C302 144 322 154 332 170 C344 188 344 208 330 220",
        "M290 182 C312 186 326 202 326 220 C326 240 312 252 294 258",
        "M292 224 C314 230 324 248 320 266 C316 284 300 294 282 298",
        "M284 264 C302 272 310 286 306 302 C302 318 288 328 272 332",
        "M278 304 C292 316 294 332 284 344 C274 356 262 360 252 362",
      ];

  return (
    <>
      {lines.map((d, idx) => (
        <motion.path
          key={`${side}-${idx}`}
          d={d}
          fill="none"
          stroke={idx % 2 === 0 ? "url(#brainStroke)" : "url(#brainStrokeSoft)"}
          strokeWidth={idx % 2 === 0 ? 1.9 : 1.4}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="2 12"
          animate={{
            strokeDashoffset: [0, isLeft ? -68 : 68],
            opacity: [0.42, 0.76, 0.42],
          }}
          transition={{
            duration: 26 + idx * 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </>
  );
}

function OuterNodes() {
  const nodes = [
    { x: "12%", y: "30%", s: 5, d: 8.4, dl: 0.1 },
    { x: "18%", y: "70%", s: 4, d: 9.2, dl: 0.6 },
    { x: "34%", y: "14%", s: 4, d: 7.8, dl: 0.4 },
    { x: "68%", y: "16%", s: 5, d: 8.8, dl: 0.2 },
    { x: "82%", y: "64%", s: 6, d: 10.4, dl: 0.9 },
    { x: "86%", y: "34%", s: 4, d: 9.6, dl: 0.7 },
    { x: "52%", y: "88%", s: 4, d: 8.9, dl: 0.3 },
  ] as const;

  return (
    <div aria-hidden className="absolute inset-0">
      {nodes.map((n) => (
        <motion.div
          key={`${n.x}-${n.y}`}
          className="absolute rounded-full bg-cyan-200/65 blur-[0.7px]"
          style={{
            left: n.x,
            top: n.y,
            width: n.s,
            height: n.s,
            boxShadow: "0 0 24px rgba(34,211,238,0.24)",
          }}
          animate={{
            y: [0, -8, 0],
            opacity: [0.32, 0.72, 0.32],
          }}
          transition={{
            duration: n.d,
            repeat: Infinity,
            ease: "easeInOut",
            delay: n.dl,
          }}
        />
      ))}

      <motion.div
        className="absolute left-1/2 top-1/2 h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-[44%] border border-sky-200/20"
        animate={{ rotate: 360, opacity: [0.16, 0.38, 0.16] }}
        transition={{ duration: 320, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

