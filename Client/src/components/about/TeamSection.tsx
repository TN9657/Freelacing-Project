import { motion } from "motion/react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const team = [
  { name: "Rajiv Malhotra", role: "Founder & Principal", initials: "RM" },
  { name: "Sneha Kulkarni", role: "Head of Luxury Portfolio", initials: "SK" },
  { name: "Aditya Shah", role: "Director, Commercial", initials: "AS" },
  { name: "Meera Joshi", role: "Head of NRI Services", initials: "MJ" },
];

export default function TeamSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="The People"
          title="Small team. Big standards."
          subtitle="Every transaction is led personally by one of our four principals."
        />
        <div className="mt-12 sm:mt-16 grid gap-5 sm:gap-7 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group rounded-3xl bg-secondary/40 p-5 sm:p-8 text-center transition-all hover:-translate-y-1 hover:bg-gradient-royal hover:text-white"
            >
              <div className="mx-auto flex h-16 w-16 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-gradient-royal text-lg sm:text-2xl font-semibold text-white shadow-luxury group-hover:bg-white group-hover:text-primary">
                {m.initials}
              </div>
              <h3 className="mt-4 sm:mt-6 font-serif text-base sm:text-xl font-semibold text-primary group-hover:text-white">
                {m.name}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground group-hover:text-white/80">
                {m.role}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
