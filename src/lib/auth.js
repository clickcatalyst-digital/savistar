// src/lib/auth.js
import { cookies } from 'next/headers'

export async function isAdmin() {
  const store = await cookies()
  const token = store.get('admin_session')?.value
  return !!token && token === process.env.ADMIN_PASSWORD
}