# SHPE @ El Camino College Website

The website for the El Camino College chapter of the Society of Hispanic Professional Engineers. It's built with
React 19, React Router 8 and Vite 8, and deployed on Vercel.

New to the project? Start with the onboarding guide: [`docs/ONBOARDING.md`](docs/ONBOARDING.md).

## Quick start

Requires Node.js 22.22 or newer.

```bash
npm install
npm run dev      # local dev server at http://localhost:5173
npm run lint     # ESLint
npm run build    # production build into dist/
```

## Where things live

| To change...                         | Edit                                  |
| ------------------------------------ | ------------------------------------- |
| Menu items, social links, form links | `src/data/site.js`                    |
| Executive Cabinet / LeaderSHPE       | `src/data/leadership.js`              |
| Alumni                               | `src/data/alumni.js`                  |
| Gallery albums                       | `src/data/gallery.js`                 |
| Website Team cards                   | `src/data/websiteTeam.js`             |
| Page text                            | `src/pages/*Page.jsx`                 |
| Styles                               | `src/styles/app.css`                  |
| Images                               | `public/images/` (see below)          |

### Images

```text
public/images/
├─ brand/         logos
├─ headshots/     one file per person, named first-last.jpg
├─ gallery/       one folder per event, named YYYY-term-event-name/
└─ placeholders/
```

Use lowercase, hyphenated file names, and resize photos before you add them. Gallery photos should be about 1600 px
on the long edge and headshots about 400 px. Vercel serves files case-sensitively, so `Photo.JPG` and `photo.jpg` are
different files there.
