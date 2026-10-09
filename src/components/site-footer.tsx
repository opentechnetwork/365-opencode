import Link from "next/link";
import {
  FOOTER_BLURB,
  FOOTER_LEGAL,
  FOOTER_NAV,
  NAP,
} from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-12">
        {/* Brand */}
        <div className="md:col-span-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/logo.png"
            alt="365 Residential Services"
            className="h-14 w-auto object-contain mb-4 bg-white/95 rounded-[4px] px-3 py-2"
          />
          <p className="text-sm leading-relaxed max-w-md">{FOOTER_BLURB}</p>
          <div className="mt-5 flex flex-col gap-2 text-sm">
            <a href={NAP.phoneHref} className="text-white font-semibold hover:text-white/80">
              {NAP.phone}
            </a>
            <a href={`mailto:${NAP.email}`} className="hover:text-white/80">
              {NAP.email}
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div className="md:col-span-3">
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-sm">
            {FOOTER_NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div className="md:col-span-4">
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Business Hours
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li className="flex justify-between gap-4">
              <span>Mon – Fri</span>
              <span className="text-white/90">8am – 5pm</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Saturday</span>
              <span className="text-white/90">By Appt.</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Sunday</span>
              <span className="text-white/90">Closed</span>
            </li>
          </ul>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mt-6 mb-2">
            Service Area
          </h3>
          <p className="text-sm">{NAP.areaServed}</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>© 2026 365 Residential Services. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {FOOTER_LEGAL.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
          <p className="flex items-center gap-2">
            Built By
            <a
              href="https://www.opentechinnovations.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              Open Tech Innovations
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
