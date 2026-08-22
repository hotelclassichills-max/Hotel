import { useMemo, useState } from 'react'
import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Breadcrumbs from '../components/Breadcrumbs'
import Reveal from '../components/Reveal'
import GalleryLightbox from '../components/GalleryLightbox'
import { galleryImages, galleryCategories } from '../data/gallery'
import lobby from '../assets/images/lobby.jpg'

export default function Gallery() {
  const [category, setCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered = useMemo(
    () => (category === 'All' ? galleryImages : galleryImages.filter((img) => img.category === category)),
    [category],
  )

  return (
    <>
      <Seo
        title="Gallery"
        description="Browse photos of Hotel Classic Hills — rooms, balconies, mountain views, the in-house restaurant and the surroundings of Bhagsunag, McLeod Ganj."
        path="/gallery"
        image={lobby}
      />

      <Hero image={lobby} eyebrow="Gallery" title="A Closer Look at Hotel Classic Hills" />
      <Breadcrumbs items={[{ label: 'Gallery' }]} />

      <section className="section-pad">
        <div className="container-hotel">
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`px-5 py-2.5 text-xs uppercase tracking-widest2 border transition-colors duration-300 ${
                  category === cat
                    ? 'bg-forest-700 text-ivory-soft border-forest-700'
                    : 'border-forest-200 text-charcoal-light hover:border-forest-700 hover:text-forest-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <Reveal key={img.id} delay={(i % 6) * 60} className="break-inside-avoid">
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="block w-full overflow-hidden group"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-refined"
                  />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <GalleryLightbox
          images={filtered}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(d) => setLightboxIndex((prev) => (prev + d + filtered.length) % filtered.length)}
        />
      )}
    </>
  )
}
