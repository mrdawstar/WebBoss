"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, User } from "lucide-react";

const testimonials = [
  {
    name: "Anna Kowalska",
    company: "Salon Beauty Anna",
    text: "Profesjonalne podejście i świetny efekt końcowy. Strona przyciąga nowych klientów każdego dnia!",
    rating: 5,
    avatar: "A",
    seoDescription: "Klientka z salonu kosmetycznego o profesjonalnej stronie internetowej"
  },
  {
    name: "Marek Nowak",
    company: "Auto Detailing Premium",
    text: "WebBoss stworzył dla nas stronę, która idealnie oddaje charakter naszej działalności. Polecam!",
    rating: 5,
    avatar: "M",
    seoDescription: "Opinia klienta z branży motoryzacyjnej o stworzonej stronie WWW"
  },
  {
    name: "Katarzyna Wiśniewska",
    company: "Kancelaria Prawna",
    text: "Szybka realizacja, doskonała komunikacja i strona, która wzbudza zaufanie klientów.",
    rating: 5,
    avatar: "K",
    seoDescription: "Recenzja prawniczki o stronie internetowej dla kancelarii"
  },
  {
    name: "Piotr Zieliński",
    company: "Usługi Remontowe",
    text: "Dzięki nowej stronie liczba zapytań wzrosła o 200%. Najlepsza inwestycja w biznes!",
    rating: 5,
    avatar: "P",
    seoDescription: "Opinia przedsiębiorcy z branży remontowej o skuteczności strony"
  },
  {
    name: "Magdalena Dąbrowska",
    company: "Studio Fryzjerskie",
    text: "Piękny design i funkcjonalność. Klienci często chwalą naszą stronę!",
    rating: 5,
    avatar: "M",
    seoDescription: "Recenzja właścicielki salonu fryzjerskiego o projekcie strony"
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section 
      id="opinie" 
      className="section-padding relative z-10" 
      ref={ref}
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <div className="container-custom">
        {/* Schema.org for Testimonials */}
        <div className="sr-only" itemScope itemType="https://schema.org/ItemList">
          <meta itemProp="name" content="Opinie klientów WebBoss" />
          <meta itemProp="description" content="Recenzje i opinie zadowolonych klientów o stronach internetowych" />
        </div>

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
            Opinie klientów
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Opinie o <span className="text-gradient-primary">stronach internetowych</span> WebBoss
          </h2>
          <p className="text-xl text-muted-foreground">
            Zobacz, co mówią klienci o naszych realizacjach stron internetowych
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Testimonial Card */}
            <div 
              className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden"
              itemScope
              itemType="https://schema.org/Review"
            >
              <Quote className="w-16 h-16 text-primary/10 mb-8" />

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  {/* Hidden SEO data */}
                  <div className="sr-only">
                    <meta itemProp="author" content={testimonials[current].name} />
                    <meta itemProp="description" content={testimonials[current].seoDescription} />
                    <meta itemProp="itemReviewed" content="Strona internetowa" />
                  </div>

                  {/* Quote */}
                  <p 
                    className="text-xl md:text-2xl lg:text-3xl text-foreground font-medium leading-relaxed mb-10"
                    itemProp="reviewBody"
                  >
                    "{testimonials[current].text}"
                  </p>

                  {/* Rating */}
                  <div 
                    className="flex items-center gap-1.5 mb-6"
                    itemProp="reviewRating"
                    itemScope
                    itemType="https://schema.org/Rating"
                  >
                    <meta itemProp="ratingValue" content="5" />
                    <meta itemProp="bestRating" content="5" />
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="fill-accent text-accent"
                      />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground text-xl font-bold">
                      {testimonials[current].avatar}
                    </div>
                    <div>
                      <div 
                        className="font-bold text-lg text-foreground"
                        itemProp="author"
                        itemScope
                        itemType="https://schema.org/Person"
                      >
                        <span itemProp="name">{testimonials[current].name}</span>
                      </div>
                      <div 
                        className="text-muted-foreground"
                        itemProp="worksFor"
                        itemScope
                        itemType="https://schema.org/Organization"
                      >
                        <span itemProp="name">{testimonials[current].company}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <motion.button
                onClick={prev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Poprzednia opinia"
              >
                <ChevronLeft size={22} />
              </motion.button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setDirection(index > current ? 1 : -1);
                      setCurrent(index);
                    }}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === current
                        ? "bg-primary w-10"
                        : "bg-border hover:bg-muted-foreground w-2.5"
                    }`}
                    aria-label={`Przejdź do opinii ${index + 1}`}
                  />
                ))}
              </div>

              <motion.button
                onClick={next}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Następna opinia"
              >
                <ChevronRight size={22} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Hidden SEO content - minimalne */}
        <div className="sr-only">
          <h3>Opinie o stronach internetowych WebBoss</h3>
          <p>
            Nasi klienci z różnych branż dzielą się swoimi doświadczeniami ze współpracy przy tworzeniu stron internetowych.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;