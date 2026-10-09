/**
 * Hand-authored content data — captured VERBATIM from the live site.
 * Never generate or paraphrase this file's copy (blueprint: parity first).
 */

export type ServiceCard = {
  title: string;
  description: string;
  /** SVG path markup for the card icon (captured from live site) */
  icon: string[];
};

/** Home page — 6 cards ("What We Do / Services Built Around Your Home") */
export const homeServices: ServiceCard[] = [
  {
    title: "Tile & Backsplash",
    description:
      "Repairs, installations, regrouting, and backsplash updates that transform your space.",
    icon: [
      '<rect x="3" y="3" width="7" height="7" rx="1"/>',
      '<rect x="14" y="3" width="7" height="7" rx="1"/>',
      '<rect x="3" y="14" width="7" height="7" rx="1"/>',
      '<rect x="14" y="14" width="7" height="7" rx="1"/>',
    ],
  },
  {
    title: "Flooring",
    description:
      "Small installs, repairs, and trim finishing for hardwood, laminate, and tile.",
    icon: [
      '<path d="M3 21h18"/>',
      '<path d="M3 7v14"/>',
      '<path d="M21 7v14"/>',
      '<path d="M3 7l9-4 9 4"/>',
      '<path d="M9 10v5"/>',
      '<path d="M15 10v5"/>',
      '<path d="M3 14h18"/>',
    ],
  },
  {
    title: "Wood & Fence Work",
    description:
      "Fence repairs, replacements, gate reinforcement, and custom wood projects.",
    icon: [
      '<path d="M4 4h16v4H4z"/>',
      '<path d="M4 8h16v4H4z"/>',
      '<path d="M4 12h16v4H4z"/>',
      '<path d="M4 16h16v4H4z"/>',
      '<path d="M10 4v16"/>',
    ],
  },
  {
    title: "Kitchen & Bath",
    description:
      "Fixture upgrades, cabinet repairs, vanity installs, and full refresh projects.",
    icon: [
      '<path d="M4 4h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z"/>',
      '<path d="M3 10h18"/>',
      '<circle cx="8" cy="7" r="1"/>',
      '<circle cx="12" cy="7" r="1"/>',
      '<path d="M8 14h2"/>',
      '<path d="M14 14h2"/>',
    ],
  },
  {
    title: "General Repairs",
    description:
      "Drywall patching, door fixes, hardware installs, and light carpentry.",
    icon: [
      '<path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>',
    ],
  },
  {
    title: "Outdoor & Safety",
    description:
      "Deck repairs, ramp installs, grab bars, and outdoor enhancements.",
    icon: [
      '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
      '<path d="M9 12l2 2 4-4"/>',
    ],
  },
];

/** /services page — 8 full sections with bullet lists */
export type FullService = {
  title: string;
  description: string;
  bullets: string[];
};

export const servicesPage: FullService[] = [
  {
    title: "Tile & Backsplash",
    description:
      "From cracked tile repairs to full backsplash installations, we handle ceramic, porcelain, and natural stone with precision. Includes regrouting, waterproofing, and finishing details.",
    bullets: [
      "Tile repair & replacement",
      "Backsplash installation",
      "Regrouting & sealing",
      "Shower tile work",
    ],
  },
  {
    title: "Flooring",
    description:
      "Small-area installs, transition strips, baseboard finishing, and repairs for hardwood, laminate, vinyl, and tile flooring.",
    bullets: [
      "Hardwood & laminate repair",
      "Vinyl plank installation",
      "Trim & baseboard finishing",
      "Transition strip work",
    ],
  },
  {
    title: "Wood & Fence Work",
    description:
      "Fence panel replacement, gate reinforcement, post repair, and custom wood projects built to withstand Texas weather.",
    bullets: [
      "Fence repair & replacement",
      "Gate reinforcement",
      "Post repair & setting",
      "Custom wood projects",
    ],
  },
  {
    title: "Kitchen & Bath Upgrades",
    description:
      "Fixture swaps, cabinet hardware, vanity installs, faucet replacements, and full refresh projects that modernize your space.",
    bullets: [
      "Fixture installation",
      "Cabinet & hardware updates",
      "Vanity & countertop installs",
      "Faucet & plumbing fixtures",
    ],
  },
  {
    title: "General Home Repairs",
    description:
      "The everyday fixes that keep your home running smoothly — drywall patches, door adjustments, hardware installs, and light carpentry.",
    bullets: [
      "Drywall patching & repair",
      "Door & lock fixes",
      "Hardware installation",
      "Light carpentry",
    ],
  },
  {
    title: "Outdoor & Safety Modifications",
    description:
      "Deck repairs, wheelchair ramp installs, grab bars, handrails, and outdoor enhancements for safety and accessibility.",
    bullets: [
      "Grab bar installation",
      "Ramp & accessibility mods",
      "Deck repair & staining",
      "Handrail installation",
    ],
  },
  {
    title: "Custom Carpentry",
    description:
      "Built-in shelving, custom trim work, crown molding, and specialty wood projects tailored to your home.",
    bullets: [
      "Built-in shelving",
      "Crown molding",
      "Custom trim work",
      "Specialty wood projects",
    ],
  },
  {
    title: "Property Maintenance",
    description:
      "Recurring maintenance packages for landlords and property managers. Priority scheduling, consistent quality, and reliable support.",
    bullets: [
      "Tenant turnover repairs",
      "Recurring maintenance plans",
      "Priority scheduling",
      "Multi-property support",
    ],
  },
];

export const servicesProcess = [
  {
    step: "1",
    title: "Tell Us About Your Project",
    body: "Submit an estimate request or give us a call. Describe what you need and we'll take it from there.",
  },
  {
    step: "2",
    title: "Get a Clear Estimate",
    body: "We'll review your project and provide a detailed, no-surprise estimate within 24 hours.",
  },
  {
    step: "3",
    title: "We Get to Work",
    body: "Once approved, we schedule and complete the job — on time, on budget, backed by our 1-year warranty.",
  },
];

/** Home stats bar */
export const homeStats = [
  { value: "90–95%", label: "Customer Return Rate" },
  { value: "24hr", label: "Response Time" },
  { value: "365", label: "Days of Service" },
  { value: "1 Year", label: "Workmanship Warranty" },
];

/** /about values */
export const aboutValues = [
  {
    title: "Trust & Transparency",
    body: "Clear upfront estimates, honest timelines, and no surprise costs. We communicate every step of the way.",
  },
  {
    title: "Quality Craftsmanship",
    body: "Every repair and renovation is backed by a 1-year workmanship warranty. We do the job right the first time.",
  },
  {
    title: "Dependable Service",
    body: "We respond within 24 hours and show up when we say we will. Your time matters to us.",
  },
  {
    title: "Year-Round Availability",
    body: "365 days a year means we are here when you need us — including emergencies and off-season projects.",
  },
];

/** /areas index cards */
export const areaCards = [
  {
    slug: "dallas",
    city: "Dallas",
    stat: "350,000+ homes",
    blurb:
      "Our home base and largest service area. From Uptown condos to Oak Cliff bungalows, we handle it all.",
  },
  {
    slug: "irving",
    city: "Irving",
    stat: "85,000+ homes",
    blurb:
      "Serving Las Colinas, Valley Ranch, and neighborhoods throughout Irving with fast, reliable repairs.",
  },
  {
    slug: "allen",
    city: "Allen",
    stat: "40,000+ homes",
    blurb:
      "Family-friendly neighborhoods with top-rated schools. We keep Allen homes in top shape year-round.",
  },
  {
    slug: "addison",
    city: "Addison",
    stat: "8,000+ homes",
    blurb:
      "From Addison Circle condos to single-family homes — interior specialists for this vibrant community.",
  },
  {
    slug: "plano",
    city: "Plano",
    stat: "110,000+ homes",
    blurb:
      "One of DFW's fastest-growing cities. We help Plano homeowners maintain and upgrade their properties.",
  },
  {
    slug: "frisco",
    city: "Frisco",
    stat: "75,000+ homes",
    blurb:
      "Rapid growth means new homes that need finishing touches and established ones that need upkeep. We do both.",
  },
  {
    slug: "arlington",
    city: "Arlington",
    stat: "145,000+ homes",
    blurb:
      "One of DFW's largest cities with diverse housing. Dependable repairs for families, landlords, and property managers.",
  },
  {
    slug: "wylie",
    city: "Wylie",
    stat: "22,000+ homes",
    blurb:
      "A fast-growing community with new builds and established homes. Expert finishing and repairs for Wylie families.",
  },
];
