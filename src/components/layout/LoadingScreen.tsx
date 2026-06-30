import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Boot-sequence style loading screen: types out a fake terminal command
 * to match the code-editor signature used throughout the site.
 */
export default function LoadingScreen() {
  const [done, setDone] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress((p) => {
        const next = Math.min(p + Math.random() * 18, 100)
        if (next >= 100) {
          window.clearInterval(interval)
          window.setTimeout(() => setDone(true), 350)
        }
        return next
      })
    }, 140)
    return () => window.clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] bg-void flex items-center justify-center"
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <div className="w-[min(420px,85vw)] font-mono">
            <p className="text-ink-muted text-sm mb-3">
              <span className="text-accent-cyan">alex@portfolio</span>:~$ npm run dev
            </p>
            <div className="h-1.5 w-full rounded-full bg-surface2 overflow-hidden">
              <motion.div
                className="h-full bg-grad-primary"
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
            <p className="text-ink-faint text-xs mt-3">{Math.floor(progress)}% — compiling modules</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
