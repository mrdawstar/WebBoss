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
    title: "Firmy bez strony internetowej",
    description: "Zbuduj profesjonalną obecność online od podstaw.",
  },
  {
    icon: RefreshCw,
    title: "Firmy ze starą stroną",
    description: "Odśwież wizerunek i zwiększ konwersję.",
  },
  {
    icon: Scissors,
    title: "Barberzy i salony beauty",
    description: "Przyciągnij klientów stylowym designem.",
  },
  {
    icon: Car,
    title: "Detailerzy i branża motoryzacyjna",
    description: "Pokaż swoje realizacje w najlepszym świetle.",
  },
  {
    icon: Store,
    title: "Sklepy i lokale usługowe",
    description: "Zwiększ widoczność lokalnego biznesu.",
  },
  {
    icon: Briefcase,
    title: "Każdy rodzaj firmy",
    description: "Dopasujemy rozwiązanie do Twoich potrzeb.",
  },
];

const ForWhoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="dla-kogo" className="section-padding relative z-10" ref={ref}>
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Dla kogo <span className="text-gradient-accent">tworzymy</span>?
          </h2>
          <p className="text-xl text-muted-foreground">
            Współpracujemy z firmami każdej wielkości i branży.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
            >
              <div className="glass-card-hover rounded-3xl p-8 h-full relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                  >
                    <target.icon className="w-7 h-7 text-accent" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                    {target.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {target.description}
                  </p>
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
          >
            Zamów stronę internetową
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ForWhoSection;