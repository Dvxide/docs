import { useState, useEffect } from 'react'

export function useScrollSpy(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 100)

      const scrollY = window.pageYOffset
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.offsetTop - 150
        if (scrollY >= top && scrollY < top + el.offsetHeight) {
          setActiveSection(id)
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [sectionIds])

  return { activeSection, isScrolled }
}
