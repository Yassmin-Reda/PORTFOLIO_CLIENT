import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi'
import Reveal from '@/components/ui/Reveal'
import EditorFrame from '@/components/layout/EditorFrame'

const items = [
  { icon: FiMail, label: 'Email', value: 'hello@alexcarter.dev', href: 'mailto:hello@alexcarter.dev' },
  { icon: FiPhone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: FiMapPin, label: 'Location', value: 'Remote — Worldwide', href: undefined },
  { icon: FiGithub, label: 'GitHub', value: 'github.com/yourusername', href: 'https://github.com/yourusername' },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/yourusername', href: 'https://linkedin.com/in/yourusername' },
]

export default function ContactInfo() {
  return (
    <Reveal>
      <EditorFrame filename="contact.json">
        <ul className="space-y-5">
          {items.map((item) => {
            const Icon = item.icon
            const content = (
              <span className="flex items-center gap-4">
                <span className="h-10 w-10 rounded-xl bg-surface2 border border-edge flex items-center justify-center text-accent-cyan shrink-0">
                  <Icon size={16} />
                </span>
                <span>
                  <span className="block font-mono text-xs text-ink-faint">{item.label}</span>
                  <span className="block text-sm">{item.value}</span>
                </span>
              </span>
            )
            return (
              <li key={item.label}>
                {item.href ? (
                  <a href={item.href} className="hover:text-accent-cyan transition-colors">
                    {content}
                  </a>
                ) : (
                  content
                )}
              </li>
            )
          })}
        </ul>
      </EditorFrame>
    </Reveal>
  )
}
