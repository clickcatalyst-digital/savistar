// src/components/home/HomePageClient.jsx

'use client'

import Link from 'next/link'
import { ArrowRight, Star, CheckCircle, Phone, Mail } from 'lucide-react'
import Image from "next/image";
import { sendGAEvent, GTM_EVENTS } from '../../lib/gtag';

const services = [
  {
    title: 'Interior Design',
    company: 'Savistar',
    description: 'Complete interior design solutions for residential and commercial spaces',
    features: ['Turnkey Projects', 'Material Selection'],
    href: '/interior',
    image: '/images/pages/interior_cover_1.webp'
  },
  {
    title: 'Custom Furniture',
    company: 'Saag',
    description: 'Bespoke furniture manufacturing with premium materials and craftsmanship',
    features: ['Custom Design', 'Premium Materials', 'Expert Craftsmanship', 'Installation'],
    href: '/furniture',
    image: '/images/pages/furn_1.webp'
  }
]

const testimonials = [
  {
    name: 'Paridhi Purohit',
    role: 'Home interior',
    content: 'Had a really good experience with Sachi and Haripriya. They understood our style perfectly and made the whole process smooth and stress-free. Loved the final result! Highly recommend.',
    rating: 5
  },
  {
    name: 'Jigar Desai',
    role: 'Custom furniture',
    content: 'We got our solid wood furniture done through Savistar, and it was a great experience end to end. Transparency in cost, materials, and workmanship made the whole journey very satisfying.',
    rating: 5
  },
  {
    name: 'Rutvij Pathak',
    role: 'Home renovation',
    content: 'A complete home renovation with spectacular results — an incredible eye for detail, delivered on schedule and within budget. If you want a firm that actually listens to your vision, Savistar is the way to go.',
    rating: 5
  }
]

const stats = [
  { number: 'Est. 2020', label: 'Founded', help: 'Design-led from day one' },
  { number: 'Two brands', label: 'Interiors + furniture', help: 'Savistar interiors and SAAG furniture' },
  { value: 2, label: 'CEPT-trained founders', help: 'Sachi and Haripriya lead design and delivery' },
  { number: 'In-house', label: 'Concept to handover', help: 'Design, build and delivery managed end to end' }
];

// helpers
const formatValue = (s) => {
  if (s.number) return s.number; // backward compatible
  const v = typeof s.value === 'number' ? s.value.toLocaleString('en-IN') : (s.value ?? '');
  return `${v}${s.suffix ?? ''}`;
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[100vh] min-h-[100svh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/movie/hero_anime.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-900/75 to-[var(--color-primary-gradient-end)]/85" />
        
        <div className="relative z-10 container-custom text-center text-white">
          <div className="fade-in">
            <h1 className="heading-xl mb-6">
              Transform Your Space with
              <span className="block">Complete Design Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              From visionary interior design to custom furniture manufacturing, 
              we bring your dream spaces to life with unmatched expertise and craftsmanship.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 items-center justify-center">
              <Link href="/contact" className="w-full sm:w-auto btn-primary text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4"
                onClick={() => sendGAEvent(GTM_EVENTS.generateLead.action, { // <-- TRACKING
                    event_category: GTM_EVENTS.generateLead.category,
                    event_label: 'Homepage - Hero - Start Your Project',
                  })}>
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/portfolio" 
                className="btn-secondary text-lg px-10 py-4 text-white border-white hover:bg-white hover:text-gray-900"
                onClick={() => sendGAEvent(GTM_EVENTS.viewPortfolio.action, {
                  event_category: GTM_EVENTS.viewPortfolio.category,
                  event_label: 'Hero Section - View Portfolio',
                })}
                >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 slide-up">
            <h2 className="heading-lg mb-6">Complete Design Ecosystem</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two specialized companies working in harmony to deliver exceptional results from concept to completion.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-gray-300 transition-colors duration-300">
                <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                  <div className="relative aspect-[5/3] overflow-hidden">
                    <Image 
                      src={service.image} 
                      alt={`${service.title} by ${service.company}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="text-[var(--color-primary-DEFAULT)] font-semibold text-sm">{service.company}</span>
                    <div className="w-2 h-2 bg-[var(--color-primary-DEFAULT)] rounded-full mx-3"></div>
                    <span className="text-gray-500 text-sm">Premium Service</span>
                  </div>
                  <h3 className="heading-md mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link 
                    href={service.href}
                    className="inline-flex items-center text-[var(--color-primary-DEFAULT)] font-semibold hover:text-[var(--color-primary-dark)] transition-colors group-hover:translate-x-2 transform duration-300"
                    onClick={() => sendGAEvent(GTM_EVENTS.learnMore.action, { // <-- TRACKING
                        event_category: GTM_EVENTS.learnMore.category,
                        event_label: `Homepage - Services - Learn More ${service.title}`,
                    })}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
     <section className="section-padding bg-gray-900">
      <div className="container-custom">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 text-center text-white">
          {stats.map((stat, index) => (
            <div key={index} className="slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <dd className="heading-md mb-2 text-white">
                {formatValue(stat)}
              </dd>
              <dt className="text-[var(--color-accent-DEFAULT)] text-base font-medium">
                {stat.label ?? ''}
              </dt>
              {stat.help && (
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  {stat.help}
                </p>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don&rsquo;t just take our word for it. Here&rsquo;swhat our satisfied clients have to say about our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-100 hover:border-gray-300 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[var(--color-accent-DEFAULT)] fill-current" />
                  ))}
                </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">{testimonial.content}</p>
                  <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary-DEFAULT)] to-[var(--color-primary-dark)] rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[var(--color-primary-light)] border-t border-black/5">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready to Transform Your Space?</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Let&rsquo;sdiscuss your project and bring your vision to life with our integrated design and manufacturing expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center space-x-4 text-lg">
              <Phone className="w-6 h-6 text-[var(--color-accent-DEFAULT)]" />
              <a href="tel:+91-903-343-4098" className="hover:text-[var(--color-accent-DEFAULT)] transition-colors"
              onClick={() => sendGAEvent(GTM_EVENTS.clickToCall.action, { // <-- TRACKING
                  event_category: GTM_EVENTS.clickToCall.category,
                  event_label: 'Homepage - CTA - Phone',
                })}>
                +91 (903) 343-4098
              </a>
            </div>
            <div className="flex items-center space-x-4 text-lg">
              <Mail className="w-6 h-6 text-[var(--color-accent-DEFAULT)]" />
              <a href="mailto:savistarinterior@gmail.com" className="hover:text-[var(--color-accent-DEFAULT)] transition-colors"
              onClick={() => sendGAEvent(GTM_EVENTS.clickToEmail.action, { // <-- TRACKING
                  event_category: GTM_EVENTS.clickToEmail.category,
                  event_label: 'Homepage - CTA - Email',
                })}>
                savistarinterior@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/contact" className="w-full sm:w-auto btn-accent text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4"
            onClick={() => sendGAEvent(GTM_EVENTS.generateLead.action, { // <-- TRACKING
                event_category: GTM_EVENTS.generateLead.category,
                event_label: 'Homepage - CTA - Get Consultation',
              })}>
              Get Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}