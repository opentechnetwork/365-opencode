import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import { HUBSPOT_BOOKING, NAP } from "@/lib/site";
import { EstimateForm } from "@/components/estimate-form";

export const metadata: Metadata = pageSeo({
  title: "Request an Estimate",
  description:
    "Tell us about your project and we will get back to you within 24 hours with a clear, no-surprise estimate. Handyman and home improvement services across Dallas–Fort Worth.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pt-[146px]">
      {/* Page header */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-red-300 font-semibold text-sm uppercase tracking-wider">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 tracking-tight">
            Request an Estimate
          </h1>
          <p className="text-gray-300 text-lg mt-4 max-w-2xl">
            Tell us about your project and we will get back to you within 24 hours
            with a clear, no-surprise estimate.
          </p>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Tell Us About Your Project
            </h2>
            <EstimateForm />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-white border border-gray-200/80 rounded-[4px] p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Info</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-gray-500 mb-1">Phone</p>
                  <a href={NAP.phoneHref} className="font-semibold text-brand">
                    {NAP.phone}
                  </a>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Email</p>
                  <a href={`mailto:${NAP.email}`} className="font-semibold text-brand break-all">
                    {NAP.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200/80 rounded-[4px] p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Business Hours</h3>
              <ul className="space-y-2.5 text-sm">
                <li className="flex justify-between gap-4">
                  <span className="text-gray-600">Mon – Fri</span>
                  <span className="font-medium">8:00am – 5:00pm</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">By Appointment</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200/80 rounded-[4px] p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Book a Consultation
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Prefer a one-on-one conversation? Schedule a consultation to
                discuss your project in detail.
              </p>
              <a
                href={HUBSPOT_BOOKING}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-navy text-white px-5 py-2.5 rounded-[4px] text-sm font-semibold hover:bg-navy-hover transition-colors"
              >
                Book a Consultation
              </a>
            </div>

            <div className="bg-white border border-gray-200/80 rounded-[4px] p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                What Happens Next?
              </h3>
              <ol className="space-y-3 text-sm">
                {[
                  "We review your project details",
                  "We contact you at your preferred time",
                  "You receive a clear, detailed estimate",
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="w-6 h-6 shrink-0 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="text-gray-600">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
