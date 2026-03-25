export function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  // Add flash highlight to the section
  el.classList.add('section-highlight')
  el.addEventListener('animationend', () => el.classList.remove('section-highlight'), { once: true })
}
