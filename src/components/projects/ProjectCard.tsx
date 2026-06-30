import { useRef, useState, CSSProperties, MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { Project } from '@/data/projects'
import Tag from '@/components/ui/Tag'
import { clamp } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
  onOpen: (project: Project) => void
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<CSSProperties>({})

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    setStyle({
      transform: `perspective(800px) rotateX(${clamp((0.5 - py) * 8, -6, 6)}deg) rotateY(${clamp(
        (px - 0.5) * 8,
        -6,
        6
      )}deg) translateY(-6px)`,
    })
  }

  function onMouseLeave() {
    setStyle({ transform: 'perspective(800px) rotateX(0) rotateY(0) translateY(0)' })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ ...style, transition: 'transform 0.25s ease-out' }}
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="glass rounded-2xl overflow-hidden shadow-soft group"
    >
      <button
        onClick={() => onOpen(project)}
        className="block w-full text-left"
        aria-haspopup="dialog"
      >
        <div className="relative h-52 overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/10 to-transparent" />
          <span className="absolute top-3 left-3 font-mono text-[11px] px-2.5 py-1 rounded-md bg-void/70 text-accent-cyan border border-edge">
            {project.category}
          </span>
        </div>
        <div className="p-6">
          <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-accent-cyan transition-colors">
            {project.title}
          </h3>
          <p className="text-ink-muted text-sm leading-relaxed mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-1">
            {project.tech.slice(0, 3).map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
      </button>
      <div className="px-6 pb-6 flex items-center gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-accent-blue transition-colors"
        >
          <FiGithub /> Code
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-accent-cyan transition-colors"
        >
          <FiExternalLink /> Live Demo
        </a>
      </div>
    </motion.div>
  )
}
