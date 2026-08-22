import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Breadcrumbs from '../components/Breadcrumbs'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import ContactForm from '../components/ContactForm'
import Icon from '../components/Icon'
import { siteConfig, telLink, mailLink, reservationsMailLink, whatsappLink } from '../data/siteConfig'
import exteriorEntrance from '../assets/images/exterior-entrance.jpg'

export default function Contact() {
  const { location, contact } = siteConfig

  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with Hotel Classic Hills in Bhagsunag, McLeod Ganj, Dharamshala. Call, WhatsApp or send an enquiry to check availability and plan your stay."
        path="/contact"
        image={exteriorEntrance}
      />

      <Hero image={exteriorEntrance} eyebrow="Contact" title="We'd Love to Hear From You" />
      <Breadcrumbs items={[{ label: 'Contact' }]} />

      <section className="section-pad">
        <div className="container-hotel grid grid-cols-1 lg:grid-cols-5 gap-14">
          {/* Contact info + map */}
          <div className="lg:col-span-2">
            <SectionHeading align="left" eyebrow="Get in Touch" title="Hotel Classic Hills" />
            <p className="mt-5 text-charcoal-light leading-relaxed">{location.addressLine}</p>

            <div className="mt-8 space-y-4">
              <a href={telLink()} className="flex items-center gap-3 text-charcoal hover:text-saffron-dark transition-colors">
                <span className="w-10 h-10 flex items-center justify-center border border-forest-200">
                  <Icon name="phone" className="w-[18px] h-[18px]" />
                </span>
                {contact.phoneDisplay}
              </a>
              <a href={mailLink()} className="flex items-center gap-3 text-charcoal hover:text-saffron-dark transition-colors">
                <span className="w-10 h-10 flex items-center justify-center border border-forest-200">
                  <Icon name="mail" className="w-[18px] h-[18px]" />
                </span>
                {contact.email}
              </a>
              <a href={reservationsMailLink()} className="flex items-center gap-3 text-charcoal hover:text-saffron-dark transition-colors">
                <span className="w-10 h-10 flex items-center justify-center border border-forest-200">
                  <Icon name="mail" className="w-[18px] h-[18px]" />
                </span>
                {contact.reservationsEmail}
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-charcoal hover:text-saffron-dark transition-colors"
              >
                <span className="w-10 h-10 flex items-center justify-center border border-forest-200">
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
                    <path d="M20 4A10 10 0 0 0 4.6 17.3L3 21l3.8-1.6A10 10 0 1 0 20 4Zm-8 15.4a8.3 8.3 0 0 1-4.2-1.1l-.3-.2-2.5 1 .9-2.5-.2-.3A8.4 8.4 0 1 1 12 19.4Z" />
                  </svg>
                </span>
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href={siteConfig.location.googleMapsShareUrl} target="_blank" rel="noreferrer" className="btn-outline">
                Get Directions
              </a>
            </div>

            <div className="mt-10 aspect-[4/3] w-full border border-forest-100 overflow-hidden">
              {location.googleMapsEmbedUrl ? (
                <iframe
                  title="Hotel Classic Hills location map"
                  src={location.googleMapsEmbedUrl}
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <a
                  href={location.googleMapsShareUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full h-full flex flex-col items-center justify-center gap-3 bg-forest-50 text-forest-700 hover:bg-forest-100 transition-colors"
                >
                  <Icon name="location" className="w-8 h-8" />
                  <span className="text-sm uppercase tracking-widest2">View on Google Maps</span>
                </a>
              )}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <Reveal>
              <h2 className="font-display text-2xl text-forest-800 mb-6">Send an Enquiry</h2>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
