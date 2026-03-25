import { CONTACT_METHODS } from '../data/mockData'

export function Contact() {
  return (
    <section id="contact" className="py-32 px-8 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <p className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-4">// EXECUTE_CONNECTION</p>
        <h2 className="font-headline text-5xl font-black uppercase tracking-tighter text-primary mb-4">Execute_Connection</h2>
        <p className="text-on-surface-variant font-body text-lg">Interested in infrastructure optimization or security hardening? Let's talk.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CONTACT_METHODS.map((method) => (
          <a
            key={method.title}
            href={method.href}
            className="glass-card p-10 text-center rounded-lg hover:border-primary-container transition-all group"
            target={method.isExternal ? '_blank' : undefined}
            rel={method.isExternal ? 'noopener noreferrer' : undefined}
          >
            <span
              className="material-symbols-outlined text-primary text-4xl mb-4 block group-hover:scale-110 transition-transform"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {method.icon}
            </span>
            <h4 className="font-headline font-bold text-on-surface uppercase tracking-widest text-sm mb-1">{method.title}</h4>
            <p className="text-on-surface-variant font-mono text-xs">{method.value}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
