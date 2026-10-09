"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_NAV, NAP } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top utility bar */}
      <div className="bg-navy text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <a href={NAP.phoneHref} className="hover:text-white/80 transition-colors">
              {NAP.phone}
            </a>
            <a
              href={`mailto:${NAP.email}`}
              className="hidden sm:inline hover:text-white/80 transition-colors"
            >
              {NAP.email}
            </a>
          </div>
          <span className="text-white/70">{NAP.hoursShort}</span>
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-[106px] flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center shrink-0" aria-label="365 Residential Services — Home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/logo.png"
              alt="365 Residential Services"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main">
            {MAIN_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[15px] font-medium transition-colors ${
                  pathname === item.href
                    ? "text-brand"
                    : "text-gray-700 hover:text-brand"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href={NAP.phoneHref}
              className="text-[15px] font-semibold text-navy hover:text-brand transition-colors"
            >
              {NAP.phone}
            </a>
            <Link
              href="/contact"
              className="bg-brand text-white px-5 py-2.5 rounded-[4px] text-[15px] font-semibold hover:bg-brand-hover transition-colors"
            >
              Request an Estimate
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-navy"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="md:hidden border-t border-gray-200 bg-white px-6 py-4 flex flex-col gap-4" aria-label="Mobile">
            {MAIN_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`text-base font-medium ${
                  pathname === item.href ? "text-brand" : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a href={NAP.phoneHref} className="text-base font-semibold text-navy">
              {NAP.phone}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="bg-brand text-white px-5 py-3 rounded-[4px] text-base font-semibold text-center hover:bg-brand-hover transition-colors"
            >
              Request an Estimate
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
