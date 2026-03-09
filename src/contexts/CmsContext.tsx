import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import {
  SiteSettings, PageContent, VisaRate, Package, Booking,
  HeroSlide, StatItem, FlightRoute, UmrahOffer,
  SeoSettings, ServiceItem, FooterContent, ContactCtaContent,
  defaultSettings, defaultPageContent, defaultVisaRates, defaultPackages,
  defaultHeroSlides, defaultStats, defaultFlightRoutes, defaultUmrahOffer,
  defaultSeoSettings, defaultServices, defaultFooterContent, defaultContactCta,
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
  seoSettings: SeoSettings;
  services: ServiceItem[];
  footerContent: FooterContent;
  contactCta: ContactCtaContent;
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
  updateSeoSettings: (s: SeoSettings) => void;
  updateServices: (s: ServiceItem[]) => void;
  addService: (s: ServiceItem) => void;
  deleteService: (id: string) => void;
  updateFooterContent: (f: FooterContent) => void;
  updateContactCta: (c: ContactCtaContent) => void;
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
  const [seoSettings, setSeoSettings] = useState<SeoSettings>(() => loadFromStorage("cms_seoSettings", defaultSeoSettings));
  const [services, setServices] = useState<ServiceItem[]>(() => loadFromStorage("cms_services", defaultServices));
  const [footerContent, setFooterContent] = useState<FooterContent>(() => loadFromStorage("cms_footerContent", defaultFooterContent));
  const [contactCta, setContactCta] = useState<ContactCtaContent>(() => loadFromStorage("cms_contactCta", defaultContactCta));

  useEffect(() => { localStorage.setItem("cms_settings", JSON.stringify(settings)); }, [settings]);
  useEffect(() => { localStorage.setItem("cms_pageContent", JSON.stringify(pageContent)); }, [pageContent]);
  useEffect(() => { localStorage.setItem("cms_visaRates", JSON.stringify(visaRates)); }, [visaRates]);
  useEffect(() => { localStorage.setItem("cms_packages", JSON.stringify(packages)); }, [packages]);
  useEffect(() => { localStorage.setItem("cms_bookings", JSON.stringify(bookings)); }, [bookings]);
  useEffect(() => { localStorage.setItem("cms_heroSlides", JSON.stringify(heroSlides)); }, [heroSlides]);
  useEffect(() => { localStorage.setItem("cms_stats", JSON.stringify(stats)); }, [stats]);
  useEffect(() => { localStorage.setItem("cms_flightRoutes", JSON.stringify(flightRoutes)); }, [flightRoutes]);
  useEffect(() => { localStorage.setItem("cms_umrahOffer", JSON.stringify(umrahOffer)); }, [umrahOffer]);
  useEffect(() => { localStorage.setItem("cms_seoSettings", JSON.stringify(seoSettings)); }, [seoSettings]);
  useEffect(() => { localStorage.setItem("cms_services", JSON.stringify(services)); }, [services]);
  useEffect(() => { localStorage.setItem("cms_footerContent", JSON.stringify(footerContent)); }, [footerContent]);
  useEffect(() => { localStorage.setItem("cms_contactCta", JSON.stringify(contactCta)); }, [contactCta]);

  return (
    <CmsContext.Provider value={{
      settings, pageContent, visaRates, packages, bookings,
      heroSlides, stats, flightRoutes, umrahOffer,
      seoSettings, services, footerContent, contactCta,
      updateSettings: setSettings,
      updatePageContent: setPageContent,
      updateVisaRates: setVisaRates,
      updatePackages: setPackages,
      addBooking: (b) => setBookings((prev) => [...prev, b]),
      updateBooking: (id, updates) => setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, ...updates } : b))),
      deleteBooking: (id) => setBookings((prev) => prev.filter((b) => b.id !== id)),
      addPackage: (p) => setPackages((prev) => [...prev, p]),
      deletePackage: (id) => setPackages((prev) => prev.filter((p) => p.id !== id)),
      addVisaRate: (v) => setVisaRates((prev) => [...prev, v]),
      deleteVisaRate: (id) => setVisaRates((prev) => prev.filter((v) => v.id !== id)),
      updateHeroSlides: setHeroSlides,
      addHeroSlide: (s) => setHeroSlides((prev) => [...prev, s]),
      deleteHeroSlide: (id) => setHeroSlides((prev) => prev.filter((s) => s.id !== id)),
      updateStats: setStats,
      addStat: (s) => setStats((prev) => [...prev, s]),
      deleteStat: (id) => setStats((prev) => prev.filter((s) => s.id !== id)),
      updateFlightRoutes: setFlightRoutes,
      addFlightRoute: (r) => setFlightRoutes((prev) => [...prev, r]),
      deleteFlightRoute: (id) => setFlightRoutes((prev) => prev.filter((r) => r.id !== id)),
      updateUmrahOffer: setUmrahOffer,
      updateSeoSettings: setSeoSettings,
      updateServices: setServices,
      addService: (s) => setServices((prev) => [...prev, s]),
      deleteService: (id) => setServices((prev) => prev.filter((s) => s.id !== id)),
      updateFooterContent: setFooterContent,
      updateContactCta: setContactCta,
    }}>
      {children}
    </CmsContext.Provider>
  );
};

export const useCms = () => {
  const ctx = useContext(CmsContext);
  if (!ctx) {
    return {
      settings: defaultSettings, pageContent: defaultPageContent,
      visaRates: defaultVisaRates, packages: defaultPackages,
      bookings: [] as Booking[], heroSlides: defaultHeroSlides,
      stats: defaultStats, flightRoutes: defaultFlightRoutes,
      umrahOffer: defaultUmrahOffer, seoSettings: defaultSeoSettings,
      services: defaultServices, footerContent: defaultFooterContent,
      contactCta: defaultContactCta,
      updateSettings: () => {}, updatePageContent: () => {},
      updateVisaRates: () => {}, updatePackages: () => {},
      addBooking: () => {}, updateBooking: () => {}, deleteBooking: () => {},
      addPackage: () => {}, deletePackage: () => {},
      addVisaRate: () => {}, deleteVisaRate: () => {},
      updateHeroSlides: () => {}, addHeroSlide: () => {}, deleteHeroSlide: () => {},
      updateStats: () => {}, addStat: () => {}, deleteStat: () => {},
      updateFlightRoutes: () => {}, addFlightRoute: () => {}, deleteFlightRoute: () => {},
      updateUmrahOffer: () => {},
      updateSeoSettings: () => {}, updateServices: () => {},
      addService: () => {}, deleteService: () => {},
      updateFooterContent: () => {}, updateContactCta: () => {},
    } as CmsContextType;
  }
  return ctx;
};
