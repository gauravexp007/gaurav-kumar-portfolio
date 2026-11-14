import { useLayoutEffect, useRef } from 'react'
import { ArrowUpRight, Github, Sparkles } from 'lucide-react'
import { projects } from '../data/portfolio'
import { gsap, scrollToSection } from '../lib/scroll'
import Reveal from './ui/Reveal'
import TiltCard from './ui/TiltCard'
import ProjectVisual from './ProjectVisual'

/**
 * Desktop: pinned horizontal scroll through the project cards.
 * Mobile: native snap-scroll carousel (never traps touch scrolling).
 */
export default function Projects() {
  const sectionRef = useRef(null)
  const wrapperRef = useRef(null)
  const trackRef = useRef(null)
  const barRef = useRef(null)

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()

    mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
      const section = sectionRef.current
      const wrapper = wrapperRef.current
      const track = trackRef.current
      if (!section || !wrapper || !track) return undefined

      const distance = () => Math.max(0, track.scrollWidth - wrapper.clientWidth)

      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${distance() + window.innerHeight * 0.3}`,
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (barRef.current) {
              barRef.current.style.transform = `scaleX(${Math.max(0.04, self.progress)})`
            }
          },
        },
      })

      return () => {
        tween.scrollTrigger?.kill()
        tween.kill()
        if (barRef.current) barRef.current.style.transform = 'scaleX(1)'
      }
    })

    return () => mm.revert()
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden border-y border-white/[0.06] bg-gradient-to-b from-white/[0.015] to-transparent lg:flex lg:h-[100svh] lg:flex-col lg:overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-violet/10 blur-[120px]"
      />

      <div className="container-x relative flex shrink-0 flex-col gap-5 pb-4 pt-24 lg:flex-row lg:items-end lg:justify-between lg:pt-24">
        <div>
          <Reveal className="flex items-center gap-4">
            <span className="font-display text-[11px] tracking-[0.3em] text-wine">03</span>
            <span className="h-px w-10 bg-white/20" />
            <span className="font-display text-[11px] uppercase tracking-[0.3em] text-muted">
              Selected work
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 max-w-2xl text-[clamp(2rem,4.6vw,3.6rem)] font-medium leading-[0.98] tracking-tightest">
              Things I&apos;ve{' '}
              <span className="font-serif italic text-gradient">shipped.</span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="flex flex-col gap-3 lg:items-end lg:pb-2">
          <p className="max-w-sm text-[13px] leading-relaxed text-muted lg:text-right">
            Real builds, real trade-offs. Every project here started as a small annoyance I wanted
            to fix.
          </p>
          <div className="flex items-center gap-3">
            <span className="font-display text-[10px] uppercase tracking-[0.18em] text-muted/60">
              Scroll
            </span>
            <div className="h-px w-24 overflow-hidden bg-white/10 sm:w-32">
              <div
                ref={barRef}
                className="h-full origin-left bg-gradient-to-r from-wine to-violet"
                style={{ transform: 'scaleX(0.04)' }}
              />
            </div>
            <span className="font-display text-[10px] tracking-[0.18em] text-wine">
              {String(projects.length).padStart(2, '0')}
            </span>
          </div>
        </Reveal>
      </div>

      <div
        ref={wrapperRef}
        data-lenis-prevent
        className="no-scrollbar mt-6 snap-x snap-mandatory overflow-x-auto pb-6 lg:mt-8 lg:flex lg:flex-1 lg:items-center lg:overflow-hidden lg:pb-0"
      >
        <div
          ref={trackRef}
          className="flex w-max items-stretch gap-4 px-5 sm:px-8 lg:gap-6 lg:px-12"
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="w-[min(86vw,470px)] shrink-0 snap-center lg:w-[clamp(300px,min(37vw,42vh),480px)]"
            >
              <TiltCard max={4} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.015] p-2.5 transition-colors duration-500 hover:border-wine/25">
                  <div className="relative overflow-hidden rounded-2xl">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title + ' interface preview'}
                        loading="lazy"
                        className="aspect-[16/9] w-full object-cover object-top"
                      />
                    ) : (
                      <ProjectVisual variant={project.visual} />
                    )}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70" />
                    <div className="absolute left-3 top-3 flex items-center gap-2">
                      <span className="rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] text-white/70 backdrop-blur">
                        {project.year}
                      </span>
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-wine px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.14em] text-ink">
                          <Sparkles className="h-2.5 w-2.5" />
                          Featured
                        </span>
                      )}
                    </div>
                    <span className="absolute bottom-3 right-3 font-display text-[10px] uppercase tracking-[0.2em] text-white/40">
                      {project.index} / {String(projects.length).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-4">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-[1.35rem] font-medium leading-tight tracking-tight text-chalk">
                        {project.title}
                      </h3>
                      <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-muted transition-all duration-300 group-hover:border-wine/40 group-hover:bg-wine/10 group-hover:text-wine">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                    <p className="mt-1 text-[12px] text-wine/80">{project.tagline}</p>
                    <p className="mt-2.5 line-clamp-3 text-[12px] leading-relaxed text-muted">
                      {project.description}
                    </p>
                    <p className="mt-3 text-[10px] uppercase tracking-[0.14em] text-muted/50">
                      {project.role}
                    </p>

                    <div className="mt-auto flex items-end justify-between gap-3 pt-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[9px] text-chalk/60"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[9px] text-chalk/40">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="relative z-30 flex shrink-0 items-center gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`${project.title} source code on GitHub`}
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-chalk/60 transition-colors hover:border-white/30 hover:text-chalk"
                        >
                          <Github className="h-3.5 w-3.5" />
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-1 rounded-full bg-white/[0.08] px-2.5 py-1.5 text-[10px] font-medium text-chalk transition-colors hover:bg-wine hover:text-ink"
                        >
                          Live
                          <ArrowUpRight className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Whole card opens the live site */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={'Open ' + project.title + ' in a new tab'}
                    className="absolute inset-0 z-20 rounded-3xl"
                  />
                </article>
              </TiltCard>
            </div>
          ))}

          <div className="flex w-[min(76vw,340px)] shrink-0 snap-center flex-col justify-between rounded-3xl border border-dashed border-wine/25 bg-wine/[0.04] p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-wine/30 bg-wine/10 text-wine">
              <Sparkles className="h-4 w-4" />
            </span>
            <div>
              <h3 className="font-serif text-[2rem] italic leading-tight text-chalk">
                Your idea next?
              </h3>
              <p className="mt-3 text-[12.5px] leading-relaxed text-muted">
                I&apos;m always up for a good problem, a hackathon team, or an ambitious side
                project. Tell me what you&apos;re thinking.
              </p>
              <a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault()
                  scrollToSection('#contact')
                }}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-wine px-4 py-2.5 font-display text-[12px] font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                Start a conversation
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className="container-x pb-6 text-center text-[10px] uppercase tracking-[0.2em] text-muted/40 lg:hidden">
        Swipe to explore projects
      </p>
    </section>
  )
}
