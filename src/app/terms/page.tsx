import type { Metadata } from "next";
import { pageSeo } from "@/lib/seo";
import { NAP } from "@/lib/site";

export const metadata: Metadata = pageSeo({
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for 365 Residential Services. Read our terms of service, warranty policy, and liability information.",
  path: "/terms",
});

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-3">{heading}</h2>
      {children}
    </div>
  );
}

export default function TermsPage() {
  return (
    <div className="pt-[146px]">
      <section className="bg-navy py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-gray-300 mt-4">Last updated: March 9, 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-700 leading-relaxed">
          <Section heading="1. Agreement to Terms">
            <p>
              By accessing or using the 365 Residential Services website and
              services, you agree to be bound by these Terms and Conditions. If
              you do not agree with any part of these terms, please do not use our
              website or services.
            </p>
          </Section>

          <Section heading="2. Services">
            <p>
              365 Residential Services provides handyman, home repair,
              maintenance, and renovation services to residential properties in
              the Dallas–Fort Worth metroplex. All services are subject to
              availability, scheduling, and project scope assessment. We reserve
              the right to decline projects that fall outside our scope of
              expertise or require specialized licensing.
            </p>
          </Section>

          <Section heading="3. Estimates & Pricing">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                All estimates are provided free of charge and are non-binding
                until a formal agreement is reached.
              </li>
              <li>
                Pricing is project-based and includes scope, labor, materials, and
                complexity considerations.
              </li>
              <li>
                Final pricing may vary from initial estimates if the project scope
                changes, hidden issues are discovered, or additional materials are
                required.
              </li>
              <li>
                Any changes to scope or pricing will be communicated and approved
                by the client before work proceeds.
              </li>
            </ul>
          </Section>

          <Section heading="4. Workmanship Warranty">
            <p className="mb-3">
              365 Residential Services provides a 1-year workmanship warranty on
              all completed projects. This warranty covers:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>
                Defects in workmanship or installation performed by our team
              </li>
              <li>Repairs or corrections needed due to our work</li>
            </ul>
            <p className="mb-3">This warranty does not cover:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Normal wear and tear</li>
              <li>
                Damage caused by the client, third parties, or natural events
              </li>
              <li>
                Issues with materials not supplied by 365 Residential Services
              </li>
              <li>
                Pre-existing conditions not identified during the initial
                assessment
              </li>
            </ul>
          </Section>

          <Section heading="5. Scheduling & Cancellations">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                We strive to respond to all inquiries within 24 hours on business
                days.
              </li>
              <li>
                Project timelines are estimates and may be affected by materials
                availability, weather conditions, hidden issues, or scope changes.
              </li>
              <li>
                Cancellations should be communicated as early as possible. We
                appreciate at least 24 hours notice for scheduled appointments.
              </li>
            </ul>
          </Section>

          <Section heading="6. Payment Terms">
            <p>
              Payment terms are agreed upon before work begins and may vary by
              project size. We accept payments through PayPal Business. For larger
              projects, phased payment schedules may be arranged. All payments are
              due according to the agreed-upon schedule.
            </p>
          </Section>

          <Section heading="7. Limitation of Liability">
            <p>
              To the fullest extent permitted by law, 365 Residential Services
              shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising from the use of our
              services or website. Our total liability for any claim shall not
              exceed the amount paid by the client for the specific service giving
              rise to the claim.
            </p>
          </Section>

          <Section heading="8. Client Responsibilities">
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide accurate information about the project and property</li>
              <li>Ensure safe and reasonable access to the work area</li>
              <li>
                Disclose any known hazards, structural issues, or special
                conditions
              </li>
              <li>Secure pets and valuables during service visits</li>
              <li>Communicate any concerns or changes promptly</li>
            </ul>
          </Section>

          <Section heading="9. Intellectual Property">
            <p>
              All content on this website, including text, images, logos, and
              design elements, is the property of 365 Residential Services or its
              licensors and is protected by applicable intellectual property laws.
              You may not reproduce, distribute, or use any content without our
              prior written consent.
            </p>
          </Section>

          <Section heading="10. Governing Law">
            <p>
              These Terms and Conditions are governed by and construed in
              accordance with the laws of the State of Texas. Any disputes arising
              from these terms or our services shall be resolved in the courts of
              Dallas County, Texas.
            </p>
          </Section>

          <Section heading="11. Changes to Terms">
            <p>
              We reserve the right to modify these Terms and Conditions at any
              time. Changes will be posted on this page with an updated revision
              date. Continued use of our website or services after changes
              constitutes acceptance of the revised terms.
            </p>
          </Section>

          <Section heading="12. Contact Us">
            <p>If you have questions about these Terms and Conditions, please contact us:</p>
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
          </Section>
        </div>
      </section>
    </div>
  );
}
