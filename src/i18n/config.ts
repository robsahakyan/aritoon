export const locales = ["en", "ru", "hy"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** Remembers the visitor's language choice for URLs without a prefix. */
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const localeLabels: Record<Locale, string> = { en: "Eng", ru: "Рус", hy: "Հայ" };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Prefix an internal path ("/tours") with the locale ("/ru/tours"). */
export function localeHref(lang: Locale, path: string) {
  return path === "/" ? `/${lang}` : `/${lang}${path}`;
}

/** Swap the locale segment of a full pathname, e.g. "/en/tours" -> "/ru/tours". */
export function switchLocalePath(pathname: string, lang: Locale) {
  const [, first, ...rest] = pathname.split("/");
  const tail = isLocale(first ?? "") ? rest : [first, ...rest].filter(Boolean);
  return localeHref(lang, tail.length ? `/${tail.join("/")}` : "/");
}

/** Pick the best supported locale from an Accept-Language header. */
export function matchLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;
  const ranked = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { base: tag.toLowerCase().split("-")[0], q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  return ranked.find((r) => isLocale(r.base))?.base as Locale | undefined ?? defaultLocale;
}

export function formatDate(lang: Locale, iso: string) {
  return new Intl.DateTimeFormat(lang, { day: "numeric", month: "short", year: "numeric" }).format(
    new Date(`${iso}T00:00:00Z`),
  );
}

export function countryName(lang: Locale, code: string) {
  return new Intl.DisplayNames([lang], { type: "region" }).of(code) ?? code;
}
