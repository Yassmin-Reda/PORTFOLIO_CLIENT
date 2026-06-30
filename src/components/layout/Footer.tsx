import { socials } from '@/data/socials'
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/fa'

const iconMap = { github: FaGithub, linkedin: FaLinkedin, twitter: FaTwitter, dribbble: FaDribbble }

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-edge mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} Alex Carter. Built with React, TypeScript &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          {socials.map((s) => {
            const Icon = iconMap[s.icon]
            return (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="h-9 w-9 rounded-full glass flex items-center justify-center text-ink-muted hover:text-accent-cyan hover:-translate-y-0.5 transition-all"
              >
                <Icon size={15} />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
