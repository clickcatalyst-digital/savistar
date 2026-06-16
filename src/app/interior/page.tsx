// src/app/interior/page.jsx

// Import the client component
import InteriorPageClient from '../../components/interior/InteriorPageClient'; 

// Metadata export lives here, safely on the server.
export const metadata = {
  title: 'Interior Design Services - Transform Your Space | Savistar',
  description: 'Professional interior design services for residential and commercial spaces. Expert Turnkey Projects, 3D visualization, and complete Expert Consultation by Savistar.',
  keywords: ['interior design', 'Turnkey Projects', '3D visualization', 'residential design', 'commercial design', 'interior designer'],
  alternates: {
    canonical: 'https://savistar.in/interior',
  },
}

// Renders the client component.
export default function InteriorPage() {
  return <InteriorPageClient />;
}