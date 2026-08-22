import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Breadcrumbs from '../components/Breadcrumbs'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

import exteriorEntrance from '../assets/images/exterior-entrance.jpg'
import lobby from '../assets/images/lobby.jpg'
import corridor from '../assets/images/corridor.jpg'
import roomDeluxe2 from '../assets/images/room-deluxe-2.jpg'
import forestSunset from '../assets/images/forest-sunset.jpg'

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about Hotel Classic Hills, a comfortable mountain-view hotel in Bhagsunag, McLeod Ganj, Dharamshala, and the story behind our warm Himalayan hospitality."
        path="/about"
        image={exteriorEntrance}
      />

      <Hero
        image={exteriorEntrance}
        eyebrow="About Us"
        title="A Warm Welcome in the Hills of Bhagsunag"
        subtitle="The story, setting and hospitality behind Hotel Classic Hills."
      />
      <Breadcrumbs items={[{ label: 'About' }]} />

      {/* Our story */}
      <section className="section-pad">
        <div className="container-hotel grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <Reveal>
            <img src={lobby} alt="Hotel Classic Hills lobby interior" className="w-full aspect-[4/5] object-cover" loading="lazy" />
          </Reveal>
          <div>
            <SectionHeading align="left" eyebrow="Our Story" title="Built Around Comfort & the Mountains" />
            <p className="mt-6 text-charcoal-light leading-relaxed">
              Hotel Classic Hills was built with one idea in mind: a comfortable, well-kept place to stay in
              Bhagsunag that makes the most of its mountain setting. Every room is designed with a private
              balcony, so the Himalayas are never far from view, whether you're having your morning tea or
              winding down after a day of exploring.
            </p>
            <p className="mt-4 text-charcoal-light leading-relaxed">
              We're a 3-star hotel that focuses on getting the essentials right — comfortable beds, hot water,
              a lift for easy access, private parking and attentive room service — so your stay feels easy
              from the moment you arrive.
            </p>
          </div>
        </div>
      </section>

      {/* Hospitality */}
      <section className="section-pad bg-forest-50">
        <div className="container-hotel grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="lg:order-2">
            <Reveal>
              <img src={corridor} alt="Guest room corridor" className="w-full aspect-[4/5] object-cover" loading="lazy" />
            </Reveal>
          </div>
          <div className="lg:order-1">
            <SectionHeading align="left" eyebrow="Our Hospitality" title="Warm, Attentive & Unhurried" />
            <p className="mt-6 text-charcoal-light leading-relaxed">
              Himachali hospitality runs quietly through everything we do — a team that knows the neighbourhood,
              room service that's genuinely responsive, and a front desk that's always ready to help you plan
              your day, whether that means a walk to Bhagsu Waterfall or a longer trip into the Kangra Valley.
            </p>
          </div>
        </div>
      </section>

      {/* Mountain experience */}
      <section className="section-pad">
        <div className="container-hotel grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <Reveal>
            <img src={roomDeluxe2} alt="Balcony room with mountain view" className="w-full aspect-[4/5] object-cover" loading="lazy" />
          </Reveal>
          <div>
            <SectionHeading align="left" eyebrow="Mountain Experience" title="A Room With a View, Every Time" />
            <p className="mt-6 text-charcoal-light leading-relaxed">
              Every room at Hotel Classic Hills opens onto a private balcony with mountain views — a simple
              detail that changes how a stay feels. Add comfortable beds, a mini bar and modern bathrooms, and
              you have a room built for slowing down after a day on the trails.
            </p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-pad bg-forest-800 text-ivory">
        <div className="container-hotel grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <SectionHeading align="left" dark eyebrow="Location" title="Bhagsunag — Close to Everything That Matters" />
            <p className="mt-6 text-ivory/75 leading-relaxed">
              Positioned in Bhagsunag, we sit within easy reach of McLeod Ganj's cafés and markets, the
              Tsuglagkhang Complex, and the trailhead for Bhagsu Waterfall — making Hotel Classic Hills a
              convenient base whether your days are spent exploring the town or venturing further into Kangra.
            </p>
            <Link to="/experience-kangra" className="btn-gold mt-8">
              Explore Kangra
            </Link>
          </div>
          <Reveal>
            <img src={forestSunset} alt="Forested hills surrounding Dharamshala at sunset" className="w-full aspect-[4/3] object-cover" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad text-center">
        <div className="container-hotel">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl text-forest-800 max-w-2xl mx-auto">
              Come Experience Himalayan Hospitality for Yourself
            </h2>
            <Link to="/contact" className="btn-primary mt-8">
              Book Your Stay
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
