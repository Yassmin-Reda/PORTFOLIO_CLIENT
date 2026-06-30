import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi'
import { Project } from '@/data/projects'
import Tag from '@/components/ui/Tag'
import Button from '@/components/ui/Button'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (project) closeRef.current?.focus()
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div className="absolute inset-0 bg-void/85 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative glass max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-2xl shadow-soft"
          >
            <img src={project.image} alt="" className="h-56 w-full object-cover" />
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Close project details"
              className="absolute top-4 right-4 h-9 w-9 rounded-full bg-void/70 border border-edge flex items-center justify-center text-ink hover:text-accent-cyan"
            >
              <FiX size={18} />
            </button>
            <div className="p-7">
              <p className="font-mono text-xs text-accent-cyan mb-2">{project.category}</p>
              <h3 id="project-modal-title" className="font-display text-2xl font-semibold mb-4">
                {project.title}
              </h3>
              <p className="text-ink-muted leading-relaxed mb-5">{project.longDescription}</p>
              <div className="flex flex-wrap gap-2 mb-7">
                {project.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Button href={project.github} variant="outline">
                  <FiGithub /> View Code
                </Button>
                <Button href={project.demo} variant="primary">
                  <FiExternalLink /> Live Demo
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
