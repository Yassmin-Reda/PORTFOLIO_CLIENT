import { useSEO } from '@/hooks/useSEO'
import Hero from '@/components/home/Hero'
import ProjectsPreview from '@/components/home/ProjectsPreview'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import GlassCard from '@/components/ui/GlassCard'
import { skills } from '@/data/skills'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import SkillBar from '@/components/skills/SkillBar'

export default function Home() {
  useSEO(
    'Alex Carter | Front-End Developer & UI Engineer',
    'Front-End Developer crafting fast, accessible, and beautifully animated web experiences with React, TypeScript and modern tooling.',
    '/'
  )

  const topSkills = skills.slice(0, 6)

  return (
    <>
      <Hero />
      <ProjectsPreview />

      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <SectionHeading
          eyebrow="// 03_toolbox"
          title="What I build with"
          description="The core stack I reach for when shipping production interfaces."
        />
        <Reveal delay={0.1} className="mt-10">
          <GlassCard>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
              {topSkills.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} delay={i * 0.05} />
              ))}
            </div>
          </GlassCard>
        </Reveal>
        <Reveal delay={0.2} className="mt-8">
          <Link
            to="/skills"
            className="inline-flex items-center gap-2 font-mono text-sm text-accent-cyan hover:gap-3 transition-all"
          >
            See full skillset <FiArrowRight />
          </Link>
        </Reveal>
      </section>

      <section className="relative z-10 max-w-4xl mx-auto px-6 pb-28 text-center">
        <Reveal>
          <p className="font-mono text-sm text-accent-cyan mb-3">// 04_lets-talk</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-5">
            Have a project in mind?
          </h2>
          <p className="text-ink-muted mb-8 max-w-xl mx-auto">
            I&apos;m currently open to new opportunities and freelance collaborations.
            Let&apos;s build something that performs as good as it looks.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-grad-primary text-white px-7 py-3.5 font-medium shadow-glow hover:shadow-glow-purple hover:-translate-y-0.5 transition-all"
          >
            Get in touch <FiArrowRight />
          </Link>
        </Reveal>
      </section>
    </>
  )
}
