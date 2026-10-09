import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const OgImagePath = "/og-image.jpg";

type PageSeoArgs = {
  title: string;
  description: string;
  /** Path only, e.g. "/services" */
  path: string;
  keywords?: string[];
  /** Prevent indexing (404 utility routes). */
  noIndex?: boolean;
};

/**
 * Per-page metadata helper: canonical to the production origin,
 * OG/Twitter tags, keywords, title template applied via layout.
 */
export function pageSeo({
  title,
  description,
  path,
  keywords,
  noIndex,
}: PageSeoArgs): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [{ url: OgImagePath, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [OgImagePath],
    },
  };
}

/** Serialize JSON-LD safely (scrub `<` per Next.js docs). */
export function jsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
