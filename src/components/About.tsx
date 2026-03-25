import { ABOUT_PARAGRAPHS, PROFILE_TAGS, ABOUT_HIGHLIGHTS } from '../data/mockData'

export function About() {
  return (
    <section id="infrastructure" className="pt-32 pb-8 px-8 max-w-7xl mx-auto">

      {/* Grid: vertical label + logo/info + cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Vertical "WHO I AM" label */}
        <div className="hidden lg:flex lg:col-span-1 justify-center pt-2">
          <span
            className="font-headline font-black uppercase tracking-[0.2em] text-primary/20 select-none"
            style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              fontSize: 'clamp(2rem, 4vw, 4rem)',
              lineHeight: 1,
            }}
          >
            WHO I AM
          </span>
        </div>

        {/* Logo card */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          <div className="relative rounded-xl overflow-visible">
            <div className="glass-card rounded-xl overflow-hidden">
              <img
                src="/logo-dark.jpg"
                alt="DVX1DE Logo"
                className="hidden dark:block w-full h-auto object-contain"
              />
              <img
                src="/logo-light.png"
                alt="DVX1DE Logo"
                className="block dark:hidden w-full h-auto object-contain"
              />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high border border-outline-variant/20 backdrop-blur-sm whitespace-nowrap shadow-lg">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-on-surface">Available for Work</span>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <p className="font-mono text-primary text-xs uppercase tracking-[0.3em]">// WHO_I_AM</p>
          </div>
        </div>

        {/* Highlight cards */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 lg:pt-2">
          {ABOUT_HIGHLIGHTS.map((item) => (
            <div key={item.title} className="glass-card p-8 rounded-lg hover:-translate-y-1 transition-transform duration-300">
              <span
                className="material-symbols-outlined text-primary mb-4 block text-3xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {item.icon}
              </span>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-2">{item.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed font-body">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Full-width statement text */}
      <div className="mt-10 space-y-4">
        {ABOUT_PARAGRAPHS.map((para, i) => (
          <p key={i} className="font-body leading-relaxed text-base">
            {para.split(/(Systems Administrator|hybrid environments|DevOps|Linux kernel|Active Directory|performant and observable)/).map((part, j) =>
              /Systems Administrator|hybrid environments|DevOps|Linux kernel|Active Directory|performant and observable/.test(part)
                ? <span key={j} className="text-primary font-semibold">{part}</span>
                : <span key={j} className="text-on-surface-variant">{part}</span>
            )}
          </p>
        ))}

        {/* Centered pill tags */}
        <div className="flex flex-wrap justify-center gap-3 pt-4">
          {PROFILE_TAGS.map((tag) => (
            <span key={tag} className="px-4 py-1.5 rounded-full bg-surface-container-high text-on-surface font-headline text-xs tracking-wider uppercase border border-outline-variant/20">
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom divider */}
        <div className="border-t border-outline-variant/20 pt-0 mt-6" />
      </div>

    </section>
  )
}
