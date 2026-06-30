import { useEffect, useRef, useState } from 'react'

/**
 * Custom mouse-follower cursor. Only active on fine-pointer (desktop) devices;
 * falls back to the native cursor on touch devices automatically via CSS.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isPointer, setIsPointer] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches
    setEnabled(isFine)
    if (!isFine) return

    let ringX = 0
    let ringY = 0
    let mouseX = 0
    let mouseY = 0

    function onMove(e: MouseEvent) {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      }
      const target = e.target as HTMLElement
      setIsPointer(Boolean(target.closest('a, button, [role="button"], input, textarea')))
    }

    function tick() {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
      }
      requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    const raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[90] h-2 w-2 -ml-1 -mt-1 rounded-full bg-accent-cyan hidden md:block"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[90] -ml-4 -mt-4 h-8 w-8 rounded-full border border-accent-blue/60 transition-[width,height,margin] duration-200 hidden md:block ${
          isPointer ? 'scale-150 border-accent-purple bg-accent-purple/10' : ''
        }`}
      />
    </>
  )
}
