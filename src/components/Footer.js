// src/components/Footer.js

'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react'
import Image from 'next/image'
import { sendGAEvent, GTM_EVENTS } from '../lib/gtag'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Interior Design', href: '/interior' },
        { name: 'Custom Furniture', href: '/furniture' },
        { name: 'Portfolio', href: '/portfolio' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' }
      ]
    }
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/savistar.savistar.9', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/savistar_interior/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/savistar/', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3">
                <Image 
                    src="/images/sav-logo.webp" // Add your logo file to public/logo.png
                    alt="Savistar Logo"
                    width={140}
                    height={70}
                    className="object-contain"
                />
            </Link>
            <br/>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-[var(--color-accent-DEFAULT)] flex-shrink-0" />
                <span>E-108/2, GIDC Rd, Sector 26, Gandhinagar 382028</span>
              </div>
               <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-[var(--color-accent-DEFAULT)] flex-shrink-0" />
                <a href="tel:+91-903-343-4098" 
                  className="hover:text-[var(--color-accent-DEFAULT)] transition-colors"
                  onClick={() => sendGAEvent(GTM_EVENTS.clickToCall.action, { // <-- TRACKING
                      event_category: GTM_EVENTS.clickToCall.category,
                      event_label: 'Footer - Phone',
                    })}>
                  +91 (903) 343-4098
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-[var(--color-accent-DEFAULT)] flex-shrink-0" />
                <a href="mailto:savistarinterior@gmail.com" 
                  className="hover:text-[var(--color-accent-DEFAULT)] transition-colors"
                  onClick={() => sendGAEvent(GTM_EVENTS.clickToEmail.action, { // <-- TRACKING
                    event_category: GTM_EVENTS.clickToEmail.category,
                    event_label: 'Footer - Email',
                  })}>
                  savistarinterior@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[var(--color-primary-DEFAULT)] hover:text-white transition-all duration-300"
                    onClick={() => sendGAEvent(GTM_EVENTS.clickSocialIcon.action, { // <-- TRACKING
                      event_category: GTM_EVENTS.clickSocialIcon.category,
                      event_label: `Footer - ${social.label}`,
                    })}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-6 text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-[var(--color-accent-DEFAULT)] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              <p>&copy; {currentYear} Savistar. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="hover:text-[var(--color-accent-DEFAULT)] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[var(--color-accent-DEFAULT)] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}