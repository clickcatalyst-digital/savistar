'use client'

import { motion } from 'framer-motion'
import { Star, Quote, Calendar } from 'lucide-react'
import Link from 'next/link'

const testimonials = [
  {
    name: 'Saloni Dave',
    role: 'Homeowner',
    content:
      'Savistar transformed our home beautifully. The custom furniture from Saag perfectly complemented their design vision, and every detail felt thoughtfully considered.',
    rating: 5,
  },
  {
    name: 'Sunil Parekh',
    role: 'Business Owner',
    content:
      'Outstanding commercial design work. The integrated approach with custom furniture made our office truly unique and a space our team genuinely enjoys working in.',
    rating: 5,
  },
  {
    name: 'Manish Goyal',
    role: 'Interior Designer',
    content:
      'Professional collaboration at its finest. Their attention to detail and quality craftsmanship is unmatched — a pleasure to work alongside on every project.',
    rating: 5,
  },
  {
    name: 'Savita Ben',
    role: 'Modern Family Home',
    content:
      'Savistar completely transformed our outdated home into a modern, functional space. The team listened to exactly what we wanted and delivered beyond our expectations.',
    rating: 5,
  },
  {
    name: 'Nitin Patel',
    role: 'Corporate Office Renovation',
    content:
      'The team redesigned our office space to be more collaborative and inspiring. The result improved both how the space looks and how our people work in it.',
    rating: 5,
  },
]

const initials = (name) =>
  name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')

export default function TestimonialsPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-[var(--color-primary-gradient-end)] text-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container-custom text-center">
          <motion.h1
            className="heading-xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What Our Clients Say
          </motion.h1>
          <motion.p
            className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The trust of our clients is the foundation of everything we build — in design and in furniture.
          </motion.p>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.name}
                className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Quote className="w-10 h-10 text-[var(--color-accent-light)] absolute top-6 right-6" />
                <div className="flex items-center mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-[var(--color-accent-DEFAULT)] fill-[var(--color-accent-DEFAULT)]"
                    />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">{t.content}</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-primary-DEFAULT)] to-[var(--color-primary-dark)] text-white flex items-center justify-center font-semibold">
                    {initials(t.name)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-[var(--color-accent-DEFAULT)]">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-primary-light)] border-t border-black/5 section-padding">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4">Ready to start your project?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Join the clients who trusted Savistar to design spaces they love.
          </p>
          <Link href="/contact" className="btn-accent">
            <Calendar className="w-4 h-4 mr-2" />
            Consult Now
          </Link>
        </div>
      </section>
    </>
  )
}
