import { PROJECTS } from '../data/mockData'

export function Projects() {
  return (
    <section id="projects" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <p className="font-mono text-primary text-xs uppercase tracking-[0.3em] mb-4 text-center">// INFRASTRUCTURE_PROJECTS</p>
        <h2 className="font-headline text-5xl font-black uppercase tracking-tighter text-on-surface mb-16 text-center">
          Infrastructure_Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {PROJECTS.map((project) => {
            if (project.hasImage && project.imageGradient !== 'right') {
              return (
                <div key={project.number} className={`${project.colSpan} group relative overflow-hidden bg-surface-container-high rounded-xl`}>
                  <div className="w-full h-[400px] bg-gradient-to-br from-surface-container-high to-surface-container-highest opacity-40 group-hover:scale-105 transition-transform duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent p-12 flex flex-col justify-end">
                    <span className="text-primary font-mono text-xs uppercase tracking-widest mb-2">{project.status}</span>
                    <h3 className="font-headline text-3xl font-bold text-on-surface mb-4">{project.title}</h3>
                    <p className="text-on-surface-variant max-w-lg mb-6">{project.description}</p>
                    <div className="flex gap-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono border border-outline-variant/30 px-2 py-1 uppercase">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }

            if (project.hasImage && project.imageGradient === 'right') {
              return (
                <div key={project.number} className={`${project.colSpan} group relative overflow-hidden bg-surface-container-high rounded-xl`}>
                  <div className="w-full h-full min-h-[300px] bg-gradient-to-br from-surface-container-high to-surface-container-highest opacity-30 group-hover:scale-105 transition-transform duration-700 absolute inset-0"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest to-transparent p-12 flex flex-col justify-center">
                    <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">{project.title}</h3>
                    <p className="text-on-surface-variant max-w-sm mb-6">{project.description}</p>
                    <div className="flex gap-2">
                      <span className="bg-primary-container text-on-primary-container text-[10px] font-mono px-2 py-1 font-bold">{project.status}</span>
                    </div>
                  </div>
                </div>
              )
            }

            return (
              <div key={project.number} className={`${project.colSpan} bg-surface-container-high p-8 flex flex-col justify-between group`}>
                <div>
                  <div className="w-12 h-12 bg-primary-container/10 flex items-center justify-center rounded mb-6">
                    <span className="material-symbols-outlined text-primary">{project.icon}</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-4">{project.title}</h3>
                  <p className="text-sm text-on-surface-variant font-body leading-relaxed">{project.description}</p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-primary uppercase">{project.status}</span>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
