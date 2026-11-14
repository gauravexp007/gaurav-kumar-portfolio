import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio'
import { useActiveSection } from '../lib/hooks'
import { lockScroll, scrollToSection } from '../lib/scroll'
import Magnetic from './ui/Magnetic'
import Icon from './ui/Icon'

const sectionIds = navLinks.map((link) => link.id)

export default function Navbar({ ready }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(['home', ...sectionIds])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    lockScroll(open)
  }, [open])

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const navigate = (event, id) => {
    event.preventDefault()
    setOpen(false)
    setTimeout(() => scrollToSection(`#${id}`), open ? 280 : 0)
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={ready ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-[80]"
      >
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b transition-opacity duration-500 ${
            scrolled ? 'from-ink via-ink/85 to-transparent' : 'from-ink/90 via-ink/50 to-transparent'
          }`}
        />
        <div className="container-x">
          <div
            className={`mt-3 flex items-center justify-between rounded-2xl border px-3 py-2.5 transition-all duration-500 md:rounded-full md:px-4 ${
              scrolled
                ? 'border-white/10 bg-ink/70 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.95)] backdrop-blur-xl'
                : 'border-transparent bg-transparent'
            }`}
          >
            <a
              href="#home"
              onClick={(event) => navigate(event, 'home')}
              className="group flex items-center gap-3 rounded-full pr-2"
              aria-label="Gaurav Kumar, back to top"
            >
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-wine/30 bg-wine/10 font-name text-[11px] leading-none tracking-[0.02em] text-wine transition-colors group-hover:border-wine/60">
                GK
                <span className="absolute inset-0 rounded-full border border-wine/20 animate-pulse-ring" />
              </span>
              <span className="hidden flex-col leading-tight sm:flex">
                <span className="font-name text-[11px] leading-tight tracking-[0.02em] text-chalk">
                  {profile.name}
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-muted">
                  Developer · B.Tech
                </span>
              </span>
            </a>

            <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={(event) => navigate(event, link.id)}
                  className={`relative rounded-full px-3.5 py-2 text-[12.5px] transition-colors duration-300 ${
                    active === link.id
                      ? 'text-wine'
                      : 'text-muted hover:text-chalk'
                  }`}
                >
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full border border-wine/25 bg-wine/10"
                      transition={{ type: 'spring', stiffness: 350, damping: 32 }}
                    />
                  )}
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Magnetic strength={0.22}>
                <button
                  type="button"
                  onClick={(event) => navigate(event, 'contact')}
                  className="hidden items-center gap-1.5 rounded-full bg-chalk px-4 py-2.5 font-display text-[12px] font-medium tracking-tight text-ink transition-colors hover:bg-wine md:inline-flex"
                >
                  Let&apos;s talk
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </Magnetic>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-chalk transition-colors hover:border-wine/40 hover:text-wine lg:hidden"
                aria-label="Open menu"
                aria-expanded={open}
              >
                <Menu className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[95] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-ink/96 backdrop-blur-2xl" />
            <div className="absolute inset-0 grid-lines opacity-30" aria-hidden />

            <div className="relative flex h-full flex-col justify-between px-6 pb-10 pt-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-xs uppercase tracking-[0.24em] text-muted">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-chalk"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <nav className="flex flex-col" aria-label="Mobile">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(event) => navigate(event, link.id)}
                    initial={{ y: 26, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.06 * index + 0.08, duration: 0.5 }}
                    className="group flex items-center gap-4 border-b border-white/[0.06] py-4"
                  >
                    <span className="font-display text-[10px] tracking-[0.2em] text-wine/70">
                      {link.index}
                    </span>
                    <span className="font-display text-[2rem] font-light leading-none tracking-tight text-chalk transition-colors group-hover:text-wine">
                      {link.label}
                    </span>
                    <ArrowUpRight className="ml-auto h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-wine" />
                  </motion.a>
                ))}
              </nav>

              <div className="space-y-5">
                <a
                  href={`mailto:${profile.email}`}
                  className="block font-display text-sm text-chalk/80 underline decoration-white/20 underline-offset-4"
                >
                  {profile.email}
                </a>
                <div className="flex items-center gap-2.5">
                  {profile.socials.slice(0, 3).map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-chalk/70 transition-colors hover:border-wine/40 hover:text-wine"
                      aria-label={social.label}
                    >
                      <Icon name={social.icon} className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
