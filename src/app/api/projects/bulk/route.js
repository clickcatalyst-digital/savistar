// src/app/api/projects/bulk/route.js
import { NextResponse } from 'next/server'
import { isAdmin } from '../../../../lib/auth'
import { createProjectsBulk } from '../../../../lib/projects'
import { makeProjectSlug, titleFromFilename } from '../../../../lib/portfolio'

// Body: { type, category, items: [{ public_id, filename }] }
// Creates one lightweight piece per uploaded image.
export async function POST(req) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    const { type, category, items } = await req.json()
    if (!type || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: 'Missing type or items' }, { status: 400 })
    }

    const list = items
      .filter((it) => it && it.public_id)
      .map((it, i) => {
        const title = titleFromFilename(it.filename || it.public_id) || `Piece ${i + 1}`
        return {
          slug: makeProjectSlug(title) + '-' + i,
          type,
          category: category || null,
          title,
          location: null,
          year: null,
          description: null,
          body: null,
          tags: [],
          cover_url: it.public_id,
          images: [],
        }
      })

    if (list.length === 0) {
      return NextResponse.json({ error: 'No valid images' }, { status: 400 })
    }

    await createProjectsBulk(list)
    return NextResponse.json({ ok: true, created: list.length }, { status: 201 })
  } catch (e) {
    console.error('Bulk create error:', e)
    return NextResponse.json({ error: 'Failed to bulk create' }, { status: 500 })
  }
}
