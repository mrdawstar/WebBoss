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
    location: "Warszawa",
    industry: "kosmetyczna"
  },
  {
    name: "Marek Nowak",
    company: "Auto Detailing Premium",
    text: "WebBoss stworzył dla nas stronę, która idealnie oddaje charakter naszej działalności. Polecam!",
    rating: 5,
    avatar: "M",
    location: "Warszawa",
    industry: "motoryzacyjna"
  },
  {
    name: "Katarzyna Wiśniewska",
    company: "Kancelaria Prawna Lex",
    text: "Szybka realizacja, doskonała komunikacja i strona, która wzbudza zaufanie klientów.",
    rating: 5,
    avatar: "K",
    location: "Warszawa",
    industry: "prawna"
  },
  {
    name: "Piotr Zieliński",
    company: "Zieliński Remonty",
    text: "Dzięki nowej stronie liczba zapytań wzrosła o 200%. Najlepsza inwestycja w biznes!",
    rating: 5,
    avatar: "P",
    location: "Warszawa",
    industry: "budowlana"
  },
  {
    name: "Magdalena Dąbrowska",
    company: "Studio Fryzjerskie",
    text: "Piękny design i funkcjonalność. Klienci często chwalą naszą stronę!",
    rating: 5,
    avatar: "M",
    location: "Warszawa",
    industry: "fryzjerska"
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
      <div className="container-custom">
        {/* Schema.org for LocalBusiness */}
        <div className="sr-only" itemScope itemType="https://schema.org/LocalBusiness">
          <meta itemProp="name" content="WebBoss - Tworzenie stron internetowych Warszawa" />
          <meta itemProp="description" content="Profesjonalne tworzenie stron internetowych dla firm w Warszawie" />
          <link itemProp="url" href="https://webbosswarszawa.com" />
          <meta itemProp="telephone" content="+48-xxx-xxx-xxx" />
          <meta itemProp="email" content="kontakt@webbosswarszawa.com" />
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <meta itemProp="addressLocality" content="Warszawa" />
            <meta itemProp="addressCountry" content="Polska" />
          </div>
          <meta itemProp="priceRange" content="1000-5000 PLN" />
          <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
            <meta itemProp="ratingValue" content="5.0" />
            <meta itemProp="ratingCount" content="23" />
            <meta itemProp="bestRating" content="5" />
          </div>
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
            Referencje i opinie
          </motion.span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Opinie klientów o <span className="text-gradient-primary">WebBoss Warszawa</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Sprawdź, co mówią przedsiębiorcy z Warszawy o współpracy przy tworzeniu ich stron internetowych
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
            <div className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
              {/* Schema.org for Review - tylko dla aktualnie wyświetlanej opinii */}
              <div className="sr-only" itemScope itemType="https://schema.org/Review">
                <meta itemProp="name" content={`Opinia: ${testimonials[current].name} - ${testimonials[current].company}`} />
                <link itemProp="url" href={`https://webbosswarszawa.com/opinie#opinia-${current}`} />
                <div itemProp="author" itemScope itemType="https://schema.org/Person">
                  <meta itemProp="name" content={testimonials[current].name} />
                  <meta itemProp="jobTitle" content="Właściciel firmy" />
                </div>
                <div itemProp="itemReviewed" itemScope itemType="https://schema.org/Service">
                  <meta itemProp="name" content="Tworzenie strony internetowej" />
                  <meta itemProp="serviceType" content="Web Development" />
                </div>
                <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  <meta itemProp="ratingValue" content={testimonials[current].rating.toString()} />
                  <meta itemProp="bestRating" content="5" />
                </div>
                <meta itemProp="reviewBody" content={testimonials[current].text} />
                <meta itemProp="datePublished" content="2024-01-15" />
              </div>

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
                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl lg:text-3xl text-foreground font-medium leading-relaxed mb-10">
                    "{testimonials[current].text}"
                  </blockquote>

                  {/* Rating - tylko wizualne */}
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

                  {/* Author */}
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

        {/* Lista wszystkich opinii ukryta dla SEO */}
        <div className="sr-only" aria-hidden="true">
          <h2>Referencje od klientów WebBoss Warszawa</h2>
          <p>Poniżej przedstawiamy opinie przedsiębiorców z Warszawy, którzy skorzystali z naszych usług tworzenia stron internetowych.</p>
          
          <div itemScope itemType="https://schema.org/ItemList">
            {testimonials.map((testimonial, index) => (
              <div key={index} itemProp="itemListElement" itemScope itemType="https://schema.org/Review">
                <h3 itemProp="name">Opinia: {testimonial.name} - {testimonial.company}</h3>
                <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  Ocena: <span itemProp="ratingValue">{testimonial.rating}</span>/5
                </div>
                <p itemProp="reviewBody">{testimonial.text}</p>
                <div itemProp="author" itemScope itemType="https://schema.org/Person">
                  Autor: <span itemProp="name">{testimonial.name}</span>
                </div>
                <div itemProp="itemReviewed" itemScope itemType="https://schema.org/Service">
                  Usługa: Tworzenie strony internetowej dla firmy z branży {testimonial.industry}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dodatkowe informacje dla SEO */}
        <div className="sr-only">
          <h3>WebBoss - zaufany partner w tworzeniu stron internetowych w Warszawie</h3>
          <p>
            Nasze strony internetowe otrzymują pozytywne opinie od klientów z różnych branż: kosmetycznej, motoryzacyjnej, 
            prawnej, budowlanej i fryzjerskiej. Specjalizujemy się w tworzeniu skutecznych stron WWW dla firm z Warszawy, 
            które przekładają się na realne wyniki biznesowe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;