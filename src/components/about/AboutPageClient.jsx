// src/app/about/page.jsx

'use client'

import Link from 'next/link'
import { ArrowRight, Award, Users, Calendar, Target } from 'lucide-react'
import Image from "next/image";
import AnimatedFoundersSection from '../../components/about/AnimatedFoundersSection';
import EnhancedBrands from '../../components/about/EnhancedBrands';
import { sendGAEvent, GTM_EVENTS } from '../../lib/gtag'

const values = [
  {
    icon: Target,
    title: 'Craft Excellence',
    description: 'Every piece undergoes rigorous quality control—from moisture content to joinery standards—ensuring furniture that ages into heirlooms.'
  },
  {
    icon: Users,
    title: 'Human-Centered Design', 
    description: 'Spaces and furniture designed around human scale, daily rituals, and how people actually live and work.'
  },
  {
    icon: Award,
    title: 'Sustainable Making',
    description: 'Responsible sourcing, repair-friendly components, and finishes chosen so pieces can be renewed rather than replaced.'
  },
  {
    icon: Calendar,
    title: 'Integrated Approach',
    description: 'From concept to handover, our design and manufacturing expertise creates seamless, turnkey solutions.'
  }
]

const team = [
  {
    name: 'Sachi',
    role: 'Co Founder',
    bio: `Creative Director at SAAG and Design Lead at Savistar, Sachi shapes the design language that connects both brands.
    At SAAG, she leads creative direction for solid-wood, small-batch furniture focusing on proportion, comfort, and the quiet geometry of daily rituals. She collaborates closely with artisans to develop finish palettes that enhance the wood's natural grain.
    At Savistar, she leads concept development and client experience from brief to handover, creating spaces anchored around human scale, light, and circulation.`,
    image: '/images/co/sachi.jpg'
  },
  {
    name: 'Haripriya',
    role: 'Co Founder',
    bio: `Head of Craft & Operations at SAAG and Delivery Lead at Savistar, Haripriya transforms design intent into dependable results across both brands.

    At SAAG, she leads responsible sourcing, kiln drying, and quality-control processes for small-batch manufacturing. Every piece is checked for moisture, stability, and finish integrity to ensure longevity.

    At Savistar, she owns timelines and delivery with calm precision, building systems that protect design quality at scale while maintaining craft excellence.`,
    image: '/images/co/haripriya.jpg'
  }
]


const timeline = [
  {
    year: '2020',
    title: 'Graduated from CEPT University',
    description: 'Formal design training grounding our approach to material honesty, architecture-grade detailing, and sustainable craft.'
  },
  {
    year: '2020',
    title: 'Founded Savistar',
    description: 'Boutique studio delivering turnkey residential interiors—concept to handover.'
  },
  {
    year: '2022',
    title: 'Commercial Expansion',
    description: 'Scaled from homes to yacht and workplace interiors, executing end-to-end design–build across commercial spaces.'
  },
  {
    year: '2023',
    title: 'Launched SAAG',
    description: 'India-made custom furniture: solid-wood, artisan-built pieces that integrate with interiors and age into heirlooms.'
  },
  {
    year: '2025',
    title: 'Scaled Leadership',
    description: 'Nationwide delivery, 3× workshop capacity, responsible sourcing, and collaborations with architects and hospitality brands.'
  }
];



export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-[var(--color-primary-gradient-end)] text-white overflow-hidden">
        <div className="container-custom pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="fade-in">
              <h1 className="heading-xl mb-6">
                Our Story of
                <span className="text-gradient block">Design Excellence</span>
              </h1>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 leading-relaxed">
                From our base in India, we create exceptional spaces and handcrafted furniture 
                that blend traditional artisanship with modern design sensibilities. Through 
                Savistar interiors and SAAG furniture, we deliver complete design solutions.
              </p>
              <Link href="/contact" className="btn-primary text-lg px-8 py-4"
                onClick={() => sendGAEvent(GTM_EVENTS.generateLead.action, { // <-- TRACKING
                  event_category: GTM_EVENTS.generateLead.category,
                  event_label: 'About - Hero - Work With Us',
              })}>
                Work With Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl">
                    <Image 
                        src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=600&h=600&fit=crop&crop=center"
                        alt="Our design studio"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-6">Our Brands</h2>
          </div>
          <EnhancedBrands />
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe that exceptional spaces have the power to transform lives. Our mission is to create 
              environments that inspire, comfort, and reflect the unique personality of each client.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary-DEFAULT)] to-[var(--color-primary-dark)] rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Yin Yang Founders Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden relative">
        <AnimatedFoundersSection />
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small design studio to an integrated design and manufacturing company, 
              here are the key milestones in our growth story.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[var(--color-primary-light)]"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-primary-DEFAULT)] to-[var(--color-primary-dark)] rounded-full flex items-center justify-center text-white font-bold text-sm relative z-10">
                      {index + 1}
                    </div>
                    <div className="ml-8 bg-white rounded-xl p-6 shadow-lg flex-1">
                      <div className="flex items-center mb-3">
                        <span className="text-2xl font-bold text-[var(--color-primary-DEFAULT)] mr-4">{item.year}</span>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-[var(--color-primary-DEFAULT)] to-[var(--color-accent-DEFAULT)] text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let&rsquo;swork together to create a space that reflects your style and meets your needs. 
            Contact us today for an expert consultation.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 items-center justify-center">
            <Link href="/contact" className="btn-primary bg-white text-gray-900 hover:bg-gray-100 text-lg px-10 py-4"
              onClick={() => sendGAEvent(GTM_EVENTS.generateLead.action, { // <-- TRACKING
                    event_category: GTM_EVENTS.generateLead.category,
                    event_label: 'About - CTA - Get Consultation',
                })}>
              Get Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/portfolio" className="btn-secondary text-lg px-10 py-4 text-white border-white hover:bg-white hover:text-gray-900"
              onClick={() => sendGAEvent(GTM_EVENTS.viewPortfolio.action, { // <-- TRACKING
                    event_category: GTM_EVENTS.viewPortfolio.category,
                    event_label: 'About - CTA - View Our Work',
                })}>
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}