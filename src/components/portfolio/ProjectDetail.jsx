// src/components/portfolio/ProjectDetail.jsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CldImage } from 'next-cloudinary'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import Lightbox from './Lightbox'
import { furnitureCategorySlug } from '../../lib/portfolio'
import { sendGAEvent, GTM_EVENTS } from '../../lib/gtag'

export default function ProjectDetail({ project }) {
  const [lb, setLb] = useState(null)
  const isFurniture = project.type === 'furniture'
  const gallery = [project.cover, ...(project.images || [])].filter(Boolean)
  const backHref = isFurniture ? `/portfolio/furniture/${furnitureCategorySlug(project.category)}` : '/portfolio/interiors'
  const captions = gallery.map((_, i) => `${project.title} — ${i + 1}`)

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] bg-gray-900">
        {project.cover && (
          <CldImage src={project.cover} alt={`${project.title} — ${project.category || project.type}`} fill priority crop="fill" className="object-cover" sizes="100vw" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-custom pb-12 text-white">
            <Link href={backHref} className="inline-flex items-center text-sm text-gray-200 hover:text-white mb-4">
              <ArrowLeft className="w-4 h-4 mr-1" /> {isFurniture ? 'All ' + project.category : 'All interiors'}
            </Link>
            <h1 className="heading-lg mb-2">{project.title}</h1>
            <p className="text-gray-200">
              {[isFurniture ? 'Custom furniture · SAAG' : 'Interior design · Savistar', project.category, project.location, project.year].filter(Boolean).join(' · ')}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          {(project.body || project.description) && (
            <div className="max-w-2xl text-gray-700 text-lg leading-relaxed whitespace-pre-line mb-10">
              {project.body || project.description}
            </div>
          )}

          {project.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-10">
              {project.tags.map((t) => (
                <span key={t} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">{t}</span>
              ))}
            </div>
          )}

          {gallery.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {gallery.map((img, i) => (
                <button
                  key={img}
                  onClick={() => { setLb(i); sendGAEvent(GTM_EVENTS.viewPortfolio.action, { event_category: GTM_EVENTS.viewPortfolio.category, event_label: `Detail Gallery - ${project.title}` }) }}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100"
                >
                  <CldImage src={img} alt={captions[i]} fill crop="fill" className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw" />
                </button>
              ))}
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-4">
            <p className="text-gray-600">Like this {isFurniture ? 'piece' : 'project'}? Let&rsquo;s create something for your space.</p>
            <Link href="/contact" className="btn-accent sm:ml-auto"
              onClick={() => sendGAEvent(GTM_EVENTS.generateLead.action, { event_category: GTM_EVENTS.generateLead.category, event_label: `Detail CTA - ${project.title}` })}>
              Start your project <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Lightbox images={gallery} index={lb} setIndex={setLb} captions={captions} alt={project.title} />
    </>
  )
}
