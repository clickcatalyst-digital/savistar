// src/components/admin/AdminDashboard.jsx
'use client'

import { useState } from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary'
import { FURNITURE_CATEGORIES, INTERIOR_CATEGORIES, makeProjectSlug } from '../../lib/portfolio'

const empty = { title: '', type: 'interior', category: '', location: '', year: '', description: '', body: '', tags: '' }

const inputCls = 'px-4 py-2 rounded-lg bg-gray-900/60 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-DEFAULT)]/60 focus:border-transparent transition'

export default function AdminDashboard({ projects: initial }) {
  const [projects, setProjects] = useState(initial)
  const [form, setForm] = useState(empty)
  const [cover, setCover] = useState('')
  const [gallery, setGallery] = useState([])
  const [status, setStatus] = useState({ type: 'idle', msg: '' })
  const [editingId, setEditingId] = useState(null)

  // Bulk furniture uploader
  const [bulkCat, setBulkCat] = useState(FURNITURE_CATEGORIES[0].label)
  const [bulkItems, setBulkItems] = useState([])
  const [bulkStatus, setBulkStatus] = useState({ type: 'idle', msg: '' })

  const handleBulkCreate = async () => {
    if (bulkItems.length === 0) return
    setBulkStatus({ type: 'loading', msg: '' })
    try {
      const res = await fetch('/api/projects/bulk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'furniture', category: bulkCat, items: bulkItems }),
      })
      if (!res.ok) throw new Error()
      const data = await res.json()
      setBulkStatus({ type: 'success', msg: `Created ${data.created} pieces — refreshing…` })
      setBulkItems([])
      setTimeout(() => window.location.reload(), 900)
    } catch {
      setBulkStatus({ type: 'error', msg: 'Bulk create failed.' })
    }
  }

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const resetForm = () => {
    setForm(empty); setCover(''); setGallery([]); setEditingId(null)
  }

  const handleEdit = (p) => {
    setForm({
      title: p.title || '',
      type: p.type || 'interior',
      category: p.category || '',
      location: p.location || '',
      year: p.year ? String(p.year) : '',
      description: p.description || '',
      body: p.body || '',
      tags: (p.tags || []).join(', '),
    })
    setCover(p.cover || '')
    setGallery(p.images || [])
    setEditingId(p.id)
    setStatus({ type: 'idle', msg: '' })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!cover) return setStatus({ type: 'error', msg: 'Please upload a cover image.' })
    setStatus({ type: 'loading', msg: '' })
    const base = {
      type: form.type,
      category: form.category || null,
      title: form.title,
      location: form.location || null,
      year: form.year ? Number(form.year) : null,
      description: form.description || null,
      body: form.body || '',
      tags: form.tags ? form.tags.split(',').map((t) => t.trim()).filter(Boolean) : [],
      cover_url: cover,
      images: gallery,
    }
    try {
      if (editingId) {
        const res = await fetch(`/api/projects?id=${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(base),
        })
        if (!res.ok) throw new Error()
        setProjects((p) => p.map((x) => (x.id === editingId ? { ...x, ...base, cover, images: gallery } : x)))
        setStatus({ type: 'success', msg: 'Project updated.' })
      } else {
        const payload = { ...base, slug: makeProjectSlug(form.title) }
        const res = await fetch('/api/projects', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
        if (!res.ok) throw new Error()
        setProjects((p) => [{ ...payload, id: Date.now(), cover, images: gallery }, ...p])
        setStatus({ type: 'success', msg: 'Project added.' })
      }
      resetForm()
    } catch {
      setStatus({ type: 'error', msg: editingId ? 'Failed to update project.' : 'Failed to add project.' })
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this project?')) return
    try {
      const res = await fetch(`/api/projects?id=${id}`, { method: 'DELETE' })
      if (!res.ok) throw new Error()
      setProjects((p) => p.filter((x) => x.id !== id))
    } catch {
      alert('Failed to delete.')
    }
  }

  const logout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    window.location.reload()
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-[var(--color-primary-gradient-end)] text-gray-100 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary-DEFAULT)]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container-custom max-w-4xl py-12 pt-28">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-[var(--color-accent-DEFAULT)] tracking-[0.3em] text-xs uppercase mb-1">Savistar</p>
            <h1 className="text-2xl font-bold text-white">Portfolio Admin</h1>
          </div>
          <button onClick={logout} className="text-sm text-gray-400 hover:text-white transition-colors">Log out</button>
        </div>

        {/* How to use */}
        <details className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-8 text-sm text-gray-300" open>
          <summary className="cursor-pointer font-semibold text-white text-base list-none flex items-center gap-2">
            <span className="text-[var(--color-accent-DEFAULT)]">?</span> How to use this page
          </summary>
          <div className="mt-4 space-y-4 leading-relaxed">
            <div>
              <p className="font-medium text-white">Add one project (interior or furniture)</p>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-gray-400">
                <li>Type a <span className="text-gray-200">Title</span>, choose <span className="text-gray-200">Interior</span> or <span className="text-gray-200">Furniture</span>, then pick a <span className="text-gray-200">Category</span> from the dropdown.</li>
                <li>Upload a <span className="text-gray-200">cover image</span> (required) — this is the main photo shown on cards.</li>
                <li>Add <span className="text-gray-200">gallery images</span> for more photos (hover a thumbnail and click × to remove one).</li>
                <li>Click <span className="text-gray-200">Add project</span>. It appears in the list below and goes live on the site.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-white">For interiors (case studies)</p>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-gray-400">
                <li>Write a few lines in <span className="text-gray-200">Full story</span> (the brief, what you did) — this is what gets its own page and helps Google.</li>
                <li>Fill <span className="text-gray-200">Location</span> and <span className="text-gray-200">Year</span>, and add room photos to the gallery.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-white">For lots of furniture → use “Bulk add furniture”</p>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-gray-400">
                <li>Pick the furniture type, click <span className="text-gray-200">Upload photos</span>, and select many at once.</li>
                <li>Click <span className="text-gray-200">Create N pieces</span> — each photo becomes its own piece.</li>
                <li>Then come back and <span className="text-gray-200">Edit</span> any piece to add its name, material tags, and extra photos.</li>
              </ul>
            </div>
            <p className="text-gray-500">Good to know: images must be JPG or PNG (auto-served fast as WebP). Use <span className="text-gray-300">Edit</span> / <span className="text-gray-300">Delete</span> on any card below. Tags = materials or style (comma separated), e.g. “Solid walnut, Fabric”.</p>
          </div>
        </details>

        {/* Add form */}
        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-4 mb-12 shadow-2xl">
          <h2 className="text-lg font-semibold text-white">{editingId ? 'Edit project' : 'Add a project'}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="title" value={form.title} onChange={onChange} required placeholder="Title *" className={inputCls} />
            <select name="type" value={form.type} onChange={onChange} className={inputCls}>
              <option value="interior">Interior</option>
              <option value="furniture">Furniture</option>
            </select>
            <select name="category" value={form.category} onChange={onChange} className={inputCls}>
              <option value="">{form.type === 'furniture' ? 'Furniture type…' : 'Category…'}</option>
              {(form.type === 'furniture' ? FURNITURE_CATEGORIES.map((c) => c.label) : INTERIOR_CATEGORIES).map((label) => (
                <option key={label} value={label}>{label}</option>
              ))}
            </select>
            <input name="location" value={form.location} onChange={onChange} placeholder="Location" className={inputCls} />
            <input name="year" type="number" value={form.year} onChange={onChange} placeholder="Year" className={inputCls} />
            <input name="tags" value={form.tags} onChange={onChange} placeholder="Tags (comma separated)" className={inputCls} />
          </div>
          <textarea name="description" value={form.description} onChange={onChange} rows={2} placeholder="Short description (shown on the card)" className={`${inputCls} w-full`} />
          <textarea name="body" value={form.body} onChange={onChange} rows={6} placeholder="Full story / details (shown when the project is opened) — leave a blank line between paragraphs" className={`${inputCls} w-full`} />

          <div className="flex items-center gap-4">
            <CldUploadWidget
              signatureEndpoint="/api/cloudinary/sign"
              options={{ folder: 'savistar-portfolio', multiple: false, sources: ['local', 'url'], clientAllowedFormats: ['png', 'jpg', 'jpeg'], maxFileSize: 10000000 }}
              onSuccess={(result) => setCover(result?.info?.public_id || '')}
            >
              {({ open }) => (
                <button type="button" onClick={() => open()} className="px-4 py-2 rounded-lg text-sm font-medium bg-[var(--color-primary-DEFAULT)] text-white hover:bg-[var(--color-primary-dark)] transition-colors">
                  {cover ? 'Change cover' : 'Upload cover *'}
                </button>
              )}
            </CldUploadWidget>
            {cover && <CldImage src={cover} width={64} height={64} crop="fill" alt="cover preview" className="rounded-lg object-cover ring-1 ring-white/10" />}
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <CldUploadWidget
              signatureEndpoint="/api/cloudinary/sign"
              options={{ folder: 'savistar-portfolio', multiple: true, sources: ['local', 'url'], clientAllowedFormats: ['png', 'jpg', 'jpeg'], maxFileSize: 10000000 }}
              onSuccess={(result) => { const id = result?.info?.public_id; if (id) setGallery((g) => [...g, id]) }}
            >
              {({ open }) => (
                <button type="button" onClick={() => open()} className="px-4 py-2 rounded-lg text-sm font-medium bg-white/10 text-gray-100 hover:bg-white/20 transition-colors">
                  Add gallery images ({gallery.length})
                </button>
              )}
            </CldUploadWidget>
            {gallery.map((g) => (
              <div key={g} className="relative group">
                <CldImage src={g} width={48} height={48} crop="fill" alt="" className="rounded object-cover ring-1 ring-white/10" />
                <button
                  type="button"
                  onClick={() => setGallery((arr) => arr.filter((x) => x !== g))}
                  aria-label="Remove image"
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-red-500 text-white text-xs leading-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {status.type === 'error' && <p className="text-red-400 text-sm">{status.msg}</p>}
          {status.type === 'success' && <p className="text-emerald-400 text-sm">{status.msg}</p>}
          <div className="flex items-center gap-3">
            <button type="submit" disabled={status.type === 'loading'} className="px-5 py-2.5 rounded-lg font-semibold text-white bg-[var(--color-accent-DEFAULT)] hover:bg-[var(--color-accent-dark)] transition-colors disabled:bg-gray-700">
              {status.type === 'loading' ? 'Saving…' : (editingId ? 'Save changes' : 'Add project')}
            </button>
            {editingId && (
              <button type="button" onClick={resetForm} className="px-5 py-2.5 rounded-lg font-medium text-gray-300 hover:text-white border border-white/10 hover:bg-white/5 transition-colors">
                Cancel
              </button>
            )}
          </div>
        </form>

        {/* Bulk furniture uploader */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-4 mb-12 shadow-2xl">
          <div>
            <h2 className="text-lg font-semibold text-white">Bulk add furniture</h2>
            <p className="text-sm text-gray-400">Pick a type, drop many photos — each becomes a piece you can refine later.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <select value={bulkCat} onChange={(e) => setBulkCat(e.target.value)} className={inputCls}>
              {FURNITURE_CATEGORIES.map((c) => (
                <option key={c.slug} value={c.label}>{c.label}</option>
              ))}
            </select>
            <CldUploadWidget
              signatureEndpoint="/api/cloudinary/sign"
              options={{ folder: 'savistar-portfolio', multiple: true, sources: ['local', 'url'], clientAllowedFormats: ['png', 'jpg', 'jpeg'], maxFileSize: 10000000 }}
              onSuccess={(result) => {
                const info = result?.info
                if (info?.public_id) setBulkItems((arr) => [...arr, { public_id: info.public_id, filename: info.original_filename }])
              }}
            >
              {({ open }) => (
                <button type="button" onClick={() => open()} className="px-4 py-2 rounded-lg text-sm font-medium bg-white/10 text-gray-100 hover:bg-white/20 transition-colors">
                  Upload photos ({bulkItems.length})
                </button>
              )}
            </CldUploadWidget>
            <button
              type="button"
              onClick={handleBulkCreate}
              disabled={bulkItems.length === 0 || bulkStatus.type === 'loading'}
              className="px-5 py-2 rounded-lg font-semibold text-white bg-[var(--color-accent-DEFAULT)] hover:opacity-90 transition disabled:bg-gray-700 disabled:opacity-100"
            >
              {bulkStatus.type === 'loading' ? 'Creating…' : `Create ${bulkItems.length} piece${bulkItems.length === 1 ? '' : 's'}`}
            </button>
            {bulkItems.length > 0 && (
              <button type="button" onClick={() => setBulkItems([])} className="text-sm text-gray-400 hover:text-white">Clear</button>
            )}
          </div>
          {bulkItems.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {bulkItems.map((it) => (
                <CldImage key={it.public_id} src={it.public_id} width={48} height={48} crop="fill" alt="" className="rounded object-cover ring-1 ring-white/10" />
              ))}
            </div>
          )}
          {bulkStatus.type === 'error' && <p className="text-red-400 text-sm">{bulkStatus.msg}</p>}
          {bulkStatus.type === 'success' && <p className="text-emerald-400 text-sm">{bulkStatus.msg}</p>}
        </div>

        <h2 className="text-lg font-semibold text-white mb-4">Projects ({projects.length})</h2>
        {projects.length === 0 && <p className="text-gray-400 text-sm">No projects yet — add your first one above.</p>}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <div key={p.id} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <div className="relative aspect-[4/3] bg-gray-800">
                {p.cover && <CldImage src={p.cover} fill crop="fill" alt={p.title} className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />}
              </div>
              <div className="p-3 flex items-start justify-between gap-2">
                <div>
                  <p className="font-semibold text-sm text-white">{p.title}</p>
                  <p className="text-xs text-gray-400 capitalize">{p.type}{p.category ? ` · ${p.category}` : ''}</p>
                </div>
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <button onClick={() => handleEdit(p)} className="text-[var(--color-accent-DEFAULT)] text-xs hover:text-white">Edit</button>
                  <button onClick={() => handleDelete(p.id)} className="text-red-400 text-xs hover:text-red-300">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}