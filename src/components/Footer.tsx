const footerLinks = [
  { name: "O nas", href: "#o-nas" },
  { name: "Usługi", href: "#dla-kogo" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Cennik", href: "#cennik" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">W</span>
            </div>
            <span className="text-xl font-bold">
              Web<span className="text-primary">Boss</span>
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-background/70 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-background/50">
            © 2025 WebBoss. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
