"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import {
  CONSENT_ACCEPTED_EVENT,
  CONSENT_DECLINED_EVENT,
  CONSENT_STORAGE_KEY,
} from "@/lib/site";

type Consent = "accepted" | "declined" | null;

function readConsent(): Consent {
  try {
    const v = localStorage.getItem(CONSENT_STORAGE_KEY);
    return v === "accepted" || v === "declined" ? v : null;
  } catch {
    return null;
  }
}

function subscribe(onChange: () => void): () => void {
  // Our own consent writes (same-document localStorage writes do not fire
  // the `storage` event), plus cross-tab changes.
  window.addEventListener(CONSENT_ACCEPTED_EVENT, onChange);
  window.addEventListener(CONSENT_DECLINED_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CONSENT_ACCEPTED_EVENT, onChange);
    window.removeEventListener(CONSENT_DECLINED_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

/**
 * Cookie consent banner (new — live site has none; required to gate GA4/Clarity).
 * Stores 'accepted' | 'declined' under CONSENT_STORAGE_KEY.
 * On 'accepted' dispatches CONSENT_ACCEPTED_EVENT so the Analytics loader
 * initializes immediately for this session.
 *
 * Visibility is derived from the consent store via useSyncExternalStore:
 * SSR snapshot is null-hidden, the client re-renders with the real value.
 */
export function CookieConsentBanner() {
  const consent = useSyncExternalStore(subscribe, readConsent, () => null);

  const decide = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, value);
    } catch {
      /* storage unavailable — banner simply stays for this page view */
    }
    window.dispatchEvent(
      new Event(
        value === "accepted" ? CONSENT_ACCEPTED_EVENT : CONSENT_DECLINED_EVENT,
      ),
    );
  };

  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6"
    >
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-[4px] shadow-lg p-5 sm:p-6">
        <p className="text-sm text-gray-600 leading-relaxed">
          We use cookies and similar technologies (Google Analytics and Microsoft
          Clarity) to understand how our website is used and to improve your
          experience. You can accept all cookies or decline non-essential ones.{" "}
          <Link href="/privacy" className="text-brand font-medium underline underline-offset-2">
            Privacy Policy
          </Link>
        </p>
        <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-end">
          <button
            type="button"
            onClick={() => decide("declined")}
            className="px-5 py-2.5 rounded-[4px] text-sm font-semibold border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="px-5 py-2.5 rounded-[4px] text-sm font-semibold bg-brand text-white hover:bg-brand-hover transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
