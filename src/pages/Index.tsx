import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";
import { useCms } from "@/contexts/CmsContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { motion } from "framer-motion";
import { Plane, Hotel, MapPin, Star, ArrowRight, Compass } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const Index = () => {
  const { t, lang } = useLang();
  const { settings, visaRates, packages, pageContent } = useCms();

  const featuredPackages = packages.filter((p) => p.featured);
  const umrahPackages = packages.filter((p) => p.category === "umrah");

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-navy-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-1.5 rounded-full text-sm mb-6">
              <Star className="w-4 h-4" />
              <span>{lang === "bn" ? settings.companyNameBn : settings.companyName}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-6 leading-tight">
              {lang === "bn" ? pageContent.heroTitleBn : pageContent.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              {lang === "bn" ? pageContent.heroSubtitleBn : pageContent.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button size="lg" className="bg-gold-gradient text-secondary-foreground hover:opacity-90 font-bold text-lg px-8 h-14">
                  {t.hero.cta}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/packages">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg px-8 h-14">
                  <Compass className="w-5 h-5 mr-2" />
                  {t.hero.explore}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.services.title}
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t.services.subtitle}
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Star, ...t.services.hajj, link: "/services/hajj-umrah", color: "text-gold" },
              { icon: MapPin, ...t.services.tour, link: "/services/tour-packages", color: "text-sky" },
              { icon: Plane, ...t.services.air, link: "/services/air-ticket", color: "text-primary" },
              { icon: Hotel, ...t.services.hotel, link: "/services/hotel-booking", color: "text-success" },
            ].map((service, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                <Link to={service.link}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 group">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform ${service.color}`}>
                        <service.icon className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-foreground">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Umrah Special Offer */}
      <section className="py-16 bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-gold blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-sky blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
              {t.offers.umrahTitle}
            </h2>
            <p className="text-gold text-lg mb-2">{t.offers.umrahStarting}</p>
            <p className="text-5xl md:text-7xl font-extrabold text-gold mb-8">
              BDT 135,000
            </p>
            <p className="text-primary-foreground/70 mb-8 text-lg">
              {lang === "bn"
                ? "ভিসা প্রসেসিং সহ সকল দায়িত্ব আমাদের"
                : "All responsibilities including visa processing are ours"}
            </p>
            <Link to="/services/hajj-umrah">
              <Button size="lg" className="bg-gold-gradient text-secondary-foreground hover:opacity-90 font-bold text-lg px-10 h-14">
                {t.hero.explore}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Fly With Best Fare */}
      <section className="py-16 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {t.offers.flyTitle}
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-xl text-muted-foreground">{t.offers.flySubtitle}</motion.p>
            <motion.div variants={fadeUp} custom={2} className="inline-block mt-3 bg-destructive text-destructive-foreground px-4 py-1 rounded-full text-sm font-semibold">
              {t.offers.limitedTime}
            </motion.div>
          </motion.div>
          <div className="flex justify-center">
            <Link to="/services/air-ticket">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-navy-light font-bold h-12 px-8">
                {t.hero.explore}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {t.offers.tourTitle}
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-lg text-muted-foreground">{t.offers.tourSubtitle}</motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPackages.slice(0, 6).map((pkg, i) => (
              <motion.div key={pkg.id} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={lang === "bn" ? pkg.titleBn : pkg.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg mb-1 text-foreground">{lang === "bn" ? pkg.titleBn : pkg.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {lang === "bn" ? pkg.destinationBn : pkg.destination} • {lang === "bn" ? pkg.durationBn : pkg.duration}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{lang === "bn" ? pkg.descriptionBn : pkg.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-extrabold text-primary">{lang === "bn" ? pkg.priceBn : pkg.price}</span>
                      <Link to="/booking">
                        <Button size="sm" className="bg-gold-gradient text-secondary-foreground hover:opacity-90 font-semibold">
                          {t.nav.bookNow}
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/packages">
              <Button variant="outline" size="lg" className="font-semibold">
                {lang === "bn" ? "সকল প্যাকেজ দেখুন" : "View All Packages"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Visa Processing Table */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {t.visa.title}
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-lg">{t.visa.subtitle}</motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
            className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-primary">
                    <TableHead className="text-primary-foreground font-bold">{t.visa.country}</TableHead>
                    <TableHead className="text-primary-foreground font-bold">{t.visa.type}</TableHead>
                    <TableHead className="text-primary-foreground font-bold text-right">{t.visa.rate}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {visaRates.map((visa, i) => (
                    <TableRow key={visa.id} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                      <TableCell className="font-medium">{lang === "bn" ? visa.countryBn : visa.country}</TableCell>
                      <TableCell>{lang === "bn" ? visa.typeBn : visa.type}</TableCell>
                      <TableCell className="text-right font-semibold text-primary">{lang === "bn" ? visa.rateBn : visa.rate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </motion.div>

          <div className="text-center mt-8">
            <Link to="/services/visa-processing">
              <Button className="bg-primary text-primary-foreground hover:bg-navy-light font-semibold">
                {lang === "bn" ? "বিস্তারিত জানুন" : "Learn More"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-navy-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              {lang === "bn" ? "আজই যোগাযোগ করুন" : "Contact Us Today"}
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
              {lang === "bn"
                ? "আপনার স্বপ্নের ভ্রমণ পরিকল্পনা করতে আমাদের সাথে যোগাযোগ করুন"
                : "Contact us to plan your dream trip"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gold-gradient text-secondary-foreground hover:opacity-90 font-bold h-14 px-8">
                  {t.contact.sendMessage}
                </Button>
              </Link>
              <a href={`https://wa.me/${settings.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 h-14 px-8 font-semibold">
                  WhatsApp: {settings.whatsapp}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
