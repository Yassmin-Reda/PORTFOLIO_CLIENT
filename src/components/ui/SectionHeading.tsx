import Reveal from './Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

/**
 * eyebrow is styled like a source-code comment ("// 02_skills"), tying
 * section labels to the developer / code-editor visual signature.
 */
export default function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const isCenter = align === 'center'
  return (
    <div className={isCenter ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}>
      <Reveal>
        <p className="font-mono text-sm text-accent-cyan mb-3">{eyebrow}</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-ink-muted text-base sm:text-lg leading-relaxed">{description}</p>
        )}
      </Reveal>
    </div>
  )
}
