import { lazy, Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react'
import { profile } from '../data/portfolio'
import { useMediaQuery } from '../lib/hooks'
import { gsap, prefersReducedMotion, scrollToSection } from '../lib/scroll'
import Magnetic from './ui/Magnetic'
import PortraitCard from './PortraitCard'
import Icon from './ui/Icon'

const HeroScene = lazy(() => import('./three/HeroScene'))

function RoleRotator({ roles }) {
  const [index, setIndex] = useState(0)
  const reduced = useReducedMotion()
  const longest = roles.reduce((a, b) => (b.length > a.length ? b : a), '')

  useEffect(() => {
    if (reduced) return undefined
    const id = setInterval(() => setIndex((value) => (value + 1) % roles.length), 2800)
    return () => clearInterval(id)
  }, [roles.length, reduced])

  return (
    <span className="relative inline-block h-[1.6em] overflow-hidden align-bottom">
      <span className="invisible whitespace-nowrap font-medium leading-[1.6]" aria-hidden>
        {longest}
      </span>
      {roles.map((role, roleIndex) => {
        let delta = roleIndex - index
        if (delta > roles.length / 2) delta -= roles.length
        if (delta < -roles.length / 2) delta += roles.length
        const isActive = delta === 0
        return (
          <motion.span
            key={role}
            aria-hidden={!isActive}
            animate={{ y: `${delta * 110}%`, opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-0 whitespace-nowrap font-medium leading-[1.6] text-wine"
          >
            {role}
          </motion.span>
        )
      })}
      <span className="sr-only">{roles[index]}</span>
    </span>
  )
}

export default function Hero({ ready }) {
  const heroRef = useRef(null)
  const [showScene, setShowScene] = useState(false)
  const [inView, setInView] = useState(true)
  const isMobile = useMediaQuery('(max-width: 1023px)')

  const { scrollY } = useScroll()
  const textY = useTransform(scrollY, [0, 760], [0, -70])
  const portraitY = useTransform(scrollY, [0, 760], [0, -36])
  const canvasOpacity = useTransform(scrollY, [0, 620], [1, 0])

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return
    const root = heroRef.current
    if (!root) return
    const ctx = gsap.context(() => {
      gsap.set('.split-inner', { yPercent: 118, rotate: 2.5 })
      gsap.set('[data-hero-fade]', { y: 24, autoAlpha: 0 })
      gsap.set('[data-hero-portrait]', { y: 46, autoAlpha: 0, scale: 0.96 })
    }, root)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!ready) return undefined
    const root = heroRef.current
    if (!root) return undefined

    if (prefersReducedMotion()) {
      gsap.set(
        root.querySelectorAll('.split-inner, [data-hero-fade], [data-hero-portrait]'),
        { clearProps: 'all' },
      )
      return undefined
    }

    const timeline = gsap.timeline({ defaults: { ease: 'power4.out' } })
    timeline
      .to(root.querySelectorAll('.split-inner'), {
        yPercent: 0,
        rotate: 0,
        duration: 1.35,
        stagger: 0.11,
      })
      .to(
        root.querySelectorAll('[data-hero-fade]'),
        { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.07 },
        0.28,
      )
      .to(
        root.querySelector('[data-hero-portrait]'),
        { y: 0, autoAlpha: 1, scale: 1, duration: 1.2 },
        0.18,
      )

    return () => timeline.kill()
  }, [ready])

  useEffect(() => {
    if (!ready) return undefined
    if (prefersReducedMotion()) return undefined
    const id = setTimeout(() => setShowScene(true), 260)
    return () => clearTimeout(id)
  }, [ready])

  useEffect(() => {
    const root = heroRef.current
    if (!root) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '10% 0px' },
    )
    observer.observe(root)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative isolate min-h-[100svh] overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="grid-lines absolute inset-0 opacity-70" aria-hidden />
        <motion.div style={{ opacity: canvasOpacity }} className="absolute inset-0">
          <div className={`h-full w-full ${isMobile ? 'opacity-55' : 'opacity-100'}`}>
            {showScene && inView && !prefersReducedMotion() && (
              <Suspense fallback={null}>
                <HeroScene mobile={isMobile} />
              </Suspense>
            )}
          </div>
        </motion.div>
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-violet/10 blur-[120px]" />
      </div>

      <div className="container-x relative flex min-h-[100svh] flex-col justify-center pb-10 pt-28 sm:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-4">
          <motion.div style={{ y: textY }} className="lg:col-span-7">
            <div data-hero-fade>
              <span className="glass-soft inline-flex max-w-full items-center gap-2.5 rounded-full py-1.5 pl-2 pr-3.5">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wine opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-wine" />
                </span>
                <span className="truncate whitespace-nowrap text-[9px] uppercase tracking-[0.14em] text-chalk/70 sm:text-[10px] sm:tracking-[0.18em]">
                  {profile.availability}
                </span>
                <span className="hidden h-3 w-px shrink-0 bg-white/15 sm:block" />
                <span className="hidden shrink-0 font-display text-[10px] tracking-[0.14em] text-wine sm:block">
                  2027
                </span>
              </span>
            </div>

            <p
              data-hero-fade
              className="mt-7 font-sword text-[clamp(2rem,4.4vw,3rem)] leading-[1.1] text-wine"
            >
              Hello, I&apos;m
            </p>

            <h1 className="mt-1.5 font-name font-bold leading-[0.94] tracking-[-0.015em]">
              <span className="split-line">
                <span className="split-inner text-[clamp(2.7rem,9vw,7.2rem)]">
                  {profile.firstName}
                </span>
              </span>
              <span className="split-line mt-1">
                <span className="split-inner pr-[0.05em] text-[clamp(2.7rem,9vw,7.2rem)] text-gradient">
                  {profile.lastName}
                </span>
              </span>
            </h1>

            <div
              data-hero-fade
              className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted sm:text-base"
            >
              <span className="h-px w-8 bg-wine/50" />
              <span>I build as a</span>
              <RoleRotator roles={profile.roles} />
            </div>

            <p
              data-hero-fade
              className="mt-6 max-w-[30rem] text-[13.5px] leading-relaxed text-muted sm:text-[15px]"
            >
              {profile.intro}
            </p>

            <div data-hero-fade className="mt-9 flex flex-wrap items-center gap-3">
              <Magnetic>
                <a
                  href="#projects"
                  onClick={(event) => {
                    event.preventDefault()
                    scrollToSection('#projects')
                  }}
                  className="btn-primary group"
                  data-cursor-label="View"
                >
                  Explore projects
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#contact"
                  onClick={(event) => {
                    event.preventDefault()
                    scrollToSection('#contact')
                  }}
                  className="btn-ghost group"
                >
                  Contact me
                  <ArrowDown className="h-4 w-4 text-wine transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
              </Magnetic>
            </div>

            <div data-hero-fade className="mt-10 flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-[0.22em] text-muted/70">Find me</span>
              <span className="h-px w-6 bg-white/15" />
              <div className="flex items-center gap-1">
                {profile.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer noopener"
                    aria-label={social.label}
                    className="group flex h-9 w-9 items-center justify-center rounded-full border border-transparent text-muted transition-all duration-300 hover:border-white/10 hover:bg-white/[0.05] hover:text-wine"
                  >
                    <Icon name={social.icon} className="h-[15px] w-[15px]" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ y: portraitY }}
            className="relative flex justify-center lg:col-span-5 lg:justify-end"
          >
            <div data-hero-portrait>
              <PortraitCard />
            </div>
          </motion.div>
        </div>

        <div
          data-hero-fade
          className="mt-14 flex items-end justify-between gap-6 border-t border-white/[0.07] pt-5 text-[10px] uppercase tracking-[0.18em] text-muted lg:mt-16"
        >
          <span className="flex items-center gap-2">
            <MapPin className="h-3 w-3 text-wine/70" />
            {profile.location}
          </span>

          <button
            type="button"
            onClick={() => scrollToSection('#about')}
            className="group flex flex-col items-center gap-2"
            aria-label="Scroll to about section"
          >
            <span className="hidden sm:block">Scroll to explore</span>
            <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/15 p-1">
              <span className="h-1.5 w-0.5 animate-bounce rounded-full bg-wine" />
            </span>
          </button>

        </div>
      </div>
    </section>
  )
}
