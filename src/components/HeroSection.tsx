"use client";

import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";

const HelmetSEO = () => (
  <Helmet>
    <title>Strony Internetowe Warszawa | Profesjonalne Strony WWW dla Firm w Warszawie</title>
    <meta
      name="description"
      content="Tworzymy nowoczesne strony internetowe dla firm z Warszawy i okolic. Responsywne, szybkie i zoptymalizowane pod SEO. Projektowanie stron WWW w Warszawie."
    />
    <meta
      name="keywords"
      content="strony internetowe Warszawa, strony WWW Warszawa, tworzenie stron internetowych Warszawa, projektowanie stron internetowych, strony internetowe dla firm Warszawa, nowoczesne strony WWW, strony responsywne Warszawa, SEO Warszawa"
    />
    <meta property="og:title" content="Strony Internetowe Warszawa | Profesjonalne Strony WWW" />
    <meta
      property="og:description"
      content="Profesjonalne tworzenie stron internetowych dla firm w Warszawie. Nowoczesne designy i optymalizacja SEO."
    />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="pl_PL" />
    <link rel="canonical" href="https://twojadomena.pl" />
    <meta name="geo.region" content="PL-MZ" />
    <meta name="geo.placename" content="Warszawa" />
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Strony Internetowe Warszawa",
        "description": "Profesjonalne tworzenie stron internetowych dla firm w Warszawie",
        "url": "https://twojadomena.pl",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://twojadomena.pl/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      })}
    </script>
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Strony Internetowe Warszawa",
        "description": "Tworzenie stron internetowych dla firm w Warszawie",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Warszawa",
          "addressRegion": "Mazowieckie",
          "addressCountry": "PL"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "52.2297",
          "longitude": "21.0122"
        },
        "url": "https://twojadomena.pl",
        "telephone": "+48-XXX-XXX-XXX",
        "priceRange": "$$",
        "openingHours": "Mo-Fr 09:00-17:00"
      })}
    </script>
  </Helmet>
);

// fade-in animation for sections
const fadeSlow: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Variants for button animations
const buttonVariants: Record<string, any> = {
  primaryHover: {
    scale: 1.05,
    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5), 0 0 15px rgba(59, 130, 246, 0.3)",
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  primaryTap: {
    scale: 0.98,
    transition: {
      duration: 0.1
    }
  },
  secondaryHover: {
    scale: 1.05,
    backgroundColor: "rgba(243, 244, 246, 0.8)",
    borderColor: "rgb(209, 213, 219)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  secondaryTap: {
    scale: 0.98,
    transition: {
      duration: 0.1
    }
  }
};

// Duża animacja Lottie po prawej stronie
const LargeAnimatedLottie = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/animations/Coding.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setAnimationData(data);
      })
      .catch((error) => {
        console.error("Failed to load Lottie animation:", error);
        fetch("https://assets7.lottiefiles.com/packages/lf20_l2q6t0wc.json")
          .then((res) => res.json())
          .then((data) => setAnimationData(data))
          .catch(() => {
            setAnimationData({
              v: "5.5.2",
              fr: 30,
              ip: 0,
              op: 90,
              w: 512,
              h: 512,
              nm: "Coding",
              ddd: 0,
              assets: [],
              layers: [],
              markers: [],
            });
          });
      });
  }, []);

  if (!animationData) {
    return (
      <div className="w-full h-[500px] flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full h-full" aria-hidden="true">
      <Lottie
        animationData={animationData}
        loop={true}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <>
      <HelmetSEO />

      {/* subtle background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-24 lg:pb-32">
        <meta itemProp="mainContentOfPage" content="Strony internetowe Warszawa - tworzenie profesjonalnych stron WWW" />
        
        {/* Grid dla desktopa (lg:grid-cols-2) */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-24 items-center">
          {/* Left content - tekst dla desktopa */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="max-w-2xl"
            itemScope
            itemType="https://schema.org/Service"
          >
            <meta itemProp="serviceType" content="Tworzenie stron internetowych" />
            <meta itemProp="areaServed" content="Warszawa, Mazowieckie" />
            
            <motion.div variants={fadeSlow} className="mb-10">
              <span className="inline-block px-6 py-2 rounded-full border border-border text-sm tracking-wide text-muted-foreground">
                Profesjonalne strony WWW — <strong itemProp="location">Warszawa</strong>
              </span>
            </motion.div>

            <motion.h1
              variants={fadeSlow}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-10"
              itemProp="name"
            >
              Potrzebujesz
              <br />
              <span className="text-primary">nowoczesnej strony</span>
              <br />
              internetowej w <span itemProp="location">Warszawie</span>?
            </motion.h1>

            {/* POPRAWIONE: Zamieniamy <p> na <div> bo zawiera <div> wewnątrz */}
            <motion.div
              variants={fadeSlow}
              className="text-lg sm:text-xl text-gray-700 max-w-xl mb-12 leading-relaxed"
              itemProp="description"
            >
              <p className="text-gray-700 mb-6">
                Jako <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent font-bold">specjalista od stron internetowych</span> w <span className="text-primary font-semibold">Warszawie</span>,
                {" "}projektuję i tworzę strony WWW dla firm z Warszawy i okolic, które chcą:
              </p>
              
              <div className="mt-6 space-y-4">
                {/* Punkt 1 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-0.5">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center shadow-sm">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-800 font-semibold text-purple-800">Profesjonalny wizerunek</span>
                  </div>
                </div>

                {/* Punkt 2 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-0.5">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-700 to-purple-900 flex items-center justify-center shadow-sm">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-800 font-semibold text-purple-800">Przyciąganie klientów</span>
                  </div>
                </div>

                {/* Punkt 3 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-0.5">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-800 to-purple-950 flex items-center justify-center shadow-sm">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-800 font-semibold text-purple-800">Wzrost sprzedaży</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeSlow}
              className="flex flex-wrap gap-6"
            >
              {/* Primary Button - Enhanced with whileHover and whileTap animations */}
              <motion.a
                href="#kontakt"
                className="relative inline-flex items-center gap-2 bg-primary text-primary-foreground text-lg px-8 py-4 rounded-lg overflow-hidden group"
                aria-label="Zamów stronę internetową w Warszawie"
                whileHover="primaryHover"
                whileTap="primaryTap"
                variants={buttonVariants}
              >
                {/* Animated background shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                
                {/* Button content */}
                <span className="relative">Zamów stronę WWW</span>
                <motion.span
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight size={20} />
                </motion.span>
              </motion.a>

              {/* Secondary Button - Enhanced with whileHover and whileTap animations */}
              <motion.a
                href="#portfolio"
                className="inline-flex items-center gap-2 border border-border text-lg px-8 py-4 rounded-lg group relative overflow-hidden"
                aria-label="Zobacz portfolio stron internetowych Warszawa"
                whileHover="secondaryHover"
                whileTap="secondaryTap"
                variants={buttonVariants}
              >
                {/* Subtle background effect on hover */}
                <span className="absolute inset-0 bg-gradient-to-br from-white-50/0 via-white-100/0 to-white-50/0 group-hover:from-white-50/10 group-hover:via-white-100/20 group-hover:to-white-50/10 transition-all duration-300" />
                
                {/* Button content */}
                <span className="relative">Zobacz realizacje z Warszawy</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right content – animacja Lottie dla desktopa */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.6,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="w-full h-[500px] lg:h-[600px]">
              <LargeAnimatedLottie />
            </div>
          </motion.div>
        </div>

        {/* Layout dla telefonów (mobile-first) - animacja w tle */}
        <div className="lg:hidden">
          {/* Kontener z pozycją względną dla animacji w tle */}
          <div className="relative">
            {/* Animacja Lottie - na telefonie w tle, BARDZIEJ przezroczysta */}
            <div className="absolute inset-0 z-0 opacity-20 h-[500px] sm:h-[600px]">
              <LargeAnimatedLottie />
            </div>

            {/* Tekst na wierzchu - z-index wyższy niż animacja */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
              }}
              className="relative z-10 max-w-2xl"
              itemScope
              itemType="https://schema.org/Service"
            >
              <meta itemProp="serviceType" content="Tworzenie stron internetowych" />
              <meta itemProp="areaServed" content="Warszawa, Mazowieckie" />
              
              <motion.div variants={fadeSlow} className="mb-8">
                <span className="inline-block px-6 py-2 rounded-full border border-border text-sm tracking-wide text-muted-foreground">
                  Profesjonalne strony WWW — <strong itemProp="location">Warszawa</strong>
                </span>
              </motion.div>

              <motion.h1
                variants={fadeSlow}
                className="text-5xl sm:text-6xl font-bold leading-[1.05] mb-8"
                itemProp="name"
              >
                Potrzebujesz
                <br />
                <span className="text-primary">nowoczesnej strony</span>
                <br />
                internetowej w <span itemProp="location">Warszawie</span>?
              </motion.h1>

              {/* POPRAWIONE: Zamieniamy <p> na <div> bo zawiera <div> wewnątrz */}
              <motion.div
                variants={fadeSlow}
                className="text-lg sm:text-xl text-gray-700 max-w-xl mb-12 leading-relaxed"
                itemProp="description"
              >
                <p className="text-gray-700 mb-6">
                  Jako <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent font-bold">specjalista od stron internetowych</span> w <span className="text-primary font-semibold">Warszawie</span>,
                  {" "}projektuję i tworzę strony WWW dla firm z Warszawy i okolic, które chcą:
                </p>
                
                <div className="mt-6 space-y-4">
                  {/* Punkt 1 */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-0.5">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center shadow-sm">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-800 font-semibold text-purple-800">Profesjonalny wizerunek</span>
                    </div>
                  </div>

                  {/* Punkt 2 */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-0.5">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-700 to-purple-900 flex items-center justify-center shadow-sm">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-800 font-semibold text-purple-800">Przyciąganie klientów</span>
                    </div>
                  </div>

                  {/* Punkt 3 */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 mt-0.5">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-800 to-purple-950 flex items-center justify-center shadow-sm">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-800 font-semibold text-purple-800">Wzrost sprzedaży</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeSlow}
                className="flex flex-wrap gap-6"
              >
                {/* Primary Button for Mobile */}
                <motion.a
                  href="#kontakt"
                  className="relative inline-flex items-center gap-2 bg-primary text-primary-foreground text-lg px-8 py-4 rounded-lg overflow-hidden group"
                  aria-label="Zamów stronę internetową w Warszawie"
                  whileHover="primaryHover"
                  whileTap="primaryTap"
                  variants={buttonVariants}
                >
                  {/* Animated background shine effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  
                  <span className="relative">Zamów stronę WWW</span>
                  <motion.span
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight size={20} />
                  </motion.span>
                </motion.a>

                {/* Secondary Button for Mobile */}
                <motion.a
                  href="#portfolio"
                  className="inline-flex items-center gap-2 border border-border text-lg px-8 py-4 rounded-lg group relative overflow-hidden"
                  aria-label="Zobacz portfolio stron internetowych Warszawa"
                  whileHover="secondaryHover"
                  whileTap="secondaryTap"
                  variants={buttonVariants}
                >
                  {/* Subtle background effect on hover */}
                  <span className="absolute inset-0 bg-gradient-to-br from-gray-50/0 via-gray-100/0 to-gray-50/0 group-hover:from-gray-50/10 group-hover:via-gray-100/20 group-hover:to-gray-50/10 transition-all duration-300" />
                  
                  <span className="relative">Zobacz realizacje z Warszawy</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;