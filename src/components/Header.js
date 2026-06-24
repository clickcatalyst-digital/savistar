// src/components/Header.js

'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Calendar } from 'lucide-react'
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion'
import { sendGAEvent, GTM_EVENTS } from '../lib/gtag'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const darkHeroRoutes = ['/', '/interior', '/furniture', '/portfolio', '/about', '/contact', '/testimonials']
  const solid = isScrolled || !darkHeroRoutes.includes(pathname)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Designs', href: '/interior' },
    { name: 'Furniture', href: '/furniture' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'About', href: '/about' },
  ]

  return (
    <motion.header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        solid ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Link href="/" className="flex items-center space-x-3">
                    <Image 
                        src="/images/sav-logo.webp" // Add your logo file to public/logo.png
                        alt="Savistar Logo"
                        width={140}
                        height={70}
                        className="object-contain"
                    />
                </Link>
            </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                    key={item.name}
                    href={item.href}
                    className={`font-medium transition-colors hover:text-[var(--color-accent-DEFAULT)] ${
                    pathname === item.href 
                        ? 'text-[var(--color-accent-DEFAULT)]' 
                        : solid ? 'text-gray-700' : 'text-gray-100'
                    }`}
                >
                    {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
                {/* Desktop CTA - Consult Now */}
                <Link
                    href="/contact"
                    className="hidden md:flex items-center space-x-2 btn-primary"
                    onClick={() => sendGAEvent(GTM_EVENTS.generateLead.action, { // <-- TRACKING
                      event_category: GTM_EVENTS.generateLead.category,
                      event_label: 'Header - Consult Now',
                    })}
                >
                    <Calendar className="w-4 h-4" />
                    <span>Consult Now</span>
                </Link>
            </motion.div>

            {/* Mobile CTA - Call Now */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden"
            >
                <a href="tel:+91-903-343-4098"
                    className="flex md:hidden items-center space-x-2 btn-primary"
                    onClick={() => sendGAEvent(GTM_EVENTS.clickToCall.action, { // <-- TRACKING
                      event_category: GTM_EVENTS.clickToCall.category,
                      event_label: 'Header - Mobile Call Now',
                    })}
                    >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                </a>
            </motion.div>
            
            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors hover:text-[var(--color-accent-DEFAULT)] ${
                solid ? 'text-gray-700' : 'text-gray-100'
              }`}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {/* Animated Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div 
                className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                                            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        pathname === item.href
                          ? 'text-[var(--color-accent-dark)] bg-[var(--color-accent-light)]'
                          : 'text-gray-700 hover:text-[var(--color-accent-dark)] hover:bg-gray-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <motion.a
                    href="tel:+91-903-343-4098"
                    className="flex items-center space-x-2 px-3 py-2 text-[var(--color-primary-DEFAULT)] font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    onClick={() => sendGAEvent(GTM_EVENTS.clickToCall.action, { // <-- TRACKING
                      event_category: GTM_EVENTS.clickToCall.category,
                      event_label: 'Header - Mobile Menu Call',
                    })}
                  >
                    <Phone className="w-4 h-4" />
                    <span>+91 (903) 343-4098</span>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}