// src/app/testimonials/page.jsx

import TestimonialsPageClient from '../../components/testimonials/TestimonialsPageClient';

export const metadata = {
  title: 'Client Testimonials - Savistar Interior Design & Custom Furniture',
  description:
    'Read what Savistar clients say about our interior design and custom furniture work — real experiences from homeowners and businesses across India.',
  keywords: ['savistar testimonials', 'client reviews', 'interior design reviews', 'furniture reviews'],
  alternates: {
    canonical: 'https://savistar.in/testimonials',
  },
}

export default function TestimonialsPage() {
  return <TestimonialsPageClient />;
}
