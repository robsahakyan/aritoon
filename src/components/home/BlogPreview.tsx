import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { formatDate, localeHref, type Locale } from "@/i18n/config";
import { getContent, readTime } from "@/i18n";
import { blogMeta } from "@/i18n/structure";

export function BlogPreview({ lang }: { lang: Locale }) {
  const { home, blog } = getContent(lang);

  return (
    <section className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-bold text-foreground">{home.blogHeading}</h2>
          <Link
            href={localeHref(lang, "/blog")}
            className="hidden items-center gap-1 text-sm font-medium text-primary sm:flex"
          >
            {home.blogViewAll} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {blogMeta.map(({ slug, date, readTime: minutes }) => {
            const post = blog[slug];
            return (
              <Link
                key={slug}
                href={localeHref(lang, `/blog/${slug}`)}
                className="group overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:shadow-md"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/20 to-accent/20" />
                <div className="p-5">
                  <span className="text-xs font-medium text-primary">{post.category}</span>
                  <h3 className="mt-2 font-semibold leading-snug text-foreground group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(lang, date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {readTime(lang, minutes)}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
