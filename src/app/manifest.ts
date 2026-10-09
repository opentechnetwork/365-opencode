import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description:
      "Year-round handyman and home improvement services in Dallas-Fort Worth.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#c0392b",
    icons: [{ src: "/favicon.ico", sizes: "16x16", type: "image/x-icon" }],
  };
}
