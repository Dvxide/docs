export function NotFound() {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-8">
      <div className="max-w-2xl w-full">
        <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-lg overflow-hidden shadow-2xl">
          <div className="bg-surface-variant px-4 py-2 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary-container"></div>
            <div className="w-2 h-2 rounded-full bg-surface-container-high"></div>
            <div className="w-2 h-2 rounded-full bg-surface-container-high"></div>
            <span className="ml-2 font-mono text-[10px] text-on-surface-variant uppercase tracking-widest opacity-60">
              root@dvx1de: 404
            </span>
          </div>
          <div className="p-10 font-mono">
            <div className="text-primary text-xs uppercase tracking-[0.3em] mb-4">// ERROR_404</div>
            <div className="font-headline text-7xl font-black text-primary-container mb-2 leading-none">404</div>
            <div className="font-headline text-2xl font-bold text-on-surface uppercase tracking-tighter mb-6">
              Page_Not_Found
            </div>
            <div className="space-y-2 mb-8 text-sm text-on-surface-variant">
              <div><span className="text-primary">$</span> <span className="text-secondary">resolve</span> <span className="text-on-surface">"{window.location.pathname}"</span></div>
              <div className="text-primary-container">Error: ROUTE_NOT_FOUND — no matching entry point</div>
              <div><span className="text-primary">$</span> <span className="text-secondary">suggest</span> <span className="text-on-surface">--redirect home</span></div>
            </div>
            <a
              href="/"
              className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container px-8 py-3 font-headline font-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-sm">home</span>
              Return_Home
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
