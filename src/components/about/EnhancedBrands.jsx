// src/components/about/EnhancedBrands.jsx

'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function EnhancedBrands() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <motion.div className="text-center lg:text-left group" whileHover={{ y: -5 }}>
        <div className="inline-block p-6 bg-gradient-to-br from-[var(--color-primary-DEFAULT)]/10 to-[var(--color-accent-DEFAULT)]/10 rounded-2xl mb-6">
            <Image
                src="/images/sav-logo.webp"
                alt="Savistar Logo"
                width={200}
                height={60}
                className="h-12 w-auto object-contain"
            />
        </div>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          Boutique interior design studio delivering turnkey residential and commercial 
          spaces from concept to handover.
        </p>
        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
          {['Homes', 'Yachts', 'Workplaces'].map(item => (
            <span key={item} className="px-3 py-1 bg-[var(--color-primary-DEFAULT)]/10 text-[var(--color-primary-DEFAULT)] rounded-full text-sm">
              {item}
            </span>
          ))}
        </div>
      </motion.div>
      
      <motion.div className="text-center lg:text-left group" whileHover={{ y: -5 }}>
        <div className="inline-block p-6 bg-gradient-to-br from-[var(--color-accent-DEFAULT)]/10 to-[var(--color-primary-DEFAULT)]/10 rounded-2xl mb-6">
            <Image
                src="/images/saag.webp"
                alt="SAAG Logo"
                width={200}
                height={60}
                className="h-12 w-auto object-contain"
            />
        </div>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          India-made custom furniture featuring solid-wood, artisan-built pieces designed 
          to integrate seamlessly with interiors.
        </p>
        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
          {['Solid Wood', 'Small Batch', 'Artisan Built'].map(item => (
            <span key={item} className="px-3 py-1 bg-[var(--color-accent-DEFAULT)]/10 text-[var(--color-accent-DEFAULT)] rounded-full text-sm">
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}