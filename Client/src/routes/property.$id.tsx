import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, Check, MapPin, Maximize2, Phone, Tag } from "lucide-react";
import Container from "@/components/common/Container";
import properties from "@/data/addInformation";

export const Route = createFileRoute("/property/$id")({
  loader: ({ params }) => {
    const property = properties.find((p) => String(p.id) === params.id);
    if (!property) throw notFound();
    return { property };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.property.title ?? "Property"} — TempCompany` },
      { name: "description", content: loaderData?.property.description ?? "" },
      { property: "og:title", content: loaderData?.property.title ?? "Property" },
      { property: "og:description", content: loaderData?.property.description ?? "" },
      { property: "og:image", content: loaderData?.property.image ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-gradient-light pt-24">
      <div className="text-center">
        <h1 className="font-serif text-4xl text-primary">Property not found</h1>
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
  component: PropertyDetailPage,
});

function PropertyDetailPage() {
  const { property: p } = Route.useLoaderData();
  return (
    <>
      <section className="relative h-[60vh] min-h-[460px] sm:h-[70vh] sm:min-h-[480px] w-full overflow-hidden pt-16">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.2, 0.7, 0.2, 1] }}
          src={p.image}
          alt={p.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <Container className="relative z-10 flex h-full flex-col justify-end pb-10 sm:pb-14 text-white">
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to properties
          </Link>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest backdrop-blur">
              {p.category}
            </span>
            {p.featured && (
              <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
                Featured
              </span>
            )}
          </div>
          <h1 className="mt-4 max-w-3xl font-serif text-3xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            {p.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/85">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {p.location}
            </span>
            <span className="flex items-center gap-2">
              <Maximize2 className="h-4 w-4" />
              {p.area}
            </span>
            <span className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              {p.price}
            </span>
          </div>
        </Container>
      </section>
      <section className="bg-gradient-light py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:gap-12 lg:grid-cols-[1.6fr_1fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-primary">
                About this property
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <h3 className="mt-10 sm:mt-12 font-serif text-xl sm:text-2xl font-semibold text-primary">
                Amenities & Highlights
              </h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {p.amenities.map((a: string) => (
                  <li
                    key={a}
                    className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-card-luxury"
                  >
                    <Check className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium text-primary">{a}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.aside
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="h-fit rounded-3xl bg-gradient-royal p-6 sm:p-8 text-white shadow-luxury lg:sticky lg:top-28"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                Asking Price
              </p>
              <p className="mt-2 font-serif text-4xl sm:text-5xl font-semibold">{p.price}</p>
              <p className="mt-1 text-sm text-white/70">
                {p.area} • {p.location}
              </p>
              <div className="my-7 h-px bg-white/15" />
              <a
                href={`tel:${p.contact.replace(/\s/g, "")}`}
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-white  text-blue-900 px-6 py-3.5 text-sm font-semibold text-primary transition-transform hover:scale-[1.03]"
              >
                <Phone className="h-4 w-4" />
                {p.contact}
              </a>
              <Link
                to="/contact"
                className="mt-3 flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                Schedule a Visit
              </Link>
            </motion.aside>
          </div>
        </Container>
      </section>
    </>
  );
}
