import { createFileRoute } from "@tanstack/react-router";
import AboutHero from "@/components/about/AboutHero";
import CompanyInfo from "@/components/about/CompanyInfo";
import Timeline from "@/components/about/Timeline";
import TeamSection from "@/components/about/TeamSection";
import StatsSection from "@/components/home/StatsSection";
import CTASection from "@/components/home/CTASection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About TempCompany — A boutique real-estate house" },
      {
        name: "description",
        content:
          "Fifteen years of carefully chosen property across Mumbai, Pune, Bangalore and Goa. Meet the small team behind TempCompany.",
      },
      { property: "og:title", content: "About TempCompany" },
      {
        property: "og:description",
        content: "Fifteen years of carefully chosen property in India.",
      },
    ],
  }),
  component: () => (
    <>
      <AboutHero />
      <CompanyInfo />
      <StatsSection />
      <Timeline />
      <TeamSection />
      <CTASection />
    </>
  ),
});
