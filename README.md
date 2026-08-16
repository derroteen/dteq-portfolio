# DTEQ Solutions Portfolio

Single-page portfolio built with Next.js 14 (App Router) + Tailwind CSS.
Design concept: "The Ledger" — case studies styled as ledger sheets with
rotated stamp badges that show honest project status (Demo, Delivered,
In Testing, In Development).

## Run it locally

```
npm install
npm run dev
```

Open http://localhost:3000

## Before you deploy, edit these

1. **WhatsApp number** — in `components/Contact.tsx`, replace
   `YOUR_NUMBER_HERE` with your number in international format, no
   spaces or plus sign (e.g. `254712345678`).
2. **Email** — in `components/Contact.tsx`, replace `YOUR_EMAIL_HERE`.
3. **Screenshots** — drop your images into `public/images/` using these
   exact filenames (or update the `imageSrc` paths in `app/page.tsx`):
   - `uae-1.png`
   - `ekb-1.png`
   - `campusvault-1.png`
   - Maseno Swift has no image slot yet since it's not launching soon —
     add one later in `app/page.tsx` the same way the others work.
4. **UAE status** — once the committee decides next week, update the
   `stampLabel`/`stampTone`/`built` text for the UAE case study in
   `app/page.tsx`. If approved and delivered, change `stampTone` to
   `"green"` and `stampLabel` to `"Delivered"`.

## Deploy

Push to GitHub, then import the repo on Vercel — same flow as your other
projects.
