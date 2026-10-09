import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import { NAP } from "@/lib/site";

export const metadata: Metadata = pageSeo({
  title: "Privacy Policy",
  description:
    "Privacy Policy for 365 Residential Services. Learn how we collect, use, and protect your personal information.",
  path: "/privacy",
});

const sections: { heading: string; body: React.ReactNode }[] = [
  {
    heading: "1. Introduction",
    body: (
      <>
        365 Residential Services (&quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;) respects your privacy and is committed to protecting the
        personal information you share with us. This Privacy Policy explains how we
        collect, use, disclose, and safeguard your information when you visit our
        website or use our services.
      </>
    ),
  },
  {
    heading: "2. Information We Collect",
    body: (
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Personal Information:</strong> Name, email address, phone
          number, and mailing address when you submit an estimate request or
          contact us.
        </li>
        <li>
          <strong>Project Information:</strong> Details about your home
          improvement project, service area, and scheduling preferences.
        </li>
        <li>
          <strong>Usage Data:</strong> Information about how you interact with our
          website, including IP address, browser type, pages visited, and time
          spent on pages.
        </li>
        <li>
          <strong>Cookies:</strong> Small data files stored on your device to
          improve your browsing experience.
        </li>
      </ul>
    ),
  },
  {
    heading: "3. How We Use Your Information",
    body: (
      <ul className="list-disc pl-6 space-y-2">
        <li>To respond to your inquiries and provide estimates</li>
        <li>To schedule and deliver our handyman and home improvement services</li>
        <li>
          To communicate with you about your projects and appointments
        </li>
        <li>To improve our website and services</li>
        <li>To send occasional updates about our services (with your consent)</li>
        <li>To comply with legal obligations</li>
      </ul>
    ),
  },
  {
    heading: "4. Information Sharing",
    body: (
      <>
        We do not sell, trade, or rent your personal information to third parties.
        We may share your information with trusted service providers who assist us
        in operating our website and conducting our business, provided they agree
        to keep your information confidential. We may also disclose information
        when required by law or to protect our rights.
      </>
    ),
  },
  {
    heading: "5. Data Security",
    body: (
      <>
        We implement reasonable security measures to protect your personal
        information from unauthorized access, alteration, disclosure, or
        destruction. However, no method of transmission over the Internet or
        electronic storage is 100% secure, and we cannot guarantee absolute
        security.
      </>
    ),
  },
  {
    heading: "6. Third-Party Services",
    body: (
      <>
        Our website may contain links to third-party websites or services,
        including HubSpot (scheduling), PayPal (payments), and analytics providers.
        These third parties have their own privacy policies, and we are not
        responsible for their practices. We encourage you to review their privacy
        policies.
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div className="pt-[146px]">
      <section className="bg-navy py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-gray-300 mt-4">Last updated: March 9, 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-700 leading-relaxed">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{s.heading}</h2>
              {s.body}
            </div>
          ))}

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Your Rights</h2>
            <p className="mb-2">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent where applicable</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              8. Children&apos;s Privacy
            </h2>
            <p>
              Our services are not directed to individuals under the age of 18. We
              do not knowingly collect personal information from children.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will
              be posted on this page with an updated revision date. We encourage
              you to review this policy periodically.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>
                <strong>Phone:</strong> {NAP.phone}
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${NAP.email}`} className="text-brand underline underline-offset-2">
                  {NAP.email}
                </a>
              </li>
              <li>
                <strong>Service Area:</strong> Dallas–Fort Worth, Texas
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
