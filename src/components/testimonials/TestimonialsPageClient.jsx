'use client'

import { Star, Quote, Calendar } from 'lucide-react'
import Link from 'next/link'

const GOOGLE_REVIEWS_URL = 'https://share.google/KEJBa8c7rFnA0Lbp1'

// Real, verified 5-star Google reviews.
const testimonials = [
  { name: 'Paridhi Purohit', context: 'Home interior', content: 'Had a really good experience with Sachi and Haripriya. They understood our style perfectly and made the whole process smooth and stress-free. Loved the final result! Highly recommend.' },
  { name: 'Kamaxi Rao', context: 'Home interior', content: 'A fantastic experience from the initial consultation to the final execution — everything was handled with great professionalism and attention to detail. The team truly understood my vision and brought it to life even better than I imagined. Quality, creativity, and timely delivery were outstanding.' },
  { name: 'Jigar Desai', context: 'Custom furniture', content: 'We got our solid wood furniture done through Savistar, and it was a great experience end to end. From sharing concepts to finalising finishes and receiving timely delivery, everything went smoothly. Their transparency in cost, materials, and workmanship made the whole journey very satisfying.' },
  { name: 'Valay Raval', context: 'Living space', content: 'Sachi and Haripriya took it into their hands to refurbish our living space. They made it look like a clean, modern, comfortable abode. We have gotten a lot of compliments ever since. I highly recommend Savistar and team!' },
  { name: 'Aayush Upadhyay', context: 'Home interior', content: 'One of the best duos. Love their work and dedication to detail and finishing. They understand your requirements and give suggestions that actually make sense. Modern and practical designs — professionalism with a personal touch to everything. Highly recommended.' },
  { name: 'Rutvij Pathak', context: 'Home renovation', content: 'I recently worked with Savistar for a complete home renovation, and the results are nothing short of spectacular. An incredible eye for detail, blending functionality with a high-end, modern aesthetic. Everything was delivered on schedule and within budget. If you want an interior firm that actually listens to your vision, Savistar is the way to go.' },
  { name: 'Mukesh Parmar', context: 'Office interior', content: 'A wonderful experience working with this firm. Co-founded by two incredibly talented women, their years of work clearly reflect in the quality and thoughtfulness. They did an exemplary job with my office — from understanding the requirements to executing every detail with precision and creativity.' },
  { name: 'Kamil Rathod', context: 'Custom furniture', content: 'The work of Sachi & Haripriya is well known for its creativity and meticulous attention to detail. Their furniture is not only aesthetically pleasing but also highly functional and comfortable for everyday use.' },
  { name: 'Chintan Patel', context: 'Home interior', content: 'Very satisfied with the interior work done by Savistar. Professional service, quality finishes, and a stress-free process. My home looks wonderful!' },
  { name: 'Pravina Patel', context: 'New home', content: 'We are so happy with how our new home has turned out! Savistar are not just talented designers but also very kind and patient. They listened to all our wishes and made sure every corner looks beautiful and comfortable.' },
  { name: 'Princy Ahir', context: 'Home interior', content: 'The level of creativity, attention to detail, and professionalism truly stands out. Every design feels thoughtfully curated, perfectly blending aesthetics with functionality. They understand your vision and bring it to life even better than you imagined. Highly recommended!' },
  { name: 'Iram Lodhi', context: 'Home interior', content: 'They carefully listen to your ideas and translate them into thoughtful designs, clearly explaining every detail to create a lovable home. They know how to make the best use of every corner, turning spaces into open, functional, and beautiful environments.' },
  { name: 'Ashish Patel', context: 'Full home design', content: 'Very well detailed design for the entire home — innovative ideas and great use of space including wardrobe and kitchen. Excellent taste in selection, particularly tiles and kitchenware. Great design and work ethic throughout the project.' },
  { name: 'Pujan Motiwala', context: 'Interior & furniture', content: 'Highly professional with a strong design-first approach. They provide white-glove service, pay close attention to detail, and thoughtfully work within your budget to deliver beautiful, practical results. A perfect choice for interior design and custom furniture.' },
  { name: 'Vinay Sangwan', context: 'Home interior', content: 'The project was completed on time and within budget, which made the entire experience stress-free. I am extremely satisfied with the final outcome — the space now feels more comfortable, stylish, and personalized.' },
  { name: 'Shruti Shukla', context: 'Custom furniture', content: 'Excellent designing. The quality and durability of the furniture is too good. Truly value for money.' },
  { name: 'V Patel', context: 'Home interior', content: 'Exceptional talent and even better people! Savistar put so much heart and hard work into our project. Brilliant problem-solvers who navigate every challenge with ease. If you want a team that delivers high-quality work with total integrity, I highly recommend them!' },
  { name: 'Devang Bhatt', context: 'New house', content: 'I cannot recommend Savistar enough for their work on our new house. We had many specific requirements, and they consistently provided the most practical solutions. Beyond their technical skills, their integrity is rare.' },
  { name: 'Vikram Patel', context: 'Home interior', content: 'Creative, reliable and professional. The team delivered exactly what they promised, with great sense and timely execution.' },
  { name: 'Rucha Pathak', context: 'Home interior', content: 'Budget friendly yet creative. Thank you Sachi and Haripriya!' },
  { name: 'Bhagirathsinh Vala', context: 'Home interior', content: 'Thank you for transforming our space into something so elegant and comfortable. Your creativity is truly impressive!' },
  { name: 'Pranav Shukla', context: 'Home interior', content: 'Exceptional design sensibility and professionalism. The team brings a perfect balance of creativity and functionality to every project — a highly dependable firm for anyone looking to elevate their interiors.' },
  { name: 'Drishti Purohit', context: 'Home interior', content: 'Savistar understood our needs and perfectly balanced aesthetics and functionality.' },
  { name: 'Devang Gohel', context: 'Home interior', content: 'Very good interior design done for our home, with well-coordinated execution.' },
]

const initials = (name) =>
  name.split(' ').map((n) => n[0]).slice(0, 2).join('')

function Stars() {
  return (
    <div className="flex mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-[var(--color-accent-DEFAULT)] fill-[var(--color-accent-DEFAULT)]" />
      ))}
    </div>
  )
}

export default function TestimonialsPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-[var(--color-primary-gradient-end)] text-white pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-6">What Our Clients Say</h1>
          <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Real, verified reviews from homeowners and businesses we&rsquo;ve worked with — in design and in furniture.
          </p>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm hover:border-[var(--color-accent-DEFAULT)] transition-colors"
          >
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[var(--color-accent-DEFAULT)] fill-[var(--color-accent-DEFAULT)]" />
              ))}
            </span>
            Rated 5.0 on Google &mdash; read all reviews
          </a>
        </div>
      </section>

      {/* Reviews — masonry columns */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {testimonials.map((t) => (
              <div
                key={t.name + t.content.slice(0, 12)}
                className="break-inside-avoid mb-6 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <Stars />
                  <Quote className="w-7 h-7 text-[var(--color-accent-light)]" />
                </div>
                <p className="text-gray-700 leading-relaxed mb-5">{t.content}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-semibold">
                    {initials(t.name)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-[var(--color-accent-DEFAULT)]">{t.context}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base px-8 py-3"
            >
              Read more reviews on Google
            </a>
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
