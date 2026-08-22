import roomDeluxe1 from '../assets/images/room-deluxe-1.jpg'
import roomDeluxe2 from '../assets/images/room-deluxe-2.jpg'
import roomTwin1 from '../assets/images/room-twin-1.jpg'
import roomTwin2 from '../assets/images/room-twin-2.jpg'
import balconyView from '../assets/images/balcony-view.jpg'
import bathroom from '../assets/images/bathroom.jpg'

// Centralized room inventory. Update counts, amenities, and placeholder
// pricing here; every page that lists rooms reads from this single source.
export const rooms = [
  {
    slug: 'deluxe-room',
    name: 'Deluxe Room with Balcony & Mountain View',
    shortName: 'Deluxe Room',
    unitCount: 8,
    intro:
      'A comfortable retreat with a private balcony that opens to the pine-covered hills of Bhagsunag — designed for travellers who want an easy, restful base in McLeod Ganj.',
    description:
      'The Deluxe Room pairs warm wood furnishings with a comfortable bed and a private balcony framing the surrounding mountains. Thoughtful touches — hot water, a mini bar and a modern bathroom — complete the experience, making it an easy, comfortable base for exploring Bhagsunag and McLeod Ganj.',
    occupancy: '2 Adults',
    bedType: '1 Queen / King Bed',
    size: 'Room size available on request',
    heroImage: roomDeluxe1,
    gallery: [roomDeluxe1, roomDeluxe2, balconyView, bathroom],
    amenities: ['Balcony', 'Mountain View', 'Comfortable Bed', 'Wi-Fi', 'TV', 'Hot Water', 'Mini Bar', 'Modern Bathroom'],
    faqs: [
      {
        q: 'Does the Deluxe Room have a mountain-facing balcony?',
        a: 'Yes, every Deluxe Room includes a private balcony with views over the surrounding Bhagsunag hills.',
      },
      {
        q: 'Is breakfast included?',
        a: 'You can book the Deluxe Room either Room Only or With Breakfast — choose the rate that suits your stay at checkout.',
      },
      {
        q: 'How far is the Deluxe Room from McLeod Ganj market?',
        a: 'The hotel is located in Bhagsunag, within comfortable reach of McLeod Ganj — our team is happy to share directions and walking times when you enquire.',
      },
    ],
  },
  {
    slug: 'super-deluxe-room',
    name: 'Super Deluxe Room with Balcony & Mountain View',
    shortName: 'Super Deluxe Room',
    unitCount: 8,
    intro:
      'Located on the upper floors, directly above our Deluxe Rooms, these rooms offer elevated vantage points with breathtaking views of the surrounding Bhagsunag hills and mountain scenery.',
    description:
      'The Super Deluxe Room is situated on the upper floors of Hotel Classic Hills, above the Deluxe Rooms, giving guests a more elevated vantage point over the surrounding mountains and landscape. Each room features warm, wood-accented interiors, a private mountain-facing balcony positioned for panoramic vistas, and a modern, well-appointed bathroom. Being higher up in the building means fewer obstructions and a more open, sweeping outlook over the Kangra valley and the pine-covered slopes of Bhagsunag — perfect for those seeking a room with superior views.',
    occupancy: '2 Adults',
    bedType: '1 King Bed',
    size: 'Room size available on request',
    heroImage: roomDeluxe2,
    gallery: [roomDeluxe2, roomDeluxe1, balconyView, bathroom],
    amenities: ['Balcony', 'Mountain View', 'Comfortable Bed', 'Wi-Fi', 'TV', 'Hot Water', 'Mini Bar', 'Modern Bathroom'],
    faqs: [
      {
        q: 'What makes the Super Deluxe Room different from the Deluxe Room?',
        a: 'The Super Deluxe Room is located on the upper floors, directly above the Deluxe Room, offering a more elevated vantage point and mountain views compared to the standard Deluxe Room.',
      },
      {
        q: 'Can I request an early check-in?',
        a: 'Early check-ins are subject to availability — message our team on WhatsApp ahead of your arrival and we will do our best to accommodate you.',
      },
      {
        q: 'Is parking available for this room category?',
        a: 'Yes, private parking is available for all guests at Hotel Classic Hills.',
      },
    ],
  },
  {
    slug: 'twin-super-deluxe-room',
    name: 'Twin Super Deluxe Room with Balcony & Mountain View',
    shortName: 'Twin Super Deluxe Room',
    unitCount: 2,
    intro:
      'Twin beds, a private balcony and the same comfortable, mountain-view setting — ideal for friends or family travelling together.',
    description:
      'Designed for guests travelling together, the Twin Super Deluxe Room offers two comfortable single beds, a private balcony with mountain views, and the same modern, well-appointed bathroom found across our Super Deluxe rooms — a relaxed, comfortable choice for friends or colleagues sharing a stay.',
    occupancy: '2 Adults (Twin Beds)',
    bedType: '2 Twin Beds',
    size: 'Room size available on request',
    heroImage: roomTwin1,
    gallery: [roomTwin1, roomTwin2, balconyView, bathroom],
    amenities: ['Twin Beds', 'Balcony', 'Mountain View', 'Wi-Fi', 'TV', 'Hot Water', 'Mini Bar', 'Modern Bathroom'],
    faqs: [
      {
        q: 'Is this room suitable for friends travelling together?',
        a: 'Yes — the Twin Super Deluxe Room is designed with two separate beds, making it a comfortable choice for friends or colleagues sharing a room.',
      },
      {
        q: 'Can the twin beds be joined together?',
        a: 'Please let our team know your preference at the time of booking and we will do our best to accommodate it.',
      },
      {
        q: 'Does this room also have a balcony?',
        a: 'Yes, the Twin Super Deluxe Room includes a private balcony with mountain views, just like our other room categories.',
      },
    ],
  },
]

export function getRoomBySlug(slug) {
  return rooms.find((room) => room.slug === slug)
}

export function getRelatedRooms(slug) {
  return rooms.filter((room) => room.slug !== slug)
}
