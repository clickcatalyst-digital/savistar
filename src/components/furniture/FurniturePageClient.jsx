// src/component/furniture/FurniturePageClient.jsx

'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle, Hammer, Zap, Award, Truck, TreePine, Cog } from 'lucide-react'
import Image from "next/image";
import { sendGAEvent, GTM_EVENTS } from '../../lib/gtag'

const capabilities = [
  {
    icon: Hammer,
    title: 'Expert Craftsmanship',
    description: 'Master craftsmen with decades of experience in fine furniture making and woodworking.',
    features: ['Hand-finished Details', 'Traditional Joinery', 'Premium Hardware', 'Quality Control']
  },
  {
    icon: TreePine,
    title: 'Premium Materials',
    description: 'We source only the finest hardwoods, metals, and fabrics from sustainable suppliers.',
    features: ['Solid Hardwoods', 'Exotic Veneers', 'Steel & Brass', 'Italian Leather']
  },
  {
    icon: Cog,
    title: 'Custom Design',
    description: 'Every piece is designed specifically for your space, style, and functional requirements.',
    features: ['Bespoke Designs', 'Space Optimization', 'Style Matching', 'Functional Innovation']
  },
  {
    icon: Zap,
    title: 'Modern Technology',
    description: 'State-of-the-art equipment combined with traditional techniques for precision and efficiency.',
    features: ['CNC Machining', '3D Modeling', 'Precision Cutting', 'Automated Finishing']
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'Rigorous quality control processes ensure every piece meets our exacting standards.',
    features: ['Multi-point Inspection', 'Stress Testing', 'Finish Quality', 'Hardware Function']
  },
  {
    icon: Truck,
    title: 'White Glove Service',
    description: 'Professional delivery, installation, and setup with care and attention to detail.',
    features: ['Protected Delivery', 'Professional Setup', 'Final Inspection', 'Care Instructions']
  }
]

const categories = [
  {
    title: 'Living Room',
    items: ['Sofas & Sectionals', 'Coffee Tables', 'Entertainment Centers', 'Bookcases'],
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop&crop=center'
  },
  {
    title: 'Dining Room',
    items: ['Dining Tables', 'Dining Chairs', 'Buffets & Sideboards', 'China Cabinets'],
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop&crop=center'
  },
  {
    title: 'Bedroom',
    items: ['Bed Frames', 'Nightstands', 'Dressers', 'Wardrobes'],
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=400&fit=crop&crop=center'
  },
  {
    title: 'Office',
    items: ['Executive Desks', 'Conference Tables', 'Storage Solutions', 'Reception Furniture'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&crop=center'
  }
]

const materials = [
  { name: 'Walnut', description: 'Rich, dark hardwood with beautiful grain patterns' },
  { name: 'Oak', description: 'Strong, durable wood with distinctive grain characteristics' },
  { name: 'Maple', description: 'Light-colored hardwood perfect for contemporary designs' },
  { name: 'Cherry', description: 'Premium hardwood that ages beautifully over time' },
  { name: 'Steel', description: 'Industrial strength for modern, minimalist designs' },
  { name: 'Brass', description: 'Elegant metal accents for sophisticated finishes' }
]

const process = [
  {
    step: '01',
    title: 'Design Consultation',
    description: 'We work with you to understand your needs, style preferences, and space requirements.'
  },
  {
    step: '02',
    title: 'Technical Drawings',
    description: 'Detailed CAD drawings and 3D renderings help visualize the final product.'
  },
  {
    step: '03',
    title: 'Material Selection',
    description: 'Choose from our extensive selection of premium materials and finishes.'
  },
  {
    step: '04',
    title: 'Manufacturing',
    description: 'Expert craftsmen bring your design to life using traditional and modern techniques.'
  },
  {
    step: '05',
    title: 'Quality Control',
    description: 'Multiple inspection points ensure every piece meets our quality standards.'
  },
  {
    step: '06',
    title: 'Delivery & Setup',
    description: 'Professional delivery and installation with complete care and attention.'
  }
]

export default function FurniturePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[100vh] min-h-[100svh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/pages/furn_1.webp"
          alt="Custom furniture by SAAG"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-900/75 to-[var(--color-primary-gradient-end)]/85" />
        
        <div className="relative z-10 container-custom text-center text-white pt-20">
          <div className="fade-in max-w-4xl mx-auto">
            <div className="mb-4">
              <Image 
                src="/images/saag.webp" // Add your logo file to public/logo.png
                alt="Savistar Logo"
                width={140}
                height={70}
                className="object-contain mx-auto"
                />
            </div>
            <h1 className="heading-xl mb-6">
              Custom Furniture
              <span className="block">Crafted to Perfection</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 leading-relaxed">
              From concept to creation, we manufacture bespoke furniture pieces that combine 
              traditional craftsmanship with modern precision and design.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 items-center justify-center">
              <Link href="/contact" className="w-full sm:w-auto btn-primary text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4"
                onClick={() => sendGAEvent(GTM_EVENTS.generateLead.action, { // <-- TRACKING
                      event_category: GTM_EVENTS.generateLead.category,
                      event_label: 'Furniture - Hero - Request Quote',
                  })}>
                Request Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/portfolio" className="btn-secondary text-lg px-10 py-4 text-white border-white hover:bg-white hover:text-gray-900"
                onClick={() => sendGAEvent(GTM_EVENTS.viewPortfolio.action, { // <-- TRACKING
                    event_category: GTM_EVENTS.viewPortfolio.category,
                    event_label: 'Furniture - Hero - See Our Work',
                })}>
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Manufacturing Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive manufacturing capabilities ensure every piece meets the highest standards of quality and craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon
              return (
                <div key={index} className="group bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary-DEFAULT)] to-[var(--color-primary-dark)] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{capability.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.features.map((feature, idx) => (
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

      {/* Categories Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Furniture Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We create custom furniture for every room and purpose, tailored to your specific needs and style preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {categories.map((category, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                    <div className="relative aspect-[4/3] overflow-hidden">
                        <Image 
                            src={category.image}
                            alt={category.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                    </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="text-gray-600 text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Premium Materials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We source only the finest materials from sustainable suppliers to ensure beauty, durability, and environmental responsibility.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {materials.map((material) => (
              <div
                key={material.name}
                className="group relative aspect-[3/2] rounded-xl overflow-hidden border border-gray-200 bg-[var(--color-primary-light)]"
              >
                <Image
                  src={`/images/materials/${material.name.toLowerCase()}.webp`}
                  alt={`${material.name} material`}
                  fill
                  className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white transition-colors duration-500">
                    {material.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Our Manufacturing Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial concept to final delivery, we follow a meticulous process to ensure exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {process.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary-DEFAULT)] to-[var(--color-primary-dark)] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[var(--color-primary-light)] border-t border-black/5">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready for Custom Furniture?</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Let&rsquo;screate something extraordinary together. Contact us to discuss your custom furniture project and bring your vision to life.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 items-center justify-center">
            <Link href="/contact" className="btn-accent text-lg px-10 py-4"
              onClick={() => sendGAEvent(GTM_EVENTS.generateLead.action, { // <-- TRACKING
                      event_category: GTM_EVENTS.generateLead.category,
                      event_label: 'Furniture - CTA - Request Custom Quote',
                  })}>
              Request Custom Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/portfolio" className="btn-secondary text-lg px-10 py-4"
              onClick={() => sendGAEvent(GTM_EVENTS.viewPortfolio.action, { // <-- TRACKING
                      event_category: GTM_EVENTS.viewPortfolio.category,
                      event_label: 'Furniture - CTA - View Gallery',
                  })}>
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}