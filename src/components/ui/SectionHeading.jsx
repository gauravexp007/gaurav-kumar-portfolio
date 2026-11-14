import Reveal from './Reveal'

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className = '',
}) {
  return (
    <header className={`mb-14 md:mb-20 ${className}`}>
      <Reveal className="flex items-center gap-4">
        <span className="font-display text-[11px] tracking-[0.3em] text-wine">{index}</span>
        <span className="h-px w-10 bg-white/20" />
        <span className="font-display text-[11px] uppercase tracking-[0.3em] text-muted">
          {eyebrow}
        </span>
      </Reveal>

      <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <Reveal delay={0.05}>
          <h2 className="max-w-4xl font-name text-[clamp(2.05rem,5vw,4.1rem)] font-normal leading-[1.04] tracking-[-0.01em]">
            {title}
          </h2>
        </Reveal>
        {description && (
          <Reveal delay={0.12} className="max-w-md lg:pb-2">
            <p className="text-sm leading-relaxed text-muted md:text-[15px]">{description}</p>
          </Reveal>
        )}
      </div>
    </header>
  )
}
