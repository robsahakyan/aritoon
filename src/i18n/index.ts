import { formatDate, type Locale } from "./config";
import en from "./content/en";
import hy from "./content/hy";
import ru from "./content/ru";
import { blogMeta, destinationSlugs } from "./structure";
import type { Content, PageContent } from "./types";

const contents: Record<Locale, Content> = { en, ru, hy };

export function getContent(lang: Locale): Content {
  return contents[lang];
}

export function readTime(lang: Locale, minutes: string) {
  return contents[lang].ui.minRead.replace("{n}", minutes);
}

const pageCache = new Map<Locale, Record<string, PageContent>>();

/** Every page for a locale, keyed by path without leading slash ("tours/group"). */
export function getPages(lang: Locale): Record<string, PageContent> {
  const cached = pageCache.get(lang);
  if (cached) return cached;

  const c = contents[lang];
  const pages: Record<string, PageContent> = { ...c.pages };

  for (const slug of destinationSlugs) {
    const d = c.destinations[slug];
    pages[`armenia/attractions/${slug}`] = {
      title: d.name,
      summary: d.summary,
      intro: d.summary,
      sections: [{ heading: "", body: d.body }],
    };
  }

  for (const { slug, date, readTime: minutes } of blogMeta) {
    const p = c.blog[slug];
    pages[`blog/${slug}`] = {
      title: p.title,
      summary: p.excerpt,
      meta: [p.category, formatDate(lang, date), readTime(lang, minutes)],
      sections: [{ heading: "", body: p.body }],
    };
  }

  pageCache.set(lang, pages);
  return pages;
}

/** Direct children of a path, in registry order — used for hub-page cards. */
export function childPages(lang: Locale, path: string) {
  const prefix = `${path}/`;
  return Object.entries(getPages(lang))
    .filter(([key]) => key.startsWith(prefix) && !key.slice(prefix.length).includes("/"))
    .map(([key, page]) => ({ path: `/${key}`, ...page }));
}

/** All paths (without locale) that exist, for static generation. */
export function allPaths() {
  return Object.keys(getPages("en"));
}
