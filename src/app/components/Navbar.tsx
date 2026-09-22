"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneCall, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Sayfa kaydırıldığında sadece yüksekliği/gölgeyi değiştirecek
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 bg-brand-dark/95 backdrop-blur-md border-b border-gray-800 ${
        scrolled ? "py-2 shadow-xl" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <Link href="/" className="flex items-center gap-2 group mt-1">
            {/* VAREN LOJİSTİK LOGOSU GÜNCELLENDİ */}
            <span className="flex flex-col text-white tracking-tighter group-hover:scale-105 transition-transform">
              <span className="text-2xl font-extrabold leading-none tracking-wide">VAREN</span>
              <span className="text-[0.65rem] text-brand-accent font-bold tracking-[0.4em] uppercase mt-1">Lojistik</span>
            </span>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className={`text-sm font-medium transition-colors ${pathname === "/" ? "text-brand-accent" : "text-gray-300 hover:text-white"}`}>
              Ana Sayfa
            </Link>

            {/* Yeni Eklenen Kurumsal Linki */}
            <Link href="/kurumsal" className={`text-sm font-medium transition-colors ${pathname === "/kurumsal" ? "text-brand-accent" : "text-gray-300 hover:text-white"}`}>
              Kurumsal
            </Link>
            
            {/* Açılır Menü (Dropdown) - Hizmetlerimiz */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors py-2">
                Hizmetlerimiz <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              {/* Dropdown İçeriği */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-3 space-y-1">
                  <Link href="/hizmetler/evden-eve-nakliyat" className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand-accent rounded-lg transition-colors font-medium">Evden Eve Nakliyat</Link>
                  <Link href="/hizmetler/sehirler-arasi-tasima" className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand-accent rounded-lg transition-colors font-medium">Şehirler Arası Taşıma</Link>
                  <Link href="/hizmetler/asansorlu-nakliyat" className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand-accent rounded-lg transition-colors font-medium">Asansörlü Nakliyat</Link>
                  <Link href="/hizmetler/ofis-tasima" className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand-accent rounded-lg transition-colors font-medium">Ofis ve İş Yeri Taşıma</Link>
                  <Link href="/hizmetler/esya-depolama" className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand-accent rounded-lg transition-colors font-medium">Eşya Depolama</Link>
                  <Link href="/hizmetler/sigortali-tasimacilik" className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand-accent rounded-lg transition-colors font-medium">Sigortalı Taşımacılık</Link>
                </div>
              </div>
            </div>

            {/* AÇILIR MENÜ: SEKTÖREL ÇÖZÜMLER */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors py-2">
                Sektörel Çözümler <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              {/* Açılır Menü Linkleri (404 Hatası Çözülmüş Hali) */}
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left -translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link href="/sektorel/tekstil-lojistigi" className="block px-4 py-2.5 text-sm text-gray-600 hover:text-brand-accent hover:bg-orange-50/50 transition-colors">
                    Tekstil Lojistiği
                  </Link>
                  <Link href="/sektorel/otomotiv-yedek-parca" className="block px-4 py-2.5 text-sm text-gray-600 hover:text-brand-accent hover:bg-orange-50/50 transition-colors">
                    Otomotiv & Yedek Parça
                  </Link>
                  <Link href="/sektorel/medikal-lojistik" className="block px-4 py-2.5 text-sm text-gray-600 hover:text-brand-accent hover:bg-orange-50/50 transition-colors">
                    Medikal Lojistik
                  </Link>
                  <Link href="/sektorel/fuar-etkinlik-lojistigi" className="block px-4 py-2.5 text-sm text-gray-600 hover:text-brand-accent hover:bg-orange-50/50 transition-colors">
                    Fuar & Etkinlik Lojistiği
                  </Link>
                  <Link href="/sektorel/fabrika-tasimaciligi" className="block px-4 py-2.5 text-sm text-gray-600 hover:text-brand-accent hover:bg-orange-50/50 transition-colors">
                    Fabrika Taşımacılığı
                  </Link>
                </div>
              </div>
            </div>

            {/* İletişim Linki */}
            <Link href="/iletisim" className={`text-sm font-medium transition-colors ${pathname === "/iletisim" ? "text-brand-accent" : "text-gray-300 hover:text-white"}`}>
              İletişim
            </Link>
          </div>

          <div className="hidden md:flex items-center relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent to-orange-400 rounded blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <a 
              href="tel:+905421804660" 
              className="relative flex items-center gap-2 px-6 py-2.5 bg-brand-accent text-white text-sm font-bold rounded shadow-lg transition-all"
            >
              <PhoneCall size={18} className="animate-pulse" />
              <span>+90 542 180 46 60</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 hover:text-white">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Menü - YAPISI KORUNDU, YENİ SEKMELER EKLENDİ */}
      <div className={`md:hidden absolute w-full bg-brand-dark/95 backdrop-blur-xl border-t border-gray-800 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-4 py-6 space-y-1 h-full overflow-y-auto">
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/" className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg">Ana Sayfa</Link>
          
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/kurumsal" className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg">Kurumsal</Link>
          
          {/* Mobil İçin Hizmetler Başlığı */}
          <div className="px-4 py-2 mt-2 text-xs font-bold text-gray-500 uppercase tracking-wider">Hizmetlerimiz</div>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/hizmetler/evden-eve-nakliyat" className="block px-4 py-2.5 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg ml-2">Evden Eve Nakliyat</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/hizmetler/sehirler-arasi-tasima" className="block px-4 py-2.5 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg ml-2">Şehirler Arası Taşıma</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/hizmetler/asansorlu-nakliyat" className="block px-4 py-2.5 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg ml-2">Asansörlü Nakliyat</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/hizmetler/ofis-tasima" className="block px-4 py-2.5 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg ml-2">Ofis ve İş Yeri Taşıma</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/hizmetler/esya-depolama" className="block px-4 py-2.5 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg ml-2">Eşya Depolama</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/hizmetler/sigortali-tasimacilik" className="block px-4 py-2.5 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg ml-2">Sigortalı Taşımacılık</Link>
          
          {/* Mobil İçin Sektörel Çözümler Başlığı */}
          <div className="px-4 py-2 mt-4 text-xs font-bold text-brand-accent uppercase tracking-wider border-t border-gray-800 pt-4">Sektörel Çözümler</div>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/sektorler/tekstil-lojistigi" className="block px-4 py-2.5 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg ml-2">Tekstil Lojistiği</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/sektorler/otomotiv-lojistigi" className="block px-4 py-2.5 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg ml-2">Otomotiv & Yedek Parça</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/sektorler/medikal-lojistik" className="block px-4 py-2.5 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg ml-2">Medikal Lojistik</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/sektorler/fuar-lojistigi" className="block px-4 py-2.5 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg ml-2">Fuar & Etkinlik Lojistiği</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/sektorler/fabrika-tasimaciligi" className="block px-4 py-2.5 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg ml-2">Fabrika Taşımacılığı</Link>

          <div className="mt-4 border-t border-gray-800 pt-4">
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/iletisim" className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg">İletişim</Link>
            <a href="tel:+905421804660" className="mt-2 flex items-center justify-center gap-2 px-4 py-3 bg-brand-accent text-white text-sm font-bold rounded-lg shadow-lg">
              <PhoneCall size={18} /> +90 542 180 46 60
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}