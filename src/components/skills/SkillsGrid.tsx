import { useRef, useState, CSSProperties, MouseEvent, ReactNode } from 'react'
import { skills } from '@/data/skills'
import SkillBar from './SkillBar'
import SkillCircle from './SkillCircle'
import Reveal from '@/components/ui/Reveal'
import EditorFrame from '@/components/layout/EditorFrame'
import GlassCard from '@/components/ui/GlassCard'
import { clamp } from '@/lib/utils'

const core = skills.filter((s) => s.category === 'core')
const tools = skills.filter((s) => s.category === 'tools')
const extra = skills.filter((s) => s.category === 'extra')

function TiltCard({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<CSSProperties>({})

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rotateX = clamp((0.5 - py) * 14, -10, 10)
    const rotateY = clamp((px - 0.5) * 14, -10, 10)
    setStyle({
      transform: `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
    })
  }

  function onMouseLeave() {
    setStyle({ transform: 'perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)' })
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ ...style, transition: 'transform 0.25s ease-out' }}
    >
      {children}
    </div>
  )
}

export default function SkillsGrid() {
  return (
    <div className="space-y-14">
      <Reveal>
        <EditorFrame filename="core-skills.tsx">
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
            {core.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} delay={i * 0.05} />
            ))}
          </div>
        </EditorFrame>
      </Reveal>

      <Reveal delay={0.1}>
        <h3 className="font-display text-xl font-semibold mb-6">Tools &amp; Workflow</h3>
        <div className="flex flex-wrap gap-8 justify-start">
          {tools.map((skill) => (
            <SkillCircle key={skill.name} skill={skill} />
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <h3 className="font-display text-xl font-semibold mb-6">Also Comfortable With</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          {extra.map((skill) => (
            <TiltCard key={skill.name}>
              <GlassCard className="flex items-center justify-between">
                <span className="font-mono text-sm">{skill.name}</span>
                <span className="font-mono text-xs text-accent-purple">{skill.level}%</span>
              </GlassCard>
            </TiltCard>
          ))}
        </div>
      </Reveal>
    </div>
  )
}
