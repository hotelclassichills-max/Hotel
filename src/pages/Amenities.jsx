import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Breadcrumbs from '../components/Breadcrumbs'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import AmenityCard from '../components/AmenityCard'
import { amenities } from '../data/amenities'
import roomDeluxe1 from '../assets/images/room-deluxe-1.jpg'

export default function Amenities() {
  return (
    <>
      <Seo
        title="Amenities"
        description="See the amenities on offer at Hotel Classic Hills — mountain-view balcony rooms, in-house restaurant, private parking, lift facility, Wi-Fi and more."
        path="/amenities"
        image={roomDeluxe1}
      />

      <Hero
        image={roomDeluxe1}
        eyebrow="Amenities"
        title="Everything You Need for a Comfortable Stay"
        subtitle="A closer look at what's included at Hotel Classic Hills."
      />
      <Breadcrumbs items={[{ label: 'Amenities' }]} />

      <section className="section-pad">
        <div className="container-hotel">
          <SectionHeading
            eyebrow="Hotel Amenities"
            title="Designed Around Comfort"
            subtitle="From mountain views to modern bathrooms, every amenity at Hotel Classic Hills is chosen to make your stay easier."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mt-14">
            {amenities.map((item, i) => (
              <Reveal key={item.title} delay={(i % 5) * 60}>
                <AmenityCard icon={item.icon} title={item.title} description={item.description} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
