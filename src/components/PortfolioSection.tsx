"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Monitor, Sparkles, Eye, ArrowRight } from "lucide-react";

const projects = [

  {
    id: 1,
    title: "Kancelaria Adwokacka – Anna Szydłowska",
    category: "Kancelaria prawna",
    url: "https://adwokat-anna-szydlowska.vercel.app",
    gradient: "from-amber-500 to-orange-600",
    image: "/www2.png",
    description: "Profesjonalny portal dla kancelarii adwokackiej",
    features: ["Strefa klienta", "Blog prawny", "System terminów"]
  },
  {
    id: 2,
    title: "Firma Remontowa – Marek Gadzicki",
    category: "Usługi remontowe",
    url: "https://marekgadzicki.vercel.app",
    gradient: "from-blue-500 to-indigo-600",
    image: "/www1.png",
    description: "Kompleksowa prezentacja usług remontowych",
    features: ["Kalkulator wyceny", "Mapa realizacji", "Opinie klientów"]
  },

      {
    id: 3,
    title: "ZBOIS Remonty",
    category: "Firma remontowa",
    url: "https://zbois-remonty-vercel.vercel.app",
    gradient: "from-emerald-500 to-teal-600",
    image: "/www4.png",
    description: "Nowoczesna strona dla firmy remontowej z Warszawy",
    features: ["Responsywność", "Formularz kontaktowy", "Galeria realizacji"]
  },
  {
    id: 4,
    title: "Warszawska Kancelaria – Piotr Stosio",
    category: "Kancelaria radcy prawnego",
    url: "https://warszawska-kancelaria-piotr-stosio.vercel.app",
    gradient: "from-purple-500 to-violet-600",
    image: "/www3.png",
    description: "Elegancka strona dla kancelarii prawnej",
    features: ["Kontakt 24/7", "Specjalizacje", "Doświadczenie"]
  },

];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="section-padding relative z-10 overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 blur-3xl rounded-full" />
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/30 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Portfolio
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Nasze <span className="text-gradient-primary">realizacje</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-muted-foreground"
          >
            Zobacz, jak pomagamy firmom z Warszawy rozwijać się w internecie
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{
                opacity: 0,
                y: 60,
                scale: 0.95,
                rotateX: 10,
              }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                rotateX: 0 
              } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="relative group block no-underline text-foreground hover:text-foreground" // Ważne style
            >
              {/* Card */}
              <div className="relative h-full rounded-3xl overflow-hidden border border-border bg-background/50 backdrop-blur-sm shadow-lg shadow-black/5 group-hover:shadow-xl group-hover:shadow-primary/10 transition-all duration-500">
                {/* Browser Top Bar */}
                <div className="h-10 bg-gradient-to-r from-secondary to-secondary/80 flex items-center gap-2 px-4 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-background/80 rounded-md px-3 py-1 text-xs text-muted-foreground flex items-center gap-1.5 max-w-[200px] truncate">
                      <Monitor className="w-3 h-3" />
                      {project.url.replace("https://", "")}
                    </div>
                  </div>
                </div>

                {/* Image Container */}
                <div className="relative h-64 md:h-72 overflow-hidden bg-gradient-to-br from-secondary/20 to-transparent">
                  {/* Real Image */}
                  <div className="relative w-full h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Hover Overlay - USUŃ link z tego miejsca */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end p-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="mb-4"
                      >
                        <div className="flex flex-wrap gap-2 justify-center mb-4">
                          {project.features.map((feature, idx) => (
                            <span 
                              key={idx} 
                              className="px-3 py-1 text-xs font-medium rounded-full bg-background/80 text-foreground border border-border"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        <p className="text-center text-sm text-muted-foreground">
                          {project.description}
                        </p>
                      </motion.div>
                      
                      {/* ZMIEŃ ten link na div z przyciskiem */}
                      <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold shadow-lg">
                        <Eye className="w-4 h-4" />
                        Zobacz na żywo
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>

                {/* Project Info */}
                <div className="p-6 lg:p-8 relative">
                  {/* Category Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`} />
                    <span className={`text-sm font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* URL Link - ZMIEŃ na div */}
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="truncate max-w-[200px]">
                        {project.url.replace("https://", "")}
                      </span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                    
                    <motion.div
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.div>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className={`absolute top-0 right-0 w-16 h-16 overflow-hidden`}>
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                </div>
              </div>

              {/* Floating Elements - pozostają bez zmian */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
                className={`absolute -top-3 -right-3 w-6 h-6 rounded-full bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
              />
              
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.7
                }}
                className={`absolute -bottom-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r ${project.gradient} opacity-15 group-hover:opacity-30 transition-opacity duration-500`}
              />
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 lg:mt-24"
        >
          <div className="inline-block px-6 py-3 rounded-full border border-border bg-secondary/30 mb-6">
            <p className="text-muted-foreground">
              Każdy projekt to unikalne rozwiązanie
            </p>
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
            Chcesz taką stronę dla swojej firmy?
          </h3>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-semibold text-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group"
          >
            <span>Umów bezpłatną konsultację</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;