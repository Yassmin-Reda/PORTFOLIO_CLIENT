import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/fa'
import { socials } from '@/data/socials'

const iconMap = { github: FaGithub, linkedin: FaLinkedin, twitter: FaTwitter, dribbble: FaDribbble }

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {socials.map((s) => {
        const Icon = iconMap[s.icon]
        return (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            className="h-11 w-11 rounded-full glass flex items-center justify-center text-ink-muted hover:text-accent-cyan hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
          >
            <Icon size={17} />
          </a>
        )
      })}
    </div>
  )
}
