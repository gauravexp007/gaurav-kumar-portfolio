import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, Copy, Send } from 'lucide-react'
import { profile } from '../data/portfolio'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import Magnetic from './ui/Magnetic'
import Icon from './ui/Icon'

const initialForm = { name: '', email: '', message: '' }

/**
 * Web3Forms access key: public by design (it only routes submissions to the
 * inbox it was issued for). Until it is filled in, the form falls back to
 * opening the visitor's mail app instead of sending silently into the void.
 */
const CONTACT_ACCESS_KEY = '1b8b1a8e-9774-4ea4-a2e0-6dfdfc5abee6'

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [copied, setCopied] = useState(false)

  const update = (field) => (event) => {
    setForm((previous) => ({ ...previous, [field]: event.target.value }))
    setErrors((previous) => ({ ...previous, [field]: '' }))
    setStatus((previous) => (previous === 'error' ? 'idle' : previous))
  }

  const validate = () => {
    const next = {}
    if (form.name.trim().length < 2) next.name = 'Please share your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      next.email = 'That email address looks incomplete.'
    if (form.message.trim().length < 12)
      next.message = 'A little more detail helps. At least a sentence.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  const submit = async (event) => {
    event.preventDefault()
    if (!validate()) return

    setStatus('sending')

    if (!CONTACT_ACCESS_KEY) {
      const subject = `Portfolio enquiry from ${form.name.trim()}`
      const body = `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`
      setStatus('mailto')
      return
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: CONTACT_ACCESS_KEY,
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          subject: `Portfolio enquiry from ${form.name.trim()}`,
          from_name: 'Portfolio contact form',
        }),
      })

      const result = await response.json().catch(() => ({}))
      if (!response.ok || result.success === false) throw new Error('send failed')

      setForm(initialForm)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 h-[460px] w-[820px] -translate-x-1/2 rounded-full bg-violet/[0.1] blur-[140px]"
      />

      <div className="container-x relative">
        <SectionHeading
          index="08"
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build something{' '}
              <span className="font-serif italic text-gradient">worth remembering.</span>
            </>
          }
          description="Have a project, an internship, a hackathon team or just a question? My inbox is genuinely open."
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">Direct line</p>
              <a
                href={`mailto:${profile.email}`}
                className="group mt-4 flex items-center gap-3 break-all font-display text-[clamp(1.3rem,2.8vw,2rem)] font-light tracking-tight text-chalk transition-colors hover:text-wine"
              >
                {profile.email}
                <ArrowUpRight className="h-5 w-5 shrink-0 text-wine transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-2 text-[11px] text-chalk/70 transition-colors hover:border-wine/40 hover:text-wine"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? 'Copied to clipboard' : 'Copy email address'}
              </button>

              <a
                href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}
                className="mt-3 flex w-fit items-center gap-2 text-[13px] text-chalk/70 transition-colors hover:text-wine"
              >
                <Icon name="phone" className="h-3.5 w-3.5 text-wine/70" />
                {profile.phone}
              </a>
            </Reveal>

            <Reveal delay={0.08} className="mt-10">
              <p className="eyebrow">Elsewhere</p>
              <div className="mt-4 divide-y divide-white/[0.06] border-y border-white/[0.06]">
                {profile.socials.slice(0, 3).map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex items-center gap-4 py-3.5"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-chalk/60 transition-colors group-hover:border-wine/30 group-hover:text-wine">
                      <Icon name={social.icon} className="h-4 w-4" />
                    </span>
                    <span className="flex flex-col">
                      <span className="font-display text-[13px] text-chalk/85">{social.label}</span>
                      <span className="text-[11px] text-muted/70">{social.handle}</span>
                    </span>
                    <ArrowUpRight className="ml-auto h-4 w-4 text-muted/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-wine" />
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.14} className="mt-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-wine/25 bg-wine/[0.07] px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-wine">
                <span className="h-1.5 w-1.5 rounded-full bg-wine" />
                {profile.availability}
              </span>
              <span className="text-[11px] text-muted/60">Replies within a day or two</span>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.015] p-6 sm:p-8">
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-wine/[0.07] blur-3xl" />

                <AnimatePresence mode="wait" initial={false}>
                  {status === 'sent' || status === 'mailto' ? (
                    <motion.div
                      key="sent"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      className="flex min-h-[320px] flex-col items-center justify-center text-center"
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-wine/30 bg-wine/10 text-wine">
                        <Check className="h-6 w-6" />
                      </span>
                      <h3 className="mt-5 font-display text-2xl tracking-tight text-chalk">
                        {status === 'mailto' ? 'Message ready to send' : 'Message sent'}
                      </h3>
                      <p className="mt-2 max-w-sm text-[13px] leading-relaxed text-muted">
                        {status === 'mailto'
                          ? 'Your mail app should have opened with everything filled in. If it did not, copy my email address on the left. I would still love to hear from you.'
                          : 'It has landed in my inbox. I read everything and usually reply within a day or two. Thanks for reaching out.'}
                      </p>
                      <div className="mt-6 flex flex-wrap justify-center gap-2">
                        <button
                          type="button"
                          onClick={copyEmail}
                          className="btn-ghost !px-4 !py-2.5 !text-[12px]"
                        >
                          {copied ? 'Copied' : 'Copy email'}
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setForm(initialForm)
                            setStatus('idle')
                          }}
                          className="btn-primary !px-4 !py-2.5 !text-[12px]"
                        >
                          Send another
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={submit}
                      noValidate
                      className="relative"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <span className="eyebrow">Send a message</span>
                          <h3 className="mt-2 font-display text-lg font-medium tracking-tight text-chalk">
                            Tell me what you&apos;re building
                          </h3>
                        </div>
                        <span className="hidden rounded-full border border-white/10 px-2.5 py-1 font-mono text-[9px] text-muted/60 sm:block">
                          01 / 01
                        </span>
                      </div>

                      <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="name"
                            className="mb-1.5 block text-[10px] uppercase tracking-[0.18em] text-muted"
                          >
                            Your name
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={update('name')}
                            placeholder="Ada Lovelace"
                            aria-invalid={Boolean(errors.name)}
                            aria-describedby={errors.name ? 'name-error' : undefined}
                            className={`w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-[13px] text-chalk placeholder:text-muted/40 transition-colors focus:border-wine/50 focus:outline-none ${
                              errors.name ? 'border-red-400/60' : 'border-white/10'
                            }`}
                          />
                          {errors.name && (
                            <p id="name-error" role="alert" className="mt-1.5 text-[11px] text-red-300/90">
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="mb-1.5 block text-[10px] uppercase tracking-[0.18em] text-muted"
                          >
                            Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={update('email')}
                            placeholder="you@company.com"
                            aria-invalid={Boolean(errors.email)}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                            className={`w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-[13px] text-chalk placeholder:text-muted/40 transition-colors focus:border-wine/50 focus:outline-none ${
                              errors.email ? 'border-red-400/60' : 'border-white/10'
                            }`}
                          />
                          {errors.email && (
                            <p id="email-error" role="alert" className="mt-1.5 text-[11px] text-red-300/90">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="mb-1.5 flex items-center justify-between">
                          <label
                            htmlFor="message"
                            className="block text-[10px] uppercase tracking-[0.18em] text-muted"
                          >
                            Message
                          </label>
                          <span className="text-[10px] tabular-nums text-muted/50">
                            {form.message.length}/800
                          </span>
                        </div>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          maxLength={800}
                          value={form.message}
                          onChange={update('message')}
                          placeholder="A project, a role, an idea you can't stop thinking about…"
                          aria-invalid={Boolean(errors.message)}
                          aria-describedby={errors.message ? 'message-error' : undefined}
                          className={`w-full resize-none rounded-xl border bg-white/[0.03] px-4 py-3 text-[13px] leading-relaxed text-chalk placeholder:text-muted/40 transition-colors focus:border-wine/50 focus:outline-none ${
                            errors.message ? 'border-red-400/60' : 'border-white/10'
                          }`}
                        />
                        {errors.message && (
                          <p id="message-error" role="alert" className="mt-1.5 text-[11px] text-red-300/90">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <input
                        type="text"
                        name="_honey"
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                        className="hidden"
                      />

                      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="max-w-[15rem] text-[10.5px] leading-relaxed text-muted/50">
                          {status === 'error' ? (
                            <>
                              Couldn&apos;t send that just now.{' '}
                              <a href={`mailto:${profile.email}`} className="text-wine underline">
                                Email me directly
                              </a>{' '}
                              and it will still reach me.
                            </>
                          ) : (
                            'Sends straight to my inbox. Nothing is stored on this site.'
                          )}
                        </p>
                        <Magnetic strength={0.2}>
                          <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="btn-primary group w-full disabled:cursor-wait disabled:opacity-70 sm:w-auto"
                          >
                            {status === 'sending' ? 'Sending…' : 'Send message'}
                            <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </button>
                        </Magnetic>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
