import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import PropertyGrid from "../properties/PropertyGrid";
import properties from "@/data/addInformation";

export default function FeaturedProperties() {
  const featured = properties.filter((p) => p.featured).slice(0, 6);
  return (
    <section className="bg-gradient-light py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Handpicked"
            title="Featured Properties"
            subtitle="A curated selection of our finest listings — homes, plots and investments held to a singular standard of quality."
          />
          <Link
            to="/properties"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-accent hover:text-primary"
          >
            View all properties
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-14">
          <PropertyGrid items={featured} />
        </div>
      </Container>
    </section>
  );
}
