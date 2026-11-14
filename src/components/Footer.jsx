import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio'
import { scrollToSection } from '../lib/scroll'
import Magnetic from './ui/Magnetic'
import Icon from './ui/Icon'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] pt-16">
      <div className="container-x">
        <div className="grid gap-10 pb-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a
              href="#home"
              onClick={(event) => {
                event.preventDefault()
                scrollToSection('#home')
              }}
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-wine/30 bg-wine/10 font-display text-[12px] text-wine">
                {profile.monogram}
              </span>
              <span className="font-display text-sm font-medium tracking-tight text-chalk">
                {profile.name}
              </span>
            </a>
            <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-muted">
              B.Tech student, technology enthusiast and aspiring developer. Building thoughtful
              things on the internet, one commit at a time.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {profile.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-chalk/55 transition-colors hover:border-wine/35 hover:text-wine"
                >
                  <Icon name={social.icon} className="h-[15px] w-[15px]" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <p className="eyebrow">Navigate</p>
            <ul className="mt-4 grid grid-cols-2 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(event) => {
                      event.preventDefault()
                      scrollToSection(`#${link.id}`)
                    }}
                    className="link-underline inline-flex items-center gap-2 text-[12.5px] text-muted transition-colors hover:text-chalk"
                  >
                    <span className="font-display text-[9px] tracking-[0.16em] text-muted/40">
                      {link.index}
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow">Get in touch</p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 inline-flex items-center gap-1.5 break-all text-[13px] text-chalk/80 transition-colors hover:text-wine"
            >
              {profile.email}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <p className="mt-3 text-[11px] leading-relaxed text-muted/60">
              {profile.location}
              <br />
              {profile.availability}
            </p>
            <Magnetic strength={0.25}>
              <button
                type="button"
                onClick={() => scrollToSection(0)}
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 font-display text-[11px] uppercase tracking-[0.14em] text-chalk/70 transition-colors hover:border-wine/40 hover:text-wine"
              >
                Back to top
                <ArrowUp className="h-3 w-3" />
              </button>
            </Magnetic>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/[0.07] py-6 text-[10px] uppercase tracking-[0.14em] text-muted/50 sm:flex-row">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span className="flex items-center gap-2">
            Built with React, Three.js &amp; GSAP
            <span className="h-1 w-1 rounded-full bg-wine/60" />
            Designed with care
          </span>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none select-none overflow-hidden px-2 text-center"
      >
        <span className="-mb-[1.2vw] block font-name text-[9vw] font-bold leading-[0.85] tracking-tightest text-white/[0.045]">
          GAURAV KUMAR
        </span>
      </div>
    </footer>
  )
}
