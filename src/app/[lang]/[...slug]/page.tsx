import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPage } from "@/components/content/ContentPage";
import { isLocale, locales } from "@/i18n/config";
import { allPaths, getPages } from "@/i18n";

// Only the paths in the registry exist; anything else gets app/global-not-found.tsx.
export const dynamicParams = false;

export function generateStaticParams() {
  return allPaths().map((path) => ({ slug: path.split("/") }));
}

export async function generateMetadata(props: PageProps<"/[lang]/[...slug]">): Promise<Metadata> {
  const { lang, slug } = await props.params;
  if (!isLocale(lang)) return {};
  const path = slug.join("/");
  const page = getPages(lang)[path];
  if (!page) return {};
  return {
    title: `${page.title} | Aritoon`,
    description: page.summary,
    alternates: { languages: Object.fromEntries(locales.map((l) => [l, `/${l}/${path}`])) },
  };
}

export default async function Page(props: PageProps<"/[lang]/[...slug]">) {
  const { lang, slug } = await props.params;
  if (!isLocale(lang)) notFound();
  const path = slug.join("/");
  const page = getPages(lang)[path];
  if (!page) notFound();
  return <ContentPage lang={lang} path={path} page={page} />;
}
