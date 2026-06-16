// src/app/privacy/page.jsx

export const metadata = {
  title: 'Privacy Policy',
  description: 'How Savistar collects, uses, and protects information shared through our website and contact form.',
  alternates: { canonical: 'https://savistar.in/privacy' },
}

export default function PrivacyPage() {
  return (
    <section className="section-padding pt-32">
      <div className="container-custom max-w-3xl">
        <h1 className="heading-lg mb-4">Privacy Policy</h1>
        <p className="text-gray-500 mb-10">Last updated: June 2026</p>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Savistar (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates savistar.in. This policy explains
            what information we collect when you use our website and how we use it.
          </p>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Information we collect</h2>
            <p>
              When you submit our contact form we collect the name, email address, phone number
              (optional), selected service, and message you provide. We also collect standard,
              anonymous usage data (such as pages visited and device type) through Google Analytics.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">How we use it</h2>
            <p>
              We use your details only to respond to your enquiry, prepare quotes or consultations,
              and improve our website. We do not sell your information to anyone.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Cookies &amp; analytics</h2>
            <p>
              Google Analytics uses cookies to help us understand how the site is used. You can
              disable cookies in your browser settings at any time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Data sharing &amp; retention</h2>
            <p>
              We share information only with the service providers that help us run the site (for
              example, email delivery and analytics) and never sell it. We keep enquiry details only
              as long as needed to respond and maintain our records.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Contact</h2>
            <p>
              To request access to or deletion of your information, email us at{' '}
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