import { FiArrowDown, FiDownload } from 'react-icons/fi'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import SocialLinks from './SocialLinks'
import EditorFrame from '@/components/layout/EditorFrame'
import { useTypewriter } from '@/hooks/useTypewriter'

const roles = ['Front-End Developer', 'UI Engineer', 'React Specialist', 'Accessibility Advocate']

export default function Hero() {
  const typed = useTypewriter({ words: roles })

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center pt-28 pb-16 overflow-hidden"
      aria-label="Introduction"
    >
      {/* floating gradient orbs */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-accent-blue/25 blur-[100px] animate-float"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent-purple/25 blur-[110px] animate-float-slow"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center w-full">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-mono text-accent-cyan text-sm mb-5"
          >
            // hello world, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]"
          >
            OMAR <br />
            <span className="text-gradient">HOSNY</span> <br />
            
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-6 font-mono text-lg sm:text-xl text-ink-muted h-8"
            aria-live="polite"
          >
            <span className="text-ink">I build </span>
            <span className="text-accent-blue">{typed}</span>
            <span className="inline-block w-[2px] h-5 bg-accent-cyan ml-1 align-middle animate-blink" aria-hidden="true" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-6 text-ink-muted max-w-xl leading-relaxed"
          >
            I design and build fast, accessible, and visually refined web experiences —
            turning complex requirements into interfaces that recruiters remember and
            clients trust.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="#projects-preview" variant="primary">
              View Projects
            </Button>
            <Button href="/cv/your-name-cv.pdf" variant="outline" download>
              <FiDownload /> Download CV
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-10"
          >
            <SocialLinks />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative mx-auto"
        >
          <div className="relative h-[320px] w-[280px] sm:h-[380px] sm:w-[330px] mx-auto animate-float">
            <div className="absolute -inset-3 rounded-[2rem] bg-grad-primary opacity-40 blur-2xl" aria-hidden="true" />
            <img
              src="public\Coding.svg"
              alt="Portrait of Alex Carter, Front-End Developer"
              loading="eager"
              className="relative h-full w-full object-cover rounded-[2rem] border border-edge shadow-soft"
            />
          </div>

          <EditorFrame filename="status.json" className="absolute -bottom-8 -left-6 w-56 hidden sm:block animate-float-slow">
            <p className="font-mono text-xs leading-relaxed">
              <span className="text-accent-purple">"available"</span>:{' '}
              <span className="text-accent-cyan">true</span>,<br />
              <span className="text-accent-purple">"basedIn"</span>:{' '}
              <span className="text-accent-cyan">"Remote"</span>
            </p>
          </EditorFrame>
        </motion.div>
      </div>

      <motion.a
        href="#projects-preview"
        aria-label="Scroll to projects preview"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-muted hover:text-accent-cyan"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <FiArrowDown size={22} />
      </motion.a>
    </section>
  )
}
