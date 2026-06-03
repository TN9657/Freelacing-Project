import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, Search, Building2, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const getLinks = (lang: "en" | "mr") => [
  { to: "/", label: lang === "en" ? "Home" : "होम" },
  { to: "/about", label: lang === "en" ? "About Us" : "आमच्याबद्दल" },
  { to: "/properties", label: lang === "en" ? "Properties" : "मालमत्ता" },
  { to: "/contact", label: lang === "en" ? "Contact" : "संपर्क" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const { pathname } = useLocation();
  const { language, setLanguage } = useLanguage();
  const transparentOnHero = pathname === "/" && !scrolled;
  const links = getLinks(language);

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
            PrachiInfra
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
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

          {/* Language Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangDropdown((v) => !v)}
              className={cn(
                "flex items-center gap-1.5 rounded-full p-2 transition-colors",
                transparentOnHero
                  ? "text-white hover:bg-white/10"
                  : "text-primary hover:bg-secondary",
              )}
              aria-label="Toggle language"
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase">
                {language === "en" ? "EN" : "MR"}
              </span>
            </button>
            {langDropdown && (
              <div className="absolute right-0 mt-1 w-24 rounded-lg bg-white shadow-lg border border-border overflow-hidden z-50">
                <button
                  onClick={() => {
                    setLanguage("en");
                    setLangDropdown(false);
                  }}
                  className={cn(
                    "w-full px-4 py-2.5 text-sm font-medium text-left transition-colors",
                    language === "en"
                      ? "bg-gradient-royal text-white"
                      : "text-primary hover:bg-secondary"
                  )}
                >
                  English
                </button>
                <button
                  onClick={() => {
                    setLanguage("mr");
                    setLangDropdown(false);
                  }}
                  className={cn(
                    "w-full px-4 py-2.5 text-sm font-medium text-left transition-colors",
                    language === "mr"
                      ? "bg-gradient-royal text-white"
                      : "text-primary hover:bg-secondary"
                  )}
                >
                  मराठी
                </button>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="rounded-full bg-gradient-royal px-5 py-2.5 text-sm font-medium text-white shadow-card-luxury transition-transform hover:scale-[1.03]"
          >
            {language === "en" ? "Get in Touch" : "संपर्क साधा"}
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
            <div className="mt-2 border-t border-border pt-3">
              <p className="px-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                {language === "en" ? "Language" : "भाषा"}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setLanguage("en");
                    setOpen(false);
                  }}
                  className={cn(
                    "flex-1 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    language === "en"
                      ? "bg-gradient-royal text-white"
                      : "bg-secondary text-primary hover:bg-border"
                  )}
                >
                  English
                </button>
                <button
                  onClick={() => {
                    setLanguage("mr");
                    setOpen(false);
                  }}
                  className={cn(
                    "flex-1 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    language === "mr"
                      ? "bg-gradient-royal text-white"
                      : "bg-secondary text-primary hover:bg-border"
                  )}
                >
                  मराठी
                </button>
              </div>
            </div>
            <Link
              to="/contact"
              className="mt-3 rounded-full bg-gradient-royal px-5 py-3 text-center text-sm font-medium text-white"
            >
              {language === "en" ? "Get in Touch" : "संपर्क साधा"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
