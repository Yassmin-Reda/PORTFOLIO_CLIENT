import { useSEO } from '@/hooks/useSEO'
import SectionHeading from '@/components/ui/SectionHeading'
import AboutIntro from '@/components/about/AboutIntro'
import Timeline from '@/components/about/Timeline'
import WhatIDo from '@/components/about/WhatIDo'
import FunFacts from '@/components/about/FunFacts'
import Reveal from '@/components/ui/Reveal'
import { experience, education } from '@/data/experience'
import { journey } from '@/data/journey'

export default function About() {
  useSEO(
    'About | Alex Carter — Front-End Developer',
    'Learn about Alex Carter\'s background, education, experience, and approach to front-end development.',
    '/about'
  )

  return (
    <div className="pt-32 pb-24">
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <SectionHeading eyebrow="// 01_about-me" title="The person behind the code" />
        <div className="mt-10">
          <AboutIntro />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-24">
        <SectionHeading eyebrow="// 02_what-i-do" title="What I do" />
        <div className="mt-10">
          <WhatIDo />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-24 grid lg:grid-cols-2 gap-16">
        <div>
          <SectionHeading eyebrow="// 03_experience" title="Experience" />
          <div className="mt-10">
            <Timeline items={experience} />
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="// 04_education" title="Education" />
          <div className="mt-10">
            <Timeline items={education} />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-24">
        <SectionHeading eyebrow="// 05_my-journey" title="My journey" />
        <div className="mt-10 relative pl-4 border-l border-edge space-y-8">
          {journey.map((step, i) => (
            <Reveal key={step.year} delay={i * 0.06}>
              <div className="relative pl-6">
                <span className="absolute -left-[25px] top-1 h-3 w-3 rounded-full bg-grad-primary ring-4 ring-void" aria-hidden="true" />
                <span className="font-mono text-xs text-accent-cyan">{step.year}</span>
                <p className="text-ink-muted mt-1">{step.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="// 06_fun-facts" title="Fun facts" />
        <div className="mt-10">
          <FunFacts />
        </div>
      </section>
    </div>
  )
}
