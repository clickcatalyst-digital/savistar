// src/app/contact/page.tsx

// Import the client component
import ContactPageClient from '../../components/contact/ContactPageClient'; 

// Metadata export lives here, safely on the server.
export const metadata = {
  title: 'Contact Savistar - Get Free Interior Design & Custom Furniture Consultation | Call +91-903-343-4098',
  description: 'Contact Savistar for free interior design consultation and custom furniture quotes in Gandhinagar, Gujarat. Expert design services across India. Call +91-903-343-4098 or email savistarinterior@gmail.com for turnkey projects, 3D visualization, and bespoke furniture solutions.',
  keywords: [
    'contact interior designer',
    'free design consultation',
    'interior design quote',
    'custom furniture quote',
    'interior designer gandhinagar',
    'design consultation booking',
    'furniture manufacturing contact',
    'interior design services contact',
    'home design consultation',
    'office design consultation',
    'furniture design consultation',
    'savistar contact details',
    'interior design company contact',
    'turnkey project consultation',
    '3d visualization consultation',
    'bespoke furniture consultation',
    'residential design consultation',
    'commercial design consultation',
    'design project inquiry',
    'furniture manufacturing inquiry',
    'gandhinagar design services',
    'gujarat interior designer contact'
  ],
  alternates: {
    canonical: 'https://savistar.in/contact',
  },
}

// Renders the client component.
export default function ContactPage() {
  return <ContactPageClient />;
}