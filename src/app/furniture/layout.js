// src/app/furniture/layout.js

// export const metadata = {
//   title: 'Custom Furniture Manufacturing by Saag - Premium Handcrafted Furniture India | Solid Wood, Bespoke Design',
//   description: 'Custom furniture manufacturing by Saag - Premium handcrafted furniture using solid hardwoods, expert craftsmanship, and bespoke designs. Custom dining tables, bedroom furniture, office furniture manufactured in Gandhinagar with nationwide delivery across India.',
//   keywords: [
//     'custom furniture manufacturing',
//     'bespoke furniture maker',
//     'handcrafted furniture india',
//     'premium furniture manufacturing',
//     'solid wood furniture',
//     'custom dining tables',
//     'custom bedroom furniture',
//     'office furniture manufacturing',
//     'furniture maker gandhinagar',
//     'wooden furniture manufacturer',
//     'custom furniture design',
//     'artisan furniture maker',
//     'luxury furniture manufacturing',
//     'furniture manufacturing company',
//     'saag furniture',
//     'custom sofa manufacturing',
//     'handmade furniture india',
//     'bespoke dining room furniture',
//     'custom living room furniture',
//     'executive furniture manufacturing',
//     'traditional joinery',
//     'modern furniture manufacturing',
//     'sustainable furniture making',
//     'cnc furniture manufacturing',
//     '3d furniture modeling',
//     'hardwood furniture maker',
//     'teak furniture manufacturing',
//     'oak furniture custom',
//     'walnut furniture bespoke',
//     'maple furniture handcrafted',
//     'cherry wood furniture custom'
//   ],
//   authors: [
//     { name: 'Saag Manufacturing Team' },
//     { name: 'Master Craftsmen' }
//   ],
//   creator: 'Saag Furniture Manufacturing',
//   publisher: 'Savistar',
//   category: 'Custom Furniture Manufacturing',
//   classification: 'Manufacturing Services',
//   alternates: {
//     canonical: 'https://savistar.in/furniture',
//   },
//   openGraph: {
//     title: 'Custom Furniture Manufacturing by Saag - Premium Handcrafted Furniture India',
//     description: 'Expert craftsmanship meets premium materials. Custom furniture manufacturing with traditional techniques and modern precision. Solid hardwood furniture made in India.',
//     url: 'https://savistar.in/furniture',
//     siteName: 'Savistar',
//     images: [
//       {
//         url: '/images/og-furniture.jpg',
//         width: 1200,
//         height: 630,
//         alt: 'Custom handcrafted furniture manufacturing by Saag',
//         type: 'image/jpeg',
//       },
//       {
//         url: '/images/furniture-workshop.jpg',
//         width: 800,
//         height: 600,
//         alt: 'Saag furniture manufacturing workshop with traditional craftsmanship',
//         type: 'image/jpeg',
//       },
//       {
//         url: '/images/custom-dining-table.jpg',
//         width: 800,
//         height: 600,
//         alt: 'Custom solid wood dining table manufactured by Saag',
//         type: 'image/jpeg',
//       }
//     ],
//     locale: 'en_IN',
//     type: 'website',
//     section: 'Manufacturing',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     site: '@savistar_design',
//     creator: '@saag_furniture',
//     title: 'Custom Furniture Manufacturing by Saag - Premium Handcrafted Furniture',
//     description: 'Premium handcrafted furniture with expert craftsmanship and sustainable materials. Custom furniture manufacturing in India.',
//     images: {
//       url: '/images/og-furniture.jpg',
//       alt: 'Custom handcrafted furniture by Saag manufacturing'
//     },
//   },
//   robots: {
//     index: true,
//     follow: true,
//     nocache: false,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
//   verification: {
//     google: 'your-google-site-verification',
//     yandex: 'your-yandex-verification',
//     yahoo: 'your-yahoo-verification',
//   },
//   other: {
//     'revisit-after': '7 days',
//     'distribution': 'global',
//     'rating': 'general',
//     'doc-type': 'web',
//     'doc-rights': 'copywritten',
//     'cache-control': 'public, max-age=3600',
//     'manufacturing-location': 'Gandhinagar, Gujarat, India',
//   }
// }

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'ManufacturingOrganization',
    '@id': 'https://savistar.in/furniture/#manufacturer',
    name: 'Saag Furniture Manufacturing',
    alternateName: 'Saag Custom Furniture',
    url: 'https://savistar.in/furniture',
    logo: 'https://savistar.in/images/saag.webp',
    description: 'Premium custom furniture manufacturing with traditional craftsmanship and modern precision',
    foundingDate: '2023',
    parentOrganization: {
      '@type': 'Organization',
      name: 'Savistar'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'E-108/2, GIDC Rd, Sector 26',
      addressLocality: 'Gandhinagar',
      addressRegion: 'Gujarat',
      postalCode: '382028',
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-903-343-4098',
      contactType: 'customer service',
      availableLanguage: ['English', 'Hindi', 'Gujarati']
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Custom Furniture Manufacturing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Custom Dining Tables',
            category: 'Furniture',
            material: ['Solid Wood', 'Hardwood', 'Teak', 'Oak', 'Walnut']
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Custom Bedroom Furniture',
            category: 'Furniture',
            material: ['Solid Wood', 'Premium Hardware']
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Office Furniture',
            category: 'Furniture',
            material: ['Hardwood', 'Metal', 'Premium Finishes']
          }
        }
      ]
    },
    makesOffer: {
      '@type': 'Offer',
      name: 'Custom Furniture Manufacturing',
      description: 'Bespoke furniture manufacturing with premium materials and expert craftsmanship',
      seller: {
        '@type': 'Organization',
        name: 'Saag Furniture'
      }
    },
    serviceArea: {
      '@type': 'Country',
      name: 'India'
    },
    knowsAbout: [
      'Custom Furniture Manufacturing',
      'Traditional Joinery',
      'Hardwood Working',
      'CNC Machining',
      '3D Furniture Modeling',
      'Quality Control',
      'Sustainable Practices'
    ]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://savistar.in/furniture/#service',
    name: 'Custom Furniture Manufacturing Service',
    description: 'Bespoke furniture manufacturing with premium materials, expert craftsmanship, and personalized design',
    provider: {
      '@type': 'Organization',
      name: 'Saag Furniture Manufacturing'
    },
    areaServed: {
      '@type': 'Country',
      name: 'India'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Furniture Categories',
      itemListElement: [
        'Living Room Furniture',
        'Dining Room Furniture',
        'Bedroom Furniture',
        'Office Furniture',
        'Custom Storage Solutions',
        'Bespoke Furniture Design'
      ]
    }
  }
]

export default function FurnitureLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://savistar.in/' },
            { '@type': 'ListItem', position: 2, name: 'Furniture', item: 'https://savistar.in/furniture' },
          ],
        }) }}
      />
      {children}
    </>
  )
}