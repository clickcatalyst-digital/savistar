// src/components/interior/InteriorPageClient.jsx

'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle, Home, Building2, Palette, Ruler, Eye, Settings } from 'lucide-react'
import Image from "next/image";
import { sendGAEvent, GTM_EVENTS } from '../../lib/gtag'

const services = [
  {
    icon: Home,
    title: 'Residential Design',
    description: 'Transform your home into a personalized sanctuary that reflects your lifestyle and preferences.',
    features: ['Living Room Design', 'Bedroom Styling', 'Kitchen Planning', 'Bathroom Renovation']
  },
  {
    icon: Building2,
    title: 'Commercial Design',
    description: 'Create inspiring workspaces that enhance productivity and reflect your brand identity.',
    features: ['Office Design', 'Retail Spaces', 'Restaurant Design', 'Healthcare Facilities']
  },
  {
    icon: Palette,
    title: 'Color Consultation',
    description: 'Expert color schemes and material selection to create the perfect ambiance for your space.',
    features: ['Color Psychology', 'Material Selection', 'Texture Coordination', 'Lighting Design']
  },
  {
    icon: Ruler,
    title: 'Turnkey Projects',
    description: 'Optimize your layout for maximum functionality while maintaining aesthetic appeal.',
    features: ['Floor Plans', 'Traffic Flow', 'Furniture Layout', 'Storage Solutions']
  },
  {
    icon: Eye,
    title: '3D Visualization',
    description: 'See your design come to life before construction begins with photorealistic renderings.',
    features: ['3D Renderings', 'Virtual Tours', 'Material Previews', 'Lighting Simulation']
  },
  {
    icon: Settings,
    title: 'Expert Consultation',
    description: 'Full project coordination from concept to completion with timeline and budget management.',
    features: ['Timeline Planning', 'Vendor Coordination', 'Budget Management', 'Quality Control']
  }
]

const process = [
  {
    step: '01',
    title: 'Initial Consultation',
    description: 'We discuss your vision, needs, budget, and timeline to understand your project scope.'
  },
  {
    step: '02',
    title: 'Design Development',
    description: 'Our team creates detailed plans, mood boards, and 3D visualizations for your approval.'
  },
  {
    step: '03',
    title: 'Material Selection',
    description: 'We help you choose the perfect materials, colors, and finishes that align with your vision.'
  },
  {
    step: '04',
    title: 'Implementation',
    description: 'We coordinate with contractors and manage the entire installation process from start to finish.'
  }
]

const testimonials = [
  {
    name: 'Savita Ben',
    project: 'Modern Family Home',
    content: 'Savistar completely transformed our outdated home into a modern, functional space. Their attention to detail and ability to understand our family\&rsquo;sneeds was exceptional.',
    image: '/images/tests/savita.webp'
  },
  {
    name: 'Nitin Patel',
    project: 'Corporate Office Renovation',
    content: 'The team redesigned our office space to be more collaborative and inspiring. Employee satisfaction has increased significantly since the renovation.',
    image: '/images/tests/nitin.webp'
  }
]

export default function InteriorDesignPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[100vh] min-h-[100svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-[var(--color-primary-gradient-end)]">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&fit=crop&crop=center)'
            }}
          />
        </div>
        
        <div className="relative z-10 container-custom text-center text-white pt-20">
          <div className="fade-in max-w-4xl mx-auto">
            <div className="mb-6">
                <Image 
                src="/images/sav-logo.webp" // Add your logo file to public/logo.png
                alt="Savistar Logo"
                width={200}
                height={100}
                className="object-contain mx-auto"
                />
            </div>
            <h1 className="heading-xl mb-6">
              Interior Design
              <span className="text-gradient block">That Tells Your Story</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 leading-relaxed">
              From concept to completion, we create spaces that perfectly balance aesthetics, 
              functionality, and your unique personality.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 items-center justify-center">
              <Link href="/contact" className="w-full sm:w-auto btn-primary text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4"
                onClick={() => sendGAEvent(GTM_EVENTS.generateLead.action, { // <-- TRACKING
                      event_category: GTM_EVENTS.generateLead.category,
                      event_label: 'Interior - Hero - Start Your Project',
                  })}>
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/portfolio" className="btn-secondary text-lg px-10 py-4 text-white border-white hover:bg-white hover:text-gray-900"
                onClick={() => sendGAEvent(GTM_EVENTS.viewPortfolio.action, { // <-- TRACKING
                    event_category: GTM_EVENTS.viewPortfolio.category,
                    event_label: 'Interior - Hero - View Our Work',
                })}>
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Comprehensive Design Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our full-service approach covers every aspect of interior design, from initial planning to final installation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="group bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary-DEFAULT)] to-[var(--color-primary-dark)] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="heading-lg mb-6">Our Design Process</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We follow a proven methodology to ensure your project is completed on time, on budget, and beyond expectations.
                    </p>
                </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-8">
                {process.map((item, index) => (
                    <div key={index} className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary-DEFAULT)] to-[var(--color-primary-dark)] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                        {item.step}
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                    </div>
                ))}
                </div>
                    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl">
                        <Image 
                            src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=600&h=800&fit=crop&crop=center"
                            alt="Interior design process"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our clients say about their transformation experience with Savistar.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                  {testimonial.content}
                </p>
                <div className="flex items-center">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                        <Image 
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                        />
                    </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-lg">{testimonial.name}</div>
                    <div className="text-[var(--color-primary-DEFAULT)]">{testimonial.project}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-[var(--color-primary-DEFAULT)] to-[var(--color-accent-DEFAULT)] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let&rsquo;sdiscuss your interior design project and create a space that truly reflects your vision and lifestyle.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-gray-900 hover:bg-gray-100 text-lg px-10 py-4"
            onClick={() => sendGAEvent(GTM_EVENTS.generateLead.action, { // <-- TRACKING
                event_category: GTM_EVENTS.generateLead.category,
                event_label: 'Interior - CTA - Get Free Design Consultation',
            })}>
            Get Free Design Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}