import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { achievements, timeline } from '../data/portfolio'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import Icon from './ui/Icon'

export default function Journey() {
  const lineRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ['start 70%', 'end 65%'],
  })
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 24, restDelta: 0.001 })

  return (
    <section id="journey" className="section-pad relative overflow-hidden">
      <div className="container-x">
        <SectionHeading
          index="04"
          eyebrow="Education & journey"
          title={
            <>
              A route, not a{' '}
              <span className="font-serif italic text-gradient">straight line.</span>
            </>
          }
          description="The classes, mistakes, late nights and small wins that added up to where I am today."
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <div className="space-y-4 lg:sticky lg:top-28">
              <Reveal className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-6">
                <span className="eyebrow">Education</span>
                <h3 className="mt-4 font-display text-lg font-medium leading-snug tracking-tight text-chalk">
                  B.Tech, Computer Science &amp; Engineering
                </h3>
                <p className="mt-1.5 text-[12.5px] text-muted">
                  SDGI Global University
                </p>

                <dl className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    { term: 'Duration', value: '2023 to 2027' },
                    { term: 'CGPA', value: '9.56 / 10' },
                    { term: 'Focus', value: 'Java developer and Android developer' },
                    { term: 'Batch rank', value: 'Top 5%' },
                  ].map((item) => (
                    <div
                      key={item.term}
                      className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-3 py-2.5"
                    >
                      <dt className="text-[9px] uppercase tracking-[0.16em] text-muted/60">
                        {item.term}
                      </dt>
                      <dd className="mt-1 font-display text-[12.5px] text-chalk/85">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>

            </div>
          </div>

          <div className="lg:col-span-8">
            <div ref={lineRef} className="relative">
              <div className="absolute bottom-2 left-[7px] top-2 w-px bg-white/[0.08]" aria-hidden />
              <motion.div
                style={{ scaleY }}
                className="absolute bottom-2 left-[7px] top-2 w-px origin-top bg-gradient-to-b from-wine via-violet to-cyan"
                aria-hidden
              />

              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <Reveal key={item.year} delay={index * 0.04} className="relative pl-8 sm:pl-10">
                    <span
                      className={`absolute left-0 top-6 flex h-3.5 w-3.5 items-center justify-center rounded-full border ${
                        index === timeline.length - 1
                          ? 'border-wine bg-wine text-ink'
                          : 'border-white/25 bg-ink'
                      }`}
                      aria-hidden
                    >
                      {index === timeline.length - 1 && (
                        <span className="h-1 w-1 rounded-full bg-ink" />
                      )}
                    </span>

                    <div className="card-lift rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 sm:p-6">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="font-display text-sm tracking-tight text-wine">
                          {item.year}
                        </span>
                        <span className="h-3 w-px bg-white/15" />
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[9px] uppercase tracking-[0.16em] text-muted">
                          {item.tag}
                        </span>
                        <span className="ml-auto hidden items-center gap-1.5 rounded-full border border-wine/20 bg-wine/[0.07] px-2.5 py-1 text-[9px] uppercase tracking-[0.12em] text-wine sm:inline-flex">
                          <Icon name="sparkles" className="h-2.5 w-2.5" />
                          {item.highlight}
                        </span>
                      </div>

                      <h3 className="mt-3 font-display text-lg font-medium leading-snug tracking-tight text-chalk sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-[12px] text-muted">{item.org}</p>
                      <p className="mt-3 text-[13px] leading-relaxed text-muted/85">{item.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={0.1} className="ml-8 mt-2 sm:ml-10">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl border border-wine/20 bg-wine/[0.05] px-5 py-4">
                {[
                  { icon: 'trophy', label: '3× hackathon winner' },
                  { icon: 'brain', label: '450+ DSA problems' },
                  { icon: 'github', label: '40+ merged PRs' },
                ].map((item) => (
                  <span
                    key={item.label}
                    className="flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-chalk/70"
                  >
                    <Icon name={item.icon} className="h-3.5 w-3.5 text-wine" />
                    {item.label}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.06} className="mt-14">
          <div className="flex items-center gap-4">
            <span className="eyebrow">Achievements</span>
            <span className="h-px flex-1 bg-white/[0.08]" />
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {achievements.map((item) => (
              <div
                key={item.title}
                className="card-lift rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5"
              >
                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-wine/25 bg-wine/10 text-wine">
                    <Icon name={item.icon} className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[9px] uppercase tracking-[0.18em] text-muted/60">
                      {item.tag}
                    </p>
                    <h3 className="mt-1.5 font-display text-[15px] font-medium leading-snug tracking-tight text-chalk">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-muted/85">
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
