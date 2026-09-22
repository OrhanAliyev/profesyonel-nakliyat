import Link from "next/link";
import { ArrowLeft, CheckCircle2, PhoneCall, ShieldCheck, Map, MessageCircle } from "lucide-react";

export default function GunlukKarsilikliSeferler() {
  const serviceTitle = "Günlük Karşılıklı Seferler";
  
  return (
    <div className="bg-gray-50 min-h-screen pb-24 font-sans selection:bg-brand-accent selection:text-white pt-24">
      
      {/* ÜST BÖLÜM - GÖRSEL VE BAŞLIK */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative rounded-3xl overflow-hidden h-[300px] md:h-[400px] shadow-2xl">
          {/* Otoyol / Lojistik Görseli */}
          <img 
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1920&auto=format&fit=crop" 
            alt="Günlük Karşılıklı Seferler Nakliyat" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-transparent"></div>
          
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 w-full md:w-2/3">
            <Link href="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-6 text-sm font-medium w-max">
              <ArrowLeft size={16} /> Ana Sayfaya Dön
            </Link>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent border border-brand-accent/30 font-bold text-xs md:text-sm mb-4 w-max">
              <Map size={16} /> Şehirler Arası Özel Hat
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">{serviceTitle}</h1>
            <p className="text-gray-300 text-base md:text-xl font-light">İstanbul, Ankara ve İzmir hatlarında her gün düzenli çıkış yapan araçlarımızla yüklerinizi bekletmeden teslim ediyoruz.</p>
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
                <h2 className="text-2xl font-bold text-brand-dark mb-4">Metropoller Arası Hızlı ve Kesintisiz Lojistik Köprüsü</h2>
                <p className="mb-6 leading-relaxed">
                  İş dünyasının kalbi olan İstanbul, Ankara ve İzmir şehirleri arasındaki lojistik akışının ne kadar kritik olduğunu biliyoruz. Yüklerinizin aktarma depolarında günlerce beklemesi, iş süreçlerinizi aksatabilir veya müşteri memnuniyetinizi düşürebilir.
                </p>
                <p className="mb-8 leading-relaxed">
                  Varen Lojistik olarak, bu ana arterlerde <strong className="text-brand-dark font-semibold">her gün düzenli, karşılıklı özmal araç seferleri</strong> düzenliyoruz. Akşam saatlerinde operasyon merkezlerimizden çıkış yapan araçlarımız, hiçbir gereksiz duraklama yapmadan direkt olarak hedef şehre yönelir.
                </p>
                
                <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4 border-l-4 border-brand-accent pl-4">Kimler İçin İdeal?</h3>
                <p className="mb-6 leading-relaxed">
                  Özellikle düzenli ürün sevkiyatı yapan KOBİ'ler, e-ticaret firmaları, ofis mobilyası veya hassas elektronik cihaz gönderimi yapan işletmeler için kusursuz bir çözümdür. Ayrıca bu güzergahlarda evini taşıyan bireysel müşterilerimiz de araç beklemeksizin anında eşyalarını yola çıkarabilirler.
                </p>
              </div>

              {/* Avantajlar Listesi */}
              <div className="mt-10 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100">
                <h3 className="text-lg font-bold text-brand-dark mb-6">Neden Bizi Seçmelisiniz?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-brand-accent shrink-0 mt-0.5" size={20} />
                    <span className="text-sm font-medium text-gray-700">Aktarma depolarında bekletmeden direkt teslimat</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-brand-accent shrink-0 mt-0.5" size={20} />
                    <span className="text-sm font-medium text-gray-700">Her gün düzenli, kesintisiz çıkış garantisi</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-brand-accent shrink-0 mt-0.5" size={20} />
                    <span className="text-sm font-medium text-gray-700">Ticari yükler ve ev/ofis eşyaları için özel planlama</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-brand-accent shrink-0 mt-0.5" size={20} />
                    <span className="text-sm font-medium text-gray-700">Zamanında teslimat (SLA) sözleşmesi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SAĞ: Sabit İletişim / Aksiyon Modülü */}
          <div className="lg:w-1/3">
            <div className="bg-white p-8 rounded-3xl shadow-2xl shadow-black/5 border border-gray-100 sticky top-28">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-brand-accent mb-6">
                <Map size={24} />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-2">Sefer Programını Öğrenin</h3>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">Bugün çıkacak olan araçlarımızda yerinizi ayırtın. Rotanızı ve yükünüzü bize bildirin, anında fiyat ve saat bilgisi verelim.</p>
              
              <div className="space-y-4">
                <a 
                  href={`https://wa.me/905421804660?text=${encodeURIComponent(`Merhaba Varen Lojistik, ${serviceTitle} hizmetiniz hakkında rotalar ve fiyatlar için bilgi almak istiyorum.`)}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20b858] text-white py-4 px-4 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1"
                >
                  <MessageCircle size={22} /> WhatsApp'tan Sorun
                </a>

                <a 
                  href="tel:+905421804660" 
                  className="w-full flex items-center justify-center gap-3 bg-brand-dark hover:bg-gray-800 text-white py-4 px-4 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1"
                >
                  <PhoneCall size={20} /> Nakliye Uzmanını Ara
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-start gap-3 text-sm text-gray-600 font-medium">
                  <ShieldCheck className="text-brand-accent shrink-0" size={24} />
                  <span>Tüm seferlerimiz araç ve yük sigortası (Emtia Kaskosu) kapsamında yapılmaktadır.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}