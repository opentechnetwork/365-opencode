"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  ANALYTICS,
  CONSENT_ACCEPTED_EVENT,
  CONSENT_STORAGE_KEY,
} from "@/lib/site";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: ((...args: unknown[]) => void) & { q?: unknown[] };
    __crsAnalyticsLoaded?: boolean;
  }
}

/**
 * Consent-gated analytics (Option A): loads ONLY after "Accept All",
 * or on load for returning visitors with 'accepted' stored.
 *
 * CRITICAL (blueprint §5.1): gtag.js processes `arguments` objects only —
 * dataLayer.push(arguments), never push(array). send_page_view:false and
 * manual `page_view` events avoid double counting (§5.8).
 */
function loadAnalytics() {
  if (typeof window === "undefined" || window.__crsAnalyticsLoaded) return;
  window.__crsAnalyticsLoaded = true;

  const GA4_ID = ANALYTICS.ga4MeasurementId;

  // --- GA4 ---
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments); // `arguments` object, NOT the array
  };
  window.gtag("js", new Date());
  window.gtag("config", GA4_ID, { send_page_view: false });
  window.gtag("event", "page_view", {
    page_location: window.location.href,
    page_path: window.location.pathname + window.location.search,
    page_title: document.title,
  });

  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA4_ID)}`;
  document.head.appendChild(s);

  // --- Microsoft Clarity (same consent gate) ---
  window.clarity = window.clarity || function cl() {
    // eslint-disable-next-line prefer-rest-params
    (window.clarity!.q = window.clarity!.q || []).push(arguments);
  };
  const c = document.createElement("script");
  c.async = true;
  c.src = `https://www.clarity.ms/tag/${ANALYTICS.clarityProjectId}`;
  document.head.appendChild(c);
}

export function Analytics() {
  const pathname = usePathname();
  // Skip the first pathname effect run: on returning-visitor loads,
  // loadAnalytics() already fires the initial page_view, so the mount run
  // would double-count it (blueprint §5.8).
  const firstRunRef = useRef(true);

  // Consent check on mount + when "Accept All" is clicked this session
  useEffect(() => {
    const accepted = () => {
      loadAnalytics();
    };
    try {
      if (localStorage.getItem(CONSENT_STORAGE_KEY) === "accepted") accepted();
    } catch {
      /* no storage → stay untagged */
    }
    window.addEventListener(CONSENT_ACCEPTED_EVENT, accepted);
    return () => window.removeEventListener(CONSENT_ACCEPTED_EVENT, accepted);
  }, []);

  // Manual SPA route tracking (config fired with send_page_view:false).
  // The first run is always skipped: the initial page_view is fired once by
  // loadAnalytics() (returning visitor) or by the consent click (fresh
  // visitor) — counting the mount run too would double-count (§5.8).
  // Next swaps document.title AFTER the route commit, so we wait for the
  // <title> mutation (fallback 500ms) before pushing the event.
  useEffect(() => {
    if (firstRunRef.current) {
      firstRunRef.current = false;
      return;
    }
    if (!window.__crsAnalyticsLoaded || !window.gtag) return;

    const initialTitle = document.title;
    let fired = false;
    const fire = () => {
      if (fired) return;
      fired = true;
      window.gtag?.("event", "page_view", {
        page_location: window.location.href,
        page_path: pathname,
        page_title: document.title,
      });
    };

    const observer = new MutationObserver(() => {
      if (document.title !== initialTitle) {
        observer.disconnect();
        window.clearTimeout(timer);
        fire();
      }
    });
    observer.observe(document.head, { childList: true, subtree: true });
    const timer = window.setTimeout(() => {
      observer.disconnect();
      fire();
    }, 500);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
