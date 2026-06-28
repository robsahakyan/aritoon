import { ArmeniaGuideSection } from "@/components/home/ArmeniaGuideSection";
import { BlogPreview } from "@/components/home/BlogPreview";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { Hero } from "@/components/home/Hero";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { StatsSection } from "@/components/home/StatsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ArmeniaGuideSection />
      <DestinationsSection />
      <BlogPreview />
      <ReviewsSection />
    </>
  );
}
