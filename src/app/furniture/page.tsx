// src/app/furniture/page.jsx

// Import the client component
import FurniturePageClient from '../../components/furniture/FurniturePageClient'; 

// Metadata export lives here, safely on the server.
export const metadata = {
  title: 'Custom Furniture Manufacturing - Saag | Premium Craftsmanship',
  description: 'Custom furniture manufacturing by Saag. Premium materials, expert craftsmanship, and bespoke designs for residential and commercial spaces.',
  keywords: ['custom furniture', 'furniture manufacturing', 'bespoke furniture', 'handcrafted furniture', 'premium furniture', 'furniture design'],
  alternates: {
    canonical: 'https://savistar.in/furniture',
  },
}

// Renders the client component.
export default function HomePage() {
  return <FurniturePageClient />;
}