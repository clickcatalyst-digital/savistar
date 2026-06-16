// src/app/admin/page.jsx
import { isAdmin } from '../../lib/auth'
import { getProjects } from '../../lib/projects'
import AdminLogin from '../../components/admin/AdminLogin'
import AdminDashboard from '../../components/admin/AdminDashboard'

export const dynamic = 'force-dynamic'
export const metadata = { title: 'Admin', robots: { index: false, follow: false } }

export default async function AdminPage() {
  if (!(await isAdmin())) return <AdminLogin />
  const projects = await getProjects()
  return <AdminDashboard projects={projects} />
}