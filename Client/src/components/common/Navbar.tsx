import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, Search, Building2 } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/properties", label: "Properties" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const transparentOnHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        transparentOnHero
          ? "bg-transparent"
          : "bg-white/85 backdrop-blur-md shadow-card-luxury border-b border-border",
      )}
    >
      <nav className="mx-auto flex h-16 sm:h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12">
        <Link to="/" className="flex items-center gap-2 group">
          <div
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-xl transition-colors",
              transparentOnHero ? "bg-white/15 text-white" : "bg-gradient-royal text-white",
            )}
          >
            <Building2 className="h-5 w-5" />
          </div>
          <span
            className={cn(
              "font-serif text-xl sm:text-2xl font-semibold tracking-tight",
              transparentOnHero ? "text-white" : "text-primary",
            )}
          >
            TempCompany
          </span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "text-sm font-medium transition-colors",
                transparentOnHero
                  ? "text-white/85 hover:text-white"
                  : "text-primary/80 hover:text-primary",
              )}
              activeProps={{
                className: transparentOnHero
                  ? "text-white after:scale-x-100"
                  : "text-primary after:scale-x-100",
              }}
            >
              {l.label}
            </Link>
          ))}
          <button
            type="button"
            aria-label="Search"
            className={cn(
              "rounded-full p-2 transition-colors",
              transparentOnHero
                ? "text-white hover:bg-white/10"
                : "text-primary hover:bg-secondary",
            )}
          >
            <Search className="h-4 w-4" />
          </button>
          <Link
            to="/contact"
            className="rounded-full bg-gradient-royal px-5 py-2.5 text-sm font-medium text-white shadow-card-luxury transition-transform hover:scale-[1.03]"
          >
            Get in Touch
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "rounded-md p-2 md:hidden",
            transparentOnHero ? "text-white" : "text-primary",
          )}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-white/95 backdrop-blur-md">
          <div className="flex flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-md px-3 py-3 text-base font-medium text-primary hover:bg-secondary"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 rounded-full bg-gradient-royal px-5 py-3 text-center text-sm font-medium text-white"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
