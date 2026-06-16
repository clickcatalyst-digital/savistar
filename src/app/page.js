// src/app/page.js

// Import the client component
import HomePageClient from '../components/home/HomePageClient'; 

// Metadata export lives here, safely on the server.
export const metadata = {
  title: 'Savistar - Premium Interior Design & Custom Furniture Manufacturing',
  description: 'Transform your space with Savistar’s complete interior design solutions and Saag’s custom furniture manufacturing. Expert residential and commercial design services.',
  alternates: {
    canonical: 'https://savistar.in',
  },
}

// Renders the client component.
export default function HomePage() {
  return <HomePageClient />;
}