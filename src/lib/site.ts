/**
 * Central site constants — the single source of truth for identity, NAP,
 * navigation, analytics, and the lead backend contract.
 *
 * The lead endpoint + knowledge_profile_id MUST NOT change: they keep leads
 * flowing to the same place as the live site.
 */

export const SITE_URL = "https://www.365residentialservices.com";
export const SITE_NAME = "365 Residential Services";

export const NAP = {
  name: SITE_NAME,
  phone: "(469) 616-0326",
  phoneHref: "tel:+14696160326",
  email: "support@openwebcommunications.com",
  /** Service-area business — no public street address (confirmed: no GBP). */
  areaServed: "Dallas–Fort Worth Metroplex, Texas",
  hours: [
    { day: "Monday–Friday", open: "8:00 AM", close: "5:00 PM" },
    { day: "Saturday", open: null, close: null, note: "By Appointment" },
    { day: "Sunday", open: null, close: null, note: "Closed" },
  ],
  hoursShort: "Mon–Fri 8am–5pm · Sat by Appt",
} as const;

export const HUBSPOT_BOOKING = "https://meetings.hubspot.com/support2204";

/**
 * Lead backend contract — captured verbatim from the live site.
 * Endpoint: POST JSON { email, name, details }
 * Do not change without an explicit client instruction.
 */
export const LEAD_API = {
  endpoint:
    "https://alluring-encouragement-production.up.railway.app/public/lead_v3",
  knowledgeProfileId: "b1dedfc3-cbca-401d-8b92-7de69df7d35a",
} as const;

/** Existing tags on the live site, preserved across cutover. */
export const ANALYTICS = {
  ga4MeasurementId: "G-BTFF3X8G58",
  clarityProjectId: "vu8bi9e31h",
} as const;

export const CONSENT_STORAGE_KEY = "crs-cookie-consent";
export const CONSENT_ACCEPTED_EVENT = "crs-consent-accepted";
export const CONSENT_DECLINED_EVENT = "crs-consent-declined";

export type NavItem = { href: string; label: string };

export const MAIN_NAV: NavItem[] = [
  { href: "/services", label: "Services" },
  { href: "/areas", label: "Areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const FOOTER_NAV: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export const FOOTER_LEGAL: NavItem[] = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export const SERVICE_AREA_LINKS: { href: string; label: string }[] = [
  { href: "/areas/dallas", label: "Dallas" },
  { href: "/areas/irving", label: "Irving" },
  { href: "/areas/allen", label: "Allen" },
  { href: "/areas/addison", label: "Addison" },
  { href: "/areas/plano", label: "Plano" },
  { href: "/areas/frisco", label: "Frisco" },
  { href: "/areas/arlington", label: "Arlington" },
  { href: "/areas/wylie", label: "Wylie" },
];

export const FOOTER_BLURB =
  "Year-round handyman and home improvement services for homeowners, landlords, and property managers across Dallas–Fort Worth. Quality craftsmanship you can trust, 365 days a year.";
