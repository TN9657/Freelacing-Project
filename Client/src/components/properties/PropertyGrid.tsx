import type { Property } from "@/data/addInformation";
import PropertyCard from "./PropertyCard";

export default function PropertyGrid({ items }: { items: Property[] }) {
  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-secondary/40 p-14 text-center">
        <p className="font-serif text-2xl text-primary">No properties match your filters</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Try adjusting your category or price range.
        </p>
      </div>
    );
  }
  return (
    <div className="grid gap-5 sm:gap-6 lg:gap-7 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p, i) => (
        <PropertyCard key={p.id} property={p} index={i} />
      ))}
    </div>
  );
}
