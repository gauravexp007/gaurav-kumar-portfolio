import { useRef } from 'react'
import { prefersReducedMotion } from '../../lib/scroll'

/** Pointer-reactive 3D tilt container. Touch devices keep the flat layout. */
export default function TiltCard({ children, className = '', max = 7, scale = 1.01 }) {
  const ref = useRef(null)
  const frame = useRef(0)

  const onMove = (event) => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return
    if (!window.matchMedia('(pointer: fine)').matches) return

    const rect = el.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height

    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      el.style.transform = `perspective(1200px) rotateX(${(0.5 - py) * max * 2}deg) rotateY(${
        (px - 0.5) * max * 2
      }deg) scale(${scale})`
      el.style.setProperty('--mx', `${px * 100}%`)
      el.style.setProperty('--my', `${py * 100}%`)
    })
  }

  const reset = () => {
    const el = ref.current
    if (!el) return
    cancelAnimationFrame(frame.current)
    el.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)'
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={`transition-transform duration-300 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  )
}
