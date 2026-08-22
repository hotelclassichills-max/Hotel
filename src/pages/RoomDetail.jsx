import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import Seo from '../components/Seo'
import Breadcrumbs from '../components/Breadcrumbs'
import Reveal from '../components/Reveal'
import RoomCard from '../components/RoomCard'
import GalleryLightbox from '../components/GalleryLightbox'
import Icon from '../components/Icon'
import { getRoomBySlug, getRelatedRooms } from '../data/rooms'
import { siteConfig, whatsappLink, reservationsMailLink } from '../data/siteConfig'

export default function RoomDetail() {
  const { slug } = useParams()
  const room = getRoomBySlug(slug)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  if (!room) return <Navigate to="/rooms" replace />

  const relatedRooms = getRelatedRooms(slug)
  const galleryImages = room.gallery.map((src, i) => ({ id: `${slug}-${i}`, src, alt: `${room.name} photo ${i + 1}` }))

  return (
    <>
      <Seo
        title={room.name}
        description={room.description}
        path={`/rooms/${room.slug}`}
        image={room.heroImage}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'HotelRoom',
          name: room.name,
          description: room.description,
          occupancy: { '@type': 'QuantitativeValue', value: room.occupancy },
          bed: room.bedType,
          amenityFeature: room.amenities.map((a) => ({ '@type': 'LocationFeatureSpecification', name: a })),
        }}
      />

      {/* Hero */}
      <section className="relative h-[56vh] min-h-[400px] flex items-end">
        <img src={room.heroImage} alt={room.name} className="absolute inset-0 w-full h-full object-cover" fetchpriority="high" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/25 to-charcoal/45" />
        <div className="relative container-hotel pb-14 text-ivory">
          <Reveal>
            <p className="eyebrow text-saffron-light mb-4">{room.unitCount} Rooms Available</p>
            <h1 className="font-display text-3xl md:text-5xl max-w-3xl leading-tight">{room.name}</h1>
          </Reveal>
        </div>
      </section>
      <Breadcrumbs items={[{ label: 'Rooms', path: '/rooms' }, { label: room.shortName }]} />

      {/* Intro + facts */}
      <section className="section-pad">
        <div className="container-hotel grid grid-cols-1 lg:grid-cols-3 gap-14">
          <div className="lg:col-span-2">
            <Reveal>
              <p className="eyebrow mb-4">Introduction</p>
              <p className="font-display text-2xl text-forest-800 leading-relaxed">{room.intro}</p>
              <p className="mt-6 text-charcoal-light leading-relaxed">{room.description}</p>
            </Reveal>

            {/* Gallery */}
            <Reveal className="mt-12">
              <p className="eyebrow mb-5">Gallery</p>
              <div className="grid grid-cols-2 gap-3">
                {galleryImages.map((img, i) => (
                  <button
                    key={img.id}
                    type="button"
                    onClick={() => setLightboxIndex(i)}
                    className={`overflow-hidden ${i === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-refined"
                    />
                  </button>
                ))}
              </div>
            </Reveal>

            {/* Amenities */}
            <Reveal className="mt-12">
              <p className="eyebrow mb-5">Amenities</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {room.amenities.map((a) => (
                  <div key={a} className="flex items-center gap-2.5 text-sm text-charcoal">
                    <Icon name="check" className="w-4 h-4 text-saffron flex-shrink-0" />
                    {a}
                  </div>
                ))}
              </div>
            </Reveal>

            {/* FAQs */}
            <Reveal className="mt-12">
              <p className="eyebrow mb-5">Frequently Asked Questions</p>
              <div className="divide-y divide-forest-100 border-t border-b border-forest-100">
                {room.faqs.map((faq) => (
                  <details key={faq.q} className="group py-4">
                    <summary className="flex items-center justify-between cursor-pointer list-none font-display text-lg text-forest-800">
                      {faq.q}
                      <Icon name="chevronDown" className="w-4 h-4 text-saffron transition-transform group-open:rotate-180 flex-shrink-0 ml-4" />
                    </summary>
                    <p className="mt-3 text-charcoal-light leading-relaxed text-sm">{faq.a}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Sidebar */}
          <div>
            <Reveal className="sticky top-28 bg-ivory-soft border border-forest-100 p-7">
              <h3 className="font-display text-xl text-forest-800">Room Details</h3>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-stone-dark">Occupancy</dt>
                  <dd className="text-charcoal font-medium">{room.occupancy}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-stone-dark">Bed Type</dt>
                  <dd className="text-charcoal font-medium">{room.bedType}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-stone-dark">Room Size</dt>
                  <dd className="text-charcoal font-medium text-right">{room.size}</dd>
                </div>
              </dl>

              <p className="mt-6 pt-6 border-t border-forest-100 text-sm text-charcoal-light leading-relaxed">
                Enquire with our team for current Room Only and With Breakfast rates for your travel dates, or
                email{' '}
                <a href={reservationsMailLink()} className="text-saffron-dark hover:underline">
                  {siteConfig.contact.reservationsEmail}
                </a>
                .
              </p>

              <div className="flex flex-col gap-3 mt-7">
                <Link to="/contact" className="btn-primary w-full">
                  Book Now
                </Link>
                <a
                  href={whatsappLink(`Hello, I would like to enquire about the ${room.shortName} at Hotel Classic Hills.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline w-full"
                >
                  WhatsApp Enquiry
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related rooms */}
      <section className="section-pad bg-forest-50">
        <div className="container-hotel">
          <p className="eyebrow mb-4 text-center">You May Also Like</p>
          <h2 className="font-display text-3xl text-forest-800 text-center">Related Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
            {relatedRooms.map((r) => (
              <RoomCard key={r.slug} room={r} />
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <GalleryLightbox
          images={galleryImages}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(d) => setLightboxIndex((prev) => (prev + d + galleryImages.length) % galleryImages.length)}
        />
      )}
    </>
  )
}
