// src/app/about/page.jsx

// Import the client component
import AboutPageClient from '../../components/about/AboutPageClient'; 

// Metadata export lives here, safely on the server.
export const metadata = {
  title: 'About Savistar & Saag - Our Story, Mission & Team',
  description: 'Learn about Savistar interior design and Saag furniture manufacturing. Our story, mission, values, and the expert team behind exceptional design solutions.',
  keywords: ['about savistar', 'interior design company', 'furniture manufacturing', 'design team', 'company history'],
  alternates: {
    canonical: 'https://savistar.in/about',
  },
}

// Renders the client component.
export default function AboutPage() {
  return <AboutPageClient />;
}