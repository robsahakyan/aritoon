export const mainNav = [
  {
    label: "Accommodation",
    href: "/accommodation",
    children: [
      { label: "Where to stay", href: "/accommodation" },
      { label: "Apartments in Yerevan", href: "/accommodation/apartments" },
      { label: "Hotels in Armenia", href: "/accommodation/hotels" },
    ],
  },
  {
    label: "Tours",
    href: "/tours",
    children: [
      { label: "Find your tour", href: "/tours" },
      { label: "Group Tours", href: "/tours/group" },
      { label: "Private Tours", href: "/tours/private" },
      { label: "Tour Packages", href: "/tours/packages" },
    ],
  },
  {
    label: "Transportation",
    href: "/transportation",
    children: [
      { label: "Select transportation", href: "/transportation" },
      { label: "Transfers", href: "/transportation/transfers" },
      { label: "Hourly Rental", href: "/transportation/hourly" },
    ],
  },
  {
    label: "Business Events",
    href: "/business-events",
    children: [
      { label: "Plan your event", href: "/business-events" },
      { label: "Venues", href: "/business-events/venues" },
      { label: "Equipment & Support", href: "/business-events/equipment" },
    ],
  },
  {
    label: "Armenia",
    href: "/armenia",
    children: [
      { label: "Travel Guide", href: "/armenia/travel-guide" },
      { label: "Attractions & Activities", href: "/armenia/attractions" },
      { label: "Restaurants & Clubs", href: "/armenia/restaurants" },
      { label: "Festivals & Holidays", href: "/armenia/festivals" },
    ],
  },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Reviews", href: "/reviews" },
      { label: "FAQ", href: "/faq" },
      { label: "Contacts", href: "/contacts" },
      { label: "Blog", href: "/blog" },
    ],
  },
] as const;

export const languages = [
  { code: "en", label: "Eng" },
  { code: "ru", label: "Рус" },
  { code: "hy", label: "Հայ" },
] as const;

export const currencies = ["USD", "AMD", "EUR", "RUB"] as const;
