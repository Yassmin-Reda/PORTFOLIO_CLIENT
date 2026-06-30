import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 480)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full bg-grad-primary text-white shadow-glow flex items-center justify-center hover:-translate-y-1 transition-transform"
        >
          <FiArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
