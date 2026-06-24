// src/app/portfolio/interiors/page.jsx

import InteriorsList from '../../../components/portfolio/InteriorsList'
import { getProjects } from '../../../lib/projects'

export const metadata = {
  title: 'Interior Design Portfolio — Residential & Commercial Case Studies | Savistar',
  description:
    'Browse Savistar interior design case studies — complete homes and commercial spaces across India, designed and delivered end to end with custom furniture by SAAG.',
  keywords: ['interior design portfolio', 'residential interior design', 'commercial interior design', 'interior design case studies', 'savistar interiors'],
  alternates: { canonical: 'https://savistar.in/portfolio/interiors' },
}

export const dynamic = 'force-dynamic'

export default async function InteriorsPage() {
  const projects = await getProjects('interior')

  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: 'Interior Design Case Studies',
        url: 'https://savistar.in/portfolio/interiors',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: projects.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: `https://savistar.in/portfolio/${p.slug}`,
            name: p.title,
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://savistar.in/' },
          { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://savistar.in/portfolio' },
          { '@type': 'ListItem', position: 3, name: 'Interiors', item: 'https://savistar.in/portfolio/interiors' },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <InteriorsList projects={projects} />
    </>
  )
}
