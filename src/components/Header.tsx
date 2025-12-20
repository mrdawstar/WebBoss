import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "O nas", href: "#o-nas" },
  { name: "Dla kogo", href: "#dla-kogo" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Cennik", href: "#cennik" },
  { name: "Opinie", href: "#opinie" },
  { name: "Kontakt", href: "#kontakt" },
  { name: "O mnie", href: "#about" },
  { name: "Proces", href: "#proces" }
];

// Dane kontaktowe
const contactInfo = {
  phone: "+48 796 425 392",
  email: "daveditcreation@gmail.com"
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.map((link) => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    // Zapobiega podwójnej animacji
    if (menuButtonRef.current) {
      menuButtonRef.current.style.pointerEvents = 'none';
      setTimeout(() => {
        if (menuButtonRef.current) {
          menuButtonRef.current.style.pointerEvents = 'auto';
        }
      }, 300);
    }
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/50 backdrop-blur-xl shadow-lg border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-shadow">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <span className="text-xl font-bold text-foreground">
              Web<span className="text-gradient-primary">Boss</span>
            </span>
          </motion.a>

          {/* Desktop Navigation - CENTROWANE */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.slice(1) ? "active" : ""}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Contact Info & CTA - po prawej stronie */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Kontakt - w jednej kolumnie (email nad telefonem) */}
            <div className="flex flex-col items-end mr-4 gap-1">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors group"
              >
                <Mail size={14} className="group-hover:scale-110 transition-transform" />
                <span>{contactInfo.email}</span>
              </a>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors group"
              >
                <Phone size={14} className="group-hover:scale-110 transition-transform" />
                <span>{contactInfo.phone}</span>
              </a>
            </div>

            {/* CTA Button - kolor jak logo WebBoss */}
            <motion.a
              href="#kontakt"
              className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#4f46e5] hover:to-[#7c3aed] shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Bezpłatna wycena
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            onClick={handleMobileMenuToggle}
            className="lg:hidden p-2 text-foreground rounded-xl hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pb-4 overflow-hidden"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                className="flex flex-col glass-card rounded-2xl p-4"
              >
                {/* Linki nawigacyjne */}
                <div className="mb-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={closeMobileMenu}
                      className="text-base font-medium text-foreground hover:text-primary transition-colors py-3 px-4 rounded-xl hover:bg-primary/5 block"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                {/* Kontakt w menu mobilnym */}
                <div className="mt-4 mb-4 pt-4 border-t border-border/50">
                  <div className="flex flex-col gap-3">
                    <a
                      href={`mailto:${contactInfo.email}`}
                      onClick={closeMobileMenu}
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors py-2 group"
                    >
                      <Mail size={18} className="group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{contactInfo.email}</span>
                    </a>
                    <a
                      href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                      onClick={closeMobileMenu}
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors py-2 group"
                    >
                      <Phone size={18} className="group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{contactInfo.phone}</span>
                    </a>
                  </div>
                </div>

                {/* CTA Button w menu mobilnym - JEDEN przycisk */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-2"
                >
                  <a
                    href="#kontakt"
                    onClick={closeMobileMenu}
                    className="block px-6 py-3 rounded-xl font-semibold text-white text-center bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#4f46e5] hover:to-[#7c3aed] transition-all duration-300"
                  >
                    Bezpłatna wycena
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;