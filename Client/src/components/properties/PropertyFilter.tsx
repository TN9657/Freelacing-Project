import { Slider } from "@/components/ui/slider";
import { categories, type PropertyCategory } from "@/data/addInformation";
import { Search } from "lucide-react";

export interface Filters {
  category: PropertyCategory | "All";
  location: string;
  maxPrice: number;
  featuredOnly: boolean;
}

interface Props {
  filters: Filters;
  setFilters: (f: Filters) => void;
  locations: string[];
}

export default function PropertyFilter({ filters, setFilters, locations }: Props) {
  return (
    <div className="rounded-3xl bg-white p-5 shadow-card-luxury sm:p-8">
      <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.4fr_auto] lg:items-end">
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Category
          </label>
          <select
            value={filters.category}
            onChange={(e) =>
              setFilters({ ...filters, category: e.target.value as Filters["category"] })
            }
            className="h-12 w-full rounded-xl border border-border bg-secondary/50 px-4 text-sm text-primary outline-none focus:border-accent"
          >
            <option value="All">All Categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Location
          </label>
          <select
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            className="h-12 w-full rounded-xl border border-border bg-secondary/50 px-4 text-sm text-primary outline-none focus:border-accent"
          >
            <option value="All">All Locations</option>
            {locations.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            <span>Max Price</span>
            <span className="text-accent">
              {filters.maxPrice >= 100
                ? `₹${(filters.maxPrice / 100).toFixed(1)} Cr`
                : `₹${filters.maxPrice} L`}
            </span>
          </label>
          <Slider
            value={[filters.maxPrice]}
            min={20}
            max={1500}
            step={10}
            onValueChange={([v]) => setFilters({ ...filters, maxPrice: v })}
            className="py-3"
          />
        </div>
        <button
          type="button"
          onClick={() => setFilters({ ...filters, featuredOnly: !filters.featuredOnly })}
          className={`inline-flex h-12 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold transition-colors md:col-span-2 lg:col-span-1 ${
            filters.featuredOnly
              ? "bg-gradient-royal text-white"
              : "bg-secondary text-primary hover:bg-primary hover:text-white"
          }`}
        >
          <Search className="h-4 w-4" />
          {filters.featuredOnly ? "Featured" : "All"}
        </button>
      </div>
    </div>
  );
}
