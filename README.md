# Hotel Classic Hills — Website

Plain HTML/CSS/JS site, ready for GitHub Pages. No build step required.

Live domain: **hotelclassichills.in** (canonical URLs, sitemap.xml, robots.txt
and JSON-LD all point here — update everywhere if the domain changes).

Real contact details are already live throughout the site:
- WhatsApp / Phone: +91 98160 24647
- Email: hotelclassichills@gmail.com
- Address: Hotel Classic Hills, Bhagsu Nag, Dharamshala, Himachal Pradesh 176219
- Instagram: instagram.com/hotelclassichillsdharamshala
- Facebook: facebook.com/share/199S3dwiXu/

## File structure

```
index.html          Homepage
rooms.html           Deluxe / Super Deluxe / Twin Super Deluxe room detail + galleries
gallery.html          Full categorised photo gallery with lightbox
contact.html         Contact info, map, How to Reach Us
booking.html          Book Now page — hosts the Bookingjini widget (see below)
sitemap.xml           XML sitemap for search engines (booking.html excluded — noindex)
robots.txt             Crawler rules + sitemap reference
css/style.css        All styles (design tokens at the top of the file)
js/main.js            Mobile nav, lightbox, gallery filters, live weather widget
images/               Real hotel photos, in two WebP sizes:
                       *-thumb.webp (640px, for grids/srcset)
                       *.webp        (1600px, full size)
```

## Direct booking — activating the Bookingjini widget

Hotel Classic Hills already has the Bookingjini Booking Engine ("Jini Book")
active, on the same account as the Channel Manager — so availability and
payment methods are already configured on Bookingjini's side, and this site
doesn't need its own booking backend, database, or payment code.

To go live:

1. Log in to the Bookingjini extranet.
2. Go to **Booking Engine → Website → Widget Settings / Website
   Integration** (exact wording may vary by plan).
3. Copy the embed snippet Bookingjini provides for this property.
4. Open `booking.html` and paste it in place of the placeholder
   `<div id="bookingjini-widget">...</div>` block — full instructions are
   in a comment directly above it in the file.
5. In the Bookingjini dashboard, confirm payment methods are enabled for
   this property, and that room names/counts match the site: **Deluxe (8),
   Super Deluxe (8), Twin Super Deluxe (2)** — see `rooms.html`.

Every "Book Now" / "Check Availability" button site-wide already links to
`booking.html` (room-detail buttons pass `?room=deluxe` etc., which the page
reflects back to the guest and can later be wired into the widget's own
room-preselection if Bookingjini supports it). WhatsApp remains available
as a secondary contact option throughout, and as the fallback on
`booking.html` itself until the widget is connected.

Nothing sensitive (API keys, payment secrets) belongs in `booking.html` —
Bookingjini's embed snippets are designed to be safe to publish client-side,
referencing the property by a public ID only. If any integration step ever
asks for a private API key to go in the site's front-end code, don't use
it — that belongs server-side, not on a static GitHub Pages site.

## Publish on GitHub Pages

1. Create a new repository (e.g. `hotel-classic-hills`).
2. Upload every file in this folder, **keeping the same folder structure**
   (`css/`, `js/`, `images/` must stay as subfolders).
3. In the repo: **Settings → Pages → Source → Deploy from a branch → main → / (root) → Save**.
4. Add a `CNAME` file containing `hotelclassichills.in` and point the domain's
   DNS to GitHub Pages, so the live site matches the canonical URLs already
   baked into the HTML/schema.

## Still outstanding (not yet built)

- Pasting the actual Bookingjini widget embed code into `booking.html` (see
  above) — this is the one remaining manual step to make booking fully live.
- Everything else the original brief asked for (payment gateway, channel
  manager sync) is handled by Bookingjini itself once the widget is
  connected, since the Booking Engine, Channel Manager and payment methods
  all live in the same Bookingjini account.

## Notes on the photos

- All 16 uploaded photographs are used, each in two WebP sizes
  (a 640px thumbnail and a 1600px full version), totalling under 5MB.
- Room photos are grouped as: **Deluxe** (king bed, wingback chair, balcony),
  **Super Deluxe** (king bed, balcony lounge set, carved wood feature wall),
  **Twin Super Deluxe** (twin beds). Since several photos look visually
  similar, double-check the room-category photo groupings in `rooms.html`
  and `gallery.html` against your actual room numbers, and swap any that
  don't match.
