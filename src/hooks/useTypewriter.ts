import { useState, useEffect, useRef } from 'react'

const TYPING_SPEED = 100
const DELETING_SPEED = 50
const PAUSE_DURATION = 2000

export function useTypewriter(commands: readonly string[]) {
  const [displayText, setDisplayText] = useState('')
  const stateRef = useRef({ commandIndex: 0, charIndex: 0, isDeleting: false })

  useEffect(() => {
    const state = stateRef.current
    let timeoutId: ReturnType<typeof setTimeout>

    function tick() {
      const current = commands[state.commandIndex]

      if (state.isDeleting) {
        state.charIndex--
        setDisplayText(current.substring(0, state.charIndex))
      } else {
        state.charIndex++
        setDisplayText(current.substring(0, state.charIndex))
      }

      if (!state.isDeleting && state.charIndex === current.length) {
        timeoutId = setTimeout(() => {
          state.isDeleting = true
          tick()
        }, PAUSE_DURATION)
        return
      }

      if (state.isDeleting && state.charIndex === 0) {
        state.isDeleting = false
        state.commandIndex = (state.commandIndex + 1) % commands.length
      }

      timeoutId = setTimeout(tick, state.isDeleting ? DELETING_SPEED : TYPING_SPEED)
    }

    timeoutId = setTimeout(tick, 500)
    return () => clearTimeout(timeoutId)
  }, [commands])

  return displayText
}
