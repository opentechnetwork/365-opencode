import {
  NAP,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import { jsonLd } from "@/lib/seo";

/**
 * Sitewide JSON-LD graph: Organization + WebSite + HomeAndConstructionBusiness
 * (service-area business — no GBP / no street address, per client intake).
 * Page-level JSON-LD links to the same @id.
 */
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/img/logo.png`,
      description:
        "Year-round handyman and home improvement services for homeowners, landlords, and property managers across Dallas–Fort Worth.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: NAP.phone,
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": ORG_ID },
    },
    {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${ORG_ID}#local`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/img/logo.png`,
      telephone: NAP.phone,
      email: NAP.email,
      parentOrganization: { "@id": ORG_ID },
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 32.7767,
          longitude: -96.797,
        },
        geoRadius: "80km",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "08:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "17:00",
          description: "By appointment only",
        },
      ],
      slogan: "Quality craftsmanship you can trust, 365 days a year.",
      priceRange: "$$",
    },
  ],
};

export function SiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd(graph) }}
    />
  );
}
