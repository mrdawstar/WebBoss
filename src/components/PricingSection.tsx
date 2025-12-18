import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Star, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Landing Page",
    price: "1000",
    period: "zł netto",
    description: "Idealna na start",
    features: [
      "do 7 dni realizacji",
      "1 strona",
      "Formularz kontaktowy",
      "SSL + hosting",
      "Bezpłatna wycena",
    ],
    popular: false,
  },
  {
    name: "Strona firmowa",
    price: "2500",
    period: "zł netto",
    description: "Najczęściej wybierana",
    features: [
      "do 5 podstron",
      "Design od zera",
      "Animacje + SEO",
      "Call-to-action",
      "Wsparcie po wdrożeniu",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "3000",
    period: "zł netto",
    description: "Dla wymagających",
    features: [
      "6–8 podstron",
      "UX premium",
      "Zaawansowane animacje",
      "Szybkie ładowanie",
      "Gotowa pod rozwój",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cennik" className="section-padding relative z-10" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4"
          >
            Cennik
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Pakiety dla każdej <span className="text-gradient-accent">firmy</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Wybierz pakiet dopasowany do Twoich potrzeb.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative ${plan.popular ? "md:-mt-6 md:mb-6" : ""}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="absolute -top-5 left-1/2 -translate-x-1/2 z-20"
                >
                  <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-accent to-accent-glow text-accent-foreground text-sm font-bold shadow-lg shadow-accent/30">
                    <Star size={14} className="fill-current" />
                    Popularne
                    <Sparkles size={14} />
                  </div>
                </motion.div>
              )}

              <div
                className={`h-full rounded-3xl p-8 transition-all duration-500 relative overflow-hidden group ${
                  plan.popular
                    ? "bg-gradient-to-br from-primary via-primary to-primary-glow text-primary-foreground shadow-2xl shadow-primary/30"
                    : "glass-card-hover"
                }`}
              >
                {/* Glow effect for popular */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-glow/20 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}

                <div className="relative z-10">
                  {/* Plan name */}
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      plan.popular ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mb-8 ${
                      plan.popular
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <span
                      className={`text-5xl lg:text-6xl font-bold ${
                        plan.popular ? "text-primary-foreground" : "text-foreground"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-lg ml-2 ${
                        plan.popular
                          ? "text-primary-foreground/80"
                          : "text-muted-foreground"
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                            plan.popular
                              ? "bg-primary-foreground/20"
                              : "bg-primary/10"
                          }`}
                        >
                          <Check
                            size={14}
                            className={
                              plan.popular
                                ? "text-primary-foreground"
                                : "text-primary"
                            }
                          />
                        </div>
                        <span
                          className={`text-sm ${
                            plan.popular
                              ? "text-primary-foreground/90"
                              : "text-muted-foreground"
                          }`}
                        >
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.a
                    href="#kontakt"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`block w-full text-center py-4 px-6 rounded-2xl font-bold transition-all duration-300 ${
                      plan.popular
                        ? "bg-background text-foreground hover:bg-background/90 shadow-lg"
                        : "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/30"
                    }`}
                  >
                    Bezpłatna wycena
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;