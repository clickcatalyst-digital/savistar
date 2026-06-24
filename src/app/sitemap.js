// src/app/sitemap.js

import { getProjects } from '../lib/projects'
import { FURNITURE_CATEGORIES } from '../lib/portfolio'

const baseUrl = 'https://savistar.in'

export default async function sitemap() {
  const staticEntries = [
    { url: baseUrl, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/contact`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/about`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/portfolio`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/portfolio/interiors`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/portfolio/furniture`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/furniture`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/interior`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/testimonials`, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, changeFrequency: 'yearly', priority: 0.3 },
  ]

  let dynamicEntries = []
  try {
    const projects = await getProjects()

    const catEntries = FURNITURE_CATEGORIES.filter((c) =>
      projects.some((p) => p.type === 'furniture' && p.category === c.label)
    ).map((c) => ({ url: `${baseUrl}/portfolio/furniture/${c.slug}`, changeFrequency: 'monthly', priority: 0.6 }))

    const projectEntries = projects.map((p) => ({
      url: `${baseUrl}/portfolio/${p.slug}`,
      changeFrequency: 'monthly',
      priority: 0.6,
    }))

    dynamicEntries = [...catEntries, ...projectEntries]
  } catch (e) {
    console.error('sitemap: failed to load projects', e?.message)
  }

  const now = new Date()
  return [...staticEntries, ...dynamicEntries].map((e) => ({ lastModified: now, ...e }))
}
