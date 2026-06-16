// src/app/portfolio/layout.js

export const metadata = {
  title: 'Interior Design Portfolio - 500+ Projects by Savistar & Custom Furniture Gallery | Before & After Showcases',
  description: 'Explore our portfolio of 500+ interior design projects and custom furniture pieces by Savistar and Saag. Residential homes, commercial offices, luxury penthouses, and bespoke furniture creations across India. See our award-winning designs and transformation showcases.',
  keywords: [
    'interior design portfolio',
    'custom furniture gallery',
    'interior design projects',
    'before after interior design',
    'residential interior portfolio',
    'commercial interior portfolio',
    'luxury interior design showcase',
    'modern interior design gallery',
    'custom furniture showcase',
    'handcrafted furniture portfolio',
    'interior design inspiration',
    'home interior gallery',
    'office interior showcase',
    'furniture design portfolio',
    'savistar portfolio',
    'saag furniture gallery',
    'interior design examples',
    'design transformation showcase',
    'contemporary interior designs',
    'minimalist interior portfolio',
    'traditional interior designs',
    'scandinavian interior showcase',
    'industrial interior portfolio',
    'luxury penthouse interior',
    'villa interior design showcase',
    'apartment interior gallery',
    'hotel interior design portfolio',
    'restaurant interior showcase',
    'retail interior design gallery',
    'workspace interior portfolio',
    'corporate interior design showcase',
    'award winning interior design',
    'interior design case studies',
    'furniture manufacturing portfolio',
    'custom dining table gallery',
    'bedroom furniture showcase',
    'living room design portfolio',
    'office furniture gallery'
  ],
  authors: [
    { name: 'Savistar Design Team' },
    { name: 'Saag Manufacturing Team' }
  ],
  creator: 'Savistar & Saag',
  publisher: 'Savistar',
  category: 'Portfolio & Gallery',
  classification: 'Design Showcase',
  alternates: {
    canonical: 'https://savistar.in/portfolio',
  },
  openGraph: {
    title: 'Interior Design Portfolio - 500+ Projects & Custom Furniture Gallery by Savistar',
    description: 'Explore 500+ award-winning interior design projects and custom furniture pieces. Residential homes, commercial spaces, and bespoke furniture creations across India.',
    url: 'https://savistar.in/portfolio',
    siteName: 'Savistar',
    images: [
      {
        url: '/images/og-portfolio.jpg',
        width: 1200,
        height: 630,
        alt: 'Savistar interior design portfolio showcase with 500+ projects',
        type: 'image/jpeg',
      },
      {
        url: '/images/portfolio-residential.jpg',
        width: 800,
        height: 600,
        alt: 'Residential interior design portfolio by Savistar',
        type: 'image/jpeg',
      },
      {
        url: '/images/portfolio-commercial.jpg',
        width: 800,
        height: 600,
        alt: 'Commercial interior design portfolio showcase',
        type: 'image/jpeg',
      },
      {
        url: '/images/portfolio-furniture.jpg',
        width: 800,
        height: 600,
        alt: 'Custom furniture portfolio by Saag manufacturing',
        type: 'image/jpeg',
      },
      {
        url: '/images/before-after-showcase.jpg',
        width: 800,
        height: 600,
        alt: 'Before and after interior design transformation showcase',
        type: 'image/jpeg',
      }
    ],
    locale: 'en_IN',
    type: 'website',
    section: 'Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@savistar_design',
    creator: '@savistar_design',
    title: 'Interior Design Portfolio - 500+ Projects by Savistar & Custom Furniture Gallery',
    description: 'Explore award-winning interior design projects and custom furniture pieces. 500+ transformations across residential and commercial spaces.',
    images: {
      url: '/images/og-portfolio.jpg',
      alt: 'Savistar interior design and furniture portfolio showcase'
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    yahoo: 'your-yahoo-verification',
  },
  other: {
    'revisit-after': '5 days',
    'distribution': 'global',
    'rating': 'general',
    'doc-type': 'web',
    'doc-rights': 'copywritten',
    'cache-control': 'public, max-age=2400',
    'content-type': 'portfolio-gallery',
  }
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    '@id': 'https://savistar.in/portfolio/#gallery',
    name: 'Savistar Interior Design Portfolio',
    description: '500+ interior design projects and custom furniture pieces showcase',
    url: 'https://savistar.in/portfolio',
    creator: {
      '@type': 'Organization',
      name: 'Savistar',
      sameAs: [
        'https://www.facebook.com/savistar.savistar.9',
        'https://www.instagram.com/savistar_interior/',
        'https://www.linkedin.com/company/savistar/'
      ]
    },
    associatedMedia: [
      {
        '@type': 'ImageObject',
        name: 'Modern Family Residence',
        description: 'Complete home renovation with custom furniture and space optimization',
        url: 'https://savistar.in/images/portfolio/modern-family-residence.jpg'
      },
      {
        '@type': 'ImageObject',
        name: 'Executive Office Suite',
        description: 'Sophisticated corporate office design with branded elements',
        url: 'https://savistar.in/images/portfolio/executive-office-suite.jpg'
      },
      {
        '@type': 'ImageObject',
        name: 'Handcrafted Dining Collection',
        description: 'Custom walnut dining set with live edge table',
        url: 'https://savistar.in/images/portfolio/dining-collection.jpg'
      },
      {
        '@type': 'ImageObject',
        name: 'Luxury Penthouse',
        description: 'High-end penthouse design with panoramic city views',
        url: 'https://savistar.in/images/portfolio/luxury-penthouse.jpg'
      }
    ],
    numberOfItems: '500+',
    datePublished: '2020-01-01',
    dateModified: new Date().toISOString(),
    inLanguage: 'en-IN'
  },
  {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': 'https://savistar.in/portfolio/#creative-work',
    name: 'Interior Design & Furniture Manufacturing Portfolio',
    description: 'Comprehensive portfolio showcasing residential and commercial interior design projects with custom furniture manufacturing',
    creator: [
      {
        '@type': 'Organization',
        name: 'Savistar Interior Design'
      },
      {
        '@type': 'Organization',
        name: 'Saag Furniture Manufacturing'
      }
    ],
    genre: ['Interior Design', 'Furniture Design', 'Architecture'],
    keywords: [
      'Interior Design Portfolio',
      'Custom Furniture Gallery',
      'Residential Design',
      'Commercial Design',
      'Luxury Interiors',
      'Handcrafted Furniture'
    ],
    datePublished: '2020-01-01',
    dateModified: new Date().toISOString(),
    inLanguage: 'en-IN',
    locationCreated: {
      '@type': 'Place',
      name: 'India',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN'
      }
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://savistar.in/portfolio/#collection',
    name: 'Design Portfolio Collection',
    description: 'Curated collection of interior design projects and custom furniture pieces',
    url: 'https://savistar.in/portfolio',
    mainEntity: {
      '@type': 'ItemList',
      name: 'Portfolio Categories',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Residential Projects',
          description: 'Home interior design transformations'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Commercial Projects',
          description: 'Office and commercial space design'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Custom Furniture',
          description: 'Handcrafted bespoke furniture pieces'
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Luxury Interiors',
          description: 'High-end residential and commercial designs'
        }
      ]
    },
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
          name: 'Portfolio',
          item: 'https://savistar.in/portfolio'
        }
      ]
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://savistar.in/portfolio/#faq',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How many projects has Savistar completed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Savistar has completed over 500 interior design projects across residential and commercial spaces since 2020.'
        }
      },
      {
        '@type': 'Question',
        name: 'What types of projects are shown in the portfolio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our portfolio includes residential homes, commercial offices, luxury penthouses, hotels, restaurants, and custom furniture pieces manufactured by our Saag division.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I see before and after photos of projects?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, our portfolio showcases transformation stories with before and after photos demonstrating our design impact and furniture integration.'
        }
      }
    ]
  }
]

export default function PortfolioLayout({ children }) {
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