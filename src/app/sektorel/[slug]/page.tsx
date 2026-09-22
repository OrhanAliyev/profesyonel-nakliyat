import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, PhoneCall, ShieldCheck, Factory, Settings, Activity, ShoppingBag, CalendarDays, MessageCircle } from "lucide-react";

// 5 Sektörün Tüm İçerikleri (Veritabanı)
const sectorsData: Record<string, any> = {
  "tekstil-lojistigi": {
    title: "Tekstil Lojistiği",
    subtitle: "Askılı Taşımacılık ve Mağaza Sevkiyatlarında Kusursuz Operasyon",
    icon: <ShoppingBag size={24} />,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1920&auto=format&fit=crop",
    features: ["Özel askılı taşıma (ütüsü bozulmadan)", "Toz, nem ve kokuya karşı izole edilmiş çelik kasalar", "AVM ve mağaza içi zamanlı teslimat", "Sezonluk yoğunluklarda esnek araç filosu"],
    content: (
      <>
        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Modanın Hızına Ayak Uyduran Lojistik</h2>
        <p className="mb-6 leading-relaxed">Hızlı moda (Fast Fashion) dünyasında zaman her şeydir. Fabrikadan çıkan yeni sezon ürünlerinin mağaza raflarına en hızlı ve en temiz şekilde ulaşması gerekir. Varen Lojistik olarak, tekstil sektörünün bu dinamik yapısını biliyor ve özel donanımlı araçlarımızla hizmet veriyoruz.</p>
        <p className="mb-8 leading-relaxed"><strong className="text-brand-dark font-semibold">Askılı Taşımacılık</strong> sistemimiz sayesinde takım elbise, abiye veya dış giyim ürünlerinizi kolilemeye gerek kalmadan, ütüsü bozulmadan ve dış etkenlere (toz, yağmur) maruz kalmadan doğrudan mağaza askılarına aktarıyoruz.</p>
      </>
    )
  },
  "otomotiv-yedek-parca": {
    title: "Otomotiv & Yedek Parça",
    subtitle: "Üretim Bantlarını Durdurmayan JIT (Just in Time) Sevkiyatlar",
    icon: <Settings size={24} />,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1920&auto=format&fit=crop",
    features: ["JIT (Just-in-Time) tam zamanında teslimat", "Ağır ve gabari dışı yedek parçalar için özel yükleme", "Tedarik zinciri entegrasyonu", "7/24 kesintisiz operasyon desteği"],
    content: (
      <>
        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Tedarik Zincirinizin En Güçlü Halkası</h2>
        <p className="mb-6 leading-relaxed">Otomotiv sektöründe üretimin bir dakika bile durması, milyonlarca liralık zarara yol açabilir. Varen Lojistik, otomotiv yan sanayi ve ana montaj fabrikaları arasında mekik dokuyarak, ihtiyaç duyulan yedek parçaları tam zamanında (Just-in-Time) üretim bantlarına ulaştırır.</p>
        <p className="mb-8 leading-relaxed">Motor blokları, karoser parçaları veya hassas elektronik aksamlar; yükün tonajı ve hassasiyeti ne olursa olsun, özel sabitleme (lashing) ekipmanlarına sahip araçlarımızla sarsıntısız ve hasarsız bir şekilde sevk edilir.</p>
      </>
    )
  },
  "medikal-lojistik": {
    title: "Medikal Lojistik",
    subtitle: "Hassas Medikal Cihazlar ve Tıbbi Ürünler İçin Güvenli Nakliyat",
    icon: <Activity size={24} />,
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1920&auto=format&fit=crop",
    features: ["Sarsıntıya karşı havalı süspansiyon donanımlı araçlar", "Isı ve nem takipli iklimlendirmeli kasalar", "Hastanelere ve laboratuvarlara özel teslimat prosedürü", "Yüksek sigorta teminatı"],
    content: (
      <>
        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">İnsan Hayatına Dokunan Hassas Operasyonlar</h2>
        <p className="mb-6 leading-relaxed">MR, Tomografi, Ultrason gibi yüksek hassasiyetli görüntüleme cihazları ile laboratuvar ekipmanlarının taşınması sıradan bir nakliye işlemi değildir. En ufak bir sarsıntı, cihazın kalibrasyonunu bozabilir ve yüz binlerce dolarlık hasara yol açabilir.</p>
        <p className="mb-8 leading-relaxed">Varen Lojistik Medikal Lojistik ekibi, bu cihazları hidrolik liftli ve havalı süspansiyonlu özel araçlarla, ekstra darbe emici ambalajlar kullanarak taşır. Isı hassasiyeti olan tıbbi sarf malzemeleri için de iklimlendirmeli araçlarımız mevcuttur.</p>
      </>
    )
  },
  "fuar-etkinlik-lojistigi": {
    title: "Fuar & Etkinlik Lojistiği",
    subtitle: "Zamana Karşı Yarışan Kusursuz Stant ve Ekipman Taşımacılığı",
    icon: <CalendarDays size={24} />,
    image: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=1920&auto=format&fit=crop",
    features: ["Fuar alanlarına zamanında (randevulu) giriş", "Hassas stant malzemeleri ve demirbaş taşıması", "Gidiş ve dönüş (çift yönlü) lojistik planlama", "Kurulum öncesi ve söküm sonrası depolama desteği"],
    content: (
      <>
        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Etkinliğinizin Perde Arkasındaki Güç</h2>
        <p className="mb-6 leading-relaxed">Yurtiçi veya yurtdışında katılacağınız prestijli fuarlar, kongreler ve konser etkinliklerinde, stant malzemelerinizin ve sergilenecek ürünlerinizin fuar açılış saatinden önce alanda hazır olması kritik önem taşır.</p>
        <p className="mb-8 leading-relaxed">Varen Lojistik olarak, fuar alanlarının zorlu giriş çıkış prosedürlerine hakim ekiplerimizle, ürünlerinizi tam saatinde teslim ediyor, fuar bitiminde ise aynı hızla sökümünü gerçekleştirip deponuza geri getiriyoruz. Gerektiğinde fuar öncesi ürünlerinizi tesislerimizde depoluyoruz.</p>
      </>
    )
  },
  "fabrika-tasimaciligi": {
    title: "Fabrika Taşımacılığı",
    subtitle: "Üretimi Aksatmadan, Ağır Makine ve Tesis Taşıma Uzmanlığı",
    icon: <Factory size={24} />,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1920&auto=format&fit=crop",
    features: ["Ağır tonajlı sanayi makinelerinin vinçli nakliyesi", "Üretim hattının demontaj ve montaj desteği", "İş ve işçi güvenliği kurallarına %100 uyum", "Minimum iş gücü kaybı için hafta sonu/gece operasyonları"],
    content: (
      <>
        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Büyük Taşıma Projelerinde Çözüm Ortağınız</h2>
        <p className="mb-6 leading-relaxed">Bir fabrikanın veya üretim tesisinin yer değiştirmesi, ciddi bir lojistik mühendisliği gerektirir. Üretimin durduğu her dakika firmaya maliyet yazar. Varen Lojistik Fabrika Taşımacılığı departmanı, taşınma sürecini haftalar öncesinden planlayarak fabrikanızı bölüm bölüm, sıfır hata ile yeni adresine taşır.</p>
        <p className="mb-8 leading-relaxed">Ağır sanayi makineleri, torna ve CNC tezgahları, devasa kazanlar gibi tonajlı yükler, uzman operatörlerimiz eşliğinde vinç ve forkliftler kullanılarak araçlarımıza yüklenir. Taşıma işlemi, olası kazalara karşı yüksek kapsamlı sigorta poliçeleriyle güvence altına alınır.</p>
      </>
    )
  }
};

export default async function SectoralDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const sector = sectorsData[resolvedParams.slug];

  if (!sector) notFound();

  return (
    <div className="bg-gray-50 min-h-screen pb-24 font-sans selection:bg-brand-accent selection:text-white pt-24">
      
      {/* ÜST BÖLÜM - GÖRSEL VE BAŞLIK */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative rounded-3xl overflow-hidden h-[300px] md:h-[400px] shadow-2xl">
          <img src={sector.image} alt={sector.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-transparent"></div>
          
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 w-full md:w-2/3">
            <Link href="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-6 text-sm font-medium w-max">
              <ArrowLeft size={16} /> Ana Sayfaya Dön
            </Link>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent border border-brand-accent/30 font-bold text-xs md:text-sm mb-4 w-max">
              {sector.icon} Kurumsal Çözümler
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">{sector.title}</h1>
            <p className="text-gray-300 text-base md:text-xl font-light">{sector.subtitle}</p>
          </div>
        </div>
      </div>

      {/* İÇERİK VE SİPARİŞ ALANI */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* SOL: Detaylı Makale / Bilgi Alanı */}
          <div className="lg:w-2/3">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              <div className="prose prose-lg max-w-none text-gray-600 font-light">
                {sector.content}
              </div>

              {/* Avantajlar Listesi */}
              <div className="mt-10 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100">
                <h3 className="text-lg font-bold text-brand-dark mb-6">Sektörel Hizmet Avantajlarımız</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sector.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="text-brand-accent shrink-0 mt-0.5" size={20} />
                      <span className="text-sm font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SAĞ: Sabit İletişim / Aksiyon Modülü */}
          <div className="lg:w-1/3">
            <div className="bg-white p-8 rounded-3xl shadow-2xl shadow-black/5 border border-gray-100 sticky top-28">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-brand-accent mb-6">
                {sector.icon}
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-2">Proje & Fiyat Talebi</h3>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">Firmanıza özel lojistik operasyon süreci ve fiyatlandırma için sektör uzmanı danışmanlarımızla hemen iletişime geçin.</p>
              
              <div className="space-y-4">
                <a 
                  href={`https://wa.me/905421804660?text=${encodeURIComponent(`Merhaba, kurumsal firmamız için ${sector.title} hizmetiniz hakkında detaylı bilgi ve proje fiyatlandırması almak istiyoruz.`)}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20b858] text-white py-4 px-4 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1"
                >
                  <MessageCircle size={22} /> Kurumsal WhatsApp Hattı
                </a>

                <a 
                  href="tel:+905421804660" 
                  className="w-full flex items-center justify-center gap-3 bg-brand-dark hover:bg-gray-800 text-white py-4 px-4 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1"
                >
                  <PhoneCall size={20} /> Lojistik Danışmanını Ara
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-start gap-3 text-sm text-gray-600 font-medium">
                  <ShieldCheck className="text-brand-accent shrink-0" size={24} />
                  <span>Sektörel yükleriniz, Allianz Sigorta tarafından tam değerinde kaskolanmaktadır.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}