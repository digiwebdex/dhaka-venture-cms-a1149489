import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import {
  SiteSettings, PageContent, VisaRate, Package, Booking,
  defaultSettings, defaultPageContent, defaultVisaRates, defaultPackages,
} from "@/data/defaultData";

interface CmsContextType {
  settings: SiteSettings;
  pageContent: PageContent;
  visaRates: VisaRate[];
  packages: Package[];
  bookings: Booking[];
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

  useEffect(() => { localStorage.setItem("cms_settings", JSON.stringify(settings)); }, [settings]);
  useEffect(() => { localStorage.setItem("cms_pageContent", JSON.stringify(pageContent)); }, [pageContent]);
  useEffect(() => { localStorage.setItem("cms_visaRates", JSON.stringify(visaRates)); }, [visaRates]);
  useEffect(() => { localStorage.setItem("cms_packages", JSON.stringify(packages)); }, [packages]);
  useEffect(() => { localStorage.setItem("cms_bookings", JSON.stringify(bookings)); }, [bookings]);

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

  return (
    <CmsContext.Provider value={{
      settings, pageContent, visaRates, packages, bookings,
      updateSettings, updatePageContent, updateVisaRates, updatePackages,
      addBooking, updateBooking, deleteBooking, addPackage, deletePackage,
      addVisaRate, deleteVisaRate,
    }}>
      {children}
    </CmsContext.Provider>
  );
};

export const useCms = () => {
  const ctx = useContext(CmsContext);
  if (!ctx) {
    // Return safe defaults so components don't crash during HMR or outside provider
    return {
      settings: defaultSettings,
      pageContent: defaultPageContent,
      visaRates: defaultVisaRates,
      packages: defaultPackages,
      bookings: [] as Booking[],
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
    } as CmsContextType;
  }
  return ctx;
};
