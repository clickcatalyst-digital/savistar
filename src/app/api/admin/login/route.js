// src/app/api/admin/login/route.js
import { NextResponse } from 'next/server'

export async function POST(req) {
  const { password } = await req.json()
  if (password && password === process.env.ADMIN_PASSWORD) {
    const res = NextResponse.json({ ok: true })
    res.cookies.set('admin_session', process.env.ADMIN_PASSWORD, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 8,
    })
    return res
  }
  return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
}