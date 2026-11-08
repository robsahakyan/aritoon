import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPage } from "@/components/content/ContentPage";
import { pages } from "@/lib/pages";

// Only the paths in the registry exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(pages).map((path) => ({ slug: path.split("/") }));
}

export async function generateMetadata(props: PageProps<"/[...slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const page = pages[slug.join("/")];
  if (!page) return {};
  return { title: `${page.title} | Aritoon`, description: page.summary };
}

export default async function Page(props: PageProps<"/[...slug]">) {
  const { slug } = await props.params;
  const path = slug.join("/");
  const page = pages[path];
  if (!page) notFound();
  return <ContentPage path={path} page={page} />;
}
