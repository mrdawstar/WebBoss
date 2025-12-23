import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User, TrendingUp, Palette, Zap } from "lucide-react";

const features = [
  {
    icon: User,
    title: "Indywidualne podejście dla firm w Warszawie",
    description:
      "Każdy projekt traktujemy wyjątkowo, dostosowując rozwiązania do potrzeb Twojej firmy w Warszawie. Personalizowane strony WWW.",
    keywords: ["indywidualne projektowanie Warszawa", "personalizacja stron", "dostosowanie do firmy Warszawa"]
  },
  {
    icon: TrendingUp,
    title: "Optymalizacja SEO i konwersji",
    description:
      "SEO + optymalizacja konwersji = więcej zapytań i klientów dla Twojej firmy. Pozycjonowanie stron Warszawa.",
    keywords: ["SEO Warszawa", "optymalizacja konwersji", "pozycjonowanie stron WWW", "więcej klientów Warszawa"]
  },
  {
    icon: Palette,
    title: "Nowoczesny design premium",
    description:
      "Nowoczesne, estetyczne projekty, które wyróżniają się na tle konkurencji. Responsywne strony internetowe Warszawa.",
    keywords: ["nowoczesny design Warszawa", "premium design stron", "estetyczne strony WWW", "design responsywny"]
  },
  {
    icon: Zap,
    title: "Szybkość ładowania i wydajność",
    description:
      "Strony zoptymalizowane pod kątem szybkości ładowania i wydajności. Szybkie strony WWW dla firm w Warszawie.",
    keywords: ["szybkość strony Warszawa", "optymalizacja wydajności", "Google PageSpeed", "szybkie ładowanie stron"]
  },
];

const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="o-nas" 
      className="section-padding relative z-10 overflow-hidden" 
      ref={ref}
      itemScope
      itemType="https://schema.org/WebPageElement"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-blue-50/5 to-transparent" />
      
      {/* Decorative blurs */}
      <div className="absolute top-1/4 left-5% w-80 h-80 bg-blue-400/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-5% w-80 h-80 bg-purple-400/5 rounded-full blur-3xl -z-10" />
      
      <div className="container-custom">
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
            className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4"
          >
            Dlaczego my
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Dlaczego warto wybrać <span className="text-gradient-primary">WebBoss</span> w <span className="text-gradient-primary">Warszawie</span>?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground" itemProp="description">
            Jako doświadczeni specjaliści od stron internetowych w Warszawie, tworzymy strony WWW, które 
            wyróżniają się użytecznością, skutecznością i przynoszą realne efekty dla firm z Warszawy.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/Service"
            >
              {/* DLA KOMPUTERÓW - oryginalny układ */}
              <div className="hidden lg:block relative rounded-3xl p-6 lg:p-8 h-full overflow-hidden transition-all duration-500 bg-white/30 backdrop-blur-sm border border-white/20 hover:border-white/70 hover:bg-white/20 hover:shadow-2xl hover:shadow-blue-500/10"
                role="article"
                aria-label={`${feature.title} - WebBoss Warszawa`}
              >
                {/* Gradient glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                
                {/* Ikonka */}
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 border border-blue-200/30 group-hover:scale-110 transition-transform duration-500"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  aria-hidden="true"
                >
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-blue-600 transition-colors duration-300" />
                </motion.div>
                
                {/* Tytuł */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300" itemProp="name">
                  {feature.title}
                </h3>
                
                {/* Opis */}
                <meta itemProp="serviceType" content="Tworzenie stron internetowych" />
                <meta itemProp="areaServed" content="Warszawa, Mazowieckie" />
                
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed group-hover:text-gray-700 transition-colors duration-300" itemProp="description">
                  {feature.description}
                </p>
                
                <div className="mt-3">
                  <meta itemProp="keywords" content={feature.keywords.join(", ")} />
                </div>
                
                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* DLA TELEFONÓW - uproszczony układ bez ramek */}
              <div className="lg:hidden">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-sm hover:bg-white/60 transition-all duration-300">
                  {/* Ikona - prostsza wersja */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  {/* Treść */}
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-gray-800 mb-1.5" itemProp="name">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed" itemProp="description">
                      {feature.description}
                    </p>
                    <meta itemProp="keywords" content={feature.keywords.join(", ")} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional SEO Content */}
        <div className="mt-16 text-center">
          <div className="sr-only" aria-hidden="true">
            <h3>WebBoss - profesjonalne strony internetowe Warszawa</h3>
            <p>
              WebBoss to zespół specjalistów od stron internetowych w Warszawie. 
              Oferujemy kompleksowe tworzenie stron WWW dla firm z Warszawy i okolic. 
              Nasze strony internetowe w Warszawie wyróżniają się wysoką jakością wykonania, 
              optymalizacją SEO oraz nowoczesnym designem. Działamy na rynku Warszawy, 
              pomagając firmom w budowaniu silnej obecności online.
            </p>
            <ul>
              <li>Strony internetowe dla małych firm Warszawa</li>
              <li>Strony WWW dla średnich przedsiębiorstw Warszawa</li>
              <li>Projektowanie stron internetowych dla startupów Warszawa</li>
              <li>Modernizacja istniejących stron Warszawa</li>
              <li>Optymalizacja SEO stron Warszawa</li>
              <li>Responsywne projektowanie Warszawa</li>
            </ul>
          </div>
          
          <p className="text-lg text-muted-foreground mt-8">
            Wybierając <strong className="text-gradient-primary">WebBoss Warszawa</strong>, wybierasz profesjonalne podejście do 
            tworzenia stron internetowych i realne efekty dla Twojej firmy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;