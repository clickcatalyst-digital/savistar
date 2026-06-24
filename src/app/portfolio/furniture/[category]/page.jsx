// src/app/portfolio/furniture/[category]/page.jsx

import { notFound } from 'next/navigation'
import { getCldImageUrl } from 'next-cloudinary'
import FurnitureCategory from '../../../../components/portfolio/FurnitureCategory'
import { getFurnitureByCategory } from '../../../../lib/projects'
import { furnitureCategoryBySlug } from '../../../../lib/portfolio'

export const dynamic = 'force-dynamic'

function imgUrl(publicId) {
  return getCldImageUrl({ src: publicId, width: 1200 })
}

export async function generateMetadata({ params }) {
  const { category } = await params
  const cat = furnitureCategoryBySlug(category)
  if (!cat) return { title: 'Furniture not found | Savistar' }
  return {
    title: `Custom ${cat.label} — Handcrafted Solid-Wood Furniture by SAAG`,
    description: `Bespoke ${cat.label.toLowerCase()} handcrafted in solid wood by SAAG, made to your space and budget. Part of the Savistar custom furniture portfolio.`,
    keywords: [`custom ${cat.label.toLowerCase()}`, `bespoke ${cat.label.toLowerCase()}`, 'saag furniture', 'solid wood furniture india'],
    alternates: { canonical: `https://savistar.in/portfolio/furniture/${cat.slug}` },
  }
}

export default async function FurnitureCategoryPage({ params }) {
  const { category } = await params
  const cat = furnitureCategoryBySlug(category)
  if (!cat) notFound()

  const pieces = await getFurnitureByCategory(cat.label)

  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: `Custom ${cat.label} by SAAG`,
        url: `https://savistar.in/portfolio/furniture/${cat.slug}`,
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: pieces.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
              '@type': 'Product',
              name: p.title,
              url: `https://savistar.in/portfolio/${p.slug}`,
              image: p.cover ? imgUrl(p.cover) : undefined,
              category: cat.label,
              brand: { '@type': 'Brand', name: 'SAAG' },
              material: (p.tags || []).join(', ') || undefined,
            },
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://savistar.in/' },
          { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://savistar.in/portfolio' },
          { '@type': 'ListItem', position: 3, name: 'Furniture', item: 'https://savistar.in/portfolio/furniture' },
          { '@type': 'ListItem', position: 4, name: cat.label, item: `https://savistar.in/portfolio/furniture/${cat.slug}` },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <FurnitureCategory category={cat} pieces={pieces} />
    </>
  )
}
