import { certifications } from '../data/portfolio'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import Icon from './ui/Icon'

export default function Certificates() {
  return (
    <section id="certificates" className="section-pad relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-wine/[0.07] blur-[130px]"
      />

      <div className="container-x relative">
        <SectionHeading
          index="05"
          eyebrow="Certificates"
          title={
            <>
              Proof of the <span className="font-serif italic text-gradient">practice.</span>
            </>
          }
          description="Job simulations and programmes I finished outside the syllabus, each one with a certificate to show for it."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <Reveal
              key={cert.name}
              delay={index * 0.05}
              className={
                'h-full' +
                (certifications.length % 2 === 1 && index === certifications.length - 1
                  ? ' sm:col-span-2'
                  : '')
              }
            >
              <a
                href={cert.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={'Open the ' + cert.name + ' certificate'}
                className="card-lift group flex h-full items-start gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition-colors duration-300 hover:border-wine/40 hover:bg-wine/[0.04]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-wine/25 bg-wine/10 text-wine transition-colors duration-300 group-hover:border-wine/45 group-hover:bg-wine/15">
                  <Icon name={cert.icon} className="h-[18px] w-[18px]" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[9px] uppercase tracking-[0.18em] text-muted/60">
                    {cert.issuer}
                  </p>
                  <h3 className="mt-1.5 font-name text-[13px] font-bold leading-snug tracking-[0.01em] text-chalk">
                    {cert.name}
                  </h3>
                  <p className="mt-2 text-[12px] leading-relaxed text-wine/80">{cert.note}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.14em] text-chalk/45 transition-colors duration-300 group-hover:text-wine">
                    {cert.linkLabel || 'View certificate'}
                    <Icon name="external" className="h-3 w-3" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
