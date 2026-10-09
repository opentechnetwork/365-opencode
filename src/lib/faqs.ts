export type Faq = { question: string; answer: string };

/**
 * Hand-authored FAQs — home/services/pricing per blueprint §3.
 * Home FAQs are curated here (never generated); area FAQs live in areas.ts.
 */
export const homeFaqs: Faq[] = [
  {
    question: "What types of home repairs do you handle?",
    answer:
      "From quick fixes to full upgrades — tile and backsplash work, flooring, wood and fence projects, kitchen and bath upgrades, general home repairs, and outdoor & safety modifications. No job too small.",
  },
  {
    question: "How quickly can you get to my project?",
    answer:
      "We respond to all inquiries within 24 hours. Most projects can be scheduled within a few business days, and urgent repairs are prioritized.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes — every estimate is free and comes with no obligation. We'll review your project, assess the scope, and provide a clear, detailed estimate before any work begins.",
  },
  {
    question: "Is your work warranted?",
    answer:
      "Every completed project is backed by a 1-year workmanship warranty covering defects in workmanship or installation performed by our team.",
  },
  {
    question: "Can I get an estimate without anyone coming out?",
    answer:
      "Yes. Schedule a Virtual Inspection — hop on a quick video call and we'll assess your project remotely, with an honest recommendation and estimate.",
  },
  {
    question: "Who do you work with?",
    answer:
      "Homeowners, landlords, and property managers across the Dallas–Fort Worth metroplex — including recurring maintenance packages for rental and multi-property portfolios.",
  },
];
