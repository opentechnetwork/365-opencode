import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { areas } from "@/lib/areas";

const staticPaths = [
  "",
  "/services",
  "/areas",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    ...staticPaths.map((p) => ({
      url: `${SITE_URL}${p}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.8,
    })),
    ...areas.map((a) => ({
      url: `${SITE_URL}/areas/${a.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
