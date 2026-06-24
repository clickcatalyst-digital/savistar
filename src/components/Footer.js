// src/components/Footer.js

'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react'
import Image from 'next/image'
import { sendGAEvent, GTM_EVENTS } from '../lib/gtag'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const explore = [
    { name: 'Designs', href: '/interior' },
    { name: 'Furniture', href: '/furniture' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Testimonials', href: '/testimonials' },
  ]
  const company = [
    { name: 'About', href: '/about' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ]
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/savistar_interior/', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/savistar.savistar.9', label: 'Facebook' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/savistar/', label: 'LinkedIn' },
  ]

  const linkCls = 'text-gray-400 hover:text-[var(--color-accent-DEFAULT)] transition-colors'

  return (
    <footer className="bg-[#0A0A0A] text-gray-400">
      <div className="container-custom py-12">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand + contact */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block">
              <Image src="/images/sav-logo.webp" alt="Savistar" width={120} height={60} className="object-contain" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Interior design and custom furniture, crafted end to end in India.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[var(--color-accent-DEFAULT)] flex-shrink-0" />
                <span>E-108/2, GIDC Rd, Sector 26, Gandhinagar 382028</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[var(--color-accent-DEFAULT)] flex-shrink-0" />
                <a href="tel:+91-903-343-4098" className={linkCls}
                  onClick={() => sendGAEvent(GTM_EVENTS.clickToCall.action, { event_category: GTM_EVENTS.clickToCall.category, event_label: 'Footer - Phone' })}>
                  +91 90334 34098
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[var(--color-accent-DEFAULT)] flex-shrink-0" />
                <a href="mailto:savistarinterior@gmail.com" className={linkCls}
                  onClick={() => sendGAEvent(GTM_EVENTS.clickToEmail.action, { event_category: GTM_EVENTS.clickToEmail.category, event_label: 'Footer - Email' })}>
                  savistarinterior@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <h3 className="text-white text-sm font-medium mb-4">Explore</h3>
            <ul className="space-y-2.5 text-sm">
              {explore.map((l) => (
                <li key={l.href}><Link href={l.href} className={linkCls}>{l.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h3 className="text-white text-sm font-medium mb-4">Company</h3>
            <ul className="space-y-2.5 text-sm">
              {company.map((l) => (
                <li key={l.href}><Link href={l.href} className={linkCls}>{l.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <h3 className="text-white text-sm font-medium mb-4">Follow</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[var(--color-accent-DEFAULT)] hover:border-transparent transition-all"
                    onClick={() => sendGAEvent(GTM_EVENTS.clickSocialIcon.action, { event_category: GTM_EVENTS.clickSocialIcon.category, event_label: `Footer - ${social.label}` })}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>&copy; {currentYear} Savistar. All rights reserved.</p>
          <p>Designed &amp; crafted in India.</p>
        </div>
      </div>
    </footer>
  )
}
