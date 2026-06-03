import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, MapPin, Search } from "lucide-react";
import { useRef } from "react";
import hero from "@/assets/hero-villa.jpg";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const scale = useTransform(scrollY, [0, 600], [1, 1.08]);
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[560px] sm:min-h-[640px] w-full overflow-hidden"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={hero}
          alt="Luxury villa at twilight"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </motion.div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 text-center text-white pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.22em] sm:tracking-[0.4em] text-white/80"
        >
          {t.hero.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
          className="mt-5 sm:mt-6 max-w-4xl font-serif text-[2rem] xs:text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {t.hero.title}
          <span className="block italic font-light text-light-blue">{t.hero.subtitle}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-5 sm:mt-6 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base md:text-lg"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <Link
            to="/properties"
            className="group inline-flex items-center gap-2 rounded-full bg-white text-blue-900 text-bold px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-primary shadow-luxury transition-transform hover:scale-[1.04]"
          >
            {t.hero.exploreProperties}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            {t.hero.scheduleVisit}
          </Link>
        </motion.div>

        {/*
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-10 sm:mt-14 w-full max-w-3xl glass rounded-2xl p-2.5 sm:p-3 shadow-luxury"
        >
          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid gap-2.5 sm:gap-3 sm:grid-cols-2 md:grid-cols-[1fr_1fr_auto] md:items-center"
          >
            <div className="flex items-center gap-2 rounded-xl text-blue-900 bg-white/95 px-4 py-3 text-left">
              <MapPin className="h-4 w-4 text-accent" />
              <input
                type="text"
                placeholder="Location (e.g. Mumbai)"
                className="w-full bg-transparent text-sm text-primary outline-none placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white/95  text-blue-900 px-4 py-3 text-left">
              <Search className="h-4 w-4 text-accent" />
              <select className="w-full bg-transparent text-sm text-primary outline-none">
                <option>Any category</option>
                <option>Villas</option>
                <option>NA Plots</option>
                <option>Luxury Homes</option>
                <option>Apartments</option>
              </select>
            </div>
            <button
              type="submit"
              className="rounded-xl bg-gradient-royal px-7 py-3 text-sm font-semibold text-white shadow-card-luxury transition-transform hover:scale-[1.03] sm:col-span-2 md:col-span-1"
            >
              Search
            </button>
          </form>
        </motion.div> */}
      </div>

      {/* scroll cue */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-white/70"
      >
        Scroll
      </motion.div> */}
    </section>
  );
}
