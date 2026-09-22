"use client";

import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Iletisim() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "+90 542 180 46 60";
    const message = `Yeni İletişim Formu Mesajı 📩\n\nAd Soyad: ${formData.name}\nTelefon: ${formData.phone}\nKonu: ${formData.subject}\nMesaj: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-brand-light min-h-screen">
      
      {/* Üst Banner (Hero) */}
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-brand-dark pt-16">
        <div className="absolute inset-0 bg-brand-dark/90 z-10"></div>
        <div className="relative z-20 text-center px-4">
          <MessageCircle className="w-16 h-16 text-brand-accent mx-auto mb-4 opacity-80" strokeWidth={1} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Bize Ulaşın
          </h1>
          <div className="w-16 h-1 bg-brand-accent mx-auto mb-4"></div>
          <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
            Taşınma planlaması, ücretsiz ekspertiz ve her türlü sorunuz için 7/24 buradayız.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Sol Taraf - İletişim Bilgileri ve Harita */}
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-6">İletişim Bilgilerimiz</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-10">
                Ofisimizi ziyaret edebilir, telefonla arayabilir veya e-posta gönderebilirsiniz. Operasyon merkezimiz haftanın her günü hizmet vermektedir.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 text-brand-accent shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-lg">Merkez Ofis</h4>
                    <p className="text-gray-600 font-light mt-1">Atatürk Mah. Lojistik Cad. No:12<br/>Ataşehir / İstanbul</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 text-brand-accent shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-lg">Telefon</h4>
                    <p className="text-gray-600 font-light mt-1">+90 542 180 46 60</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 text-brand-accent shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-lg">E-Posta</h4>
                    <p className="text-gray-600 font-light mt-1">info@profesyonelnakliyat.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 text-brand-accent shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark text-lg">Çalışma Saatleri</h4>
                    <p className="text-gray-600 font-light mt-1">Pazartesi - Pazar: 7/24 Kesintisiz Hizmet</p>
                  </div>
                </div>
              </div>

              {/* Google Maps Harita */}
              <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.652150918731!2d29.11710927649557!3d40.98904662061413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac65dd6d2e679%3A0x6d90d794dc28db64!2zQXRhxZ9laGlyL8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Sağ Taraf - İletişim Formu */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-dark mb-6">Mesaj Gönderin</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Adınız Soyadınız</label>
                  <input required name="name" onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all" placeholder="Adınız Soyadınız" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Telefon Numaranız</label>
                  <input required name="phone" onChange={handleChange} type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all" placeholder="05XX XXX XX XX" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Konu</label>
                  <input required name="subject" onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all" placeholder="Hangi konuda bilgi almak istiyorsunuz?" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Mesajınız</label>
                  <textarea required name="message" onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all resize-none" placeholder="Lütfen mesajınızı buraya yazın..."></textarea>
                </div>

                <button type="submit" className="w-full py-4 mt-2 bg-brand-dark hover:bg-gray-900 text-white font-bold uppercase tracking-wider rounded-lg shadow-lg transition-all text-lg flex justify-center items-center gap-3">
                  <Send size={20} />
                  Mesajı Gönder
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}