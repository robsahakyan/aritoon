import Link from "next/link";
import { ArrowRight, ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { localeHref, type Locale } from "@/i18n/config";
import { childPages, getContent, getPages } from "@/i18n";
import { contact } from "@/i18n/structure";
import type { PageContent } from "@/i18n/types";

function Breadcrumbs({ lang, path }: { lang: Locale; path: string }) {
  const pages = getPages(lang);
  const segments = path.split("/");
  const crumbs = segments.map((_, i) => {
    const key = segments.slice(0, i + 1).join("/");
    return { href: localeHref(lang, `/${key}`), label: pages[key]?.title ?? segments[i] };
  });

  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-sm text-muted">
      <Link href={localeHref(lang, "/")} className="hover:text-primary">
        {getContent(lang).ui.home}
      </Link>
      {crumbs.map((crumb, i) => (
        <span key={crumb.href} className="flex items-center gap-1">
          <ChevronRight className="h-3.5 w-3.5" />
          {i === crumbs.length - 1 ? (
            <span className="text-foreground">{crumb.label}</span>
          ) : (
            <Link href={crumb.href} className="hover:text-primary">
              {crumb.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}

function ContactBlock({ address }: { address: string }) {
  const items = [
    { icon: MapPin, label: address },
    { icon: Phone, label: contact.phone, href: contact.phoneHref },
    { icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-border bg-surface p-5">
          <item.icon className="h-5 w-5 shrink-0 text-primary" />
          {item.href ? (
            <a href={item.href} className="text-sm font-medium hover:text-primary">
              {item.label}
            </a>
          ) : (
            <span className="text-sm font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </div>
  );
}

export function ContentPage({ lang, path, page }: { lang: Locale; path: string; page: PageContent }) {
  const { ui } = getContent(lang);
  const children = childPages(lang, path);

  return (
    <>
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <Breadcrumbs lang={lang} path={path} />
          <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            {page.title}
          </h1>
          {page.meta && (
            <p className="mt-4 text-sm text-muted">{page.meta.join(" · ")}</p>
          )}
          {page.intro && <p className="mt-4 max-w-2xl text-lg text-muted">{page.intro}</p>}
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-12 px-4 py-12">
        {page.sections?.map((section, i) => (
          <section key={i} className="max-w-3xl">
            {section.heading && (
              <h2 className="mb-3 text-2xl font-bold text-foreground">{section.heading}</h2>
            )}
            <div className="space-y-4 leading-relaxed text-foreground/80">
              {section.body.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          </section>
        ))}

        {children.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {children.map((child) => (
              <Link
                key={child.path}
                href={localeHref(lang, child.path)}
                className="group rounded-2xl border border-border bg-white p-6 transition-shadow hover:shadow-md"
              >
                {child.meta && <p className="text-xs font-medium text-primary">{child.meta[0]}</p>}
                <h2 className="mt-1 font-semibold text-foreground group-hover:text-primary">
                  {child.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{child.summary}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  {ui.learnMore} <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        )}

        {page.faqs && (
          <section className="max-w-3xl">
            <h2 className="mb-4 text-2xl font-bold text-foreground">{ui.faqHeading}</h2>
            <div className="divide-y divide-border rounded-2xl border border-border">
              {page.faqs.map((faq) => (
                <details key={faq.q} className="group p-5">
                  <summary className="cursor-pointer font-medium text-foreground marker:text-primary">
                    {faq.q}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {page.embed === "contact" && <ContactBlock address={ui.address} />}
      </div>

      {page.embed === "reviews" && <ReviewsSection lang={lang} />}

      {!page.hideCta && (
        <section className="bg-primary text-white">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 py-10 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold">{ui.ctaTitle}</h2>
              <p className="mt-1 text-white/80">{ui.ctaText}</p>
            </div>
            <Link
              href={localeHref(lang, "/contacts")}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-surface"
            >
              {ui.ctaButton} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
