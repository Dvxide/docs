import { useState } from 'react'
import { useScrollSpy } from './hooks/useScrollSpy'
import { useTheme } from './hooks/useTheme'
import { BootSequence } from './components/BootSequence'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { GitHubActivity } from './components/GitHubActivity'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { NotFound } from './components/NotFound'

const SECTION_IDS = ['terminal', 'infrastructure', 'expertise', 'github', 'projects', 'contact']
const VALID_PATHS = ['/', '/index.html', '']

export default function App() {
  const [booted, setBooted] = useState(false)
  const { activeSection } = useScrollSpy(SECTION_IDS)
  const { theme, toggleTheme } = useTheme()

  const path = window.location.pathname
  if (!VALID_PATHS.includes(path)) {
    return <NotFound />
  }

  if (!booted) {
    return <BootSequence onBoot={() => setBooted(true)} />
  }

  return (
    <>
      <Navbar activeSection={activeSection} theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <GitHubActivity />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
