import { beyond } from '../data/portfolio'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import Icon from './ui/Icon'

const equals = [0.4, 0.75, 0.5, 0.9, 0.35, 0.65, 0.8, 0.45]

/** One photo-led hobby card: image, oversized heading, key points as bars. */
function HobbyCard({ hobby, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/[0.09] bg-[linear-gradient(172deg,rgba(255,255,255,0.055),rgba(8,8,14,0.92))] shadow-[0_0_60px_-30px_rgba(201,79,102,0.55)] transition-all duration-500 hover:border-wine/35 hover:shadow-[0_0_95px_-22px_rgba(201,79,102,0.6)]">
        {/* Photo */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={hobby.image}
            alt={hobby.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover opacity-80 saturate-[0.9] transition-all duration-[900ms] ease-out group-hover:scale-[1.06] group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07070c] via-[#07070c]/35 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(340px_180px_at_85%_-10%,rgba(201,79,102,0.16),transparent_70%)]" />

          {/* Shine sweep */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -translate-x-[130%] bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.18)_50%,transparent_60%)] transition-transform duration-[1200ms] ease-out group-hover:translate-x-[130%]"
          />

          <span className="absolute left-4 top-3 font-mono text-[10px] tracking-[0.2em] text-white/45">
            {hobby.index}
          </span>
          <span className="absolute right-4 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-black/40 text-wine backdrop-blur">
            <Icon name={hobby.icon} className="h-3.5 w-3.5" />
          </span>

          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
            <p className="font-display text-[9px] uppercase tracking-[0.22em] text-wine/75">
              {hobby.kicker}
            </p>
            <h3 className="mt-1.5 font-impact text-[clamp(1.7rem,3.1vw,2.5rem)] uppercase leading-[0.9] tracking-[0.01em] text-chalk">
              {hobby.title}
            </h3>
          </div>
        </div>

        {/* Copy + key points */}
        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <p className="text-[12.5px] leading-relaxed text-muted">{hobby.body}</p>

          {/* Key points as maroon cards, in the soft-skills style */}
          <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {hobby.blocks.map((block, index) => (
              <div
                key={block}
                className="group/block relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-wine/40 hover:bg-wine/[0.07] hover:shadow-[0_10px_24px_-14px_rgba(201,79,102,0.85)]"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(180px_circle_at_10%_0%,rgba(201,79,102,0.16),transparent_70%)] opacity-70 transition-opacity duration-500 group-hover/block:opacity-100"
                />
                <span className="relative flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-wine/25 bg-wine/10 font-mono text-[8px] leading-none text-wine/80">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-sc text-[13.5px] font-bold leading-tight tracking-[0.01em] text-chalk/90">
                    {block}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function Beyond() {
  return (
    <section id="beyond" className="section-pad relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-24 h-96 w-96 rounded-full bg-cyan/[0.05] blur-[130px]"
      />

      <div className="container-x relative">
        <SectionHeading
          index="07"
          eyebrow="Beyond technology"
          title={
            <>
              The off-screen{' '}
              <span className="font-serif italic text-gradient">version.</span>
            </>
          }
          description={beyond.intro}
        />

        <div className="grid gap-4 md:grid-cols-2">
          {beyond.passions.map((hobby, index) => (
            <HobbyCard key={hobby.title} hobby={hobby} delay={index * 0.07} />
          ))}
        </div>

        {/* Supporting strip */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Reveal delay={0.05}>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-white/[0.08] bg-white/[0.025] p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="eyebrow">Right now</span>
                  <h3 className="mt-3 font-name text-xl font-normal tracking-tight text-chalk">
                    Currently looping
                  </h3>
                </div>
                <div className="flex items-end gap-[3px]" aria-hidden>
                  {equals.map((height, index) => (
                    <span
                      key={index}
                      className="eq-bar w-[3px] rounded-full bg-gradient-to-t from-wine/40 to-wine"
                      style={{ height: `${height * 26}px`, animationDelay: `${index * 0.12}s` }}
                    />
                  ))}
                </div>
              </div>

              <dl className="mt-6 space-y-3">
                {[
                  { label: 'Reading', value: beyond.now.reading, icon: 'book' },
                  { label: 'Learning', value: beyond.now.learning, icon: 'brain' },
                  { label: 'Listening', value: beyond.now.listening, icon: 'music' },
                  { label: 'Building', value: beyond.now.building, icon: 'code' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 border-b border-white/[0.06] pb-3 last:border-0 last:pb-0"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-wine">
                      <Icon name={item.icon} className="h-3.5 w-3.5" />
                    </span>
                    <dt className="mt-1.5 w-16 shrink-0 text-[9px] uppercase tracking-[0.16em] text-muted/60">
                      {item.label}
                    </dt>
                    <dd className="min-w-0 flex-1 text-[12.5px] leading-relaxed text-chalk/80">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-3xl border border-maroon/40 bg-[linear-gradient(148deg,rgba(122,31,53,0.55),rgba(74,19,33,0.72)_52%,rgba(43,10,19,0.95))] p-6 shadow-[0_0_70px_-30px_rgba(122,31,53,0.95)]">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(280px_160px_at_100%_0%,rgba(214,120,145,0.22),transparent_70%)]"
              />
              <span className="pointer-events-none absolute -right-2 -top-6 font-serif text-[8rem] leading-none text-[#f0c2cd]/15">
                &rdquo;
              </span>
              <p className="relative font-serif text-[clamp(1.25rem,2.2vw,1.6rem)] italic leading-snug text-[#fdf3f5]/90">
                {beyond.quote}
              </p>
              <p className="relative mt-5 font-signature text-[clamp(1.9rem,3.4vw,2.5rem)] italic leading-none text-[#f7dde3]">
                Gaurav Kumar
              </p>
              <p className="relative mt-3 text-[10px] uppercase tracking-[0.2em] text-[#efc3ce]/55">
                the rule I keep breaking
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
