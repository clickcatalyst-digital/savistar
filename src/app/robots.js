// src/app/robots.js

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/api/'],
    },
    sitemap: 'https://savistar.in/sitemap.xml',
    host: 'https://savistar.in',
  }
}