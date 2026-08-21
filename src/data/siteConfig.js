// ---------------------------------------------------------------------------
// CENTRAL SITE CONFIGURATION
// Update hotel details, contact info, and integration URLs here — the change
// will reflect everywhere across the website automatically.
// ---------------------------------------------------------------------------

export const siteConfig = {
  hotelName: 'Hotel Classic Hills',
  tagline: 'Your Comfortable Himalayan Stay & Gateway to Kangra',
  legalName: 'Hotel Classic Hills',

  location: {
    area: 'Bhagsunag',
    city: 'McLeod Ganj, Dharamshala',
    state: 'Himachal Pradesh',
    country: 'India',
    addressLine: 'Hotel Classic Hills, Bhagsu Nag, Dharamshala, Himachal Pradesh, 176219',
    postalCode: '176219',
    // Replace with the verified embed URL from Google Maps "Share > Embed a map".
    googleMapsEmbedUrl: '',
    googleMapsShareUrl: 'https://share.google/RiZbdHOem2shg9iwb',
    latitude: 32.2432,
    longitude: 76.3212,
  },

  contact: {
    phone: '+919816024647',
    phoneDisplay: '+91 98160 24647',
    email: 'hotelclassichills@gmail.com',
    whatsappNumber: '919816024647',
    whatsappDefaultMessage: 'Hello Hotel Classic Hills, I would like to enquire about room availability.',
  },

  social: {
    instagram: 'https://www.instagram.com/hotelclassichillsdharamshala?igsh=MTNvbnR0MDJ3Y3cxdA==',
    facebook: 'https://www.facebook.com/share/199S3dwiXu/?mibextid=wwXIfr',
  },

  // Replace with your BookingJini / channel-manager engine URL when available.
  bookingEngineUrl: '',

  starRating: 3,

  facilities: [
    'Mountain-view rooms',
    'Balcony rooms',
    'In-house restaurant',
    'Private parking',
    'Lift facility',
    'Wi-Fi',
    'Room service',
    'Hot water',
    'Mini bar',
    'Comfortable beds',
    'Modern bathrooms',
  ],

  nav: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    {
      label: 'Rooms',
      path: '/rooms',
      children: [
        { label: 'Deluxe Room', path: '/rooms/deluxe-room' },
        { label: 'Super Deluxe Room', path: '/rooms/super-deluxe-room' },
        { label: 'Twin Super Deluxe Room', path: '/rooms/twin-super-deluxe-room' },
      ],
    },
    { label: 'Dining', path: '/dining' },
    { label: 'Amenities', path: '/amenities' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Experience Kangra', path: '/experience-kangra' },
    { label: 'Contact', path: '/contact' },
  ],

  footerLinks: {
    quickLinks: [
      { label: 'Home', path: '/' },
      { label: 'About', path: '/about' },
      { label: 'Rooms', path: '/rooms' },
      { label: 'Dining', path: '/dining' },
      { label: 'Amenities', path: '/amenities' },
      { label: 'Gallery', path: '/gallery' },
      { label: 'Experience Kangra', path: '/experience-kangra' },
      { label: 'Contact', path: '/contact' },
    ],
    legal: [
      { label: 'Privacy Policy', path: '/privacy-policy' },
      { label: 'Terms & Conditions', path: '/terms-and-conditions' },
      { label: 'Cancellation Policy', path: '/cancellation-policy' },
    ],
  },
}

export function whatsappLink(customMessage) {
  const message = encodeURIComponent(customMessage || siteConfig.contact.whatsappDefaultMessage)
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${message}`
}

export function telLink() {
  return `tel:${siteConfig.contact.phone}`
}

export function mailLink() {
  return `mailto:${siteConfig.contact.email}`
}
