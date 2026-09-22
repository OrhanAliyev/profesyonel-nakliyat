import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, PhoneCall, ShieldCheck, MapPin, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Şehirler Arası Nakliyat | Türkiye'nin 81 İline Güvenli Taşıma",
  description: "Geniş ve kapalı çelik kasa araç filomuzla, eşyalarınızı Türkiye'nin her yerine zamanında, sigortalı ve sıfır hasar garantisiyle taşıyoruz.",
};

export default function SehirlerArasiTasima() {
  return (
    <div className="bg-brand-light min-h-screen">
      
      {/* Üst Banner (Hero) */}
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 bg-brand-dark/90 z-10"></div>
        <div className="relative z-20 text-center px-4">
          <Truck className="w-16 h-16 text-brand-accent mx-auto mb-4 opacity-80" strokeWidth={1} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Şehirler Arası Taşıma
          </h1>
          <div className="w-16 h-1 bg-brand-accent mx-auto mb-4"></div>
          <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
            Türkiye'nin dört bir yanına, güvenli ve zamanında teslimat.
          </p>
        </div>
      </section>

      {/* İçerik Bölümü */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Sol Taraf - Detaylı Yazı (SEO Metni) */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-brand-dark mb-6">
                Mesafeler Gözünüzü Korkutmasın
              </h2>
              <p className="text-gray-600 font-light leading-relaxed mb-8 text-lg">
                Farklı bir şehre taşınmak stresli bir süreç gibi görünebilir, ancak doğru lojistik partneriyle bu yolculuk son derece keyiflidir. Varen Lojistik olarak, uzun yol taşımacılığına özel tasarlanmış kapalı çelik kasa araçlarımız ve deneyimli uzun yol şoförlerimizle eşyalarınızı güvenle taşıyoruz.
              </p>
              
              <h3 className="text-2xl font-bold text-brand-dark mb-6">
                Şehirler Arası Hizmetimizin Ayrıcalıkları
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <CheckCircle className="text-brand-accent shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <strong className="block text-brand-dark">Tam Kapsamlı Nakliyat Sigortası:</strong>
                    <span className="text-gray-600 font-light">Eşyalarınız yola çıktığı andan, yeni evinize yerleşene kadar olası tüm risklere karşı sigortalanır.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="text-brand-accent shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <strong className="block text-brand-dark">Çelik Kasa Araç Filosu:</strong>
                    <span className="text-gray-600 font-light">Hava şartlarından (yağmur, kar, toz) etkilenmeyen, içi özel suntalam kaplı araçlarla taşıma yapıyoruz.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="text-brand-accent shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <strong className="block text-brand-dark">Zamanında Teslimat:</strong>
                    <span className="text-gray-600 font-light">Söz verdiğimiz gün ve saatte eşyalarınızı yeni adresinize ulaştırıyor, kurulumlarını gerçekleştiriyoruz.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Sağ Taraf - Yapışkan (Sticky) İletişim Kartı */}
            <div className="lg:w-1/3">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 sticky top-32">
                <ShieldCheck className="w-12 h-12 text-brand-accent mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-bold text-brand-dark mb-4">Fiyat Teklifi Alın</h3>
                <p className="text-gray-600 font-light mb-8 text-sm">
                  Şehirler arası taşımacılık hizmetimiz için hemen iletişime geçin, mesafeye ve eşya durumuna göre en uygun fiyatı sunalım.
                </p>
                <div className="space-y-4">
                  <a href="tel:+90 542 180 46 60" className="w-full py-4 bg-brand-dark hover:bg-gray-900 text-white font-bold rounded-lg transition-all flex justify-center items-center gap-3">
                    <PhoneCall size={20} />
                    0542 180 46 60
                  </a>
                  {/* Bu buton ana sayfadaki forma kaydırır */}
                  <Link href="/#iletisim" className="w-full py-4 bg-brand-accent hover:bg-brand-accent-hover text-white font-bold rounded-lg transition-all flex justify-center items-center gap-3">
                    <MapPin size={20} />
                    Online Teklif Formu
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}