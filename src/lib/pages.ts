import { blogPosts, destinations } from "./data";

export type Section = { heading: string; body: string[] };

export type PageContent = {
  title: string;
  /** Short description used for cards on the parent page and for SEO. */
  summary: string;
  intro?: string;
  meta?: string[];
  sections?: Section[];
  faqs?: { q: string; a: string }[];
  /** Renders an extra built-in block below the content. */
  embed?: "reviews" | "contact";
  /** Hide the "plan your trip" call to action (e.g. on the contacts page). */
  hideCta?: boolean;
};

const staticPages: Record<string, PageContent> = {
  // Accommodation
  accommodation: {
    title: "Where to stay in Armenia",
    summary: "Apartments in Yerevan and hand-picked hotels across Armenia.",
    intro:
      "Whether you want a central apartment in Yerevan or a hotel near the mountains, we help you find a comfortable place to stay that fits your plans and budget.",
    sections: [
      {
        heading: "How booking works",
        body: [
          "Tell us your dates, number of guests, and preferred area. We send you suitable options, confirm availability, and arrange the booking — including airport transfers if you need them.",
        ],
      },
    ],
  },
  "accommodation/apartments": {
    title: "Apartments in Yerevan",
    summary: "Furnished apartments in central Yerevan for short and long stays.",
    intro:
      "Stay like a local in a fully furnished apartment within walking distance of Republic Square, the Cascade, and Northern Avenue.",
    sections: [
      {
        heading: "What's included",
        body: [
          "Apartments come with a kitchen, Wi-Fi, fresh linen, and towels. Daily, weekly, and monthly rates are available.",
          "Our team meets you on arrival, hands over the keys, and is available by phone throughout your stay.",
        ],
      },
    ],
  },
  "accommodation/hotels": {
    title: "Hotels in Armenia",
    summary: "Hotels in Yerevan and the regions, from boutique to business class.",
    intro:
      "From boutique hotels in Yerevan to guesthouses in Dilijan and spa hotels in Jermuk, we work with trusted hotels across the country.",
    sections: [
      {
        heading: "Hotels for every itinerary",
        body: [
          "We can book a single hotel or arrange a chain of stays that matches your tour route, so every night is sorted before you arrive.",
        ],
      },
    ],
  },

  // Tours
  tours: {
    title: "Find your tour",
    summary: "Group tours, private tours, and multi-day packages across Armenia.",
    intro:
      "Explore Armenia's monasteries, mountains, lakes, and wine country with experienced local guides. Join a group, travel privately, or choose a complete package.",
  },
  "tours/group": {
    title: "Group Tours",
    summary: "Daily departures to Armenia's top sights with small groups.",
    intro:
      "Group tours are an easy, affordable way to see the highlights. Tours leave from central Yerevan with a professional guide and comfortable transport.",
    sections: [
      {
        heading: "Popular day trips",
        body: [
          "Garni & Geghard · Lake Sevan & Dilijan · Khor Virap, Areni & Noravank · Etchmiadzin & Zvartnots · Tatev & the Wings of Tatev.",
        ],
      },
    ],
  },
  "tours/private": {
    title: "Private Tours",
    summary: "Tailor-made tours with your own guide, driver, and schedule.",
    intro:
      "Travel at your own pace with a private guide and driver. Choose any route, add stops along the way, and start whenever suits you.",
    sections: [
      {
        heading: "Built around you",
        body: [
          "Private tours suit families, couples, photographers, and anyone with special interests — from wine and food to history and hiking.",
        ],
      },
    ],
  },
  "tours/packages": {
    title: "Tour Packages",
    summary: "Multi-day packages with accommodation, tours, and transfers included.",
    intro:
      "Our packages combine accommodation, guided tours, and transfers into a single itinerary, so you can simply arrive and enjoy Armenia.",
    sections: [
      {
        heading: "Packages for every trip length",
        body: [
          "Choose from short city breaks to week-long journeys covering northern and southern Armenia. Every package can be adjusted to your dates and interests.",
        ],
      },
    ],
  },

  // Transportation
  transportation: {
    title: "Select transportation",
    summary: "Airport transfers, intercity rides, and hourly car rental with a driver.",
    intro:
      "Reliable, comfortable transport with professional drivers — from a single airport pickup to a car and driver for your whole trip.",
  },
  "transportation/transfers": {
    title: "Transfers",
    summary: "Airport and intercity transfers with fixed prices.",
    intro:
      "We meet you at Zvartnots International Airport or anywhere in Armenia and take you directly to your destination, including cross-border transfers to Tbilisi.",
    sections: [
      {
        heading: "Vehicles",
        body: ["Sedans, minivans, and buses are available for individuals and groups of any size."],
      },
    ],
  },
  "transportation/hourly": {
    title: "Hourly Rental",
    summary: "A car with a driver by the hour for business or sightseeing.",
    intro:
      "Rent a car with an experienced driver by the hour — ideal for business meetings, shopping, or exploring Yerevan on your own schedule.",
  },

  // Business events
  "business-events": {
    title: "Plan your event",
    summary: "Conferences, corporate trips, and events organised end to end.",
    intro:
      "We organise conferences, incentive trips, team-building, and corporate events in Armenia — handling venues, equipment, accommodation, and transport.",
  },
  "business-events/venues": {
    title: "Venues",
    summary: "Conference halls, banquet rooms, and unique outdoor venues.",
    intro:
      "From hotel conference halls in Yerevan to wineries and mountain resorts, we find the right venue for your audience and budget.",
  },
  "business-events/equipment": {
    title: "Equipment & Support",
    summary: "Sound, lighting, interpretation, and on-site event staff.",
    intro:
      "We provide audio-visual equipment, simultaneous interpretation, registration desks, and an on-site team to keep your event running smoothly.",
  },

  // Armenia guide
  armenia: {
    title: "Armenia",
    summary: "Everything you need to know before visiting Armenia.",
    intro:
      "One of the oldest Christian nations, Armenia combines ancient monasteries, mountain landscapes, and a warm, food-loving culture.",
  },
  "armenia/travel-guide": {
    title: "Travel Guide",
    summary: "Essential tips and practical answers for planning your trip.",
    intro: "Practical information to help you plan your Armenia adventure.",
    sections: [
      {
        heading: "When to visit",
        body: [
          "Late spring (May–June) and autumn (September–October) offer mild weather and are ideal for sightseeing and hiking. Summers are hot in Yerevan but pleasant in the mountains; winters bring skiing in Tsaghkadzor.",
        ],
      },
      {
        heading: "Money and practicalities",
        body: [
          "The currency is the Armenian dram (AMD). Cards are widely accepted in Yerevan, but carry cash for villages and markets. Electricity is 220V with European-style plugs.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need a visa?",
        a: "Citizens of many countries, including the EU and the US, can visit visa-free. Rules change, so check the latest requirements for your passport before you travel.",
      },
      {
        q: "Is Armenia safe for travellers?",
        a: "Armenia is generally considered a safe and welcoming destination. As anywhere, follow your government's current travel advice.",
      },
    ],
  },
  "armenia/attractions": {
    title: "Attractions & Activities",
    summary: "From Garni Temple and Lake Sevan to hidden gems.",
    intro:
      "Armenia's top destinations are within a few hours of Yerevan. Explore them on a group tour, a private trip, or a multi-day package.",
  },
  "armenia/restaurants": {
    title: "Restaurants & Clubs",
    summary: "The best dining and nightlife across Yerevan and the regions.",
    intro:
      "Armenian cuisine is generous and full of flavour. Yerevan's restaurants, wine bars, and cafés are a big part of any visit.",
    sections: [
      {
        heading: "What to try",
        body: [
          "Khorovats (barbecue), dolma, lavash baked in a tonir oven, ghapama (stuffed pumpkin), and fresh trout from the mountains. Pair them with Areni wine or Armenian brandy.",
        ],
      },
      {
        heading: "Where to go out",
        body: [
          "Northern Avenue, Saryan Street's wine bars, and the area around the Cascade are lively well into the night, especially in summer.",
        ],
      },
    ],
  },
  "armenia/festivals": {
    title: "Festivals & Holidays",
    summary: "Armenia's traditions and cultural events throughout the year.",
    intro: "Plan your trip around one of Armenia's festivals to see local traditions up close.",
    sections: [
      {
        heading: "Highlights through the year",
        body: [
          "Armenian Christmas (6 January) · Trndez, the fire-jumping festival (February) · Vardavar, the water festival (summer) · Independence Day (21 September) · Areni Wine Festival (October) · Erebuni-Yerevan, the city's birthday (October).",
        ],
      },
    ],
  },

  // Company
  about: {
    title: "About Us",
    summary: "A Yerevan travel company welcoming guests since 2002.",
    intro:
      "Aritoon is a travel company in Yerevan specialising in guided tours and day trips in Armenia. We also arrange tour packages, transfers, apartment rentals, hotel bookings, and business events.",
    sections: [
      {
        heading: "Our approach",
        body: [
          "We believe great travel is personal. Our guides, drivers, and planners are locals who love sharing their country, and we are on hand from your first question to your flight home.",
        ],
      },
    ],
  },
  reviews: {
    title: "Reviews",
    summary: "What travellers say about their trips with us.",
    intro: "Thousands of travellers have shared their experiences on Tripadvisor, Google, and Facebook.",
    embed: "reviews",
  },
  faq: {
    title: "FAQ",
    summary: "Answers to common questions about booking with us.",
    faqs: [
      {
        q: "How do I book a tour?",
        a: "Contact us by phone or email with your preferred tour and date. We confirm availability and send you the booking details.",
      },
      {
        q: "Which currencies can I pay in?",
        a: "Prices can be shown in USD, AMD, EUR, and RUB. We accept Visa, Mastercard, and American Express.",
      },
      {
        q: "Can tours be customised?",
        a: "Yes. Private tours and packages can be adjusted to your interests, schedule, and budget.",
      },
      {
        q: "Do you offer airport pickup?",
        a: "Yes, we provide transfers from Zvartnots International Airport at any time of day.",
      },
    ],
  },
  contacts: {
    title: "Contacts",
    summary: "Get in touch with our team in Yerevan.",
    intro: "We're happy to help plan your trip. Reach us by phone, email, or visit our office.",
    embed: "contact",
    hideCta: true,
  },
  blog: {
    title: "Armenia travel blog",
    summary: "Stories, tips, and ideas for travelling in Armenia.",
  },
  terms: {
    title: "Terms & Conditions",
    summary: "The terms that apply to bookings made with Aritoon.",
    intro:
      "Full terms and conditions are provided with each booking confirmation. If you have questions before booking, please contact us.",
    hideCta: true,
  },
  privacy: {
    title: "Privacy Policy",
    summary: "How we handle your personal information.",
    intro:
      "We use the details you share with us only to arrange and support your bookings. For any privacy questions or requests, please contact us.",
    hideCta: true,
  },

  // Account
  login: {
    title: "Sign in",
    summary: "Access your bookings.",
    intro:
      "Online accounts are coming soon. In the meantime, our team can check or change any booking for you by phone or email.",
    embed: "contact",
    hideCta: true,
  },
  register: {
    title: "Register",
    summary: "Create an account.",
    intro:
      "Online registration is coming soon. You don't need an account to book — just contact us and we'll arrange everything.",
    embed: "contact",
    hideCta: true,
  },
  cart: {
    title: "Your cart",
    summary: "Items you've selected.",
    intro:
      "Your cart is empty. Online checkout is coming soon — to book now, contact our team and we'll confirm everything for you.",
    embed: "contact",
    hideCta: true,
  },
};

const destinationPages = Object.fromEntries(
  destinations.map((d) => [
    `armenia/attractions/${d.slug}`,
    {
      title: d.name,
      summary: d.summary,
      intro: d.summary,
      sections: [{ heading: "About", body: [...d.body] }],
    } satisfies PageContent,
  ]),
);

const blogPages = Object.fromEntries(
  blogPosts.map((p) => [
    `blog/${p.slug}`,
    {
      title: p.title,
      summary: p.excerpt,
      meta: [p.category, p.date, `${p.readTime} read`],
      sections: [{ heading: "", body: [...p.body] }],
    } satisfies PageContent,
  ]),
);

export const pages: Record<string, PageContent> = {
  ...staticPages,
  ...destinationPages,
  ...blogPages,
};

/** Direct children of a path, in registry order — used for hub-page cards. */
export function childPages(path: string) {
  const prefix = `${path}/`;
  return Object.entries(pages)
    .filter(([key]) => key.startsWith(prefix) && !key.slice(prefix.length).includes("/"))
    .map(([key, page]) => ({ href: `/${key}`, ...page }));
}
