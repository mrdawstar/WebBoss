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
      
      <section className="relative overflow-hidden bg-background" itemScope itemType="https://schema.org/WebPage">
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

              <motion.p
                variants={fadeSlow}
                className="text-xl sm:text-2xl text-black max-w-xl mb-12"
                itemProp="description"
              >
                Jako <strong>specjalista od stron internetowych w Warszawie</strong>, projektuję i tworzę 
                strony WWW dla firm z Warszawy i okolic, które chcą wyglądać profesjonalnie, 
                przyciągać klientów i zwiększać sprzedaż.
              </motion.p>

              <motion.div
                variants={fadeSlow}
                className="flex flex-wrap gap-6"
              >
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4 rounded-lg transition-colors"
                  aria-label="Zamów stronę internetową w Warszawie"
                >
                  Zamów stronę WWW
                  <ArrowRight size={20} />
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-2 border border-border text-lg px-8 py-4 rounded-lg hover:bg-secondary transition-colors"
                  aria-label="Zobacz portfolio stron internetowych Warszawa"
                >
                  Zobacz realizacje z Warszawy
                </a>
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

                <motion.p
                  variants={fadeSlow}
                  className="text-xl sm:text-2xl text-black max-w-xl mb-10"
                  itemProp="description"
                >
                  Jako <strong>specjalista od stron internetowych w Warszawie</strong>, projektuję i tworzę 
                  strony WWW dla firm z Warszawy i okolic, które chcą wyglądać profesjonalnie, 
                  przyciągać klientów i zwiększać sprzedaż.
                </motion.p>

                <motion.div
                  variants={fadeSlow}
                  className="flex flex-wrap gap-6"
                >
                  <a
                    href="#kontakt"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4 rounded-lg transition-colors"
                    aria-label="Zamów stronę internetową w Warszawie"
                  >
                    Zamów stronę WWW
                    <ArrowRight size={20} />
                  </a>
                  <a
                    href="#portfolio"
                    className="inline-flex items-center gap-2 border border-border text-lg px-8 py-4 rounded-lg hover:bg-secondary transition-colors"
                    aria-label="Zobacz portfolio stron internetowych Warszawa"
                  >
                    Zobacz realizacje z Warszawy
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;