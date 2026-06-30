import { useEffect, useRef, useState } from 'react'
import Reveal from '@/components/ui/Reveal'
import { funFacts } from '@/data/journey'

function Counter({ value }: { value: string }) {
  const numeric = parseInt(value.replace(/\D/g, ''), 10) || 0
  const suffix = value.replace(/[0-9]/g, '')
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1200
          const start = performance.now()
          function step(now: number) {
            const progress = Math.min((now - start) / duration, 1)
            setCount(Math.floor(progress * numeric))
            if (progress < 1) requestAnimationFrame(step)
            else setCount(numeric)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [numeric])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function FunFacts() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
      {funFacts.map((fact, i) => (
        <Reveal key={fact.label} delay={i * 0.08}>
          <div className="glass rounded-2xl p-6 text-center shadow-soft">
            <p className="font-display text-3xl sm:text-4xl font-bold text-gradient">
              <Counter value={fact.value} />
            </p>
            <p className="text-ink-muted text-xs sm:text-sm mt-2">{fact.label}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
