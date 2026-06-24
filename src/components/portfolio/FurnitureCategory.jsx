// src/components/portfolio/FurnitureCategory.jsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CldImage } from 'next-cloudinary'
import { ArrowLeft } from 'lucide-react'
import Lightbox from './Lightbox'
import { sendGAEvent, GTM_EVENTS } from '../../lib/gtag'

export default function FurnitureCategory({ category, pieces = [] }) {
  const [lb, setLb] = useState(null)
  const covers = pieces.map((p) => p.cover).filter(Boolean)
  const captions = pieces.map((p) => p.title)

  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-[var(--color-primary-gradient-end)] text-white">
        <div className="container-custom pt-16 text-center max-w-3xl mx-auto">
          <Link href="/portfolio/furniture" className="inline-flex items-center text-sm text-gray-300 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4 mr-1" /> All furniture
          </Link>
          <h1 className="heading-lg mb-4">{category.label}</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Custom {category.label.toLowerCase()} handcrafted in solid wood by SAAG — made to your space, style, and budget.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          {pieces.length === 0 ? (
            <p className="text-center text-gray-500 py-16">New pieces coming soon. Want something custom? <Link href="/contact" className="text-[var(--color-accent-DEFAULT)] underline">Tell us your idea.</Link></p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {pieces.map((p, i) => (
                <div key={p.id} className="group">
                  <button
                    onClick={() => { setLb(i); sendGAEvent(GTM_EVENTS.viewPortfolio.action, { event_category: GTM_EVENTS.viewPortfolio.category, event_label: `Furniture - ${p.title}` }) }}
                    className="relative block w-full aspect-square rounded-xl overflow-hidden bg-gray-100"
                  >
                    {p.cover && <CldImage src={p.cover} alt={`${p.title} — ${category.label} by SAAG`} fill crop="fill" className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:768px) 50vw, 25vw" />}
                  </button>
                  <div className="mt-2">
                    <Link href={`/portfolio/${p.slug}`} className="text-sm font-medium text-gray-900 hover:text-[var(--color-accent-DEFAULT)] transition-colors">{p.title}</Link>
                    {p.tags?.length > 0 && <p className="text-xs text-gray-500">{p.tags.join(' · ')}</p>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Lightbox images={covers} index={lb} setIndex={setLb} captions={captions} alt={category.label} />
    </>
  )
}
