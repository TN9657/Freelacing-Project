import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact TempCompany — Speak with a Principal" },
      {
        name: "description",
        content:
          "Tell us what you're looking for. Our principals respond personally within one business day.",
      },
      { property: "og:title", content: "Contact TempCompany" },
      { property: "og:description", content: "Speak with a principal at TempCompany Realty." },
    ],
  }),
  component: ContactPage,
});

const details = [
  { icon: MapPin, label: "Visit", value: "Level 18, One BKC, Bandra Kurla Complex, Mumbai 400051" },
  { icon: Phone, label: "Call", value: "+91 98765 43210" },
  { icon: Mail, label: "Email", value: "hello@tempcompany.in" },
  { icon: Clock, label: "Hours", value: "Mon – Sat • 10:00 – 19:00 IST" },
];

function ContactPage() {
  return (
    <>
      <section className="bg-gradient-royal pt-28 pb-16 sm:pt-36 sm:pb-24 text-white">
        <Container>
          <SectionHeading
            light
            align="left"
            eyebrow="Connect With Us"
            title="Begin Your Luxury Journey."
            subtitle="Our distinguished team is delighted to assist whether you're curating your next acquisition, presenting a refined property, or exploring exceptional opportunities."
          />
        </Container>
      </section>

      <section className="bg-gradient-light py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-5">
              {details.map((d, i) => (
                <motion.div
                  key={d.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-5 rounded-2xl bg-white p-6 shadow-card-luxury"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-royal text-white">
                    <d.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {d.label}
                    </p>
                    <p className="mt-1 font-roboto text-lg font-medium text-primary">{d.value}</p>
                  </div>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-royal shadow-luxury"
              >
                <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                  <div>
                    <MapPin className="mx-auto h-10 w-10" />
                    <p className="mt-3 font-serif text-2xl">One BKC, Mumbai</p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-white/70">
                      Interactive map
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 [background-image:radial-gradient(circle_at_30%_40%,white,transparent_50%)] opacity-10" />
              </motion.div>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
