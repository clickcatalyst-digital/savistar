// src/app/contact/layout.js

// export const metadata = {
//   title: 'Contact Savistar - Get Free Interior Design & Custom Furniture Consultation | Call +91-903-343-4098',
//   description: 'Contact Savistar for free interior design consultation and custom furniture quotes in Gandhinagar, Gujarat. Expert design services across India. Call +91-903-343-4098 or email savistarinterior@gmail.com for turnkey projects, 3D visualization, and bespoke furniture solutions.',
//   keywords: [
//     'contact interior designer',
//     'free design consultation',
//     'interior design quote',
//     'custom furniture quote',
//     'interior designer gandhinagar',
//     'design consultation booking',
//     'furniture manufacturing contact',
//     'interior design services contact',
//     'home design consultation',
//     'office design consultation',
//     'furniture design consultation',
//     'savistar contact details',
//     'interior design company contact',
//     'turnkey project consultation',
//     '3d visualization consultation',
//     'bespoke furniture consultation',
//     'residential design consultation',
//     'commercial design consultation',
//     'design project inquiry',
//     'furniture manufacturing inquiry',
//     'gandhinagar design services',
//     'gujarat interior designer contact'
//   ],
//   authors: [{ name: 'Savistar Customer Service Team' }],
//   creator: 'Savistar',
//   publisher: 'Savistar',
//   category: 'Contact & Consultation',
//   classification: 'Contact Information',
//   alternates: {
//     canonical: 'https://savistar.in/contact',
//   },
//   openGraph: {
//     title: 'Contact Savistar - Free Interior Design & Custom Furniture Consultation',
//     description: 'Get expert interior design consultation and custom furniture quotes. Located in Gandhinagar, Gujarat with nationwide delivery. Call +91-903-343-4098 for free consultation.',
//     url: 'https://savistar.in/contact',
//     siteName: 'Savistar',
//     images: [
//       {
//         url: '/images/og-contact.jpg',
//         width: 1200,
//         height: 630,
//         alt: 'Contact Savistar for interior design consultation in Gandhinagar',
//         type: 'image/jpeg',
//       },
//       {
//         url: '/images/office-location.jpg',
//         width: 800,
//         height: 600,
//         alt: 'Savistar office location in GIDC Gandhinagar',
//         type: 'image/jpeg',
//       }
//     ],
//     locale: 'en_IN',
//     type: 'website',
//     section: 'Contact',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     site: '@savistar_design',
//     creator: '@savistar_design',
//     title: 'Contact Savistar - Free Interior Design & Furniture Consultation',
//     description: 'Get expert interior design consultation and custom furniture quotes in Gandhinagar, Gujarat with nationwide delivery.',
//     images: {
//       url: '/images/og-contact.jpg',
//       alt: 'Contact Savistar for professional design consultation'
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
//     'revisit-after': '3 days',
//     'distribution': 'global',
//     'rating': 'general',
//     'doc-type': 'web',
//     'doc-rights': 'copywritten',
//     'cache-control': 'public, max-age=1800',
//     'contact-info': 'https://savistar.in/contact',
//   }
// }

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://savistar.in/contact',
  name: 'Contact Savistar',
  description: 'Contact Savistar for interior design and custom furniture consultation',
  url: 'https://savistar.in/contact',
  mainEntity: {
    '@type': 'Organization',
    name: 'Savistar',
    url: 'https://savistar.in',
    logo: 'https://savistar.in/images/logo.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'E-108/2, GIDC Rd, Sector 26',
      addressLocality: 'Gandhinagar',
      addressRegion: 'Gujarat',
      postalCode: '382028',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 23.2156,
      longitude: 72.6369
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-903-343-4098',
        contactType: 'customer service',
        availableLanguage: ['English', 'Hindi', 'Gujarati'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00'
        }
      },
      {
        '@type': 'ContactPoint',
        email: 'savistarinterior@gmail.com',
        contactType: 'customer service',
        availableLanguage: ['English', 'Hindi', 'Gujarati']
      }
    ],
    openingHours: [
      'Mo-Fr 09:00-18:00',
      'Sa 10:00-16:00'
    ],
    priceRange: '$$$$',
    paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer', 'Check'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Interior Design & Furniture Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Free Design Consultation',
            description: 'Complimentary interior design consultation'
          }
        },
        {
          '@type': 'Offer', 
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Furniture Quote',
            description: 'Free quote for bespoke furniture manufacturing'
          }
        }
      ]
    }
  }
}

export default function ContactLayout({ children }) {
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