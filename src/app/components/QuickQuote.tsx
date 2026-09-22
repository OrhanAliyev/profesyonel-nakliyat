"use client";

import { MapPin, ArrowRight, Building2 } from "lucide-react";
import { useState } from "react";

export default function QuickQuote() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // WhatsApp'a hazır mesajla yönlendirme
    const message = `Merhaba Varen Lojistik, ${from} ile ${to} rotası arasında ${service} hizmeti için hızlı fiyat teklifi almak istiyorum.`;
    window.open(`https://wa.me/905421804660?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 md:-mt-12 mb-12">
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 p-5 md:p-8">
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-end">
          
          {/* Nereden */}
          <div className="w-full md:w-1/4">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Çıkış Noktası</label>
            <div className="relative group">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-accent transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="İl veya İlçe (Örn: Kadıköy)" 
                required 
                value={from} 
                onChange={(e) => setFrom(e.target.value)} 
                className="w-full pl-11 pr-4 py-3.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-accent/50 focus:bg-white outline-none transition-all text-sm font-medium text-brand-dark placeholder-gray-400" 
              />
            </div>
          </div>

          {/* Nereye */}
          <div className="w-full md:w-1/4">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Varış Noktası</label>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-dark" size={20} />
              <input 
                type="text" 
                placeholder="İl veya İlçe (Örn: Ankara)" 
                required 
                value={to} 
                onChange={(e) => setTo(e.target.value)} 
                className="w-full pl-11 pr-4 py-3.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-dark/50 focus:bg-white outline-none transition-all text-sm font-medium text-brand-dark placeholder-gray-400" 
              />
            </div>
          </div>

          {/* Hizmet Tipi */}
          <div className="w-full md:w-1/4">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Hizmet Türü</label>
            <div className="relative">
              <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <select 
                required 
                value={service} 
                onChange={(e) => setService(e.target.value)} 
                className="w-full pl-11 pr-4 py-3.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-accent/50 focus:bg-white outline-none transition-all text-sm font-medium text-brand-dark appearance-none cursor-pointer"
              >
                <option value="" disabled>Seçiniz...</option>
                <option value="Evden Eve Nakliyat">Evden Eve Nakliyat</option>
                <option value="Şehirler Arası Taşıma">Şehirler Arası Taşıma</option>
                <option value="Kurumsal Ofis Taşıma">Kurumsal / Ofis Taşıma</option>
                <option value="Parça Eşya (Parsiyel)">Parça Eşya (Parsiyel)</option>
              </select>
            </div>
          </div>

          {/* Buton */}
          <div className="w-full md:w-1/4 mt-4 md:mt-0">
            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-white py-3.5 px-4 rounded-xl font-bold transition-all shadow-lg shadow-orange-500/30 hover:-translate-y-1 text-sm md:text-base">
              Fiyat Hesapla <ArrowRight size={18} />
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
}