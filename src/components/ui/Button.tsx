import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode, MouseEvent, useRef } from 'react'
import { cn } from '@/lib/utils'

type CommonProps = {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  className?: string
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type Props = ButtonAsButton | ButtonAsAnchor

const base =
  'relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 font-medium text-sm transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent-cyan disabled:opacity-50 disabled:pointer-events-none select-none'

const variants = {
  primary: 'bg-grad-primary text-white shadow-glow hover:shadow-glow-purple hover:-translate-y-0.5',
  outline: 'border border-edge text-ink hover:border-accent-blue hover:-translate-y-0.5',
  ghost: 'text-ink-muted hover:text-ink',
}

/**
 * Button with a built-in ripple effect on click/tap, used across all CTAs.
 */
export default function Button({ children, variant = 'primary', className, ...rest }: Props) {
  const rippleHost = useRef<HTMLSpanElement>(null)

  function spawnRipple(e: MouseEvent<HTMLElement>) {
    const host = rippleHost.current
    if (!host) return
    const rect = host.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const ripple = document.createElement('span')
    ripple.style.width = ripple.style.height = `${size}px`
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`
    ripple.className = 'absolute rounded-full bg-white/30 pointer-events-none animate-[ripple_0.6s_ease-out]'
    host.appendChild(ripple)
    window.setTimeout(() => ripple.remove(), 650)
  }

  const classes = cn(base, variants[variant], className)

  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest as ButtonAsAnchor
    return (
      <a
        href={href}
        className={classes}
        onMouseDown={spawnRipple}
        {...anchorRest}
      >
        <span ref={rippleHost} className="absolute inset-0 overflow-hidden rounded-full" />
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </a>
    )
  }

  const { ...buttonRest } = rest as ButtonAsButton
  return (
    <button className={classes} onMouseDown={spawnRipple} {...buttonRest}>
      <span ref={rippleHost} className="absolute inset-0 overflow-hidden rounded-full" />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  )
}
