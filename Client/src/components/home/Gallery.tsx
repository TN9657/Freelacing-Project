import { motion } from "motion/react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import villa from "@/assets/prop-villa.jpg";
import luxury from "@/assets/prop-luxury.jpg";
import commercial from "@/assets/prop-commercial.jpg";
import apartment from "@/assets/prop-apartment.jpg";
import farmhouse from "@/assets/prop-farmhouse.jpg";
import residential from "@/assets/prop-residential.jpg";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const images = [
  { src: villa, span: "col-span-2 lg:col-span-2 lg:row-span-2 aspect-[2/1] lg:aspect-square" },
  { src: luxury, span: "aspect-[4/5]" },
  { src: commercial, span: "aspect-[4/5]" },
  { src: apartment, span: "aspect-[4/5]" },
  { src: farmhouse, span: "aspect-[4/5]" },
  { src: residential, span: "col-span-2 aspect-[2/1]" },
];

export default function Gallery() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow={language === "en" ? "Portfolio" : "पोर्टफोलिओ"}
          title={t.gallery.title}
          subtitle={t.gallery.subtitle}
        />
        <div className="mt-10 sm:mt-14 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl shadow-card-luxury ${img.span}`}
            >
              <img
                src={img.src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
