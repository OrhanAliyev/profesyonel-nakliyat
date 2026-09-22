import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, PhoneCall, ShieldCheck, MapPin, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Sigortalı Taşımacılık | %100 Hasarsızlık Garantisi",
  description: "Tüm nakliyat sürecinde eşyalarınız, Türkiye'nin önde gelen sigorta şirketlerinin geniş kapsamlı poliçeleri ile güvence altındadır.",
};

export default function SigortaliTasimacilik() {
  return (
    <div className="bg-brand-light min-h-screen">
      
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 bg-brand-dark/90 z-10"></div>
        <div className="relative z-20 text-center px-4">
          <ShieldCheck className="w-16 h-16 text-brand-accent mx-auto mb-4 opacity-80" strokeWidth={1} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Sigortalı Taşımacılık
          </h1>
          <div className="w-16 h-1 bg-brand-accent mx-auto mb-4"></div>
          <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
            Siz kahvenizi yudumlarken, tüm riskleri biz üstleniyoruz. Eşyalarınız güvence altında.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-brand-dark mb-6">
                Değer verdiklerinizi Riske Atmayın
              </h2>
              <p className="text-gray-600 font-light leading-relaxed mb-8 text-lg">
                Profesyonel bir nakliyat sürecinde alınabilecek tüm önlemleri (kaliteli ambalaj, profesyonel ekip, asansör sistemi vb.) eksiksiz alıyoruz. Ancak hayatın doğal akışında oluşabilecek öngörülemez kazalara karşı da eşyalarınızı yasal olarak güvence altına alıyoruz.
              </p>
              
              <h3 className="text-2xl font-bold text-brand-dark mb-6">
                Sigorta Kapsamımızda Neler Var?
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <CheckCircle className="text-brand-accent shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <strong className="block text-brand-dark">Trafik ve Yol Riskleri:</strong>
                    <span className="text-gray-600 font-light">Araç seyir halindeyken meydana gelebilecek olası trafik kazaları, yangın veya doğal afet gibi durumlarda eşyalarınız tam değerinden karşılanır.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="text-brand-accent shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <strong className="block text-brand-dark">Ücretsiz Ekspertiz ve Değerleme:</strong>
                    <span className="text-gray-600 font-light">Taşınma öncesi uzmanımız evinize gelerek eşyalarınızın güncel değerini belirler ve poliçe bu gerçek değer üzerinden eksiksiz olarak hazırlanır.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="text-brand-accent shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <strong className="block text-brand-dark">Şeffaf Süreç:</strong>
                    <span className="text-gray-600 font-light">Sözde değil, belgede sigorta yapıyoruz. Taşıma günü sigorta poliçenizin bir nüshası işleme başlamadan önce tarafınıza teslim edilir.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 sticky top-32">
                <FileText className="w-12 h-12 text-brand-accent mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-bold text-brand-dark mb-4">Bilgi Alın</h3>
                <p className="text-gray-600 font-light mb-8 text-sm">
                  Sigorta poliçelerimizin limitleri ve teminat kapsamları hakkında detaylı bilgi almak için müşteri hizmetlerimize ulaşın.
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