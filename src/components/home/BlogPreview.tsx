import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const posts = [
  {
    title: "Lake Sevan: Things to Do Beyond Swimming",
    excerpt:
      "Sevan, often called the Blue Pearl of Armenia, is one of the country's most beloved treasures.",
    date: "23 Jun, 2026",
    readTime: "4-5 min",
    category: "Nature & Adventures",
    href: "/blog/lake-sevan-things-to-do",
  },
  {
    title: "Why Armenia Is Your Next Hiking Trip",
    excerpt:
      "Tired of crowded trails? Armenia offers adventure that seeps into your soul.",
    date: "26 May, 2026",
    readTime: "15-17 min",
    category: "Where to go",
    href: "/blog/armenia-hiking",
  },
  {
    title: "Ecotourism in Farms, Vineyards & Villages",
    excerpt:
      "The real soul of Armenia isn't in the city buzz — it's in sun-ripened apricots and village bread.",
    date: "28 Apr, 2026",
    readTime: "10-12 min",
    category: "Nature & Adventures",
    href: "/blog/armenia-ecotourism",
  },
];

export function BlogPreview() {
  return (
    <section className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-bold text-foreground">Armenia travel blog</h2>
          <Link
            href="/blog"
            className="hidden items-center gap-1 text-sm font-medium text-primary sm:flex"
          >
            View all posts <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
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
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
