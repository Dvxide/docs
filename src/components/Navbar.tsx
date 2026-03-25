import { NAV_LINKS } from '../data/mockData'
import { scrollToSection } from '../utils/smoothScroll'

interface NavbarProps {
  activeSection: string
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

export function Navbar({ activeSection, theme, onToggleTheme }: Readonly<NavbarProps>) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-primary-container/10 shadow-[0_4px_30px_rgba(255,85,64,0.05)]">
      <div className="flex justify-between items-center px-8 h-16 max-w-full mx-auto">
        <div className="text-xl font-bold text-primary tracking-widest font-headline uppercase">DVX1DE</div>
        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace('#', '')
            const isActive = activeSection === sectionId
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(sectionId) }}
                className={`font-headline tracking-tighter uppercase text-sm transition-all duration-300 ${
                  isActive
                    ? 'text-primary border-b-2 border-primary-container pb-1'
                    : 'text-secondary hover:text-primary'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full text-secondary hover:text-primary hover:bg-primary-container/10 transition-all"
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined text-xl">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-primary-container text-on-primary-container px-6 py-2 font-headline uppercase text-xs font-bold tracking-widest hover:brightness-110 active:scale-95 transition-all"
          >
            Execute_Contact
          </button>
        </div>
      </div>
    </nav>
  )
}
