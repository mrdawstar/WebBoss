const footerLinks = [
  { name: "O nas", href: "#o-nas" },
  { name: "Dla kogo", href: "#dla-kogo" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Cennik", href: "#cennik" },
  { name: "Opinie", href: "#opinie" },
  { name: "Kontakt", href: "#kontakt" },
  { name: "O mnie", href: "#about" },
  { name: "Proces", href: "#proces" }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background" itemScope itemType="https://schema.org/WPFooter">
      <div className="container-custom">
        {/* Schema.org markup */}
        <div className="sr-only" itemScope itemType="https://schema.org/LocalBusiness">
          <meta itemProp="name" content="WebBoss - Profesjonalne strony internetowe" />
          <meta itemProp="description" content="Tworzenie nowoczesnych stron internetowych dla firm" />
          <meta itemProp="email" content="daveditcreation@gmail.com" />
          <meta itemProp="telephone" content="+48796425392" />
          <meta itemProp="address" content="Warszawa, Polska" />
          <meta itemProp="areaServed" content="Warszawa, Mazowieckie, Polska" />
          <meta itemProp="priceRange" content="$$" />
          <meta itemProp="url" content="https://webboss.pl" />
        </div>

        {/* Główna zawartość footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Kolumna 1: Logo i opis */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-2xl">W</span>
              </div>
              <div itemScope itemType="https://schema.org/Organization">
                <span className="text-2xl font-bold block" itemProp="name">
                  Web<span className="text-primary">Boss</span>
                </span>
                <p className="text-background/60 text-sm mt-1">
                  <span itemProp="description">Profesjonalne strony internetowe</span>
                </p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed" itemProp="description">
              Tworzymy nowoczesne i funkcjonalne strony internetowe dla firm, 
              które pomagają rozwijać biznes w internecie. Specjalizujemy się w 
              responsywnych projektach zoptymalizowanych pod SEO.
            </p>
          </div>

          {/* Kolumna 2: Szybkie linki */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Szybkie linki</h3>
            <nav className="space-y-3" aria-label="Menu stopki">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-background/70 hover:text-primary hover:translate-x-2 transition-all duration-300"
                  aria-label={`Przejdź do ${link.name}`}
                  itemProp="significantLink"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Kolumna 3: Kontakt */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 text-primary flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div itemScope itemType="https://schema.org/ContactPoint">
                  <p className="text-background/60 text-sm">Email</p>
                  <a 
                    href="mailto:daveditcreation@gmail.com" 
                    className="text-white hover:text-primary transition-colors break-all"
                    itemProp="email"
                  >
                    daveditcreation@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 text-primary flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div itemScope itemType="https://schema.org/ContactPoint">
                  <p className="text-background/60 text-sm">Telefon</p>
                  <a 
                    href="tel:+48796425392" 
                    className="text-white hover:text-primary transition-colors"
                    itemProp="telephone"
                  >
                    +48 796 425 392
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 text-primary flex-shrink-0">
                  <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div itemScope itemType="https://schema.org/PostalAddress">
                  <p className="text-background/60 text-sm">Lokalizacja</p>
                  <p className="text-white" itemProp="addressLocality">Warszawa</p>
                  <meta itemProp="addressCountry" content="PL" />
                  <meta itemProp="addressRegion" content="Mazowieckie" />
                </div>
              </div>
            </div>
          </div>

          {/* Kolumna 4: Call to Action */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Rozpocznij projekt</h3>
            <p className="text-background/70 text-sm">
              Chcesz profesjonalną stronę internetową dla swojej firmy? 
              Skontaktuj się z nami już dziś i omówmy szczegóły Twojego projektu.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:daveditcreation@gmail.com"
                className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors"
                aria-label="Wyślij email do WebBoss"
                itemProp="contactPoint"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Wyślij zapytanie
              </a>
              <a
                href="tel:+48796425392"
                className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 bg-background/10 hover:bg-background/20 text-white font-medium rounded-lg transition-colors border border-background/20"
                aria-label="Zadzwoń do WebBoss"
                itemProp="contactPoint"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Zadzwoń teraz
              </a>
            </div>
          </div>
        </div>

        {/* Dolna część footer */}
        <div className="border-t border-background/20 pt-8 pb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright i prawa */}
            <div className="text-center md:text-left space-y-2">
              <p className="text-background/50 text-sm">
                © {currentYear} <span itemProp="name">WebBoss</span>. Wszelkie prawa zastrzeżone.
              </p>
              <div className="text-background/40 text-xs space-y-1">
                <p>Profesjonalne tworzenie stron internetowych</p>
              </div>
            </div>
            
            {/* Dodatkowe informacje */}
            <div className="text-center md:text-right">
              <p className="text-background/40 text-xs max-w-md">
                Strona ma charakter informacyjny. Wszystkie ceny podane na stronie są cenami netto. 
                Oferta nie jest ofertą handlową w rozumieniu art. 66 §1 Kodeksu cywilnego.
              </p>
            </div>
          </div>
          
          {/* Hidden SEO content */}
          <div className="sr-only" itemScope itemType="https://schema.org/WebSite">
            <meta itemProp="name" content="WebBoss - Profesjonalne Strony Internetowe" />
            <meta itemProp="description" content="Tworzenie stron internetowych dla firm w Warszawie. Profesjonalne strony WWW, sklepy internetowe, SEO. Jesteśmy agencją web developmentu." />
            <link itemProp="url" href="https://webboss.pl" />
            
            <p itemProp="keywords">
              tworzenie stron internetowych Warszawa, strony internetowe dla firm, agencja web development, 
              projektowanie stron WWW, responsive web design, strony internetowe WordPress, sklepy internetowe, 
              SEO optymalizacja, pozycjonowanie stron, modern web development, strony internetowe cennik
            </p>
            <p>
              WebBoss to profesjonalna agencja web developmentu specjalizująca się w tworzeniu nowoczesnych 
              stron internetowych dla firm z Warszawy i całej Polski. Oferujemy kompleksowe usługi tworzenia 
              stron internetowych, od projektowania UX/UI przez programowanie responsywnych stron WWW po 
              optymalizację SEO. Nasze strony internetowe są szybkie, bezpieczne i zoptymalizowane pod 
              kątem wyszukiwarek. Działamy na rynku od 2020 roku, tworząc skuteczne rozwiązania internetowe 
              dla małych i średnich przedsiębiorstw. Nasza siedziba znajduje się w Warszawie, ale współpracujemy 
              z klientami z całej Polski. Specjalizujemy się w technologiach: React, Next.js, TypeScript, 
              WordPress, WooCommerce.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;