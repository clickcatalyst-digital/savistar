// src/app/portfolio/[slug]/page.jsx

import { notFound } from 'next/navigation'
import { getCldImageUrl } from 'next-cloudinary'
import ProjectDetail from '../../../components/portfolio/ProjectDetail'
import { getProjectBySlug } from '../../../lib/projects'
import { furnitureCategorySlug } from '../../../lib/portfolio'

export const dynamic = 'force-dynamic'

function imgUrl(publicId) {
  return getCldImageUrl({ src: publicId, width: 1600 })
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const p = await getProjectBySlug(slug)
  if (!p) return { title: 'Project not found | Savistar' }
  const desc = p.description || p.body?.slice(0, 155) || `${p.title} by Savistar & SAAG.`
  return {
    title: `${p.title} — ${p.type === 'furniture' ? 'Custom Furniture by SAAG' : 'Interior Design by Savistar'}`,
    description: desc,
    alternates: { canonical: `https://savistar.in/portfolio/${p.slug}` },
    openGraph: {
      title: p.title,
      description: desc,
      url: `https://savistar.in/portfolio/${p.slug}`,
      images: p.cover ? [{ url: imgUrl(p.cover) }] : [],
    },
  }
}

export default async function ProjectPage({ params }) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  if (!project) notFound()

  const isFurniture = project.type === 'furniture'
  const gallery = [project.cover, ...(project.images || [])].filter(Boolean)
  const url = `https://savistar.in/portfolio/${project.slug}`

  const main = isFurniture
    ? {
        '@type': 'Product',
        name: project.title,
        url,
        image: gallery.map(imgUrl),
        category: project.category || 'Custom Furniture',
        brand: { '@type': 'Brand', name: 'SAAG' },
        material: (project.tags || []).join(', ') || undefined,
        description: project.description || project.body || undefined,
      }
    : {
        '@type': 'CreativeWork',
        name: project.title,
        url,
        about: 'Interior Design',
        creator: { '@type': 'Organization', name: 'Savistar', '@id': 'https://savistar.in/#organization' },
        locationCreated: project.location || undefined,
        dateCreated: project.year ? String(project.year) : undefined,
        description: project.description || project.body || undefined,
        image: gallery.map(imgUrl),
        associatedMedia: gallery.map((id, i) => ({
          '@type': 'ImageObject',
          contentUrl: imgUrl(id),
          caption: `${project.title} — ${i + 1}`,
        })),
      }

  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      main,
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://savistar.in/' },
          { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://savistar.in/portfolio' },
          isFurniture
            ? { '@type': 'ListItem', position: 3, name: project.category || 'Furniture', item: `https://savistar.in/portfolio/furniture/${furnitureCategorySlug(project.category)}` }
            : { '@type': 'ListItem', position: 3, name: 'Interiors', item: 'https://savistar.in/portfolio/interiors' },
          { '@type': 'ListItem', position: 4, name: project.title, item: url },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <ProjectDetail project={project} />
    </>
  )
}
