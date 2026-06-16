// src/app/portfolio/page.jsx

// Import the client component
import PortfolioPageClient from '../../components/portfolio/PortfolioPageClient'; 

// Metadata export lives here, safely on the server.
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
  alternates: {
    canonical: 'https://savistar.in/portfolio',
  },
}

// Renders the client component.
export default function PortfolioPage() {
  return <PortfolioPageClient />;
}