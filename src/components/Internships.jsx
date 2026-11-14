import { internships } from '../data/portfolio'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import Icon from './ui/Icon'

export default function Internships() {
  return (
    <section id="internships" className="section-pad relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute right-1/4 top-16 h-64 w-64 rounded-full bg-maroon/25 blur-[140px]"
      />

      <div className="container-x relative">
        <SectionHeading
          index="06"
          eyebrow="Internships"
          title={
            <>
              Where I&rsquo;ve <span className="font-serif italic text-gradient">worked.</span>
            </>
          }
          description="Two internships, both short and both formative. The first places I shipped code somebody else depended on."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {internships.map((internship, index) => (
            <Reveal key={internship.company} delay={index * 0.08} className="h-full">
              <a
                href={internship.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={'Open the ' + internship.company + ' internship post'}
                className="card-lift group relative flex h-full flex-col overflow-hidden rounded-3xl border border-maroon/40 bg-[linear-gradient(150deg,rgba(122,31,53,0.5),rgba(74,19,33,0.78)_55%,rgba(38,9,17,0.95))] p-6 shadow-[0_0_70px_-34px_rgba(122,31,53,0.9)] transition-colors duration-300 hover:border-wine/60 sm:p-7"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(320px_180px_at_100%_0%,rgba(214,120,145,0.2),transparent_70%)]"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-1 -top-8 font-serif text-[7rem] leading-none text-[#f0c2cd]/15 transition-colors duration-300 group-hover:text-[#f0c2cd]/25"
                >
                  &rdquo;
                </span>

                <div className="relative">
                  <p className="font-name text-[10.5px] uppercase tracking-[0.22em] text-[#efc3ce]/80">
                    {internship.company}
                  </p>
                  <h3 className="mt-3 font-name text-[clamp(1.05rem,2.1vw,1.35rem)] font-bold leading-tight tracking-[0.01em] text-chalk">
                    {internship.role}
                  </h3>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-wine/85">
                    {internship.period}
                    {internship.mode ? ' · ' + internship.mode : ''}
                  </p>
                </div>

                <p className="relative mt-4 font-serif text-[clamp(1rem,1.6vw,1.2rem)] italic leading-snug text-[#fdf3f5]/85">
                  {internship.body}
                </p>

                <span className="relative mt-6 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] text-[#efc3ce]/60 transition-colors duration-300 group-hover:text-wine">
                  {internship.linkLabel}
                  <Icon name="external" className="h-3 w-3" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
