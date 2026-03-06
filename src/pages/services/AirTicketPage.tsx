import { useLang } from "@/contexts/LanguageContext";
import { useWhatsAppLink } from "@/hooks/useWhatsAppLink";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plane } from "lucide-react";

const AirTicketPage = () => {
  const { t, lang } = useLang();
  const whatsappLink = useWhatsAppLink();

  const destinations = [
    { name: "Dubai", nameBn: "দুবাই", img: "https://cdn.pixabay.com/photo/2019/03/09/21/30/downtown-4045037_1280.jpg" },
    { name: "Malaysia", nameBn: "মালয়েশিয়া", img: "https://cdn.pixabay.com/photo/2016/11/14/02/28/petronas-twin-towers-1823492_1280.jpg" },
    { name: "Saudi Arabia", nameBn: "সৌদি আরব", img: "https://cdn.pixabay.com/photo/2019/03/11/15/30/kaaba-4049261_1280.jpg" },
    { name: "India", nameBn: "ভারত", img: "https://cdn.pixabay.com/photo/2020/01/16/18/52/taj-mahal-4770906_1280.jpg" },
    { name: "Thailand", nameBn: "থাইল্যান্ড", img: "https://cdn.pixabay.com/photo/2020/03/07/11/28/bangkok-4909930_1280.jpg" },
    { name: "Singapore", nameBn: "সিঙ্গাপুর", img: "https://cdn.pixabay.com/photo/2016/11/22/22/35/singapore-1850733_1280.jpg" },
  ];

  return (
    <div className="py-16">
      <div className="bg-navy-gradient text-primary-foreground py-16 -mt-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <Plane className="w-12 h-12 text-gold mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.services.air.title}</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">{t.services.air.desc}</p>
          <div className="mt-6 inline-block bg-destructive text-destructive-foreground px-4 py-2 rounded-full font-semibold">
            {t.offers.limitedTime}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, i) => (
            <Card key={i} className="overflow-hidden hover:shadow-xl transition-all group">
              <div className="h-40 overflow-hidden">
                <img src={dest.img} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
              <CardContent className="p-5 text-center">
                <h3 className="font-bold text-lg mb-3">{lang === "bn" ? dest.nameBn : dest.name}</h3>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gold-gradient text-secondary-foreground hover:opacity-90 font-semibold">{t.nav.bookNow}</Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AirTicketPage;
