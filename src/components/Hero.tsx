import { useTypewriter } from '../hooks/useTypewriter'
import { TERMINAL_COMMANDS, HERO_STATS } from '../data/mockData'
import { scrollToSection } from '../utils/smoothScroll'

export function Hero() {
  const displayText = useTypewriter(TERMINAL_COMMANDS)

  return (
    <section id="terminal" className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 relative overflow-hidden">
      <div className="absolute inset-0 red-glow pointer-events-none"></div>
      <div className="w-full max-w-4xl z-10">
        {/* Terminal Window */}
        <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-lg overflow-hidden shadow-2xl">
          <div className="bg-surface-variant px-4 py-2 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-[#ff5540]"></div>
              <div className="w-2 h-2 rounded-full bg-secondary-container"></div>
              <div className="w-2 h-2 rounded-full bg-secondary-container"></div>
            </div>
            <div className="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest">session: remote@dvx1de</div>
            <div className="w-10"></div>
          </div>
          <div className="p-8 font-mono text-sm sm:text-base leading-relaxed">
            <div className="flex gap-2 items-center mb-4">
              <span className="text-primary">root@dvx1de:~$</span>
              <span className="text-on-surface">{displayText}</span>
              <span className="text-primary animate-pulse">_</span>
            </div>
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter text-on-surface mb-6 leading-none">
              Bridging the gap between{' '}
              <span className="text-primary">Linux</span> and{' '}
              <span className="text-primary">Windows</span> infrastructure.
            </h1>
            <p className="text-on-surface-variant font-body text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              Architecting resilient, automated, and secure digital foundations. I turn complex system requirements into streamlined, production-ready environments.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection('expertise')}
                className="bg-primary-container text-on-primary-container px-8 py-3 font-headline font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(255,85,64,0.4)] transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">terminal</span>
                Explore_Infrastructure
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-primary/20 text-primary px-8 py-3 font-headline font-bold uppercase tracking-widest hover:bg-primary/5 transition-all"
              >
                Get_In_Touch
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 flex flex-wrap gap-8 justify-center">
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-headline text-2xl font-bold text-primary-container">{stat.value}</div>
              <div className="font-mono text-xs text-secondary uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Tech Decoration */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 opacity-10 pointer-events-none">
        <span className="material-symbols-outlined text-[20rem] text-primary">settings_system_daydream</span>
      </div>
    </section>
  )
}
