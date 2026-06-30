import { categories, Project } from '@/data/projects'
import { cn } from '@/lib/utils'

interface ProjectFilterProps {
  active: Project['category'] | 'All'
  onChange: (category: Project['category'] | 'All') => void
}

export default function ProjectFilter({ active, onChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
      {categories.map((cat) => (
        <button
          key={cat}
          role="tab"
          aria-selected={active === cat}
          onClick={() => onChange(cat)}
          className={cn(
            'font-mono text-xs sm:text-sm px-4 py-2 rounded-full border transition-all duration-300',
            active === cat
              ? 'bg-grad-primary text-white border-transparent shadow-glow'
              : 'border-edge text-ink-muted hover:text-ink hover:border-accent-blue'
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
