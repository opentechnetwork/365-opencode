import Link from "next/link";
import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import { areaCards } from "@/lib/content";
import { NAP } from "@/lib/site";

export const metadata: Metadata = pageSeo({
  title: "Service Areas",
  description:
    "Reliable handyman and home repair services across the DFW metroplex — Dallas, Irving, Allen, Addison, Plano, Frisco, Arlington, and Wylie.",
  path: "/areas",
});

export default function AreasPage() {
  return (
    <div className="pt-[146px]">
      {/* Page header */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-red-300 font-semibold text-sm uppercase tracking-wider">
            Service Areas
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 tracking-tight">
            Proudly Serving Dallas–Fort Worth
          </h1>
          <p className="text-gray-300 text-lg mt-4 max-w-2xl">
            Reliable handyman and home repair services across the DFW metroplex.
            Find your city below to learn how we can help.
          </p>
        </div>
      </section>

      {/* Area cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {areaCards.map((a) => (
            <Link
              key={a.slug}
              href={`/areas/${a.slug}`}
              className="group bg-white border border-gray-200/80 rounded-[4px] p-7 hover:border-brand hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-brand transition-colors">
                  {a.city}, TX
                </h2>
                <span className="text-xs font-semibold bg-red-50 text-brand px-2 py-1 rounded-[4px]">
                  {a.stat}
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{a.blurb}</p>
              <span className="text-brand text-sm font-semibold">
                View services in {a.city} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Don't see your city */}
      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-4">
            Don&apos;t See Your City?
          </h2>
          <p className="text-gray-600 mb-8">
            We serve the entire DFW metroplex. Contact us to check availability in
            your area — we&apos;re probably closer than you think.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-brand text-white px-8 py-4 rounded-[4px] text-lg font-semibold hover:bg-brand-hover transition-colors"
            >
              Request an Estimate
            </Link>
            <a
              href={NAP.phoneHref}
              className="border border-gray-300 text-navy px-8 py-4 rounded-[4px] text-lg font-semibold hover:bg-white transition-colors"
            >
              {NAP.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
