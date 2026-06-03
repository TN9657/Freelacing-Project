import { motion } from "motion/react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../lib/translations";

export default function Timeline() {
  const { language } = useLanguage();
  const t = translations[language];
  const milestones = t.timeline.milestones;

  return (
    <section className="bg-secondary/50 py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading eyebrow={t.timeline.eyebrow} title={t.timeline.title} />
        <div className="relative mt-16">
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" />
          <ul className="space-y-12">
            {milestones.map((m, i) => (
              <motion.li
                key={m.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
              >
                <div className={`pl-10 md:pl-0 ${i % 2 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                  <span className="font-serif text-3xl sm:text-4xl font-semibold text-accent">
                    {m.year}
                  </span>
                  <h3 className="mt-2 font-serif text-xl sm:text-2xl font-semibold text-primary">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                </div>
                <div className="hidden md:block" />
                <span className="absolute left-2.5 top-2 h-4 w-4 rounded-full border-4 border-white bg-gradient-royal shadow-card-luxury md:left-1/2 md:-translate-x-1/2" />
              </motion.li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
