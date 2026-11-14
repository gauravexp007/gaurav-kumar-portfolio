import { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from '../lib/hooks'
import { gsap, prefersReducedMotion } from '../lib/scroll'

export default function Cursor() {
  const finePointer = useMediaQuery('(pointer: fine)')
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [label, setLabel] = useState('')

  useEffect(() => {
    if (!finePointer || prefersReducedMotion()) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    document.documentElement.classList.add('cursor-ready')

    const dotX = gsap.quickTo(dot, 'x', { duration: 0.1, ease: 'power2.out' })
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.1, ease: 'power2.out' })
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3.out' })
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3.out' })

    const onMove = (event) => {
      setVisible(true)
      dotX(event.clientX)
      dotY(event.clientY)
      ringX(event.clientX)
      ringY(event.clientY)
    }

    const onOver = (event) => {
      const target = event.target.closest?.('a, button, [data-cursor]')
      if (target) {
        setHovering(true)
        setLabel(target.getAttribute('data-cursor-label') || '')
      } else {
        setHovering(false)
        setLabel('')
      }
    }

    const onLeave = () => setVisible(false)

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerover', onOver)
    document.documentElement.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerover', onOver)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.documentElement.classList.remove('cursor-ready')
    }
  }, [finePointer])

  if (!finePointer || prefersReducedMotion()) return null

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[120] hidden transition-opacity duration-300 lg:block"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div ref={dotRef} className="absolute left-0 top-0">
        <span className="block h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-wine" />
      </div>
      <div ref={ringRef} className="absolute left-0 top-0">
        <span
          className={`flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-[2px] transition-all duration-300 ${
            hovering
              ? 'h-16 w-16 border-wine/50 bg-wine/[0.08]'
              : 'h-9 w-9 border-white/25'
          }`}
        >
          {label && (
            <span className="font-display text-[8px] uppercase tracking-[0.14em] text-wine">
              {label}
            </span>
          )}
        </span>
      </div>
    </div>
  )
}
