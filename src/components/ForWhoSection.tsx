import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building2,
  RefreshCw,
  Scissors,
  Car,
  Store,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const targets = [
  {
    icon: Building2,
    title: "Firmy w Warszawie bez strony internetowej",
    description: "Zbuduj profesjonalną obecność online od podstaw. Strony WWW dla firm w Warszawie.",
    keywords: ["nowa strona internetowa Warszawa", "firma bez strony WWW Warszawa", "pierwsza strona firmy Warszawa"]
  },
  {
    icon: RefreshCw,
    title: "Modernizacja starych stron WWW",
    description: "Odśwież wizerunek i zwiększ konwersję. Redesign stron internetowych Warszawa.",
    keywords: ["modernizacja strony Warszawa", "redesign strony WWW Warszawa", "odświeżenie strony internetowej"]
  },
  {
    icon: Scissors,
    title: "Barberzy i salony beauty w Warszawie",
    description: "Przyciągnij klientów stylowym designem. Strony dla salonów kosmetycznych Warszawa.",
    keywords: ["strona dla barbera Warszawa", "salon beauty strona internetowa", "fryzjer Warszawa strona WWW"]
  },
  {
    icon: Car,
    title: "Detailerzy i branża motoryzacyjna",
    description: "Pokaż swoje realizacje w najlepszym świetle. Strony dla warsztatów Warszawa.",
    keywords: ["strona detailera Warszawa", "warsztat samochodowy strona WWW", "branża motoryzacyjna Warszawa"]
  },
  {
    icon: Store,
    title: "Sklepy i lokale usługowe Warszawa",
    description: "Zwiększ widoczność lokalnego biznesu. Strony dla sklepów internetowych.",
    keywords: ["sklep internetowy Warszawa", "lokal usługowy strona WWW", "biznes lokalny Warszawa"]
  },
  {
    icon: Briefcase,
    title: "Każdy rodzaj firmy w Warszawie",
    description: "Dopasujemy rozwiązanie do Twoich potrzeb. Profesjonalne strony dla różnych branż.",
    keywords: ["strony dla wszystkich branż", "firmy każdej wielkości Warszawa", "różne branże strona internetowa"]
  },
];

const ForWhoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="dla-kogo" 
      className="section-padding relative z-10" 
      ref={ref}
      itemScope
      itemType="https://schema.org/ItemList"
    >
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
            Dla kogo
          </motion.span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Dla kogo tworzymy strony internetowe w <span className="text-gradient-accent">Warszawie</span>?
          </h1>
          <p className="text-xl text-muted-foreground" itemProp="description">
            Jako specjaliści od stron WWW w Warszawie współpracujemy z firmami każdej wielkości i branży. 
            Tworzymy profesjonalne strony internetowe dla przedsiębiorców z Warszawy i okolic.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          {targets.map((target, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -60 : 60,
                y: 30,
              }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
              itemProp="item"
              itemScope
              itemType="https://schema.org/Service"
            >
              <div 
                className="glass-card-hover rounded-3xl p-8 h-full relative overflow-hidden"
                role="article"
                aria-label={`Strona internetowa dla ${target.title.toLowerCase()}`}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    aria-hidden="true"
                  >
                    <target.icon className="w-7 h-7 text-accent" />
                  </motion.div>

                  {/* Content */}
                  <h2 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300" itemProp="name">
                    {target.title}
                  </h2>
                  <meta itemProp="serviceType" content="Tworzenie stron internetowych" />
                  <meta itemProp="areaServed" content="Warszawa, Mazowieckie" />
                  <p className="text-muted-foreground text-sm leading-relaxed" itemProp="description">
                    {target.description}
                  </p>
                  <div className="mt-3">
                    <meta itemProp="keywords" content={target.keywords.join(", ")} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <motion.a
            href="#kontakt"
            className="btn-accent text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Zamów stronę internetową w Warszawie - formularz kontaktowy"
          >
            Zamów profesjonalną stronę WWW w Warszawie
            <ArrowRight size={18} />
          </motion.a>
          <p className="mt-4 text-sm text-muted-foreground">
            Strony internetowe dla firm z Warszawy i okolic Mazowsza
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ForWhoSection;