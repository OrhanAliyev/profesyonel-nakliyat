"use client";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  // WhatsApp mesajını URL formatına uygun hale getiriyoruz
  const phoneNumber = "905421804660";
  const message = "Merhaba, web sitenizi inceledim. Nakliyat hizmetleriniz hakkında bilgi ve fiyat almak istiyorum.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_16px_rgba(37,211,102,0.5)] hover:scale-110 hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] transition-all duration-300 group flex items-center justify-center animate-bounce-slow"
      aria-label="WhatsApp ile İletişime Geç"
    >
      <MessageCircle size={32} />
      
      {/* Üzerine gelince açılan küçük bilgi balonu */}
      <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-bold py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Hemen Teklif Alın
      </span>
    </a>
  );
}