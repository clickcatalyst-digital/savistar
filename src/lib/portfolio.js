// src/lib/portfolio.js
// Shared taxonomy + helpers for the portfolio. Edit FURNITURE_CATEGORIES to add/rename types.

export const FURNITURE_CATEGORIES = [
  { slug: 'sofas-seating', label: 'Sofas & Seating' },
  { slug: 'beds', label: 'Beds' },
  { slug: 'wardrobes-storage', label: 'Wardrobes & Storage' },
  { slug: 'dining-tables', label: 'Dining Tables' },
  { slug: 'coffee-side-tables', label: 'Coffee & Side Tables' },
  { slug: 'tv-media-units', label: 'TV & Media Units' },
  { slug: 'kitchen-cabinetry', label: 'Kitchen Cabinetry' },
  { slug: 'study-office', label: 'Study & Office' },
]

export const INTERIOR_CATEGORIES = ['Residential', 'Commercial']

// Slugs that collide with static route segments — never allow them as a project slug.
export const RESERVED_SLUGS = ['interiors', 'furniture']

export function furnitureCategoryBySlug(slug) {
  return FURNITURE_CATEGORIES.find((c) => c.slug === slug) || null
}

export function furnitureCategorySlug(label) {
  const found = FURNITURE_CATEGORIES.find((c) => c.label === label)
  return found ? found.slug : slugifyCategory(label || '')
}

export function slugifyCategory(label) {
  return String(label)
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function slugify(s) {
  return String(s)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

// A clean, unique-ish slug for a project, guarded against reserved segments.
export function makeProjectSlug(title) {
  let base = slugify(title) || 'project'
  if (RESERVED_SLUGS.includes(base)) base = `${base}-project`
  return `${base}-${Date.now().toString().slice(-5)}`
}

// Turn a Cloudinary filename / public_id into a readable title.
export function titleFromFilename(name) {
  if (!name) return 'Untitled'
  const base = name.split('/').pop().replace(/\.[a-z0-9]+$/i, '')
  const cleaned = base.replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim()
  return cleaned.replace(/\b\w/g, (c) => c.toUpperCase()) || 'Untitled'
}
