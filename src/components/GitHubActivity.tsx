function generateContributionData(): string[] {
  const colors = [
    'bg-surface-container-high',
    'bg-[#ff5540]/20',
    'bg-[#ff5540]/40',
    'bg-[#ff5540]/70',
    'bg-primary-container',
  ]
  return Array.from({ length: 364 }, () => colors[Math.floor(Math.random() * colors.length)])
}

const CONTRIBUTION_DATA = generateContributionData()

export function GitHubActivity() {
  return (
    <section id="github" className="py-24 px-8 max-w-7xl mx-auto">
      <div className="bg-surface-container-lowest p-8 rounded-lg border border-outline-variant/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <h3 className="font-headline text-2xl font-bold text-on-surface flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">history</span>
              System_Contributions
            </h3>
            <p className="text-on-surface-variant font-mono text-sm mt-1">Activity tracked across automation repositories</p>
          </div>
          <a
            href="https://github.com/Dvxide"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-mono text-xs uppercase tracking-widest flex items-center gap-2 hover:underline"
          >
            View GitHub <span className="material-symbols-outlined text-sm">open_in_new</span>
          </a>
        </div>

        {/* Contribution Graph */}
        <div className="grid grid-cols-[repeat(52,_minmax(0,_1fr))] gap-1 overflow-x-auto pb-4">
          {CONTRIBUTION_DATA.map((colorClass, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-[1px] ${colorClass} opacity-80 hover:opacity-100 transition-opacity`}
            />
          ))}
        </div>

        <div className="flex justify-end gap-4 mt-2 text-[10px] font-mono text-on-surface-variant uppercase">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-surface-container-high"></div>
            <div className="w-3 h-3 bg-[#ff5540]/20"></div>
            <div className="w-3 h-3 bg-[#ff5540]/40"></div>
            <div className="w-3 h-3 bg-[#ff5540]/70"></div>
            <div className="w-3 h-3 bg-primary-container"></div>
          </div>
          <span>More</span>
        </div>
      </div>
    </section>
  )
}
