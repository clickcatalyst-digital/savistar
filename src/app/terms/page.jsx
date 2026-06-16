// src/app/terms/page.jsx

export const metadata = {
  title: 'Terms of Service',
  description: 'The terms that apply to your use of the Savistar website.',
  alternates: { canonical: 'https://savistar.in/terms' },
}

export default function TermsPage() {
  return (
    <section className="section-padding pt-32">
      <div className="container-custom max-w-3xl">
        <h1 className="heading-lg mb-4">Terms of Service</h1>
        <p className="text-gray-500 mb-10">Last updated: June 2026</p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            By using savistar.in you agree to these terms. If you do not agree, please do not use
            the site.
          </p>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Use of the site</h2>
            <p>
              This website provides general information about our interior design and furniture
              services. Content is offered for information only and may be updated at any time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Intellectual property</h2>
            <p>
              All content, images, designs, and project photography on this site are owned by
              Savistar and SAAG and may not be reproduced or reused without our written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Enquiries &amp; quotes</h2>
            <p>
              Submitting the contact form does not create a contract. Project scope, pricing, and
              timelines are confirmed separately in writing before any work begins.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">No warranty</h2>
            <p>
              Information on this site is provided &ldquo;as is&rdquo; without guarantees of
              completeness or accuracy. We are not responsible for the content of any third-party
              sites we link to.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Contact</h2>
            <p>
              Questions about these terms? Email{' '}
              <a href="mailto:savistarinterior@gmail.com" className="text-[var(--color-primary-DEFAULT)] hover:underline">
                savistarinterior@gmail.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}