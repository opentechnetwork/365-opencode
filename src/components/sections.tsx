import Link from "next/link";
import { HUBSPOT_BOOKING, NAP } from "@/lib/site";

/** "Ready to Get Started?" CTA band (navy) — used on home + services. */
export function CtaBand({
  title = "Ready to Get Started?",
  body = "Tell us about your project and we'll get back to you within 24 hours with a clear, no-surprise estimate.",
  withVirtual = true,
}: {
  title?: string;
  body?: string;
  withVirtual?: boolean;
}) {
  return (
    <section className="bg-navy py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          {title}
        </h2>
        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">{body}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-brand text-white px-8 py-4 rounded-[4px] text-lg font-semibold hover:bg-brand-hover transition-colors"
          >
            Request an Estimate
          </Link>
          <a
            href={HUBSPOT_BOOKING}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white/30 text-white px-8 py-4 rounded-[4px] text-lg font-medium hover:bg-white/10 transition-colors"
          >
            Book a Consultation
          </a>
        </div>
        {withVirtual && (
          <div className="mt-8 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-[4px] px-5 py-3 flex-wrap justify-center">
            <span className="text-white/90 text-sm">Can&apos;t meet in person?</span>
            <a
              href={HUBSPOT_BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-300 text-sm font-semibold hover:text-emerald-200 underline underline-offset-2 transition-colors"
            >
              Schedule a Virtual Inspection →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

/** Hand-authored FAQ section with FAQPage JSON-LD (blueprint §3). */
export function FaqSection({
  eyebrow = "FAQ",
  title,
  faqs,
  id = "faq",
}: {
  eyebrow?: string;
  title: string;
  faqs: { question: string; answer: string }[];
  id?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <section id={id} className="py-24 bg-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-brand font-semibold text-sm uppercase tracking-wider">
            {eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 tracking-tight">
            {title}
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((f) => (
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
  );
}

/** Phone CTA used next to estimate buttons */
export function PhoneLink({ className = "" }: { className?: string }) {
  return (
    <a href={NAP.phoneHref} className={className}>
      {NAP.phone}
    </a>
  );
}
