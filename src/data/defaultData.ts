import { images } from "@/assets/images";

export interface VisaRate {
  id: string;
  country: string;
  countryBn: string;
  type: string;
  typeBn: string;
  rate: string;
  rateBn: string;
}

export interface Package {
  id: string;
  title: string;
  titleBn: string;
  destination: string;
  destinationBn: string;
  duration: string;
  durationBn: string;
  price: string;
  priceBn: string;
  description: string;
  descriptionBn: string;
  image: string;
  featured: boolean;
  category: "umrah" | "tour" | "hajj";
}

export interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  destination: string;
  travelers: number;
  travelDate: string;
  notes: string;
  status: "pending" | "confirmed" | "cancelled";
  createdAt: string;
}

export interface SiteSettings {
  companyName: string;
  companyNameBn: string;
  slogan: string;
  sloganBn: string;
  address: string;
  addressBn: string;
  phone: string;
  whatsapp: string;
  email: string;
  facebook: string;
  instagram: string;
  youtube: string;
}

export interface PageContent {
  heroTitle: string;
  heroTitleBn: string;
  heroSubtitle: string;
  heroSubtitleBn: string;
  aboutText: string;
  aboutTextBn: string;
  missionText: string;
  missionTextBn: string;
  visionText: string;
  visionTextBn: string;
}

export interface HeroSlide {
  id: string;
  image: string;
  titleEn: string;
  titleBn: string;
  highlightEn: string;
  highlightBn: string;
  subtitleEn: string;
  subtitleBn: string;
  link: string;
  badgeEn: string;
  badgeBn: string;
  cta1En: string;
  cta1Bn: string;
  cta2En: string;
  cta2Bn: string;
}

export interface StatItem {
  id: string;
  icon: string;
  valueEn: string;
  valueBn: string;
  labelEn: string;
  labelBn: string;
}

export interface FlightRoute {
  id: string;
  from: string;
  to: string;
  fromBn: string;
  toBn: string;
  price: string;
  priceBn: string;
}

export interface UmrahOffer {
  titleEn: string;
  titleBn: string;
  descEn: string;
  descBn: string;
  price: string;
  image: string;
  featuresEn: string[];
  featuresBn: string[];
}

export const defaultSettings: SiteSettings = {
  companyName: "Prime Sky International",
  companyNameBn: "প্রাইম স্কাই ইন্টারন্যাশনাল",
  slogan: "Your Journey, Our Priority",
  sloganBn: "আপনার যাত্রা, আমাদের অগ্রাধিকার",
  address: "29 Chamelibag, Shantinagar, Dhaka",
  addressBn: "২৯ চামেলীবাগ, শান্তিনগর, ঢাকা",
  phone: "01995-777222",
  whatsapp: "01765444445",
  email: "info@primeskyintl.com",
  facebook: "https://facebook.com/primeskyintl",
  instagram: "https://instagram.com/primeskyintl",
  youtube: "https://youtube.com/@primeskyintl",
};

export const defaultPageContent: PageContent = {
  heroTitle: "Your Journey, Our Priority",
  heroTitleBn: "আপনার যাত্রা, আমাদের অগ্রাধিকার",
  heroSubtitle: "Hajj & Umrah, Tour Packages, Air Tickets and Hotel Booking Services",
  heroSubtitleBn: "হজ্জ ও উমরাহ, ট্যুর প্যাকেজ, এয়ার টিকেট এবং হোটেল বুকিং সেবা",
  aboutText: "Prime Sky International is a reliable travel agency in Bangladesh. We provide Hajj & Umrah, Tour Packages, Air Tickets and Hotel Booking services. Customer satisfaction is our main goal.",
  aboutTextBn: "প্রাইম স্কাই ইন্টারন্যাশনাল বাংলাদেশের একটি নির্ভরযোগ্য ট্রাভেল এজেন্সি। আমরা হজ্জ ও উমরাহ, ট্যুর প্যাকেজ, এয়ার টিকেট এবং হোটেল বুকিং সেবা প্রদান করি। গ্রাহক সন্তুষ্টি আমাদের মূল লক্ষ্য।",
  missionText: "To provide quality travel services at affordable prices and make every customer's journey memorable.",
  missionTextBn: "সাশ্রয়ী মূল্যে মানসম্মত ভ্রমণ সেবা প্রদান করা এবং প্রতিটি গ্রাহকের যাত্রাকে স্মরণীয় করে তোলা।",
  visionText: "To become the most trusted and popular travel agency in Bangladesh.",
  visionTextBn: "বাংলাদেশের সবচেয়ে বিশ্বস্ত ও জনপ্রিয় ট্রাভেল এজেন্সি হিসেবে প্রতিষ্ঠিত হওয়া।",
};

export const defaultHeroSlides: HeroSlide[] = [
  {
    id: "1",
    image: images.kaaba,
    titleEn: "Find the Best Umrah Packages from Bangladesh",
    titleBn: "বাংলাদেশ থেকে সেরা উমরাহ প্যাকেজ খুঁজুন",
    highlightEn: "Umrah Packages",
    highlightBn: "উমরাহ প্যাকেজ",
    subtitleEn: "Prime Sky International offers comprehensive Hajj & Umrah packages with premium services, expert guidance and spiritual fulfillment.",
    subtitleBn: "প্রাইম স্কাই ইন্টারন্যাশনাল প্রিমিয়াম সেবা, বিশেষজ্ঞ গাইডেন্স এবং আধ্যাত্মিক পরিপূর্ণতার সাথে ব্যাপক হজ্জ ও উমরাহ প্যাকেজ অফার করে।",
    link: "/services/hajj-umrah",
    badgeEn: "Trusted Hajj & Umrah Partner",
    badgeBn: "বিশ্বস্ত হজ্জ ও উমরাহ পার্টনার",
    cta1En: "Plan Umrah",
    cta1Bn: "উমরাহ পরিকল্পনা করুন",
    cta2En: "View Hajj Packages",
    cta2Bn: "হজ্জ প্যাকেজ দেখুন",
  },
  {
    id: "2",
    image: images.beach,
    titleEn: "Explore Beautiful Destinations Worldwide",
    titleBn: "বিশ্বজুড়ে সুন্দর গন্তব্য অন্বেষণ করুন",
    highlightEn: "Beautiful Destinations",
    highlightBn: "সুন্দর গন্তব্য",
    subtitleEn: "Cox's Bazar, Thailand, Dubai — Unforgettable tour packages with the best travel experiences.",
    subtitleBn: "কক্সবাজার, থাইল্যান্ড, দুবাই — সেরা ভ্রমণ অভিজ্ঞতার সাথে অবিস্মরণীয় ট্যুর প্যাকেজ।",
    link: "/services/tour-packages",
    badgeEn: "Premium Tour Packages",
    badgeBn: "প্রিমিয়াম ট্যুর প্যাকেজ",
    cta1En: "Explore Tours",
    cta1Bn: "ট্যুর দেখুন",
    cta2En: "View Packages",
    cta2Bn: "প্যাকেজ দেখুন",
  },
  {
    id: "3",
    image: images.airplane,
    titleEn: "Fly With the Best Fare Guaranteed",
    titleBn: "সেরা ভাড়া নিশ্চয়তায় উড়ুন",
    highlightEn: "Best Fare",
    highlightBn: "সেরা ভাড়া",
    subtitleEn: "Dubai, Malaysia, Saudi Arabia, India — Get the most competitive air ticket prices.",
    subtitleBn: "দুবাই, মালয়েশিয়া, সৌদি আরব, ভারত — সবচেয়ে প্রতিযোগিতামূলক এয়ার টিকেটের দাম পান।",
    link: "/services/air-ticket",
    badgeEn: "Affordable Air Tickets",
    badgeBn: "সাশ্রয়ী এয়ার টিকেট",
    cta1En: "Book Flight",
    cta1Bn: "ফ্লাইট বুক করুন",
    cta2En: "View Offers",
    cta2Bn: "অফার দেখুন",
  },
  {
    id: "4",
    image: images.hotel,
    titleEn: "World-Class Hotel Booking Service",
    titleBn: "বিশ্বমানের হোটেল বুকিং সেবা",
    highlightEn: "Hotel Booking",
    highlightBn: "হোটেল বুকিং",
    subtitleEn: "Luxury & budget hotels worldwide at the best rates with guaranteed quality.",
    subtitleBn: "সেরা দামে বিশ্বজুড়ে লাক্সারি ও বাজেট হোটেল মানসম্মত নিশ্চয়তায়।",
    link: "/services/hotel-booking",
    badgeEn: "Premium Hotels",
    badgeBn: "প্রিমিয়াম হোটেল",
    cta1En: "Book Hotel",
    cta1Bn: "হোটেল বুক করুন",
    cta2En: "View Hotels",
    cta2Bn: "হোটেল দেখুন",
  },
];

export const defaultStats: StatItem[] = [
  { id: "1", icon: "Shield", valueEn: "10+", valueBn: "১০+", labelEn: "Years Experience", labelBn: "বছরের অভিজ্ঞতা" },
  { id: "2", icon: "BookOpen", valueEn: "1000+", valueBn: "১০০০+", labelEn: "Happy Clients", labelBn: "সুখী ক্লায়েন্ট" },
  { id: "3", icon: "Globe", valueEn: "25+", valueBn: "২৫+", labelEn: "Destinations", labelBn: "গন্তব্যস্থল" },
  { id: "4", icon: "Headphones", valueEn: "24/7", valueBn: "২৪/৭", labelEn: "Support", labelBn: "সাপোর্ট" },
];

export const defaultFlightRoutes: FlightRoute[] = [
  { id: "1", from: "Dhaka", to: "Dubai", fromBn: "ঢাকা", toBn: "দুবাই", price: "BDT 28,000", priceBn: "৳ ২৮,০০০" },
  { id: "2", from: "Dhaka", to: "Malaysia", fromBn: "ঢাকা", toBn: "মালয়েশিয়া", price: "BDT 22,000", priceBn: "৳ ২২,০০০" },
  { id: "3", from: "Dhaka", to: "Saudi Arabia", fromBn: "ঢাকা", toBn: "সৌদি আরব", price: "BDT 35,000", priceBn: "৳ ৩৫,০০০" },
  { id: "4", from: "Dhaka", to: "India", fromBn: "ঢাকা", toBn: "ভারত", price: "BDT 12,000", priceBn: "৳ ১২,০০০" },
];

export const defaultUmrahOffer: UmrahOffer = {
  titleEn: "UMRAH SPECIAL OFFER",
  titleBn: "উমরাহ স্পেশাল অফার",
  descEn: "All responsibilities including visa processing are ours. Premium service guaranteed.",
  descBn: "ভিসা প্রসেসিং সহ সকল দায়িত্ব আমাদের। প্রিমিয়াম সেবা নিশ্চিত।",
  price: "BDT 135,000",
  image: images.mosque,
  featuresEn: ["Visa Processing", "5-Star Hotel", "Flight Included", "Expert Guide", "Ziyarat Tour", "24/7 Support"],
  featuresBn: ["ভিসা প্রসেসিং", "৫-স্টার হোটেল", "ফ্লাইট অন্তর্ভুক্ত", "বিশেষজ্ঞ গাইড", "জিয়ারত ট্যুর", "২৪/৭ সাপোর্ট"],
};

export const defaultVisaRates: VisaRate[] = [
  { id: "1", country: "Thailand", countryBn: "থাইল্যান্ড", type: "e-Visa", typeBn: "ই-ভিসা", rate: "5,800/-", rateBn: "৫,৮০০/-" },
  { id: "2", country: "Malaysia", countryBn: "মালয়েশিয়া", type: "e-Visa", typeBn: "ই-ভিসা", rate: "4,500/-", rateBn: "৪,৫০০/-" },
  { id: "3", country: "Singapore", countryBn: "সিঙ্গাপুর", type: "e-Visa", typeBn: "ই-ভিসা", rate: "6,000/-", rateBn: "৬,০০০/-" },
  { id: "4", country: "Sri Lanka", countryBn: "শ্রীলঙ্কা", type: "e-Visa", typeBn: "ই-ভিসা", rate: "3,500/-", rateBn: "৩,৫০০/-" },
  { id: "5", country: "Hong Kong", countryBn: "হংকং", type: "e-Visa", typeBn: "ই-ভিসা", rate: "9,000/-", rateBn: "৯,০০০/-" },
  { id: "6", country: "Philippines", countryBn: "ফিলিপাইন", type: "Sticker Visa", typeBn: "স্টিকার ভিসা", rate: "9,000/-", rateBn: "৯,০০০/-" },
  { id: "7", country: "China", countryBn: "চীন", type: "Sticker Visa", typeBn: "স্টিকার ভিসা", rate: "10,500/-", rateBn: "১০,৫০০/-" },
  { id: "8", country: "Turkey", countryBn: "তুরস্ক", type: "Sticker Visa", typeBn: "স্টিকার ভিসা", rate: "27,000/-", rateBn: "২৭,০০০/-" },
  { id: "9", country: "Japan", countryBn: "জাপান", type: "Sticker Visa", typeBn: "স্টিকার ভিসা", rate: "1,000/- (Processing fee)", rateBn: "১,০০০/- (প্রসেসিং ফি)" },
  { id: "10", country: "Indonesia", countryBn: "ইন্দোনেশিয়া", type: "Sticker Visa", typeBn: "স্টিকার ভিসা", rate: "1,500/- (Processing fee)", rateBn: "১,৫০০/- (প্রসেসিং ফি)" },
  { id: "11", country: "Schengen", countryBn: "শেনজেন", type: "Sticker Visa", typeBn: "স্টিকার ভিসা", rate: "5,000/- (Processing fee)", rateBn: "৫,০০০/- (প্রসেসিং ফি)" },
  { id: "12", country: "1st World Country", countryBn: "উন্নত দেশ", type: "Sticker Visa", typeBn: "স্টিকার ভিসা", rate: "5,000/- (Processing fee)", rateBn: "৫,০০০/- (প্রসেসিং ফি)" },
];

export const defaultPackages: Package[] = [
  {
    id: "1",
    title: "Umrah Package - Economy",
    titleBn: "উমরাহ প্যাকেজ - ইকোনমি",
    destination: "Makkah & Madinah",
    destinationBn: "মক্কা ও মদিনা",
    duration: "14 Days",
    durationBn: "১৪ দিন",
    price: "BDT 135,000",
    priceBn: "৳ ১,৩৫,০০০",
    description: "Complete Umrah package including visa, flight, hotel, transport and guidance.",
    descriptionBn: "ভিসা, ফ্লাইট, হোটেল, পরিবহন ও গাইডেন্স সহ সম্পূর্ণ উমরাহ প্যাকেজ।",
    image: images.kaaba,
    featured: true,
    category: "umrah",
  },
  {
    id: "2",
    title: "Umrah Package - Premium",
    titleBn: "উমরাহ প্যাকেজ - প্রিমিয়াম",
    destination: "Makkah & Madinah",
    destinationBn: "মক্কা ও মদিনা",
    duration: "21 Days",
    durationBn: "২১ দিন",
    price: "BDT 225,000",
    priceBn: "৳ ২,২৫,০০০",
    description: "Premium Umrah package with 5-star hotel, private transport and VIP services.",
    descriptionBn: "৫-স্টার হোটেল, প্রাইভেট পরিবহন ও VIP সেবা সহ প্রিমিয়াম উমরাহ প্যাকেজ।",
    image: images.mosque,
    featured: true,
    category: "umrah",
  },
  {
    id: "3",
    title: "Cox's Bazar Tour",
    titleBn: "কক্সবাজার ট্যুর",
    destination: "Cox's Bazar",
    destinationBn: "কক্সবাজার",
    duration: "3 Days 2 Nights",
    durationBn: "৩ দিন ২ রাত",
    price: "BDT 8,500",
    priceBn: "৳ ৮,৫০০",
    description: "Enjoy the world's longest sea beach with comfortable accommodation and sightseeing.",
    descriptionBn: "বিশ্বের দীর্ঘতম সমুদ্র সৈকতে আরামদায়ক থাকা ও ভ্রমণ উপভোগ করুন।",
    image: images.beach,
    featured: true,
    category: "tour",
  },
  {
    id: "4",
    title: "Thailand Tour",
    titleBn: "থাইল্যান্ড ট্যুর",
    destination: "Bangkok & Pattaya",
    destinationBn: "ব্যাংকক ও পাতায়া",
    duration: "5 Days 4 Nights",
    durationBn: "৫ দিন ৪ রাত",
    price: "BDT 35,000",
    priceBn: "৳ ৩৫,০০০",
    description: "Explore Bangkok and Pattaya with guided tours, shopping and Thai culture.",
    descriptionBn: "গাইডেড ট্যুর, শপিং ও থাই সংস্কৃতি সহ ব্যাংকক ও পাতায়া উপভোগ করুন।",
    image: images.thailand,
    featured: true,
    category: "tour",
  },
  {
    id: "5",
    title: "Dubai City Tour",
    titleBn: "দুবাই সিটি ট্যুর",
    destination: "Dubai, UAE",
    destinationBn: "দুবাই, সংযুক্ত আরব আমিরাত",
    duration: "4 Days 3 Nights",
    durationBn: "৪ দিন ৩ রাত",
    price: "BDT 45,000",
    priceBn: "৳ ৪৫,০০০",
    description: "Visit Burj Khalifa, Dubai Mall, Desert Safari and more iconic attractions.",
    descriptionBn: "বুর্জ খলিফা, দুবাই মল, ডেজার্ট সাফারি সহ আরও অনেক আকর্ষণ পরিদর্শন করুন।",
    image: images.dubai,
    featured: true,
    category: "tour",
  },
  {
    id: "6",
    title: "Hajj Package 2025",
    titleBn: "হজ্জ প্যাকেজ ২০২৫",
    destination: "Makkah & Madinah",
    destinationBn: "মক্কা ও মদিনা",
    duration: "40 Days",
    durationBn: "৪০ দিন",
    price: "BDT 650,000",
    priceBn: "৳ ৬,৫০,০০০",
    description: "Complete Hajj package with all arrangements, experienced guide and group support.",
    descriptionBn: "সকল ব্যবস্থাপনা, অভিজ্ঞ গাইড ও গ্রুপ সাপোর্ট সহ সম্পূর্ণ হজ্জ প্যাকেজ।",
    image: images.hajj,
    featured: false,
    category: "hajj",
  },
];
