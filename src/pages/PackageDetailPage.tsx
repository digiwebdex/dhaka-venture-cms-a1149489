import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";
import { useCms } from "@/contexts/CmsContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Clock } from "lucide-react";
import BookingFormDialog from "@/components/BookingFormDialog";

const Row = ({ label, value }: { label: string; value?: string }) =>
  value ? (
    <div className="grid grid-cols-3 gap-4 border border-border rounded-md overflow-hidden">
      <div className="bg-muted px-4 py-2 font-semibold text-foreground">{label}</div>
      <div className="col-span-2 px-4 py-2">{value}</div>
    </div>
  ) : null;

const toEmbed = (url: string) => {
  // YouTube: convert watch?v= or youtu.be to /embed/
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/);
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;
  return url;
};

const PackageDetailPage = () => {
  const { id } = useParams();
  const { lang } = useLang();
  const { packages } = useCms();
  const isBn = lang === "bn";
  const pkg = packages.find((p) => p.id === id);
  const [bookingOpen, setBookingOpen] = useState(false);

  if (!pkg) return <Navigate to="/packages" replace />;

  const title = isBn ? pkg.titleBn : pkg.title;
  const desc = isBn ? pkg.descriptionBn : pkg.description;
  const dest = isBn ? pkg.destinationBn : pkg.destination;
  const dur = isBn ? pkg.durationBn : pkg.duration;
  const price = isBn ? pkg.priceBn : pkg.price;
  const tourDetails = isBn ? pkg.tourDetailsBn : pkg.tourDetails;

  const labels = isBn
    ? { time: "সময়", transport: "পরিবহন", hotel: "হোটেল", food: "খাবার", sightSeen: "দর্শনীয় স্থান", others: "অন্যান্য", tourDetails: "ট্যুর বিবরণ", gallery: "গ্যালারি", videos: "ভিডিও", book: "বুকিং করুন", back: "সব প্যাকেজ" }
    : { time: "Time", transport: "Transport", hotel: "Hotel", food: "Food", sightSeen: "Sight Seen", others: "Others", tourDetails: "Tour Details", gallery: "Gallery", videos: "Videos", book: "Book Now", back: "All Packages" };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <Link to="/packages" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-4">
          <ArrowLeft className="w-4 h-4" /> {labels.back}
        </Link>

        <Card className="overflow-hidden mb-8">
          <div className="h-72 md:h-96 overflow-hidden">
            <img src={pkg.image} alt={title} className="w-full h-full object-cover" />
          </div>
          <CardContent className="p-6">
            <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded mb-2 capitalize">
              {pkg.category}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-gold" /> {dest}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-gold" /> {dur}</span>
            </div>
            <p className="text-muted-foreground mb-4">{desc}</p>
            <div className="flex items-center justify-between flex-wrap gap-3">
              <span className="text-2xl font-extrabold text-gold">{price}</span>
              <Button variant="gold" size="lg" onClick={() => setBookingOpen(true)}>
                {labels.book}
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-8">
          <Row label={labels.time} value={isBn ? pkg.timeBn : pkg.time} />
          <Row label={labels.transport} value={isBn ? pkg.transportBn : pkg.transport} />
          <Row label={labels.hotel} value={isBn ? pkg.hotelBn : pkg.hotel} />
          <Row label={labels.food} value={isBn ? pkg.foodBn : pkg.food} />
          <Row label={labels.sightSeen} value={isBn ? pkg.sightSeenBn : pkg.sightSeen} />
          <Row label={labels.others} value={isBn ? pkg.othersBn : pkg.others} />
        </div>

        {tourDetails && (
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="font-bold text-xl mb-3">{labels.tourDetails}</h2>
              <p className="text-muted-foreground whitespace-pre-line leading-relaxed">{tourDetails}</p>
            </CardContent>
          </Card>
        )}

        {pkg.gallery && pkg.gallery.length > 0 && (
          <div className="mb-8">
            <h2 className="font-bold text-xl mb-3">{labels.gallery}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {pkg.gallery.map((src, i) => (
                <img key={i} src={src} alt={`${title} ${i + 1}`} className="w-full h-48 object-cover rounded-lg" loading="lazy" />
              ))}
            </div>
          </div>
        )}

        {pkg.videos && pkg.videos.length > 0 && (
          <div className="mb-8">
            <h2 className="font-bold text-xl mb-3">{labels.videos}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pkg.videos.map((url, i) => (
                <div key={i} className="aspect-video rounded-lg overflow-hidden bg-muted">
                  <iframe
                    src={toEmbed(url)}
                    title={`Video ${i + 1}`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center">
          <Button variant="gold" size="lg" onClick={() => setBookingOpen(true)}>
            {labels.book}
          </Button>
        </div>

        <BookingFormDialog open={bookingOpen} onOpenChange={setBookingOpen} packageName={title} />
      </div>
    </div>
  );
};

export default PackageDetailPage;
