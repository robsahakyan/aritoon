import Link from "next/link";
import { ArrowRight, BookOpen, MapPin, Music, Utensils } from "lucide-react";
import { localeHref, type Locale } from "@/i18n/config";
import { getContent } from "@/i18n";

const guides = [
  { path: "armenia/travel-guide", icon: BookOpen },
  { path: "armenia/attractions", icon: MapPin },
  { path: "armenia/restaurants", icon: Utensils },
  { path: "armenia/festivals", icon: Music },
] as const;

export function ArmeniaGuideSection({ lang }: { lang: Locale }) {
  const { home, pages, ui } = getContent(lang);

  return (
    <section className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-10 text-3xl font-bold text-foreground">{home.guideHeading}</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {guides.map((guide) => (
            <Link
              key={guide.path}
              href={localeHref(lang, `/${guide.path}`)}
              className="group flex gap-5 rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <guide.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary">
                  {pages[guide.path].title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{pages[guide.path].summary}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  {ui.readMore} <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
