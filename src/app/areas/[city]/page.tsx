import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { areas } from "@/lib/areas";
import { pageSeo } from "@/lib/seo";
import { NAP } from "@/lib/site";

type Props = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return areas.map((a) => ({ city: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const area = areas.find((a) => a.slug === city);
  if (!area) return {};
  return pageSeo({
    title: area.metaTitle,
    description: area.metaDescription,
    path: `/areas/${area.slug}`,
  });
}

export default async function AreaPage({ params }: Props) {
  const { city } = await params;
  const area = areas.find((a) => a.slug === city);
  if (!area) notFound();

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.365residentialservices.com/" },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://www.365residentialservices.com/areas" },
      { "@type": "ListItem", position: 3, name: `${area.city}, TX`, item: `https://www.365residentialservices.com/areas/${area.slug}` },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: area.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div className="pt-[146px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, "\\u003c") }}
      />

      {/* Hero */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-red-300 font-semibold text-sm uppercase tracking-wider">
            {area.eyebrow}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 tracking-tight">
            {area.h1}
          </h1>
          <p className="text-gray-300 text-lg mt-4 max-w-2xl">{area.heroSub}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-brand text-white px-7 py-3.5 rounded-[4px] text-lg font-semibold hover:bg-brand-hover transition-colors text-center"
            >
              {area.ctaLabel}
            </Link>
            <a
              href={NAP.phoneHref}
              className="border border-white/30 text-white px-7 py-3.5 rounded-[4px] text-lg font-medium hover:bg-white/10 transition-colors text-center"
            >
              {NAP.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Why this city */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-brand font-semibold text-sm uppercase tracking-wider">
            {area.whyEyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 tracking-tight mb-6">
            {area.whyTitle}
          </h2>
          <div className="space-y-5 text-gray-600 leading-relaxed">
            {area.whyParagraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Popular services */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-brand font-semibold text-sm uppercase tracking-wider">
              {area.servicesEyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 tracking-tight">
              {area.servicesTitle}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {area.services.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-gray-200/80 rounded-[4px] p-7"
              >
                <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="text-brand font-semibold hover:underline underline-offset-4"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* Neighborhoods + at a glance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-brand font-semibold text-sm uppercase tracking-wider">
              {area.neighborhoodsEyebrow}
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3 tracking-tight mb-4">
              {area.neighborhoodsTitle}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {area.neighborhoodsIntro}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {area.neighborhoods.map((n) => (
                <span
                  key={n}
                  className="bg-surface border border-gray-200 rounded-[4px] px-3.5 py-2 text-sm text-gray-700"
                >
                  {n}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-surface border border-gray-200/80 rounded-[4px] p-7">
            <h3 className="text-xl font-bold text-gray-900 mb-5">
              {area.glanceTitle}
            </h3>
            <dl className="space-y-3">
              {area.glance.map((g) => (
                <div
                  key={g.label}
                  className="flex justify-between gap-4 border-b border-gray-200 pb-3 last:border-0 last:pb-0"
                >
                  <dt className="text-sm text-gray-500">{g.label}</dt>
                  <dd className="text-sm font-semibold text-gray-900 text-right">
                    {g.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-brand font-semibold text-sm uppercase tracking-wider">
              {area.faqEyebrow}
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3 tracking-tight">
              {area.faqTitle}
            </h2>
          </div>
          <div className="space-y-4">
            {area.faqs.map((f) => (
              <details
                key={f.question}
                className="group bg-white border border-gray-200/80 rounded-[4px] p-5 sm:p-6"
              >
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4 text-base sm:text-lg font-semibold text-gray-900">
                  {f.question}
                  <span className="text-brand shrink-0 mt-1 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            {area.ctaTitle}
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            {area.ctaSub}
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
              className="border-2 border-white/30 text-white px-8 py-4 rounded-[4px] text-lg font-medium hover:bg-white/10 transition-colors"
            >
              {NAP.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
