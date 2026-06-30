import { AnimatePresence, motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { FiX } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  links: { to: string; label: string }[]
}

export default function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="absolute inset-0 bg-void/90 backdrop-blur-md" onClick={onClose} />
          <motion.div
            className="absolute right-0 top-0 h-full w-[78%] max-w-sm glass border-l border-edge p-6 flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 32 }}
          >
            <div className="flex items-center justify-between mb-10">
              <span className="font-display font-semibold">Menu</span>
              <button
                onClick={onClose}
                aria-label="Close navigation menu"
                className="h-10 w-10 rounded-full glass flex items-center justify-center"
              >
                <FiX size={20} />
              </button>
            </div>
            <ul className="flex flex-col gap-2 font-mono">
              {links.map((link, i) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-3 rounded-xl text-lg transition-colors ${
                        isActive ? 'text-accent-cyan bg-surface2' : 'text-ink-muted hover:text-ink'
                      }`
                    }
                  >
                    <span className="text-xs text-accent-purple">{String(i).padStart(2, '0')}</span>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6 border-t border-edge flex items-center justify-between">
              <span className="text-sm text-ink-muted">Theme</span>
              <ThemeToggle />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
