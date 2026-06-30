import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { projects, Project } from '@/data/projects'
import ProjectCard from '@/components/projects/ProjectCard'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { useState } from 'react'
import ProjectModal from '@/components/projects/ProjectModal'

export default function ProjectsPreview() {
  const featured = projects.filter((p) => p.featured).slice(0, 3)
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="projects-preview" className="relative z-10 max-w-6xl mx-auto px-6 py-24">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
        <SectionHeading
          eyebrow="// 02_featured-work"
          title="Selected projects"
          description="A few recent builds — production interfaces solving real product problems."
        />
        <Reveal delay={0.1}>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-mono text-sm text-accent-cyan hover:gap-3 transition-all"
          >
            View all projects <FiArrowRight />
          </Link>
        </Reveal>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setActive} />
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
