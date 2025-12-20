"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Check,
  Star,
  Sparkles,
  Clock,
  Zap,
  TrendingUp,
  Crown,
  Rocket,
  MailIcon
} from "lucide-react";

const plans = [
  {
    name: "Landing Page",
    tagline: "Prosta, szybka i skuteczna strona",
    price: "1000",
    period: "zł netto",
    time: "do 7 dni",
    description: "Idealna, jeśli chcesz szybko pokazać ofertę i zbierać zapytania.",
    features: [
      "1 strona (scrollowana)",
      "Responsywna (telefon, tablet, PC)",
      "Nowoczesny design",
      "Formularz kontaktowy + CTA",
      "HTTPS (SSL), hosting + domena",
      "Podstawowa optymalizacja SEO",
      "Integracja z Google Maps / social media",
      "Bezpłatna wycena"
    ],
    popular: false,
    icon: Zap,
    color: "blue",
    badge: null,
    seoKeywords: ["landing page", "jednostronicowa strona", "szybka strona internetowa", "strona promocyjna"]
  },
  {
    name: "Strona firmowa",
    tagline: "Profesjonalny wizerunek Twojej firmy",
    price: "2500",
    period: "zł netto",
    time: "7–14 dni",
    description: "Idealna dla firm usługowych, lokali, restauracji i biznesów lokalnych.",
    features: [
      "Do 5 podstron",
      "Responsywny design + projekt graficzny",
      "Animacje (scroll, hover)",
      "Przemyślany UX",
      "Wyraźne CTA",
      "Formularze kontaktowe",
      "HTTPS (SSL), hosting + domena",
      "Optymalizacja SEO",
      "Integracja z Google Analytics",
      "Wsparcie po uruchomieniu",
      "Bezpłatna wycena"
    ],
    popular: true,
    icon: TrendingUp,
    color: "primary",
    badge: {
      text: "Najczęściej wybierana",
      icon: Star,
      color: "from-yellow-500 to-orange-500"
    },
    seoKeywords: ["strona firmowa", "wizytówka online", "strona dla firmy", "strona usługowa"]
  },
  {
    name: "Premium",
    tagline: "Strona wizualnie na najwyższym poziomie",
    price: "3000",
    period: "zł netto",
    time: "14–21 dni",
    description: "Dla firm, które chcą wyróżnić się wizualnie i wyglądać jak marka premium. Oferujemy pełne wsparcie i indywidualne podejście.",
    features: [
      "6–8 podstron",
      "Autorski design premium (UI & UX)",
      "Zaawansowane animacje i mikrointerakcje",
      "Interaktywne elementy i efekty 3D",
      "Dynamiczne efekty scroll (parallax, motion)",
      "Optymalizacja pod szybkość i płynność działania",
      "HTTPS (SSL), hosting + domena",
      "Rozszerzona optymalizacja SEO",
      "Priorytetowe wsparcie techniczne",
      "Dedykowany menedżer projektu",
      "Darmowa domena na pierwszy rok",
      "Bezpłatna wycena i konsultacja",
      "Gwarancja satysfakcji"
    ],
    popular: false,
    icon: Crown,
    color: "premium",
    badge: {
      text: "Premium",
      icon: Sparkles,
      color: "from-purple-600 to-pink-600"
    },
    seoKeywords: ["strona premium", "design premium", "zaawansowana strona", "strona z animacjami"]
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getCardColors = (plan) => {
    if (plan.color === "premium") {
      return {
        bg: "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900",
        text: "text-white",
        textLight: "text-white/80",
        accent: "text-purple-300",
        border: "border-purple-500/20",
        badge: plan.badge?.color || "from-purple-600 to-pink-600",
        hover: "hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1"
      };
    } else if (plan.popular) {
      return {
        bg: "bg-gradient-to-br from-primary via-primary/90 to-primary/80",
        text: "text-white",
        textLight: "text-white/80",
        accent: "text-yellow-200",
        border: "border-primary/30",
        badge: plan.badge?.color || "from-yellow-500 to-orange-500",
        hover: "hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1"
      };
    } else {
      return {
        bg: "bg-white dark:bg-gray-900",
        text: "text-gray-900 dark:text-white",
        textLight: "text-gray-600 dark:text-gray-300",
        accent: "text-primary",
        border: "border-gray-200 dark:border-gray-800",
        badge: "from-blue-500 to-cyan-500",
        hover: "hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
      };
    }
  };

  return (
    <section 
      id="cennik" 
      className="section-padding relative z-10" 
      ref={ref}
      itemScope
      itemType="https://schema.org/Product"
    >
      <div className="container-custom">
        {/* Schema.org for Pricing */}
        <div className="sr-only" itemScope itemType="https://schema.org/AggregateOffer">
          <link itemProp="url" href="#cennik" />
          <meta itemProp="name" content="Cennik stron internetowych WebBoss" />
          <meta itemProp="description" content="Profesjonalne pakiety tworzenia stron internetowych w atrakcyjnych cenach" />
          <meta itemProp="lowPrice" content="1000" />
          <meta itemProp="highPrice" content="3000" />
          <meta itemProp="priceCurrency" content="PLN" />
          <meta itemProp="availability" content="https://schema.org/InStock" />
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            <Rocket size={14} />
            Pakiety stron internetowych
          </motion.span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Cennik stron internetowych dla <span className="text-gradient-primary">Twojej firmy</span>
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground">
            Kompletne rozwiązania dopasowane do potrzeb i budżetu. Tworzymy strony, które konwertują
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const colors = getCardColors(plan);
            const BadgeIcon = plan.badge?.icon;
            const PlanIcon = plan.icon;

            return (
              <div 
                key={index} 
                className="relative"
                itemScope
                itemType="https://schema.org/Offer"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="relative"
                >
                  {/* Schema.org for each plan */}
                  <div className="sr-only">
                    <meta itemProp="name" content={plan.name} />
                    <meta itemProp="description" content={plan.description} />
                    <meta itemProp="price" content={plan.price} />
                    <meta itemProp="priceCurrency" content="PLN" />
                    <meta itemProp="keywords" content={plan.seoKeywords.join(", ")} />
                  </div>

                  {/* Badge - przyczepiony do karty */}
                  {plan.badge && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: -20 }}
                      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                    >
                      <div className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r ${colors.badge} text-white text-xs font-bold shadow-lg`}>
                        {BadgeIcon && <BadgeIcon size={14} className="fill-current" />}
                        <span className="whitespace-nowrap">{plan.badge.text}</span>
                      </div>
                    </motion.div>
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: 0.2 + index * 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`h-full rounded-3xl p-6 lg:p-8 transition-all duration-500 relative overflow-hidden border ${colors.border} ${colors.bg} ${colors.hover} ${plan.badge ? 'pt-12' : 'pt-8'}`}
                    role="article"
                    aria-label={`Pakiet ${plan.name} - ${plan.price} zł`}
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent" />

                    <div className="relative z-10">
                      {/* Plan header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                            plan.popular || plan.color === "premium"
                              ? "bg-white/20"
                              : "bg-primary/10"
                          }`}>
                            <PlanIcon size={28} className={colors.text} />
                          </div>
                          <div>
                            <h2 className={`text-xl lg:text-2xl font-bold ${colors.text} mb-1`}>
                              {plan.name}
                            </h2>
                            <p className={`text-sm ${colors.textLight}`}>
                              {plan.tagline}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Time */}
                      <div className="flex items-center gap-2 mb-6">
                        <Clock size={16} className={colors.accent} />
                        <span className={`text-sm font-medium ${colors.textLight}`}>
                          Realizacja: {plan.time}
                        </span>
                      </div>

                      {/* Price */}
                      <div className="mb-8 pb-8 border-b border-white/10">
                        <div className="flex items-baseline">
                          <span className={`text-4xl lg:text-5xl font-bold ${colors.text}`} itemProp="price">
                            {plan.price}
                          </span>
                          <span className={`text-lg ml-2 ${colors.textLight}`} itemProp="priceCurrency">
                            {plan.period}
                          </span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h3 className={`font-semibold text-sm mb-4 ${colors.textLight}`}>
                          Co zawiera pakiet:
                        </h3>
                        <ul className="space-y-2.5">
                          {plan.features.map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-xs sm:text-sm"
                            >
                              <div
                                className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                  plan.popular || plan.color === "premium"
                                    ? "bg-white/20"
                                    : "bg-primary/10"
                                }`}
                              >
                                <Check
                                  size={10}
                                  className={
                                    plan.popular || plan.color === "premium"
                                      ? "text-white"
                                      : "text-primary"
                                  }
                                />
                              </div>
                              <span className={`${colors.textLight}`}>
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Description */}
                      <div className="mb-8 p-4 rounded-xl bg-white/5">
                        <p className={`text-xs sm:text-sm ${colors.textLight}`} itemProp="description">
                          {plan.description}
                        </p>
                      </div>

                      {/* CTA */}
                      <motion.a
                        href="#kontakt"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className={`block w-full text-center py-3 lg:py-3.5 px-6 rounded-2xl font-bold transition-all duration-300 ${
                          plan.popular
                            ? "bg-white text-gray-900 hover:bg-gray-100 shadow-lg"
                            : plan.color === "premium"
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/30 border border-purple-500/30"
                            : "bg-primary text-white hover:shadow-lg hover:shadow-primary/30"
                        }`}
                        aria-label={`Wybierz pakiet ${plan.name} za ${plan.price} zł`}
                        itemProp="url"
                      >
                        <MailIcon size={16} className="inline mr-2" />
                        Skontaktuj się
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Hidden SEO Content */}
        <div className="mt-12 sr-only">
          <h2>Cennik tworzenia stron internetowych WebBoss</h2>
          <p>
            Oferujemy przystępny cennik tworzenia stron internetowych dla firm i przedsiębiorców. 
            Nasze pakiety są kompleksowe i zawierają wszystkie niezbędne elementy do skutecznej 
            obecności online. Ceny są przejrzyste i konkurencyjne na rynku.
          </p>
          <ul>
            <li>Landing Page - idealna na start dla małych firm</li>
            <li>Strona firmowa - kompleksowe rozwiązanie dla przedsiębiorców</li>
            <li>Pakiet premium - zaawansowana strona dla wymagających klientów</li>
          </ul>
          <p>
            Każdy pakiet obejmuje hosting, domenę, certyfikat SSL i optymalizację SEO. 
            Oferujemy także indywidualne wyceny dla niestandardowych projektów.
          </p>
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 pt-8 border-t border-border"
        >
          <p className="text-muted-foreground text-lg mb-4">
            Potrzebujesz indywidualnej wyceny lub masz niestandardowe wymagania?
          </p>
          <a 
            href="#kontakt" 
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
            aria-label="Skontaktuj się w sprawie indywidualnej wyceny strony internetowej"
          >
            <MailIcon size={18} />
            Skontaktuj się z nami po spersonalizowaną ofertę
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            Wszystkie ceny podane w złotych netto. Oferujemy elastyczne warunki współpracy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;