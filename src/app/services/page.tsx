import Link from "next/link";
import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import { servicesPage, servicesProcess } from "@/lib/content";
import { CtaBand } from "@/components/sections";

export const metadata: Metadata = pageSeo({
  title: "Our Services",
  description:
    "Tile, flooring, fence work, kitchen & bath upgrades, general repairs, custom carpentry, and property maintenance across Dallas–Fort Worth — with a 1-year workmanship warranty.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="pt-[146px]">
      {/* Page header */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-red-300 font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 tracking-tight">
            Everything Your Home Needs
          </h1>
          <p className="text-gray-300 text-lg mt-4 max-w-2xl">
            From quick fixes to full upgrades — we handle it all with transparent
            communication and a 1-year workmanship warranty.
          </p>
        </div>
      </section>

      {/* Service detail sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          {servicesPage.map((s) => (
            <div
              key={s.title}
              className="bg-white border border-gray-200/80 rounded-[4px] p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{s.description}</p>
              <ul className="space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <span className="text-brand mt-0.5" aria-hidden="true">
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-brand font-semibold text-sm uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 tracking-tight">
              How It Works
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Getting started is simple. We keep the process clear and
              straightforward so you always know what to expect.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {servicesProcess.map((p) => (
              <div
                key={p.step}
                className="bg-white border border-gray-200/80 rounded-[4px] p-7 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brand text-white text-xl font-bold flex items-center justify-center">
                  {p.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBand
        title="Have a Project in Mind?"
        body="Tell us what you need and we will send you a clear estimate within 24 hours."
        withVirtual={false}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Handyman and home improvement services",
            provider: {
              "@type": "Organization",
              name: "365 Residential Services",
              url: "https://www.365residentialservices.com",
            },
            areaServed: {
              "@type": "City",
              name: "Dallas–Fort Worth",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Home Services",
              itemListElement: servicesPage.map((s) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: s.title, description: s.description },
              })),
            },
          }).replace(/</g, "\\u003c"),
        }}
      />
      <Link href="/contact" className="sr-only">
        Request an Estimate
      </Link>
    </div>
  );
}
