// src/app/portfolio/page.jsx

import PortfolioHub from '../../components/portfolio/PortfolioHub'
import { getProjects } from '../../lib/projects'

export const metadata = {
  title: 'Portfolio — Interior Design Projects & Custom Furniture by Savistar & SAAG',
  description:
    'Explore Savistar interior design case studies and custom furniture by SAAG. Browse complete homes and offices, and bespoke pieces by type — sofas, beds, wardrobes, tables and more.',
  keywords: ['interior design portfolio', 'custom furniture gallery', 'savistar portfolio', 'saag furniture', 'interior design case studies'],
  alternates: { canonical: 'https://savistar.in/portfolio' },
}

export const dynamic = 'force-dynamic'

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://savistar.in/' },
    { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://savistar.in/portfolio' },
  ],
}

export default async function PortfolioPage() {
  const all = await getProjects()
  const interiors = all.filter((p) => p.type === 'interior')
  const furniture = all.filter((p) => p.type === 'furniture')
  const featured = all.filter((p) => p.featured).slice(0, 8)
  const fallback = featured.length ? featured : all.slice(0, 8)

  const collection = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Savistar & SAAG Portfolio',
    url: 'https://savistar.in/portfolio',
    description: 'Interior design case studies and custom furniture by type.',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collection) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <PortfolioHub interiors={interiors} furniture={furniture} featured={fallback} />
    </>
  )
}
