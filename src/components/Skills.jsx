import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { skillGroups, skills } from '../data/portfolio'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import TiltCard from './ui/TiltCard'
import Icon from './ui/Icon'

const softSkills = [
  {
    name: 'Problem solving',
    note: 'Bisecting a bug instead of guessing at it, and staying calm while it is still broken.',
  },
  {
    name: 'Clear communication',
    note: 'Updates and demos a non-engineer can follow, before someone has to ask for them.',
  },
  {
    name: 'Ownership',
    note: 'Pick it up, see it through, and report honestly when it slips.',
  },
  {
    name: 'Fast learner',
    note: 'New framework or unfamiliar codebase, productive in days, not months.',
  },
  {
    name: 'Team player',
    note: 'Reviews kindly, shares context, unblocks others before being asked.',
  },
  {
    name: 'Attention to detail',
    note: 'The 2px alignment, the empty state nobody forgot, the edge case that ships.',
  },
]

function SoftSkills() {
  const [open, setOpen] = useState(null)

  return (
    <Reveal
      delay={0.1}
      className="relative mt-8 overflow-hidden rounded-2xl border border-wine/25 bg-gradient-to-br from-maroon-deep/90 via-[#1a0710] to-[#0a0a0f] p-5 sm:p-6"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-28 h-64 w-64 rounded-full bg-maroon/40 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-wine/[0.14] blur-[90px]"
      />

      <div className="relative flex items-center justify-between gap-4">
        <p className="eyebrow !text-wine/80">Also brings to the table</p>
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-wine/45">
          tap a card
        </span>
      </div>

      <div className="relative mt-4 grid gap-2.5 sm:grid-cols-2">
        {softSkills.map((skill, index) => {
          const isOpen = open === skill.name
          return (
            <motion.button
              key={skill.name}
              type="button"
              onClick={() => setOpen(isOpen ? null : skill.name)}
              aria-expanded={isOpen}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25 }}
              className={`group relative overflow-hidden rounded-xl border px-3.5 py-3 text-left transition-colors duration-300 ${
                isOpen
                  ? 'border-wine/45 bg-wine/[0.1]'
                  : 'border-white/10 bg-white/[0.02] hover:border-wine/35 hover:bg-wine/[0.06]'
              }`}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(220px circle at 12% 0%, rgba(201,79,102,0.22), transparent 70%)',
                }}
              />

              <span className="relative flex items-center gap-2.5">
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border font-mono text-[8px] transition-colors duration-300 ${
                    isOpen
                      ? 'border-wine/50 bg-wine/25 text-chalk'
                      : 'border-wine/25 bg-wine/10 text-wine/80'
                  }`}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-name text-[10px] uppercase leading-tight tracking-[0.05em] text-chalk/90">
                  {skill.name}
                </span>
                <span
                  className={`ml-auto text-[13px] leading-none text-wine/70 transition-transform duration-300 ${
                    isOpen ? 'rotate-45' : 'group-hover:rotate-45'
                  }`}
                >
                  +
                </span>
              </span>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.span
                    key="note"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="relative block overflow-hidden"
                  >
                    <span className="mt-2 block pl-[30px] text-[11.5px] leading-relaxed text-[#e7c4cc]/80">
                      {skill.note}
                    </span>
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          )
        })}
      </div>
    </Reveal>
  )
}

export default function Skills() {
  const [group, setGroup] = useState('frontend')
  const activeGroup = skillGroups.find((item) => item.id === group) || skillGroups[0]
  const visible = skills.filter((skill) => skill.group === group)

  return (
    <section id="skills" className="section-pad relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-violet/[0.09] blur-[130px]"
      />

      <div className="container-x relative">
        <SectionHeading
          index="02"
          eyebrow="Skills & technologies"
          title={
            <>
              The stack I{' '}
              <span className="font-serif italic text-gradient">build with.</span>
            </>
          }
          description="A working toolkit rather than a checklist, the things I reach for when an idea needs to become something people can click."
        />

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <Reveal className="lg:sticky lg:top-28">
              <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
                {skillGroups.map((item) => {
                  const isActive = item.id === group
                  const count = skills.filter((skill) => skill.group === item.id).length
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setGroup(item.id)}
                      className={`group flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-300 lg:w-full ${
                        isActive
                          ? 'border-wine/30 bg-wine/[0.07] text-chalk'
                          : 'border-white/[0.07] bg-white/[0.02] text-muted hover:border-white/15 hover:text-chalk'
                      }`}
                    >
                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-lg border ${
                          isActive
                            ? 'border-wine/30 bg-wine/15 text-wine'
                            : 'border-white/10 bg-white/[0.03] text-muted group-hover:text-chalk'
                        }`}
                      >
                        <Icon name={item.icon} className="h-3.5 w-3.5" />
                      </span>
                      <span className="font-display text-[13px] tracking-tight">{item.label}</span>
                      <span className="ml-auto hidden font-display text-[10px] text-muted/60 lg:block">
                        {String(count).padStart(2, '0')}
                      </span>
                    </button>
                  )
                })}
              </div>

              <div className="mt-6 hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 lg:block">
                <p className="eyebrow">Core stack</p>
                <p className="mt-3 font-serif text-xl italic leading-snug text-chalk/85">
                  React · TypeScript · Node · PostgreSQL
                </p>
                <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-wine" />
                  Comfortable shipping to production
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-9">
            <div className="flex items-center justify-between gap-4 pb-4">
              <p className="font-display text-[11px] uppercase tracking-[0.24em] text-muted">
                {activeGroup.label}
              </p>
              <p className="text-[10px] uppercase tracking-[0.16em] text-muted/50">
                {String(visible.length).padStart(2, '0')} technologies
              </p>
            </div>

            <div
              className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3"
              style={{ perspective: '1200px' }}
            >
              <AnimatePresence mode="popLayout">
                {visible.map((skill, index) => (
                  <motion.div
                    key={`${group}-${skill.name}`}
                    layout
                    initial={{ opacity: 0, y: 26, rotateX: 14 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: -18, rotateX: -10 }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.045,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ transformPerspective: 1000 }}
                  >
                    <TiltCard max={5} className="h-full">
                      <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition-colors duration-500 hover:border-wine/25 hover:bg-white/[0.04]">
                        <div
                          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                          style={{
                            background:
                              'radial-gradient(340px circle at var(--mx,50%) var(--my,50%), rgba(201,79,102,0.12), transparent 70%)',
                          }}
                        />
                        <div className="relative flex items-start justify-between gap-3">
                          <span className="font-display text-[10px] uppercase tracking-[0.18em] text-muted/70">
                            {activeGroup.label}
                          </span>
                          <span className="font-display text-[11px] tabular-nums text-wine">
                            {skill.level}%
                          </span>
                        </div>
                        <h3 className="relative mt-7 font-display text-lg font-medium tracking-tight text-chalk">
                          {skill.name}
                        </h3>
                        <div className="relative mt-4 h-[3px] w-full overflow-hidden rounded-full bg-white/[0.08]">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-wine via-wine/80 to-violet"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1.1,
                              delay: 0.12 + index * 0.04,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                          />
                        </div>
                        <div className="relative mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.14em] text-muted/50">
                          <span>Working knowledge</span>
                          <span>{skill.level >= 85 ? 'Advanced' : skill.level >= 70 ? 'Proficient' : 'Growing'}</span>
                        </div>
                      </div>
                    </TiltCard>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <SoftSkills />
          </div>
        </div>
      </div>
    </section>
  )
}
