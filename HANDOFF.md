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
3. **Google Search Console** — ✅ **done**: Domain property verified via DNS TXT,
   URL inspected. Remaining: submit
   `https://www.365residentialservices.com/sitemap.xml` and request indexing of
   the homepage. (Do **not** use the GA verification method: GA4 is
   consent-gated, so the tag check would fail.)
4. **DNS cutover** — ✅ **done**: domain now resolves to Vercel and apex does
   `308 → https://www`. (The old live setup redirected to plain `http://www`;
   that is corrected.)
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

## Production cutover — verified on `https://www.365residentialservices.com`

DNS cut over to Vercel (authoritative NS: Namecheap). Full production smoke
test passed on the live domain:

| Check | Result |
|---|---|
| `https://www` | 200, `Server: Vercel`, valid TLS |
| `http://www` → `https://www` | 308 |
| Apex → `https://www` | 308 (the old `→ http://www` redirect bug is fixed) |
| All routes / 404 | ✅ |
| sitemap (15 URLs), robots, llms.txt, og-image, manifest, favicon | ✅ 200 |
| Canonicals + OG image | ✅ production host |
| JSON-LD on `/` | Org, WebSite, HomeAndConstructionBusiness, FAQPage, WebPage, BreadcrumbList, Service |
| Consent matrix (live): fresh / Accept All / Decline / returning / SPA | ✅ (arguments-only dataLayer, single `page_view`, correct `page_title`) |
| Lead form → `…/public/lead_v3` | ✅ exact contract + `knowledge_profile_id` returned |

> Test artifact: one verification lead was submitted during the live test
> (`OpenCode Test`, `opencode-test@example.com`, Dallas). Ignore/delete it in the
> lead backend.

**Done by client:** GSC Domain property verified (DNS TXT) and URL inspected ✅.

## Notes

- Area copy was verified byte-for-byte against the live HTML (516 strings, all 8
  cities) — including the deliberate Addision "Why **Residents** Choose Us"
  wording, which differs from the other cities.
- Site is light-theme only, matching the live site (which has no theme toggle).
- The old Sintra CDN images were **re-hosted** under `public/img/` so the site
  does not depend on the Sintra account.
