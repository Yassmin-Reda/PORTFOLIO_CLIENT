import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMenu } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'
import MobileMenu from './MobileMenu'
import { cn } from '@/lib/utils'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-300',
          scrolled ? 'py-3' : 'py-5'
        )}
      >
        <nav
          aria-label="Primary"
          className={cn(
            'mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between rounded-2xl transition-all duration-300',
            scrolled ? 'glass shadow-soft py-2 px-4 sm:px-6 mx-4' : ''
          )}
        >
          <NavLink to="/" className="font-display font-semibold text-lg tracking-tight flex items-center gap-2">
            <span className="font-mono text-accent-cyan">&lt;/&gt;</span>
            <span>
              Alex<span className="text-gradient">.dev</span>
            </span>
          </NavLink>

          <ul className="hidden md:flex items-center gap-1 font-mono text-sm">
            {links.map((link, i) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    cn(
                      'relative px-4 py-2 rounded-full transition-colors',
                      isActive ? 'text-void' : 'text-ink-muted hover:text-ink'
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-grad-primary -z-10"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      )}
                      <span aria-hidden="true" className="text-accent-cyan mr-0.5">
                        {String(i).padStart(2, '0')}.
                      </span>
                      {link.label}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            <button
              className="md:hidden h-10 w-10 rounded-full glass flex items-center justify-center"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <FiMenu size={20} />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={links} />
    </>
  )
}
