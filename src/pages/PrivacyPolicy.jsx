import Seo from '../components/Seo'
import Breadcrumbs from '../components/Breadcrumbs'
import { siteConfig } from '../data/siteConfig'

export default function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="Read the Privacy Policy for Hotel Classic Hills, covering how guest information is collected, used and protected."
        path="/privacy-policy"
      />
      <div className="pt-28" />
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <section className="section-pad">
        <div className="container-hotel max-w-3xl">
          <h1 className="font-display text-4xl text-forest-800 mb-3">Privacy Policy</h1>
          <p className="text-sm text-stone-dark mb-10">Last updated: [Insert Date]</p>

          <div className="prose-hotel space-y-8 text-charcoal-light leading-relaxed">
            <div>
              <h2 className="font-display text-xl text-forest-800 mb-3">1. Information We Collect</h2>
              <p>
                When you make an enquiry or booking with {siteConfig.hotelName}, we may collect your name,
                email address, phone number, and stay details (check-in and check-out dates, number of
                guests) that you choose to share with us through our website, by phone, email or WhatsApp.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl text-forest-800 mb-3">2. How We Use Your Information</h2>
              <p>
                We use the information you provide solely to respond to your enquiry, confirm bookings,
                communicate about your stay, and improve our guest services. We do not sell guest information
                to third parties.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl text-forest-800 mb-3">3. Communication</h2>
              <p>
                By submitting an enquiry through our contact form or WhatsApp, you consent to being contacted
                by our team via phone, email or WhatsApp regarding your booking.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl text-forest-800 mb-3">4. Data Security</h2>
              <p>
                We take reasonable measures to protect the information you share with us. However, no method
                of electronic transmission or storage is completely secure.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl text-forest-800 mb-3">5. Third-Party Services</h2>
              <p>
                If you book through a third-party booking engine or channel manager linked from our website,
                that platform's own privacy policy will apply to the information you provide there.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl text-forest-800 mb-3">6. Contact Us</h2>
              <p>
                For any questions about this Privacy Policy or your personal information, please contact us at{' '}
                {siteConfig.contact.email} or {siteConfig.contact.phoneDisplay}.
              </p>
            </div>
            <p className="text-sm text-stone-dark italic">
              This policy is provided as a general template. Please have it reviewed by a qualified professional
              to ensure it meets applicable legal requirements before publishing.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
