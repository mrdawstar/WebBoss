import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code, 
  Music, 
  Trophy, 
  CheckCircle, 
  Mail,
  Phone,
  ArrowRight,
  Heart,
  Brain,
  Zap,
  Star,
  Sparkles
} from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    "React & Next.js 14",
    "TypeScript Expert",
    "UI/UX Design",
    "Framer Motion Animations",
    "Responsive Design",
    "Performance Optimization",
    "SEO Best Practices",
    "Modern CSS (Tailwind)"
  ];

  const passions = [
    { 
      icon: Trophy, 
      label: "Calisthenics", 
      color: "text-blue-500",
    },
    { 
      icon: Music, 
      label: "Saksofon", 
      color: "text-purple-500",
    },
    { 
      icon: Brain, 
      label: "Programowanie & Szachy", 
      color: "text-green-500",
    },
    { 
      icon: Heart, 
      label: "Zwierzęta & Rysowanie", 
      color: "text-pink-500",
    },
  ];

  const stats = [
    { value: "20+", label: "Projektów" },
    { value: "100%", label: "Zadowolonych klientów" },
    { value: "24h", label: "Odpowiedź" },
  ];

  return (
    <section 
      className="section-padding relative z-10" 
      ref={ref} 
      id="about"
      itemScope 
      itemType="https://schema.org/Person"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-blue-50/5 to-transparent" />
      <div className="absolute top-1/4 left-10% w-80 h-80 bg-blue-400/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-10% w-80 h-80 bg-purple-400/10 rounded-full blur-3xl -z-10" />
      
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Schema.org data */}
            <div className="sr-only">
              <meta itemProp="name" content="Dawid - Web Developer" />
              <meta itemProp="jobTitle" content="Web Developer & Designer" />
              <meta itemProp="description" content="Profesjonalny tworzenie stron internetowych z naciskiem na user experience i design" />
              <meta itemProp="knowsAbout" content="React, Next.js, TypeScript, UI/UX Design, SEO, Responsive Web Design" />
              <meta itemProp="email" content="daveditcreation@gmail.com" />
              <meta itemProp="telephone" content="+48796425392" />
              <link itemProp="url" href="#about" />
            </div>

            {/* Photo & Stats - LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Photo Container */}
              <div className="relative">
                {/* Main photo - glass card style - 20% transparency */}
                <div 
                  className="bg-white/20 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500 border border-white/30"
                  itemProp="image"
                >
                  <div className="aspect-[4/5] relative overflow-hidden rounded-3xl">
                    <img 
                      src="/avatar.PNG"
                      alt="Dawid - Web Developer tworzący nowoczesne strony internetowe" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Profile info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-white text-sm font-medium">Dostępny od zaraz</span>
                      </div>
                      <h1 className="text-2xl font-bold text-white" itemProp="name">Dawid</h1>
                      <p className="text-white/80 text-sm" itemProp="jobTitle">Web Developer & Designer</p>
                    </div>
                  </div>
                </div>

                {/* Floating badge - 20% transparency */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.3 }}
                  className="bg-white/20 backdrop-blur-sm absolute -top-3 -right-3 px-5 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 border border-white/30"
                  aria-label="Ekspert w tworzeniu stron internetowych"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles size={14} className="text-yellow-500" />
                    <span className="text-sm font-semibold text-foreground">Ekspert</span>
                  </div>
                </motion.div>
              </div>

              {/* Stats - 20% transparency */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-3 gap-4 mt-8"
              >
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="bg-white/20 backdrop-blur-sm text-center p-4 rounded-2xl border border-white/30 hover:border-primary/50 transition-all duration-300"
                    itemProp="makesOffer"
                  >
                    <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Content - RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Header */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 mb-6 backdrop-blur-sm">
                  <Sparkles size={14} className="text-primary" />
                  <span className="text-sm font-medium text-primary">O mnie</span>
                </div>
                
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                  Twórca stron internetowych <span className="text-primary">Dawid</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  Specjalizuję się w tworzeniu <strong className="font-semibold text-primary">nowoczesnych stron internetowych</strong> które 
                  przyciągają uwagę, konwertują i zapewniają doskonałe doświadczenie użytkownika.
                </p>
              </div>

              {/* Short Bio */}
              <div className="space-y-4" itemProp="description">
                <p className="text-foreground/80">
                  Jako doświadczony Web Developer, tworzę szybkie, responsywne strony internetowe 
                  z naciskiem na optimalizację SEO i najlepsze praktyki user experience.
                </p>
                <p className="text-foreground/80">
                  Łączę solidne technologie frontendowe z estetycznym designem, który przekłada się na realne wyniki dla biznesu.
                </p>
              </div>

              {/* Passions - 20% transparency */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Zap size={18} className="text-primary" />
                  Pasje i zainteresowania
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {passions.map((passion, index) => (
                    <div 
                      key={index}
                      className="bg-white/20 backdrop-blur-sm flex items-center gap-3 p-3 rounded-xl border border-white/30 hover:border-primary/50 transition-all duration-300"
                      itemProp="knowsAbout"
                    >
                      <div className={`p-2 rounded-lg ${passion.color.replace('text', 'bg')}/20 backdrop-blur-sm`}>
                        <passion.icon size={16} className={passion.color} />
                      </div>
                      <span className="text-sm font-medium text-foreground">{passion.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills - 20% transparency */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Umiejętności techniczne</h3>
                <div className="grid grid-cols-2 gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.05 }}
                      className="bg-white/20 backdrop-blur-sm flex items-center gap-2 p-3 rounded-lg hover:border-primary/50 transition-all duration-300 border border-white/30"
                      itemProp="knowsAbout"
                    >
                      <CheckCircle size={14} className="text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="mailto:daveditcreation@gmail.com"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                    aria-label="Napisz email do twórcy stron internetowych Dawida"
                    itemProp="email"
                  >
                    <Mail size={18} />
                    Napisz do mnie
                    <ArrowRight size={18} className="ml-1" />
                  </a>
                  
                  <a
                    href="tel:+48796425392"
                    className="bg-white/20 backdrop-blur-sm border border-white/30 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold hover:scale-[1.02] active:scale-[0.98] hover:bg-white/30 transition-all duration-300"
                    aria-label="Zadzwoń do twórcy stron internetowych"
                    itemProp="telephone"
                  >
                    <Phone size={18} />
                    Zadzwoń
                  </a>
                </div>
                
                {/* Trust note */}
                <p className="text-sm text-muted-foreground mt-4 italic bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  "Profesjonalne podejście i zaangażowanie w każdy projekt tworzenia stron"
                </p>
              </div>

              {/* Hidden SEO content */}
              <div className="sr-only">
                <h3>Dawid - Web Developer stron internetowych</h3>
                <p>
                  Profesjonalny twórca stron internetowych specjalizujący się w nowoczesnych technologiach frontend.
                  Tworzę responsywne, szybkie i zoptymalizowane pod SEO strony, które przynoszą realne rezultaty.
                </p>
                <p>
                  Specjalizacja: React, Next.js, TypeScript, UI/UX Design, optymalizacja wydajności stron internetowych.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;