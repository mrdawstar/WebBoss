import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User, TrendingUp, Palette, Zap } from "lucide-react";

const features = [
  {
    icon: User,
    title: "Indywidualne podejście",
    description:
      "Każdy projekt traktujemy wyjątkowo, dostosowując rozwiązania do Twoich potrzeb.",
  },
  {
    icon: TrendingUp,
    title: "Więcej klientów",
    description:
      "SEO + optymalizacja konwersji = więcej zapytań i klientów dla Twojej firmy.",
  },
  {
    icon: Palette,
    title: "Premium design",
    description:
      "Nowoczesne, estetyczne projekty, które wyróżniają się na tle konkurencji.",
  },
  {
    icon: Zap,
    title: "Szybkość & wydajność",
    description:
      "Strony zoptymalizowane pod kątem szybkości ładowania i wydajności.",
  },
];

const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="o-nas" className="section-padding relative z-10" ref={ref}>
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
            className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4"
          >
            Dlaczego my
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Dlaczego <span className="text-gradient-primary">WebBoss</span>?
          </h2>
          <p className="text-xl text-muted-foreground">
            Tworzymy strony internetowe, które wyróżniają się użytecznością i
            skutecznością.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
            >
              <div className="glass-card-hover rounded-3xl p-8 h-full card-glow">
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;