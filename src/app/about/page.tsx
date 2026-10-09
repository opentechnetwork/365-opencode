import Link from "next/link";
import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import { aboutValues, areaCards } from "@/lib/content";
import { CtaBand } from "@/components/sections";

export const metadata: Metadata = pageSeo({
  title: "About Us",
  description:
    "Founded on a simple belief: homeowners deserve reliable, skilled help available every day of the year. Meet 365 Residential Services — serving Dallas–Fort Worth.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="pt-[146px]">
      {/* Page header */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-red-300 font-semibold text-sm uppercase tracking-wider">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 tracking-tight">
            One Toolbelt. One Truck.
            <br />
            One Promise.
          </h1>
          <p className="text-gray-300 text-lg mt-4 max-w-2xl">
            365 Residential Services was founded on a simple belief: homeowners
            deserve reliable, skilled help available every day of the year.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand font-semibold text-sm uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 tracking-tight mb-6">
              Built on Doing the Job Right
            </h2>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                The idea for 365 came from seeing how hard it was to find
                trustworthy home repair service — especially during off-seasons and
                emergencies. Too many homeowners were left waiting, overpaying, or
                dealing with shoddy work.
              </p>
              <p>
                We named the company 365 to make a promise: dependable service, 365
                days a year. Quality, transparency, and doing the job right the
                first time.
              </p>
              <p>
                What started with one toolbelt and one truck has grown into a
                trusted team serving homeowners, landlords, and property managers
                across the entire Dallas–Fort Worth metroplex.
              </p>
              <p>
                Led by founder David, our small, hands-on team handles everything
                from quick drywall patches to phased renovation projects — with the
                same care and attention on every job.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/handyman.jpg" alt="Craftsman at work" className="rounded-[4px] w-full h-72 object-cover" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/painting.jpg" alt="Painting and finishing" className="rounded-[4px] w-full h-72 object-cover" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-brand font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 tracking-tight">
              What We Stand For
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {aboutValues.map((v) => (
              <div
                key={v.title}
                className="bg-white border border-gray-200/80 rounded-[4px] p-7"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-brand font-semibold text-sm uppercase tracking-wider">
              Service Area
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 tracking-tight">
              Proudly Serving Dallas–Fort Worth
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              We cover the entire DFW metroplex, with priority service in these
              communities:
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {areaCards.map((a) => (
              <Link
                key={a.slug}
                href={`/areas/${a.slug}`}
                className="bg-surface border border-gray-200 rounded-[4px] px-5 py-2.5 text-sm font-medium text-gray-700 hover:border-brand hover:text-brand transition-colors"
              >
                {a.city}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/areas"
              className="text-brand font-semibold hover:underline underline-offset-4"
            >
              View all service areas →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBand
        title="Let's Talk About Your Project"
        body="We would love to hear what you have in mind. Reach out for a free, no-obligation estimate."
        withVirtual={false}
      />
    </div>
  );
}
