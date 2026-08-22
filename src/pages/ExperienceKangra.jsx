import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Breadcrumbs from '../components/Breadcrumbs'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { kangraExperiences } from '../data/experienceKangra'
import { whatsappLink } from '../data/siteConfig'
import forestSunset from '../assets/images/forest-sunset.jpg'

export default function ExperienceKangra() {
  return (
    <>
      <Seo
        title="Experience Kangra"
        description="Make Hotel Classic Hills your base for discovering the culture, nature, spirituality and heritage of the Kangra region — from McLeod Ganj to Triund and Kangra Fort."
        path="/experience-kangra"
        image={forestSunset}
      />

      <Hero
        image={forestSunset}
        eyebrow="Experience Kangra"
        title="Discover the Beauty, Culture & Experiences of Kangra"
        subtitle="Guests staying at Hotel Classic Hills are perfectly placed to explore the natural beauty, culture, heritage and experiences of the wider Kangra region."
        full
      >
        <Link to="/contact" className="btn-gold">
          Plan Your Experience
        </Link>
      </Hero>
      <Breadcrumbs items={[{ label: 'Experience Kangra' }]} />

      <section className="section-pad">
        <div className="container-hotel">
          <SectionHeading
            eyebrow="A Region Worth Exploring"
            title="From Mountain Temples to Himalayan Trails"
            subtitle="Kangra weaves together Tibetan culture, Himalayan nature and centuries of heritage. Here's a closer look at what awaits, just beyond our door."
          />
        </div>
      </section>

      {/* Alternating editorial sections */}
      <div className="pb-10">
        {kangraExperiences.map((exp, i) => (
          <section key={exp.id} className={i % 2 === 0 ? '' : 'bg-forest-50'}>
            <div className="container-hotel py-14 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <Reveal className={i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                <img
                  src={exp.image}
                  alt={exp.title}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover"
                />
              </Reveal>
              <Reveal className={i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                <p className="eyebrow mb-3">{exp.category}</p>
                <h3 className="font-display text-2xl md:text-3xl text-forest-800">{exp.title}</h3>
                <p className="mt-4 text-charcoal-light leading-relaxed">{exp.description}</p>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="relative section-pad">
        <img src={forestSunset} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-charcoal/72" />
        <div className="relative container-hotel text-center">
          <Reveal>
            <p className="eyebrow text-saffron-light mb-4">Your Gateway to Kangra</p>
            <h2 className="font-display text-3xl md:text-5xl text-ivory max-w-3xl mx-auto leading-tight">
              Make Hotel Classic Hills Your Base for Kangra
            </h2>
            <p className="mt-5 text-ivory/80 max-w-xl mx-auto">
              Stay with us and discover the landscapes, culture, heritage and experiences that make Kangra
              special.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-9">
              <Link to="/contact" className="btn-gold">
                Book Your Stay
              </Link>
              <a href={whatsappLink('Hello, I would like to plan a Kangra experience with Hotel Classic Hills.')} target="_blank" rel="noreferrer" className="btn-ghost-light">
                Enquire Now
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
