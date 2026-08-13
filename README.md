# Hotel Classic Hills — Website

Plain HTML/CSS/JS site, ready for GitHub Pages. No build step required.

## Before you publish — replace the placeholder contact details

I did not have your real phone number, email, or exact address for this hotel,
so every phone/WhatsApp link currently points to the placeholder
**+91 90000 00000** and email **stay@hotelclassichills.com**.

Replace these in all four HTML files (`index.html`, `rooms.html`, `gallery.html`,
`contact.html`) before going live:

- Find `910000000000` → replace with your WhatsApp number in international
  format, no `+` or spaces (e.g. `919812345678`).
- Find `+91 90000 00000` → replace with your number formatted for display.
- Find `stay@hotelclassichills.com` → replace with your real email.
- In `contact.html`, update the address block and the Google Maps embed URL
  (`src="https://www.google.com/maps?q=..."`) with your exact address.
- Update `https://www.hotelclassichills.com/` (canonical URLs, JSON-LD) once
  you know your real domain/GitHub Pages URL.

## File structure

```
index.html          Homepage
rooms.html           Deluxe / Super Deluxe / Twin Super Deluxe room detail + galleries
gallery.html          Full categorised photo gallery with lightbox
contact.html         Contact info + map
css/style.css        All styles (design tokens at the top of the file)
js/main.js            Mobile nav, lightbox, gallery filters
images/               Your real hotel photos, converted to WebP in two sizes:
                       *-thumb.webp (640px, for grids/srcset)
                       *.webp        (1600px, full size)
```

## Publish on GitHub Pages

1. Create a new repository (e.g. `hotel-classic-hills`).
2. Upload every file in this folder, **keeping the same folder structure**
   (`css/`, `js/`, `images/` must stay as subfolders).
3. In the repo: **Settings → Pages → Source → Deploy from a branch → main → / (root) → Save**.
4. Your site will be live at `https://<your-username>.github.io/hotel-classic-hills/`
   within a couple of minutes.
5. Optional: add a `CNAME` file with your custom domain if you have one, and
   point your domain's DNS to GitHub Pages.

## Notes on the photos

- All 16 of your uploaded photographs are used, each in two WebP sizes
  (a 640px thumbnail and a 1600px full version), totalling under 5MB.
- Room photos are grouped as: **Deluxe** (king bed, wingback chair, balcony),
  **Super Deluxe** (king bed, balcony lounge set, carved wood feature wall),
  **Twin Super Deluxe** (twin beds). Since several photos look visually
  similar, double-check the room-category photo groupings in `rooms.html`
  and `gallery.html` against your actual room numbers, and swap any that
  don't match.
