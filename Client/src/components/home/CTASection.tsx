import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Container from "../common/Container";

export default function CTASection() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-royal px-6 py-12 text-center text-white shadow-luxury sm:px-12 sm:py-20 lg:px-16 lg:py-24"
        >
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-light-blue/30 blur-3xl" />
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-white/75">
            Begin Your Journey
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-2xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Ready to discover a property worth keeping?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/80">
            Tell us what you're looking for. We'll bring you three options that fit — never more,
            never less.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white text-blue-900 px-7 py-3.5 text-sm font-semibold text-primary transition-transform hover:scale-[1.04]"
            >
              Schedule a Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Browse Listings
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
