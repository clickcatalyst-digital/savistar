// src/app/api/projects/route.js
import { NextResponse } from 'next/server'
import { isAdmin } from '../../../lib/auth'
import { createProject, updateProject, deleteProject, getProject } from '../../../lib/projects'
import { deleteAssets } from '../../../lib/cloudinary'

export async function POST(req) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    const data = await req.json()
    if (!data.title || !data.type || !data.slug || !data.cover_url) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    await createProject(data)
    return NextResponse.json({ ok: true }, { status: 201 })
  } catch (e) {
    console.error('Create project error:', e)
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 })
  }
}

export async function PUT(req) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const id = new URL(req.url).searchParams.get('id')
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })
  try {
    const data = await req.json()
    if (!data.title || !data.type || !data.cover_url) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const existing = await getProject(Number(id))
    await updateProject(Number(id), data)

    if (existing) {
      const oldIds = [existing.cover, ...(existing.images || [])].filter(Boolean)
      const newIds = new Set([data.cover_url, ...(data.images || [])].filter(Boolean))
      const removed = oldIds.filter((pid) => !newIds.has(pid))
      if (removed.length) await deleteAssets(removed)
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('Update project error:', e)
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 })
  }
}

export async function DELETE(req) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const id = new URL(req.url).searchParams.get('id')
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })
  try {
    const project = await getProject(Number(id))
    if (project) await deleteAssets([project.cover, ...(project.images || [])])
    await deleteProject(Number(id))
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('Delete project error:', e)
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 })
  }
}