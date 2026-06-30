import { useEffect, useRef, useState } from 'react'
import { Skill } from '@/data/skills'

const SIZE = 96
const STROKE = 8
const RADIUS = (SIZE - STROKE) / 2
const CIRC = 2 * Math.PI * RADIUS

export default function SkillCircle({ skill }: { skill: Skill }) {
  const [progress, setProgress] = useState(0)
  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProgress(skill.level)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [skill.level])

  const offset = CIRC - (progress / 100) * CIRC

  return (
    <div className="flex flex-col items-center gap-3">
      <svg ref={ref} width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} role="img" aria-label={`${skill.name} proficiency ${skill.level}%`}>
        <defs>
          <linearGradient id={`grad-${skill.name}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5B8DEF" />
            <stop offset="100%" stopColor="#9B6BFF" />
          </linearGradient>
        </defs>
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke="currentColor"
          className="text-surface2"
          strokeWidth={STROKE}
        />
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke={`url(#grad-${skill.name})`}
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={CIRC}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}
          style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(0.22,1,0.36,1)' }}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-ink font-mono"
          fontSize="16"
          fontWeight="600"
        >
          {progress}%
        </text>
      </svg>
      <span className="font-display text-sm font-medium">{skill.name}</span>
    </div>
  )
}
