import { notFound } from "next/navigation";
import { ArmeniaGuideSection } from "@/components/home/ArmeniaGuideSection";
import { BlogPreview } from "@/components/home/BlogPreview";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { Hero } from "@/components/home/Hero";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { StatsSection } from "@/components/home/StatsSection";
import { isLocale } from "@/i18n/config";

export default async function Home(props: PageProps<"/[lang]">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();

  return (
    <>
      <Hero lang={lang} />
      <StatsSection lang={lang} />
      <ArmeniaGuideSection lang={lang} />
      <DestinationsSection lang={lang} />
      <BlogPreview lang={lang} />
      <ReviewsSection lang={lang} />
    </>
  );
}
