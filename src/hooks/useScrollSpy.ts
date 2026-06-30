import { useEffect, useState } from 'react'

/**
 * Tracks which section id is currently most visible in the viewport.
 * Used to highlight the active link in the navbar.
 */
export function useScrollSpy(ids: string[], offset = 120) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '')

  useEffect(() => {
    function onScroll() {
      let current = ids[0] ?? ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.getBoundingClientRect().top
        if (top - offset <= 0) {
          current = id
        }
      }
      setActiveId(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids, offset])

  return activeId
}
