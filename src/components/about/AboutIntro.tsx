import Reveal from '@/components/ui/Reveal'
import EditorFrame from '@/components/layout/EditorFrame'

export default function AboutIntro() {
  return (
    <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
      <Reveal>
        <div className="relative">
          <div className="absolute -inset-3 rounded-[2rem] bg-grad-primary opacity-30 blur-2xl" aria-hidden="true" />
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=900&auto=format&fit=crop"
            alt="Alex Carter working at a laptop"
            loading="lazy"
            className="relative w-full h-[420px] object-cover rounded-[2rem] border border-edge shadow-soft"
          />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <EditorFrame filename="about-me.md">
          <p className="text-ink-muted leading-relaxed">
            I&apos;m a front-end developer who treats interfaces as a craft: every spacing
            value, transition curve, and contrast ratio is a decision, not an accident.
            Over the past five years I&apos;ve worked across agencies and product teams,
            shipping dashboards, storefronts, and marketing sites that hold up under real
            traffic and real users.
          </p>
          <p className="text-ink-muted leading-relaxed mt-4">
            I care about the parts most people skip — keyboard navigation, loading states,
            and the 200ms that separate &quot;fast&quot; from &quot;fine&quot;. When I&apos;m not building,
            I&apos;m usually reading about rendering performance or redesigning something
            that didn&apos;t need it.
          </p>
        </EditorFrame>
      </Reveal>
    </div>
  )
}
