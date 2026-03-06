import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star, MapPin, Plane, Hotel, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const ServicesSection = () => {
  const { t, lang } = useLang();

  const services = [
    { icon: Star, ...t.services.hajj, link: "/services/hajj-umrah", img: "https://cdn.pixabay.com/photo/2019/03/11/15/30/kaaba-4049261_1280.jpg", gradient: "from-gold/20 to-gold/5" },
    { icon: MapPin, ...t.services.tour, link: "/services/tour-packages", img: "https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_1280.jpg", gradient: "from-sky/20 to-sky/5" },
    { icon: Plane, ...t.services.air, link: "/services/air-ticket", img: "https://cdn.pixabay.com/photo/2016/11/18/13/23/action-1834465_1280.jpg", gradient: "from-primary/20 to-primary/5" },
    { icon: Hotel, ...t.services.hotel, link: "/services/hotel-booking", img: "https://cdn.pixabay.com/photo/2016/11/17/09/28/hotel-1831072_1280.jpg", gradient: "from-success/20 to-success/5" },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <motion.span variants={fadeUp} custom={0} className="inline-block text-gold font-semibold text-sm uppercase tracking-widest mb-3">
            {lang === "bn" ? "আমাদের সেবাসমূহ" : "Our Services"}
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            {t.services.title}
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.services.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
              <Link to={service.link}>
                <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-border/50 group bg-card">
                  <div className="h-48 overflow-hidden relative">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
                    <div className={`absolute bottom-3 left-3 w-12 h-12 rounded-2xl bg-gradient-to-br ${service.gradient} backdrop-blur-sm border border-border/30 flex items-center justify-center`}>
                      <service.icon className="w-6 h-6 text-gold" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-gold transition-colors">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{service.desc}</p>
                    <div className="mt-4 flex items-center text-sm font-semibold text-gold gap-1.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {lang === "bn" ? "বিস্তারিত দেখুন" : "Learn More"} <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
