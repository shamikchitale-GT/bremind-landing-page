import SectionReveal from "@/components/SectionReveal";

const rows = [
  ["Calm you down", "Prepare & upgrade you"],
  ["Track activity", "Train internal state"],
  ["Generic routines", "AI-driven personalization"],
  ["Short-term relief", "Long-term performance growth"],
];

export default function Differentiation() {
  return (
    <section id="diff" className="px-6 py-24 md:px-[60px] md:py-[120px]">
      <div className="mx-auto max-w-[950px]">
        <SectionReveal className="text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
            <span className="block h-px w-6 bg-[var(--muted)]" />
            Differentiation
          </div>

          <h2 className="font-['Playfair_Display'] text-[clamp(30px,4vw,52px)] font-black leading-[1.1] tracking-[-1.5px] text-[var(--text)]">
            Others vs BRemind
          </h2>
        </SectionReveal>

        <SectionReveal className="mt-14 overflow-hidden rounded-[24px] border border-[var(--border)] bg-[rgba(8,12,26,0.86)] shadow-[0_30px_100px_-60px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-2 border-b border-[var(--border)]">
            <div className="px-7 py-5 text-left text-sm font-bold text-[#ef4444] md:px-9">
              Others
            </div>
            <div className="bg-[linear-gradient(135deg,rgba(79,158,255,0.12),rgba(255,126,63,0.08))] px-7 py-5 text-left text-sm font-bold text-[var(--text)] md:px-9">
              BRemind
            </div>
          </div>

          {rows.map(([oldWay, newWay]) => (
            <div key={oldWay} className="grid grid-cols-2 border-b border-[var(--border)] last:border-b-0">
              <div className="flex items-center gap-3 border-r border-[var(--border)] px-7 py-5 text-left text-sm text-[var(--muted)] md:px-9">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(239,68,68,0.08)] text-xs font-bold text-[#ef4444]">
                  ✕
                </span>
                {oldWay}
              </div>

              <div className="flex items-center gap-3 bg-[linear-gradient(90deg,rgba(79,158,255,0.05),transparent)] px-7 py-5 text-left text-sm font-medium text-[var(--text)] md:px-9">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--blue-dim)] text-xs font-bold text-[var(--blue)]">
                  ✓
                </span>
                {newWay}
              </div>
            </div>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}