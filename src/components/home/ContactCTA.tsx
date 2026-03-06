import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";
import { useCms } from "@/contexts/CmsContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

const ContactCTA = () => {
  const { t, lang } = useLang();
  const { settings } = useCms();

  return (
    <section className="py-20 bg-navy-gradient relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gold/5 blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 text-center relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-widest mb-4">
            {lang === "bn" ? "যোগাযোগ" : "Get in Touch"}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-5">
            {lang === "bn" ? "আজই যোগাযোগ করুন" : "Contact Us Today"}
          </h2>
          <p className="text-primary-foreground/50 text-lg mb-10 max-w-xl mx-auto">
            {lang === "bn"
              ? "আপনার স্বপ্নের ভ্রমণ পরিকল্পনা করতে আমাদের সাথে যোগাযোগ করুন"
              : "Contact us to plan your dream trip"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gold-gradient text-secondary-foreground hover:opacity-90 font-bold h-14 px-8 rounded-full shadow-xl shadow-gold/20">
                <MessageCircle className="w-5 h-5 mr-2" />
                {t.contact.sendMessage}
              </Button>
            </Link>
            <a href={`https://wa.me/${settings.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/5 h-14 px-8 font-semibold rounded-full">
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp: {settings.whatsapp}
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
