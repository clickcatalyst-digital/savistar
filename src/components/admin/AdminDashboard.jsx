// src/components/admin/AdminDashboard.jsx
'use client'

import { useState } from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary'

const slugify = (s) =>
  s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const empty = { title: '', type: 'interior', category: '', location: '', year: '', description: '', tags: '' }

export default function AdminDashboard({ projects: initial }) {
  const [projects, setProjects] = useState(initial)
  const [form, setForm] = useState(empty)
  const [cover, setCover] = useState('')
  const [gallery, setGallery] = useState([])
  const [status, setStatus] = useState({ type: 'idle', msg: '' })

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!cover) return setStatus({ type: 'error', msg: 'Please upload a cover image.' })
    setStatus({ type: 'loading', msg: '' })
    const payload = {
      slug: slugify(form.title) + '-' + Date.now().toString().slice(-5),
      type: form.type,
      category: form.category || null,
      title: form.title,
      location: form.location || null,
      year: form.year ? Number(form.year) : null,
      description: form.description || null,
      tags: form.tags ? form.tags.split(',').map((t) => t.trim()).filter(Boolean) : [],
      cover_url: cover,
      images: gallery,
    }
    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error()
      setProjects((p) => [{ ...payload, id: Date.now(), cover, images: gallery }, ...p])
      setForm(empty); setCover(''); setGallery([])
      setStatus({ type: 'success', msg: 'Project added.' })
    } catch {
      setStatus({ type: 'error', msg: 'Failed to add project.' })
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
    <section className="section-padding pt-32">
      <div className="container-custom max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Portfolio Admin</h1>
          <button onClick={logout} className="text-sm text-gray-600 hover:text-gray-900">Log out</button>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 space-y-4 mb-12 border border-gray-100">
          <h2 className="text-lg font-semibold">Add a project</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="title" value={form.title} onChange={onChange} required placeholder="Title *" className="px-4 py-2 border border-gray-300 rounded-lg" />
            <select name="type" value={form.type} onChange={onChange} className="px-4 py-2 border border-gray-300 rounded-lg">
              <option value="interior">Interior</option>
              <option value="furniture">Furniture</option>
            </select>
            <input name="category" value={form.category} onChange={onChange} placeholder="Category (e.g. Living Room)" className="px-4 py-2 border border-gray-300 rounded-lg" />
            <input name="location" value={form.location} onChange={onChange} placeholder="Location" className="px-4 py-2 border border-gray-300 rounded-lg" />
            <input name="year" type="number" value={form.year} onChange={onChange} placeholder="Year" className="px-4 py-2 border border-gray-300 rounded-lg" />
            <input name="tags" value={form.tags} onChange={onChange} placeholder="Tags (comma separated)" className="px-4 py-2 border border-gray-300 rounded-lg" />
          </div>
          <textarea name="description" value={form.description} onChange={onChange} rows={3} placeholder="Short description" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />

          <div className="flex items-center gap-4">
            <CldUploadWidget
              signatureEndpoint="/api/cloudinary/sign"
              options={{ folder: 'savistar-portfolio', multiple: false, sources: ['local', 'url'] }}
              onSuccess={(result) => setCover(result?.info?.public_id || '')}
            >
              {({ open }) => (
                <button type="button" onClick={() => open()} className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm">
                  {cover ? 'Change cover' : 'Upload cover *'}
                </button>
              )}
            </CldUploadWidget>
            {cover && <CldImage src={cover} width={64} height={64} crop="fill" alt="cover preview" className="rounded-lg object-cover" />}
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <CldUploadWidget
              signatureEndpoint="/api/cloudinary/sign"
              options={{ folder: 'savistar-portfolio', multiple: true, sources: ['local', 'url'] }}
              onSuccess={(result) => { const id = result?.info?.public_id; if (id) setGallery((g) => [...g, id]) }}
            >
              {({ open }) => (
                <button type="button" onClick={() => open()} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm">
                  Add gallery images ({gallery.length})
                </button>
              )}
            </CldUploadWidget>
            {gallery.map((g) => <CldImage key={g} src={g} width={48} height={48} crop="fill" alt="" className="rounded object-cover" />)}
          </div>

          {status.type === 'error' && <p className="text-red-600 text-sm">{status.msg}</p>}
          {status.type === 'success' && <p className="text-green-600 text-sm">{status.msg}</p>}
          <button type="submit" disabled={status.type === 'loading'} className="btn-primary disabled:bg-gray-400">
            {status.type === 'loading' ? 'Saving…' : 'Add project'}
          </button>
        </form>

        <h2 className="text-lg font-semibold mb-4">Projects ({projects.length})</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <div key={p.id} className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden">
              <div className="relative aspect-[4/3]">
                {p.cover && <CldImage src={p.cover} fill crop="fill" alt={p.title} className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />}
              </div>
              <div className="p-3 flex items-start justify-between gap-2">
                <div>
                  <p className="font-semibold text-sm">{p.title}</p>
                  <p className="text-xs text-gray-500 capitalize">{p.type}{p.category ? ` · ${p.category}` : ''}</p>
                </div>
                <button onClick={() => handleDelete(p.id)} className="text-red-600 text-xs hover:underline shrink-0">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}