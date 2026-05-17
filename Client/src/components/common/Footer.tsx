import { Link } from "@tanstack/react-router";
import {
  Building2,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Container from "./Container";
import { categories } from "@/data/addInformation";

export default function Footer() {
  return (
    <footer className="bg-gradient-royal text-white">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 sm:gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                <Building2 className="h-5 w-5" />
              </div>
              <span className="font-serif  text-2xl font-semibold">TempCompany</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Crafting trusted real-estate experiences across India — luxury living, premium plots
              and sound investments since 2009.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                  aria-label="Social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/properties" className="hover:text-white">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white">
              Categories
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {categories.slice(0, 6).map((c) => (
                <li key={c}>
                  <Link
                    to="/category/$slug"
                    params={{ slug: c.toLowerCase().replace(/\s+/g, "-") }}
                    className="hover:text-white"
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm text-white/75">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                Level 18, One BKC, Bandra Kurla Complex, Mumbai 400051
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                +91 98765 43210
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                hello@tempcompany.in
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} TempCompany Realty. All rights reserved.</p>
          <p>Crafted for discerning property owners.</p>
        </div>
      </Container>
    </footer>
  );
}
