"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, User } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Anna Kowalska",
    company: "Salon Beauty Anna",
    text: "Profesjonalne podejście i świetny efekt końcowy. Strona przyciąga nowych klientów każdego dnia!",
    rating: 5,
    avatar: "A",
    location: "Warszawa",
    industry: "kosmetyczna",
    datePublished: "2024-02-15"
  },
  {
    id: 2,
    name: "Marek Nowak",
    company: "Auto Detailing Premium",
    text: "WebBoss stworzył dla nas stronę, która idealnie oddaje charakter naszej działalności. Polecam!",
    rating: 5,
    avatar: "M",
    location: "Warszawa",
    industry: "motoryzacyjna",
    datePublished: "2024-01-20"
  },
  {
    id: 3,
    name: "Katarzyna Wiśniewska",
    company: "Kancelaria Prawna Lex",
    text: "Szybka realizacja, doskonała komunikacja i strona, która wzbudza zaufanie klientów.",
    rating: 5,
    avatar: "K",
    location: "Warszawa",
    industry: "prawna",
    datePublished: "2024-03-10"
  },
  {
    id: 4,
    name: "Piotr Zieliński",
    company: "Zieliński Remonty",
    text: "Dzięki nowej stronie liczba zapytań wzrosła o 200%. Najlepsza inwestycja w biznes!",
    rating: 5,
    avatar: "P",
    location: "Warszawa",
    industry: "budowlana",
    datePublished: "2024-01-28"
  },
  {
    id: 5,
    name: "Magdalena Dąbrowska",
    company: "Studio Fryzjerskie",
    text: "Piękny design i funkcjonalność. Klienci często chwalą naszą stronę!",
    rating: 5,
    avatar: "M",
    location: "Warszawa",
    industry: "fryzjerska",
    datePublished: "2024-02-05"
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
    >
      {/* NIE WIDOCZNE DLA UŻYTKOWNIKÓW - TYLKO DLA GOOGLE */}
      <div style={{ display: 'none' }}>
        {/* Schema.org dla wszystkich opinii - POPRAWIONE */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": testimonials.map((testimonial, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Review",
                "name": `Opinia: ${testimonial.name} - ${testimonial.company}`,
                "url": `https://webbosswarszawa.com/opinie#opinia-${testimonial.id}`,
                "author": {
                  "@type": "Person",
                  "name": testimonial.name,
                  "jobTitle": "Właściciel firmy"
                },
                "itemReviewed": {
                  "@type": "WebPage", // ZMIENIONE Z "Service" na "WebPage"
                  "name": "Tworzenie strony internetowej",
                  "url": "https://webbosswarszawa.com"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": testimonial.text,
                "datePublished": testimonial.datePublished
              }
            }))
          })}
        </script>

        {/* Schema.org dla LocalBusiness - POPRAWIONE */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "WebBoss - Tworzenie stron internetowych Warszawa",
            "description": "Profesjonalne tworzenie stron internetowych dla firm w Warszawie",
            "url": "https://webbosswarszawa.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Warszawa",
              "addressCountry": "PL"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "ratingCount": testimonials.length,
              "bestRating": "5"
            }
          })}
        </script>
      </div>

      {/* RESZTA KODU BEZ ZMIAN - dokładnie tak jak miałeś */}
      <div className="container-custom">
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
            Referencje i opinie
          </motion.span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Opinie klientów o <span className="text-gradient-primary">WebBoss Warszawa</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Sprawdź, co mówią przedsiębiorcy z Warszawy o współpracy przy tworzeniu ich stron internetowych
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <div className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
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
                >
                  <blockquote className="text-xl md:text-2xl lg:text-3xl text-foreground font-medium leading-relaxed mb-10">
                    "{testimonials[current].text}"
                  </blockquote>

                  <div className="flex items-center gap-1.5 mb-6">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="fill-accent text-accent"
                        aria-hidden="true"
                      />
                    ))}
                    <span className="sr-only">Ocena: {testimonials[current].rating} na 5 gwiazdek</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground text-xl font-bold">
                      {testimonials[current].avatar}
                      <span className="sr-only">{testimonials[current].name}</span>
                    </div>
                    <div>
                      <div className="font-bold text-lg text-foreground">
                        {testimonials[current].name}
                      </div>
                      <div className="text-muted-foreground">
                        {testimonials[current].company}, {testimonials[current].location}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        Branża: {testimonials[current].industry}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

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
                    aria-current={index === current ? "true" : "false"}
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
      </div>
    </section>
  );
};

export default TestimonialsSection;