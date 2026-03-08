import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import {
  SiteSettings, PageContent, VisaRate, Package, Booking,
  HeroSlide, StatItem, FlightRoute, UmrahOffer,
  defaultSettings, defaultPageContent, defaultVisaRates, defaultPackages,
  defaultHeroSlides, defaultStats, defaultFlightRoutes, defaultUmrahOffer,
} from "@/data/defaultData";

interface CmsContextType {
  settings: SiteSettings;
  pageContent: PageContent;
  visaRates: VisaRate[];
  packages: Package[];
  bookings: Booking[];
  heroSlides: HeroSlide[];
  stats: StatItem[];
  flightRoutes: FlightRoute[];
  umrahOffer: UmrahOffer;
  updateSettings: (s: SiteSettings) => void;
  updatePageContent: (p: PageContent) => void;
  updateVisaRates: (v: VisaRate[]) => void;
  updatePackages: (p: Package[]) => void;
  addBooking: (b: Booking) => void;
  updateBooking: (id: string, updates: Partial<Booking>) => void;
  deleteBooking: (id: string) => void;
  addPackage: (p: Package) => void;
  deletePackage: (id: string) => void;
  addVisaRate: (v: VisaRate) => void;
  deleteVisaRate: (id: string) => void;
  updateHeroSlides: (s: HeroSlide[]) => void;
  addHeroSlide: (s: HeroSlide) => void;
  deleteHeroSlide: (id: string) => void;
  updateStats: (s: StatItem[]) => void;
  addStat: (s: StatItem) => void;
  deleteStat: (id: string) => void;
  updateFlightRoutes: (r: FlightRoute[]) => void;
  addFlightRoute: (r: FlightRoute) => void;
  deleteFlightRoute: (id: string) => void;
  updateUmrahOffer: (o: UmrahOffer) => void;
}

const CmsContext = createContext<CmsContextType | undefined>(undefined);

function loadFromStorage<T>(key: string, fallback: T): T {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch {
    return fallback;
  }
}

export const CmsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<SiteSettings>(() => loadFromStorage("cms_settings", defaultSettings));
  const [pageContent, setPageContent] = useState<PageContent>(() => loadFromStorage("cms_pageContent", defaultPageContent));
  const [visaRates, setVisaRates] = useState<VisaRate[]>(() => loadFromStorage("cms_visaRates", defaultVisaRates));
  const [packages, setPackages] = useState<Package[]>(() => loadFromStorage("cms_packages", defaultPackages));
  const [bookings, setBookings] = useState<Booking[]>(() => loadFromStorage("cms_bookings", []));
  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>(() => loadFromStorage("cms_heroSlides", defaultHeroSlides));
  const [stats, setStats] = useState<StatItem[]>(() => loadFromStorage("cms_stats", defaultStats));
  const [flightRoutes, setFlightRoutes] = useState<FlightRoute[]>(() => loadFromStorage("cms_flightRoutes", defaultFlightRoutes));
  const [umrahOffer, setUmrahOffer] = useState<UmrahOffer>(() => loadFromStorage("cms_umrahOffer", defaultUmrahOffer));

  useEffect(() => { localStorage.setItem("cms_settings", JSON.stringify(settings)); }, [settings]);
  useEffect(() => { localStorage.setItem("cms_pageContent", JSON.stringify(pageContent)); }, [pageContent]);
  useEffect(() => { localStorage.setItem("cms_visaRates", JSON.stringify(visaRates)); }, [visaRates]);
  useEffect(() => { localStorage.setItem("cms_packages", JSON.stringify(packages)); }, [packages]);
  useEffect(() => { localStorage.setItem("cms_bookings", JSON.stringify(bookings)); }, [bookings]);
  useEffect(() => { localStorage.setItem("cms_heroSlides", JSON.stringify(heroSlides)); }, [heroSlides]);
  useEffect(() => { localStorage.setItem("cms_stats", JSON.stringify(stats)); }, [stats]);
  useEffect(() => { localStorage.setItem("cms_flightRoutes", JSON.stringify(flightRoutes)); }, [flightRoutes]);
  useEffect(() => { localStorage.setItem("cms_umrahOffer", JSON.stringify(umrahOffer)); }, [umrahOffer]);

  const updateSettings = (s: SiteSettings) => setSettings(s);
  const updatePageContent = (p: PageContent) => setPageContent(p);
  const updateVisaRates = (v: VisaRate[]) => setVisaRates(v);
  const updatePackages = (p: Package[]) => setPackages(p);
  const addBooking = (b: Booking) => setBookings((prev) => [...prev, b]);
  const updateBooking = (id: string, updates: Partial<Booking>) =>
    setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, ...updates } : b)));
  const deleteBooking = (id: string) => setBookings((prev) => prev.filter((b) => b.id !== id));
  const addPackage = (p: Package) => setPackages((prev) => [...prev, p]);
  const deletePackage = (id: string) => setPackages((prev) => prev.filter((p) => p.id !== id));
  const addVisaRate = (v: VisaRate) => setVisaRates((prev) => [...prev, v]);
  const deleteVisaRate = (id: string) => setVisaRates((prev) => prev.filter((v) => v.id !== id));
  const updateHeroSlides = (s: HeroSlide[]) => setHeroSlides(s);
  const addHeroSlide = (s: HeroSlide) => setHeroSlides((prev) => [...prev, s]);
  const deleteHeroSlide = (id: string) => setHeroSlides((prev) => prev.filter((s) => s.id !== id));
  const updateStats = (s: StatItem[]) => setStats(s);
  const addStat = (s: StatItem) => setStats((prev) => [...prev, s]);
  const deleteStat = (id: string) => setStats((prev) => prev.filter((s) => s.id !== id));
  const updateFlightRoutes = (r: FlightRoute[]) => setFlightRoutes(r);
  const addFlightRoute = (r: FlightRoute) => setFlightRoutes((prev) => [...prev, r]);
  const deleteFlightRoute = (id: string) => setFlightRoutes((prev) => prev.filter((r) => r.id !== id));
  const updateUmrahOffer = (o: UmrahOffer) => setUmrahOffer(o);

  return (
    <CmsContext.Provider value={{
      settings, pageContent, visaRates, packages, bookings,
      heroSlides, stats, flightRoutes, umrahOffer,
      updateSettings, updatePageContent, updateVisaRates, updatePackages,
      addBooking, updateBooking, deleteBooking, addPackage, deletePackage,
      addVisaRate, deleteVisaRate,
      updateHeroSlides, addHeroSlide, deleteHeroSlide,
      updateStats, addStat, deleteStat,
      updateFlightRoutes, addFlightRoute, deleteFlightRoute,
      updateUmrahOffer,
    }}>
      {children}
    </CmsContext.Provider>
  );
};

export const useCms = () => {
  const ctx = useContext(CmsContext);
  if (!ctx) {
    return {
      settings: defaultSettings,
      pageContent: defaultPageContent,
      visaRates: defaultVisaRates,
      packages: defaultPackages,
      bookings: [] as Booking[],
      heroSlides: defaultHeroSlides,
      stats: defaultStats,
      flightRoutes: defaultFlightRoutes,
      umrahOffer: defaultUmrahOffer,
      updateSettings: () => {},
      updatePageContent: () => {},
      updateVisaRates: () => {},
      updatePackages: () => {},
      addBooking: () => {},
      updateBooking: () => {},
      deleteBooking: () => {},
      addPackage: () => {},
      deletePackage: () => {},
      addVisaRate: () => {},
      deleteVisaRate: () => {},
      updateHeroSlides: () => {},
      addHeroSlide: () => {},
      deleteHeroSlide: () => {},
      updateStats: () => {},
      addStat: () => {},
      deleteStat: () => {},
      updateFlightRoutes: () => {},
      addFlightRoute: () => {},
      deleteFlightRoute: () => {},
      updateUmrahOffer: () => {},
    } as CmsContextType;
  }
  return ctx;
};
