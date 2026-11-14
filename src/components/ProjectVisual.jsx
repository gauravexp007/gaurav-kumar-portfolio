/* Abstract product "screenshots" rendered with pure markup, no image assets
   to load, and each project gets a distinct visual identity. */

function Dashboard() {
  return (
    <div className="absolute inset-0 p-3">
      <div className="flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-[#0b0b12]/90">
        <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-3 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#b8445b]" />
          <span className="ml-2 rounded bg-white/[0.06] px-2 py-0.5 font-mono text-[7px] text-white/40">
            nebula.app / overview
          </span>
        </div>
        <div className="flex min-h-0 flex-1">
          <div className="hidden w-[18%] flex-col gap-2 border-r border-white/[0.06] p-2.5 sm:flex">
            <span className="h-1.5 w-3/4 rounded-full bg-wine/60" />
            {[0, 1, 2].map((item) => (
              <span key={item} className="h-1.5 w-1/2 rounded-full bg-white/10" />
            ))}
            <div className="mt-auto h-6 rounded border border-white/[0.07] bg-white/[0.03]" />
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-2 p-2.5">
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { value: '12.4k', color: 'text-wine' },
                { value: '38%', color: 'text-cyan' },
                { value: '4.9s', color: 'text-violet' },
              ].map((tile) => (
                <div
                  key={tile.value}
                  className="rounded border border-white/[0.07] bg-white/[0.03] p-1.5"
                >
                  <p className={`font-display text-[9px] ${tile.color}`}>{tile.value}</p>
                  <p className="text-[5.5px] uppercase tracking-[0.12em] text-white/30">Events</p>
                </div>
              ))}
            </div>
            <svg viewBox="0 0 120 40" preserveAspectRatio="none" className="h-12 w-full">
              <defs>
                <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#c94f66" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#c94f66" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 34 L15 27 L30 30 L45 18 L60 22 L75 11 L90 15 L105 7 L120 10 L120 40 L0 40 Z"
                fill="url(#areaGrad)"
              />
              <path
                d="M0 34 L15 27 L30 30 L45 18 L60 22 L75 11 L90 15 L105 7 L120 10"
                fill="none"
                stroke="#c94f66"
                strokeWidth="1.2"
              />
            </svg>
            <div className="flex flex-1 items-end gap-1">
              {[40, 65, 50, 80, 58, 90, 72, 96].map((height, index) => (
                <span
                  key={index}
                  className="flex-1 rounded-sm bg-gradient-to-t from-violet/30 to-violet/70"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Community() {
  return (
    <div className="absolute inset-0 p-4">
      <div className="flex h-full flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="font-display text-[8px] tracking-[0.2em] text-white/50">
            CAMPUSCONNECT
          </span>
          <div className="flex -space-x-1.5">
            {['from-violet to-cyan', 'from-wine to-maroon', 'from-cyan to-violet'].map(
              (gradient, index) => (
                <span
                  key={index}
                  className={`h-4 w-4 rounded-full border border-black/40 bg-gradient-to-br ${gradient}`}
                />
              ),
            )}
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.05] p-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-4 w-4 rounded-full bg-gradient-to-br from-violet to-cyan" />
            <span className="text-[7px] text-white/60">Aarav · CSE &rsquo;26</span>
            <span className="ml-auto rounded-full bg-wine/15 px-1.5 py-0.5 text-[6px] text-wine">
              doubts
            </span>
          </div>
          <p className="mt-1.5 text-[7px] leading-relaxed text-white/45">
            Anyone has the DBMS notes from unit 3? Sharing my summary in the thread.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg border border-white/10 bg-gradient-to-br from-wine/15 to-transparent p-2">
            <span className="text-[6px] uppercase tracking-[0.16em] text-wine/80">Event</span>
            <p className="mt-1 text-[8px] text-white/70">Hacknight 4.0</p>
            <p className="text-[6px] text-white/35">Fri · 6 PM · Lab 204</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-2">
            <span className="text-[6px] uppercase tracking-[0.16em] text-cyan/80">Notes</span>
            <p className="mt-1 text-[8px] text-white/70">DSA patterns</p>
            <p className="text-[6px] text-white/35">124 pages · 2.4k views</p>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-lg border border-white/[0.07] bg-white/[0.02] px-2 py-1.5 text-[6px] text-white/30">
          <span>Search resources…</span>
          <span className="rounded bg-white/10 px-1">⌘K</span>
        </div>
      </div>
    </div>
  )
}

function Vision() {
  const tiles = [
    { label: 'street.jpg', conf: '98%', span: 'row-span-2', bg: 'linear-gradient(150deg,#7a5cff,#161624)' },
    { label: 'portrait.png', conf: '94%', span: '', bg: 'linear-gradient(150deg,#3ce6ff,#101820)' },
    { label: 'skyline.jpg', conf: '88%', span: '', bg: 'linear-gradient(150deg,#c94f66,#180a10)' },
    { label: 'monstera.png', conf: '91%', span: '', bg: 'linear-gradient(150deg,#a83a53,#150b10)' },
  ]

  return (
    <div className="absolute inset-0 p-3">
      <div className="grid h-full grid-cols-3 grid-rows-2 gap-1.5">
        {tiles.map((tile) => (
          <div
            key={tile.label}
            className={`relative overflow-hidden rounded-md border border-white/10 ${tile.span}`}
            style={{ background: tile.bg }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(160deg,transparent,rgba(0,0,0,0.6))]" />
            <span className="absolute left-1.5 top-1.5 rounded bg-black/40 px-1 py-0.5 font-mono text-[6px] text-white/80">
              {tile.label}
            </span>
            <span className="absolute bottom-1.5 right-1.5 rounded bg-wine/90 px-1 font-mono text-[6px] font-medium text-ink">
              {tile.conf}
            </span>
          </div>
        ))}
      </div>
      <div className="absolute inset-x-2 bottom-2 rounded-md border border-white/10 bg-black/70 px-2 py-1 backdrop-blur">
        <div className="flex items-center justify-between font-mono text-[6px] text-white/50">
          <span>inference · 42ms</span>
          <span className="text-wine">98.2% confidence</span>
        </div>
      </div>
    </div>
  )
}

function Terminal() {
  return (
    <div className="absolute inset-0 p-3">
      <div className="flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-[#07070c]">
        <div className="flex items-center justify-between border-b border-white/[0.06] px-3 py-1.5 font-mono text-[7px] text-white/35">
          <span>devdock ~ zsh</span>
          <span>⌘K</span>
        </div>
        <div className="flex-1 space-y-1 p-3 font-mono text-[7.5px] leading-relaxed">
          <p>
            <span className="text-wine">➜</span> <span className="text-cyan">~</span>{' '}
            <span className="text-white/75">devdock search &quot;debounce hook&quot;</span>
          </p>
          <p className="text-white/30">3 results in 12ms</p>
          <p className="text-white/70">
            <span className="text-violet">01</span> useDebounce.ts{' '}
            <span className="text-white/25">· react · hooks</span>
          </p>
          <p className="text-white/70">
            <span className="text-violet">02</span> debounce.ts{' '}
            <span className="text-white/25">· utils · classic</span>
          </p>
          <p className="text-white/70">
            <span className="text-violet">03</span> useThrottle.ts{' '}
            <span className="text-white/25">· react · hooks</span>
          </p>
          <p className="text-white/40">copied to clipboard ✓</p>
          <p>
            <span className="text-wine">➜</span>{' '}
            <span className="inline-block h-2.5 w-1 animate-pulse bg-wine align-middle" />
          </p>
        </div>
      </div>
    </div>
  )
}

function Components() {
  return (
    <div className="absolute inset-0 p-4">
      <div className="grid h-full grid-cols-3 grid-rows-2 gap-2">
        <div className="flex flex-col justify-between rounded-lg border border-white/10 bg-white/[0.04] p-2">
          <span className="text-[6px] uppercase tracking-[0.14em] text-white/35">Button</span>
          <span className="rounded-full bg-wine px-2 py-1 text-center text-[6.5px] font-medium text-ink">
            Get started
          </span>
        </div>
        <div className="flex flex-col justify-between rounded-lg border border-white/10 bg-white/[0.04] p-2">
          <span className="text-[6px] uppercase tracking-[0.14em] text-white/35">Toggle</span>
          <span className="flex h-3.5 w-7 items-center rounded-full bg-wine/80 p-0.5">
            <span className="ml-auto h-2.5 w-2.5 rounded-full bg-ink" />
          </span>
        </div>
        <div className="flex flex-col justify-between rounded-lg border border-white/10 bg-white/[0.04] p-2">
          <span className="text-[6px] uppercase tracking-[0.14em] text-white/35">Slider</span>
          <span className="relative h-1 w-full rounded-full bg-white/15">
            <span className="absolute left-0 top-0 h-full w-2/3 rounded-full bg-gradient-to-r from-wine to-violet" />
            <span className="absolute left-2/3 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-chalk" />
          </span>
        </div>
        <div className="flex flex-col justify-between rounded-lg border border-white/10 bg-white/[0.04] p-2">
          <span className="text-[6px] uppercase tracking-[0.14em] text-white/35">Avatars</span>
          <span className="flex -space-x-1">
            {['from-wine to-maroon', 'from-violet to-cyan', 'from-cyan to-violet'].map(
              (gradient, index) => (
                <span
                  key={index}
                  className={`h-4 w-4 rounded-full border border-black/40 bg-gradient-to-br ${gradient}`}
                />
              ),
            )}
          </span>
        </div>
        <div className="flex flex-col justify-between rounded-lg border border-white/10 bg-white/[0.04] p-2">
          <span className="text-[6px] uppercase tracking-[0.14em] text-white/35">Badge</span>
          <span className="rounded-full border border-wine/30 bg-wine/10 px-1.5 py-0.5 text-center text-[6px] text-wine">
            New
          </span>
        </div>
        <div className="flex flex-col justify-between rounded-lg border border-white/10 bg-white/[0.04] p-2">
          <span className="text-[6px] uppercase tracking-[0.14em] text-white/35">Toast</span>
          <span className="rounded border border-white/10 bg-black/40 px-1.5 py-1 text-[6px] text-white/60">
            Saved ✓
          </span>
        </div>
      </div>
    </div>
  )
}

export default function ProjectVisual({ variant }) {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#08080e]">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 72% 0%, rgba(122,92,255,0.24), transparent 58%), radial-gradient(circle at 10% 100%, rgba(201,79,102,0.1), transparent 52%)',
        }}
      />
      {variant === 'dashboard' && <Dashboard />}
      {variant === 'community' && <Community />}
      {variant === 'vision' && <Vision />}
      {variant === 'terminal' && <Terminal />}
      {variant === 'components' && <Components />}
    </div>
  )
}
