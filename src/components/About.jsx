import { about, profile, stats } from '../data/portfolio'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import Icon from './ui/Icon'

export default function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 top-24 hidden font-display text-[16rem] leading-none text-outline opacity-[0.14] lg:block"
      >
        01
      </span>

      <div className="container-x">
        <SectionHeading
          index="01"
          eyebrow="About me"
          title={
            <>
              Curiosity,{' '}
              <span className="font-serif italic text-gradient">compiled.</span>
            </>
          }
          description={profile.shortBio}
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="space-y-5 lg:sticky lg:top-28">
              <Reveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.02] to-transparent p-6 sm:p-7">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-wine/10 blur-3xl" />
                <span className="eyebrow">Currently pursuing</span>
                <h3 className="mt-4 font-display text-xl font-medium leading-snug tracking-tight text-chalk">
                  B.Tech, Computer Science &amp; Engineering
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">
                  SDGI Global University
                  <br />
                  2023 to 2027 · CGPA 9.56 / 10
                </p>

                <div className="hairline my-6" />

                <p className="eyebrow mb-4">Currently</p>
                <ul className="space-y-2.5">
                  {about.currently.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13px] text-chalk/75">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-wine" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal
                delay={0.1}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink2/60 p-6 sm:p-7"
              >
                <span className="pointer-events-none absolute right-4 top-1 font-serif text-[5rem] leading-none text-white/[0.06]">
                  &rdquo;
                </span>
                <p className="font-serif text-[1.55rem] leading-snug text-chalk/90">
                  {about.pillars[1].body}
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-wine/25 bg-wine/10 font-display text-[10px] text-wine">
                    {profile.monogram}
                  </span>
                  <div>
                    <p className="font-name text-[10.5px] leading-tight tracking-[0.02em] text-chalk">
                      {profile.name}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-muted">
                      B.Tech · Batch 2023 to 2027
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-5">
              {about.paragraphs.map((paragraph, index) => (
                <Reveal
                  key={paragraph.slice(0, 24)}
                  delay={index * 0.05}
                  className={index === 0 ? 'text-[15px] leading-[1.8] text-chalk/85' : 'text-[14px] leading-[1.8] text-muted'}
                >
                  {paragraph}
                </Reveal>
              ))}
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {about.pillars.map((pillar, index) => (
                <Reveal key={pillar.title} delay={index * 0.08}>
                  <div className="card-lift group h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-wine/20 bg-wine/[0.08] text-wine">
                      <Icon name={pillar.icon} className="h-4 w-4" />
                    </span>
                    <h4 className="mt-4 font-display text-sm font-medium tracking-tight text-chalk">
                      {pillar.title}
                    </h4>
                    <p className="mt-2 text-[12px] leading-relaxed text-muted">{pillar.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat, index) => (
                <Reveal key={stat.label} delay={index * 0.06}>
                  <div className="rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.05] to-transparent px-4 py-5">
                    <p className="font-display text-[clamp(1.7rem,3vw,2.1rem)] font-light leading-none tracking-tight text-chalk">
                      {stat.value}
                      <span className="text-sm text-wine">{stat.suffix}</span>
                    </p>
                    <p className="mt-2 text-[10px] uppercase leading-tight tracking-[0.14em] text-muted">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
