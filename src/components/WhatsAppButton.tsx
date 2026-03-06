import { useCms } from "@/contexts/CmsContext";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const { settings } = useCms();
  const waNumber = settings.whatsapp.replace(/[^0-9]/g, "");

  return (
    <a
      href={`https://wa.me/${waNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;
