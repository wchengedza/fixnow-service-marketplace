import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { BadgeCheck, Clock3, Edit3, MapPin, Plus, Trash2, Wrench, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type ServicePackage = {
  id: number
  name: string
  category: string
  description: string
  price: string
  duration: string
  area: string
  availability: string
}

const initialPackages: ServicePackage[] = [
  { id: 1, name: 'Emergency leak repair', category: 'Plumbing', description: 'Fast diagnosis and repair for burst pipes, leaks and blocked drains.', price: 'R750', duration: '1–2 hours', area: 'Centurion + 20 km', availability: 'Available now' },
  { id: 2, name: 'Geyser inspection', category: 'Plumbing', description: 'Safety check, fault finding and a clear repair recommendation.', price: 'R450', duration: '60 minutes', area: 'Pretoria East', availability: 'Available today' },
]

export const Route = createFileRoute('/app/provider')({
  head: () => ({ meta: [{ title: 'Service packages · FixNow' }, { name: 'description', content: 'Create and manage the service packages customers can book from your FixNow profile.' }] }),
  component: ProviderPackages,
})

function ProviderPackages() {
  const [packages, setPackages] = useState(initialPackages)
  const [formOpen, setFormOpen] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)

  const openCreate = () => { setEditingId(null); setFormOpen(true) }
  const openEdit = (id: number) => { setEditingId(id); setFormOpen(true) }
  const savePackage = (item: ServicePackage) => {
    setPackages(current => editingId ? current.map(pkg => pkg.id === editingId ? item : pkg) : [...current, { ...item, id: Date.now() }])
    setFormOpen(false)
  }

  return <div className="mx-auto max-w-6xl space-y-8 p-5 sm:p-8">
    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
      <div><p className="text-xs font-bold uppercase tracking-[.16em] text-accent-foreground">Provider workspace</p><h1 className="mt-2 font-serif text-4xl tracking-[-.05em] text-primary sm:text-5xl">Your service packages.</h1><p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">Give customers a clear way to understand what you offer, what it costs and when you can help.</p></div>
      <Button onClick={openCreate} className="w-fit rounded-full bg-accent text-accent-foreground hover:bg-accent/90"><Plus className="size-4" /> Add package</Button>
    </div>

    <Card className="border-accent/30 bg-accent/10 shadow-sm"><CardContent className="flex gap-3 p-5"><BadgeCheck className="mt-0.5 size-5 shrink-0 text-emerald-700" /><div><p className="text-sm font-bold text-primary">Packages make comparison easier</p><p className="mt-1 text-xs leading-5 text-muted-foreground">Customers see your package name, starting price, duration, service area and availability before they contact or book you.</p></div></CardContent></Card>

    <div className="grid gap-4 md:grid-cols-2">{packages.map(pkg => <PackageCard key={pkg.id} item={pkg} onEdit={() => openEdit(pkg.id)} onDelete={() => setPackages(current => current.filter(item => item.id !== pkg.id))} />)}</div>
    {packages.length === 0 && <Card className="border-dashed"><CardContent className="flex flex-col items-center justify-center py-16 text-center"><Wrench className="size-8 text-muted-foreground" /><h2 className="mt-4 text-lg font-bold text-primary">Create your first package</h2><p className="mt-2 max-w-sm text-sm text-muted-foreground">Turn your most common service into a clear, bookable offer.</p><Button onClick={openCreate} className="mt-5 rounded-full">Add a package <Plus className="size-4" /></Button></CardContent></Card>}
    {formOpen && <PackageForm initial={editingId ? packages.find(pkg => pkg.id === editingId) : undefined} onClose={() => setFormOpen(false)} onSave={savePackage} />}
  </div>
}

function PackageCard({ item, onEdit, onDelete }: { item: ServicePackage; onEdit: () => void; onDelete: () => void }) {
  return <Card className="overflow-hidden border-border/80 shadow-sm transition-shadow hover:shadow-md"><CardHeader className="border-b border-border/70 pb-4"><div className="flex items-start justify-between gap-3"><div><span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">{item.category}</span><CardTitle className="mt-3 text-xl text-primary">{item.name}</CardTitle></div><div className="flex gap-1"><Button variant="ghost" size="icon" onClick={onEdit} aria-label={`Edit ${item.name}`}><Edit3 className="size-4" /></Button><Button variant="ghost" size="icon" onClick={onDelete} aria-label={`Delete ${item.name}`} className="text-destructive hover:text-destructive"><Trash2 className="size-4" /></Button></div></div></CardHeader><CardContent className="space-y-5 p-5"><p className="text-sm leading-6 text-muted-foreground">{item.description}</p><div className="grid grid-cols-2 gap-3 text-xs"><div><p className="text-muted-foreground">Starting price</p><p className="mt-1 text-lg font-bold text-primary">{item.price}</p></div><div><p className="text-muted-foreground">Typical duration</p><p className="mt-1 font-bold text-primary">{item.duration}</p></div><div className="flex items-center gap-1.5 text-muted-foreground"><MapPin className="size-3.5" /> {item.area}</div><div className="flex items-center gap-1.5 font-semibold text-emerald-700"><span className="size-1.5 rounded-full bg-emerald-600" /> {item.availability}</div></div></CardContent></Card>
}

function PackageForm({ initial, onClose, onSave }: { initial?: ServicePackage; onClose: () => void; onSave: (item: ServicePackage) => void }) {
  const [name, setName] = useState(initial?.name ?? '')
  const [category, setCategory] = useState(initial?.category ?? 'Plumbing')
  const [description, setDescription] = useState(initial?.description ?? '')
  const [price, setPrice] = useState(initial?.price ?? '')
  const [duration, setDuration] = useState(initial?.duration ?? '1–2 hours')
  const [area, setArea] = useState(initial?.area ?? '')
  const [availability, setAvailability] = useState(initial?.availability ?? 'Available today')
  const submit = (event: React.FormEvent) => { event.preventDefault(); onSave({ id: initial?.id ?? 0, name, category, description, price, duration, area, availability }) }

  return <div className="fixed inset-0 z-50 flex items-end justify-center bg-primary/40 p-0 backdrop-blur-sm sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-label="Service package form"><div className="max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-t-[2rem] border border-border bg-card p-6 shadow-2xl sm:rounded-[2rem] sm:p-8"><div className="flex items-start justify-between"><div><p className="text-xs font-bold uppercase tracking-[.14em] text-accent-foreground">{initial ? 'Edit package' : 'New package'}</p><h2 className="mt-2 font-serif text-3xl tracking-[-.04em] text-primary">Make your offer clear.</h2></div><Button variant="ghost" size="icon" onClick={onClose} aria-label="Close"><X className="size-5" /></Button></div><form onSubmit={submit} className="mt-7 space-y-4"><Field label="Package name"><input required value={name} onChange={event => setName(event.target.value)} placeholder="e.g. Emergency leak repair" className="field-input" /></Field><div className="grid gap-4 sm:grid-cols-2"><Field label="Category"><select value={category} onChange={event => setCategory(event.target.value)} className="field-input"><option>Plumbing</option><option>Electrical</option><option>Painting</option><option>Building</option><option>Cleaning</option><option>Gardening</option><option>Welding</option></select></Field><Field label="Starting price"><input required value={price} onChange={event => setPrice(event.target.value)} placeholder="R750" className="field-input" /></Field></div><Field label="What is included"><textarea required value={description} onChange={event => setDescription(event.target.value)} rows={3} placeholder="Describe the work, materials or customer outcome..." className="field-input resize-none" /></Field><div className="grid gap-4 sm:grid-cols-2"><Field label="Typical duration"><div className="relative"><Clock3 className="pointer-events-none absolute left-3 top-3 size-4 text-muted-foreground" /><input required value={duration} onChange={event => setDuration(event.target.value)} placeholder="1–2 hours" className="field-input pl-9" /></div></Field><Field label="Service area"><div className="relative"><MapPin className="pointer-events-none absolute left-3 top-3 size-4 text-muted-foreground" /><input required value={area} onChange={event => setArea(event.target.value)} placeholder="Centurion + 20 km" className="field-input pl-9" /></div></Field></div><Field label="Availability shown to customers"><select value={availability} onChange={event => setAvailability(event.target.value)} className="field-input"><option>Available now</option><option>Available today</option><option>Available tomorrow</option><option>By appointment</option></select></Field><Button type="submit" size="lg" className="mt-2 h-12 w-full rounded-xl bg-accent text-accent-foreground hover:bg-accent/90">{initial ? 'Save changes' : 'Publish package'} <Plus className="size-4" /></Button></form></div></div>
}

function Field({ label, children }: { label: string; children: React.ReactNode }) { return <label className="block text-sm font-semibold text-primary">{label}{children}</label> }
