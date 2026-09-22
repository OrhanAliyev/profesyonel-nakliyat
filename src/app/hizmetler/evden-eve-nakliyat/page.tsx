import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, PhoneCall, ShieldCheck, MapPin } from "lucide-react";

// Bu kısım Google'da arama sonuçlarında görünecek olan özel SEO ayarlarıdır
export const metadata: Metadata = {
  title: "Evden Eve Nakliyat | Profesyonel ve Sigortalı Taşıma",
  description: "Eşyalarınızı en yüksek güvenlik standartlarında, özel ambalajlama sistemleriyle yeni evinize taşıyoruz. %100 hasarsızlık garantisi ve uzman kadro.",
};

export default function EvdenEveNakliyat() {
  return (
    <div className="bg-brand-light min-h-screen">
      
      {/* Üst Banner (Hero) - Daha kısa ve konuya odaklı */}
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 bg-brand-dark/90 z-10"></div>
        {/* İleride buraya ev taşıma ile ilgili özel bir görsel koyacağız */}
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Evden Eve Nakliyat
          </h1>
          <div className="w-16 h-1 bg-brand-accent mx-auto mb-4"></div>
          <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
            Yeni hayatınıza başlarken taşınma stresini bize bırakın.
          </p>
        </div>
      </section>

      {/* İçerik Bölümü */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Sol Taraf - Detaylı Yazı (Google botları bu metinleri okuyup sizi üst sıralara taşıyacak) */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-brand-dark mb-6">
                Eşyalarınız Bizimle Güvende
              </h2>
              <p className="text-gray-600 font-light leading-relaxed mb-8 text-lg">
                Ev taşıma süreci, dikkat ve özen gerektiren ciddi bir operasyondur. Varen Lojistik olarak, eşyalarınızın paketlenmesinden yeni evinizde kurulumuna kadar her aşamada uzman personelimizle hizmet veriyoruz. Amacımız, eşyalarınızın tek bir çiziğe dahi maruz kalmadan yeni adresinize ulaşmasıdır.
              </p>
              
              <h3 className="text-2xl font-bold text-brand-dark mb-6">
                Nasıl Çalışıyoruz?
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <CheckCircle className="text-brand-accent shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <strong className="block text-brand-dark">Ücretsiz Ekspertiz:</strong>
                    <span className="text-gray-600 font-light">Taşınma öncesi evinize gelen uzmanımız, eşya yoğunluğunu ve taşıma planını belirler.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="text-brand-accent shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <strong className="block text-brand-dark">Profesyonel Ambalajlama:</strong>
                    <span className="text-gray-600 font-light">Kırılacak eşyalarınız, mobilyalarınız ve beyaz eşyalarınız darbe emici özel malzemelerle paketlenir.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="text-brand-accent shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <strong className="block text-brand-dark">Demontaj ve Montaj:</strong>
                    <span className="text-gray-600 font-light">Mobilyalarınız uzman marangozlarımız tarafından sökülür ve yeni evinizde tekrar kurulur.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Sağ Taraf - Yapışkan (Sticky) İletişim Kartı */}
            <div className="lg:w-1/3">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 sticky top-32">
                <ShieldCheck className="w-12 h-12 text-brand-accent mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-bold text-brand-dark mb-4">Hızlı Randevu Alın</h3>
                <p className="text-gray-600 font-light mb-8 text-sm">
                  Evden eve nakliyat hizmetimiz için hemen iletişime geçin, size en uygun tarih ve fiyat planını oluşturalım.
                </p>
                <div className="space-y-4">
                  <a href="tel:+90 542 180 46 60" className="w-full py-4 bg-brand-dark hover:bg-gray-900 text-white font-bold rounded-lg transition-all flex justify-center items-center gap-3">
                    <PhoneCall size={20} />
                    0542 180 46 60
                  </a>
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