import { Star } from "lucide-react";
import { countryName, formatDate, type Locale } from "@/i18n/config";
import { getContent } from "@/i18n";
import { reviewPlatforms, reviews } from "@/i18n/structure";

export function ReviewsSection({ lang }: { lang: Locale }) {
  const { home, ui } = getContent(lang);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-foreground">{home.reviewsHeading}</h2>

        <div className="mb-10 flex flex-wrap gap-6">
          {reviewPlatforms.map((platform) => (
            <div
              key={platform.name}
              className="flex items-center gap-3 rounded-xl border border-border px-5 py-3"
            >
              <div className="flex items-center gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold">{platform.rating}</p>
                <p className="text-xs text-muted">
                  {platform.count} {ui.reviewsOn.replace("{platform}", platform.name)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <blockquote
              key={review.author}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <p lang="en" className="text-sm leading-relaxed text-foreground">&ldquo;{review.text}&rdquo;</p>
              <footer className="mt-4 border-t border-border pt-4">
                <p className="font-medium text-foreground">{review.author}</p>
                <p className="text-xs text-muted">
                  {countryName(lang, review.country)} · {formatDate(lang, review.date)}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
