import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";
import Container from "../common/Container";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const getStats = (language: "en" | "mr") => {
  const t = translations[language];
  return [
    { value: 500, suffix: "+", label: t.stats.properties },
    { value: 1200, suffix: "+", label: t.stats.clients },
    { value: 15, suffix: "+", label: t.stats.experience },
    { value: 12, suffix: "", label: t.stats.locations },
  ];
};

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString());
  useEffect(() => {
    if (inView) animate(mv, to, { duration: 2, ease: [0.2, 0.7, 0.2, 1] });
  }, [inView, mv, to]);
  return (
    <span ref={ref} className="font-serif text-4xl font-semibold sm:text-5xl md:text-6xl">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const { language } = useLanguage();
  const stats = getStats(language);

  return (
    <section className="relative overflow-hidden bg-gradient-royal py-16 sm:py-20 lg:py-24 text-white">
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white,transparent_40%),radial-gradient(circle_at_80%_80%,white,transparent_40%)]" />
      <Container className="relative">
        <div className="grid gap-10 sm:gap-12 grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <Counter to={s.value} suffix={s.suffix} />
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.3em] text-white/75">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
