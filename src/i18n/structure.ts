// Language-neutral site structure: paths, slugs, and data that is not translated.

export const staticPaths = [
  "accommodation",
  "accommodation/apartments",
  "accommodation/hotels",
  "tours",
  "tours/group",
  "tours/private",
  "tours/packages",
  "transportation",
  "transportation/transfers",
  "transportation/hourly",
  "business-events",
  "business-events/venues",
  "business-events/equipment",
  "armenia",
  "armenia/travel-guide",
  "armenia/attractions",
  "armenia/restaurants",
  "armenia/festivals",
  "about",
  "reviews",
  "faq",
  "contacts",
  "blog",
  "terms",
  "privacy",
  "login",
  "register",
  "cart",
] as const;
export type StaticPath = (typeof staticPaths)[number];

export const destinationSlugs = [
  "garni-temple",
  "geghard-monastery",
  "lake-sevan",
  "tatev-monastery",
  "khor-virap-monastery",
  "dilijan",
  "gyumri",
  "noravank-monastery",
  "jermuk",
  "tsaghkadzor",
  "etchmiadzin-cathedral",
  "amberd-fortress",
] as const;
export type DestinationSlug = (typeof destinationSlugs)[number];

export const blogMeta = [
  { slug: "lake-sevan-things-to-do", date: "2026-06-23", readTime: "4-5" },
  { slug: "armenia-hiking", date: "2026-05-26", readTime: "15-17" },
  { slug: "armenia-ecotourism", date: "2026-04-28", readTime: "10-12" },
] as const;
export type BlogSlug = (typeof blogMeta)[number]["slug"];

export const navStructure = [
  {
    id: "accommodation",
    href: "/accommodation",
    children: [
      { id: "whereToStay", href: "/accommodation" },
      { id: "apartments", href: "/accommodation/apartments" },
      { id: "hotels", href: "/accommodation/hotels" },
    ],
  },
  {
    id: "tours",
    href: "/tours",
    children: [
      { id: "findTour", href: "/tours" },
      { id: "groupTours", href: "/tours/group" },
      { id: "privateTours", href: "/tours/private" },
      { id: "tourPackages", href: "/tours/packages" },
    ],
  },
  {
    id: "transportation",
    href: "/transportation",
    children: [
      { id: "selectTransportation", href: "/transportation" },
      { id: "transfers", href: "/transportation/transfers" },
      { id: "hourlyRental", href: "/transportation/hourly" },
    ],
  },
  {
    id: "businessEvents",
    href: "/business-events",
    children: [
      { id: "planEvent", href: "/business-events" },
      { id: "venues", href: "/business-events/venues" },
      { id: "equipment", href: "/business-events/equipment" },
    ],
  },
  {
    id: "armenia",
    href: "/armenia",
    children: [
      { id: "travelGuide", href: "/armenia/travel-guide" },
      { id: "attractions", href: "/armenia/attractions" },
      { id: "restaurants", href: "/armenia/restaurants" },
      { id: "festivals", href: "/armenia/festivals" },
    ],
  },
  {
    id: "company",
    href: "/about",
    children: [
      { id: "about", href: "/about" },
      { id: "reviews", href: "/reviews" },
      { id: "faq", href: "/faq" },
      { id: "contacts", href: "/contacts" },
      { id: "blog", href: "/blog" },
    ],
  },
] as const;

export const footerLinks = [
  { id: "about", href: "/about" },
  { id: "reviews", href: "/reviews" },
  { id: "faq", href: "/faq" },
  { id: "contacts", href: "/contacts" },
  { id: "blog", href: "/blog" },
  { id: "terms", href: "/terms" },
  { id: "privacy", href: "/privacy" },
] as const;

type NavItem = (typeof navStructure)[number];
export type NavId =
  | NavItem["id"]
  | NavItem["children"][number]["id"]
  | (typeof footerLinks)[number]["id"];

export const currencies = ["USD", "AMD", "EUR", "RUB"] as const;

export const contact = {
  phone: "+374 10 54 60 40",
  phoneHref: "tel:+37410546040",
  email: "contact@aritoon.com",
};

export const stats = ["62,000+", "750,000+", "168,000+", "2,200+"] as const;

export const reviewPlatforms = [
  { name: "Tripadvisor", rating: "4.9", count: "16,700+" },
  { name: "Google", rating: "4.9", count: "1,900+" },
  { name: "Facebook", rating: "98%", count: "495+" },
];

// Reviews are shown as the travellers wrote them.
export const reviews = [
  {
    author: "Flora M.",
    country: "GB",
    date: "2026-06-24",
    text: "Excellent tour guided by Nina and gentle, considerate driving. Outmost satisfaction with the whole experience.",
  },
  {
    author: "Adriana B.",
    country: "AR",
    date: "2026-06-24",
    text: "11 fantastic days in Armenia. Everything was perfect — the guides were professional and the hotel was great.",
  },
  {
    author: "Andrey",
    country: "RU",
    date: "2026-06-26",
    text: "The Yerevan city tour flew by — very interesting and informative. Thank you for the quick response!",
  },
];
