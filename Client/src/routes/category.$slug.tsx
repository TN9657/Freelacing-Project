import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import PropertyGrid from "@/components/properties/PropertyGrid";
import properties, { categories, type PropertyCategory } from "@/data/addInformation";

const slugify = (s: string) => s.toLowerCase().replace(/\s+/g, "-");
const unslug = (slug: string): PropertyCategory | null =>
  categories.find((c) => slugify(c) === slug) ?? null;

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const category = unslug(params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.category ?? "Properties"} — TempCompany` },
      {
        name: "description",
        content: `Premium ${loaderData?.category ?? "properties"} curated by TempCompany.`,
      },
    ],
  }),
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-gradient-light pt-24">
      <div className="text-center">
        <h1 className="font-serif text-4xl text-primary">Category not found</h1>
        <Link
          to="/properties"
          className="mt-6 inline-block rounded-full bg-gradient-royal px-6 py-3 text-white"
        >
          Browse all properties
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="pt-32 text-center text-destructive">{error.message}</div>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const items = properties.filter((p) => p.category === category);
  return (
    <>
      <section className="bg-gradient-royal pt-28 pb-16 sm:pt-36 sm:pb-20 text-white">
        <Container>
          <Link
            to="/properties"
            className="text-xs uppercase tracking-widest text-white/70 hover:text-white"
          >
            ← All properties
          </Link>
          <div className="mt-6">
            <SectionHeading
              light
              align="left"
              eyebrow="Category"
              title={category}
              subtitle={`${items.length} listing${items.length === 1 ? "" : "s"} currently available.`}
            />
          </div>
        </Container>
      </section>
      <section className="bg-gradient-light py-16 sm:py-20 lg:py-24">
        <Container>
          <PropertyGrid items={items} />
        </Container>
      </section>
    </>
  );
}
