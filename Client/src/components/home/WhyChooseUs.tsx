import { motion } from "motion/react";
import { Award, Building2, HandCoins, ShieldCheck } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const items = [
  {
    icon: ShieldCheck,
    title: "Verified Listings",
    text: "Every title checked, every document reviewed before it reaches you.",
  },
  {
    icon: Award,
    title: "15+ Years Expertise",
    text: "A trusted name across Mumbai, Pune, Bangalore and Goa.",
  },
  {
    icon: HandCoins,
    title: "Investment-Grade",
    text: "Curated assets that grow in value, location after location.",
  },
  {
    icon: Building2,
    title: "End-to-End Service",
    text: "From discovery to registration — handled with white-glove care.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The TempCompany Difference"
          subtitle="We're not a marketplace. We're a small, careful team that treats your investment like our own."
        />
        <div className="mt-12 sm:mt-16 grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-luxury"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-royal text-white shadow-card-luxury">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-serif text-xl font-semibold text-primary">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
