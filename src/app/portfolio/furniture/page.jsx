// src/app/portfolio/furniture/page.jsx

import FurnitureCatalog from '../../../components/portfolio/FurnitureCatalog'
import { getProjects } from '../../../lib/projects'
import { FURNITURE_CATEGORIES } from '../../../lib/portfolio'

export const metadata = {
  title: 'Custom Furniture Portfolio — Sofas, Beds, Wardrobes & More by SAAG',
  description:
    'Browse SAAG custom furniture by type — sofas & seating, beds, wardrobes & storage, dining tables, coffee tables, TV units, kitchen cabinetry and study furniture. Handcrafted in solid wood in India.',
  keywords: ['custom furniture', 'bespoke furniture india', 'custom sofa', 'custom wardrobe', 'custom dining table', 'solid wood furniture', 'saag furniture'],
  alternates: { canonical: 'https://savistar.in/portfolio/furniture' },
}

export const dynamic = 'force-dynamic'

export default async function FurniturePortfolioPage() {
  const furniture = await getProjects('furniture')
  const categories = FURNITURE_CATEGORIES.map((c) => {
    const items = furniture.filter((p) => p.category === c.label)
    return { ...c, count: items.length, cover: items[0]?.cover || null }
  })

  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: 'Custom Furniture by SAAG',
        url: 'https://savistar.in/portfolio/furniture',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: categories.map((c, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: `https://savistar.in/portfolio/furniture/${c.slug}`,
            name: c.label,
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://savistar.in/' },
          { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://savistar.in/portfolio' },
          { '@type': 'ListItem', position: 3, name: 'Furniture', item: 'https://savistar.in/portfolio/furniture' },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <FurnitureCatalog categories={categories} />
    </>
  )
}
