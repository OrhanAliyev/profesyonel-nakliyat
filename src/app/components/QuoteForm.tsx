"use client";

import { useState } from "react";
import { Calculator, MapPin, Calendar, Phone, MessageCircle } from "lucide-react";

export default function QuoteForm() {
  // Form verilerini tutacağımız yapı
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    fromLocation: "",
    toLocation: "",
    itemType: "1+1 Ev Eşyası",
    date: ""
  });

  // Hata veren kısım burasıydı (Girdileri güncelleyen fonksiyon)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Gönder butonuna basılınca çalışacak WhatsApp yönlendirme fonksiyonu
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 

    // BURAYA KENDİ WHATSAPP NUMARANI YAZACAKSIN (Başında + veya 0 olmadan, 90 ile başlayarak)
    const whatsappNumber = "+90 542 180 46 60"; 

    // Yıldızlar kaldırıldı, WhatsApp'a temiz ve alt alta gidecek mesaj şablonu
    const message = `Yeni Fiyat Teklifi Talebi 🚚

Ad Soyad: ${formData.name}
Telefon: ${formData.phone}
Nereden: ${formData.fromLocation}
Nereye: ${formData.toLocation}
Eşya Durumu: ${formData.itemType}
Taşınma Tarihi: ${formData.date}

Merhaba, bu bilgiler doğrultusunda fiyat ve detaylar hakkında bilgi alabilir miyim?`;

    // Mesajı URL formatına çeviriyoruz ve WhatsApp linkini oluşturuyoruz
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Yeni sekmede WhatsApp'ı açıyoruz
    window.open(whatsappUrl, "_blank");
  };

  return (
    // id="iletisim" BURAYA EKLENDİ!
    <section id="iletisim" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-dark rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-800">
          
          {/* Sol Taraf - İkna Edici Metin Alanı */}
          <div className="lg:w-2/5 p-10 lg:p-14 bg-brand-dark flex flex-col justify-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
            
            <Calculator className="w-12 h-12 text-brand-accent mb-6 relative z-10" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight relative z-10">
              Hızlı Fiyat Teklifi Alın
            </h2>
            <p className="text-gray-400 font-light mb-8 leading-relaxed relative z-10">
              Taşınma planınızı bize iletin. Uzman ekibimiz eşyalarınızın durumuna ve mesafeye göre size en uygun, rekabetçi fiyatı anında WhatsApp üzerinden sunsun.
            </p>
            
            <div className="space-y-5 font-light text-gray-300 relative z-10">
              <div className="flex items-center gap-4">
                <MapPin className="text-brand-accent w-6 h-6" strokeWidth={1.5} /> 
                <span>Türkiye'nin Her Yerine</span>
              </div>
              <div className="flex items-center gap-4">
                <Calendar className="text-brand-accent w-6 h-6" strokeWidth={1.5} /> 
                <span>İstediğiniz Tarihte Taşıma</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-brand-accent w-6 h-6" strokeWidth={1.5} /> 
                <span>7/24 Kesintisiz İletişim</span>
              </div>
            </div>
          </div>

          {/* Sağ Taraf - Form Alanı */}
          <div className="lg:w-3/5 p-10 lg:p-14 bg-gray-50">
            <form className="space-y-6" onSubmit={handleSubmit}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Adınız Soyadınız</label>
                  <input required name="name" onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all" placeholder="Örn: Ali Yılmaz" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Telefon Numaranız</label>
                  <input required name="phone" onChange={handleChange} type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all" placeholder="05XX XXX XX XX" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nereden (İl / İlçe)</label>
                  <input required name="fromLocation" onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all" placeholder="Örn: Kadıköy, İstanbul" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nereye (İl / İlçe)</label>
                  <input required name="toLocation" onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all" placeholder="Örn: Çankaya, Ankara" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Eşya Durumu</label>
                  <select name="itemType" onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all bg-white text-gray-700">
                    <option>1+1 Ev Eşyası</option>
                    <option>2+1 Ev Eşyası</option>
                    <option>3+1 Ev Eşyası</option>
                    <option>4+1 ve Üzeri / Villa</option>
                    <option>Sadece Parça Eşya</option>
                    <option>Ofis / İşyeri Taşıma</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Planlanan Tarih</label>
                  <input required name="date" onChange={handleChange} type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all text-gray-600" />
                </div>
              </div>

              <button type="submit" className="w-full py-4 mt-4 bg-green-600 hover:bg-green-700 text-white font-bold uppercase tracking-wider rounded-lg shadow-lg transition-all text-lg flex justify-center items-center gap-3">
                <MessageCircle size={24} />
                WhatsApp'tan Teklif İste
              </button>
              
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}