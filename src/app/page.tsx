import Link from "next/link";
import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import { HUBSPOT_BOOKING, NAP } from "@/lib/site";
import { homeServices, homeStats } from "@/lib/content";
import { homeFaqs } from "@/lib/faqs";
import { CtaBand, FaqSection } from "@/components/sections";

export const metadata: Metadata = pageSeo({
  title:
    "365 Residential Services | Handyman & Home Improvement in Dallas-Fort Worth",
  description:
    "Year-round handyman and home improvement services in Dallas-Fort Worth. Expert repairs, renovations, custom carpentry, kitchen and bath upgrades. Request a free estimate today.",
  path: "/",
  keywords: [
    "handyman Dallas",
    "home improvement DFW",
    "property maintenance Dallas Fort Worth",
    "residential repairs Texas",
    "kitchen remodel DFW",
    "bathroom renovation Dallas",
  ],
});

const Icon = ({ paths }: { paths: string[] }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {paths.map((d, i) => (
      <g key={i} dangerouslySetInnerHTML={{ __html: d }} />
    ))}
  </svg>
);

export default function HomePage() {
  return (
    <div className="pt-[146px]">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center -mt-[146px] pt-[146px]">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/hero.png"
            alt="Beautiful renovated home in Dallas"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block bg-white/10 text-white text-sm font-medium px-4 py-1.5 rounded-[4px] backdrop-blur-sm border border-white/20">
              Serving Dallas–Fort Worth
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-4">
            <span className="bg-gradient-to-r from-red-400 via-red-300 to-white bg-clip-text text-transparent">
              365
            </span>{" "}
            <span className="text-white">Residential</span>
            <br />
            <span className="text-white">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
            Your home deserves expert care, every day. From quick repairs to full
            renovations — dependable craftsmanship for homeowners, landlords, and
            property managers across DFW.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              href="/contact"
              className="bg-brand text-white px-8 py-4 rounded-[4px] text-lg font-semibold hover:bg-brand-hover transition-colors text-center"
            >
              Request an Estimate
            </Link>
            <a
              href={HUBSPOT_BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-white px-8 py-4 rounded-[4px] text-lg font-medium hover:bg-white/10 transition-colors text-center backdrop-blur-sm"
            >
              Book a Consultation
            </a>
          </div>

          {/* Virtual Inspection card */}
          <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-[4px] p-5 md:p-6 max-w-2xl">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/20 border border-emerald-400/30 rounded-[4px] flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M23 7l-7 5 7 5V7z" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-[4px]">
                    New
                  </span>
                  <span className="text-white font-semibold text-lg">
                    Virtual Inspection
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  Skip the wait — hop on a quick video call and we&apos;ll assess
                  your project remotely. Get an honest recommendation and estimate
                  without scheduling an in-person visit.
                </p>
                <a
                  href={HUBSPOT_BOOKING}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-500 text-white px-5 py-2.5 rounded-[4px] text-sm font-semibold hover:bg-emerald-600 transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M23 7l-7 5 7 5V7z" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                  Schedule a Virtual Inspection
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {homeStats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand mb-1">
                {s.value}
              </div>
              <div className="text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand font-semibold text-sm uppercase tracking-wider">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 tracking-tight">
              Services Built Around Your Home
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              No job too small. We handle the repairs and upgrades that keep your
              property in top shape — quickly, professionally, and at a fair price.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {homeServices.map((s) => (
              <div
                key={s.title}
                className="group bg-white rounded-[4px] shadow-sm hover:shadow-md hover:shadow-red-600/10 border border-gray-200/80 hover:border-red-200 transition-all duration-300"
              >
                <div className="flex items-start gap-5 p-7">
                  <div className="w-12 h-12 rounded-[4px] bg-red-50 text-brand flex items-center justify-center flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                    <Icon paths={s.icon} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-gray-900 mb-1.5">
                      {s.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-[4px] font-semibold hover:bg-navy-hover transition-colors"
            >
              View All Services
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why 365 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/kitchen.jpg" alt="Kitchen renovation" className="rounded-[4px] w-full h-64 object-cover" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/bathroom.jpg" alt="Bathroom upgrade" className="rounded-[4px] w-full h-64 object-cover mt-8" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/craft.jpg" alt="Expert craftsmanship" className="rounded-[4px] w-full h-64 object-cover" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/handyman.jpg" alt="Handyman at work" className="rounded-[4px] w-full h-64 object-cover mt-8" />
          </div>
          <div>
            <span className="text-brand font-semibold text-sm uppercase tracking-wider">
              Why 365
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 tracking-tight mb-6">
              Reliable Service,
              <br />
              Real Craftsmanship
            </h2>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                We started with one toolbelt and one truck — driven by the belief
                that homeowners deserve skilled, trustworthy help available every
                day of the year.
              </p>
              <p>
                Today, we serve the entire Dallas–Fort Worth area with the same
                hands-on approach: transparent pricing, honest timelines, and work
                we stand behind with a 1-year warranty.
              </p>
              <p>
                Whether it&apos;s a quick drywall patch or a full kitchen refresh,
                we treat your home like our own.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-block mt-8 bg-navy text-white px-6 py-3 rounded-[4px] font-semibold hover:bg-navy-hover transition-colors"
            >
              Learn Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        title="Common Questions"
        faqs={homeFaqs}
        id="home-faq"
      />

      {/* CTA */}
      <CtaBand />

      {/* JSON-LD for the home page (links to sitewide graph via same origin) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "365 Residential Services | Handyman & Home Improvement in Dallas-Fort Worth",
            url: "https://www.365residentialservices.com/",
            description:
              "Year-round handyman and home improvement services in Dallas-Fort Worth. Expert repairs, renovations, custom carpentry, kitchen and bath upgrades.",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.365residentialservices.com/" },
              ],
            },
          }).replace(/</g, "\\u003c"),
        }}
      />
      <span className="sr-only">{NAP.phone}</span>
    </div>
  );
}
