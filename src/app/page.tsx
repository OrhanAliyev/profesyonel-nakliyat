"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Map, Box, Zap, ShieldAlert, Ship, PlaneTakeoff, CheckCircle2, ChevronDown, ClipboardCheck, PackageOpen, TruckIcon, Home as HomeIcon, Star, Globe, Users, Package, Phone, Camera, Maximize2, X } from "lucide-react";
import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import Reveal from "./components/Reveal";
import Counter from "./components/Counter";
import QuickQuote from "./components/QuickQuote";

const heroImages = [
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1920&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1920&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1920&auto=format&fit=crop"
];

const galleryImages = [
  "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611514468491-c529e71b56fb?q=80&w=1200&auto=format&fit=crop",
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-brand-accent selection:text-white bg-[#F8F9FA]">
      
      {/* SOL ALT SABİT TELEFON İKONU */}
      <a 
        href="tel:+905421804660" 
        className="fixed bottom-6 left-6 z-50 bg-[#1e3a8a] text-white p-3.5 md:p-4 rounded-full shadow-[0_4px_20px_rgba(30,58,138,0.5)] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        title="Hemen Arayın"
      >
        <span className="absolute inset-0 rounded-full border-2 border-[#1e3a8a] animate-ping opacity-75"></span>
        <Phone size={28} className="relative z-10 group-hover:rotate-12 transition-transform" />
      </a>

      {/* GARANTİLİ ÇALIŞAN ANİMASYON VE TASARIM KODLARI */}
      <style dangerouslySetInnerHTML={{__html: `
        .tech-grid-light {
          background-image: linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .tech-grid-dark {
          background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        @keyframes bounceTruck {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-truck-bounce {
          animation: bounceTruck 1.2s ease-in-out infinite;
        }
        @keyframes scrollRoad {
          0% { background-position: 120px 0; }
          100% { background-position: 0 0; }
        }
        .animate-road-scroll {
          animation: scrollRoad 0.4s linear infinite;
        }
        @keyframes route-flow {
          0% { left: -20%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        .animate-route {
          position: absolute;
          top: 0;
          height: 100%;
          width: 20%;
          background: linear-gradient(90deg, transparent, #FF6B00, transparent);
          animation: route-flow 3s linear infinite;
          box-shadow: 0 0 20px #FF6B00;
        }
      `}} />

      {/* TAM EKRAN HERO BÖLÜMÜ */}
      <section className="relative w-full h-[100svh] md:h-[85vh] min-h-[700px] overflow-hidden bg-brand-dark flex flex-col justify-center">
        {heroImages.map((img, index) => (
          <img 
            key={index}
            src={img}
            alt={`Slider ${index}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"} transform scale-105`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 md:via-brand-dark/50 to-transparent"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 md:pb-0 text-center md:text-left">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-3 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-white/10 text-white font-semibold text-xs md:text-sm mb-4 md:mb-6 border border-white/20 backdrop-blur-md shadow-2xl">
              <span className="relative flex h-2 w-2 md:h-3 md:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-brand-accent"></span>
              </span>
              Türkiye'nin Dört Bir Yanına Kurumsal Lojistik
            </div>
          </Reveal>
          
          <Reveal direction="up" delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-4 md:mb-6 leading-tight drop-shadow-2xl max-w-4xl mx-auto md:mx-0">
              Yükünüz Bize, <br className="hidden md:block" />
              <span className="text-brand-accent">Zamanınız Size Kalsın.</span>
            </h1>
          </Reveal>
          
          <Reveal direction="up" delay={0.4}>
            <p className="text-sm md:text-xl text-gray-200 font-light max-w-2xl mb-8 md:mb-10 leading-relaxed drop-shadow-md mx-auto md:mx-0">
              Komple evden eve nakliyattan, gümrük sevkiyatlarına ve ekspres ticari yük taşımacılığına kadar tüm lojistik ihtiyaçlarınızda <strong className="text-white">%100 sigorta garantisiyle</strong> yanınızdayız.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
              <Link href="/iletisim" className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-brand-accent hover:bg-white hover:text-brand-dark text-white font-bold rounded-xl transition-all shadow-[0_0_30px_rgba(255,107,0,0.5)] text-base md:text-lg hover:-translate-y-1 w-full sm:w-auto">
                Hızlı Fiyat Al <ArrowRight size={18} />
              </Link>
              <Link href="/kurumsal" className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white/10 border border-white/30 hover:bg-white hover:text-brand-dark backdrop-blur-md text-white font-bold rounded-xl transition-all text-base md:text-lg hover:-translate-y-1 w-full sm:w-auto">
                Filomuzu İnceleyin
              </Link>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.8}>
            <div className="flex justify-center md:justify-start gap-3 mt-8 md:mt-12">
              {heroImages.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-500 ease-out ${idx === currentSlide ? "w-10 bg-brand-accent" : "w-2 bg-white/40 hover:bg-white"}`}
                  aria-label={`Slayt ${idx + 1}'e git`}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* HIZLI TEKLİF */}
      <div className="relative z-30 max-w-6xl mx-auto px-4 w-full -mt-24 md:-mt-20 mb-10">
        <Reveal direction="up" delay={0.2}>
          <div className="bg-white rounded-[2rem] shadow-2xl p-2 md:p-3 border border-gray-100">
            <QuickQuote />
          </div>
        </Reveal>
      </div>

      {/* HAKKIMIZDA BÖLÜMÜ */}
      <div className="tech-grid-light relative py-10">
        <AboutSection />
      </div>

      {/* İSTATİSTİK BÖLÜMÜ ("Her Gün" + %100 GERÇEKÇİ SVG KAMYON) */}
      <section className="pt-20 pb-0 bg-gradient-to-b from-white to-[#F0F4F8] relative overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Reveal direction="up">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#2a2a4a] tracking-tight mb-16 lowercase">her gün</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
            <Reveal direction="up" delay={0.1}>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-brand-accent mb-4 shadow-sm border border-orange-100"><Package size={32} /></div>
                <div className="text-3xl md:text-4xl font-extrabold mb-1 text-[#2a2a4a] flex items-center justify-center"><Counter end={1000} /> <span className="ml-2 text-2xl uppercase">Ton</span></div>
                <p className="text-gray-500 text-sm md:text-base font-bold uppercase tracking-wider mt-1">taşıma</p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 mb-4 shadow-sm border border-blue-100"><TruckIcon size={32} /></div>
                <div className="text-3xl md:text-4xl font-extrabold mb-1 text-[#2a2a4a] flex items-center justify-center"><Counter end={300} /></div>
                <p className="text-gray-500 text-sm md:text-base font-bold uppercase tracking-wider mt-1">sevkiyat</p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-4 shadow-sm border border-green-100"><Globe size={32} /></div>
                <div className="text-3xl md:text-4xl font-extrabold mb-1 text-[#2a2a4a] flex items-center justify-center"><Counter end={45} suffix=".000" /> <span className="ml-2 text-2xl uppercase">Km</span></div>
                <p className="text-gray-500 text-sm md:text-base font-bold uppercase tracking-wider mt-1">yol</p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.4}>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-500 mb-4 shadow-sm border border-yellow-100"><Users size={32} /></div>
                <div className="text-3xl md:text-4xl font-extrabold mb-1 text-[#2a2a4a] flex items-center justify-center"><Counter end={150} /></div>
                <p className="text-gray-500 text-sm md:text-base font-bold uppercase tracking-wider mt-1">iş ortağı</p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* --- %100 YÜKSEK ÇÖZÜNÜRLÜKLÜ VEKTÖR (SVG) KAMYON BÖLÜMÜ --- */}
        <div className="w-full h-[250px] md:h-[350px] mt-16 relative border-b-[8px] border-[#9ca3af] z-0 flex flex-col items-center justify-end overflow-hidden pb-1">
          <div className="absolute bottom-0 left-0 w-full h-[8px] z-30">
            <div className="w-full h-full bg-[linear-gradient(90deg,transparent_0%,transparent_30%,#fff_30%,#fff_70%,transparent_70%)] bg-[length:150px_100%] animate-road-scroll"></div>
          </div>
          <div className="animate-truck-bounce relative z-20 flex items-center justify-center w-full max-w-[900px] mx-auto pb-1 md:pb-2">
            <svg viewBox="0 0 1000 400" className="w-full h-auto drop-shadow-2xl px-4" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff"/>
                  <stop offset="100%" stopColor="#f1f5f9"/>
                </linearGradient>
                <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e293b"/>
                  <stop offset="50%" stopColor="#334155"/>
                  <stop offset="100%" stopColor="#0f172a"/>
                </linearGradient>
                <linearGradient id="lightGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fef08a" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#fef08a" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <ellipse cx="480" cy="340" rx="420" ry="15" fill="rgba(0,0,0,0.15)" />
              <rect x="50" y="90" width="570" height="210" rx="8" fill="url(#bodyGrad)" stroke="#cbd5e1" strokeWidth="3"/>
              <rect x="50" y="280" width="570" height="20" fill="#1e293b"/>
              <rect x="50" y="265" width="570" height="8" fill="#ea580c"/> 
              {[...Array(11)].map((_, i) => (
                <line key={i} x1={100 + i * 50} y1="90" x2={100 + i * 50} y2="265" stroke="#e2e8f0" strokeWidth="1.5" />
              ))}
              <g transform="translate(330, 195)">
                <text x="0" y="0" fontFamily="Arial, sans-serif" fontSize="60" fontWeight="900" fontStyle="italic" textAnchor="middle" fill="#1e293b">
                  <tspan fill="#ea580c">❯❯</tspan> VAREN
                </text>
                <rect x="-80" y="15" width="160" height="24" rx="12" fill="#1e293b"/>
                <text x="0" y="32" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#ffffff" letterSpacing="2">
                  LOJİSTİK
                </text>
              </g>
              <rect x="620" y="260" width="20" height="15" fill="#475569"/>
              <path d="M 640 300 L 640 110 Q 640 90 670 90 L 780 90 Q 820 90 835 140 L 860 280 Q 860 300 840 300 Z" fill="url(#bodyGrad)" stroke="#cbd5e1" strokeWidth="3"/>
              <path d="M 640 280 L 860 280 L 840 300 L 640 300 Z" fill="#1e293b"/>
              <path d="M 660 200 L 660 120 Q 660 105 680 105 L 775 105 Q 805 105 815 145 L 830 200 Z" fill="url(#glassGrad)"/>
              <path d="M 740 105 L 800 200 L 815 200 L 755 105 Z" fill="rgba(255,255,255,0.1)"/> 
              <path d="M 650 300 L 650 130 M 820 300 L 820 200 L 650 200" stroke="#cbd5e1" strokeWidth="2" fill="none"/>
              <rect x="770" y="220" width="25" height="10" rx="5" fill="#475569"/>
              <rect x="825" y="210" width="35" height="70" rx="5" fill="#1e293b"/>
              <line x1="830" y1="230" x2="860" y2="230" stroke="#475569" strokeWidth="4"/>
              <line x1="830" y1="250" x2="860" y2="250" stroke="#475569" strokeWidth="4"/>
              <rect x="850" y="180" width="10" height="25" rx="3" fill="#fef08a"/>
              <path d="M 855 192 L 980 140 L 980 260 Z" fill="url(#lightGlow)" opacity="0.6"/>
              {[150, 250, 350].map((cx, i) => (
                <g key={`trailer-wheel-${i}`}>
                  <circle cx={cx} cy="300" r="35" fill="#0f172a" />
                  <circle cx={cx} cy="300" r="22" fill="#1e293b" />
                  <circle cx={cx} cy="300" r="14" fill="#94a3b8" />
                  <circle cx={cx} cy="300" r="5" fill="#334155" />
                  <g style={{ transformOrigin: `${cx}px 300px`, animation: 'spinWheel 0.4s linear infinite' }}>
                    <path d={`M ${cx} 280 L ${cx} 320 M ${cx-20} 300 L ${cx+20} 300 M ${cx-14} 286 L ${cx+14} 314 M ${cx-14} 314 L ${cx+14} 286`} stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
                  </g>
                </g>
              ))}
              {[690, 810].map((cx, i) => (
                <g key={`cab-wheel-${i}`}>
                  <circle cx={cx} cy="300" r="35" fill="#0f172a" />
                  <circle cx={cx} cy="300" r="22" fill="#1e293b" />
                  <circle cx={cx} cy="300" r="14" fill="#94a3b8" />
                  <circle cx={cx} cy="300" r="5" fill="#334155" />
                  <g style={{ transformOrigin: `${cx}px 300px`, animation: 'spinWheel 0.4s linear infinite' }}>
                    <path d={`M ${cx} 280 L ${cx} 320 M ${cx-20} 300 L ${cx+20} 300 M ${cx-14} 286 L ${cx+14} 314 M ${cx-14} 314 L ${cx+14} 286`} stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
                  </g>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </section>

      {/* NASIL ÇALIŞIYORUZ? */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 tech-grid-dark opacity-30"></div>
        <TruckIcon className="absolute -right-20 top-20 text-white/5 w-96 h-96 -rotate-12 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Reveal direction="up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-brand-accent font-semibold text-sm mb-6 border border-white/20 backdrop-blur-md">Kusursuz Planlama</div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">Lojistik Operasyon Süreci</h2>
              <p className="text-lg text-gray-300 font-light">Eşyanızın teslim alınmasından yeni adresine kurulumuna kadar geçen süreci, anlık takip ve sıfır hatayla yönetiyoruz.</p>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative pt-6">
            <div className="hidden md:block absolute top-[4.5rem] left-[10%] w-[80%] h-1 bg-white/10 rounded-full overflow-hidden z-0">
              <div className="animate-route rounded-full"></div>
            </div>
            <Reveal direction="up" delay={0.1} className="relative z-10">
              <div className="bg-gray-900/80 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-gray-700 text-center h-full hover:-translate-y-2 hover:border-brand-accent transition-all duration-300 group">
                <div className="w-20 h-20 mx-auto bg-brand-dark text-white rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,255,255,0.05)] border-4 border-gray-700 group-hover:border-brand-accent group-hover:text-brand-accent transition-colors"><ClipboardCheck size={32} /></div>
                <h3 className="text-xl font-bold text-white mb-3">1. Dijital Ekspertiz</h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed">Hacim, ambalaj ve mesafe analiz edilerek size en uygun araç ve net fiyat sunulur.</p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.2} className="relative z-10">
              <div className="bg-gray-900/80 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-gray-700 text-center h-full hover:-translate-y-2 hover:border-brand-accent transition-all duration-300 group">
                <div className="w-20 h-20 mx-auto bg-brand-dark text-white rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,255,255,0.05)] border-4 border-gray-700 group-hover:border-brand-accent group-hover:text-brand-accent transition-colors"><PackageOpen size={32} /></div>
                <h3 className="text-xl font-bold text-white mb-3">2. Özel Ambalaj</h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed">Uzman ekibimiz eşyalarınızı demonte eder ve darbeye dayanıklı şekilde izole eder.</p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.3} className="relative z-10">
              <div className="bg-gray-900/80 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-brand-accent/50 text-center h-full hover:-translate-y-2 hover:border-brand-accent transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-20 h-20 mx-auto bg-brand-accent text-white rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,107,0,0.4)] border-4 border-gray-700"><TruckIcon size={32} /></div>
                <h3 className="text-xl font-bold text-white mb-3">3. Güvenli Sevkiyat</h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed relative z-10">Eşyalarınız çelik kasa, süspansiyonlu nakliye araçlarımıza yüklenir ve yola çıkar.</p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.4} className="relative z-10">
              <div className="bg-gray-900/80 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-gray-700 text-center h-full hover:-translate-y-2 hover:border-brand-accent transition-all duration-300 group">
                <div className="w-20 h-20 mx-auto bg-brand-dark text-white rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,255,255,0.05)] border-4 border-gray-700 group-hover:border-brand-accent group-hover:text-brand-accent transition-colors"><HomeIcon size={32} /></div>
                <h3 className="text-xl font-bold text-white mb-3">4. Montaj & Teslimat</h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed">Yeni adresinizde eşyalar odalara dağıtılır, mobilyaların montajı yapılarak teslim edilir.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SEO UYUMLU GENİŞLETİLMİŞ HİZMETLER BÖLÜMÜ */}
      <section className="py-24 tech-grid-light bg-gray-50 overflow-hidden border-t border-gray-200" id="hizmetlerimiz">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal direction="up">
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight mb-6">
                Lojistik ve <span className="text-brand-accent">Hizmet Ağımız</span>
              </h2>
              <p className="text-lg text-gray-600 font-light bg-white/60 backdrop-blur-md p-4 rounded-2xl inline-block shadow-sm">
                Türkiye'nin her noktasına kurumsal, sigortalı ve profesyonel nakliyat çözümleri üretiyoruz.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Reveal direction="up" delay={0.1}>
              <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-lg border border-gray-100 hover:shadow-2xl hover:border-brand-accent/40 transition-all duration-300 h-full flex flex-col relative overflow-hidden group">
                <div className="bg-brand-light w-16 h-16 rounded-full flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300"><Box size={28} /></div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4">Komple & Parsiyel Taşıma</h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed mb-6 flex-grow">İstanbul Ataşehir merkezli parsiyel (parça eşya) ve komple yük taşımacılığı hizmetimizle Türkiye'nin 81 iline güvenilir ve ekonomik lojistik çözümleri üretiyoruz. Yükünüzün hacmi ne olursa olsun, ihtiyacınıza en uygun aracı tahsis ederek nakliye maliyetlerinizi minimuma indiriyoruz. Eşyalarınız sigorta kapsamında ve tam zamanında teslim edilir.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700"><CheckCircle2 size={18} className="text-brand-accent mt-0.5 shrink-0" /><span>81 İle Kapıdan Kapıya Teslimat</span></li>
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700"><CheckCircle2 size={18} className="text-brand-accent mt-0.5 shrink-0" /><span>Parça Yüklere Özel Ekonomik Fiyat</span></li>
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700"><CheckCircle2 size={18} className="text-brand-accent mt-0.5 shrink-0" /><span>Tam Kapsamlı Hasar Sigortası</span></li>
                </ul>
                <Link href="/iletisim" className="inline-flex items-center gap-2 text-sm font-bold text-brand-accent mt-auto group-hover:translate-x-2 transition-transform">Detaylı İncele <ArrowRight size={16} /></Link>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-lg border border-gray-100 hover:shadow-2xl hover:border-brand-accent/40 transition-all duration-300 h-full flex flex-col relative overflow-hidden group">
                <div className="bg-brand-light w-16 h-16 rounded-full flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300"><Map size={28} /></div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4">Günlük Karşılıklı Seferler</h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed mb-6 flex-grow">İstanbul, Ankara, İzmir, Bursa ve Antalya gibi yoğun ticaret merkezleri arasında her gün düzenli ve karşılıklı nakliye seferleri düzenliyoruz. Kurumsal firmalar için depo bekleme sürelerini sıfıra indiren bu sistem sayesinde acil gönderileriniz doğrudan varış noktasına ulaştırılır. Lojistik ve tedarik zincirinize hız katıyoruz.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700"><CheckCircle2 size={18} className="text-brand-accent mt-0.5 shrink-0" /><span>İstanbul, Ankara, İzmir Ana Hatları</span></li>
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700"><CheckCircle2 size={18} className="text-brand-accent mt-0.5 shrink-0" /><span>Depo Beklemesiz Direkt Teslimat</span></li>
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700"><CheckCircle2 size={18} className="text-brand-accent mt-0.5 shrink-0" /><span>Anlık Araç ve Konum Takip Sistemi</span></li>
                </ul>
                <Link href="/iletisim" className="inline-flex items-center gap-2 text-sm font-bold text-brand-accent mt-auto group-hover:translate-x-2 transition-transform">Detaylı İncele <ArrowRight size={16} /></Link>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-lg border border-gray-100 hover:shadow-2xl hover:border-brand-accent/40 transition-all duration-300 h-full flex flex-col relative overflow-hidden group">
                <div className="bg-brand-light w-16 h-16 rounded-full flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300"><Zap size={28} /></div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4">VIP Ekspres Taşıma</h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed mb-6 flex-grow">Zamanın en kritik faktör olduğu acil operasyonlar için VIP Ekspres nakliye hizmetimizi sunuyoruz. Medikal cihazlar, fuar stant malzemeleri veya hassas evraklarınız için yalnızca size özel araç tahsis edilir. Eşyanız araca yüklendiği an yola çıkar ve başka hiçbir adrese uğramadan doğrudan hedefe güvenle ulaştırılır.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700"><CheckCircle2 size={18} className="text-brand-accent mt-0.5 shrink-0" /><span>Yalnızca Size Özel Araç Tahsisi</span></li>
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700"><CheckCircle2 size={18} className="text-brand-accent mt-0.5 shrink-0" /><span>Aktarmasız ve Duraksız Özel Rota</span></li>
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-700"><CheckCircle2 size={18} className="text-brand-accent mt-0.5 shrink-0" /><span>Tıbbi ve Hassas Cihaz Taşımacılığı</span></li>
                </ul>
                <Link href="/iletisim" className="inline-flex items-center gap-2 text-sm font-bold text-brand-accent mt-auto group-hover:translate-x-2 transition-transform">Detaylı İncele <ArrowRight size={16} /></Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GALERİ BÖLÜMÜ */}
      <section className="py-24 bg-white border-t border-gray-100" id="galeri">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-light text-brand-accent font-semibold text-sm mb-6 border border-brand-accent/20">
              <Camera size={18} /> Sahadan Kareler
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight mb-6">
              Operasyon <span className="text-brand-accent">Galerisi</span>
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Geniş araç filomuz, profesyonel paketleme süreçlerimiz ve Türkiye'nin dört bir yanında başarıyla tamamladığımız operasyonlardan kesitler.
            </p>
          </Reveal>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((src, index) => (
              <Reveal key={index} direction="up" delay={index * 0.1}>
                <div 
                  className="group relative w-full h-64 md:h-80 rounded-[2rem] overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  onClick={() => setSelectedImage(src)}
                >
                  <img 
                    src={src} 
                    alt={`Varen Lojistik Galeri ${index + 1}`} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-brand-accent text-white p-4 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                      <Maximize2 size={24} />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {selectedImage && (
          <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <button onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }} className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-brand-accent p-3 rounded-full transition-colors z-[110]">
              <X size={32} />
            </button>
            <img src={selectedImage} alt="Büyütülmüş Görsel" className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()} />
          </div>
        )}
      </section>

      {/* DEV SEO VE HİZMET BÖLGELERİ ALANI */}
      <section className="py-24 bg-gray-50 overflow-hidden border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-16">
            <div className="lg:w-1/2">
              <Reveal direction="left">
                <h2 className="text-3xl font-extrabold text-brand-dark mb-6">Her Yerdeyiz. Operasyon Ağımız.</h2>
                <div className="prose max-w-none text-gray-600 font-light leading-relaxed space-y-4">
                  <p>
                    <strong>Varen Lojistik</strong> olarak, İstanbul Ataşehir merkezli operasyon ağımızla Türkiye'nin 81 iline kesintisiz, güvenli ve hızlı lojistik destek sağlıyoruz. Yılların getirdiği sektörel tecrübemiz ile evden eve nakliyat, ofis taşımacılığı, fuar taşımacılığı ve asansörlü nakliyat hizmetlerinde öncü firmalardan biri olmanın gururunu yaşıyoruz.
                  </p>
                  <p>
                    Amacımız sadece eşyalarınızı götürmek değil; <strong>sigortalı nakliyat</strong> prensibimizle süreci güvence altına almaktır. Özellikle yüksek katlı binalar için sunduğumuz <strong>modüler asansör sistemleri</strong> ile eşyalarınız bina merdivenlerinde çizilmeden doğrudan aracımıza yüklenir.
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="lg:w-1/2">
              <Reveal direction="right" delay={0.2}>
                <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden h-full">
                  <div className="absolute right-[-20px] top-[-20px] opacity-5 text-brand-dark"><Map size={250} /></div>
                  <h3 className="text-xl font-bold text-brand-dark mb-6 border-b border-gray-200 pb-4 relative z-10">Öne Çıkan Hizmet Bölgeleri</h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-4 relative z-10">
                    <ul className="space-y-4 text-sm text-gray-700 font-medium">
                      <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"><span className="w-2 h-2 rounded-full bg-brand-accent"></span> Ataşehir Nakliyat</li>
                      <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"><span className="w-2 h-2 rounded-full bg-brand-accent"></span> Kadıköy Nakliyat</li>
                      <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"><span className="w-2 h-2 rounded-full bg-brand-accent"></span> Ümraniye Teslimat</li>
                    </ul>
                    <ul className="space-y-4 text-sm text-gray-700 font-medium">
                      <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"><span className="w-2 h-2 rounded-full bg-brand-dark"></span> İst - Ankara</li>
                      <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"><span className="w-2 h-2 rounded-full bg-brand-dark"></span> İst - İzmir</li>
                      <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"><span className="w-2 h-2 rounded-full bg-brand-dark"></span> İst - Antalya</li>
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SIKÇA SORULAN SORULAR */}
      <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Reveal direction="up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 text-gray-600 font-semibold text-sm mb-6 border border-gray-200 shadow-sm">Aklınıza Takılanlar</div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark tracking-tight mb-4">Sıkça Sorulan Sorular</h2>
              <p className="text-lg text-gray-600 font-light">Taşınma veya kargo süreci öncesi bilmeniz gereken tüm detaylar.</p>
            </Reveal>
          </div>
          <div className="space-y-4">
            <Reveal direction="up" delay={0.1}>
              <details className="group border border-gray-200 rounded-[1.5rem] bg-white [&_summary::-webkit-details-marker]:hidden open:shadow-md transition-all cursor-pointer">
                <summary className="flex items-center justify-between gap-1.5 p-6 text-brand-dark font-bold">
                  <h3 className="text-lg">Şehirler arası nakliyat sigortalı mı yapılıyor?</h3>
                  <span className="shrink-0 rounded-full bg-orange-50 p-2 text-brand-accent group-open:-rotate-180 transition duration-300"><ChevronDown className="h-5 w-5" /></span>
                </summary>
                <div className="px-6 pb-6 text-base text-gray-600 font-light leading-relaxed border-t border-gray-50 pt-4 mt-2">Evet, Türkiye'nin dört bir yanına yapılan tüm komple ve parsiyel taşımacılık işlemlerimizde eşyalarınız Allianz Sigorta güvencesiyle tam kapsamlı olarak sigortalanmaktadır.</div>
              </details>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <details className="group border border-gray-200 rounded-[1.5rem] bg-white [&_summary::-webkit-details-marker]:hidden open:shadow-md transition-all cursor-pointer">
                <summary className="flex items-center justify-between gap-1.5 p-6 text-brand-dark font-bold">
                  <h3 className="text-lg">Ekspres (VIP) Kargo hizmetinin farkı nedir?</h3>
                  <span className="shrink-0 rounded-full bg-orange-50 p-2 text-brand-accent group-open:-rotate-180 transition duration-300"><ChevronDown className="h-5 w-5" /></span>
                </summary>
                <div className="px-6 pb-6 text-base text-gray-600 font-light leading-relaxed border-t border-gray-50 pt-4 mt-2">Ekspres taşımacılıkta, aracımız sadece sizin yükünüzü (prototip, evrak veya medikal cihaz) alır ve başka hiçbir aktarma merkezine uğramadan direkt varış noktasına yola çıkar.</div>
              </details>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MÜŞTERİ GÜVEN ALANI (İletişim) */}
      <section className="py-24 bg-brand-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="md:w-1/2">
              <Reveal direction="left">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">İşinizi Şansa Bırakmayın, Uzmanlara Teslim Edin.</h2>
                <div className="space-y-5 mt-10">
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm"><CheckCircle2 className="text-brand-accent w-6 h-6" /> <span className="font-medium text-gray-200">Ücretsiz Yerinde veya Görüntülü Ekspertiz</span></div>
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm"><CheckCircle2 className="text-brand-accent w-6 h-6" /> <span className="font-medium text-gray-200">İhracat Emtiaları İçin Tam Zamanlı Araç Temini</span></div>
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm"><CheckCircle2 className="text-brand-accent w-6 h-6" /> <span className="font-medium text-gray-200">Sözleşmeli, Faturalı ve K3 Yetki Belgeli Hizmet</span></div>
                </div>
              </Reveal>
            </div>
            <div className="md:w-1/2 relative w-full">
              <Reveal direction="right">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-12 rounded-[3rem] shadow-2xl text-center">
                  <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"><Zap className="text-white" size={28} /></div>
                  <h3 className="text-3xl font-bold mb-4 text-white">Hemen Bize Ulaşın</h3>
                  <a href="tel:+905421804660" className="flex items-center justify-center gap-3 w-full bg-white text-brand-dark font-extrabold py-5 rounded-2xl hover:bg-brand-accent hover:text-white transition-all duration-300 text-2xl shadow-[0_0_20px_rgba(255,255,255,0.2)] mt-8">
                    +90 542 180 46 60
                  </a>
                  <p className="text-center text-sm text-gray-400 mt-6">veya <a href="mailto:destek@varenlojistik.com" className="underline hover:text-brand-accent transition-colors">destek@varenlojistik.com</a> adresine mail gönderin.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG BÖLÜMÜ */}
      <div className="tech-grid-light bg-gray-50 py-16">
        <BlogSection />
      </div>

    </div>
  );
}