import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Hero from '../components/Hero'
import BookingWidget from '../components/BookingWidget'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import RoomCard from '../components/RoomCard'
import AmenityCard from '../components/AmenityCard'
import { rooms } from '../data/rooms'
import { siteConfig, whatsappLink } from '../data/siteConfig'

import exteriorHillside from '../assets/images/exterior-hillside.jpg'
import lobby from '../assets/images/lobby.jpg'

const whyChooseUs = [
  { icon: 'mountain', title: 'Mountain Views' },
  { icon: 'parking', title: 'Private Parking' },
  { icon: 'lift', title: 'Lift Facility' },
  { icon: 'restaurant', title: 'In-house Restaurant' },
  { icon: 'wifi', title: 'Wi-Fi' },
  { icon: 'service', title: 'Room Service' },
  { icon: 'water', title: 'Hot Water' },
  { icon: 'minibar', title: 'Mini Bar' },
]

export default function Home() {
  return (
    <>
      <Seo
        title="Mountain-View Hotel in Bhagsunag, McLeod Ganj"
        description="Hotel Classic Hills is a comfortable 3-star, mountain-view hotel in Bhagsunag, McLeod Ganj, Dharamshala. Balcony rooms, an in-house restaurant, private parking and warm hospitality."
        path="/"
        image={exteriorHillside}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Hotel',
          name: siteConfig.hotelName,
          image: exteriorHillside,
          telephone: siteConfig.contact.phoneDisplay,
          email: siteConfig.contact.email,
          starRating: { '@type': 'Rating', ratingValue: siteConfig.starRating },
          address: {
            '@type': 'PostalAddress',
            streetAddress: siteConfig.location.area,
            addressLocality: siteConfig.location.city,
            addressRegion: siteConfig.location.state,
            postalCode: siteConfig.location.postalCode,
            addressCountry: 'IN',
          },
          amenityFeature: siteConfig.facilities.map((f) => ({ '@type': 'LocationFeatureSpecification', name: f })),
        }}
      />

      <Hero
        image={exteriorHillside}
        eyebrow="Welcome to Hotel Classic Hills"
        title="A Comfortable Himalayan Stay in the Heart of McLeod Ganj"
        subtitle="Experience warm hospitality, comfortable rooms, beautiful mountain surroundings and convenient access to Bhagsunag and McLeod Ganj."
        full
      >
        <Link to="/contact" className="btn-gold">
          Book Now
        </Link>
        <Link to="/rooms" className="btn-ghost-light">
          Explore Rooms
        </Link>
      </Hero>

      {/* Booking strip */}
      <section className="relative z-10 -mt-10 md:-mt-12">
        <div className="container-hotel">
          <Reveal>
            <BookingWidget floating />
          </Reveal>
        </div>
      </section>

      {/* About / welcome */}
      <section className="section-pad">
        <div className="container-hotel grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <Reveal className="relative">
            <img src={lobby} alt="Hotel Classic Hills lobby" className="w-full aspect-[4/5] object-cover" loading="lazy" />
            <div className="hidden md:block absolute -bottom-8 -right-8 w-40 h-40 border border-saffron/60" />
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Welcome to Hotel Classic Hills"
              title="Your Comfortable Retreat in McLeod Ganj"
            />
            <p className="mt-6 text-charcoal-light leading-relaxed">
              Set in Bhagsunag, within easy reach of McLeod Ganj, Hotel Classic Hills is built around comfort,
              warmth and mountain views. Our balcony rooms look out over the surrounding hills, our in-house
              restaurant keeps things simple and relaxed, and our team is always close by — whether you need
              directions to Bhagsu Waterfall or a recommendation for your next day in Dharamshala.
            </p>
            <p className="mt-4 text-charcoal-light leading-relaxed">
              With private parking, a lift for easy access, and thoughtful in-room comforts, we've designed
              the hotel to be an easy, welcoming base as you explore the wider Kangra region.
            </p>
            <Link to="/about" className="btn-outline mt-8">
              Discover Our Hotel
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section-pad bg-forest-50">
        <div className="container-hotel">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Comfort, Convenience & Mountain Views"
            subtitle="Everything about Hotel Classic Hills is built around a relaxed, comfortable stay in the mountains."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-14">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <AmenityCard icon={item.icon} title={item.title} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="section-pad">
        <div className="container-hotel">
          <SectionHeading
            eyebrow="Our Rooms"
            title="Discover Our Rooms"
            subtitle="Comfortable spaces designed for relaxing Himalayan stays."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {rooms.map((room, i) => (
              <Reveal key={room.slug} delay={i * 100}>
                <RoomCard room={room} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Kangra teaser */}
      <section className="relative section-pad bg-forest-800 text-ivory overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-contour bg-repeat-x" style={{ backgroundSize: '1200px 60px' }} />
        <div className="container-hotel relative grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHeading
              align="left"
              dark
              eyebrow="Experience Kangra"
              title="Discover the Beauty, Culture & Experiences of Kangra"
              subtitle="From Tibetan culture in McLeod Ganj to the trails of Triund and the heritage of Kangra Fort — make Hotel Classic Hills your base for exploring it all."
            />
            <Link to="/experience-kangra" className="btn-gold mt-8">
              Plan Your Experience
            </Link>
          </div>
          <Reveal>
            <img
              src={exteriorHillside}
              alt="Hills surrounding Hotel Classic Hills in Kangra"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      {/* Direct booking CTA */}
      <section className="relative section-pad">
        <img src={exteriorHillside} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative container-hotel text-center">
          <Reveal>
            <p className="eyebrow text-saffron-light mb-4">Book Directly</p>
            <h2 className="font-display text-3xl md:text-5xl text-ivory max-w-3xl mx-auto leading-tight">
              Plan Your Next Himalayan Escape
            </h2>
            <p className="mt-5 text-ivory/80 max-w-xl mx-auto">
              Stay close to the beauty of McLeod Ganj with comfortable rooms, warm hospitality and beautiful
              mountain surroundings.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-9">
              <Link to="/contact" className="btn-gold">
                Book Your Stay
              </Link>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-ghost-light">
                WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
