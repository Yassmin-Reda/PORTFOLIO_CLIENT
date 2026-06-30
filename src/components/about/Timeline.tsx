import Reveal from '@/components/ui/Reveal'
import { TimelineItem } from '@/data/experience'

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative border-l border-edge ml-3">
      {items.map((item, i) => (
        <li key={item.title} className="mb-10 ml-7 last:mb-0">
          <Reveal delay={i * 0.08}>
            <span
              className="absolute -left-[7px] flex h-3.5 w-3.5 items-center justify-center rounded-full bg-grad-primary ring-4 ring-void"
              aria-hidden="true"
            />
            <p className="font-mono text-xs text-accent-cyan mb-1">{item.period}</p>
            <h3 className="font-display text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-accent-blue mb-2">{item.org}</p>
            <p className="text-ink-muted text-sm leading-relaxed">{item.description}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  )
}
