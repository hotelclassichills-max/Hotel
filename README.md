# Hotel Classic Hills — Official Website

A production-ready website for **Hotel Classic Hills**, Bhagsunag, McLeod Ganj, Dharamshala, Himachal Pradesh — built with React, React Router and Tailwind CSS.

## Tech Stack

- [Vite](https://vitejs.dev/) — build tool
- [React 18](https://react.dev/) — UI library
- [React Router v6](https://reactrouter.com/) — routing
- [Tailwind CSS](https://tailwindcss.com/) — styling, with a custom design system (forest green / ivory / charcoal / stone / saffron palette, Cormorant Garamond + Playfair Display + Manrope typography)

No backend is required to run the site — the contact form currently hands off to WhatsApp; wire up your own API endpoint when ready (see `src/components/ContactForm.jsx`).

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`.

## Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

The production build outputs to `dist/`, ready to deploy to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages, or your own server).

## Deploying to GitHub Pages / Netlify / Vercel

- **Netlify / Vercel**: connect the repository, set the build command to `npm run build` and the publish directory to `dist`.
- **GitHub Pages**: run `npm run build`, then deploy the contents of `dist/` to your `gh-pages` branch (e.g. using the `gh-pages` npm package).

## Editing Hotel Content

Everything content-related is centralized under `src/data/`, so you can update the site without touching component code:

| File | Controls |
|---|---|
| `src/data/siteConfig.js` | Hotel name, phone, email, WhatsApp number, address, social links, booking engine URL, Google Maps URL, navigation |
| `src/data/rooms.js` | Room categories, descriptions, amenities, FAQs, images |
| `src/data/amenities.js` | Hotel amenities list shown on the Amenities page and homepage |
| `src/data/gallery.js` | Gallery images and categories |
| `src/data/attractions.js` | Local attractions shown on the Experiences page |
| `src/data/experienceKangra.js` | Editorial sections on the Experience Kangra page |

### Connecting a Booking Engine

Set `bookingEngineUrl` in `src/data/siteConfig.js`. Once set, the "Check Availability" button in the booking strip will open your live booking engine (e.g. BookingJini) in a new tab instead of routing to the enquiry form.

### Adding a Google Maps Embed

Set `location.googleMapsEmbedUrl` in `src/data/siteConfig.js` with the embed URL from Google Maps ("Share" → "Embed a map"). Until set, the Contact page shows a "View on Google Maps" link instead.

### Replacing Photography

Room, gallery and hero images live in `src/assets/images/`. Each has a full-size and a `-sm` (smaller, faster-loading) variant. Replace the files and update the corresponding import in the relevant `src/data/*.js` file.

## Project Structure

```
src/
  components/   Reusable UI components (Header, Footer, RoomCard, BookingWidget, etc.)
  pages/        One file per route (Home, About, Rooms, RoomDetail, Dining, ...)
  data/         Centralized content and configuration
  assets/       Images and static media
public/         robots.txt, sitemap.xml, favicon
```

## Notes

- Room pricing is intentionally not displayed — guests are directed to enquire via WhatsApp or the contact form for current rates. Add pricing back into `src/data/rooms.js` and the relevant components if/when you'd like it published.
- Legal pages (`/privacy-policy`, `/terms-and-conditions`, `/cancellation-policy`) contain general template language and should be reviewed by a qualified professional before publishing.
- There is exactly one floating WhatsApp button (`src/components/FloatingWhatsApp.jsx`), rendered once in `App.jsx`. Do not add a second instance.
