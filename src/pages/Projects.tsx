import { useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useSEO } from '@/hooks/useSEO'
import SectionHeading from '@/components/ui/SectionHeading'
import ProjectFilter from '@/components/projects/ProjectFilter'
import ProjectCard from '@/components/projects/ProjectCard'
import ProjectModal from '@/components/projects/ProjectModal'
import Reveal from '@/components/ui/Reveal'
import { projects, Project } from '@/data/projects'

export default function Projects() {
  useSEO(
    'Projects | Alex Carter — Front-End Developer',
    'Explore a curated selection of front-end projects built by Alex Carter, including web apps, dashboards, and e-commerce experiences.',
    '/projects'
  )

  const [filter, setFilter] = useState<Project['category'] | 'All'>('All')
  const [active, setActive] = useState<Project | null>(null)

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  )

  return (
    <div className="pt-32 pb-24">
      <section className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="// 01_projects"
          title="Things I've built"
          description="A mix of client work and personal builds, spanning dashboards, storefronts, and marketing sites."
        />

        <Reveal delay={0.1} className="mt-8 mb-10">
          <ProjectFilter active={filter} onChange={setFilter} />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={setActive} />
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-ink-muted text-center py-20 font-mono text-sm">
            No projects match this filter yet — check back soon.
          </p>
        )}
      </section>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </div>
  )
}
