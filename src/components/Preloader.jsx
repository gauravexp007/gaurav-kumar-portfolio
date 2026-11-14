import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function Preloader({ onDone }) {
  const reduced = useReducedMotion()
  const [count, setCount] = useState(0)
  const finished = useRef(false)

  useEffect(() => {
    if (reduced) {
      onDone?.()
      return
    }

    let raf
    const start = performance.now()
    const duration = 1450

    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration)
      setCount(Math.round(progress * 100))
      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      } else if (!finished.current) {
        finished.current = true
        setTimeout(() => onDone?.(), 240)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onDone, reduced])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col justify-between overflow-hidden bg-ink px-6 py-8 sm:px-10"
      exit={{ y: '-100%' }}
      transition={{ duration: 1.05, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="absolute inset-0 grid-lines opacity-40" aria-hidden />
      <div
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-[110px]"
        style={{ background: 'radial-gradient(circle, rgba(122,92,255,.5), transparent 65%)' }}
        aria-hidden
      />

      <div className="relative flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-muted">
        <span className="font-name text-[9px] tracking-[0.18em]">Gaurav Kumar</span>
        <span>Portfolio · 2026</span>
      </div>

      <div className="relative flex flex-col items-center gap-7 text-center">
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/15">
          <span className="absolute inset-0 animate-spin-slower rounded-full border border-dashed border-wine/30" />
          <span className="font-name text-lg leading-none tracking-tight text-chalk">GK</span>
        </div>
        <div>
          <p className="font-serif text-[clamp(1.6rem,4vw,2.6rem)] italic leading-none text-chalk/90">
            Loading the experience
          </p>
          <div className="mx-auto mt-6 h-px w-56 overflow-hidden bg-white/10">
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-wine via-violet to-cyan"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: count / 100 }}
              transition={{ ease: 'linear', duration: 0.1 }}
            />
          </div>
        </div>
      </div>

      <div className="relative flex items-end justify-between">
        <p className="max-w-[180px] text-[10px] uppercase leading-relaxed tracking-[0.22em] text-muted">
          B.Tech · Developer
          <br />
          India
        </p>
        <span className="font-display text-[clamp(3rem,10vw,7rem)] font-light leading-none tracking-tightest text-chalk">
          {String(count).padStart(3, '0')}
          <span className="ml-1 align-top text-sm text-wine">%</span>
        </span>
      </div>
    </motion.div>
  )
}
