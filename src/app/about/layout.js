// src/app/about/layout.js

// export const metadata = {
//   title: 'About Savistar & Saag - Our Story, Mission & Expert Design Team | Founded by CEPT Graduates',
//   description: 'Learn about Savistar interior design and Saag furniture manufacturing. Founded by CEPT graduates Sachi & Haripriya in 2020. 500+ projects delivered with expert craftsmanship, sustainable practices, and integrated design solutions across India.',
//   keywords: [
//     'about savistar',
//     'interior design company history',
//     'furniture manufacturing company',
//     'CEPT university graduates',
//     'design team expertise',
//     'company founders sachi haripriya',
//     'interior design mission',
//     'furniture craftsmanship',
//     'sustainable furniture making',
//     'design company values',
//     'professional interior designers india',
//     'furniture manufacturing process',
//     'gandhinagar interior design company',
//     'integrated design approach',
//     'craft excellence',
//     'human-centered design',
//     'responsible sourcing furniture',
//     'design and manufacturing expertise',
//     'turnkey design solutions',
//     'artisan collaboration',
//     'architectural grade detailing'
//   ],
//   authors: [
//     { name: 'Sachi', role: 'Co-Founder & Creative Director' },
//     { name: 'Haripriya', role: 'Co-Founder & Operations Head' }
//   ],
//   creator: 'Savistar & Saag Design Team',
//   publisher: 'Savistar',
//   category: 'Design & Manufacturing Company',
//   classification: 'About Us',
//   alternates: {
//     canonical: 'https://savistar.in/about',
//   },
//   openGraph: {
//     title: 'About Savistar & Saag - Expert Design Team & Company Story | CEPT Graduates',
//     description: 'Founded by CEPT graduates Sachi & Haripriya in 2020. 500+ projects delivered with sustainable practices, expert craftsmanship, and integrated design-manufacturing solutions across residential and commercial spaces in India.',
//     url: 'https://savistar.in/about',
//     siteName: 'Savistar',
//     images: [
//       {
//         url: '/images/og-about.jpg',
//         width: 1200,
//         height: 630,
//         alt: 'Savistar founders Sachi and Haripriya with design team',
//         type: 'image/jpeg',
//       },
//       {
//         url: '/images/founders-team.jpg',
//         width: 800,
//         height: 600,
//         alt: 'CEPT graduated founders leading Savistar and Saag companies',
//         type: 'image/jpeg',
//       }
//     ],
//     locale: 'en_IN',
//     type: 'website',
//     section: 'About Us',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     site: '@savistar_design',
//     creator: '@savistar_design',
//     title: 'About Savistar & Saag - Expert Design Team Founded by CEPT Graduates',
//     description: 'Founded in 2020 by CEPT graduates. 500+ projects delivered with sustainable practices, expert craftsmanship, and integrated design solutions.',
//     images: {
//       url: '/images/og-about.jpg',
//       alt: 'Savistar founders and expert design team'
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
//   }
// }

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'CreativeOrganization'],
  '@id': 'https://savistar.in/#organization',
  name: 'Savistar',
  alternateName: ['Saag Furniture', 'Savistar Interior Design'],
  url: 'https://savistar.in',
  logo: {
    '@type': 'ImageObject',
    url: 'https://savistar.in/images/logo.png',
    width: 200,
    height: 100
  },
  description: 'Premium interior design and custom furniture manufacturing company founded by CEPT graduates',
  foundingDate: '2020',
  founders: [
    {
      '@type': 'Person',
      name: 'Sachi',
      jobTitle: 'Co-Founder & Creative Director',
      alumniOf: 'CEPT University'
    },
    {
      '@type': 'Person', 
      name: 'Haripriya',
      jobTitle: 'Co-Founder & Operations Head',
      alumniOf: 'CEPT University'
    }
  ],
  numberOfEmployees: '15-20',
  industry: ['Interior Design', 'Furniture Manufacturing'],
  serviceArea: {
    '@type': 'Country',
    name: 'India'
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
  sameAs: [
    'https://www.facebook.com/savistar.savistar.9',
    'https://www.instagram.com/savistar_interior/',
    'https://www.linkedin.com/company/savistar/'
  ],
  award: 'CEPT University Design Excellence',
  knowsAbout: [
    'Interior Design',
    'Custom Furniture Manufacturing',
    'Residential Design',
    'Commercial Design',
    'Sustainable Design Practices'
  ]
}

export default function AboutLayout({ children }) {
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