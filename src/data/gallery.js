import exteriorHillside from '../assets/images/exterior-hillside.jpg'
import exteriorEntrance from '../assets/images/exterior-entrance.jpg'
import exteriorBalconyDusk from '../assets/images/exterior-balcony-dusk.jpg'
import exteriorNightAerial from '../assets/images/exterior-night-aerial.jpg'
import entranceSignage from '../assets/images/entrance-signage.jpg'
import lobby from '../assets/images/lobby.jpg'
import corridor from '../assets/images/corridor.jpg'
import roomDeluxe1 from '../assets/images/room-deluxe-1.jpg'
import roomDeluxe2 from '../assets/images/room-deluxe-2.jpg'
import roomTwin1 from '../assets/images/room-twin-1.jpg'
import roomTwin2 from '../assets/images/room-twin-2.jpg'
import balconyView from '../assets/images/balcony-view.jpg'
import bathroom from '../assets/images/bathroom.jpg'
import dining1 from '../assets/images/dining-1.jpg'
import dining2 from '../assets/images/dining-2.jpg'
import forestSunset from '../assets/images/forest-sunset.jpg'

// Central gallery inventory grouped by category for the masonry grid & lightbox.
export const galleryImages = [
  { id: 'g1', src: exteriorHillside, category: 'Exterior', alt: 'Hotel Classic Hills building set into the Bhagsunag hillside at dusk' },
  { id: 'g2', src: exteriorEntrance, category: 'Exterior', alt: 'Hotel Classic Hills entrance and facade' },
  { id: 'g3', src: exteriorBalconyDusk, category: 'Exterior', alt: 'Balcony facade of Hotel Classic Hills at dusk' },
  { id: 'g4', src: exteriorNightAerial, category: 'Exterior', alt: 'Aerial night view of Hotel Classic Hills and McLeod Ganj' },
  { id: 'g5', src: entranceSignage, category: 'Hotel', alt: 'Hotel Classic Hills signage at the entrance' },
  { id: 'g6', src: lobby, category: 'Hotel', alt: 'Hotel Classic Hills lobby seating area' },
  { id: 'g7', src: corridor, category: 'Hotel', alt: 'Guest room corridor at Hotel Classic Hills' },
  { id: 'g8', src: roomDeluxe1, category: 'Rooms', alt: 'Deluxe Room interior with mountain-wood accent wall' },
  { id: 'g9', src: roomDeluxe2, category: 'Rooms', alt: 'Super Deluxe Room interior with reading chair' },
  { id: 'g10', src: roomTwin1, category: 'Rooms', alt: 'Twin Super Deluxe Room with two beds' },
  { id: 'g11', src: roomTwin2, category: 'Rooms', alt: 'Twin Super Deluxe Room with fruit basket welcome' },
  { id: 'g12', src: bathroom, category: 'Rooms', alt: 'Modern bathroom with rain shower and vanity' },
  { id: 'g13', src: balconyView, category: 'Balconies & Views', alt: 'Private balcony with a view over McLeod Ganj' },
  { id: 'g14', src: dining1, category: 'Restaurant', alt: 'In-house restaurant table setting' },
  { id: 'g15', src: dining2, category: 'Restaurant', alt: 'In-house restaurant dining area' },
  { id: 'g16', src: forestSunset, category: 'Surroundings', alt: 'Himalayan cedar forest at sunset near Dharamshala' },
]

export const galleryCategories = ['All', 'Hotel', 'Rooms', 'Balconies & Views', 'Restaurant', 'Exterior', 'Surroundings']
