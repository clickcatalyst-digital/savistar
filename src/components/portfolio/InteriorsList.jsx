// src/components/portfolio/InteriorsList.jsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CldImage } from 'next-cloudinary'
import { ArrowRight } from 'lucide-react'
import { INTERIOR_CATEGORIES } from '../../lib/portfolio'
import { sendGAEvent, GTM_EVENTS } from '../../lib/gtag'

export default function InteriorsList({ projects = [] }) {
  const [filter, setFilter] = useState('all')
  const filters = ['all', ...INTERIOR_CATEGORIES]
  const shown = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-[var(--color-primary-gradient-end)] text-white">
        <div className="container-custom pt-16 text-center max-w-3xl mx-auto">
          <p className="text-[var(--color-accent-DEFAULT)] tracking-[0.25em] text-xs uppercase mb-3">Interiors</p>
          <h1 className="heading-lg mb-5">Interior Design Case Studies</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Complete homes and commercial spaces, designed and delivered end to end across India.
          </p>
        </div>
      </section>

      <section className="py-6 bg-white border-b border-gray-200 sticky top-16 lg:top-20 z-30">
        <div className="container-custom flex flex-wrap gap-2 justify-center">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === f ? 'bg-[var(--color-accent-DEFAULT)] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {f === 'all' ? 'All' : f}
            </button>
          ))}
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          {shown.length === 0 ? (
            <p className="text-center text-gray-500 py-16">No projects here yet — check back soon.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {shown.map((p) => (
                <Link
                  key={p.id}
                  href={`/portfolio/${p.slug}`}
                  className="group block rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-300 transition-colors"
                  onClick={() => sendGAEvent(GTM_EVENTS.viewPortfolio.action, { event_category: GTM_EVENTS.viewPortfolio.category, event_label: `Interiors - ${p.title}` })}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    {p.cover && <CldImage src={p.cover} alt={`${p.title} — ${p.category || 'Interior design'}`} fill crop="fill" className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw" />}
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-1 group-hover:text-[var(--color-accent-DEFAULT)] transition-colors">{p.title}</h2>
                    <p className="text-sm text-gray-500">
                      {[p.category, p.location, p.year].filter(Boolean).join(' · ')}
                    </p>
                    {p.description && <p className="text-gray-600 mt-3 leading-relaxed line-clamp-2">{p.description}</p>}
                    <span className="inline-flex items-center text-sm font-medium text-[var(--color-accent-DEFAULT)] mt-4">
                      View case study <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
