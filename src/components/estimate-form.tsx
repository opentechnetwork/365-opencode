"use client";

import { useState } from "react";
import { HUBSPOT_BOOKING, LEAD_API, NAP } from "@/lib/site";

const AREA_OPTIONS = [
  "Dallas",
  "Irving",
  "Allen",
  "Addison",
  "Plano",
  "Frisco",
  "Arlington",
  "Wylie",
  "Other DFW Area",
];

const TIME_OPTIONS = [
  "Morning (8am–12pm)",
  "Afternoon (12pm–3pm)",
  "Late Afternoon (3pm–5pm)",
  "Anytime",
];

type Status = "idle" | "loading" | "success" | "error";

export function EstimateForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const area = String(data.get("area") ?? "").trim();
    const time = String(data.get("time") ?? "").trim();
    const details = String(data.get("details") ?? "").trim();

    // Compose details exactly like the live site does
    const lines: string[] = [];
    lines.push(`Phone: ${phone}`);
    lines.push(`Service Area: ${area}`);
    lines.push(`Best Time to Contact: ${time}`);
    lines.push("");
    lines.push("Project Details:");
    lines.push(details);

    setStatus("loading");
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 15000);
      const res = await fetch(LEAD_API.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          details: lines.join("\n"),
          knowledge_profile_id: LEAD_API.knowledgeProfileId,
        }),
        signal: ctrl.signal,
      });
      clearTimeout(timer);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white border border-gray-200 rounded-[4px] p-8 text-center">
        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 text-2xl">
          ✓
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Request Received!
        </h3>
        <p className="text-gray-600">
          Thank you — we&apos;ll review your project and get back to you within 24
          hours with a clear, no-surprise estimate.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full border border-gray-300 rounded-[4px] px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-colors";
  const labelCls = "block text-sm font-medium text-gray-700 mb-1.5";

  return (
    <form onSubmit={onSubmit} className="space-y-5 bg-white border border-gray-200/80 rounded-[4px] p-6 sm:p-8">
      <div>
        <label htmlFor="name" className={labelCls}>
          Full Name *
        </label>
        <input id="name" name="name" type="text" required autoComplete="name" className={inputCls} />
      </div>
      <div>
        <label htmlFor="phone" className={labelCls}>
          Phone Number *
        </label>
        <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputCls} />
      </div>
      <div>
        <label htmlFor="email" className={labelCls}>
          Email Address *
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={inputCls} />
      </div>
      <div>
        <label htmlFor="area" className={labelCls}>
          Service Area / City *
        </label>
        <select id="area" name="area" required defaultValue="" className={inputCls}>
          <option value="" disabled>
            Select your area
          </option>
          {AREA_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="time" className={labelCls}>
          Best Time to Contact *
        </label>
        <select id="time" name="time" required defaultValue="" className={inputCls}>
          <option value="" disabled>
            Select a time
          </option>
          {TIME_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="details" className={labelCls}>
          Project Details *
        </label>
        <textarea
          id="details"
          name="details"
          required
          rows={5}
          placeholder="Describe your project — what needs to be done, the scope, any specific materials or timeline preferences..."
          className={inputCls}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-brand" role="alert">
          Something went wrong sending your request. Please try again, or call us
          at {NAP.phone}.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-brand text-white py-4 rounded-[4px] text-lg font-semibold hover:bg-brand-hover transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Submit Estimate Request"}
      </button>
      <p className="text-xs text-gray-500 text-center">
        Prefer a one-on-one conversation?{" "}
        <a
          href={HUBSPOT_BOOKING}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand font-medium underline underline-offset-2"
        >
          Book a Consultation
        </a>
      </p>
    </form>
  );
}
