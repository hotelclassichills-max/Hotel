import Seo from '../components/Seo'
import Breadcrumbs from '../components/Breadcrumbs'
import { siteConfig, whatsappLink } from '../data/siteConfig'

export default function CancellationPolicy() {
  return (
    <>
      <Seo
        title="Cancellation Policy"
        description="Read the Cancellation Policy for bookings made at Hotel Classic Hills in Bhagsunag, McLeod Ganj, Dharamshala."
        path="/cancellation-policy"
      />
      <div className="pt-28" />
      <Breadcrumbs items={[{ label: 'Cancellation Policy' }]} />

      <section className="section-pad">
        <div className="container-hotel max-w-3xl">
          <h1 className="font-display text-4xl text-forest-800 mb-3">Cancellation Policy</h1>
          <p className="text-sm text-stone-dark mb-10">Last updated: [Insert Date]</p>

          <div className="space-y-8 text-charcoal-light leading-relaxed">
            <div>
              <h2 className="font-display text-xl text-forest-800 mb-3">1. Cancellations</h2>
              <p>
                Cancellation terms depend on the room category, rate plan and booking channel used. Please
                refer to the cancellation terms shown at the time of booking, or contact our team directly to
                confirm the applicable policy for your reservation.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl text-forest-800 mb-3">2. No-Shows</h2>
              <p>
                Reservations not cancelled in advance and not honoured on the scheduled check-in date may be
                treated as a no-show, and any applicable charges as per the booking terms will apply.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl text-forest-800 mb-3">3. Modifications</h2>
              <p>
                To modify your check-in or check-out dates, please contact us as early as possible. Changes
                are subject to room availability.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl text-forest-800 mb-3">4. Refunds</h2>
              <p>
                Where a refund is applicable under the booking's cancellation terms, it will be processed to
                the original mode of payment within a reasonable timeframe.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl text-forest-800 mb-3">5. Contact for Cancellations</h2>
              <p>
                To cancel or amend a booking, please reach us at {siteConfig.contact.phoneDisplay},{' '}
                {siteConfig.contact.email}, or via{' '}
                <a href={whatsappLink('Hello, I would like to cancel or modify my booking at Hotel Classic Hills.')} target="_blank" rel="noreferrer" className="text-saffron-dark underline">
                  WhatsApp
                </a>
                .
              </p>
            </div>
            <p className="text-sm text-stone-dark italic">
              This policy is provided as a general template. Please have it reviewed by a qualified professional
              and aligned with your actual booking terms before publishing.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
