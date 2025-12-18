"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";

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

// text logo animation
const logoAnim: Variants = {
  hidden: { opacity: 0, y: -30, letterSpacing: "0.4em" },
  visible: {
    opacity: 1,
    y: 0,
    letterSpacing: "0.05em",
    transition: {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Text logo component
// Text logo component
const TextLogo = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={logoAnim}
      whileHover={{
        y: -4,
        scale: 1.05, // delikatnie większe powiększenie
        transition: {
          type: "spring", // użycie sprężyny dla naturalnego ruchu
          stiffness: 200, // im większa, tym szybciej się porusza
          damping: 15,   // tłumienie, im większe tym wolniej drga
        },
      }}
      className="select-none cursor-default mb-16"
    >
      <h1 className="text-center font-bold tracking-tight">
        <span className="text-5xl sm:text-6xl lg:text-7xl text-foreground">
          Web
        </span>
        <span className="text-5xl sm:text-6xl lg:text-7xl bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent ml-2">
          Boss
        </span>
      </h1>
      <div className="mt-3 h-[2px] w-24 mx-auto bg-gradient-to-r from-transparent via-primary/60 to-transparent rounded-full" />
    </motion.div>
  );
};


// Duża animacja Lottie po prawej stronie - CZYSTA
const LargeAnimatedLottie = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/animations/Coding.json")
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        setAnimationData(data);
      })
      .catch(error => {
        console.error("Failed to load Lottie animation:", error);
        fetch("https://assets7.lottiefiles.com/packages/lf20_l2q6t0wc.json")
          .then(res => res.json())
          .then(data => setAnimationData(data))
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
              markers: []
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
    <div className="w-full h-full">
      <Lottie 
        animationData={animationData} 
        loop={true}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* subtle background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32">
        {/* Logo */}
        <div className="flex justify-center mb-20">
          <TextLogo />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-center">
          {/* Left content - tekst */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="max-w-2xl"
          >
            <motion.div variants={fadeSlow} className="mb-10">
              <span className="inline-block px-6 py-2 rounded-full border border-border text-sm tracking-wide text-muted-foreground">
                Profesjonalne strony WWW — <strong>Warszawa</strong>
              </span>
            </motion.div>

            <motion.h1
              variants={fadeSlow}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-10"
            >
              Potrzebujesz
              <br />
              <span className="text-primary">nowoczesnej strony</span>
              <br />
              internetowej?
            </motion.h1>

            <motion.p
              variants={fadeSlow}
              className="text-xl sm:text-2xl text-muted-foreground max-w-xl mb-12"
            >
              Projektujemy i tworzymy strony internetowe dla firm z Warszawy, 
              które chcą wyglądać profesjonalnie i sprzedawać więcej.
            </motion.p>

            <motion.div
              variants={fadeSlow}
              className="flex flex-wrap gap-6"
            >
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4 rounded-lg transition-colors"
              >
                Potrzebuję strony
                <ArrowRight size={20} />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 border border-border text-lg px-8 py-4 rounded-lg hover:bg-secondary transition-colors"
              >
                Zobacz realizacje
              </a>
            </motion.div>
          </motion.div>

          {/* Right content – CZYSTA animacja Lottie bez tła i tekstu */}
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
            {/* TYLKO animacja - bez dodatkowych kontenerów i efektów */}
            <div className="w-full h-[500px] lg:h-[600px]">
              <LargeAnimatedLottie />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;