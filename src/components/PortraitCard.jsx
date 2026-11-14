import { profile } from '../data/portfolio'
import TiltCard from './ui/TiltCard'
import Icon from './ui/Icon'

function PortraitArtwork() {
  return (
    <svg
      viewBox="0 0 400 480"
      className="h-full w-full"
      role="img"
      aria-label={`Editorial portrait artwork of ${profile.name}`}
    >
      <defs>
        <linearGradient id="rim" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c94f66" />
          <stop offset="50%" stopColor="#9f7bff" />
          <stop offset="100%" stopColor="#3ce6ff" />
        </linearGradient>
        <linearGradient id="figure" x1="0.15" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor="#2a2a3d" />
          <stop offset="45%" stopColor="#191926" />
          <stop offset="100%" stopColor="#0b0b12" />
        </linearGradient>
        <linearGradient id="shirt" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#161622" />
          <stop offset="100%" stopColor="#07070c" />
        </linearGradient>
        <linearGradient id="faceLight" x1="0" y1="0.4" x2="1" y2="0.6">
          <stop offset="0%" stopColor="#c94f66" stopOpacity="0.22" />
          <stop offset="40%" stopColor="#8f78ff" stopOpacity="0.12" />
          <stop offset="75%" stopColor="#000000" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.55" />
        </linearGradient>
        <radialGradient id="aura" cx="50%" cy="34%" r="46%">
          <stop offset="0%" stopColor="#7a5cff" stopOpacity="0.5" />
          <stop offset="55%" stopColor="#5b3ce6" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#7a5cff" stopOpacity="0" />
        </radialGradient>
        <pattern id="scan" width="4" height="4" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="4" y2="0" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1" />
        </pattern>
        <pattern id="microgrid" width="26" height="26" patternUnits="userSpaceOnUse">
          <path d="M26 0H0V26" fill="none" stroke="#ffffff" strokeOpacity="0.045" strokeWidth="1" />
        </pattern>
        <clipPath id="portraitClip">
          <rect width="400" height="480" rx="24" />
        </clipPath>
        <clipPath id="headClip">
          <path d="M200 118c32 0 56 28 56 72 0 42-24 78-56 78s-56-36-56-78c0-44 24-72 56-72Z" />
        </clipPath>
      </defs>

      <g clipPath="url(#portraitClip)">
        <rect width="400" height="480" fill="#08080e" />
        <rect width="400" height="480" fill="url(#microgrid)" />
        <ellipse cx="200" cy="196" rx="180" ry="180" fill="url(#aura)" />

        <circle cx="200" cy="198" r="152" fill="none" stroke="url(#rim)" strokeOpacity="0.2" />
        <circle
          cx="200"
          cy="198"
          r="126"
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.1"
          strokeDasharray="2 9"
        />
        <circle cx="200" cy="198" r="172" fill="none" stroke="#ffffff" strokeOpacity="0.045" />

        {/* shoulders / jacket */}
        <path
          d="M46 480c8-92 66-142 154-142s146 50 154 142Z"
          fill="url(#figure)"
          stroke="url(#rim)"
          strokeOpacity="0.45"
          strokeWidth="1.4"
        />
        <path d="M182 262v58c0 14 36 14 36 0v-58Z" fill="url(#figure)" />

        {/* shirt + lapels */}
        <path d="M200 320 168 360 200 436 232 360Z" fill="url(#shirt)" />
        <path
          d="M168 360 200 436 232 360"
          fill="none"
          stroke="#c94f66"
          strokeOpacity="0.28"
          strokeWidth="1.2"
        />
        <path
          d="M150 340c14 26 34 66 50 96M250 340c-14 26-34 66-50 96"
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.12"
        />

        {/* head */}
        <path
          d="M200 118c32 0 56 28 56 72 0 42-24 78-56 78s-56-36-56-78c0-44 24-72 56-72Z"
          fill="url(#figure)"
          stroke="url(#rim)"
          strokeOpacity="0.6"
          strokeWidth="1.4"
        />
        <g clipPath="url(#headClip)">
          <rect x="130" y="110" width="140" height="170" fill="url(#faceLight)" />
          <path
            d="M158 214c10 26 24 42 42 48"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.12"
            strokeWidth="1.4"
          />
          <path d="M168 250c10 8 22 12 32 12" fill="none" stroke="#000" strokeOpacity="0.35" strokeWidth="6" />
        </g>

        {/* hair */}
        <path
          d="M144 184c2-46 26-76 56-76s54 30 56 76c-10-26-30-38-56-38s-46 12-56 38Z"
          fill="#0e0e17"
          stroke="#ffffff"
          strokeOpacity="0.08"
        />

        {/* ear hints */}
        <ellipse cx="144" cy="196" rx="7" ry="13" fill="#1b1b28" stroke="#ffffff" strokeOpacity="0.08" />
        <ellipse cx="256" cy="196" rx="7" ry="13" fill="#1b1b28" stroke="#ffffff" strokeOpacity="0.08" />

        {/* rim light */}
        <path
          d="M248 148c10 12 16 27 16 44 0 24-8 44-22 56"
          fill="none"
          stroke="url(#rim)"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path
          d="M262 470c-4-46-24-86-56-108"
          fill="none"
          stroke="#c94f66"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M132 352c-14 26-24 66-28 118"
          fill="none"
          stroke="#7a5cff"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.55"
        />

        <rect width="400" height="480" fill="url(#scan)" />

        <g fill="#9a9aa8" fontSize="8" letterSpacing="2.4" fontFamily="monospace">
          <text x="24" y="38">PORTRAIT / 01</text>
          <text x="24" y="452">28.6139 N · 77.2090 E</text>
        </g>
        <g fill="#c94f66" fontSize="8.5" letterSpacing="2" fontFamily="monospace">
          <text x="376" y="38" textAnchor="end">
            {profile.monogram}
          </text>
          <text x="376" y="452" textAnchor="end">
            B.TECH
          </text>
        </g>
        <g stroke="#c94f66" strokeWidth="1.4" opacity="0.65">
          <path d="M22 56V38h18" fill="none" />
          <path d="M378 56V38h-18" fill="none" />
          <path d="M22 424v18h18" fill="none" />
          <path d="M378 424v18h-18" fill="none" />
        </g>
        <line x1="24" y1="408" x2="108" y2="408" stroke="#ffffff" strokeOpacity="0.16" />
        <line x1="292" y1="408" x2="376" y2="408" stroke="#ffffff" strokeOpacity="0.16" />
      </g>
    </svg>
  )
}

export default function PortraitCard() {
  return (
    <div className="relative w-[min(76vw,330px)] sm:w-[360px] lg:w-[400px]">
      <div
        className="absolute -inset-12 -z-10 rounded-full opacity-80 blur-[70px]"
        style={{
          background:
            'radial-gradient(circle at 50% 40%, rgba(201,79,102,0.14), rgba(122,92,255,0.2) 45%, transparent 70%)',
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute -inset-6 -z-10 animate-spin-slower rounded-full border border-dashed border-white/10" aria-hidden />
      <div className="pointer-events-none absolute -inset-2 -z-10 rounded-[32px] border border-white/[0.06]" aria-hidden />

      <TiltCard max={6} className="relative">
        <div className="glass rounded-[26px] p-2">
          <div className="relative overflow-hidden rounded-[20px]">
            {profile.photo ? (
              <img
                src={profile.photo}
                alt={`${profile.name} portrait`}
                className="aspect-[5/6] w-full object-cover object-[center_22%] saturate-[0.92]"
              />
            ) : (
              <div className="aspect-[5/6] w-full">
                <PortraitArtwork />
              </div>
            )}

            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#060608]/70 via-[#060608]/15 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#060608] via-[#060608]/55 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
              <div>
                <p className="font-name text-[15px] font-bold leading-tight tracking-[0.01em] text-chalk">
                  {profile.name}
                </p>
                <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-chalk/50">
                  B.Tech · CSE · 2027
                </p>
              </div>
              <span className="flex items-center gap-1.5 rounded-full border border-wine/25 bg-wine/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.14em] text-wine">
                <span className="h-1 w-1 rounded-full bg-wine" />
                Open
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between px-3 pb-1.5 pt-3">
            <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] text-muted">
              <Icon name="mapPin" className="h-3 w-3 text-wine/70" />
              India
            </span>
            <span className="font-display text-[10px] uppercase tracking-[0.16em] text-muted">
              Portfolio / 2026
            </span>
          </div>
        </div>
      </TiltCard>

      <div className="absolute -left-3 top-[22%] animate-float sm:-left-8">
        <div className="glass-soft flex items-center gap-2 rounded-full px-3 py-1.5 shadow-lg shadow-black/40">
          <span className="font-display text-[10px] text-wine">&#123; &#125;</span>
          <span className="font-display text-[10px] uppercase tracking-[0.14em] text-chalk/80">
            React
          </span>
        </div>
      </div>

      <div className="absolute -right-2 top-[9%] animate-float-delayed sm:-right-6">
        <div className="glass-soft flex items-center gap-2 rounded-full px-3 py-1.5 shadow-lg shadow-black/40">
          <span className="h-1.5 w-1.5 rounded-full bg-violet" />
          <span className="font-display text-[10px] uppercase tracking-[0.14em] text-chalk/80">
            Three.js
          </span>
        </div>
      </div>

      <div className="absolute -right-1 bottom-[24%] animate-float sm:-right-4">
        <div className="glass-soft flex items-center gap-2 rounded-full px-3 py-1.5 shadow-lg shadow-black/40">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
          <span className="font-display text-[10px] uppercase tracking-[0.14em] text-chalk/80">
            GSAP
          </span>
        </div>
      </div>

      <div className="absolute -left-2 bottom-[8%] hidden animate-float-delayed sm:-left-10 sm:block">
        <div className="glass-soft rounded-2xl px-3.5 py-2.5 shadow-lg shadow-black/40">
          <p className="font-name text-[15px] leading-none tracking-tight text-chalk">9.56</p>
          <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-muted">CGPA</p>
        </div>
      </div>
    </div>
  )
}
