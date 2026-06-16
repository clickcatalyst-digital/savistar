// src/component/contact/ContactPageClient.jsx

'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, Loader2, CheckCircle, AlertTriangle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { sendGAEvent, GTM_EVENTS } from '../../lib/gtag'; 

export default function ContactPage() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [submissionStatus, setSubmissionStatus] = useState({
    status: 'idle', // 'idle', 'loading', 'success', 'error'
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus({ status: 'loading', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        // Try to parse the error message from the server, otherwise use a default
        const errorResult = await response.json();
        throw new Error(errorResult.error || `Server responded with ${response.status}`);
      }
      
      const result = await response.json();

      setSubmissionStatus({ status: 'success', message: 'Message sent! We will contact you shortly.' });
      
      // SEND THE ANALYTICS EVENT
      sendGAEvent(GTM_EVENTS.generateLead.action, {
        event_category: GTM_EVENTS.generateLead.category,
        event_label: 'Successful Form Submission',
      });

      setFormData({ name: '', email: '', phone: '', service: '', message: '' }); 
      
    } catch (error) {
      setSubmissionStatus({ status: 'error', message: 'Something went wrong. Please try again later.' });
      console.error("Submission error:", error);
    }
  };
  
  const contactInfo = [
    { icon: Phone, title: 'Phone', details: '+91 (903) 343-4098', subtitle: 'Mon-Fri 9AM-6PM', href: 'tel:+91-903-343-4098' },
    { icon: Mail, title: 'Email', details: 'savistarinterior@gmail.com', subtitle: 'We reply within 24hrs', href: 'mailto:savistarinterior@gmail.com' },
    { icon: MapPin, title: 'Location', details: 'E-108/2, GIDC Rd, Sector 26', subtitle: 'Gandhinagar, Gujarat 382028', href: '#' },
    { icon: Clock, title: 'Hours', details: 'Mon-Fri: 9AM-6PM', subtitle: 'Sat: 10AM-4PM', href: '#' }
  ];

  const services = [
    'Interior Design',
    'Custom Furniture',
    'Turnkey Projects',
    'Expert Consultation'
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-[var(--color-primary-gradient-end)] text-white">
        <div className="container-custom pt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg mb-6">Let&rsquo;s Create Something Amazing Together</h1>
            <p className="text-lg sm:text-xl leading-relaxed">
              Ready to transform your space? We&rsquo;d love to hear about your project and discuss how we can bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you&rsquo;re planning a complete redesign or need custom furniture, 
                our team is here to help make your vision a reality.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[var(--color-primary-light)] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-[var(--color-primary-DEFAULT)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        {item.href !== '#' ? (
                          <a 
                            href={item.href}
                            className="text-[var(--color-primary-DEFAULT)] hover:text-[var(--color-primary-dark)] transition-colors"
                            onClick={() => { // <-- TRACKING FOR PHONE & EMAIL
                                if (item.title === 'Phone') {
                                    sendGAEvent(GTM_EVENTS.clickToCall.action, {
                                        event_category: GTM_EVENTS.clickToCall.category,
                                        event_label: 'Contact Page - Info - Phone',
                                    });
                                } else if (item.title === 'Email') {
                                    sendGAEvent(GTM_EVENTS.clickToEmail.action, {
                                        event_category: GTM_EVENTS.clickToEmail.category,
                                        event_label: 'Contact Page - Info - Email',
                                    });
                                }
                            }}
                          >
                            {item.details}
                          </a>
                        ) : (
                          <p className="text-gray-700">{item.details}</p>
                        )}
                        <p className="text-sm text-gray-500">{item.subtitle}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <a 
                href="https://www.google.com/maps/place/E-108%2F2,+GIDC+Rd,+Sector+26,+Gandhinagar,+Gujarat+382028,+India" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-8 block"
                onClick={() => sendGAEvent(GTM_EVENTS.viewLocation.action, { // <-- TRACKING
                    event_category: GTM_EVENTS.viewLocation.category,
                    event_label: 'Contact Page - Info - Map',
                })}
                >
                    <Image 
                        src="/images/map-screenshot.webp"
                        alt="Map to Savistar office"
                        width={400}
                        height={192}
                        className="rounded-xl object-cover w-full h-48"
                    />
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold mb-8">Start Your Project</h2>
                <p className="text-gray-600 mb-6 -mt-4">
                    Fill out the form below and we&#39;ll get back to you within 24 hours to schedule your free consultation.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary-DEFAULT)] focus:border-[var(--color-primary-DEFAULT)] transition-colors" placeholder="Your full name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary-DEFAULT)] focus:border-[var(--color-primary-DEFAULT)] transition-colors" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary-DEFAULT)] focus:border-[var(--color-primary-DEFAULT)] transition-colors" placeholder="+91 (903) 343-4098" />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Needed *</label>
                      <select id="service" name="service" required value={formData.service} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary-DEFAULT)] focus:border-[var(--color-primary-DEFAULT)] transition-colors">
                        <option value="">Select a service</option>
                        {services.map((service, index) => (<option key={index} value={service}>{service}</option>))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                    <textarea id="message" name="message" rows={6} required value={formData.message} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary-DEFAULT)] focus:border-[var(--color-primary-DEFAULT)] transition-colors resize-none" placeholder="Tell us about your project, space, style preferences, timeline, and any specific requirements..."></textarea>
                  </div>

                  <button type="submit" disabled={submissionStatus.status === 'loading'} className="w-full bg-[var(--color-primary-DEFAULT)] hover:bg-[var(--color-primary-dark)] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-DEFAULT)] focus:ring-offset-2 hover:shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed">
                    {submissionStatus.status === 'loading' ? (
                      <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="w-5 h-5 mr-2" /> Send Message</>
                    )}
                  </button>
                </form>

                {submissionStatus.status === 'success' && (
                  <div className="mt-4 p-4 flex items-center bg-green-100 text-green-800 rounded-lg">
                    <CheckCircle className="w-5 h-5 mr-3"/>
                    <p>{submissionStatus.message}</p>
                  </div>
                )}
                {submissionStatus.status === 'error' && (
                  <div className="mt-4 p-4 flex items-center bg-red-100 text-red-800 rounded-lg">
                    <AlertTriangle className="w-5 h-5 mr-3"/>
                    <p>{submissionStatus.message}</p>
                  </div>
                )}

                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                    <h3 className="font-semibold text-gray-800">While you wait...</h3>
                    <p className="text-sm text-gray-600 mt-2">
                        See how we&#39;ve transformed other spaces in our{' '}
                        <Link href="/portfolio" className="text-[var(--color-primary-DEFAULT)] font-medium hover:underline">
                        Portfolio
                        </Link>
                        .
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Get quick answers to common questions about our services and process.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { question: "How long does a typical project take?", answer: "Project timelines vary based on scope and complexity. Interior design projects typically take 4-12 weeks, while custom furniture manufacturing can take 6-16 weeks depending on the pieces required." },
                { question: "Do you work with existing furniture?", answer: "Yes! We can incorporate your existing pieces into new designs. We also offer furniture restoration and refinishing services through our Saag manufacturing division." },
                { question: "Whats included in your design fee?", answer: "Our design fee includes initial consultation, Turnkey Projects, 3D visualizations, material specifications, and Expert Consultation. Furniture and implementation costs are separate." },
                { question: "Do you offer virtual consultations?", answer: "Yes, we offer virtual consultations for initial project discussions and design reviews. For detailed measurements and final selections, in-person visits are recommended." }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}