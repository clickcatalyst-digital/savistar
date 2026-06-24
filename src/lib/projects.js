// src/lib/projects.js
import { turso } from './turso'

function normalize(r) {
  return {
    id: Number(r.id),
    slug: r.slug,
    type: r.type,
    category: r.category,
    title: r.title,
    location: r.location,
    year: r.year ? Number(r.year) : null,
    description: r.description,
    body: r.body ?? null,
    tags: r.tags ? JSON.parse(r.tags) : [],
    cover: r.cover_url,
    images: r.images ? JSON.parse(r.images) : [],
    featured: !!r.featured,
  }
}

export async function getProjects(type) {
  const sql = type
    ? 'SELECT * FROM projects WHERE type = ? ORDER BY sort_order ASC, created_at DESC'
    : 'SELECT * FROM projects ORDER BY sort_order ASC, created_at DESC'
  const args = type ? [type] : []
  const { rows } = await turso.execute({ sql, args })
  return rows.map(normalize)
}

export async function getProjectBySlug(slug) {
  const { rows } = await turso.execute({
    sql: 'SELECT * FROM projects WHERE slug = ? LIMIT 1',
    args: [slug],
  })
  return rows.length ? normalize(rows[0]) : null
}

export async function getFurnitureByCategory(label) {
  const { rows } = await turso.execute({
    sql: "SELECT * FROM projects WHERE type = 'furniture' AND category = ? ORDER BY sort_order ASC, created_at DESC",
    args: [label],
  })
  return rows.map(normalize)
}

export async function createProject(d) {
  await turso.execute({
    sql: `INSERT INTO projects (slug, type, category, title, location, year, description, body, tags, cover_url, images)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    args: [
      d.slug, d.type, d.category ?? null, d.title, d.location ?? null,
      d.year ?? null, d.description ?? null, d.body ?? null,
      JSON.stringify(d.tags ?? []), d.cover_url, JSON.stringify(d.images ?? []),
    ],
  })
}

// Insert many lightweight pieces in one batch (used by the bulk uploader).
export async function createProjectsBulk(list) {
  const stmts = list.map((d) => ({
    sql: `INSERT INTO projects (slug, type, category, title, location, year, description, body, tags, cover_url, images)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    args: [
      d.slug, d.type, d.category ?? null, d.title, d.location ?? null,
      d.year ?? null, d.description ?? null, d.body ?? null,
      JSON.stringify(d.tags ?? []), d.cover_url, JSON.stringify(d.images ?? []),
    ],
  }))
  await turso.batch(stmts, 'write')
}

export async function deleteProject(id) {
  await turso.execute({ sql: 'DELETE FROM projects WHERE id = ?', args: [id] })
}

export async function getProject(id) {
  const { rows } = await turso.execute({ sql: 'SELECT * FROM projects WHERE id = ?', args: [id] })
  return rows.length ? normalize(rows[0]) : null
}

export async function updateProject(id, d) {
  await turso.execute({
    sql: `UPDATE projects SET type = ?, category = ?, title = ?, location = ?, year = ?, description = ?, body = ?, tags = ?, cover_url = ?, images = ?
          WHERE id = ?`,
    args: [
      d.type, d.category ?? null, d.title, d.location ?? null,
      d.year ?? null, d.description ?? null, d.body ?? null,
      JSON.stringify(d.tags ?? []), d.cover_url, JSON.stringify(d.images ?? []),
      id,
    ],
  })
}