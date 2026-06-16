// src/components/portfolio/PortfolioPageClient.jsx

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Filter, Eye, X } from 'lucide-react'
import Image from "next/image";
import { CldImage } from 'next-cloudinary';
import { sendGAEvent, GTM_EVENTS } from '../../lib/gtag'

export default function PortfolioPage({ projects = [] }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (!selected) return
    const onKey = (e) => { if (e.key === 'Escape') setSelected(null) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [selected])

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
    // Let's create a custom event for filtering
    sendGAEvent('filter_portfolio', {
        event_category: 'Secondary CTA',
        event_label: `Filter - ${filterId}`,
    });
  };

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'interior', label: 'Interior Design' },
    { id: 'furniture', label: 'Custom Furniture' }
  ]

  // const projects = [
  //   {
  //     id: 1,
  //     title: 'Modern Family Residence',
  //     category: 'residential',
  //     description: 'Complete home renovation with custom furniture and space optimization.',
  //     image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&crop=center',
  //     tags: ['Interior Design', 'Custom Furniture', 'Turnkey Projects']
  //   },
  //   {
  //     id: 2,
  //     title: 'Executive Office Suite',
  //     category: 'commercial',
  //     description: 'Sophisticated corporate office design with branded elements and functionality.',
  //     image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&crop=center',
  //     tags: ['Commercial Design', 'Corporate Branding', 'WorkTurnkey Projects']
  //   },
  //   {
  //     id: 3,
  //     title: 'Handcrafted Dining Collection',
  //     category: 'furniture',
  //     description: 'Custom walnut dining set with live edge table and upholstered chairs.',
  //     image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&crop=center',
  //     tags: ['Custom Manufacturing', 'Walnut', 'Dining Furniture']
  //   },
  //   {
  //     id: 4,
  //     title: 'Luxury Penthouse',
  //     category: 'residential',
  //     description: 'High-end penthouse design with panoramic city views and premium finishes.',
  //     image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop&crop=center',
  //     tags: ['Luxury Design', 'Penthouse', 'Premium Materials']
  //   },
  //   {
  //     id: 5,
  //     title: 'Tech Startup Headquarters',
  //     category: 'commercial',
  //     description: 'Innovative workspace design promoting creativity and collaboration.',
  //     image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop&crop=center',
  //   },
  //   {
  //     id: 6,
  //     title: 'Artisan Living Room Set',
  //     category: 'furniture',
  //     description: 'Bespoke living room furniture crafted from reclaimed oak with modern styling.',
  //     image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop&crop=center',
  //     tags: ['Custom Furniture', 'Reclaimed Wood', 'Sustainable Design']
  //   },
  //   {
  //     id: 7,
  //     title: 'Contemporary Townhouse',
  //     category: 'residential',
  //     description: 'Multi-level townhouse renovation with seamless indoor-outdoor living.',
  //     image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop&crop=center',
  //     tags: ['Townhouse', 'Indoor-Outdoor', 'Contemporary Style']
  //   },
  //   {
  //     id: 8,
  //     title: 'Boutique Hotel Lobby',
  //     category: 'commercial',
  //     description: 'Elegant hotel lobby design with custom reception desk and seating areas.',
  //     image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop&crop=center',
  //     tags: ['Hospitality Design', 'Custom Reception', 'Luxury Finishes']
  //   },
  //   {
  //     id: 9,
  //     title: 'Executive Desk Collection',
  //     category: 'furniture',
  //     description: 'Premium executive office furniture with integrated technology solutions.',
  //     image: 'https://images.unsplash.com/photo-1541558869434-2840d308329a?w=800&h=600&fit=crop&crop=center',
  //     tags: ['Office Furniture', 'Technology Integration', 'Executive Design']
  //   }
  // ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.type === activeFilter)

  return (
    <>
{/* Hero Section */}
<section className="relative py-20 bg-gradient-to-br from-gray-900 to-[var(--color-primary-gradient-end)] text-white">
        <div className="container-custom pt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6">Our Portfolio</h1>
            <p className="text-lg sm:text-xl leading-relaxed">
              Explore our collection of transformative design projects, from intimate residential spaces 
              to dynamic commercial environments and custom furniture pieces.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  // onClick={() => setActiveFilter(filter.id)}
                  onClick={() => handleFilterClick(filter.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-[var(--color-primary-DEFAULT)] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => {
                  setSelected(project)
                  sendGAEvent(GTM_EVENTS.viewPortfolio.action, {
                    event_category: GTM_EVENTS.viewPortfolio.category,
                    event_label: `Portfolio Grid - ${project.title}`,
                  })
                }}
              >
                <div className="relative overflow-hidden">
                    <div className="relative aspect-[4/3] overflow-hidden">
                        <CldImage 
                            src={project.cover}
                            alt={project.title}
                            fill
                            crop="fill"
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-white border-2 border-white rounded-lg py-3 px-6 font-semibold flex items-center space-x-2">
                            <Eye className="w-5 h-5" />
                            <span>View Project</span>
                        </div>
                    </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--color-primary-DEFAULT)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="text-xs text-gray-500 italic mt-4 pt-4 border-t border-gray-100">
                        {project.type === 'furniture'
                            ? 'Custom furniture handcrafted by SAAG.'
                            : 'Complete interior design by Savistar.'}
                    </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags?.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-[var(--color-accent-light)] text-[var(--color-accent-dark)] text-sm rounded-full border border-[var(--color-primary-light)]"
                      >
                        {tag}
                      </span>
                    )) || null}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Filter className="w-16 h-16 mx-auto mb-4" />
              </div>
              <h3 className="text-2xl font-bold text-gray-500 mb-2">No Projects Found</h3>
              <p className="text-gray-400">Try selecting a different filter to view more projects.</p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              &quot;Savistar didn&rsquo;t just design our space—they transformed our entire lifestyle. 
              The attention to detail and custom furniture from Saag made our house truly feel like home.&quot;
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                <Image 
                    src="/images/tests/manisha.webp"
                    alt="Client testimonial"
                    fill
                    className="object-cover"
                    sizes="64px"
                />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Manisha Ben</div>
                <div className="text-[var(--color-primary-DEFAULT)]">Residential Client</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-[var(--color-primary-DEFAULT)] to-[var(--color-accent-DEFAULT)] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready to Create Your Dream Space?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let&rsquo;sdiscuss your project and explore how we can bring your vision to life with our 
            integrated design and manufacturing expertise.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 items-center justify-center">
            <Link href="/contact" className="btn-primary bg-white text-gray-900 hover:bg-gray-100 text-lg px-10 py-4"
              onClick={() => sendGAEvent(GTM_EVENTS.generateLead.action, { // <-- TRACKING
                    event_category: GTM_EVENTS.generateLead.category,
                    event_label: 'Portfolio - CTA - Start Your Project',
                })}>
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/about" className="btn-secondary text-lg px-10 py-4 text-white border-white hover:bg-white hover:text-gray-900"
              onClick={() => sendGAEvent(GTM_EVENTS.learnMore.action, { // <-- TRACKING
                    event_category: GTM_EVENTS.learnMore.category,
                    event_label: 'Portfolio - CTA - Learn More About Us',
                })}>
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Project detail overlay */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-start sm:items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl my-8 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] bg-gray-100">
              <CldImage src={selected.cover} alt={selected.title} fill crop="fill" className="object-cover" sizes="(max-width:1024px) 100vw, 896px" />
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-10">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-500 mb-3">
                <span>{selected.type === 'furniture' ? 'Custom Furniture · SAAG' : 'Interior Design · Savistar'}</span>
                {selected.category && <span>· {selected.category}</span>}
                {selected.location && <span>· {selected.location}</span>}
                {selected.year && <span>· {selected.year}</span>}
              </div>

              <h2 className="heading-md mb-6">{selected.title}</h2>

              {(selected.body || selected.description) && (
                <div className="max-w-2xl text-gray-700 text-lg leading-relaxed whitespace-pre-line mb-8">
                  {selected.body || selected.description}
                </div>
              )}

              {selected.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {selected.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-[var(--color-accent-light)] text-[var(--color-accent-dark)] text-sm rounded-full border border-[var(--color-primary-light)]">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {selected.images?.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selected.images.map((img, i) => (
                    <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                      <CldImage src={img} alt={`${selected.title} ${i + 1}`} fill crop="fill" className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-4">
                <p className="text-gray-600 text-sm">Like this project? Let&rsquo;s create something for your space.</p>
                <Link href="/contact" onClick={() => setSelected(null)} className="btn-primary text-sm px-6 py-2.5 sm:ml-auto">
                  Start your project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  )
}