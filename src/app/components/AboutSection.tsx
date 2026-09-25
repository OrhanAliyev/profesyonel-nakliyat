"use client";

import { ShieldCheck, Truck, Users, Trophy, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

export default function AboutSection() {
  return (
    <section id="kurumsal" className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* SOL TARAF: GÖRSEL VE KUTULAR */}
          <div className="lg:w-1/2 relative w-full">
            
            <Reveal direction="left">
              {/* ANA GÖRSEL KUTUSU */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 h-[450px] md:h-[550px] flex items-center justify-center group">
                
                {/* Arka Plan Fotoğrafı - KENDİ FOTOĞRAFINA GÜNCELLENDİ */}
                <img 
                  src="/images/hakkimizda1.jpg" 
                  alt="Varen Lojistik" 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
                
                {/* Okunabilirliği Artırmak İçin Hafif Karartma */}
                <div className="absolute inset-0 bg-brand-dark/30"></div> 
                
                {/* BEYAZ KART */}
                <div className="relative z-10 p-8 md:p-10 flex flex-col items-center text-center bg-white/90 backdrop-blur-md rounded-3xl border border-white/50 shadow-xl mx-6 max-w-[320px]">
                  <div className="bg-brand-accent p-4 rounded-full shadow-lg shadow-brand-accent/40 mb-5 text-white">
                    <Trophy className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-brand-dark mb-2">Sektörde Lider</h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">
                    Yılların getirdiği tecrübe, teknoloji ve sarsılmaz güvenle.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* KOYU LACİVERT KART: 15+ Yıllık Tecrübe */}
            <Reveal direction="up" delay={0.3}>
              <div className="absolute -bottom-8 -right-2 md:-right-8 bg-[#0f172a] text-white p-5 md:p-6 rounded-2xl shadow-2xl border-[4px] border-white z-20 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-4">
                  <span className="text-4xl md:text-5xl font-black text-brand-accent drop-shadow-md">15<span className="text-3xl">+</span></span>
                  <span className="text-xs md:text-sm font-bold leading-snug text-gray-200">
                    Yıllık<br/>Sektör<br/>Tecrübesi
                  </span>
                </div>
              </div>
            </Reveal>
            
          </div>

          {/* SAĞ TARAF: METİNLER VE İSTATİSTİKLER */}
          <div className="lg:w-1/2">
            
            <Reveal direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-brand-accent font-semibold text-sm mb-6 border border-orange-100">
                <ShieldCheck size={16} />
                Güvenilir Kurumsal Taşımacılık
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight mb-6 leading-tight">
                Eşyalarınızı Sadece Taşımıyor, <span className="text-brand-accent">Geleceğe Güvenle Ulaştırıyoruz.</span>
              </h2>
            </Reveal>
            
            <Reveal direction="up" delay={0.2}>
              <p className="text-gray-600 font-light leading-relaxed mb-10 text-lg">
                Kurulduğumuz günden bu yana, modern kapalı çelik kasa araç filomuz ve alanında uzman kadromuzla nakliyat sektörüne yeni bir standart getirdik. Amacımız taşınma stresini tamamen ortadan kaldırmak ve size sadece yeni evinizin keyfini çıkarmayı bırakmak.
              </p>
            </Reveal>

            {/* İstatistik Tablosu */}
            <Reveal direction="up" delay={0.3}>
              <div className="grid grid-cols-2 gap-8 mb-10 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-white p-2.5 rounded-lg text-brand-accent shadow-sm"><Users size={24} /></div>
                    <span className="text-3xl font-extrabold text-brand-dark">10k+</span>
                  </div>
                  <p className="text-gray-500 text-sm font-medium pl-14">Mutlu Aile & Kurum</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-white p-2.5 rounded-lg text-brand-accent shadow-sm"><Truck size={24} /></div>
                    <span className="text-3xl font-extrabold text-brand-dark">25+</span>
                  </div>
                  <p className="text-gray-500 text-sm font-medium pl-14">Özel Çelik Kasa Araç</p>
                </div>
              </div>
            </Reveal>

            {/* Check (Tik) İşaretli Özellikler */}
            <Reveal direction="right" delay={0.4}>
              <ul className="space-y-4 mb-10">
                {["Ücretsiz Ekspertiz ve Planlama Hizmeti", "Geniş Kapsamlı ve Gerçek Nakliyat Sigortası", "Tamamı Kendi Bünyemizdeki Uzman Kadro"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <div className="bg-green-100 p-1 rounded-full">
                      <CheckCircle2 className="text-green-600 w-5 h-5 shrink-0" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* BUTON WHATSAPP OLARAK GÜNCELLENDİ */}
            <Reveal direction="up" delay={0.5}>
              <a 
                href="https://wa.me/905421804660" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-dark hover:bg-gray-900 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
              >
                Hemen Fiyat Al
              </a>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}