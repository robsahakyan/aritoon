import Link from "next/link";
import { localeHref, type Locale } from "@/i18n/config";
import { getContent } from "@/i18n";
import { destinationSlugs } from "@/i18n/structure";

export function DestinationsSection({ lang }: { lang: Locale }) {
  const { home, destinations } = getContent(lang);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-foreground">{home.destinationsHeading}</h2>
        <div className="flex flex-wrap gap-3">
          {destinationSlugs.map((slug) => (
            <Link
              key={slug}
              href={localeHref(lang, `/armenia/attractions/${slug}`)}
              className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-white"
            >
              {destinations[slug].name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
