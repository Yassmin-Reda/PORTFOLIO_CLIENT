import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import LoadingScreen from '@/components/layout/LoadingScreen'
import CustomCursor from '@/components/layout/CustomCursor'
import ParticleField from '@/components/layout/ParticleField'
import ScrollToTopButton from '@/components/layout/ScrollToTopButton'
import PageTransition from '@/components/layout/PageTransition'

import Home from '@/pages/Home'
import About from '@/pages/About'
import Projects from '@/pages/Projects'
import Skills from '@/pages/Skills'
import Contact from '@/pages/Contact'
import NotFound from '@/pages/NotFound'

export default function App() {
  const location = useLocation()

  return (
    <div className="relative min-h-screen has-custom-cursor">
      <LoadingScreen />
      <CustomCursor />
      <ParticleField />

      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />
          <Route
            path="/projects"
            element={
              <PageTransition>
                <Projects />
              </PageTransition>
            }
          />
          <Route
            path="/skills"
            element={
              <PageTransition>
                <Skills />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFound />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>

      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
