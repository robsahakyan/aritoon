import Link from "next/link";
import { destinations } from "@/lib/data";

export function DestinationsSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-foreground">Tours to top destinations</h2>
        <div className="flex flex-wrap gap-3">
          {destinations.map((dest) => (
            <Link
              key={dest.slug}
              href={`/armenia/attractions/${dest.slug}`}
              className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-white"
            >
              {dest.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
