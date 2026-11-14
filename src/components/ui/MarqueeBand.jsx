const items = [
  'React',
  'Three.js',
  'TypeScript',
  'Node.js',
  'GSAP',
  'Tailwind CSS',
  'PostgreSQL',
  'Python',
  'Docker',
  'Figma',
]

export default function MarqueeBand() {
  return (
    <div className="relative border-y border-white/[0.07] bg-white/[0.015] py-4">
      <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="marquee-track flex w-max shrink-0 animate-marquee items-center gap-7 pr-7">
          {[...items, ...items].map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-7">
              <span className="font-display text-[11px] uppercase tracking-[0.24em] text-chalk/55">
                {item}
              </span>
              <span className="h-1 w-1 rounded-full bg-wine/60" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
