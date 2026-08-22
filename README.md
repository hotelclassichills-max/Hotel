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

## Deploying to GitHub Pages

This repo is configured for GitHub Pages at:
`https://hotelclassichills-max.github.io/Hotel-Classic-Hills/`

**If you rename the repository**, update `base` in `vite.config.js` to match the new repo name exactly (case-sensitive), e.g. `base: '/new-repo-name/'`. This is the #1 cause of a blank page on GitHub Pages — Vite needs to know the site isn't hosted at the domain root.

### Option A — GitHub Actions (recommended, already set up)

1. In the repo, go to **Settings → Pages → Build and deployment → Source**, and select **GitHub Actions**.
2. Push to `main`. `.github/workflows/deploy.yml` builds and deploys automatically on every push — no local build step, no risk of deploying a stale or misconfigured `dist` folder.

### Option B — Manual deploy from your machine

```bash
npm install
npm run deploy
```

This runs `vite build` then publishes the `dist` folder to the `gh-pages` branch (via the `gh-pages` package). In the repo, set **Settings → Pages → Source** to deploy from the `gh-pages` branch.

### Why the site was showing blank

If the site loads as a blank page with only the browser tab title visible, it's almost always one of two things, both already fixed in this project:

1. **Wrong `base` path.** GitHub Pages project sites (not user/org root sites) are served from a subpath — `/Hotel-Classic-Hills/`, not `/`. Vite's default build assumes root, so every JS/CSS asset request 404s and React never mounts into `<div id="root">`. Fixed via `base` in `vite.config.js`.
2. **Broken deep links / refreshes.** GitHub Pages is a static file host with no server-side rewrites, so visiting `/rooms` directly (or refreshing on any non-home page) returns GitHub's 404 page instead of your app. Fixed via `public/404.html` + a matching restore script in `index.html` (the standard "spa-github-pages" redirect trick).

If the page is still blank after redeploying, open the browser console (F12) on the live URL — a 404 on a `.js`/`.css` file almost always means `base` doesn't match the actual deployed path.

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
