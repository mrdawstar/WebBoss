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
  MailIcon,
  ArrowRight,
  MessageSquare,
  Calendar,
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
      className="py-16 px-4 md:py-20 relative"
      ref={ref}
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* Główne Schema.org dla sekcji usług */}
      <div className="sr-only">
        <meta itemProp="name" content="Tworzenie stron internetowych – WebBoss" />
        <meta
          itemProp="description"
          content="Projektowanie i tworzenie stron internetowych: landing page, strony firmowe oraz pakiety premium."
        />
        <link itemProp="url" href="https://webbosswarszawa.com/#cennik" />
        <meta itemProp="provider" content="WebBoss" />
        <meta itemProp="areaServed" content="Warszawa, Polska" />
        <meta itemProp="serviceType" content="Web Development" />
        <meta itemProp="serviceAudience" content="Firmy, Przedsiębiorcy" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 text-primary text-sm font-medium mb-4 border border-primary/20"
          >
            <Rocket size={14} />
            Pakiety stron internetowych
          </motion.span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Cennik stron internetowych dla{" "}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Twojej firmy
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Kompletne rozwiązania dopasowane do potrzeb i budżetu. Tworzymy strony, które konwertują
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
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
                itemProp="offers"
              >
                {/* Schema.org dla każdego pakietu */}
                <div className="sr-only">
                  <meta itemProp="name" content={`Pakiet ${plan.name}`} />
                  <meta itemProp="description" content={plan.description} />
                  <meta itemProp="price" content={plan.price} />
                  <meta itemProp="priceCurrency" content="PLN" />
                  <meta itemProp="availability" content="https://schema.org/InStock" />
                  <meta itemProp="validFrom" content="2024-01-01" />
                  <link itemProp="url" href="https://webbosswarszawa.com/#kontakt" />
                  <div itemProp="eligibleRegion" itemScope itemType="https://schema.org/Country">
                    <meta itemProp="name" content="Polska" />
                  </div>
                  <div itemProp="eligibleRegion" itemScope itemType="https://schema.org/City">
                    <meta itemProp="name" content="Warszawa" />
                  </div>
                  <div itemProp="priceSpecification" itemScope itemType="https://schema.org/PriceSpecification">
                    <meta itemProp="price" content={plan.price} />
                    <meta itemProp="priceCurrency" content="PLN" />
                    <meta itemProp="valueAddedTaxIncluded" content="false" />
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="relative"
                >
                  {/* Badge */}
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
                    className={`h-full rounded-2xl p-6 transition-all duration-500 relative overflow-hidden border ${colors.border} ${colors.bg} ${colors.hover} ${plan.badge ? 'pt-12' : 'pt-6'}`}
                    role="article"
                    aria-label={`Pakiet ${plan.name} - ${plan.price} zł`}
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent" />

                    <div className="relative z-10">
                      {/* Plan header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                            plan.popular || plan.color === "premium"
                              ? "bg-white/20"
                              : "bg-primary/10"
                          }`}>
                            <PlanIcon size={24} className={colors.text} />
                          </div>
                          <div>
                            <h2 className={`text-lg font-bold ${colors.text} mb-1`} itemProp="name">
                              {plan.name}
                            </h2>
                            <p className={`text-xs ${colors.textLight}`} itemProp="description">
                              {plan.tagline}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Time */}
                      <div className="flex items-center gap-2 mb-4">
                        <Clock size={14} className={colors.accent} />
                        <span className={`text-xs font-medium ${colors.textLight}`}>
                          Realizacja: {plan.time}
                        </span>
                      </div>

                      {/* Price */}
                      <div className="mb-6 pb-4 border-b border-white/10">
                        <div className="flex items-baseline">
                          <span className={`text-3xl font-bold ${colors.text}`}>
                            {plan.price}
                          </span>
                          <span className={`text-base ml-1 ${colors.textLight}`}>
                            {plan.period}
                          </span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h3 className={`font-semibold text-xs mb-3 ${colors.textLight}`}>
                          Co zawiera pakiet:
                        </h3>
                        <ul className="space-y-2">
                          {plan.features.map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-xs"
                            >
                              <div
                                className={`w-3 h-3 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                  plan.popular || plan.color === "premium"
                                    ? "bg-white/20"
                                    : "bg-primary/10"
                                }`}
                              >
                                <Check
                                  size={8}
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
                      <div className="mb-6 p-3 rounded-lg bg-white/5">
                        <p className={`text-xs ${colors.textLight}`}>
                          {plan.description}
                        </p>
                      </div>

                      {/* CTA */}
                      <motion.a
                        href="#kontakt"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className={`block w-full text-center py-2.5 px-4 rounded-xl font-medium transition-all duration-300 ${
                          plan.popular
                            ? "bg-white text-gray-900 hover:bg-gray-100 shadow-md"
                            : plan.color === "premium"
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-md hover:shadow-purple-500/30"
                            : "bg-gradient-to-r from-primary to-primary/80 text-white hover:shadow-md hover:shadow-primary/30"
                        }`}
                        aria-label={`Wybierz pakiet ${plan.name} za ${plan.price} zł`}
                      >
                        <MailIcon size={14} className="inline mr-2" />
                        Skontaktuj się
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Hidden SEO Content - poprawione */}
        <div className="sr-only" aria-hidden="true">
          <h2>Cennik tworzenia stron internetowych WebBoss Warszawa</h2>
          <p>
            Oferujemy przystępny cennik tworzenia stron internetowych dla firm i przedsiębiorców z Warszawy. 
            Nasze pakiety są kompleksowe i zawierają wszystkie niezbędne elementy do skutecznej 
            obecności online. Ceny są przejrzyste i konkurencyjne na rynku warszawskim.
          </p>
          <h3>Landing Page - idealna na start</h3>
          <p>
            Pakiet Landing Page to doskonały wybór dla firm, które chcą szybko pojawić się w internecie. 
            Strona jednostronicowa z optymalizacją SEO, idealna do promocji usług i zbierania zapytań.
          </p>
          <h3>Strona firmowa - kompleksowe rozwiązanie</h3>
          <p>
            Najczęściej wybierany pakiet przez firmy z Warszawy. Zawiera wszystkie niezbędne elementy 
            do profesjonalnej prezentacji firmy online z optymalizacją pod kątem konwersji.
          </p>
          <h3>Pakiet Premium - zaawansowane rozwiązania</h3>
          <p>
            Dla wymagających klientów, którzy chcą wyróżnić się wizualnie. Zaawansowane animacje, 
            premium design i pełne wsparcie w zarządzaniu projektem.
          </p>
          <p>
            Każdy pakiet obejmuje hosting, domenę, certyfikat SSL i optymalizację SEO. 
            Oferujemy także indywidualne wyceny dla niestandardowych projektów.
          </p>
        </div>

        {/* Nowy CTA sekcja zamiast additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-transparent mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-gray-800">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Darmowa konsultacja online
              </span>
            </div>
          </div>

          <div className="relative max-w-2xl mx-auto">
            {/* Glow background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 blur-3xl opacity-50 rounded-3xl" />
            
            <div className="relative bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Potrzebujesz indywidualnej oferty?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                    Omówimy Twój projekt, doradzimy najlepsze rozwiązanie i przygotujemy spersonalizowaną wycenę
                  </p>
                </div>
                
                <motion.a
                  href="#kontakt"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">Umów bezpłatną</span>
                    <span className="text-base font-bold">konsultację</span>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  Darmowa wycena w 24h
                </span>
                <span className="hidden md:inline">•</span>
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  Bez zobowiązań
                </span>
                <span className="hidden md:inline">•</span>
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  Elastyczne warunki
                </span>
              </div>
            </div>
          </div>
          
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-6">
            Wszystkie ceny podane w złotych netto. Oferujemy elastyczne warunki współpracy i płatności.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;