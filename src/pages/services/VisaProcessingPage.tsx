import { useLang } from "@/contexts/LanguageContext";
import { useCms } from "@/contexts/CmsContext";
import { useWhatsAppLink } from "@/hooks/useWhatsAppLink";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileCheck } from "lucide-react";

const VisaProcessingPage = () => {
  const { t, lang } = useLang();
  const { visaRates } = useCms();
  const whatsappLink = useWhatsAppLink();

  return (
    <div className="py-16">
      <div className="bg-navy-gradient text-primary-foreground py-16 -mt-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <FileCheck className="w-12 h-12 text-gold mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t.visa.title}</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">{t.visa.subtitle}</p>
        </div>
      </div>
      <div className="container mx-auto px-4 max-w-4xl">
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
        <div className="text-center mt-8">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-gold-gradient text-secondary-foreground hover:opacity-90 font-bold h-14 px-8">
              {t.nav.bookNow}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default VisaProcessingPage;
