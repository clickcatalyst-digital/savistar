// src/app/layout.js

import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Inter, Fraunces } from 'next/font/google'
import Script from "next/script";

const GTAG_ID = process.env.NEXT_PUBLIC_GTAG_ID;

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const fraunces = Fraunces({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://savistar.in'),
  title: {
    default: 'Savistar - Premium Interior Design & Custom Furniture Manufacturing India',
    template: '%s | Savistar'
  },
  description: 'Transform your space with Savistar\'s complete interior design solutions and Saag\'s custom furniture manufacturing. Expert residential and commercial design services across India.',
  keywords: [
    'interior design',
    'custom furniture',
    'furniture manufacturing',
    'residential design',
    'commercial design',
    'home decor',
    'turnkey projects',
    'interior designer india',
    'furniture maker india',
    'gandhinagar interior design',
    'gujarat interior designer',
    'custom furniture manufacturing',
    'handcrafted furniture',
    '3d visualization',
    'space planning',
    'bespoke furniture',
    'luxury interior design',
    'office interior design',
    'home interior design'
  ],
  authors: [{ name: 'Savistar Design Team' }],
  creator: 'Savistar',
  publisher: 'Savistar',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://savistar.in',
    siteName: 'Savistar',
    title: 'Savistar - Premium Interior Design & Custom Furniture Manufacturing',
    description: 'Transform your space with complete interior design solutions and custom furniture manufacturing. 500+ projects delivered across India.',
    images: [
      {
        url: '/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Savistar Interior Design and Custom Furniture Showcase',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@savistar_design',
    title: 'Savistar - Premium Interior Design & Custom Furniture Manufacturing',
    description: 'Transform your space with complete interior design solutions and custom furniture manufacturing.',
    images: ['/images/og-home.jpg'],
  },
  alternates: {
    canonical: 'https://savistar.in',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Savistar',
  url: 'https://savistar.in',
  logo: 'https://savistar.in/images/logo.png',
  description: 'Premium interior design and custom furniture manufacturing company founded by CEPT graduates',
  foundingDate: '2020',
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
    email: 'savistarinterior@gmail.com'
  },
  sameAs: [
    'https://www.facebook.com/savistar.savistar.9',
    'https://www.instagram.com/savistar_interior/',
    'https://www.linkedin.com/company/savistar/'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Design Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Interior Design Services'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service', 
          name: 'Custom Furniture Manufacturing'
        }
      }
    ]
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GTAG_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-white text-gray-900">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}