import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Shield, BookOpen, Globe, Headphones } from "lucide-react";

const stats = [
  { icon: Shield, valueEn: "10+", valueBn: "১০+", labelEn: "Years Experience", labelBn: "বছরের অভিজ্ঞতা" },
  { icon: BookOpen, valueEn: "1000+", valueBn: "১০০০+", labelEn: "Happy Clients", labelBn: "সুখী ক্লায়েন্ট" },
  { icon: Globe, valueEn: "25+", valueBn: "২৫+", labelEn: "Destinations", labelBn: "গন্তব্যস্থল" },
  { icon: Headphones, valueEn: "24/7", valueBn: "২৪/৭", labelEn: "Support", labelBn: "সাপোর্ট" },
];

const StatsSection = () => {
  const { lang } = useLang();

  return (
    <section className="py-16 bg-background relative -mt-1">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                <stat.icon className="w-7 h-7 text-gold" />
              </div>
              <p className="text-3xl md:text-4xl font-extrabold text-foreground mb-1">
                {lang === "bn" ? stat.valueBn : stat.valueEn}
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                {lang === "bn" ? stat.labelBn : stat.labelEn}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
