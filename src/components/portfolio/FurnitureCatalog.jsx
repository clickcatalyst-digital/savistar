// src/components/portfolio/FurnitureCatalog.jsx
'use client'

import Link from 'next/link'
import { CldImage } from 'next-cloudinary'
import { ArrowRight } from 'lucide-react'

// categories: [{ slug, label, count, cover }]
export default function FurnitureCatalog({ categories = [] }) {
  const active = categories.filter((c) => c.count > 0)
  const shown = active.length ? active : categories

  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-[var(--color-primary-gradient-end)] text-white">
        <div className="container-custom pt-16 text-center max-w-3xl mx-auto">
          <p className="text-[var(--color-accent-DEFAULT)] tracking-[0.25em] text-xs uppercase mb-3">SAAG Furniture</p>
          <h1 className="heading-lg mb-5">Custom Furniture, by Type</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Bespoke pieces handcrafted in solid wood. Browse by what you&rsquo;re looking for.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shown.map((c) => (
              <Link key={c.slug} href={`/portfolio/furniture/${c.slug}`} className="group relative aspect-[5/4] rounded-2xl overflow-hidden bg-gray-900">
                {c.cover && <CldImage src={c.cover} alt={`${c.label} by SAAG`} fill crop="fill" className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90" sizes="(max-width:768px) 100vw, 33vw" />}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h2 className="text-xl font-semibold text-white">{c.label}</h2>
                  <p className="text-gray-300 text-sm">{c.count > 0 ? `${c.count} piece${c.count === 1 ? '' : 's'}` : 'Coming soon'}</p>
                  <span className="inline-flex items-center text-white text-sm font-medium mt-2">
                    View <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
