import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  Bell,
  Check,
  ChevronRight,
  Menu,
  ShieldCheck,
  SlidersHorizontal,
  Star,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  { name: 'Plumbing', icon: '⌁', detail: 'Leaks, geysers, drains' },
  { name: 'Electrical', icon: '⌁', detail: 'Safe, certified work' },
  { name: 'Painting', icon: '◒', detail: 'Refresh every room' },
  { name: 'Cleaning', icon: '✦', detail: 'Homes and offices' },
  { name: 'Building', icon: '▦', detail: 'Reliable renovations' },
  { name: 'Gardening', icon: '❋', detail: 'Outdoor care' },
]

const steps = [
  { number: '01', title: 'Describe your job', copy: 'Tell us what needs fixing, where you are, and when you need help.' },
  { number: '02', title: 'Compare professionals', copy: 'See clear quotes with ratings, experience, arrival times and verification.' },
  { number: '03', title: 'Hire with confidence', copy: 'Choose the right fit, chat securely and track the work from start to finish.' },
]

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'FixNow · Find trusted professionals for your next job' },
      { name: 'description', content: 'Get quotes from local, verified service professionals and hire with confidence.' },
    ],
  }),
  component: Home,
})

function Home() {
  const [jobOpen, setJobOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('Plumbing')

  return (
    <main className="min-h-dvh overflow-hidden bg-background text-foreground">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <header className="flex h-20 items-center justify-between border-b border-border/70">
          <Link to="/" className="flex items-center gap-2.5" aria-label="FixNow home">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-lg font-bold text-primary-foreground shadow-md">+</span>
            <span className="text-lg font-bold tracking-[-0.04em]">fix<span className="text-accent">now</span></span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex" aria-label="Main navigation">
            <a href="#services" className="transition-colors hover:text-foreground">Services</a>
            <a href="#how-it-works" className="transition-colors hover:text-foreground">How it works</a>
            <a href="#trust" className="transition-colors hover:text-foreground">Why FixNow</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="hidden text-sm sm:inline-flex">Log in</Button>
            <Button onClick={() => setJobOpen(true)} className="rounded-full bg-primary px-5 shadow-md transition-transform hover:scale-[1.03] active:scale-[0.98]">Post a job <ArrowRight className="size-4" /></Button>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu"><Menu className="size-5" /></Button>
          </div>
        </header>

        <section className="relative grid gap-12 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:gap-20 lg:pb-28 lg:pt-24">
          <div className="relative z-10 max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45 }} className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[.13em] text-accent-foreground">
              <span className="size-1.5 rounded-full bg-accent" /> Built for South Africa
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55, delay: .06 }} className="max-w-[680px] font-serif text-[clamp(3.35rem,7vw,6.5rem)] leading-[.93] tracking-[-.065em] text-primary">
              Find trusted <em className="text-accent">professionals</em> for your next job.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .14 }} className="mt-7 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
              Get quotes from local service providers, compare your options and hire with confidence.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .2 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" onClick={() => setJobOpen(true)} className="h-12 rounded-full bg-accent px-7 text-accent-foreground shadow-lg shadow-accent/20 transition-transform hover:scale-[1.03] active:scale-[0.98]">Post a job <ArrowRight className="size-4" /></Button>
              <Link to="/app" className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-primary/20 bg-card px-7 text-sm font-semibold text-primary transition-all hover:border-primary/40 hover:bg-primary hover:text-primary-foreground">Explore the marketplace <ChevronRight className="size-4" /></Link>
            </motion.div>
            <div className="mt-10 flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex -space-x-2" aria-label="Trusted local professionals">
                {['M', 'T', 'S', 'N'].map((letter, index) => <span key={letter} className={`flex size-8 items-center justify-center rounded-full border-2 border-background text-[11px] font-bold text-primary-foreground ${['bg-primary', 'bg-accent', 'bg-emerald-700', 'bg-slate-500'][index]}`}>{letter}</span>)}
              </div>
              <span><strong className="text-foreground">2,400+</strong> local professionals ready to help</span>
            </div>
          </div>

          <div className="relative min-h-[460px] lg:min-h-[560px]">
            <div className="absolute -right-16 top-0 size-72 rounded-full bg-accent/15 blur-3xl" />
            <div className="absolute bottom-5 left-0 size-52 rounded-full bg-primary/10 blur-3xl" />
            <motion.div initial={{ opacity: 0, scale: .94, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .7, delay: .18, ease: [.22, 1, .36, 1] }} className="absolute inset-x-0 top-5 mx-auto max-w-[500px] rotate-2 rounded-[2rem] border border-primary/10 bg-primary p-4 shadow-2xl shadow-primary/25 sm:top-10">
              <div className="rounded-[1.35rem] bg-card p-5 sm:p-6">
                <div className="flex items-start justify-between">
                  <div><div className="text-[11px] font-bold uppercase tracking-[.16em] text-accent-foreground">Your job</div><h2 className="mt-2 text-xl font-bold text-primary">Burst pipe repair</h2><p className="mt-1 text-sm text-muted-foreground">Centurion · Today</p></div>
                  <span className="rounded-full bg-destructive/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-destructive">Urgent</span>
                </div>
                <div className="my-5 h-px bg-border" />
                <div className="flex items-center justify-between text-xs text-muted-foreground"><span className="flex items-center gap-1.5"><Bell className="size-3.5 text-accent" /> 3 verified quotes</span><span className="font-semibold text-foreground">R500 – R1,000</span></div>
                <div className="mt-4 space-y-2.5">
                  <QuoteMini name="Mike's Plumbing" rating="4.9" price="R750" time="35 min" initials="MP" featured />
                  <QuoteMini name="ABC Plumbing" rating="4.6" price="R520" time="1 hr 20" initials="AB" />
                  <QuoteMini name="Emergency SA" rating="4.8" price="R900" time="18 min" initials="ES" />
                </div>
                <Button className="mt-5 w-full rounded-xl bg-primary text-primary-foreground">Compare quotes <SlidersHorizontal className="size-4" /></Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .5, delay: .7 }} className="absolute -bottom-2 right-0 hidden w-48 rounded-2xl border border-border bg-card p-4 shadow-xl sm:block lg:-right-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700"><ShieldCheck className="size-4" /> Trust, built in</div><p className="mt-2 text-xs leading-5 text-muted-foreground">Every profile shows the details that help you choose well.</p>
            </motion.div>
          </div>
        </section>

        <section id="services" className="border-t border-border py-16 sm:py-20">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-accent-foreground">Start somewhere</p><h2 className="mt-3 font-serif text-4xl tracking-[-.05em] text-primary sm:text-5xl">What needs fixing?</h2></div><p className="max-w-xs text-sm leading-6 text-muted-foreground">From a quick repair to a full renovation, find the right person for the job.</p></div>
          <div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">{services.map((service, index) => <button key={service.name} onClick={() => { setSelectedService(service.name); setJobOpen(true) }} className="group rounded-2xl border border-border bg-card p-4 text-left shadow-sm transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-md"><span className={`flex size-10 items-center justify-center rounded-xl text-xl ${index % 2 === 0 ? 'bg-primary/10 text-primary' : 'bg-accent/15 text-accent-foreground'}`}>{service.icon}</span><span className="mt-5 block text-sm font-bold text-primary">{service.name}</span><span className="mt-1 block text-[11px] leading-4 text-muted-foreground">{service.detail}</span></button>)}</div>
        </section>

        <section id="how-it-works" className="grid gap-10 border-t border-border py-16 sm:py-20 lg:grid-cols-[.7fr_1.3fr] lg:py-28"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-accent-foreground">A better way to hire</p><h2 className="mt-3 max-w-md font-serif text-4xl leading-tight tracking-[-.05em] text-primary sm:text-5xl">Good work starts with a good decision.</h2><p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">FixNow gives you the context to compare quality, trust, availability and price — not just the lowest number.</p></div><div className="grid gap-8 sm:grid-cols-3">{steps.map((step, index) => <motion.div key={step.number} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .45, delay: index * .08 }} className="border-t-2 border-primary pt-5"><span className="font-mono text-xs text-accent-foreground">{step.number}</span><h3 className="mt-8 text-lg font-bold text-primary">{step.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{step.copy}</p></motion.div>)}</div></section>

        <section id="trust" className="mb-12 grid gap-5 rounded-[2rem] bg-primary p-7 text-primary-foreground sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-14"><div><div className="flex items-center gap-2 text-sm font-bold text-accent"><BadgeCheck className="size-5" /> Trust-first by design</div><h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight tracking-[-.05em] sm:text-5xl">The right professional is more than a price.</h2><p className="mt-4 max-w-xl text-sm leading-6 text-primary-foreground/70">Verified profiles, transparent quotes, secure payments and reviews from real completed jobs.</p></div><Button onClick={() => setJobOpen(true)} size="lg" className="h-12 rounded-full bg-accent px-7 text-accent-foreground hover:bg-accent/90">Find your professional <ArrowRight className="size-4" /></Button></section>
        <footer className="flex flex-col gap-3 border-t border-border py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><span className="font-bold text-primary">fix<span className="text-accent">now</span></span><span>Made for the people who keep South Africa moving.</span><span>© 2026 FixNow</span></footer>
      </div>
      <AnimatePresence>{jobOpen && <JobModal service={selectedService} onClose={() => setJobOpen(false)} />}</AnimatePresence>
    </main>
  )
}

function QuoteMini({ name, rating, price, time, initials, featured = false }: { name: string; rating: string; price: string; time: string; initials: string; featured?: boolean }) {
  return <div className={`flex items-center gap-2.5 rounded-xl border p-2.5 ${featured ? 'border-accent/50 bg-accent/10' : 'border-border bg-background'}`}><span className="flex size-9 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">{initials}</span><div className="min-w-0 flex-1"><div className="flex items-center gap-1 text-xs font-bold text-primary"><span className="truncate">{name}</span>{featured && <BadgeCheck className="size-3 shrink-0 text-emerald-700" />}</div><div className="mt-0.5 flex items-center gap-2 text-[10px] text-muted-foreground"><span className="flex items-center gap-0.5 text-accent-foreground"><Star className="size-3 fill-current" /> {rating}</span><span>· {time} arrival</span></div></div><span className="text-xs font-bold text-primary">{price}</span></div>
}

function JobModal({ service, onClose }: { service: string; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false)
  return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-end justify-center bg-primary/40 p-0 backdrop-blur-sm sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-label="Post a job"><motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }} className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-[2rem] border border-border bg-card p-6 shadow-2xl sm:rounded-[2rem] sm:p-8"><div className="flex items-start justify-between"><div><p className="text-xs font-bold uppercase tracking-[.14em] text-accent-foreground">Post a job</p><h2 className="mt-2 font-serif text-3xl tracking-[-.04em] text-primary">Tell us what you need.</h2></div><Button variant="ghost" size="icon" onClick={onClose} aria-label="Close"><X className="size-5" /></Button></div>{submitted ? <div className="py-10 text-center"><span className="mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"><Check className="size-7" /></span><h3 className="mt-5 text-xl font-bold text-primary">Your job is ready to post</h3><p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-muted-foreground">We’ll match you with verified {service.toLowerCase()} professionals in your area.</p><Button onClick={onClose} className="mt-6 rounded-full">View your job <ArrowRight className="size-4" /></Button></div> : <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }} className="mt-7 space-y-5"><div><label htmlFor="service" className="text-sm font-semibold text-primary">What service do you need?</label><div className="mt-2 grid grid-cols-2 gap-2">{services.slice(0, 6).map((item) => <button type="button" key={item.name} onClick={() => {}} className={`rounded-xl border px-3 py-2.5 text-left text-sm transition-colors ${item.name === service ? 'border-accent bg-accent/10 font-bold text-primary' : 'border-border text-muted-foreground hover:border-primary/30'}`}>{item.name}</button>)}</div></div><div><label htmlFor="description" className="text-sm font-semibold text-primary">What’s happening?</label><textarea id="description" required rows={3} placeholder="e.g. There’s water pooling under the kitchen sink..." className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-3 py-3 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-ring/40" /></div><div className="grid gap-4 sm:grid-cols-2"><label htmlFor="area" className="text-sm font-semibold text-primary">Area or suburb<input id="area" required placeholder="Centurion" className="mt-2 h-11 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/40" /></label><label htmlFor="urgency" className="text-sm font-semibold text-primary">When do you need help?<select id="urgency" className="mt-2 h-11 w-full rounded-xl border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/40"><option>As soon as possible</option><option>Today</option><option>This week</option><option>Flexible</option></select></label></div><div className="flex items-start gap-2 rounded-xl bg-muted p-3 text-xs leading-5 text-muted-foreground"><ShieldCheck className="mt-0.5 size-4 shrink-0 text-emerald-700" /> Your exact address and contact details stay private until you choose a professional.</div><Button type="submit" size="lg" className="h-12 w-full rounded-xl bg-accent text-accent-foreground hover:bg-accent/90">Find verified professionals <ArrowRight className="size-4" /></Button></form>}</motion.div></motion.div>
}
