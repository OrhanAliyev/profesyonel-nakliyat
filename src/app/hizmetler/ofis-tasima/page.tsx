import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, PhoneCall, ShieldCheck, MapPin, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Ofis ve İş Yeri Taşımacılığı | Kurumsal Nakliyat",
  description: "İş akışınızın aksamaması için hafta sonu veya gece operasyonlarıyla ofis malzemelerinizi, elektronik cihazlarınızı ve arşivlerinizi güvenle taşıyoruz.",
};

export default function OfisTasima() {
  return (
    <div className="bg-brand-light min-h-screen">
      
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 bg-brand-dark/90 z-10"></div>
        <div className="relative z-20 text-center px-4">
          <Briefcase className="w-16 h-16 text-brand-accent mx-auto mb-4 opacity-80" strokeWidth={1} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Ofis ve İş Yeri Taşıma
          </h1>
          <div className="w-16 h-1 bg-brand-accent mx-auto mb-4"></div>
          <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
            İşiniz yarım kalmasın. Profesyonel kurumsal taşımacılık çözümleri.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-brand-dark mb-6">
                Kurumsal Hafızanızı Güvenle Taşıyoruz
              </h2>
              <p className="text-gray-600 font-light leading-relaxed mb-8 text-lg">
                Ofis taşımacılığı, evden eve nakliyattan çok daha farklı bir disiplin ve planlama gerektirir. Bilgisayarlar, sunucular, ticari evraklar ve ofis mobilyalarınızın sıfır hata ile yeni çalışma alanınıza entegre edilmesi ticari faaliyetlerinizin aksamaması için kritiktir.
              </p>
              
              <h3 className="text-2xl font-bold text-brand-dark mb-6">
                Nasıl İlerliyoruz?
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <CheckCircle className="text-brand-accent shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <strong className="block text-brand-dark">Esnek Çalışma Saatleri:</strong>
                    <span className="text-gray-600 font-light">İş gücü kaybı yaşamamanız için taşıma işlemlerini hafta sonu veya gece mesaisi ile gerçekleştiriyoruz.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="text-brand-accent shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <strong className="block text-brand-dark">Elektronik Cihaz Ambalajlaması:</strong>
                    <span className="text-gray-600 font-light">Hassas elektronik cihazlar, bilgisayarlar ve yazıcılar anti-statik malzemelerle özenle paketlenir.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="text-brand-accent shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <strong className="block text-brand-dark">Arşivleme Sistematiği:</strong>
                    <span className="text-gray-600 font-light">Klasörleriniz ve önemli evraklarınız numaralandırılarak kolilenir, yeni ofisinizde aynı düzende yerleştirilir.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 sticky top-32">
                <ShieldCheck className="w-12 h-12 text-brand-accent mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-bold text-brand-dark mb-4">Kurumsal Teklif Alın</h3>
                <p className="text-gray-600 font-light mb-8 text-sm">
                  Şirketinizin taşıma planlaması ve ücretsiz ekspertiz hizmeti için uzman müşteri temsilcimizle görüşün.
                </p>
                <div className="space-y-4">
                  <a href="tel:+90 542 180 46 60" className="w-full py-4 bg-brand-dark hover:bg-gray-900 text-white font-bold rounded-lg transition-all flex justify-center items-center gap-3">
                    <PhoneCall size={20} />
                    0542 180 46 60
                  </a>
                  <Link href="/#iletisim" className="w-full py-4 bg-brand-accent hover:bg-brand-accent-hover text-white font-bold rounded-lg transition-all flex justify-center items-center gap-3">
                    <MapPin size={20} />
                    Kurumsal İletişim Formu
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