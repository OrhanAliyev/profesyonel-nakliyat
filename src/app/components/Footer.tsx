import Link from "next/link";
import { MapPin, Phone, Mail, ChevronRight, ShieldCheck, Award } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark pt-20 pb-10 border-t border-gray-800 relative overflow-hidden">
      {/* Arka Plan Dekoratif Işık */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            
            {/* YENİ VAREN LOJİSTİK LOGOSU (NAVBAR İLE AYNI "V" TASARIMI) */}
            <Link href="/" className="flex items-center gap-3 group mb-2 w-fit">
              {/* Şık 'V' İkonu */}
              <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-brand-accent to-orange-500 rounded-xl shadow-[0_0_15px_rgba(255,107,0,0.4)] group-hover:shadow-[0_0_25px_rgba(255,107,0,0.6)] transition-all duration-300 transform group-hover:-rotate-3 group-hover:scale-105">
                <span className="text-white font-black text-2xl tracking-tighter">V</span>
                {/* Sağ altta minik profesyonel detay */}
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-brand-dark"></div>
              </div>
              
              {/* Varen Lojistik Yazısı */}
              <span className="flex flex-col text-white tracking-tighter transition-transform duration-300">
                <span className="text-2xl font-extrabold leading-none tracking-wide group-hover:text-gray-100">VAREN</span>
                <span className="text-[0.65rem] text-brand-accent font-bold tracking-[0.4em] uppercase mt-1">Lojistik</span>
              </span>
            </Link>
            
            <p className="text-gray-400 font-light leading-relaxed text-sm">
              Yılların tecrübesi, modern araç filomuz ve uzman kadromuzla eşyalarınızı değil, geleceğinizi taşıyoruz. %100 hasarsızlık garantisi.
            </p>
            
            {/* Güven Rozetleri */}
            <div className="flex gap-4 pt-4">
              <div className="flex items-center gap-2 text-brand-accent bg-gray-900 px-3 py-1.5 rounded-lg border border-gray-800">
                <ShieldCheck size={16} /> <span className="text-xs font-semibold text-white">100% Sigortalı</span>
              </div>
              <div className="flex items-center gap-2 text-brand-accent bg-gray-900 px-3 py-1.5 rounded-lg border border-gray-800">
                <Award size={16} /> <span className="text-xs font-semibold text-white">K3 Yetki Belgeli</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Hızlı Linkler</h3>
            <ul className="space-y-4">
              {/* LİNKLER ANA SAYFA BÖLÜMLERİNE YÖNLENDİRİLDİ */}
              <li>
                <Link href="/#hakkimizda" className="text-gray-400 hover:text-brand-accent transition-all hover:translate-x-1 inline-flex items-center gap-2 text-sm font-light">
                  <ChevronRight size={14} className="text-gray-600" /> Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/#galeri" className="text-gray-400 hover:text-brand-accent transition-all hover:translate-x-1 inline-flex items-center gap-2 text-sm font-light">
                  <ChevronRight size={14} className="text-gray-600" /> Araç Filomuz
                </Link>
              </li>
              <li>
                <Link href="/#yorumlar" className="text-gray-400 hover:text-brand-accent transition-all hover:translate-x-1 inline-flex items-center gap-2 text-sm font-light">
                  <ChevronRight size={14} className="text-gray-600" /> Müşteri Yorumları
                </Link>
              </li>
              <li>
                <Link href="/#sss" className="text-gray-400 hover:text-brand-accent transition-all hover:translate-x-1 inline-flex items-center gap-2 text-sm font-light">
                  <ChevronRight size={14} className="text-gray-600" /> Sıkça Sorulan Sorular
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Hizmetlerimiz</h3>
            <ul className="space-y-4">
              {/* LİNKLER 404 VERMEMESİ İÇİN HİZMETLERİMİZ BÖLÜMÜNE YÖNLENDİRİLDİ */}
              <li>
                <Link href="/#hizmetlerimiz" className="text-gray-400 hover:text-brand-accent transition-all hover:translate-x-1 inline-flex items-center gap-2 text-sm font-light">
                  <ChevronRight size={14} className="text-gray-600" /> Evden Eve Nakliyat
                </Link>
              </li>
              <li>
                <Link href="/#hizmetlerimiz" className="text-gray-400 hover:text-brand-accent transition-all hover:translate-x-1 inline-flex items-center gap-2 text-sm font-light">
                  <ChevronRight size={14} className="text-gray-600" /> Şehirler Arası Taşıma
                </Link>
              </li>
              <li>
                <Link href="/#hizmetlerimiz" className="text-gray-400 hover:text-brand-accent transition-all hover:translate-x-1 inline-flex items-center gap-2 text-sm font-light">
                  <ChevronRight size={14} className="text-gray-600" /> Asansörlü Taşımacılık
                </Link>
              </li>
              <li>
                <Link href="/#hizmetlerimiz" className="text-gray-400 hover:text-brand-accent transition-all hover:translate-x-1 inline-flex items-center gap-2 text-sm font-light">
                  <ChevronRight size={14} className="text-gray-600" /> Ofis ve İşyeri Taşıma
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">İletişim</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-gray-400 text-sm font-light hover:text-white transition-colors cursor-default">
                <MapPin className="text-brand-accent shrink-0 mt-0.5 bg-gray-900 p-1.5 rounded-md h-8 w-8" />
                <span><br/> İstanbul</span>
              </li>
              
              <li className="flex items-center gap-4 text-gray-400 text-sm font-light">
                <Phone className="text-brand-accent shrink-0 bg-gray-900 p-1.5 rounded-md h-8 w-8" />
                <a href="tel:+905421804660" className="hover:text-brand-accent transition-colors">+90 542 180 46 60</a>
              </li>
              
              {/* E-POSTA VAREN LOJİSTİK OLARAK GÜNCELLENDİ */}
              <li className="flex items-center gap-4 text-gray-400 text-sm font-light">
                <Mail className="text-brand-accent shrink-0 bg-gray-900 p-1.5 rounded-md h-8 w-8" />
                <a href="mailto:destek@varenlojistik.com" className="hover:text-brand-accent transition-colors">destek@varenlojistik.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-light">
            © {new Date().getFullYear()} Varen Lojistik Tüm Hakları Saklıdır.
          </p>
          <div className="flex gap-4 text-sm font-light">
            <Link href="/" className="text-gray-500 hover:text-white transition-colors">Gizlilik Politikası</Link>
            <span className="text-gray-700">|</span>
            <Link href="/" className="text-gray-500 hover:text-white transition-colors">Kullanım Şartları</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}