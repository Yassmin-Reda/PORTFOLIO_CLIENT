import { FiCode, FiLayout, FiZap, FiSmartphone } from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'
import GlassCard from '@/components/ui/GlassCard'
import { whatIDo } from '@/data/journey'

const iconMap = { code: FiCode, layout: FiLayout, zap: FiZap, smartphone: FiSmartphone }

export default function WhatIDo() {
  return (
    <div className="grid sm:grid-cols-2 gap-5">
      {whatIDo.map((item, i) => {
        const Icon = iconMap[item.icon]
        return (
          <Reveal key={item.title} delay={i * 0.08}>
            <GlassCard className="h-full hover:-translate-y-1.5 hover:shadow-glow group [transform-style:preserve-3d]">
              <div className="h-11 w-11 rounded-xl bg-grad-primary flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <Icon size={20} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{item.description}</p>
            </GlassCard>
          </Reveal>
        )
      })}
    </div>
  )
}
