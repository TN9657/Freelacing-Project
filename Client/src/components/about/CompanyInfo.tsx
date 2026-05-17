import { motion } from "motion/react";
import Container from "../common/Container";
import villa from "@/assets/prop-villa.jpg";

export default function CompanyInfo() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">Who We Are</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-primary sm:text-4xl md:text-5xl">
              Fifteen years of carefully chosen property.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              TempCompany was founded in 2009 with a single belief — that buying property should
              feel calm, not chaotic. We work with a deliberately small client list, build long
              relationships, and present only what we'd buy ourselves.
            </p>
            <div className="mt-8 sm:mt-10 grid gap-6 sm:gap-8 sm:grid-cols-2">
              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Our Mission</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Match the right property to the right owner — and stand behind that match for
                  years.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Our Vision</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  India's most trusted boutique real-estate house, known for restraint and care.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={villa}
              alt=""
              className="rounded-3xl shadow-luxury aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-gradient-royal p-6 text-white shadow-luxury sm:block">
              <p className="font-serif text-4xl font-semibold">2009</p>
              <p className="text-xs uppercase tracking-widest text-white/80">Established</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
