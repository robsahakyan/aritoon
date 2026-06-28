import Link from "next/link";
import { ArrowRight, BookOpen, MapPin, Music, Utensils } from "lucide-react";

const guides = [
  {
    title: "Travel Guide",
    description:
      "Essential tips, local secrets, and practical answers for planning your Armenia adventure.",
    href: "/armenia/travel-guide",
    icon: BookOpen,
  },
  {
    title: "Attractions & Activities",
    description:
      "From Garni Temple and Lake Sevan to hidden gems — discover the best places to visit.",
    href: "/armenia/attractions",
    icon: MapPin,
  },
  {
    title: "Restaurants & Clubs",
    description:
      "Find the best dining and nightlife across Yerevan and the regions.",
    href: "/armenia/restaurants",
    icon: Utensils,
  },
  {
    title: "Festivals & Holidays",
    description:
      "Experience Armenia's traditions and cultural events throughout the year.",
    href: "/armenia/festivals",
    icon: Music,
  },
];

export function ArmeniaGuideSection() {
  return (
    <section className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-10 text-3xl font-bold text-foreground">Armenia</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group flex gap-5 rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <guide.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary">
                  {guide.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{guide.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
