import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/home/Hero";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import StatsSection from "@/components/home/StatsSection";
import Testimonials from "@/components/home/Testimonials";
import Gallery from "@/components/home/Gallery";
import CTASection from "@/components/home/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TempCompany — Luxury Real Estate in India" },
      {
        name: "description",
        content:
          "Find your dream property with elegance. Curated luxury homes, villas, plots and commercial properties across India.",
      },
      { property: "og:title", content: "TempCompany — Luxury Real Estate in India" },
      {
        property: "og:description",
        content: "Curated luxury homes, villas, plots and commercial properties across India.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <WhyChooseUs />
      <StatsSection />
      <Testimonials />
      <Gallery />
      <CTASection />
    </>
  );
}
