import forestSunset from '../assets/images/forest-sunset.jpg'
import exteriorHillside from '../assets/images/exterior-hillside.jpg'
import balconyView from '../assets/images/balcony-view.jpg'
import exteriorEntrance from '../assets/images/exterior-entrance.jpg'
import exteriorBalconyDusk from '../assets/images/exterior-balcony-dusk.jpg'
import exteriorNightAerial from '../assets/images/exterior-night-aerial.jpg'

// TODO(real photos): the images below are the hotel's own exterior/nature
// shots reused so that no hotel-interior photo (bedroom, lobby, dining
// room) stands in for an outdoor attraction. They are not real photos of
// the named places yet — swap in licensed/real photography of each
// specific attraction as soon as it's available.
//
// Distances, timings and prices are intentionally left out unless verified —
// update these fields once confirmed details are available.
export const attractions = [
  {
    name: 'Bhagsunag Temple',
    image: exteriorEntrance,
    description: 'A revered hillside temple dedicated to Lord Shiva, and the namesake of the Bhagsunag neighbourhood where Hotel Classic Hills is located.',
  },
  {
    name: 'Bhagsu Waterfall',
    image: forestSunset,
    description: 'A well-loved walking trail leading to a cascading waterfall just beyond Bhagsunag village.',
  },
  {
    name: 'McLeod Ganj',
    image: exteriorEntrance,
    description: 'The lively mountain town known for its Tibetan culture, cafés, markets and monastery life.',
  },
  {
    name: 'Dalai Lama Temple (Tsuglagkhang Complex)',
    image: exteriorNightAerial,
    description: 'The spiritual heart of the Tibetan community in exile, and a place of quiet reflection for visitors.',
  },
  {
    name: 'Naddi',
    image: balconyView,
    description: 'A peaceful viewpoint above McLeod Ganj, known for sweeping mountain vistas and calm sunsets.',
  },
  {
    name: 'Dharamshala Skyway',
    image: exteriorBalconyDusk,
    description: 'A cable-car experience connecting Dharamshala to McLeod Ganj with panoramic valley views.',
  },
  {
    name: 'Triund',
    image: forestSunset,
    description: 'A popular Himalayan trek offering some of the region\'s most rewarding ridge-line views.',
  },
  {
    name: 'HPCA Stadium',
    image: exteriorHillside,
    description: 'The famous cricket stadium in Dharamshala, set against a dramatic mountain backdrop.',
  },
  {
    name: 'Kangra Valley',
    image: exteriorHillside,
    description: 'A wide, scenic Himalayan valley of terraced fields, villages and forested slopes.',
  },
  {
    name: 'Kangra Tea Gardens',
    image: forestSunset,
    description: 'Rolling tea estates that reflect the Kangra region\'s long-standing tea-growing tradition.',
  },
]
