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
  Sparkles,
  ArrowRight,
  ChevronRight,
  ChevronDown
} from "lucide-react";

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: MessageSquare,
      title: "Konsultacja & Analiza",
      description: "Dokładne poznanie potrzeb i celów projektu strony internetowej",
      details: [
        "Bezpłatna konsultacja online/telefoniczna",
        "Analiza potrzeb biznesowych i konkurencji",
        "Określenie celów i grupy docelowej strony",
        "Wstępne rekomendacje technologiczne"
      ],
      duration: "1-2 dni",
      number: "01",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      seoKeywords: ["konsultacja strony internetowej", "analiza potrzeb", "planowanie projektu"]
    },
    {
      icon: Calculator,
      title: "Planowanie & Wycena",
      description: "Przygotowanie szczegółowej strategii tworzenia strony",
      details: [
        "Szczegółowa wycena tworzenia strony w 24h",
        "Plan projektu z harmonogramem prac",
        "Propozycja technologii i rozwiązań dla strony",
        "Zatwierdzenie zakresu prac nad stroną"
      ],
      duration: "1 dzień",
      number: "02",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      seoKeywords: ["wycena strony internetowej", "planowanie strony", "harmonogram prac"]
    },
    {
      icon: Code,
      title: "Realizacja & Design",
      description: "Tworzenie i testowanie funkcjonalnej strony internetowej",
      details: [
        "Projektowanie UI/UX i prototypowanie strony",
        "Programowanie z code reviews",
        "Regularne aktualizacje postępu prac",
        "Testy responsywności na różnych urządzeniach"
      ],
      duration: "2-4 tygodnie",
      number: "03",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      seoKeywords: ["realizacja strony internetowej", "programowanie strony", "testowanie strony"]
    },
    {
      icon: Rocket,
      title: "Wdrożenie & Wsparcie",
      description: "Uruchomienie strony i zapewnienie ciągłego wsparcia",
      details: [
        "Wdrożenie strony na serwer i optymalizacja",
        "Szkolenie z obsługi panelu administracyjnego",
        "30 dni bezpłatnego wsparcia po wdrożeniu",
        "Monitorowanie wydajności strony"
      ],
      duration: "3-5 dni",
      number: "04",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      seoKeywords: ["wdrożenie strony internetowej", "wsparcie techniczne", "optymalizacja strony"]
    },
  ];

  const benefits = [
    { icon: Shield, text: "Gwarancja satysfakcji" },
    { icon: Clock, text: "Terminowość realizacji" },
    { icon: Zap, text: "Szybkość działania" },
    { icon: CheckCircle, text: "Jakość potwierdzona" },
  ];

  return (
    <section 
      className="section-padding relative z-10" 
      ref={ref} 
      id="proces"
      itemScope 
      itemType="https://schema.org/WebPage"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-20 left-10% w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10% w-96 h-96 bg-purple-400/10 rounded-full blur-3xl -z-10" />
      
      <div className="container-custom">
        {/* Schema.org for Process */}
        <div className="sr-only">
          <meta itemProp="name" content="Proces tworzenia stron internetowych WebBoss" />
          <meta itemProp="description" content="Przejrzysty proces współpracy przy tworzeniu profesjonalnych stron internetowych" />
          <meta itemProp="keywords" content="proces tworzenia strony, etapy tworzenia strony, współpraca przy stronie internetowej" />
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
          itemScope
          itemType="https://schema.org/HowTo"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm mb-4">
            <Target size={14} className="text-primary" />
            <span className="text-sm font-medium text-primary">Proces współpracy</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Jak wygląda proces tworzenia <span className="text-gradient-primary">strony internetowej</span>?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8" itemProp="description">
            Przejrzysty proces współpracy od pomysłu do gotowej strony internetowej. 
            Wiesz na czym stoisz w każdej chwili realizacji projektu.
          </p>

          {/* Benefits - 20% transparency */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.3 }}
                className="bg-white/20 backdrop-blur-sm border border-white/30 flex items-center gap-2 px-4 py-2 rounded-full hover:border-primary/50 transition-all duration-300"
                aria-label={benefit.text}
              >
                <benefit.icon size={16} className="text-primary" />
                <span className="text-sm font-medium text-foreground">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Vertical Timeline - ALTERNATING - bez pionowej linii, za to ze strzałeczkami */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* USUNIĘTO: Center line - hidden behind cards */}
            
            <div className="space-y-12 lg:space-y-16 relative">
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
                    itemScope
                    itemType="https://schema.org/HowToStep"
                  >
                    <meta itemProp="position" content={String(index + 1)} />
                    <meta itemProp="name" content={step.title} />
                    <meta itemProp="description" content={step.description} />
                    <meta itemProp="keywords" content={step.seoKeywords.join(", ")} />

                    {/* Content wrapper - dla tel flex-col, dla komp z strzałeczkami */}
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                      {/* Lewa strona dla komputerów (dla parzystych pustka, dla nieparzystych strzałka) */}
                      <div className="hidden lg:flex flex-1 items-center justify-end relative">
                        {!isEven && (
                          <div className="relative">
                            {/* Strzałka skierowana w lewo dla nieparzystych */}
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: index * 0.2 }}
                              className="flex items-center gap-2"
                            >
                              <span className="text-sm text-muted-foreground">Etap {step.number}</span>
                              <div className="w-20 h-0.5 bg-gradient-to-l from-primary to-transparent" />
                              <ChevronRight className="text-primary transform rotate-180" size={20} />
                            </motion.div>
                          </div>
                        )}
                      </div>

                      {/* Card - 20% transparency - ZAWSZE na środku dla komputerów */}
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.3 }}
                        className="w-full lg:w-2/3 relative"
                        style={{ zIndex: 10 }}
                        role="article"
                        aria-label={`Etap ${index + 1}: ${step.title}`}
                      >
                        <div className="bg-white/20 backdrop-blur-sm border border-white/30 p-6 lg:p-8 rounded-3xl hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary/20">
                          {/* Step number and title */}
                          <div className="flex items-start gap-4 mb-6">
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              animate={isInView ? { scale: 1, rotate: 0 } : {}}
                              transition={{ duration: 0.5, delay: index * 0.2 + 0.1, type: "spring", stiffness: 200 }}
                              className={`w-16 h-16 rounded-2xl ${step.bgColor} backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-white/30`}
                              aria-hidden="true"
                            >
                              <step.icon className={`w-8 h-8 ${step.color}`} />
                            </motion.div>
                            
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <motion.div
                                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                                  transition={{ delay: index * 0.2 + 0.15 }}
                                  className="text-4xl font-bold text-primary/20 mb-1"
                                >
                                  {step.number}
                                </motion.div>
                                
                                {/* Strzałki dla telefonów - zawsze pod spodem */}
                                <div className="lg:hidden">
                                  {index < steps.length - 1 && (
                                    <motion.div
                                      initial={{ opacity: 0 }}
                                      animate={isInView ? { opacity: 1 } : {}}
                                      transition={{ delay: index * 0.2 + 0.3 }}
                                      className="flex items-center gap-2 text-primary"
                                    >
                                      <span className="text-sm">Następny krok</span>
                                      <ChevronDown size={20} className="animate-bounce" />
                                    </motion.div>
                                  )}
                                </div>
                              </div>
                              
                              <h3 className="text-2xl font-bold text-foreground" itemProp="name">{step.title}</h3>
                            </div>
                          </div>

                          {/* Step description */}
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: index * 0.2 + 0.2 }}
                            className="text-lg text-foreground/80 mb-6"
                            itemProp="description"
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
                                <span className="text-foreground/70" itemProp="tool">{detail}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>

                      {/* Prawa strona dla komputerów (dla parzystych strzałka, dla nieparzystych pustka) */}
                      <div className="hidden lg:flex flex-1 items-center relative">
                        {isEven && index < steps.length - 1 && (
                          <div className="relative">
                            {/* Strzałka skierowana w prawo dla parzystych */}
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: index * 0.2 }}
                              className="flex items-center gap-2"
                            >
                              <ChevronRight className="text-primary" size={20} />
                              <div className="w-20 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                              <span className="text-sm text-muted-foreground">Etap {(index + 1).toString().padStart(2, '0')}</span>
                            </motion.div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Strzałka w dół dla telefonów między krokami */}
                    {index < steps.length - 1 && (
                      <div className="lg:hidden flex justify-center mt-6">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: index * 0.2 + 0.4 }}
                          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center"
                        >
                          <ChevronDown className="text-primary" size={20} />
                        </motion.div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Hidden SEO Content */}
        <div className="mt-12 sr-only">
          <h3>Proces tworzenia strony internetowej krok po kroku</h3>
          <p>
            Nasz proces współpracy przy tworzeniu stron internetowych jest przejrzysty i efektywny. 
            Dzielimy go na 4 główne etapy: konsultacja i analiza, planowanie i wycena, realizacja i design, 
            oraz wdrożenie i wsparcie. Dzięki temu klient ma pełną kontrolę nad postępem prac i wie czego może 
            się spodziewać na każdym etapie tworzenia strony.
          </p>
        </div>

        {/* Final CTA - 20% transparency */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            delay: 1,
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="relative overflow-hidden bg-white/20 backdrop-blur-sm border border-white/30 max-w-2xl mx-auto p-8 rounded-3xl">
            {/* Background gradient animation */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 0.1 } : {}}
              transition={{ delay: 1.2, duration: 1 }}
              className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 backdrop-blur-sm"
              style={{ borderRadius: 'inherit' }}
            />

            {/* Floating sparkles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.4 }}
              className="absolute top-4 right-4"
              aria-hidden="true"
            >
              <Sparkles className="text-primary/40" size={24} />
            </motion.div>

            <div className="relative z-10">
              {/* Animated icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ 
                  delay: 1.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                }}
                whileHover={{ rotate: 360, scale: 1.1 }}
                className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mx-auto mb-6 shadow-xl shadow-primary/30 backdrop-blur-sm"
                aria-hidden="true"
              >
                <Users className="text-white" size={32} />
              </motion.div>
              
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 }}
                className="text-2xl lg:text-3xl font-bold text-foreground mb-4"
              >
                Rozpocznij proces tworzenia swojej strony
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.3 }}
                className="text-lg text-muted-foreground mb-8"
              >
                Omówmy Twój projekt strony internetowej i ustalmy szczegóły współpracy. 
                Bez zobowiązań, za to z konkretną wiedzą o procesie tworzenia.
              </motion.p>

              {/* Animated buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.a
                  href="#kontakt"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)",
                    y: -3 
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ x: -20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 1.5 }}
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-semibold overflow-hidden"
                  aria-label="Umów bezpłatną konsultację tworzenia strony internetowej"
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent to-primary"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Animated arrow */}
                  <motion.div
                    initial={{ x: -5 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2 relative z-10"
                  >
                    <MessageSquare size={20} />
                    <span>Umów bezpłatną konsultację strony</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={18} />
                  </motion.div>
                </motion.a>
                
                <motion.a
                  href="#portfolio"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                    y: -3 
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ x: 20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 1.6 }}
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 font-semibold overflow-hidden hover:bg-white/30"
                  aria-label="Zobacz przykładowe projekty stron internetowych"
                >
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="flex items-center gap-2 relative z-10">
                    <FileText size={20} />
                    <span>Zobacz realizacje stron internetowych</span>
                    <ChevronRight className="group-hover:translate-x-1 transition-transform duration-200" size={18} />
                  </div>
                </motion.a>
              </motion.div>

              {/* Stats with animation - 20% transparency */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.7 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-10 border-t border-white/20"
              >
                {[
                  { value: "24h", label: "Szybka wycena strony" },
                  { value: "100%", label: "Satysfakcji klientów" },
                  { value: "30 dni", label: "Bezpłatne wsparcie" },
                  { value: "0 zł", label: "Za konsultację" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.8 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="text-center p-4 rounded-2xl bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 border border-white/30"
                    aria-label={`${stat.value} ${stat.label}`}
                  >
                    <div className="text-2xl font-bold text-gradient-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;