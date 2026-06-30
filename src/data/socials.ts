export interface SocialLink {
  name: string
  href: string
  icon: 'github' | 'linkedin' | 'twitter' | 'dribbble'
}

export const socials: SocialLink[] = [
  { name: 'GitHub', href: 'https://github.com/yourusername', icon: 'github' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: 'linkedin' },
  { name: 'Twitter', href: 'https://twitter.com/yourusername', icon: 'twitter' },
  { name: 'Dribbble', href: 'https://dribbble.com/yourusername', icon: 'dribbble' },
]
