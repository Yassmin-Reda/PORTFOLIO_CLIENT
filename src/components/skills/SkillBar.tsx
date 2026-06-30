import { motion } from 'framer-motion'
import { Skill } from '@/data/skills'

export default function SkillBar({ skill, delay = 0 }: { skill: Skill; delay?: number }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-sm">{skill.name}</span>
        <span className="font-mono text-xs text-accent-cyan">{skill.level}%</span>
      </div>
      <div className="h-2.5 rounded-full bg-surface2 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-grad-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}
