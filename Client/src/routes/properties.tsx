import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import PropertyFilter, { type Filters } from "@/components/properties/PropertyFilter";
import PropertyGrid from "@/components/properties/PropertyGrid";
import properties, { categories } from "@/data/addInformation";

export const Route = createFileRoute("/properties")({
  head: () => ({
    meta: [
      { title: "Properties — TempCompany" },
      {
        name: "description",
        content:
          "Browse villas, NA plots, agricultural land, commercial properties and more across India.",
      },
      { property: "og:title", content: "Properties — TempCompany" },
      { property: "og:description", content: "Browse premium properties across India." },
    ],
  }),
  component: PropertiesPage,
});

function PropertiesPage() {
  const [filters, setFilters] = useState<Filters>({
    category: "All",
    location: "All",
    maxPrice: 1500,
    featuredOnly: false,
  });
  const locations = useMemo(
    () => Array.from(new Set(properties.map((p) => p.location))).sort(),
    [],
  );
  const filtered = useMemo(
    () =>
      properties.filter(
        (p) =>
          (filters.category === "All" || p.category === filters.category) &&
          (filters.location === "All" || p.location === filters.location) &&
          p.priceValue <= filters.maxPrice &&
          (!filters.featuredOnly || p.featured),
      ),
    [filters],
  );

  return (
    <>
      <section className="bg-gradient-royal pt-28 pb-16 sm:pt-36 sm:pb-20 text-white">
        <Container>
          <SectionHeading
            light
            align="left"
            eyebrow="The Portfolio"
            title="Properties worth keeping."
            subtitle="Every listing personally inspected. Every title verified. Browse with confidence."
          />
        </Container>
      </section>

      <section className="bg-gradient-light py-12 sm:py-16">
        <Container>
          <div className="-mt-20 sm:-mt-28 lg:-mt-32">
            <PropertyFilter filters={filters} setFilters={setFilters} locations={locations} />
          </div>

          <div className="mt-10 sm:mt-14 flex flex-wrap gap-2">
            <Link
              to="/properties"
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${
                filters.category === "All"
                  ? "bg-gradient-royal text-white"
                  : "bg-white text-primary hover:bg-primary hover:text-white"
              }`}
              onClick={(e) => {
                e.preventDefault();
                setFilters({ ...filters, category: "All" });
              }}
            >
              All
            </Link>
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilters({ ...filters, category: c })}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${
                  filters.category === c
                    ? "bg-gradient-royal text-white"
                    : "bg-white text-primary hover:bg-primary hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-semibold text-primary">{filtered.length}</span> of{" "}
              {properties.length} properties
            </p>
          </div>

          <div className="mt-8">
            <PropertyGrid items={filtered} />
          </div>
        </Container>
      </section>
    </>
  );
}
