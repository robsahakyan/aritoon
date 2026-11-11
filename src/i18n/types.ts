import type { BlogSlug, DestinationSlug, NavId, StaticPath } from "./structure";

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
  /** Hide the "plan your trip" call to action. */
  hideCta?: boolean;
};

type Ui = {
  metaTitle: string;
  metaDescription: string;
  signIn: string;
  register: string;
  cart: string;
  language: string;
  currency: string;
  openMenu: string;
  closeMenu: string;
  home: string;
  learnMore: string;
  readMore: string;
  faqHeading: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  /** Contains "{n}" for the minutes range. */
  minRead: string;
  notFoundTitle: string;
  notFoundText: string;
  notFoundBack: string;
  address: string;
  footerAbout: string;
  footerContact: string;
  footerLinks: string;
  copyright: string;
  /** Contains "{platform}". */
  reviewsOn: string;
  nav: Record<NavId, string>;
};

type Home = {
  heroEyebrow: string;
  heroTitle: string;
  heroText: string;
  heroCta: string;
  services: [Service, Service, Service, Service];
  aboutHeading: string;
  aboutText: string;
  statLabels: [string, string, string, string];
  statPeriod: string;
  guideHeading: string;
  destinationsHeading: string;
  blogHeading: string;
  blogViewAll: string;
  reviewsHeading: string;
};
type Service = { title: string; description: string };

export type Content = {
  ui: Ui;
  home: Home;
  destinations: Record<DestinationSlug, { name: string; summary: string; body: string[] }>;
  blog: Record<BlogSlug, { title: string; excerpt: string; category: string; body: string[] }>;
  pages: Record<StaticPath, PageContent>;
};
