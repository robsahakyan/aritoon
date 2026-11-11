import type { Content } from "../types";

const en: Content = {
  ui: {
    metaTitle: "Aritoon | Armenia Tours, Accommodation & Transfers",
    metaDescription:
      "Discover guided tours, comfortable stays, reliable transfers, and curated experiences across Armenia.",
    signIn: "Sign in",
    register: "Register",
    cart: "Cart",
    language: "Language",
    currency: "Currency",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    home: "Home",
    learnMore: "Learn more",
    readMore: "Read more",
    faqHeading: "Frequently asked questions",
    ctaTitle: "Ready to plan your trip?",
    ctaText: "Our team in Yerevan will help you put it all together.",
    ctaButton: "Contact us",
    minRead: "{n} min read",
    notFoundTitle: "Page not found",
    notFoundText: "The page you're looking for doesn't exist or has moved.",
    notFoundBack: "Back to home",
    address: "96, Nalbandyan str., Yerevan",
    footerAbout:
      "Your gateway to Armenian hospitality. Tours, accommodation, transfers, and unforgettable experiences across Armenia.",
    footerContact: "Contact us",
    footerLinks: "Quick links",
    copyright: "© Aritoon LLC",
    reviewsOn: "on {platform}",
    nav: {
      accommodation: "Accommodation",
      whereToStay: "Where to stay",
      apartments: "Apartments in Yerevan",
      hotels: "Hotels in Armenia",
      tours: "Tours",
      findTour: "Find your tour",
      groupTours: "Group Tours",
      privateTours: "Private Tours",
      tourPackages: "Tour Packages",
      transportation: "Transportation",
      selectTransportation: "Select transportation",
      transfers: "Transfers",
      hourlyRental: "Hourly Rental",
      businessEvents: "Business Events",
      planEvent: "Plan your event",
      venues: "Venues",
      equipment: "Equipment & Support",
      armenia: "Armenia",
      travelGuide: "Travel Guide",
      attractions: "Attractions & Activities",
      restaurants: "Restaurants & Clubs",
      festivals: "Festivals & Holidays",
      company: "Company",
      about: "About Us",
      reviews: "Reviews",
      faq: "FAQ",
      contacts: "Contacts",
      blog: "Blog",
      terms: "Terms & Conditions",
      privacy: "Privacy Policy",
    },
  },

  home: {
    heroEyebrow: "Welcome to Armenia",
    heroTitle: "The doors to Armenian hospitality",
    heroText:
      "Discover guided tours, comfortable stays, reliable transfers, and curated experiences across Armenia.",
    heroCta: "Explore tours",
    services: [
      { title: "Accommodation", description: "Apartments & hotels" },
      { title: "Tours", description: "Group & private tours" },
      { title: "Transportation", description: "Transfers & rentals" },
      { title: "Business Events", description: "Venues & support" },
    ],
    aboutHeading: "About Aritoon",
    aboutText:
      "A travel company in Yerevan with decades of experience, specializing in guided tours and day trips in Armenia. We arrange group and private tours, tour packages, transfers, apartment rentals, and hotel bookings.",
    statLabels: [
      "Accommodation orders",
      "Travellers on our tours",
      "Transportation users",
      "Business events organised",
    ],
    statPeriod: "in 24 years",
    guideHeading: "Armenia",
    destinationsHeading: "Tours to top destinations",
    blogHeading: "Armenia travel blog",
    blogViewAll: "View all posts",
    reviewsHeading: "Traveller reviews",
  },

  destinations: {
    "garni-temple": {
      name: "Garni Temple",
      summary: "The only standing Greco-Roman colonnaded temple in the former Soviet Union.",
      body: [
        "Built in the 1st century AD on a cliff above the Azat River gorge, Garni is the best-preserved pagan temple in Armenia and one of the country's most recognisable sights.",
        "Below the temple, the Symphony of Stones — basalt columns formed by cooling lava — lines the gorge and makes an easy, rewarding walk.",
      ],
    },
    "geghard-monastery": {
      name: "Geghard Monastery",
      summary: "A monastery partly carved out of the mountain rock, on the UNESCO World Heritage list.",
      body: [
        "Geghard's chapels are hewn directly into the cliffs of the Upper Azat Valley, creating halls with remarkable acoustics and carved stone detail.",
        "It is usually combined with Garni Temple in a half-day trip from Yerevan.",
      ],
    },
    "lake-sevan": {
      name: "Lake Sevan",
      summary: "The 'Blue Pearl of Armenia', a vast high-altitude lake surrounded by mountains.",
      body: [
        "At roughly 1,900 metres above sea level, Sevan is one of the largest high-altitude freshwater lakes in the world and the largest lake in the Caucasus.",
        "The Sevanavank monastery on the peninsula offers sweeping views, and lakeside towns serve fresh fish in summer.",
      ],
    },
    "tatev-monastery": {
      name: "Tatev Monastery",
      summary: "A 9th-century monastic complex reached by the dramatic Wings of Tatev cable car.",
      body: [
        "Perched on the edge of the Vorotan gorge in southern Armenia, Tatev was once a major centre of learning.",
        "The Wings of Tatev aerial tramway glides over the gorge and is one of the longest reversible cable cars in the world.",
      ],
    },
    "khor-virap-monastery": {
      name: "Khor Virap Monastery",
      summary: "A pilgrimage site with the closest views of Mount Ararat.",
      body: [
        "Khor Virap is where Saint Gregory the Illuminator was imprisoned before converting the king to Christianity in the early 4th century.",
        "On a clear day, Mount Ararat rises directly behind the monastery — one of the most photographed views in Armenia.",
      ],
    },
    dilijan: {
      name: "Dilijan",
      summary: "A forested resort town known as the 'Armenian Switzerland'.",
      body: [
        "Surrounded by Dilijan National Park, the town is known for its fresh air, hiking trails, and restored old quarter of craft workshops.",
        "Nearby, the Haghartsin and Goshavank monasteries sit quietly in the woods.",
      ],
    },
    gyumri: {
      name: "Gyumri",
      summary: "Armenia's second city, with a historic district of black-tufa architecture.",
      body: [
        "Gyumri's Kumayri district preserves 19th-century streets, workshops, and churches built from local black and red tufa.",
        "The city is famous for its humour, crafts, and lively arts scene.",
      ],
    },
    "noravank-monastery": {
      name: "Noravank Monastery",
      summary: "A 13th-century monastery set among striking red cliffs.",
      body: [
        "Noravank sits at the end of a narrow gorge in Vayots Dzor, its two-storey Surb Astvatsatsin church decorated with fine carvings attributed to the master Momik.",
        "The drive passes the Areni wine region, making it a natural pairing with a winery visit.",
      ],
    },
    jermuk: {
      name: "Jermuk",
      summary: "A mountain spa town famous for its mineral water and waterfall.",
      body: [
        "Jermuk's thermal springs have drawn visitors for generations, and its mineral water is bottled and sold across the region.",
        "The town's waterfall, forest walks, and calm pace make it a restful stop on a southern itinerary.",
      ],
    },
    tsaghkadzor: {
      name: "Tsaghkadzor",
      summary: "Armenia's main ski resort, with year-round cable car rides.",
      body: [
        "Tsaghkadzor's slopes on Mount Teghenis attract skiers in winter, while the chairlifts offer mountain views in summer.",
        "The medieval Kecharis monastery stands in the centre of town.",
      ],
    },
    "etchmiadzin-cathedral": {
      name: "Etchmiadzin Cathedral",
      summary: "The Mother Cathedral of the Armenian Apostolic Church, founded in the early 4th century.",
      body: [
        "Etchmiadzin is considered one of the oldest cathedrals in the world and is the spiritual centre of the Armenian Apostolic Church.",
        "Together with nearby churches and the ruins of Zvartnots, it forms a UNESCO World Heritage site.",
      ],
    },
    "amberd-fortress": {
      name: "Amberd Fortress",
      summary: "A medieval fortress on the slopes of Mount Aragats.",
      body: [
        "Amberd stands at about 2,300 metres, between two river gorges on the side of Armenia's highest mountain.",
        "The fortress and its 11th-century church make a scenic trip, often combined with a visit to the Armenian Alphabet Monument.",
      ],
    },
  },

  blog: {
    "lake-sevan-things-to-do": {
      title: "Lake Sevan: Things to Do Beyond Swimming",
      excerpt:
        "Sevan, often called the Blue Pearl of Armenia, is one of the country's most beloved treasures.",
      category: "Nature & Adventures",
      body: [
        "Sevan, often called the Blue Pearl of Armenia, is one of the country's most beloved treasures. Most visitors come for the beaches, but the lake has much more to offer.",
        "Climb the steps to Sevanavank monastery on the peninsula for a panoramic view of the water. Continue along the shore to the field of khachkars (cross-stones) at Noratus, one of the largest in the country.",
        "In summer, try kayaking or sailing, and finish the day with freshly grilled fish at a lakeside restaurant.",
      ],
    },
    "armenia-hiking": {
      title: "Why Armenia Is Your Next Hiking Trip",
      excerpt: "Tired of crowded trails? Armenia offers adventure that seeps into your soul.",
      category: "Where to go",
      body: [
        "Tired of crowded trails? Armenia offers adventure that seeps into your soul — quiet paths, ancient monasteries, and mountain views at every turn.",
        "The Transcaucasian Trail is gradually connecting routes across the country, while Dilijan National Park offers forest hikes for every level.",
        "For a bigger challenge, the peaks of Mount Aragats reward experienced hikers with views over the whole Ararat valley. The best hiking season runs from late spring to early autumn.",
      ],
    },
    "armenia-ecotourism": {
      title: "Ecotourism in Farms, Vineyards & Villages",
      excerpt:
        "The real soul of Armenia isn't in the city buzz — it's in sun-ripened apricots and village bread.",
      category: "Nature & Adventures",
      body: [
        "The real soul of Armenia isn't in the city buzz — it's in sun-ripened apricots, village bread, and families who welcome guests to their tables.",
        "Bake lavash in a traditional tonir oven, pick fruit in a village orchard, or taste wine made from indigenous grapes in the Areni region.",
        "Village guesthouses offer a slower, more personal way to travel and directly support local communities.",
      ],
    },
  },

  pages: {
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
      intro:
        "Thousands of travellers have shared their experiences on Tripadvisor, Google, and Facebook.",
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
  },
};

export default en;
