// src/app/interior/layout.js

// export const metadata = {
//   title: 'Interior Design Services India - Residential & Commercial Design by Savistar | 3D Visualization & Turnkey Projects',
//   description: 'Professional interior design services for residential and commercial spaces by Savistar. Complete turnkey projects, 3D visualization, space planning, and expert consultation. Transform homes, offices, and commercial spaces with CEPT-trained designers across India.',
//   keywords: [
//     'interior design services',
//     'residential interior design',
//     'commercial interior design',
//     'turnkey interior projects',
//     '3d interior visualization',
//     'interior design consultation',
//     'home interior design',
//     'office interior design',
//     'interior designer india',
//     'space planning services',
//     'interior decoration services',
//     'modern interior design',
//     'luxury interior design',
//     'interior design company',
//     'savistar interior design',
//     'contemporary interior design',
//     'minimalist interior design',
//     'traditional interior design',
//     'scandinavian interior design',
//     'industrial interior design',
//     'interior design gandhinagar',
//     'interior designer gujarat',
//     'apartment interior design',
//     'villa interior design',
//     'hotel interior design',
//     'restaurant interior design',
//     'retail interior design',
//     'healthcare interior design',
//     'workspace interior design',
//     'corporate interior design',
//     'color consultation services',
//     'lighting design services',
//     'furniture layout planning',
//     'material selection services',
//     'interior project management',
//     'renovation interior design',
//     'new construction interior design'
//   ],
//   authors: [
//     { name: 'Sachi', role: 'Creative Director & Design Lead' },
//     { name: 'Savistar Design Team' }
//   ],
//   creator: 'Savistar Interior Design',
//   publisher: 'Savistar',
//   category: 'Interior Design Services',
//   classification: 'Design Services',
//   alternates: {
//     canonical: 'https://savistar.in/interior',
//   },
//   openGraph: {
//     title: 'Interior Design Services - Residential & Commercial Design by Savistar',
//     description: 'Professional interior design with 3D visualization and turnkey project management. Transform residential and commercial spaces with CEPT-trained designers.',
//     url: 'https://savistar.in/interior',
//     siteName: 'Savistar',
//     images: [
//       {
//         url: '/images/og-interior.jpg',
//         width: 1200,
//         height: 630,
//         alt: 'Interior design services by Savistar - modern living room design',
//         type: 'image/jpeg',
//       },
//       {
//         url: '/images/residential-interior.jpg',
//         width: 800,
//         height: 600,
//         alt: 'Residential interior design project by Savistar',
//         type: 'image/jpeg',
//       },
//       {
//         url: '/images/commercial-interior.jpg',
//         width: 800,
//         height: 600,
//         alt: 'Commercial office interior design by Savistar',
//         type: 'image/jpeg',
//       },
//       {
//         url: '/images/3d-visualization.jpg',
//         width: 800,
//         height: 600,
//         alt: '3D interior visualization and rendering services',
//         type: 'image/jpeg',
//       }
//     ],
//     locale: 'en_IN',
//     type: 'website',
//     section: 'Services',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     site: '@savistar_design',
//     creator: '@savistar_design',
//     title: 'Interior Design Services by Savistar - Residential & Commercial',
//     description: 'Professional residential and commercial interior design with 3D visualization and turnkey projects. CEPT-trained designers.',
//     images: {
//       url: '/images/og-interior.jpg',
//       alt: 'Professional interior design services by Savistar'
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
//     'service-area': 'India',
//   }
// }

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://savistar.in/interior/#service',
    name: 'Savistar Interior Design Services',
    alternateName: 'Professional Interior Design Company',
    url: 'https://savistar.in/interior',
    logo: 'https://savistar.in/images/logo.png',
    description: 'Professional interior design services for residential and commercial spaces with 3D visualization and turnkey project management',
    provider: {
      '@type': 'Organization',
      name: 'Savistar',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'E-108/2, GIDC Rd, Sector 26',
        addressLocality: 'Gandhinagar',
        addressRegion: 'Gujarat',
        postalCode: '382028',
        addressCountry: 'IN'
      }
    },
    serviceType: 'Interior Design',
    areaServed: {
      '@type': 'Country',
      name: 'India'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Interior Design Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Residential Interior Design',
            description: 'Complete home interior design including living rooms, bedrooms, kitchens, and bathrooms'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Interior Design',
            description: 'Office, retail, restaurant, and workspace interior design services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '3D Visualization',
            description: 'Photorealistic 3D renderings and virtual tours of interior spaces'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Turnkey Projects',
            description: 'Complete project management from concept to completion'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Space Planning',
            description: 'Optimal layout design for maximum functionality and aesthetic appeal'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Color Consultation',
            description: 'Expert color schemes and material selection services'
          }
        }
      ]
    },
    priceRange: '$$$$',
    paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://savistar.in/interior/#webpage',
    url: 'https://savistar.in/interior',
    name: 'Interior Design Services',
    description: 'Professional interior design services for residential and commercial spaces',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://savistar.in'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Interior Design Services',
          item: 'https://savistar.in/interior'
        }
      ]
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Interior Design Services',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Residential Design'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Commercial Design'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: '3D Visualization'
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Turnkey Projects'
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Space Planning'
        },
        {
          '@type': 'ListItem',
          position: 6,
          name: 'Color Consultation'
        }
      ]
    }
  }
]

export default function InteriorLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}