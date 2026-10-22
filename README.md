# Tochhawng Data

Public data dashboards for Mizoram: jobs and recruitment, government portals,
budget, health, education, agriculture, rural development, roads, population,
elections and public safety.

Built with Next.js 16 (App Router), Tailwind CSS 4 and Recharts.

## Running locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Project layout

```
app/
  data/          one file per dashboard: stats, chart series and sources
  components/    shared UI (StatCard, Panel, BarList, TrendChart, JobsBoard, ...)
  lib/format.ts  date and number formatting
  <section>/page.tsx
```

Every page reads its numbers from `app/data/`, so updating a figure never
means touching layout code.

## Theme

The site has a light and a dark theme with a Mizo red accent. Colours are
CSS variables in `app/globals.css` (light values on `:root`, dark values under
`[data-theme="dark"]`), exposed to Tailwind as `bg-surface`, `text-ink`,
`text-accent` and so on. Change a colour there and every page follows. The
header button switches theme and remembers the choice; otherwise the
reader's device setting is used.

## Updating data

- **Recruitment notices:** add or edit entries in `recruitments` in
  `app/data/jobs.ts`. Use ISO dates (`2026-11-09`) for `lastDate`. The jobs
  board marks a notice Open or Closed from today's date in India, so old
  notices close by themselves.
- **Government portals:** add to `portals` in `app/data/portals.ts`. Give new
  launches a `launched` date and they appear in the launch timeline and on the
  home page.
- **What's new feed:** add to the top of `app/data/updates.ts`.
- **Last updated date:** change `lastUpdated` in `app/data/sections.ts`.
- **New dashboard:** add it to `sections` in `app/data/sections.ts` and it
  appears in the navigation, footer and home page grid.

Every dashboard lists its sources. Add a source to the page's `...Sources`
array whenever you add a number.
