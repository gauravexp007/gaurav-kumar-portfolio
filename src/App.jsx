import { useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig, useReducedMotion } from 'framer-motion'
import { ScrollTrigger, initSmoothScroll, lockScroll, prefersReducedMotion } from './lib/scroll'
import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeBand from './components/ui/MarqueeBand'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Journey from './components/Journey'
import Certificates from './components/Certificates'
import Internships from './components/Internships'
import Beyond from './components/Beyond'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AmbientBackground from './components/AmbientBackground'

export default function App() {
  const reduced = useReducedMotion()
  const [loading, setLoading] = useState(() => !prefersReducedMotion())
  const ready = !loading

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!prefersReducedMotion()) initSmoothScroll()
    else lockScroll(false)

    const refresh = () => ScrollTrigger.refresh()
    const timeout = setTimeout(refresh, 900)
    if (document.fonts?.ready) document.fonts.ready.then(refresh)

    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    lockScroll(loading)
    if (!loading) {
      const timeout = setTimeout(() => ScrollTrigger.refresh(), 400)
      return () => clearTimeout(timeout)
    }
    return undefined
  }, [loading])

  useEffect(() => {
    if (reduced) setLoading(false)
  }, [reduced])

  return (
    <MotionConfig reducedMotion="user">
      <div className="grain relative min-h-screen bg-ink">
        <AmbientBackground />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[130] focus:rounded-full focus:bg-wine focus:px-5 focus:py-2.5 focus:font-display focus:text-sm focus:text-ink"
        >
          Skip to content
        </a>

        <AnimatePresence mode="wait">
          {loading && <Preloader key="preloader" onDone={() => setLoading(false)} />}
        </AnimatePresence>

        <Cursor />
        <ScrollProgress />
        <Navbar ready={ready} />

        <div className="relative z-10">
          <main id="main">
            <Hero ready={ready} />
            <MarqueeBand />
            <About />
            <Skills />
            <Projects />
            <Journey />
            <Certificates />
            <Internships />
            <Beyond />
            <Contact />
          </main>

          <Footer />
        </div>
      </div>
    </MotionConfig>
  )
}
