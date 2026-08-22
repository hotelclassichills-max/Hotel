import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Breadcrumbs from '../components/Breadcrumbs'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import RoomCard from '../components/RoomCard'
import { rooms } from '../data/rooms'
import roomTwin1 from '../assets/images/room-twin-1.jpg'

export default function Rooms() {
  return (
    <>
      <Seo
        title="Rooms"
        description="Explore Deluxe, Super Deluxe and Twin Super Deluxe rooms at Hotel Classic Hills — each with a private balcony, mountain views and modern comforts."
        path="/rooms"
        image={roomTwin1}
      />

      <Hero
        image={roomTwin1}
        eyebrow="Our Rooms"
        title="Discover Our Rooms"
        subtitle="Comfortable spaces designed for relaxing Himalayan stays."
      />
      <Breadcrumbs items={[{ label: 'Rooms' }]} />

      <section className="section-pad">
        <div className="container-hotel">
          <SectionHeading
            eyebrow="Balcony & Mountain-View Rooms"
            title="A Room for Every Kind of Stay"
            subtitle="From solo travellers to friends exploring together, each of our three room categories offers a private balcony, mountain views and thoughtful in-room comforts."
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
    </>
  )
}
