import SectionReveal from "@/components/SectionReveal";

export default function Waitlist() {
  return (
    <section id="early-access" className="relative py-16 sm:py-20">
      <div
        aria-hidden
        className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-200/35 blur-3xl"
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <SectionReveal className="mx-auto max-w-3xl rounded-3xl border border-slate-900/8 bg-white/82 p-8 text-center shadow-[0_34px_96px_-56px_rgba(15,23,42,0.45)] backdrop-blur-md sm:p-12">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-[2.45rem]">
            Start Your Breath Intelligence Journey
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[1.05rem] leading-8 text-slate-700">
            Two people. Same skill. Different breath. Different result. Now
            imagine if one of them trains their breath daily.
          </p>

          <form className="mx-auto mt-9 flex max-w-xl flex-col gap-3 sm:flex-row sm:items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-12 flex-1 rounded-full border border-slate-900/12 bg-white px-5 text-sm text-slate-900 placeholder:text-slate-400 shadow-[0_10px_32px_-24px_rgba(15,23,42,0.38)] focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-medium text-white shadow-[0_16px_42px_-20px_rgba(2,6,23,0.56)] transition hover:-translate-y-0.5 hover:bg-slate-900"
            >
              Join Early Access
            </button>
          </form>
        </SectionReveal>
      </div>
    </section>
  );
}

