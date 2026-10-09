export type AreaFaqs = { question: string; answer: string }[];
export type AreaService = { title: string; description: string };

export type Area = {
  slug: string;                 // e.g. "dallas"
  city: string;                 // e.g. "Dallas"
  metaTitle: string;            // <title> exactly as live
  metaDescription: string;      // meta description exactly as live
  eyebrow: string;              // e.g. "Dallas, TX" (small label above H1)
  h1: string;                   // e.g. "Handyman Services in Dallas"
  heroSub: string;              // paragraph under H1
  ctaLabel: string;             // e.g. "Request an Estimate in Dallas"
  whyEyebrow: string;           // e.g. "Why Dallas Homeowners Choose Us"
  whyTitle: string;             // e.g. "Your Trusted Neighbor for Home Repairs"
  whyParagraphs: string[];      // all <p> in that section, in order
  servicesEyebrow: string;      // e.g. "What We Do"
  servicesTitle: string;        // e.g. "Popular Services in Dallas"
  services: AreaService[];      // 6 cards, title + description verbatim
  neighborhoodsEyebrow: string; // e.g. "Neighborhoods"
  neighborhoodsTitle: string;   // e.g. "Dallas Areas We Serve"
  neighborhoodsIntro: string;   // paragraph under the title
  neighborhoods: string[];      // all tag chips in order
  glanceTitle: string;          // e.g. "Dallas at a Glance"
  glance: { label: string; value: string }[]; // e.g. label "Homes served", value "350,000+"
  faqEyebrow: string;           // e.g. "FAQ"
  faqTitle: string;             // e.g. "Common Questions — Dallas"
  faqs: AreaFaqs;               // 5 Q&As verbatim
  ctaTitle: string;             // e.g. "Ready to Get Started in Dallas?"
  ctaSub: string;               // paragraph under CTA title
};

export const areas: Area[] = [
  {
    slug: "dallas",
    city: "Dallas",
    metaTitle: "Handyman Services in Dallas, TX | 365 Residential Services",
    metaDescription:
      "Trusted handyman and home repair services in Dallas, TX. From Uptown to Oak Cliff — drywall, tile, fencing, kitchen upgrades & more. 24hr response, 1-year warranty.",
    eyebrow: "Dallas, TX",
    h1: "Handyman Services in Dallas",
    heroSub:
      "From Uptown high-rises to Oak Cliff bungalows — reliable repairs, honest pricing, and craftsmanship backed by a 1-year warranty.",
    ctaLabel: "Request an Estimate in Dallas",
    whyEyebrow: "Why Dallas Homeowners Choose Us",
    whyTitle: "Your Trusted Neighbor for Home Repairs",
    whyParagraphs: [
      "Dallas is our home base. We know the city inside and out — from the century-old Craftsman homes in Lakewood to the modern builds going up in the Design District. Every neighborhood has its own character, and every home has its own needs.",
      "As a locally owned business, we understand the challenges Dallas homeowners face: summer heat that warps fences and cracks foundations, storm damage that can't wait, and the constant upkeep that comes with owning a home in Texas.",
      "That's why we offer year-round service with 24-hour response times, transparent pricing, and a 1-year warranty on every job. No surprise costs. No runaround. Just quality work from people who care about doing it right.",
    ],
    servicesEyebrow: "What We Do",
    servicesTitle: "Popular Services in Dallas",
    services: [
      {
        title: "Drywall & Patching",
        description:
          "Hole repairs, water damage patches, and texture matching for Dallas homes old and new.",
      },
      {
        title: "Tile & Backsplash",
        description:
          "Kitchen and bathroom tile work — from cracked tile replacement to full backsplash installs.",
      },
      {
        title: "Fence & Gate Repair",
        description:
          "Texas storms take a toll on fences. We repair, reinforce, and replace panels and gates.",
      },
      {
        title: "Kitchen & Bath Upgrades",
        description:
          "Fixture swaps, cabinet hardware, vanity installs, and faucet replacements to modernize your space.",
      },
      {
        title: "Flooring Repairs",
        description:
          "Hardwood, laminate, and vinyl repairs plus trim and baseboard finishing throughout your home.",
      },
      {
        title: "General Home Repairs",
        description:
          "Door adjustments, hardware installs, light carpentry, and the everyday fixes that keep your home running.",
      },
    ],
    neighborhoodsEyebrow: "Neighborhoods",
    neighborhoodsTitle: "Dallas Areas We Serve",
    neighborhoodsIntro:
      "We cover every corner of Dallas. Whether you're in a historic neighborhood or a new development, we're just a call away.",
    neighborhoods: [
      "Uptown",
      "Oak Cliff",
      "Lake Highlands",
      "Preston Hollow",
      "North Dallas",
      "Deep Ellum",
      "Bishop Arts",
      "Lakewood",
      "East Dallas",
      "Highland Park area",
      "University Park area",
      "Casa Linda",
    ],
    glanceTitle: "Dallas at a Glance",
    glance: [
      { label: "Homes served", value: "350,000+" },
      { label: "Common home styles", value: "Ranch, Craftsman, Modern" },
      { label: "Top request", value: "Fence & drywall repair" },
      { label: "Response time", value: "Within 24 hours" },
      { label: "Warranty", value: "1 year on all work" },
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Common Questions — Dallas",
    faqs: [
      {
        question: "Do you serve all of Dallas?",
        answer:
          "Yes — we cover the entire city of Dallas including Uptown, Downtown, Oak Cliff, Lake Highlands, Preston Hollow, North Dallas, Deep Ellum, and all surrounding neighborhoods.",
      },
      {
        question: "How quickly can you start a project in Dallas?",
        answer:
          "Most Dallas projects can be scheduled within 3–5 business days. Urgent repairs are prioritized and we respond to all inquiries within 24 hours.",
      },
      {
        question: "Do you handle older Dallas homes?",
        answer:
          "Absolutely. Many Dallas neighborhoods have homes built in the 1950s–1980s that need specialized attention. We have experience with older construction, plaster walls, original trim work, and period-appropriate repairs.",
      },
      {
        question: "Are you licensed and insured?",
        answer:
          "We focus on small-to-medium residential repairs that don't require permits or inspections. For jobs needing licensed professionals, we'll recommend trusted experts or adjust the scope accordingly.",
      },
      {
        question: "Do you offer free estimates?",
        answer:
          "Yes — every estimate is free and comes with no obligation. We'll review your project, assess the scope, and provide a clear, detailed estimate before any work begins.",
      },
    ],
    ctaTitle: "Ready to Get Started in Dallas?",
    ctaSub:
      "Tell us about your project and we'll have an estimate to you within 24 hours.",
  },
  {
    slug: "irving",
    city: "Irving",
    metaTitle: "Handyman Services in Irving, TX | 365 Residential Services",
    metaDescription:
      "Professional handyman and home repair in Irving, TX. Serving Las Colinas, Valley Ranch & all Irving neighborhoods. Tile, fencing, drywall, kitchen upgrades & more.",
    eyebrow: "Irving, TX",
    h1: "Handyman Services in Irving",
    heroSub:
      "From Las Colinas condos to Valley Ranch family homes — dependable repairs with transparent pricing and a 1-year warranty.",
    ctaLabel: "Request an Estimate in Irving",
    whyEyebrow: "Why Irving Homeowners Choose Us",
    whyTitle: "Reliable Service, Right Next Door",
    whyParagraphs: [
      "Irving sits at the heart of DFW, and it's one of our closest and most-served areas. Whether you own a townhome in Las Colinas, a family home in Valley Ranch, or a rental property in South Irving, we understand the specific maintenance needs of this diverse city.",
      "Irving's mix of housing — from 1970s ranch-style homes to modern Las Colinas developments — means every project is different. We bring the right tools, materials, and experience to handle whatever your home needs.",
      "With 24-hour response times and clear upfront pricing, we make home repair simple. No guesswork, no surprises — just quality work backed by our 1-year warranty.",
    ],
    servicesEyebrow: "What We Do",
    servicesTitle: "Popular Services in Irving",
    services: [
      {
        title: "Tile & Grout Work",
        description:
          "Irving's humid climate can wear down grout fast. We repair, regrout, and install tile for kitchens and bathrooms.",
      },
      {
        title: "Fence Repair & Replacement",
        description:
          "Wind and rain hit Irving hard. We fix leaning posts, replace damaged panels, and reinforce gates.",
      },
      {
        title: "Drywall Patching",
        description:
          "From nail pops to water stains — clean, invisible drywall repairs with texture matching.",
      },
      {
        title: "Kitchen & Bath Fixtures",
        description:
          "Faucet swaps, vanity installs, cabinet hardware updates, and fixture upgrades throughout your home.",
      },
      {
        title: "Door & Hardware Fixes",
        description:
          "Sticking doors, broken locks, weatherstripping, and hardware replacements for better security and function.",
      },
      {
        title: "Outdoor & Deck Repairs",
        description:
          "Deck board replacement, railing fixes, staining, and outdoor living space maintenance.",
      },
    ],
    neighborhoodsEyebrow: "Neighborhoods",
    neighborhoodsTitle: "Irving Areas We Serve",
    neighborhoodsIntro:
      "We serve every part of Irving — from the urban core to the quiet residential streets. If you're in Irving, we're nearby.",
    neighborhoods: [
      "Las Colinas",
      "Valley Ranch",
      "South Irving",
      "North Irving",
      "MacArthur Park",
      "Plymouth Park",
      "Cottonwood Valley",
      "Lake Carolyn area",
      "Irving Arts District",
      "Bear Creek",
    ],
    glanceTitle: "Irving at a Glance",
    glance: [
      { label: "Homes served", value: "85,000+" },
      { label: "Common home styles", value: "Ranch, Townhome, Modern" },
      { label: "Top request", value: "Tile & fence repair" },
      { label: "Response time", value: "Within 24 hours" },
      { label: "Warranty", value: "1 year on all work" },
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Common Questions — Irving",
    faqs: [
      {
        question: "Do you serve all of Irving?",
        answer:
          "Yes — we cover all of Irving including Las Colinas, Valley Ranch, South Irving, North Irving, and the areas around Irving Mall and MacArthur Boulevard.",
      },
      {
        question: "How fast can you get to Irving?",
        answer:
          "Irving is one of our closest service areas. Most projects can be scheduled within 2–4 business days, and we respond to all inquiries within 24 hours.",
      },
      {
        question: "What are common repair needs in Irving?",
        answer:
          "Irving homes frequently need fence repairs after storms, tile and grout work due to humidity, and general maintenance for the mix of 1970s–2000s era homes throughout the city.",
      },
      {
        question: "Do you work in Las Colinas condos and townhomes?",
        answer:
          "Absolutely. We handle interior repairs for condos and townhomes in Las Colinas — drywall, fixtures, flooring, and more. We're mindful of HOA guidelines and shared-wall considerations.",
      },
      {
        question: "Do you offer free estimates?",
        answer:
          "Yes — every estimate is free and comes with no obligation. We'll assess your project and provide a clear, detailed breakdown before any work begins.",
      },
    ],
    ctaTitle: "Ready to Get Started in Irving?",
    ctaSub:
      "Tell us about your project and we'll have an estimate to you within 24 hours.",
  },
  {
    slug: "allen",
    city: "Allen",
    metaTitle: "Handyman Services in Allen, TX | 365 Residential Services",
    metaDescription:
      "Trusted handyman and home repair services in Allen, TX. Drywall, tile, fencing, kitchen & bath upgrades, and more. 24hr response, transparent pricing, 1-year warranty.",
    eyebrow: "Allen, TX",
    h1: "Handyman Services in Allen",
    heroSub:
      "Family-friendly neighborhoods deserve dependable home care. Expert repairs with transparent pricing and a 1-year warranty.",
    ctaLabel: "Request an Estimate in Allen",
    whyEyebrow: "Why Allen Homeowners Choose Us",
    whyTitle: "Quality That Matches Allen's Standards",
    whyParagraphs: [
      "Allen is one of Collin County's most sought-after communities — known for its top-rated schools, family-friendly neighborhoods, and well-maintained homes. Homeowners here take pride in their properties, and they deserve a handyman service that matches that standard.",
      "Whether you're in a newer build near Star Creek or an established home in Twin Creeks, we bring the same meticulous craftsmanship to every project. From kitchen upgrades to fence repairs after a North Texas storm, we treat your home with the care it deserves.",
      "Allen families are busy — that's why we make home repair simple. On time, on budget, and backed by our 1-year warranty. No surprises, no runaround.",
    ],
    servicesEyebrow: "What We Do",
    servicesTitle: "Popular Services in Allen",
    services: [
      {
        title: "Kitchen & Bath Upgrades",
        description:
          "Allen homeowners love refreshing their kitchens and bathrooms. We handle fixture swaps, backsplashes, vanities, and hardware updates.",
      },
      {
        title: "Fence & Gate Repair",
        description:
          "North Texas storms are tough on fences. We repair storm damage, replace rotted panels, and reinforce sagging gates throughout Allen.",
      },
      {
        title: "Drywall & Texture",
        description:
          "Settling cracks, nail pops, and water stains — clean, invisible drywall repairs with texture matching for Allen's newer and established homes.",
      },
      {
        title: "Tile & Backsplash",
        description:
          "Precision tile work for showers, kitchen backsplashes, and floors — matching the quality Allen homeowners expect.",
      },
      {
        title: "Flooring & Baseboard",
        description:
          "Laminate, vinyl, and hardwood repairs plus baseboard replacement and trim finishing throughout your home.",
      },
      {
        title: "Custom Shelving & Carpentry",
        description:
          "Built-in shelves, closet organization, crown molding, and custom wood projects tailored to your space.",
      },
    ],
    neighborhoodsEyebrow: "Neighborhoods",
    neighborhoodsTitle: "Allen Areas We Serve",
    neighborhoodsIntro:
      "We serve every neighborhood in Allen — from master-planned communities to established residential streets throughout the city.",
    neighborhoods: [
      "Twin Creeks",
      "The Villages of Allen",
      "Watters Creek",
      "Montgomery Farm",
      "Star Creek",
      "Ridgeview",
      "Allen Heights",
      "Stacy Ridge",
      "Greenwood",
      "Chaparral Park",
      "Bethany Lakes",
      "Heritage",
    ],
    glanceTitle: "Allen at a Glance",
    glance: [
      { label: "Homes served", value: "40,000+" },
      { label: "Common home styles", value: "Suburban, New Build, Ranch" },
      { label: "Top request", value: "Kitchen & bath upgrades" },
      { label: "Response time", value: "Within 24 hours" },
      { label: "Warranty", value: "1 year on all work" },
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Common Questions — Allen",
    faqs: [
      {
        question: "Do you serve all of Allen?",
        answer:
          "Yes — we cover all of Allen including Twin Creeks, The Villages of Allen, Watters Creek, Montgomery Farm, Star Creek, and all neighborhoods throughout the city.",
      },
      {
        question: "What types of homes do you work on in Allen?",
        answer:
          "Everything from established 1990s–2000s homes to newer luxury builds. Allen has a great mix of housing and we're experienced with all of it.",
      },
      {
        question: "How quickly can you start a project in Allen?",
        answer:
          "Most Allen projects can be scheduled within 3–5 business days. We respond to all inquiries within 24 hours and prioritize urgent repairs.",
      },
      {
        question: "Do you work with Allen HOAs?",
        answer:
          "Yes. Many Allen neighborhoods have HOA guidelines for exterior work. We're familiar with common requirements and ensure our work meets community standards.",
      },
      {
        question: "Do you offer free estimates?",
        answer:
          "Yes — every estimate is free and comes with no obligation. We'll assess your project and provide a clear, detailed breakdown before any work begins.",
      },
    ],
    ctaTitle: "Ready to Get Started in Allen?",
    ctaSub:
      "Tell us about your project and we'll have an estimate to you within 24 hours.",
  },
  {
    slug: "addison",
    city: "Addison",
    metaTitle: "Handyman Services in Addison, TX | 365 Residential Services",
    metaDescription:
      "Professional handyman and home repair in Addison, TX. Condos, townhomes & single-family — drywall, tile, fixtures, kitchen upgrades & more. 24hr response, 1-year warranty.",
    eyebrow: "Addison, TX",
    h1: "Handyman Services in Addison",
    heroSub:
      "From Addison Circle condos to single-family homes — reliable repairs with honest pricing and a 1-year warranty.",
    ctaLabel: "Request an Estimate in Addison",
    whyEyebrow: "Why Addison Residents Choose Us",
    whyTitle: "Big-City Living, Neighborhood Service",
    whyParagraphs: [
      "Addison packs a lot of personality into a small footprint. With its thriving restaurant scene, walkable neighborhoods, and mix of condos, townhomes, and single-family homes, it's one of DFW's most unique communities.",
      "The housing here is diverse — from modern Addison Circle lofts to established homes along Belt Line. Each property has its own maintenance needs, and we bring the right experience to handle them all.",
      "As a locally operated business, we understand Addison's pace. Quick turnarounds, clean work, and clear communication — that's what busy Addison residents need, and that's what we deliver. Every job backed by our 1-year warranty.",
    ],
    servicesEyebrow: "What We Do",
    servicesTitle: "Popular Services in Addison",
    services: [
      {
        title: "Condo & Townhome Repairs",
        description:
          "Addison's vibrant condo and townhome community needs interior specialists. We handle drywall, fixtures, flooring, and more — mindful of shared walls and HOA rules.",
      },
      {
        title: "Kitchen & Bath Upgrades",
        description:
          "Modernize your space with fixture swaps, backsplash installs, vanity replacements, and cabinet hardware updates.",
      },
      {
        title: "Drywall & Paint Prep",
        description:
          "Clean drywall repairs with texture matching — from nail pops and settling cracks to water damage patches.",
      },
      {
        title: "Tile & Backsplash",
        description:
          "Bathroom and kitchen tile repairs, backsplash installations, and regrouting to refresh worn surfaces.",
      },
      {
        title: "Fixture & Hardware Installs",
        description:
          "Light fixtures, ceiling fans, towel bars, shelving, and cabinet hardware — installed right the first time.",
      },
      {
        title: "Flooring & Trim",
        description:
          "Laminate, vinyl, and hardwood repairs plus baseboard and trim installation for a polished finish.",
      },
    ],
    neighborhoodsEyebrow: "Neighborhoods",
    neighborhoodsTitle: "Addison Areas We Serve",
    neighborhoodsIntro:
      "We serve every part of Addison — from the walkable urban core to the quieter residential pockets. If you're in Addison, we're nearby.",
    neighborhoods: [
      "Addison Circle",
      "Vitruvian Park",
      "Belt Line corridor",
      "Midway Road area",
      "Addison Walk",
      "Montecito",
      "Surveyor Boulevard area",
      "Quorum Drive area",
      "Village on the Parkway area",
      "Keller Springs area",
    ],
    glanceTitle: "Addison at a Glance",
    glance: [
      { label: "Homes served", value: "8,000+" },
      { label: "Common home styles", value: "Condo, Townhome, Modern" },
      { label: "Top request", value: "Interior repairs & upgrades" },
      { label: "Response time", value: "Within 24 hours" },
      { label: "Warranty", value: "1 year on all work" },
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Common Questions — Addison",
    faqs: [
      {
        question: "Do you serve all of Addison?",
        answer:
          "Yes — we cover all of Addison including the Addison Circle area, Vitruvian Park, Belt Line corridor, Midway Road area, and all residential neighborhoods and condo communities.",
      },
      {
        question: "Do you work on condos and townhomes?",
        answer:
          "Absolutely. A large portion of our Addison work is in condos and townhomes. We're experienced with shared-wall considerations, HOA guidelines, and the specific needs of multi-unit living.",
      },
      {
        question: "How quickly can you get to Addison?",
        answer:
          "Addison is one of our closest service areas — right in the heart of DFW. Most projects can be scheduled within 2–4 business days, and we respond to all inquiries within 24 hours.",
      },
      {
        question: "What's the most common repair in Addison?",
        answer:
          "Interior repairs are our top request in Addison — drywall fixes, fixture upgrades, and kitchen/bath refreshes for condos and townhomes looking to modernize.",
      },
      {
        question: "Do you offer free estimates?",
        answer:
          "Yes — every estimate is free and comes with no obligation. We'll assess your project and provide a clear, detailed breakdown before any work begins.",
      },
    ],
    ctaTitle: "Ready to Get Started in Addison?",
    ctaSub:
      "Tell us about your project and we'll have an estimate to you within 24 hours.",
  },
  {
    slug: "plano",
    city: "Plano",
    metaTitle: "Handyman Services in Plano, TX | 365 Residential Services",
    metaDescription:
      "Professional handyman and home repair in Plano, TX. West Plano to East Plano — tile, drywall, fencing, kitchen & bath upgrades. 24hr response, 1-year warranty.",
    eyebrow: "Plano, TX",
    h1: "Handyman Services in Plano",
    heroSub:
      "From West Plano luxury homes to established East Plano neighborhoods — expert repairs with transparent pricing and a 1-year warranty.",
    ctaLabel: "Request an Estimate in Plano",
    whyEyebrow: "Why Plano Homeowners Choose Us",
    whyTitle: "Quality That Matches Plano's Standards",
    whyParagraphs: [
      "Plano consistently ranks as one of the best places to live in Texas — and its homeowners take pride in their properties. Whether you're in a newer West Plano development or a well-established East Plano neighborhood, maintaining your home's value and appearance matters.",
      "We deliver the kind of quality Plano homeowners expect: meticulous craftsmanship, clean work sites, and attention to the details that make a difference. From kitchen upgrades to fence repairs, every project gets our full attention.",
      "Many of our Plano clients are busy professionals and families who need reliable help they can trust. That's exactly what we provide — on time, on budget, and backed by our 1-year warranty.",
    ],
    servicesEyebrow: "What We Do",
    servicesTitle: "Popular Services in Plano",
    services: [
      {
        title: "Kitchen & Bath Upgrades",
        description:
          "Plano homeowners love modernizing their kitchens and baths. We handle fixture swaps, backsplashes, vanities, and hardware updates.",
      },
      {
        title: "Tile & Stone Work",
        description:
          "From shower tile repairs to full kitchen backsplash installs — precision tile work for Plano's well-maintained homes.",
      },
      {
        title: "Fence & Gate Repair",
        description:
          "North Texas weather is tough on fences. We repair storm damage, replace rotted panels, and reinforce sagging gates.",
      },
      {
        title: "Drywall & Texture",
        description:
          "Seamless drywall patches, water damage repairs, and texture matching for a flawless finish.",
      },
      {
        title: "Flooring & Baseboard",
        description:
          "Laminate, vinyl, and hardwood repairs plus baseboard replacement and trim finishing.",
      },
      {
        title: "Custom Shelving & Carpentry",
        description:
          "Built-in shelves, closet organization, crown molding, and custom wood projects tailored to your space.",
      },
    ],
    neighborhoodsEyebrow: "Neighborhoods",
    neighborhoodsTitle: "Plano Areas We Serve",
    neighborhoodsIntro:
      "We serve every neighborhood in Plano — from the bustling Legacy corridor to quiet residential streets throughout the city.",
    neighborhoods: [
      "West Plano",
      "East Plano",
      "Legacy West",
      "Willow Bend",
      "Preston Meadow",
      "Deerfield",
      "Kings Ridge",
      "Lakeside on Preston",
      "Shepard's Glen",
      "Glenlake Park",
      "Arbor Hills area",
      "Old Downtown Plano",
    ],
    glanceTitle: "Plano at a Glance",
    glance: [
      { label: "Homes served", value: "110,000+" },
      { label: "Common home styles", value: "Suburban, Luxury, Ranch" },
      { label: "Top request", value: "Kitchen & bath upgrades" },
      { label: "Response time", value: "Within 24 hours" },
      { label: "Warranty", value: "1 year on all work" },
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Common Questions — Plano",
    faqs: [
      {
        question: "Do you serve all of Plano?",
        answer:
          "Yes — we cover all of Plano including West Plano, East Plano, Legacy West, Shops at Legacy area, Willow Bend, Preston Meadow, and all neighborhoods in between.",
      },
      {
        question: "What types of homes do you work on in Plano?",
        answer:
          "Everything from 1980s established homes in East Plano to newer luxury builds in West Plano. Each area has different maintenance needs and we're experienced with all of them.",
      },
      {
        question: "How quickly can you start a project in Plano?",
        answer:
          "Most Plano projects can be scheduled within 3–5 business days. We respond to all inquiries within 24 hours and prioritize urgent repairs.",
      },
      {
        question: "Do you work with Plano HOAs?",
        answer:
          "Yes. Many Plano neighborhoods have HOA guidelines for exterior work. We're familiar with common requirements and ensure our work meets community standards.",
      },
      {
        question: "Do you offer free estimates?",
        answer:
          "Yes — every estimate is free and comes with no obligation. We'll assess your project and provide a clear, detailed breakdown before any work begins.",
      },
    ],
    ctaTitle: "Ready to Get Started in Plano?",
    ctaSub:
      "Tell us about your project and we'll have an estimate to you within 24 hours.",
  },
  {
    slug: "frisco",
    city: "Frisco",
    metaTitle: "Handyman Services in Frisco, TX | 365 Residential Services",
    metaDescription:
      "Trusted handyman and home repair in Frisco, TX. New builds and established homes — tile, fencing, drywall, kitchen upgrades & more. 24hr response, 1-year warranty.",
    eyebrow: "Frisco, TX",
    h1: "Handyman Services in Frisco",
    heroSub:
      "From new builds to established homes — expert finishing, repairs, and upgrades with transparent pricing and a 1-year warranty.",
    ctaLabel: "Request an Estimate in Frisco",
    whyEyebrow: "Why Frisco Homeowners Choose Us",
    whyTitle: "Keeping Up with Frisco's Growth",
    whyParagraphs: [
      "Frisco is one of the fastest-growing cities in America, and that growth brings a unique set of home repair needs. New construction homes need finishing touches that builders skip. Established homes need ongoing maintenance as neighborhoods mature.",
      "We help Frisco homeowners on both sides — whether you just moved into a brand-new build and want to upgrade the builder-grade fixtures, or you've been in your home for years and it's time for some updates.",
      "Our approach is simple: show up on time, give you an honest price, do quality work, and stand behind it with a 1-year warranty. That's what Frisco families deserve.",
    ],
    servicesEyebrow: "What We Do",
    servicesTitle: "Popular Services in Frisco",
    services: [
      {
        title: "New Home Finishing",
        description:
          "Frisco's rapid growth means new homes that need finishing touches — shelving, hardware, fixture upgrades, and custom details builders skip.",
      },
      {
        title: "Fence Installation & Repair",
        description:
          "New developments and established neighborhoods alike need quality fencing. We install, repair, and reinforce.",
      },
      {
        title: "Tile & Backsplash",
        description:
          "Upgrade builder-grade tile with custom backsplashes, shower tile, and flooring that matches your style.",
      },
      {
        title: "Drywall & Paint Prep",
        description:
          "Nail pops, settling cracks, and water stains are common in newer Frisco homes. We fix them with invisible precision.",
      },
      {
        title: "Kitchen & Bath Upgrades",
        description:
          "Swap out builder-grade fixtures, add under-cabinet lighting, upgrade hardware, and modernize your space.",
      },
      {
        title: "Smart Home & Mounting",
        description:
          "TV mounting, smart doorbell installation, security camera setup, and tech-friendly home upgrades.",
      },
    ],
    neighborhoodsEyebrow: "Neighborhoods",
    neighborhoodsTitle: "Frisco Areas We Serve",
    neighborhoodsIntro:
      "From master-planned communities to downtown Frisco, we serve every neighborhood in this fast-growing city.",
    neighborhoods: [
      "Stonebriar",
      "Newman Village",
      "Phillips Creek Ranch",
      "Panther Creek",
      "Starwood",
      "Frisco Square",
      "Richwoods",
      "Hollyhock",
      "Lexington Country",
      "The Grove",
      "Edgewood",
      "Frisco Lakes",
    ],
    glanceTitle: "Frisco at a Glance",
    glance: [
      { label: "Homes served", value: "75,000+" },
      { label: "Common home styles", value: "New Build, Suburban, Luxury" },
      { label: "Top request", value: "New home finishing" },
      { label: "Response time", value: "Within 24 hours" },
      { label: "Warranty", value: "1 year on all work" },
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Common Questions — Frisco",
    faqs: [
      {
        question: "Do you serve all of Frisco?",
        answer:
          "Yes — we cover all of Frisco including Stonebriar, Newman Village, Phillips Creek Ranch, Panther Creek, Starwood, Frisco Square, and all new developments throughout the city.",
      },
      {
        question: "Do you work on new construction homes?",
        answer:
          "Absolutely. Many Frisco homeowners call us to add the finishing touches builders don't include — custom shelving, upgraded hardware, backsplashes, and fixture swaps that make a new house feel like home.",
      },
      {
        question: "How quickly can you start in Frisco?",
        answer:
          "Most Frisco projects can be scheduled within 3–5 business days. We respond to all inquiries within 24 hours.",
      },
      {
        question: "What's the most common repair in Frisco?",
        answer:
          "New home finishing and fence work are our top requests in Frisco, followed by tile upgrades and drywall repairs from settling.",
      },
      {
        question: "Do you offer free estimates?",
        answer:
          "Yes — every estimate is free and comes with no obligation. We'll assess your project and provide a clear, detailed breakdown before any work begins.",
      },
    ],
    ctaTitle: "Ready to Get Started in Frisco?",
    ctaSub:
      "Tell us about your project and we'll have an estimate to you within 24 hours.",
  },
  {
    slug: "arlington",
    city: "Arlington",
    metaTitle: "Handyman Services in Arlington, TX | 365 Residential Services",
    metaDescription:
      "Reliable handyman and home repair in Arlington, TX. From established neighborhoods to new builds — drywall, tile, fencing, kitchen upgrades & more. 24hr response, 1-year warranty.",
    eyebrow: "Arlington, TX",
    h1: "Handyman Services in Arlington",
    heroSub:
      "Dependable home repairs for Arlington families, landlords, and property managers — honest pricing, quality work, 1-year warranty.",
    ctaLabel: "Request an Estimate in Arlington",
    whyEyebrow: "Why Arlington Homeowners Choose Us",
    whyTitle: "Honest Work for a Growing City",
    whyParagraphs: [
      "Arlington is one of the largest cities in DFW and one of the most diverse when it comes to housing. From the established neighborhoods near UTA to the newer developments in Viridian, every corner of Arlington has its own character — and its own repair needs.",
      "We're the handyman service Arlington homeowners call when they want the job done right without the runaround. From drywall patches and fence repairs to full property make-ready services, we handle the work efficiently and at a fair price.",
      "For landlords and property managers, we offer recurring maintenance plans with priority scheduling — so your properties stay in top condition and your tenants stay happy.",
    ],
    servicesEyebrow: "What We Do",
    servicesTitle: "Popular Services in Arlington",
    services: [
      {
        title: "Drywall & Interior Repairs",
        description:
          "Arlington's mix of older and newer homes means a wide range of drywall needs. We patch, repair, and texture-match seamlessly.",
      },
      {
        title: "Fence & Gate Repair",
        description:
          "Texas storms take a toll on fences. We replace panels, reinforce posts, fix gates, and install new fencing throughout Arlington.",
      },
      {
        title: "Tile & Backsplash",
        description:
          "Kitchen and bathroom tile work — from cracked tile replacement to full backsplash installs and regrouting.",
      },
      {
        title: "Kitchen & Bath Upgrades",
        description:
          "Fixture swaps, cabinet hardware, vanity installs, and faucet replacements to modernize your space.",
      },
      {
        title: "Flooring & Trim",
        description:
          "Hardwood, laminate, and vinyl repairs plus baseboard and trim finishing for a polished look.",
      },
      {
        title: "Property Make-Ready",
        description:
          "Landlords and property managers trust us for fast, thorough tenant turnover repairs and maintenance across Arlington.",
      },
    ],
    neighborhoodsEyebrow: "Neighborhoods",
    neighborhoodsTitle: "Arlington Areas We Serve",
    neighborhoodsIntro:
      "From established neighborhoods to newer developments, we serve all of Arlington and surrounding areas.",
    neighborhoods: [
      "North Arlington",
      "South Arlington",
      "East Arlington",
      "Viridian",
      "Entertainment District",
      "Dalworthington Gardens area",
      "Pantego area",
      "Lake Arlington area",
      "Park Row",
      "Interlochen",
      "Rush Creek",
      "Woodland West",
    ],
    glanceTitle: "Arlington at a Glance",
    glance: [
      { label: "Homes served", value: "145,000+" },
      { label: "Common home styles", value: "Ranch, Suburban, New Build" },
      { label: "Top request", value: "Drywall & fence repair" },
      { label: "Response time", value: "Within 24 hours" },
      { label: "Warranty", value: "1 year on all work" },
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Common Questions — Arlington",
    faqs: [
      {
        question: "Do you serve all of Arlington?",
        answer:
          "Yes — we cover all of Arlington including North Arlington, South Arlington, East Arlington, the Entertainment District, Viridian, and all neighborhoods throughout the city.",
      },
      {
        question: "What types of homes are common in Arlington?",
        answer:
          "Arlington has a great mix — 1960s–1990s ranch-style homes, newer suburban developments, townhomes, and some historic properties. We're experienced with all of them.",
      },
      {
        question: "Do you offer property management services?",
        answer:
          "We work with several landlords and property managers in Arlington. We offer recurring maintenance plans, priority scheduling, and fast tenant turnover repairs.",
      },
      {
        question: "How quickly can you start in Arlington?",
        answer:
          "Most Arlington projects can be scheduled within 3–5 business days. We respond to all inquiries within 24 hours.",
      },
      {
        question: "Do you offer free estimates?",
        answer:
          "Yes — every estimate is free and comes with no obligation. We'll assess your project and provide a clear, detailed breakdown before any work begins.",
      },
    ],
    ctaTitle: "Ready to Get Started in Arlington?",
    ctaSub:
      "Tell us about your project and we'll have an estimate to you within 24 hours.",
  },
  {
    slug: "wylie",
    city: "Wylie",
    metaTitle: "Handyman Services in Wylie, TX | 365 Residential Services",
    metaDescription:
      "Trusted handyman and home repair in Wylie, TX. Growing community, quality homes — drywall, tile, fencing, kitchen upgrades & more. 24hr response, 1-year warranty.",
    eyebrow: "Wylie, TX",
    h1: "Handyman Services in Wylie",
    heroSub:
      "A growing community deserves growing support. Expert repairs and finishing for Wylie's homes — with a 1-year warranty.",
    ctaLabel: "Request an Estimate in Wylie",
    whyEyebrow: "Why Wylie Homeowners Choose Us",
    whyTitle: "Keeping Up with Wylie's Growth",
    whyParagraphs: [
      "Wylie is one of the fastest-growing communities in the DFW area, and that growth brings a unique set of home repair needs. New construction homes need finishing touches that builders skip. Established homes need ongoing maintenance as neighborhoods mature.",
      "We help Wylie homeowners on both sides — whether you just moved into a brand-new build and want to upgrade the builder-grade fixtures, or you've been in your home for years and it's time for some updates.",
      "Our approach is simple: show up on time, give you an honest price, do quality work, and stand behind it with a 1-year warranty. That's what Wylie families deserve.",
    ],
    servicesEyebrow: "What We Do",
    servicesTitle: "Popular Services in Wylie",
    services: [
      {
        title: "New Home Finishing",
        description:
          "Wylie's rapid growth means new homes that need finishing touches — shelving, hardware, fixture upgrades, and custom details builders skip.",
      },
      {
        title: "Fence Installation & Repair",
        description:
          "New developments and established neighborhoods alike need quality fencing. We install, repair, and reinforce throughout Wylie.",
      },
      {
        title: "Drywall & Paint Prep",
        description:
          "Nail pops, settling cracks, and water stains are common in newer Wylie homes. We fix them with invisible precision.",
      },
      {
        title: "Tile & Backsplash",
        description:
          "Upgrade builder-grade tile with custom backsplashes, shower tile, and flooring that matches your style.",
      },
      {
        title: "Kitchen & Bath Upgrades",
        description:
          "Swap out builder-grade fixtures, add under-cabinet lighting, upgrade hardware, and modernize your space.",
      },
      {
        title: "Deck & Outdoor Repairs",
        description:
          "Wylie's outdoor lifestyle means decks and patios get heavy use. We repair, stain, and restore them to like-new condition.",
      },
    ],
    neighborhoodsEyebrow: "Neighborhoods",
    neighborhoodsTitle: "Wylie Areas We Serve",
    neighborhoodsIntro:
      "From master-planned communities to established neighborhoods, we serve every part of Wylie and surrounding areas.",
    neighborhoods: [
      "Alanis Ranch",
      "Birmingham Farms",
      "Inspiration",
      "Woodbridge",
      "Stone Creek",
      "Park at Waterford",
      "Westgate",
      "Kreymer",
      "Southfork",
      "Wylie Crossing",
      "Saddlebrook",
      "Lakeside at Woodcreek",
    ],
    glanceTitle: "Wylie at a Glance",
    glance: [
      { label: "Homes served", value: "22,000+" },
      { label: "Common home styles", value: "New Build, Suburban, Ranch" },
      { label: "Top request", value: "New home finishing" },
      { label: "Response time", value: "Within 24 hours" },
      { label: "Warranty", value: "1 year on all work" },
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Common Questions — Wylie",
    faqs: [
      {
        question: "Do you serve all of Wylie?",
        answer:
          "Yes — we cover all of Wylie including Alanis Ranch, Birmingham Farms, Inspiration, Woodbridge, Stone Creek, Park at Waterford, and all neighborhoods throughout the city.",
      },
      {
        question: "Do you work on new construction homes?",
        answer:
          "Absolutely. Many Wylie homeowners call us to add the finishing touches builders don't include — custom shelving, upgraded hardware, backsplashes, and fixture swaps that make a new house feel like home.",
      },
      {
        question: "How quickly can you start in Wylie?",
        answer:
          "Most Wylie projects can be scheduled within 3–5 business days. We respond to all inquiries within 24 hours.",
      },
      {
        question: "What's the most common repair in Wylie?",
        answer:
          "New home finishing and fence work are our top requests in Wylie, followed by tile upgrades and drywall repairs from settling.",
      },
      {
        question: "Do you offer free estimates?",
        answer:
          "Yes — every estimate is free and comes with no obligation. We'll assess your project and provide a clear, detailed breakdown before any work begins.",
      },
    ],
    ctaTitle: "Ready to Get Started in Wylie?",
    ctaSub:
      "Tell us about your project and we'll have an estimate to you within 24 hours.",
  },
];
