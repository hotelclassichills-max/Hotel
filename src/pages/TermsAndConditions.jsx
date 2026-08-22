import Seo from '../components/Seo'
import Breadcrumbs from '../components/Breadcrumbs'
import { siteConfig } from '../data/siteConfig'

export default function TermsAndConditions() {
  return (
    <>
      <Seo
        title="Terms & Conditions"
        description="Read the Terms and Conditions for booking a stay at Hotel Classic Hills in Bhagsunag, McLeod Ganj, Dharamshala."
        path="/terms-and-conditions"
      />
      <div className="pt-28" />
      <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />

      <section className="section-pad">
        <div className="container-hotel max-w-3xl">
          <h1 className="font-display text-4xl text-forest-800 mb-3">Terms & Conditions</h1>
          <p className="text-sm text-stone-dark mb-10">Last updated: [Insert Date]</p>

          <div className="space-y-8 text-charcoal-light leading-relaxed">
            <div>
              <h2 className="font-display text-xl text-forest-800 mb-3">1. Check-in & Check-out</h2>
              <p>
                Standard check-in and check-out times will be confirmed at the time of booking. Early
                check-in or late check-out is subject to availability and may be arranged by contacting our
                team directly.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl text-forest-800 mb-3">2. Identification</h2>
              <p>
                All guests are required to present valid, government-issued photo identification at the time
                of check-in, in line with applicable local regulations.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl text-forest-800 mb-3">3. Rates & Payment</h2>
              <p>
                Room rates are confirmed at the time of enquiry or booking and may vary by season and room
                category. Applicable taxes will be added as per current government regulations.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl text-forest-800 mb-3">4. Guest Conduct</h2>
              <p>
                Guests are expected to treat hotel staff, property and fellow guests with respect. The hotel
                reserves the right to refuse or discontinue service in cases of misconduct or damage to
                property.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl text-forest-800 mb-3">5. Liability</h2>
              <p>
                Hotel Classic Hills is not liable for loss of personal belongings unless deposited with the
                hotel for safekeeping. Guests are advised to take reasonable care of their valuables.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl text-forest-800 mb-3">6. Amendments</h2>
              <p>
                {siteConfig.hotelName} reserves the right to update these Terms & Conditions at any time.
                Please review this page periodically for the latest version.
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
