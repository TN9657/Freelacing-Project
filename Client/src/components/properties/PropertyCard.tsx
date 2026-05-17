import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { MapPin, Maximize2, Phone } from "lucide-react";
import type { Property } from "@/data/addInformation";

export default function PropertyCard({
  property,
  index = 0,
}: {
  property: Property;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.06, ease: [0.2, 0.7, 0.2, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-card shadow-card-luxury transition-all duration-500 hover:-translate-y-1 hover:shadow-luxury"
    >
      <Link
        to="/property/$id"
        params={{ id: String(property.id) }}
        className="relative block aspect-[4/3] overflow-hidden"
      >
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent opacity-80" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary backdrop-blur">
          {property.category}
        </span>
        {property.featured && (
          <span className="absolute right-4 top-4 rounded-full bg-gradient-royal px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
            Featured
          </span>
        )}
        <div className="absolute inset-x-4 bottom-4 flex items-end justify-between text-white">
          <span className="font-serif text-2xl font-semibold">{property.price}</span>
          <span className="flex items-center gap-1.5 text-xs text-white/85">
            <MapPin className="h-3.5 w-3.5" />
            {property.location}
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <Link to="/property/$id" params={{ id: String(property.id) }}>
          <h3 className="font-serif text-xl font-semibold text-primary transition-colors group-hover:text-accent">
            {property.title}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {property.description}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-border pt-5">
          <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <Maximize2 className="h-3.5 w-3.5" />
            {property.area}
          </span>
          <a
            href={`tel:${property.contact.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            <Phone className="h-3.5 w-3.5" />
            Contact
          </a>
        </div>
      </div>
    </motion.article>
  );
}
