import { FiMoon, FiSun } from 'react-icons/fi'
import { useTheme } from '@/hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={theme === 'light'}
      className="relative h-10 w-10 rounded-full glass flex items-center justify-center text-ink hover:text-accent-cyan transition-colors"
    >
      {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  )
}
