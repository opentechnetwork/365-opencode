# 365 Residential Services — Rebuild Handoff

Next.js 16 rebuild of `https://www.365residentialservices.com` with full SEO/AEO
and consent-gated analytics. Built for parity with the live site, then improved
where the live site was missing essentials.

## Stack

- Next.js 16.4 (App Router, Turbopack, `cacheComponents`, `partialPrefetching`)
- React 19, TypeScript, Tailwind CSS v4
- No CMS — all copy is hand-authored data modules under `src/lib/`

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes prerendered)
npm run start    # serve the production build
npm run lint     # eslint
```

## What was preserved (do NOT change)

| Item | Value |
|---|---|
| Lead endpoint | `POST https://alluring-encouragement-production.up.railway.app/public/lead_v3` |
| `knowledge_profile_id` | `b1dedfc3-cbca-401d-8b92-7de69df7d35a` |
| Payload shape | `{ email, name, details, knowledge_profile_id }` |
| Phone | (469) 616-0326 |
| Email | support@openwebcommunications.com |
| HubSpot booking | https://meetings.hubspot.com/support2204 |
| GA4 Measurement ID | `G-BTFF3X8G58` |
| Microsoft Clarity ID | `vu8bi9e31h` |

All constants live in `src/lib/site.ts`.

## What was added (live site lacked these)

- `sitemap.xml`, `robots.txt` (AI crawlers explicitly allowed), `public/llms.txt`
- Per-page titles/descriptions + canonical URLs + OG/Twitter metadata
- JSON-LD: Organization, WebSite, HomeAndConstructionBusiness (service-area, no
  street address), FAQPage, Service, BreadcrumbList
- Cookie consent banner with consent-gated GA4 + Clarity (Accept All / Decline)
- Branded 1200×630 OG image (`public/og-image.jpg`) and web manifest

## Analytics behavior (verified)

- Fresh visitor: no tags, no cookies, banner shown.
- Accept All: GA4 + Clarity load, `dataLayer` receives `arguments` objects (never
  arrays), a single `page_view` fires, `_ga` cookie set.
- Decline: nothing loads, no cookies.
- Returning visitor (accepted): loads automatically, no banner, exactly one
  `page_view` on initial load.
- Client-side navigation: one `config`, one `page_view` per route, correct
  `page_title` (no full reload, no duplicates).

## Client action checklist (cutover)

1. **Create the GitHub repo** and push this project:
   ```bash
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. **Import to Vercel** (or connect the repo). Framework preset: Next.js. No env
   vars required.
3. **Google Search Console** — create the property for the domain, choose the
   **HTML file** verification method, and send me the token file name (e.g.
   `google1234abcd.html`). I'll add it to `public/` before the domain cutover.
4. **DNS cutover** — point the domain to Vercel when asked. Apex must redirect
   to `https://www` (the current live setup redirects to plain `http://www`,
   which should be corrected to HTTPS during cutover).
5. **Microsoft Clarity / GA4** — no action; existing IDs are reused.
6. **Google Business Profile** — currently none. If one is created later, send
   the official NAP + categories so the LocalBusiness schema can be aligned.

## Verification status

| Check | Result |
|---|---|
| `npm run build` | ✅ 22 routes, static/PPR |
| `tsc --noEmit` | ✅ clean |
| `npm run lint` | ✅ clean |
| All routes 200 / 404 | ✅ |
| sitemap (15 URLs), robots, llms.txt, og-image, manifest | ✅ 200 |
| Unique titles + canonicals per page | ✅ |
| Consent matrix (fresh/accept/decline/returning/SPA) | ✅ |
| Lead POST payload (intercepted, not sent) | ✅ exact contract |

## Notes

- Area copy was verified byte-for-byte against the live HTML (516 strings, all 8
  cities) — including the deliberate Addision "Why **Residents** Choose Us"
  wording, which differs from the other cities.
- Site is light-theme only, matching the live site (which has no theme toggle).
- The old Sintra CDN images were **re-hosted** under `public/img/` so the site
  does not depend on the Sintra account.
