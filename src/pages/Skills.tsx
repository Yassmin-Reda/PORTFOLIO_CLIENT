import { useSEO } from '@/hooks/useSEO'
import SectionHeading from '@/components/ui/SectionHeading'
import SkillsGrid from '@/components/skills/SkillsGrid'

export default function Skills() {
  useSEO(
    'Skills | Alex Carter — Front-End Developer',
    'An overview of Alex Carter\'s front-end skill set, including HTML, CSS, JavaScript, React, Git, REST APIs and more.',
    '/skills'
  )

  return (
    <div className="pt-32 pb-24">
      <section className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="// 01_skills"
          title="Skills & technologies"
          description="Tools I use daily, and a few I keep in the back pocket for the right problem."
        />
        <div className="mt-12">
          <SkillsGrid />
        </div>
      </section>
    </div>
  )
}
