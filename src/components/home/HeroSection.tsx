import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";
import { useWhatsAppLink } from "@/hooks/useWhatsAppLink";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowRight, Compass, ChevronLeft, ChevronRight, Users } from "lucide-react";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1200&q=80",
    titleEn: "Find the Best Umrah Packages from Bangladesh",
    titleBn: "বাংলাদেশ থেকে সেরা উমরাহ প্যাকেজ খুঁজুন",
    highlightEn: "Umrah Packages",
    highlightBn: "উমরাহ প্যাকেজ",
    subtitleEn: "Prime Sky International offers comprehensive Hajj & Umrah packages with premium services, expert guidance and spiritual fulfillment.",
    subtitleBn: "প্রাইম স্কাই ইন্টারন্যাশনাল প্রিমিয়াম সেবা, বিশেষজ্ঞ গাইডেন্স এবং আধ্যাত্মিক পরিপূর্ণতার সাথে ব্যাপক হজ্জ ও উমরাহ প্যাকেজ অফার করে।",
    link: "/services/hajj-umrah",
    badge: { en: "Trusted Hajj & Umrah Partner", bn: "বিশ্বস্ত হজ্জ ও উমরাহ পার্টনার" },
    cta1: { en: "Plan Umrah", bn: "উমরাহ পরিকল্পনা করুন" },
    cta2: { en: "View Hajj Packages", bn: "হজ্জ প্যাকেজ দেখুন" },
  },
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    titleEn: "Explore Beautiful Destinations Worldwide",
    titleBn: "বিশ্বজুড়ে সুন্দর গন্তব্য অন্বেষণ করুন",
    highlightEn: "Beautiful Destinations",
    highlightBn: "সুন্দর গন্তব্য",
    subtitleEn: "Cox's Bazar, Thailand, Dubai — Unforgettable tour packages with the best travel experiences.",
    subtitleBn: "কক্সবাজার, থাইল্যান্ড, দুবাই — সেরা ভ্রমণ অভিজ্ঞতার সাথে অবিস্মরণীয় ট্যুর প্যাকেজ।",
    link: "/services/tour-packages",
    badge: { en: "Premium Tour Packages", bn: "প্রিমিয়াম ট্যুর প্যাকেজ" },
    cta1: { en: "Explore Tours", bn: "ট্যুর দেখুন" },
    cta2: { en: "View Packages", bn: "প্যাকেজ দেখুন" },
  },
  {
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=1200&q=80",
    titleEn: "Fly With the Best Fare Guaranteed",
    titleBn: "সেরা ভাড়ার নিশ্চয়তায় উড়ুন",
    highlightEn: "Best Fare",
    highlightBn: "সেরা ভাড়া",
    subtitleEn: "Dubai, Malaysia, Saudi Arabia, India — Get the most competitive air ticket prices.",
    subtitleBn: "দুবাই, মালয়েশিয়া, সৌদি আরব, ভারত — সবচেয়ে প্রতিযোগিতামূলক এয়ার টিকেটের দাম পান।",
    link: "/services/air-ticket",
    badge: { en: "Affordable Air Tickets", bn: "সাশ্রয়ী এয়ার টিকেট" },
    cta1: { en: "Book Flight", bn: "ফ্লাইট বুক করুন" },
    cta2: { en: "View Offers", bn: "অফার দেখুন" },
  },
  {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
    titleEn: "World-Class Hotel Booking Service",
    titleBn: "বিশ্বমানের হোটেল বুকিং সেবা",
    highlightEn: "Hotel Booking",
    highlightBn: "হোটেল বুকিং",
    subtitleEn: "Luxury & budget hotels worldwide at the best rates with guaranteed quality.",
    subtitleBn: "সেরা দামে বিশ্বজুড়ে লাক্সারি ও বাজেট হোটেল মানসম্মত নিশ্চয়তায়।",
    link: "/services/hotel-booking",
    badge: { en: "Premium Hotels", bn: "প্রিমিয়াম হোটেল" },
    cta1: { en: "Book Hotel", bn: "হোটেল বুক করুন" },
    cta2: { en: "View Hotels", bn: "হোটেল দেখুন" },
  },
];

const HeroSection = () => {
  const { lang } = useLang();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative min-h-[90vh] bg-navy-gradient overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-sky/5 blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[90vh] py-20">
          {/* Left: Text Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gold/10 backdrop-blur-sm border border-gold/20 text-gold px-4 py-2 rounded-full">
                <Star className="w-4 h-4 fill-gold" />
                <span className="text-sm font-semibold tracking-wide">
                  {lang === "bn" ? slide.badge.bn : slide.badge.en}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1]">
                <span className="text-primary-foreground">
                  {lang === "bn"
                    ? slide.titleBn.replace(slide.highlightBn, "")
                    : slide.titleEn.replace(slide.highlightEn, "")}
                </span>
                <span className="text-gradient">
                  {lang === "bn" ? slide.highlightBn : slide.highlightEn}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-primary-foreground/60 text-base md:text-lg max-w-xl leading-relaxed">
                {lang === "bn" ? slide.subtitleBn : slide.subtitleEn}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-gold-gradient text-secondary-foreground hover:opacity-90 font-bold text-base px-8 h-13 shadow-xl shadow-gold/20 rounded-full">
                    {lang === "bn" ? slide.cta1.bn : slide.cta1.en}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <Link to={slide.link}>
                  <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/5 font-semibold text-base px-8 h-13 rounded-full">
                    {lang === "bn" ? slide.cta2.bn : slide.cta2.en}
                  </Button>
                </Link>
              </div>

              {/* Social links hint */}
              <div className="flex items-center gap-3 pt-4">
                <span className="text-primary-foreground/40 text-sm">
                  {lang === "bn" ? "আমাদের অনুসরণ করুন:" : "Follow us:"}
                </span>
                {["facebook", "instagram", "youtube"].map((social) => (
                  <div key={social} className="w-9 h-9 rounded-full border border-primary-foreground/15 flex items-center justify-center text-primary-foreground/50 hover:text-gold hover:border-gold/40 transition-colors cursor-pointer">
                    <span className="text-xs font-bold uppercase">{social[0]}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right: Image with decorative border */}
          <div className="relative hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Ornamental frame */}
                <div className="relative rounded-2xl overflow-hidden border-4 border-gold/30 shadow-2xl shadow-gold/10">
                  {/* Inner gold corners decoration */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold/60 rounded-tl-xl z-20" />
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold/60 rounded-tr-xl z-20" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold/60 rounded-bl-xl z-20" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold/60 rounded-br-xl z-20" />

                  <img
                    src={slide.image}
                    alt={lang === "bn" ? slide.titleBn : slide.titleEn}
                    className="w-full h-[480px] object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent" />
                </div>

                {/* Floating stats card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-5 shadow-2xl border border-border/50 z-30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <p className="text-2xl font-extrabold text-foreground">1000+</p>
                      <p className="text-sm text-muted-foreground">
                        {lang === "bn" ? "সুখী মুসাফির" : "Happy Travelers"}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slider controls at bottom */}
        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > currentSlide ? 1 : -1); setCurrentSlide(i); }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentSlide ? "w-10 bg-gold" : "w-5 bg-primary-foreground/30 hover:bg-primary-foreground/50"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={prevSlide} className="w-10 h-10 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur-sm flex items-center justify-center text-primary-foreground/70 hover:bg-gold hover:text-secondary-foreground hover:border-gold transition-all">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={nextSlide} className="w-10 h-10 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur-sm flex items-center justify-center text-primary-foreground/70 hover:bg-gold hover:text-secondary-foreground hover:border-gold transition-all">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
