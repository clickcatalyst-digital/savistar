// src/components/about/AnimatedFoundersSection.jsx

'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' },
}

const founders = [
  {
    name: 'Sachi',
    role: 'Creative Director',
    image: '/images/co/sachi.webp',
    tag: 'The Visionary',
    paragraphs: [
      'Sachi shapes the design language that connects SAAG and Savistar. At SAAG, she leads creative direction for solid-wood furniture that feels calm at first glance and reveals layered craft up close.',
      'At Savistar, she leads concept and client experience from brief to handover, creating spaces anchored around human scale, light, and circulation with furniture that blends into architecture rather than competing with it.',
    ],
    focus: 'Focus: proportion, silhouette, finish systems, space storytelling',
    skills: ['Proportion', 'Aesthetics', 'Storytelling', 'Innovation'],
    dark: false,
  },
  {
    name: 'Haripriya',
    role: 'Operations Director',
    image: '/images/co/hari1.webp',
    tag: 'The Executor',
    paragraphs: [
      'Haripriya transforms design intent into dependable results. At SAAG, she leads responsible sourcing, kiln drying, and documented quality-control processes for small-batch manufacturing.',
      'At Savistar, she owns timelines and delivery with calm precision. Her low-waste cutting plans and supplier standards keep projects predictable while raising craft standards.',
    ],
    focus: 'Focus: materials control, joinery, QC systems, supplier standards, timelines',
    skills: ['Quality Control', 'Systems', 'Reliability', 'Precision'],
    dark: true,
  },
]

export default function AnimatedFoundersSection() {
  return (
    <div className="container-custom">
      {/* Header */}
      <motion.div className="text-center mb-16 max-w-3xl mx-auto" {...reveal}>
        <h2 className="heading-lg mb-6 text-gray-900">The Creative Harmony</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Two visionaries, one shared dream — where creative intuition meets operational
          excellence, extraordinary design is born.
        </p>
      </motion.div>

      {/* Founder cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {founders.map((f) => (
          <motion.div
            key={f.name}
            {...reveal}
            className={`rounded-2xl p-8 lg:p-10 border ${
              f.dark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'
            }`}
          >
            <div className="flex items-start gap-6 mb-6">
              <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl overflow-hidden flex-shrink-0 ring-1 ring-black/5">
                <Image
                  src={f.image}
                  alt={`${f.name} — ${f.role}`}
                  width={144}
                  height={144}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className={`text-2xl lg:text-3xl font-semibold mb-1 ${f.dark ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-serif)' }}>
                  {f.name}
                </h3>
                <p className="text-[var(--color-accent-DEFAULT)] font-medium mb-3">{f.role}</p>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    f.dark ? 'bg-white/10 text-gray-200' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {f.tag}
                </span>
              </div>
            </div>

            <div className={`space-y-4 leading-relaxed mb-6 ${f.dark ? 'text-gray-300' : 'text-gray-700'}`}>
              {f.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p className={`text-sm italic ${f.dark ? 'text-gray-400' : 'text-gray-500'}`}>{f.focus}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {f.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1.5 rounded-lg text-sm ${
                    f.dark ? 'bg-white/10 text-gray-200' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Unity statement */}
      <motion.div className="text-center mt-16 max-w-3xl mx-auto" {...reveal}>
        <div className="rounded-2xl p-8 border border-gray-100 bg-gray-50">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900" style={{ fontFamily: 'var(--font-serif)' }}>
            Together, We Create
          </h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Co-owners of <span className="font-medium text-gray-900">SAAG</span> and{' '}
              <span className="font-medium text-gray-900">Savistar</span>, Sachi and Haripriya unite art
              and reliability. Sachi defines the language of proportion and finish. Haripriya builds the
              systems that preserve it through sourcing, craft, and delivery.
            </p>
            <p>
              The result is India-made furniture and turnkey interiors that are sustainable,
              repair-friendly, and ready for modern living.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
