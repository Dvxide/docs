import { FOOTER_NAV, FOOTER_CONNECT } from '../data/mockData'

export function Footer() {
  return (
    <footer className="bg-surface w-full py-12 px-8 border-t border-surface-container-low">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        <div className="text-primary-container font-black font-headline uppercase tracking-widest">
          DVX1DE
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {FOOTER_NAV.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-secondary hover:text-primary-container transition-colors opacity-80 hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex gap-6">
          {FOOTER_CONNECT.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.isExternal ? '_blank' : undefined}
              rel={link.isExternal ? 'noopener noreferrer' : undefined}
              className="font-mono text-xs uppercase tracking-widest text-secondary hover:text-primary-container transition-colors opacity-80 hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="text-center mt-8">
        <div className="font-mono text-[10px] uppercase tracking-widest text-secondary opacity-40">
          © 2026 DVX1DE. ALL_RIGHTS_RESERVED.
        </div>
      </div>
    </footer>
  )
}
