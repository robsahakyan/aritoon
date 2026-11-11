import type { Locale } from "@/i18n/config";
import { getContent } from "@/i18n";
import { stats } from "@/i18n/structure";

export function StatsSection({ lang }: { lang: Locale }) {
  const { home } = getContent(lang);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold text-foreground">{home.aboutHeading}</h2>
          <p className="mt-3 leading-relaxed text-muted">{home.aboutText}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((value, i) => (
            <div
              key={home.statLabels[i]}
              className="rounded-2xl border border-border bg-surface p-6 text-center"
            >
              <p className="text-3xl font-bold text-primary">{value}</p>
              <p className="mt-2 text-sm font-medium text-foreground">{home.statLabels[i]}</p>
              <p className="mt-1 text-xs text-muted">{home.statPeriod}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
