# Fyrre — Magazine Website

A React (Vite) + Tailwind implementation of the **Fyrre Magazine** frontpage, based on the [Figma design](https://www.figma.com/design/1RuOKvGqWJ1pP3FCW82foV/Fyrre---Magazine-Website---Webflow-Template--Community-?node-id=3-116).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview   # preview production build
```

## Structure

- **Header** — Logo, nav (Magazine, Authors, Podcast), social links
- **Hero** — “Art & Life” banner
- **News Ticker** — Scrolling “Newsletter+++” strip
- **Lead Article** — “Don’t close your eyes” with image and meta
- **Articles** — Article list + sidebar (Print magazine, Most Popular, Newsletter)
- **Podcasts** — Episode cards with cover, title, date, duration
- **Authors** — Author cards with avatar, name, job, city
- **Footer** — Newsletter ticker, signup, nav columns, copyright, social

Typography uses **DM Sans** (Google Fonts). Layout follows the Figma max width (1520px) and spacing where applicable.
