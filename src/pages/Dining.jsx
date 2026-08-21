import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Breadcrumbs from '../components/Breadcrumbs'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { whatsappLink } from '../data/siteConfig'

import dining1 from '../assets/images/dining-1.jpg'
import dining2 from '../assets/images/dining-2.jpg'

export default function Dining() {
  return (
    <>
      <Seo
        title="Dining"
        description="Relax at the in-house restaurant of Hotel Classic Hills in Bhagsunag, McLeod Ganj — a comfortable dining space serving guests through the day."
        path="/dining"
        image={dining1}
      />

      <Hero
        image={dining1}
        eyebrow="Dining"
        title="A Relaxed Table Within the Hotel"
        subtitle="Our in-house restaurant offers a comfortable, unhurried space to start and end your day."
      />
      <Breadcrumbs items={[{ label: 'Dining' }]} />

      <section className="section-pad">
        <div className="container-hotel grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <Reveal>
            <img src={dining1} alt="In-house restaurant table setting at Hotel Classic Hills" className="w-full aspect-[4/5] object-cover" loading="lazy" />
          </Reveal>
          <div>
            <SectionHeading align="left" eyebrow="An Easy Place to Eat" title="Dining, Reimagined for Comfort" />
            <p className="mt-6 text-charcoal-light leading-relaxed">
              The in-house restaurant at Hotel Classic Hills is designed to feel like an extension of your
              room — comfortable seating, warm wood furnishings, and a calm atmosphere that suits both a quiet
              breakfast and a relaxed evening meal.
            </p>
            <p className="mt-4 text-charcoal-light leading-relaxed">
              Whether you're fuelling up before a day of exploring Bhagsunag or winding down after, our team
              is on hand to make your dining experience simple and comfortable.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-forest-50">
        <div className="container-hotel grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="lg:order-2">
            <Reveal>
              <img src={dining2} alt="Restaurant ambience at Hotel Classic Hills" className="w-full aspect-[4/5] object-cover" loading="lazy" />
            </Reveal>
          </div>
          <div className="lg:order-1">
            <SectionHeading align="left" eyebrow="Breakfast" title="Start Your Day the Comfortable Way" />
            <p className="mt-6 text-charcoal-light leading-relaxed">
              Guests booking a room With Breakfast can enjoy their morning meal in the restaurant before
              heading out for the day. Our team is happy to accommodate reasonable dietary preferences —
              just let us know when you check in.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-hotel">
          <SectionHeading eyebrow="Gallery" title="Inside Our Restaurant" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
            {[dining1, dining2].map((img, i) => (
              <Reveal key={img} delay={i * 100}>
                <img src={img} alt="Hotel Classic Hills restaurant" className="w-full aspect-[4/3] object-cover" loading="lazy" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-forest-800 text-ivory text-center">
        <div className="container-hotel">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl max-w-2xl mx-auto">
              Reserve Your Table or Ask About Our Menu
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link to="/contact" className="btn-gold">
                Enquire Now
              </Link>
              <a href={whatsappLink('Hello, I would like to ask about dining at Hotel Classic Hills.')} target="_blank" rel="noreferrer" className="btn-ghost-light">
                WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
