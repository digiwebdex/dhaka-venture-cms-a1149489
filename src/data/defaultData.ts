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
