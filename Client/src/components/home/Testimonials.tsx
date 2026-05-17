import { motion } from "motion/react";
import { Quote } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const items = [
  {
    name: "Ananya Mehta",
    role: "Investor • Mumbai",
    text: "TempCompany helped me close a BKC commercial floor in under six weeks. Calm, precise and entirely trustworthy.",
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

export default function Testimonials() {
  return (
    <section className="bg-secondary/50 py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading eyebrow="Client Voices" title="Words from Owners" />
        <div className="mt-12 sm:mt-16 grid gap-6 sm:gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative flex flex-col rounded-3xl bg-card p-6 sm:p-8 shadow-card-luxury"
            >
              <Quote className="h-8 w-8 text-accent/40" />
              <blockquote className="mt-5 flex-1 font-serif text-lg leading-relaxed text-primary">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-7 border-t border-border pt-5">
                <p className="font-semibold text-primary">{t.name}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
