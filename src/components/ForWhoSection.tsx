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
  ExternalLink,
  Sparkles,
} from "lucide-react";

const targets = [
  {
    icon: Building2,
    title: "Firmy bez strony WWW",
    description: "Nowa strona od podstaw w Warszawie",
    accent: "Stwórz obecność online",
  },
  {
    icon: RefreshCw,
    title: "Modernizacja stron",
    description: "Redesign starych, nieaktualnych witryn",
    accent: "Odśwież wizerunek",
  },
  {
    icon: Scissors,
    title: "Barberzy & Beauty",
    description: "Salony kosmetyczne i fryzjerskie",
    accent: "Przyciągnij klientów",
  },
  {
    icon: Car,
    title: "Branża motoryzacyjna",
    description: "Detailerzy, warsztaty, salony",
    accent: "Pokaż realizacje",
  },
  {
    icon: Store,
    title: "Sklepy & Usługi",
    description: "Lokalny biznes w Warszawie",
    accent: "Zwiększ widoczność",
  },
  {
    icon: Briefcase,
    title: "Wszystkie branże",
    description: "Każdy rodzaj działalności",
    accent: "Dopasowane rozwiązania",
  },
];

const ForWhoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="dla-kogo" className="py-16 px-4 md:py-20 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Nagłówek z podkreśloną Warszawą */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          {/* Tytuł sekcji */}
          <div className="mb-8">
            <span className="text-lg font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider inline-flex items-center">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-orange-400 mr-3"></span>
              Dla kogo tworzymy
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-orange-400 ml-3"></span>
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Strony WWW dla firm w{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Warszawie
              </span>
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-orange-400/40 via-orange-500/60 to-amber-400/40 rounded-full blur-sm"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <motion.div 
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
            </span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Specjalizujemy się w tworzeniu profesjonalnych stron internetowych dla różnych branż
          </p>
        </motion.div>

        {/* Fiszki - grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {targets.map((target, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                type: "spring",
                stiffness: 80,
                damping: 12
              }}
              whileHover={{ 
                y: -6,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              {/* Ramka fiszki - ZMIENIONE NA 10% PRZEZROCZYSTOŚĆ */}
              <div className="relative h-full p-5 md:p-6 bg-white/30 backdrop-blur-sm dark:bg-gray-800/10 rounded-2xl border border-white/20 dark:border-gray-700/20 hover:border-orange-300/50 dark:hover:border-orange-500/30 hover:shadow-xl transition-all duration-300 overflow-hidden">
                
                {/* Pomarańczowy gradient w tle */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-400/5 to-amber-500/5 group-hover:from-orange-400/10 group-hover:to-amber-500/10 transition-opacity duration-300 rounded-bl-full" />
                
                {/* Pomarańczowy akcent w rogu */}
                <div className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full group-hover:scale-150 transition-transform duration-300" />
                
                {/* Header fiszki */}
                <div className="flex items-start gap-4 mb-4 relative">
                  {/* Ikona w pomarańczowym kole */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center shadow-lg group-hover:from-orange-500 group-hover:to-amber-600 transition-all duration-300">
                      <target.icon className="w-6 h-6 text-white" />
                    </div>
                    {/* Pomarańczowe halo */}
                    <motion.div 
                      className="absolute -inset-2 rounded-xl bg-gradient-to-br from-orange-400/20 to-amber-500/10 blur-md"
                      animate={{ 
                        opacity: [0.2, 0.3, 0.2],
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                  
                  {/* Nagłówek fiszki */}
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg md:text-xl mb-1 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                      {target.title}
                    </h3>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-orange-50/30 to-amber-50/30 dark:from-orange-950/20 dark:to-amber-950/20 rounded-full border border-orange-100/50 dark:border-orange-900/20">
                      <Sparkles className="w-3 h-3 text-orange-500" />
                      <span className="text-xs font-medium text-orange-600 dark:text-orange-400">
                        {target.accent}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Opis */}
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mb-6 leading-relaxed">
                  {target.description}
                </p>

                {/* Dolny pasek - bez "więcej" */}
                <div className="pt-4 border-t border-white/10 dark:border-gray-700/20">
                  <div className="flex items-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                      Warszawa • Strona WWW
                    </span>
                    <motion.div 
                      className="ml-auto w-6 h-6 flex items-center justify-center text-orange-500"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>

                {/* Pomarańczowa ramka na hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-200/30 dark:group-hover:border-orange-500/20 rounded-2xl transition-all duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <motion.a
            href="#kontakt"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:via-amber-600 hover:to-orange-700 text-white font-semibold px-7 md:px-9 py-4 md:py-5 rounded-xl hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Efekt transportujący */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Tekst i ikona transportująca */}
            <span className="relative z-10 text-base md:text-lg">Zamów profesjonalną stronę WWW</span>
            <div className="relative z-10 flex items-center">
              <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-45 transition-transform duration-300" />
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity
                }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </div>
          </motion.a>
          
          <p className="mt-5 text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-amber-400" />
            Darmowa wycena • Realizacja 7-14 dni • Warszawa i okolice
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ForWhoSection;