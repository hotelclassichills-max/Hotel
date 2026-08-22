import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Breadcrumbs from '../components/Breadcrumbs'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import AttractionCard from '../components/AttractionCard'
import { attractions } from '../data/attractions'
import forestSunset from '../assets/images/forest-sunset.jpg'

export default function Experiences() {
  return (
    <>
      <Seo
        title="Experiences & Local Attractions"
        description="Discover local attractions near Hotel Classic Hills, including Bhagsunag Temple, Bhagsu Waterfall, McLeod Ganj, Triund and the Dalai Lama Temple."
        path="/experiences"
        image={forestSunset}
      />

      <Hero
        image={forestSunset}
        eyebrow="Experiences"
        title="Local Attractions Around McLeod Ganj"
        subtitle="From temples and waterfalls to Himalayan treks, here's what's within reach of Hotel Classic Hills."
      />
      <Breadcrumbs items={[{ label: 'Experiences' }]} />

      <section className="section-pad">
        <div className="container-hotel">
          <SectionHeading
            eyebrow="Explore the Region"
            title="What's Nearby"
            subtitle="Distances and timings vary by route and season — our team is always happy to help you plan the day."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-14">
            {attractions.map((attraction, i) => (
              <Reveal key={attraction.name} delay={(i % 4) * 80}>
                <AttractionCard attraction={attraction} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
