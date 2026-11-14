import { useEffect, useState } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'

/* Scroll-linked backdrop for every section below the hero.
   The hero keeps its own 3D scene untouched, so this layer stays fully
   transparent until the first screen has been scrolled past. */
export default function AmbientBackground() {
  const reduced = useReducedMotion()
  const { scrollY } = useScroll()
  const smooth = useSpring(scrollY, { stiffness: 90, damping: 26, mass: 0.4 })
  const [viewport, setViewport] = useState(900)

  useEffect(() => {
    const onResize = () => setViewport(window.innerHeight || 900)
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const opacity = useTransform(smooth, [viewport * 0.32, viewport * 0.9], [0, 1])
  const washY = useTransform(smooth, [0, 5400], [0, -280])
  const glowOneY = useTransform(smooth, [0, 4800], [0, -560])
  const glowOneX = useTransform(smooth, [0, 4800], [0, 150])
  const glowTwoY = useTransform(smooth, [0, 4800], [0, 460])
  const glowTwoX = useTransform(smooth, [0, 4800], [0, -140])
  const gridY = useTransform(smooth, [0, 3200], [0, -340])
  const ringRotate = useTransform(smooth, [0, 6200], [0, 170])
  const streakX = useTransform(smooth, [0, 6200], ['-40%', '85%'])

  // Reduced motion keeps the palette but drops the parallax drift.
  const drift = (value) => (reduced ? undefined : value)

  return (
    <motion.div
      aria-hidden
      style={{ opacity }}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <motion.div
        style={drift({ y: washY })}
        className="absolute inset-x-0 -top-1/4 h-[190vh] bg-[radial-gradient(120%_65%_at_18%_0%,rgba(122,31,53,0.45),transparent_62%),radial-gradient(85%_55%_at_88%_28%,rgba(201,79,102,0.2),transparent_60%),radial-gradient(100%_70%_at_50%_100%,rgba(43,10,19,0.95),transparent_72%)]"
      />

      <motion.div
        style={drift({ y: gridY })}
        className="grid-lines absolute inset-x-0 -top-48 h-[175%] opacity-60"
      />

      <motion.div
        style={drift({ y: glowOneY, x: glowOneX })}
        className="absolute -left-24 top-[22%] h-[52vh] w-[52vh] rounded-full bg-[radial-gradient(circle,rgba(201,79,102,0.34),transparent_66%)] blur-3xl"
      />

      <motion.div
        style={drift({ y: glowTwoY, x: glowTwoX })}
        className="absolute -right-32 top-[48%] h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle,rgba(122,31,53,0.5),transparent_68%)] blur-3xl"
      />

      <div className="absolute left-1/2 top-[45%] -ml-[38vh] h-[76vh] w-[76vh]">
        <motion.div
          style={drift({ rotate: ringRotate })}
          className="h-full w-full rounded-full border border-dashed border-maroon/25"
        />
      </div>

      <div className="absolute top-[38%] h-[42vh] w-[42vh] rotate-[28deg]">
        <motion.div
          style={drift({ x: streakX })}
          className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(233,154,170,0.12),transparent_70%)] blur-2xl"
        />
      </div>


      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,6,8,0.55)_0%,rgba(6,6,8,0)_22%,rgba(6,6,8,0)_78%,rgba(6,6,8,0.6)_100%)]" />
    </motion.div>
  )
}
