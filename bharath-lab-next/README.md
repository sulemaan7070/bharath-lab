# Bharath Lab (Next.js)

Diagnostic lab website built with **Next.js (App Router)**, **GSAP**, **Swiper** and **react-icons**.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Where to change things

| I want to change...                         | Edit this file                  |
| ------------------------------------------- | ------------------------------- |
| Phone/WhatsApp numbers, messages, Instagram, location, tagline | `src/data/site.js` |
| Organ pages and their tests                 | `src/data/organs.js`            |
| Full body packages                          | `src/data/packages.js`          |
| Most Booked Tests (which tests, reports time) | `src/data/mostBooked.js` |
| Hero slides                                 | `src/data/hero.js`              |
| Equipment cards                             | `src/data/equipment.js`         |
| Gallery photos and captions                 | `src/data/gallery.js`           |
| Counter numbers (10,000+ and 50+)           | `src/data/stats.js`             |
| Client reviews                              | `src/data/reviews.js`           |
| Order of sections on the home page          | `src/app/page.jsx`              |
| Colours (light and dark mode)               | `src/app/globals.css`           |

Photos live in `public/images/`. Add a new organ in `organs.js` and its page
`/tests/<slug>` is created automatically (add an illustration to `OrganIcon.jsx`,
or it falls back to the flask).

## Folder structure

```
src/
  app/               pages: layout, home, /tests/[organ], not-found
  components/
    layout/          Header, Footer, WhatsAppFab
    home/            Hero, TestSearch, QuickActions, HealthRisks, Packages,
                     Stats, Equipment(+Card), Gallery, Reviews
    tests/           TestCard, TestGrid, OrganPanel, OrganTests
    cart/            CartDrawer
    ui/              OrganIcon, Counter, ArrowButton, CarouselDots, SectionHeading, Toast
  context/           CartContext, ToastContext, Providers
  data/              all content (plain arrays, no JSX)
  hooks/             useLocalStorage
  lib/               gsap setup, animations, whatsapp, formatting, test lookups
```

Every component has its own `*.module.css` next to it, so styles never leak.

## How the libraries are used

- **Swiper**: Hero, Packages (free-scroll rail), Gallery and Reviews. Arrows and dots are
  our own small components (`ArrowButton`, `CarouselDots`) that call the Swiper instance.
- **GSAP**: hero text entrance (`Hero`), count-up on scroll (`Counter`, with ScrollTrigger),
  cart icon wiggle, badge pop and the fly-to-cart dot (`lib/animations.js`).
  Always import GSAP from `@/lib/gsap` so plugins are registered once.
- **react-icons**: Feather (`fi`) and Font Awesome (`fa`) icons for the UI.
  The organ illustrations are custom SVG in `OrganIcon.jsx`.

## Notes

- The floating WhatsApp button shows the cart count and opens the cart. With an empty cart it
  opens a WhatsApp chat with a default message (`WHATSAPP_MESSAGES` in `site.js`).
- "Book Via WhatsApp" and "Book Via Call" sit under the hero (`BookingButtons.jsx`).
- The cart and customer name are saved in `localStorage`. "Send on WhatsApp" opens a
  chat with the order text.
- "Upload prescription", "Download reports" and "Find nearby centre" show demo toasts.
  Connect them to a real backend when you have one.
- Prices show on test and package cards and in the cart. They are left out of the Most Booked cards
  and of the WhatsApp message.
- Animations respect `prefers-reduced-motion`.
- Works with Next 14 and 15 (`await params` is used on the organ page).
