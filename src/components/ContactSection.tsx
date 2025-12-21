import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Check, Sparkles, Loader2, Clock, PartyPopper } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [agreed, setAgreed] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    type: "",
    budget: "",
    deadline: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreed) {
      toast.error("Musisz wyrazić zgodę na przetwarzanie danych");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/daveditcreation@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "🔥 Nowe zapytanie ze strony WebBoss",
          _template: "table",
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Nie podano",
          company: formData.company || "Nie podano",
          type: formData.type,
          budget: formData.budget,
          deadline: formData.deadline,
          message: formData.message,
          rodo: agreed ? "TAK" : "NIE",
          _cc: "daveditcreation@gmail.com",
          _replyto: formData.email,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Pokaż ekran potwierdzenia
        setIsSubmitted(true);
        toast.success("Wiadomość wysłana pomyślnie!");
      } else {
        throw new Error("Błąd wysyłania formularza");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Wystąpił błąd. Spróbuj ponownie lub skontaktuj się bezpośrednio.");
      
      // Fallback - otwórz klienta email
      const mailtoLink = `mailto:daveditcreation@gmail.com?subject=Zapytanie ze strony WebBoss&body=Imię: ${formData.name}%0AEmail: ${formData.email}%0ATelefon: ${formData.phone}%0AFirma: ${formData.company}%0ATyp projektu: ${formData.type}%0ABudżet: ${formData.budget}%0ATermin: ${formData.deadline}%0AOpis: ${formData.message}`;
      window.open(mailtoLink, "_blank");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      type: "",
      budget: "",
      deadline: "",
      message: "",
    });
    setAgreed(false);
    setIsSubmitted(false);
  };

  return (
    <section id="kontakt" className="section-padding relative z-10" ref={ref}>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      {/* Decorative blurs */}

      
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4"
            >
              Kontakt
            </motion.span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Stwórzmy razem coś{" "}
              <span className="text-gradient-accent">wyjątkowego</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Opisz swój projekt, a przygotujemy indywidualną wycenę w 24h.
            </p>
          </motion.div>

          {/* Success Confirmation Screen */}
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/20 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12 text-center"
            >
              <div className="max-w-2xl mx-auto">
                {/* Animated Checkmark */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.2 
                  }}
                  className="relative mb-8"
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 mx-auto flex items-center justify-center shadow-xl shadow-emerald-500/30">
                    <Check size={48} className="text-white" />
                  </div>
                  
                  {/* Animated Rings */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-green-400/30"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.2, opacity: 0 }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 0.5
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-emerald-400/20"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.4, opacity: 0 }}
                    transition={{ 
                      duration: 1.5,
                      delay: 0.3,
                      repeat: Infinity,
                      repeatDelay: 0.5
                    }}
                  />
                </motion.div>

                {/* Success Message */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-3xl md:text-4xl font-bold text-foreground mb-6"
                >
                  Dziękujemy, <span className="text-gradient-accent">{formData.name}!</span>
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-xl text-muted-foreground mb-8"
                >
                  Twoje zapytanie zostało wysłane pomyślnie.
                </motion.p>

                {/* Response Time Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="space-y-6 mb-10"
                >
                  <div className="flex items-center justify-center gap-4 text-lg text-muted-foreground bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                    <Clock className="text-accent" size={24} />
                    <span>
                      <strong className="text-foreground">Odpowiemy jak najszybciej</strong> 
                      <br />
                      <span className="text-sm">zwykle w ciągu kilku godzin</span>
                    </span>
                  </div>

                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm rounded-2xl p-6">
                    <PartyPopper className="inline-block mr-2 text-yellow-500 mb-3" size={24} />
                    <p className="text-foreground font-medium mb-2">
                      Twoja wycena jest już w przygotowaniu!
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Przeanalizujemy Twoje wymagania i przygotujemy najlepszą ofertę.
                    </p>
                  </div>

                  <div className="text-sm text-muted-foreground bg-white/20 backdrop-blur-sm rounded-xl p-4">
                    <p className="font-medium text-foreground mb-1">📞 Potrzebujesz szybkiej odpowiedzi?</p>
                    <p>Zadzwoń: <strong className="text-foreground">+48 123 456 789</strong></p>
                  </div>
                </motion.div>

                {/* Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={resetForm}
                    className="px-8 py-3 bg-primary text-primary-foreground rounded-2xl font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all backdrop-blur-sm"
                  >
                    Wyślij kolejną wiadomość
                  </motion.button>
                  
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl font-semibold hover:bg-white/15 hover:shadow-lg transition-all"
                  >
                    Zobacz portfolio
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Form (Hidden when submitted) */}
          {!isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white/20 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-foreground mb-3"
                    >
                      Imię i nazwisko *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className="bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed w-full"
                      placeholder="Jan Kowalski"
                      disabled={isSubmitting}
                    />
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.45 }}
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-foreground mb-3"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className="bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed w-full"
                      placeholder="jan@firma.pl"
                      disabled={isSubmitting}
                    />
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-foreground mb-3"
                    >
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      className="bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed w-full"
                      placeholder="+48 123 456 789"
                      disabled={isSubmitting}
                    />
                  </motion.div>

                  {/* Company */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.55 }}
                  >
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold text-foreground mb-3"
                    >
                      Nazwa firmy
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("company")}
                      onBlur={() => setFocusedField(null)}
                      className="bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed w-full"
                      placeholder="Moja Firma Sp. z o.o."
                      disabled={isSubmitting}
                    />
                  </motion.div>

                  {/* Project Type */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <label
                      htmlFor="type"
                      className="block text-sm font-semibold text-foreground mb-3"
                    >
                      Rodzaj projektu *
                    </label>
                    <select
                      id="type"
                      name="type"
                      required
                      value={formData.type}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("type")}
                      onBlur={() => setFocusedField(null)}
                      className="bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed w-full appearance-none"
                      disabled={isSubmitting}
                    >
                      <option value="">Wybierz...</option>
                      <option value="Landing Page">Landing Page</option>
                      <option value="Strona firmowa">Strona firmowa</option>
                      <option value="Sklep internetowy">Sklep internetowy</option>
                      <option value="Aplikacja webowa">Aplikacja webowa</option>
                      <option value="Inne">Inne</option>
                    </select>
                  </motion.div>

                  {/* Budget */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.65 }}
                  >
                    <label
                      htmlFor="budget"
                      className="block text-sm font-semibold text-foreground mb-3"
                    >
                      Budżet *
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      required
                      value={formData.budget}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("budget")}
                      onBlur={() => setFocusedField(null)}
                      className="bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed w-full appearance-none"
                      disabled={isSubmitting}
                    >
                      <option value="">Wybierz...</option>
                      <option value="do 1500 zł">do 1500 zł</option>
                      <option value="1500 - 3000 zł">1500 - 3000 zł</option>
                      <option value="3000 - 5000 zł">3000 - 5000 zł</option>
                      <option value="powyżej 5000 zł">powyżej 5000 zł</option>
                      <option value="do ustalenia">do ustalenia</option>
                    </select>
                  </motion.div>

                  {/* Deadline */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="md:col-span-2"
                  >
                    <label
                      htmlFor="deadline"
                      className="block text-sm font-semibold text-foreground mb-3"
                    >
                      Preferowany termin realizacji
                    </label>
                    <input
                      type="text"
                      id="deadline"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("deadline")}
                      onBlur={() => setFocusedField(null)}
                      className="bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed w-full"
                      placeholder="np. do końca stycznia, jak najszybciej..."
                      disabled={isSubmitting}
                    />
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.75 }}
                    className="md:col-span-2"
                  >
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-foreground mb-3"
                    >
                      Opis projektu *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      className="bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed w-full resize-none"
                      placeholder="Opisz czego potrzebujesz, jakie masz oczekiwania..."
                      disabled={isSubmitting}
                    />
                  </motion.div>

                  {/* RODO Checkbox */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="md:col-span-2"
                  >
                    <label className="flex items-start gap-4 cursor-pointer group">
                      <div className="relative flex items-center justify-center mt-0.5">
                        <input
                          type="checkbox"
                          required
                          checked={agreed}
                          onChange={(e) => setAgreed(e.target.checked)}
                          className="sr-only"
                          disabled={isSubmitting}
                        />
                        <div
                          className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-300 bg-white/20 backdrop-blur-sm ${
                            agreed
                              ? "border-primary bg-primary/20"
                              : "border-white/20 group-hover:border-primary/50"
                          } ${isSubmitting ? "opacity-50" : ""}`}
                        >
                          {agreed && !isSubmitting && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 500 }}
                            >
                              <Check size={16} className="text-primary" />
                            </motion.div>
                          )}
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        Wyrażam zgodę na przetwarzanie danych osobowych w celu
                        przygotowania wyceny. *
                      </span>
                    </label>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.85 }}
                    className="md:col-span-2"
                  >
                    <motion.button
                      type="submit"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      disabled={isSubmitting}
                      className={`w-full bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground font-semibold text-lg py-5 rounded-2xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 relative overflow-hidden group ${
                        isSubmitting ? "opacity-80 cursor-not-allowed" : ""
                      }`}
                    >
                      {/* Shine effect */}
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                      
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        {isSubmitting ? (
                          <>
                            <Loader2 size={20} className="animate-spin" />
                            Wysyłanie...
                          </>
                        ) : (
                          <>
                            <Send size={20} />
                            Wyślij zapytanie o darmową wycenę
                            <Sparkles
                              size={18}
                              className="opacity-0 group-hover:opacity-100 transition-opacity"
                            />
                          </>
                        )}
                      </span>
                    </motion.button>
                    
                    {/* Info Text */}
                    <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground bg-white/5 backdrop-blur-sm rounded-xl p-4">
                      <Clock size={16} />
                      <span>Odpowiemy jak najszybciej - zwykle w ciągu kilku godzin</span>
                    </div>
                  </motion.div>
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;