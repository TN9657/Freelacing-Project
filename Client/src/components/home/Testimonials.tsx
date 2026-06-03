import { motion } from "motion/react";
import { Quote } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const itemsEn = [
  {
    name: "Ananya Mehta",
    role: "Investor • Mumbai",
    text: "PrachiInfra helped me close a BKC commercial floor in under six weeks. Calm, precise and entirely trustworthy.",
  },
  {
    name: "Vikram Rao",
    role: "Homeowner • Bangalore",
    text: "We toured plots for a year before meeting them. The first property they showed us is the one we bought.",
  },
  {
    name: "Priya Iyer",
    role: "NRI Buyer • Goa",
    text: "Handled everything remotely — paperwork, registration, even a video walkthrough at sunrise. Exceptional team.",
  },
];

const itemsMr = [
  {
    name: "आनन्या मेहता",
    role: "गुंतवणूकदार • मुंबई",
    text: "PrachiInfra ने मला सहा आठवड्यांत एक BKC व्यावसायिक मजला बंद करण्यास मदत केली. शांत, अचूक आणि संपूर्णपणे विश्वस्त.",
  },
  {
    name: "विक्रम राव",
    role: "गृहमालक • बंगलोर",
    text: "आम्ही त्यांना भेटण्यापूर्वी एक वर्ष प्लॉट्स पाहणे सुरू ठेवले. त्यांनी आम्हाला दाखविलेली पहिलीच मालमत्ता म्हणजे आम्ही खरेदी केलेली.",
  },
  {
    name: "प्रिया अय्यर",
    role: "एनआरआই खरेदीदार • गोवा",
    text: "सर्व काही दूरून हाताळले — कागदपत्र, नोंदणी, अगदी सूर्योदयाच्या वेळी व्हिडिओ वॉकथ्रू. असाधारण टीम.",
  },
];

export default function Testimonials() {
  const { language } = useLanguage();
  const t = translations[language];
  const items = language === "en" ? itemsEn : itemsMr;

  return (
    <section className="bg-secondary/50 py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow={t.testimonials.title}
          title={language === "en" ? "Words from Owners" : "मालकांच्या शब्द"}
          subtitle={t.testimonials.subtitle}
        />
        <div className="mt-12 sm:mt-16 grid gap-6 sm:gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative flex flex-col rounded-3xl bg-card p-6 sm:p-8 shadow-card-luxury"
            >
              <Quote className="h-8 w-8 text-accent/40" />
              <blockquote className="mt-5 flex-1 font-serif text-lg leading-relaxed text-primary">
                "{item.text}"
              </blockquote>
              <figcaption className="mt-7 border-t border-border pt-5">
                <p className="font-semibold text-primary">{item.name}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{item.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
