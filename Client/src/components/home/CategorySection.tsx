import { motion } from "motion/react";
import { Home, Building2, Landmark, TrendingUp } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const categories = [
  {
    icon: Home,
    titleEn: "Residential",
    titleMr: "आवासीय",
    descriptionEn: "Beautiful homes for your family",
    descriptionMr: "आपल्या कुटुंबसाठी सुंदर घर",
    category: "Residential Plots",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Building2,
    titleEn: "Commercial",
    titleMr: "व्यावसायिक",
    descriptionEn: "Prime commercial spaces for business",
    descriptionMr: "व्यवसायासाठी प्रमुख व्यावसायिक स्थान",
    category: "Commercial Properties",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Landmark,
    titleEn: "NA Plots & Land",
    titleMr: "एन.ए. प्लॉट्स व जमीन",
    descriptionEn: "Valuable land parcels in prime locations",
    descriptionMr: "प्रमुख स्थानांवर मूल्यवान जमीन",
    category: "NA Plots",
    color: "from-green-500 to-green-600",
  },
  {
    icon: TrendingUp,
    titleEn: "Investment",
    titleMr: "गुंतवणूक",
    descriptionEn: "High-growth investment opportunities",
    descriptionMr: "उच्च-वृद्धी गुंतवणूक संधी",
    category: "Luxury Homes",
    color: "from-amber-500 to-amber-600",
  },
];

export default function CategorySection() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];

  const handleCategoryClick = (categoryName: string) => {
    navigate({
      to: "/properties",
      search: { selectedCategory: categoryName },
    });
  };

  return (
    <section className="bg-gradient-light py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow={t.categories.eyebrow}
          title={t.categories.title}
          subtitle={t.categories.subtitle}
        />
        <div className="mt-12 sm:mt-16 grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, i) => (
            <motion.button
              key={category.category}
              onClick={() => handleCategoryClick(category.category)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-luxury cursor-pointer text-left"
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${category.color} text-white shadow-card-luxury`}>
                <category.icon className="h-6 w-6" />
              </div>

              <div className="flex items-start justify-between gap-2 mt-6">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-primary">
                    {language === "en" ? category.titleEn : category.titleMr}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {language === "en" ? category.descriptionEn : category.descriptionMr}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center text-sm font-semibold text-accent group-hover:text-primary transition-colors">
                {language === "en" ? "Explore" : "एक्सप्लोर करा"}
                <svg
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </motion.button>
          ))}
        </div>
      </Container>
    </section>
  );
}
