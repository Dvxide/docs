import { useState } from 'react'
import { SKILL_CATEGORIES, SKILL_CHIPS, AUTOMATION_TOOLS } from '../data/mockData'
import { useSkillAnimation } from '../hooks/useSkillAnimation'

function SkillBar({ name, percentage }: Readonly<{ name: string; percentage: number }>) {
  const { ref, width } = useSkillAnimation(percentage)
  return (
    <div ref={ref}>
      <div className="flex justify-between text-xs font-mono mb-1">
        <span className="text-secondary">{name}</span>
        <span className="text-primary">{percentage}%</span>
      </div>
      <div className="h-1 w-full bg-surface-container-lowest overflow-hidden">
        <div className="h-full bg-primary-container transition-all duration-700" style={{ width: `${width}%` }}></div>
      </div>
    </div>
  )
}

const FILTERS = ['All_Nodes', 'Infra', 'Net', 'Auto', 'Sec'] as const

export function Skills() {
  const [activeFilter, setActiveFilter] = useState<string>('All_Nodes')

  return (
    <section id="expertise" className="pt-10 pb-32 px-8 max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-4">// CORE_COMPETENCIES_MANIFEST</p>
            <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
              Skill<br /><span className="text-primary-container">Matrix</span>
            </h1>
            <p className="text-secondary text-lg leading-relaxed border-l-2 border-primary-container/30 pl-6">
              Quantitative analysis of architectural expertise across the modern stack. High-availability systems, automated orchestration, and hardened perimeter defense strategies.
            </p>
          </div>
          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full font-headline text-xs font-bold uppercase tracking-widest transition-all ${
                  activeFilter === filter
                    ? 'bg-primary-container text-on-primary-container'
                    : 'bg-surface-container-high text-secondary hover:bg-surface-container-highest'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="space-y-24">
        {/* Category: Infrastructure */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="font-headline text-4xl font-bold uppercase tracking-tight">Infrastructure</h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-primary-container/40 to-transparent"></div>
            <span className="font-mono text-xs text-primary/60">[0x01]</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Kubernetes Card (Large) */}
            <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-low rounded-lg p-8 border-t border-l border-primary-container/10 hover:border-primary-container/40 transition-all duration-500">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h3 className="font-headline text-3xl font-bold mb-2 group-hover:text-primary transition-colors">Kubernetes</h3>
                  <p className="font-mono text-xs text-secondary/60">Container Orchestration &amp; Scaling</p>
                </div>
                <span className="material-symbols-outlined text-4xl text-primary-container/20 group-hover:text-primary-container transition-colors">hub</span>
              </div>
              <div className="space-y-6">
                <div className="flex items-end justify-between">
                  <span className="font-headline text-sm font-bold tracking-widest uppercase">Proficiency</span>
                  <span className="font-mono text-primary text-xl font-bold">94%</span>
                </div>
                <div className="h-1 w-full bg-surface-container-highest overflow-hidden">
                  <div className="h-full bg-primary-container w-[94%] relative">
                    <div className="absolute inset-0 bg-white/20 blur-sm"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {['Helm Charts', 'Istio Mesh', 'CRD Dev', 'ArgoCD'].map((tag) => (
                    <div key={tag} className="bg-surface-container-highest p-3 text-[10px] font-mono uppercase tracking-tighter text-secondary">{tag}</div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary-container/5 rounded-full blur-3xl group-hover:bg-primary-container/10 transition-all"></div>
            </div>
            {/* Terraform Card */}
            <div className="md:col-span-4 group bg-surface-container-high rounded-lg p-8 border-t border-l border-white/5 hover:bg-surface-container-highest transition-all duration-300">
              <div className="mb-8">
                <span className="material-symbols-outlined text-primary mb-4 block">layers</span>
                <h3 className="font-headline text-xl font-bold uppercase tracking-widest">Terraform</h3>
                <p className="text-xs text-secondary/60 font-mono mt-1">Infrastructure as Code</p>
              </div>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-primary">88%</span>
                  </div>
                </div>
                <div className="overflow-hidden h-1 text-xs flex bg-surface-container-low">
                  <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary" style={{ width: '88%' }}></div>
                </div>
              </div>
              <p className="mt-6 text-sm text-secondary opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 leading-relaxed">
                Multi-cloud state management and custom provider development for AWS/Azure environments.
              </p>
            </div>
          </div>
        </section>

        {/* Category: Networking & Security */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Networking */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="font-headline text-4xl font-bold uppercase tracking-tight">Networking</h2>
              <span className="font-mono text-xs text-primary/60">[0x02]</span>
            </div>
            <div className="space-y-4">
              {[
                { name: 'SDN / VXLAN', icon: 'lan', bars: 3, desc: 'Software Defined Networking architectures for dynamic environments.' },
                { name: 'BGP / OSPF', icon: 'router', bars: 4, desc: 'Core routing protocols and global traffic management.' },
              ].map((skill) => (
                <div key={skill.name} className="group p-6 bg-surface-container-low border-l-2 border-transparent hover:border-primary-container hover:bg-surface-container-high transition-all">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-headline font-bold text-lg uppercase tracking-wider">{skill.name}</h4>
                    <span className="material-symbols-outlined text-secondary/40 group-hover:text-primary transition-colors">{skill.icon}</span>
                  </div>
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className={`h-1 flex-grow ${i <= skill.bars ? 'bg-primary-container' : 'bg-primary-container/20'}`}></div>
                    ))}
                  </div>
                  <p className="text-xs text-secondary font-mono">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Security */}
          <div className="md:col-span-7">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="font-headline text-4xl font-bold uppercase tracking-tight">Security</h2>
              <span className="font-mono text-xs text-primary/60">[0x03]</span>
            </div>
            <div className="relative p-10 bg-surface-container-highest/40 rounded-xl overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 p-4">
                <span className="material-symbols-outlined text-primary-container/40 text-8xl">security</span>
              </div>
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {[
                    { label: 'Hardening', level: 'ADVANCED', width: '92%' },
                    { label: 'Pen-Testing', level: 'INTERMEDIATE', width: '75%' },
                    { label: 'IAM / Zero Trust', level: 'EXPERT', width: '96%' },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs font-headline font-bold uppercase tracking-widest">{item.label}</span>
                        <span className="text-xs font-mono text-primary">{item.level}</span>
                      </div>
                      <div className="h-[2px] w-full bg-surface-container-low">
                        <div className="h-full bg-primary-container" style={{ width: item.width }}></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col justify-center">
                  <div className="p-6 bg-[#131317] border border-primary-container/20 rounded-lg">
                    <h5 className="text-primary font-mono text-xs font-bold mb-4 uppercase tracking-[0.2em] border-b border-primary-container/10 pb-2">Recent Certifications</h5>
                    <ul className="space-y-3 font-mono text-[10px] text-on-surface/70">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> OSCP Certified Professional</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> AWS Security Specialty</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span> CISM Information Security</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category: Automation */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="font-headline text-4xl font-bold uppercase tracking-tight">Automation</h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-primary-container/40 to-transparent"></div>
            <span className="font-mono text-xs text-primary/60">[0x04]</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {AUTOMATION_TOOLS.map((tool) => (
              <div key={tool.name} className="group bg-surface-container-low p-6 flex flex-col items-center text-center hover:bg-primary-container transition-all duration-300">
                <span className="material-symbols-outlined text-primary group-hover:text-on-primary-container mb-4 text-3xl">{tool.icon}</span>
                <h4 className="font-headline font-bold uppercase tracking-widest group-hover:text-on-primary-container">{tool.name}</h4>
                <p className="text-[10px] font-mono text-secondary group-hover:text-on-primary-container/80 mt-2 uppercase tracking-tighter">{tool.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Classic skill bars */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILL_CATEGORIES.map((category) => (
              <div key={category.title} className="bg-surface-container-high p-6 border-l-2 border-primary-container/30">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-headline font-bold text-on-surface text-lg uppercase tracking-wider">{category.title}</h3>
                  <span className="material-symbols-outlined text-primary">{category.icon}</span>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 flex flex-wrap gap-3 justify-center">
            {SKILL_CHIPS.map((chip) => (
              <span key={chip} className="px-4 py-1.5 rounded-full bg-surface-container-high text-on-surface font-headline text-xs tracking-wider uppercase border border-outline-variant/20 hover:bg-primary-container hover:text-on-primary-container transition-all cursor-default">
                {chip}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* Terminal Output CTA */}
      <section className="mt-32">
        <div className="bg-surface-container-lowest border border-white/5 rounded-lg overflow-hidden terminal-glow">
          <div className="bg-surface-variant px-4 py-2 flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-primary-container"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-surface-container-high"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-surface-container-high"></div>
            <span className="ml-4 font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">system_status: analysis_complete</span>
          </div>
          <div className="p-8 font-mono text-sm leading-relaxed">
            <p className="text-primary mb-2">&gt; query --talent --available</p>
            <p className="text-secondary mb-4">Searching database for matching parameters...</p>
            <p className="text-on-surface mb-6">"Technical depth verified. Candidate demonstrates extreme proficiency in high-load infrastructure management and security hardened deployments."</p>
            <div className="flex items-center gap-4">
              <span className="text-primary-container animate-pulse">&gt;</span>
              <a
                href="#contact"
                className="inline-block border border-primary-container/30 px-6 py-2 hover:bg-primary-container hover:text-on-primary-container transition-all uppercase tracking-widest text-xs font-bold"
              >
                Initiate_Collaboration.sh
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
