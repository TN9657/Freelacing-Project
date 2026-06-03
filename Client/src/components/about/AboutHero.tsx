import { motion } from "motion/react";
import about from "@/assets/about-office.jpg";
import Container from "../common/Container";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function AboutHero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative h-[60vh] min-h-[420px] sm:h-[70vh] sm:min-h-[480px] w-full overflow-hidden">
      <img
        src={about}
        alt="TempCompany office"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />
      <Container className="relative z-10 flex h-full flex-col justify-end pb-10 sm:pb-16 text-white">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.25em] sm:tracking-[0.4em] text-white/80"
        >
          {language === "en" ? "About PrachiInfra" : "PrachiInfra बद्दल"}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="mt-3 sm:mt-4 max-w-3xl font-serif text-3xl font-semibold leading-tight sm:text-5xl md:text-6xl"
        >
          {language === "en"
            ? "A quiet, careful approach to extraordinary property."
            : "असाधारण मालमत्तेसाठी शांत, सावधान दृष्टिकोन."}
        </motion.h1>
      </Container>
    </section>
  );
}
