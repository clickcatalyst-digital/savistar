// src/components/portfolio/PortfolioHub.jsx
'use client'

import Link from 'next/link'
import { CldImage } from 'next-cloudinary'
import { ArrowRight } from 'lucide-react'
import { sendGAEvent, GTM_EVENTS } from '../../lib/gtag'

function EntryTile({ href, label, sub, cover }) {
  return (
    <Link href={href} className="group relative block aspect-[4/3] rounded-2xl overflow-hidden">
      {cover ? (
        <CldImage src={cover} alt={label} fill crop="fill" className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw, 50vw" />
      ) : (
        <div className="absolute inset-0 bg-gray-900" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <h2 className="heading-md text-white mb-1">{label}</h2>
        <p className="text-gray-200 text-sm mb-3">{sub}</p>
        <span className="inline-flex items-center text-white font-medium text-sm">
          Explore <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}

export default function PortfolioHub({ interiors = [], furniture = [], featured = [] }) {
  return (
    <>
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-900 to-[var(--color-primary-gradient-end)] text-white">
        <div className="container-custom pt-16 text-center max-w-3xl mx-auto">
          <h1 className="heading-xl mb-6">Our Work</h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            Interiors we&rsquo;ve shaped and furniture we&rsquo;ve made — explore complete homes and
            offices, and bespoke pieces crafted by SAAG.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <EntryTile href="/portfolio/interiors" label="Interiors" sub="Homes & commercial spaces, room by room." cover={interiors[0]?.cover} />
            <EntryTile href="/portfolio/furniture" label="Furniture" sub="Custom pieces by SAAG, browse by type." cover={furniture[0]?.cover} />
          </div>
        </div>
      </section>

      {featured.length > 0 && (
        <section className="section-padding bg-[var(--color-primary-light)]">
          <div className="container-custom">
            <h2 className="heading-lg mb-10 text-center">Selected work</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {featured.map((p) => (
                <Link
                  key={p.id}
                  href={p.type === 'interior' ? `/portfolio/${p.slug}` : '/portfolio/furniture'}
                  className="group relative aspect-square rounded-xl overflow-hidden"
                  onClick={() => sendGAEvent(GTM_EVENTS.viewPortfolio.action, { event_category: GTM_EVENTS.viewPortfolio.category, event_label: `Hub Featured - ${p.title}` })}
                >
                  {p.cover && <CldImage src={p.cover} alt={`${p.title} — ${p.category || p.type}`} fill crop="fill" className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width:768px) 50vw, 25vw" />}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-3">
                    <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">{p.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-white border-t border-black/5">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready to Create Your Dream Space?</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Let&rsquo;s discuss your project and bring your vision to life with our integrated design and manufacturing expertise.
          </p>
          <Link href="/contact" className="btn-accent text-lg px-10 py-4"
            onClick={() => sendGAEvent(GTM_EVENTS.generateLead.action, { event_category: GTM_EVENTS.generateLead.category, event_label: 'Portfolio Hub - CTA' })}>
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
