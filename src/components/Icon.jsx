// A small, dependency-free line-icon set used across amenity, facility and
// contact sections. Keeping icons hand-rolled avoids pulling in a heavy
// icon library for a handful of shapes.

const paths = {
  mountain: 'M3 19h18L14.5 7 11 13 8.5 9.5 3 19Z',
  balcony: 'M4 21V9m16 12V9M4 9h16M8 21v-6m8 6v-6M2 9l10-6 10 6',
  parking: 'M6 3h6a4 4 0 0 1 0 8H9v10M9 11h3',
  lift: 'M4 3h16v18H4V3Zm8 4-3 3h6l-3-3Zm0 12 3-3H9l3 3Z',
  restaurant: 'M6 2v8a3 3 0 0 0 3 3v9M9 2v11M12 2v8a3 3 0 0 0 3 3v9M18 2c-2 2-2 6-2 8s1 3 2 3v9',
  wifi: 'M2 8.5a16 16 0 0 1 20 0M5.5 12a11 11 0 0 1 13 0M9 15.5a6 6 0 0 1 6 0M12 19h.01',
  service: 'M4 19h16M6 19v-5a6 6 0 0 1 12 0v5M9 10a3 3 0 0 1 6 0',
  water: 'M12 2s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z',
  tv: 'M3 4h18v13H3V4Zm5 17h8M12 17v4',
  minibar: 'M6 2h12l-1.2 9.6a5 5 0 0 1-9.6 0L6 2Zm3 9v11m6-11v11M6 22h12',
  phone: 'M4 4h4l2 5-2.5 2a12 12 0 0 0 6.5 6.5l2-2.5 5 2v4a2 2 0 0 1-2 2C10.6 23 1 13.4 1 6a2 2 0 0 1 2-2Z',
  mail: 'M3 5h18v14H3V5Zm0 0 9 7 9-7',
  location: 'M12 22s7-6.6 7-12a7 7 0 1 0-14 0c0 5.4 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  whatsapp: 'M20 4A10 10 0 0 0 4.6 17.3L3 21l3.8-1.6A10 10 0 1 0 20 4Zm-8 15.4a8.3 8.3 0 0 1-4.2-1.1l-.3-.2-2.5 1 .9-2.5-.2-.3A8.4 8.4 0 1 1 12 19.4Zm4.5-6.3c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1s-.6.7-.7.9-.3.2-.5.1a6.9 6.9 0 0 1-3.4-3 .5.5 0 0 1 .1-.6c.1-.1.2-.3.4-.4a1.6 1.6 0 0 0 .3-.4.5.5 0 0 0 0-.5c-.1-.1-.5-1.2-.7-1.7s-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.6 4.1c.6.3 1.1.4 1.5.5a3.6 3.6 0 0 0 1.6.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .1-1.3c-.1-.1-.2-.2-.4-.3Z',
  chevronDown: 'm6 9 6 6 6-6',
  chevronRight: 'm9 6 6 6-6 6',
  close: 'M6 6l12 12M18 6 6 18',
  menu: 'M4 6h16M4 12h16M4 18h16',
  quote: 'M9 7H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H5m14-12h-4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1',
  weather: 'M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.4 2A4 4 0 0 0 6.5 19h11Z',
  bed: 'M3 18v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7M3 18h18M3 18v2m18-2v2M5 11V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2',
  users: 'M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm9 10v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8',
  check: 'M20 6 9 17l-5-5',
  star: 'm12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21l1.2-6.9-5-4.9 6.9-1L12 2Z',
  arrowRight: 'M5 12h14m-6-6 6 6-6 6',
}

export default function Icon({ name, className = 'w-6 h-6', strokeWidth = 1.6 }) {
  const d = paths[name]
  if (!d) return null
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  )
}
