import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

let lenis = null

/** Initialise Lenis once and wire it into GSAP's ticker. */
export function initSmoothScroll() {
  if (lenis) return lenis

  lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.6,
  })

  lenis.on('scroll', ScrollTrigger.update)

  const tick = (time) => lenis.raf(time * 1000)
  gsap.ticker.add(tick)
  gsap.ticker.lagSmoothing(0)

  lenis._gsapTick = tick
  return lenis
}

export function getLenis() {
  return lenis
}

/** Scroll to an element id (or pixel value) with the site's easing. */
export function scrollToSection(target, options = {}) {
  const opts = { offset: -84, duration: 1.3, ...options }
  if (lenis) {
    lenis.scrollTo(target, opts)
    return
  }
  if (typeof target === 'string' && target.startsWith('#')) {
    const el = document.querySelector(target)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY + opts.offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  } else if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: 'smooth' })
  }
}

export function lockScroll(locked) {
  if (!lenis) {
    document.body.style.overflow = locked ? 'hidden' : ''
    return
  }
  if (locked) lenis.stop()
  else lenis.start()
}

/** Small helper used across components. */
export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export { gsap, ScrollTrigger }
