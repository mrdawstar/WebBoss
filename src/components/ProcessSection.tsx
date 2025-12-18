import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  MessageSquare, 
  Calculator, 
  Code, 
  Rocket, 
  CheckCircle, 
  Clock, 
  Shield, 
  Zap,
  FileText,
  Users,
  Target,
  Sparkles
} from "lucide-react";

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: MessageSquare,
      title: "Konsultacja & Analiza",
      description: "Dokładnie poznajemy Twój biznes i cele",
      details: [
        "Bezpłatna konsultacja online/telefoniczna",
        "Analiza potrzeb i konkurencji",
        "Określenie celów i grupy docelowej",
        "Wstępne rekomendacje technologiczne"
      ],
      duration: "1-2 dni",
      number: "01",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Calculator,
      title: "Planowanie & Wycena",
      description: "Przygotowujemy szczegółową strategię",
      details: [
        "Szczegółowa wycena w 24h",
        "Plan projektu z harmonogramem",
        "Propozycja technologii i rozwiązań",
        "Zatwierdzenie zakresu prac"
      ],
      duration: "1 dzień",
      number: "02",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Code,
      title: "Realizacja & Design",
      description: "Tworzymy i testujemy rozwiązanie",
      details: [
        "Projektowanie UI/UX i prototypowanie",
        "Programowanie z code reviews",
        "Regularne aktualizacje postępu",
        "Testy na różnych urządzeniach"
      ],
      duration: "2-4 tygodnie",
      number: "03",
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Rocket,
      title: "Wdrożenie & Wsparcie",
      description: "Uruchamiamy i dbamy o Twój sukces",
      details: [
        "Wdrożenie na serwer i optymalizacja",
        "Szkolenie z obsługi panelu",
        "30 dni bezpłatnego wsparcia",
        "Monitorowanie wydajności"
      ],
      duration: "3-5 dni",
      number: "04",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
  ];

  const benefits = [
    { icon: Shield, text: "Gwarancja satysfakcji" },
    { icon: Clock, text: "Terminowość" },
    { icon: Zap, text: "Szybkość działania" },
    { icon: CheckCircle, text: "Jakość potwierdzona" },
  ];

  return (
    <section className="section-padding relative z-10" ref={ref} id="proces">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-4">
            <Target size={14} className="text-primary" />
            <span className="text-sm font-medium text-primary">Proces współpracy</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Jak wygląda <span className="text-gradient-primary">nasza współpraca</span>?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8">
            Przejrzysty proces od pomysłu do realizacji. Wiesz na czym stoisz w każdej chwili.
          </p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="glass-card flex items-center gap-2 px-4 py-2 rounded-full hover:scale-105 transition-all duration-300"
              >
                <benefit.icon size={16} className="text-primary" />
                <span className="text-sm font-medium text-foreground">{benefit.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Vertical Timeline - ALTERNATING */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Center line - hidden behind cards */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-accent transform -translate-x-1/2 hidden lg:block pointer-events-none" style={{ zIndex: 1 }} />
            
            <div className="space-y-12 lg:space-y-16 relative" style={{ zIndex: 2 }}>
              {steps.map((step, index) => {
                const isEven = index % 2 === 0;
                const stepRef = useRef(null);
                const stepInView = useInView(stepRef, { once: false, margin: "-50px" });
                
                return (
                  <motion.div
                    key={index}
                    ref={stepRef}
                    initial={{ opacity: 0, y: 40 }}
                    animate={stepInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative"
                  >

                    {/* Content wrapper */}
                    <div className={`flex ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-start`}>
                      {/* Left/Right spacer for desktop */}
                      <div className="hidden lg:flex flex-1" />

                      {/* Card */}
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="w-full lg:w-1/2 relative"
                        style={{ zIndex: 10 }}
                      >
                        <div className="glass-card p-6 lg:p-8 rounded-3xl hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary/20">
                          {/* Step number and title */}
                          <div className="flex items-start gap-4 mb-6">
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              animate={isInView ? { scale: 1, rotate: 0 } : {}}
                              transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                              className={`w-16 h-16 rounded-2xl ${step.bgColor} flex items-center justify-center flex-shrink-0`}
                            >
                              <step.icon className={`w-8 h-8 ${step.color}`} />
                            </motion.div>
                            
                            <div>
                              <motion.div
                                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: index * 0.2 + 0.15 }}
                                className="text-4xl font-bold text-primary/20 mb-1"
                              >
                                {step.number}
                              </motion.div>
                              <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                            </div>
                          </div>

                          {/* Step description */}
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: index * 0.2 + 0.2 }}
                            className="text-lg text-foreground/80 mb-6"
                          >
                            {step.description}
                          </motion.p>

                          {/* Details list */}
                          <div className="space-y-3">
                            {step.details.map((detail, detailIndex) => (
                              <motion.div
                                key={detailIndex}
                                initial={{ opacity: 0, x: isEven ? -15 : 15 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: index * 0.2 + 0.25 + detailIndex * 0.08 }}
                                className="flex items-start gap-3"
                              >
                                <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                                <span className="text-foreground/70">{detail}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>

                      {/* Right/Left spacer for desktop */}
                      <div className="hidden lg:flex flex-1" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="glass-card max-w-2xl mx-auto p-8 rounded-3xl">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mx-auto mb-6">
              <Users className="text-white" size={28} />
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Gotowy na współpracę?
            </h3>
            
            <p className="text-lg text-muted-foreground mb-6">
              Omówmy Twój projekt i ustalmy szczegóły. Bez zobowiązań, za to z konkretną wiedzą.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-3 px-8 py-3 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-xl hover:shadow-primary/30 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <MessageSquare size={20} />
                Umów bezpłatną konsultację
              </a>
              
              <a
                href="#portfolio"
                className="glass-card inline-flex items-center justify-center gap-3 px-8 py-3 rounded-2xl font-semibold hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <FileText size={20} />
                Zobacz przykładowe projekty
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">24h</div>
                <div className="text-sm text-muted-foreground">Szybka wycena</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Satysfakcji klientów</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">30 dni</div>
                <div className="text-sm text-muted-foreground">Bezpłatne wsparcie</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">0 zł</div>
                <div className="text-sm text-muted-foreground">Za konsultację</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;