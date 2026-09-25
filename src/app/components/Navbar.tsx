"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneCall, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const [isHizmetlerOpen, setIsHizmetlerOpen] = useState(false);
  const [isSektorelOpen, setIsSektorelOpen] = useState(false);

  const [isDesktopHizmetlerOpen, setIsDesktopHizmetlerOpen] = useState(false);
  const [isDesktopSektorelOpen, setIsDesktopSektorelOpen] = useState(false);
  
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-brand-dark/95 backdrop-blur-md border-b border-gray-800 ${scrolled ? "py-2 shadow-xl" : "py-4"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* YENİLENEN V LOGOLU KISIM */}
          <Link href="/" className="flex items-center gap-3 group mt-1">
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

          {/* DESKTOP (BİLGİSAYAR) MENÜSÜ */}
          <div className="hidden md:flex space-x-8 items-center h-full">
            <Link href="/" className={`text-sm font-medium transition-colors ${pathname === "/" ? "text-brand-accent" : "text-gray-300 hover:text-white"}`}>Ana Sayfa</Link>
            <Link href="/kurumsal" className={`text-sm font-medium transition-colors ${pathname === "/kurumsal" ? "text-brand-accent" : "text-gray-300 hover:text-white"}`}>Kurumsal</Link>
            
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setIsDesktopHizmetlerOpen(true)}
              onMouseLeave={() => setIsDesktopHizmetlerOpen(false)}
            >
              <button 
                onClick={() => setIsDesktopHizmetlerOpen(!isDesktopHizmetlerOpen)}
                className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors h-full focus:outline-none"
              >
                Hizmetlerimiz <ChevronDown size={14} className={`transition-transform duration-300 ${isDesktopHizmetlerOpen ? "rotate-180" : ""}`} />
              </button>
              
              <div className={`absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 ${isDesktopHizmetlerOpen ? "opacity-100 visible translate-y-2" : "opacity-0 invisible translate-y-4"}`}>
                <div className="p-3 space-y-1">
                  <Link onClick={() => setIsDesktopHizmetlerOpen(false)} href="/hizmetler/evden-eve-nakliyat" className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand-accent rounded-lg transition-colors font-medium">Evden Eve Nakliyat</Link>
                  <Link onClick={() => setIsDesktopHizmetlerOpen(false)} href="/hizmetler/sehirler-arasi-tasima" className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand-accent rounded-lg transition-colors font-medium">Şehirler Arası Taşıma</Link>
                  <Link onClick={() => setIsDesktopHizmetlerOpen(false)} href="/hizmetler/asansorlu-nakliyat" className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand-accent rounded-lg transition-colors font-medium">Asansörlü Nakliyat</Link>
                  <Link onClick={() => setIsDesktopHizmetlerOpen(false)} href="/hizmetler/ofis-tasima" className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand-accent rounded-lg transition-colors font-medium">Ofis ve İş Yeri Taşıma</Link>
                  <Link onClick={() => setIsDesktopHizmetlerOpen(false)} href="/hizmetler/esya-depolama" className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand-accent rounded-lg transition-colors font-medium">Eşya Depolama</Link>
                  <Link onClick={() => setIsDesktopHizmetlerOpen(false)} href="/hizmetler/sigortali-tasimacilik" className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand-accent rounded-lg transition-colors font-medium">Sigortalı Taşımacılık</Link>
                </div>
              </div>
            </div>

            {/* SEKTÖREL ÇÖZÜMLER */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setIsDesktopSektorelOpen(true)}
              onMouseLeave={() => setIsDesktopSektorelOpen(false)}
            >
              <button 
                onClick={() => setIsDesktopSektorelOpen(!isDesktopSektorelOpen)}
                className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors h-full focus:outline-none"
              >
                Sektörel Çözümler <ChevronDown size={14} className={`transition-transform duration-300 ${isDesktopSektorelOpen ? "rotate-180" : ""}`} />
              </button>
              
              <div className={`absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 transition-all duration-300 origin-top-left ${isDesktopSektorelOpen ? "opacity-100 visible translate-y-2" : "opacity-0 invisible translate-y-4"}`}>
                <div className="py-2">
                  <Link onClick={() => setIsDesktopSektorelOpen(false)} href="/sektorel/tekstil-lojistigi" className="block px-4 py-2.5 text-sm text-gray-600 hover:text-brand-accent hover:bg-orange-50/50 transition-colors">Tekstil Lojistiği</Link>
                  <Link onClick={() => setIsDesktopSektorelOpen(false)} href="/sektorel/otomotiv-yedek-parca" className="block px-4 py-2.5 text-sm text-gray-600 hover:text-brand-accent hover:bg-orange-50/50 transition-colors">Otomotiv & Yedek Parça</Link>
                  <Link onClick={() => setIsDesktopSektorelOpen(false)} href="/sektorel/medikal-lojistik" className="block px-4 py-2.5 text-sm text-gray-600 hover:text-brand-accent hover:bg-orange-50/50 transition-colors">Medikal Lojistik</Link>
                  <Link onClick={() => setIsDesktopSektorelOpen(false)} href="/sektorel/fuar-etkinlik-lojistigi" className="block px-4 py-2.5 text-sm text-gray-600 hover:text-brand-accent hover:bg-orange-50/50 transition-colors">Fuar & Etkinlik Lojistiği</Link>
                  <Link onClick={() => setIsDesktopSektorelOpen(false)} href="/sektorel/fabrika-tasimaciligi" className="block px-4 py-2.5 text-sm text-gray-600 hover:text-brand-accent hover:bg-orange-50/50 transition-colors">Fabrika Taşımacılığı</Link>
                </div>
              </div>
            </div>

            <Link href="/iletisim" className={`text-sm font-medium transition-colors ${pathname === "/iletisim" ? "text-brand-accent" : "text-gray-300 hover:text-white"}`}>İletişim</Link>
          </div>

          <div className="hidden md:flex items-center relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent to-orange-400 rounded blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <a href="tel:+905421804660" className="relative flex items-center gap-2 px-6 py-2.5 bg-brand-accent text-white text-sm font-bold rounded shadow-lg transition-all">
              <PhoneCall size={18} className="animate-pulse" />
              <span>+90 542 180 46 60</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 hover:text-white p-2">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBİL (TELEFON) MENÜSÜ */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute w-full bg-brand-dark/95 backdrop-blur-xl border-t border-gray-800 shadow-2xl h-[calc(100vh-80px)] overflow-y-auto pb-20">
          <div className="px-4 py-6 space-y-3">
            
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/" className="block px-4 py-3 text-sm font-medium text-gray-200 hover:text-white hover:bg-gray-800/50 rounded-xl transition-colors">Ana Sayfa</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/kurumsal" className="block px-4 py-3 text-sm font-medium text-gray-200 hover:text-white hover:bg-gray-800/50 rounded-xl transition-colors">Kurumsal</Link>
            
            <div className="bg-gray-800/40 rounded-xl overflow-hidden border border-gray-700/50">
              <button 
                onClick={(e) => { e.preventDefault(); setIsHizmetlerOpen(!isHizmetlerOpen); }} 
                className="w-full flex items-center justify-between px-4 py-4 text-sm font-bold text-gray-300 hover:text-white transition-colors"
              >
                HİZMETLERİMİZ
                <ChevronDown size={18} className={`text-brand-accent transition-transform duration-300 ${isHizmetlerOpen ? "rotate-180" : ""}`} />
              </button>
              
              {isHizmetlerOpen && (
                <div className="px-3 pb-3 space-y-1">
                  <Link onClick={() => setIsMobileMenuOpen(false)} href="/hizmetler/evden-eve-nakliyat" className="block px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg">Evden Eve Nakliyat</Link>
                  <Link onClick={() => setIsMobileMenuOpen(false)} href="/hizmetler/sehirler-arasi-tasima" className="block px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg">Şehirler Arası Taşıma</Link>
                  <Link onClick={() => setIsMobileMenuOpen(false)} href="/hizmetler/asansorlu-nakliyat" className="block px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg">Asansörlü Nakliyat</Link>
                  <Link onClick={() => setIsMobileMenuOpen(false)} href="/hizmetler/ofis-tasima" className="block px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg">Ofis ve İş Yeri Taşıma</Link>
                  <Link onClick={() => setIsMobileMenuOpen(false)} href="/hizmetler/esya-depolama" className="block px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg">Eşya Depolama</Link>
                  <Link onClick={() => setIsMobileMenuOpen(false)} href="/hizmetler/sigortali-tasimacilik" className="block px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg">Sigortalı Taşımacılık</Link>
                </div>
              )}
            </div>
            
            <div className="bg-gray-800/40 rounded-xl overflow-hidden border border-gray-700/50">
              <button 
                onClick={(e) => { e.preventDefault(); setIsSektorelOpen(!isSektorelOpen); }} 
                className="w-full flex items-center justify-between px-4 py-4 text-sm font-bold text-gray-300 hover:text-white transition-colors"
              >
                SEKTÖREL ÇÖZÜMLER
                <ChevronDown size={18} className={`text-brand-accent transition-transform duration-300 ${isSektorelOpen ? "rotate-180" : ""}`} />
              </button>
              
              {isSektorelOpen && (
                <div className="px-3 pb-3 space-y-1">
                  <Link onClick={() => setIsMobileMenuOpen(false)} href="/sektorel/tekstil-lojistigi" className="block px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg">Tekstil Lojistiği</Link>
                  <Link onClick={() => setIsMobileMenuOpen(false)} href="/sektorel/otomotiv-yedek-parca" className="block px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg">Otomotiv & Yedek Parça</Link>
                  <Link onClick={() => setIsMobileMenuOpen(false)} href="/sektorel/medikal-lojistik" className="block px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg">Medikal Lojistik</Link>
                  <Link onClick={() => setIsMobileMenuOpen(false)} href="/sektorel/fuar-etkinlik-lojistigi" className="block px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg">Fuar & Etkinlik Lojistiği</Link>
                  <Link onClick={() => setIsMobileMenuOpen(false)} href="/sektorel/fabrika-tasimaciligi" className="block px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg">Fabrika Taşımacılığı</Link>
                </div>
              )}
            </div>

            <Link onClick={() => setIsMobileMenuOpen(false)} href="/iletisim" className="block px-4 py-3 text-sm font-medium text-gray-200 hover:text-white hover:bg-gray-800/50 rounded-xl transition-colors">İletişim</Link>
            
            <div className="pt-2">
              <a href="tel:+905421804660" className="flex items-center justify-center gap-2 px-4 py-3.5 bg-brand-accent hover:bg-orange-600 transition-colors text-white text-sm font-bold rounded-xl shadow-lg">
                <PhoneCall size={18} /> +90 542 180 46 60
              </a>
            </div>
            
          </div>
        </div>
      )}
    </nav>
  );
}