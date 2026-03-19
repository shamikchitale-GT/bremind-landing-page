export default function Footer() {
  return (
    <footer className="border-t border-slate-900/8 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div>
          <p className="text-lg font-semibold tracking-tight text-slate-950">BRemind</p>
          <p className="mt-1 text-sm text-slate-600">The science of breath and mind</p>
        </div>

        <div className="flex items-center gap-6 text-sm text-slate-600">
          <a href="#science" className="transition hover:text-slate-900">
            Science
          </a>
          <a href="#method" className="transition hover:text-slate-900">
            Method
          </a>
          <a href="#early-access" className="transition hover:text-slate-900">
            Early Access
          </a>
        </div>
      </div>
      <div className="mx-auto mt-6 max-w-6xl px-5 text-xs text-slate-500 sm:px-8 lg:px-12">
        © 2026 BRemind. All rights reserved.
      </div>
    </footer>
  );
}

