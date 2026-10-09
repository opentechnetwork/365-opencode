import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { OgImagePath } from "@/lib/seo";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CookieConsentBanner } from "@/components/cookie-consent-banner";
import { Analytics } from "@/components/analytics";
import { SiteJsonLd } from "@/components/site-jsonld";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Handyman & Home Improvement in Dallas-Fort Worth`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Year-round handyman and home improvement services in Dallas-Fort Worth. Expert repairs, renovations, custom carpentry, kitchen and bath upgrades. Request a free estimate today.",
  keywords: [
    "handyman Dallas",
    "home improvement DFW",
    "property maintenance Dallas Fort Worth",
    "residential repairs Texas",
    "kitchen remodel DFW",
    "bathroom renovation Dallas",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    url: SITE_URL,
    images: [{ url: OgImagePath, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SiteJsonLd />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <CookieConsentBanner />
        <Analytics />
      </body>
    </html>
  );
}
