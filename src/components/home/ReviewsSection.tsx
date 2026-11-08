import { Star } from "lucide-react";
import { reviewPlatforms as platforms, reviews } from "@/lib/data";

export function ReviewsSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-foreground">Traveller reviews</h2>

        <div className="mb-10 flex flex-wrap gap-6">
          {platforms.map((platform) => (
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
                  {platform.count} on {platform.name}
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
              <p className="text-sm leading-relaxed text-foreground">&ldquo;{review.text}&rdquo;</p>
              <footer className="mt-4 border-t border-border pt-4">
                <p className="font-medium text-foreground">{review.author}</p>
                <p className="text-xs text-muted">
                  {review.country} · {review.date}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
