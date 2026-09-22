import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, PhoneCall, ShieldCheck, MapPin, ArrowUpSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Asansörlü Nakliyat | Yüksek Katlara Hasarsız Taşıma",
  description: "Dış cephe asansör sistemlerimizle yüksek katlı binalarda eşyalarınızı merdiven boşluklarında hasar görmeden, hızlı ve güvenli bir şekilde taşıyoruz.",
};

export default function AsansorluNakliyat() {
  return (
    <div className="bg-brand-light min-h-screen">
      
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 bg-brand-dark/90 z-10"></div>
        <div className="relative z-20 text-center px-4">
          <ArrowUpSquare className="w-16 h-16 text-brand-accent mx-auto mb-4 opacity-80" strokeWidth={1} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Asansörlü Nakliyat
          </h1>
          <div className="w-16 h-1 bg-brand-accent mx-auto mb-4"></div>
          <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
            Dar merdivenlere ve yüksek katlara son. Eşyalarınız doğrudan evinize ulaşıyor.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-brand-dark mb-6">
                Eşyalarınız İçin En Güvenli Yöntem
              </h2>
              <p className="text-gray-600 font-light leading-relaxed mb-8 text-lg">
                Geleneksel taşıma yöntemlerinde eşyaların merdivenlerden indirilip çıkarılması, çarpma ve çizilme riskini artırır. Yeni nesil modüler dış cephe asansörlerimiz sayesinde, eşyalarınız balkon veya geniş pencerelerden doğrudan araçlarımıza aktarılır.
              </p>
              
              <h3 className="text-2xl font-bold text-brand-dark mb-6">
                Neden Asansörlü Taşıma?
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <CheckCircle className="text-brand-accent shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <strong className="block text-brand-dark">Sıfır Hasar Riski:</strong>
                    <span className="text-gray-600 font-light">Eşyalarınız dar koridorlarda ve merdiven dönüşlerinde duvarlara çarpmaz.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="text-brand-accent shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <strong className="block text-brand-dark">Zaman Tasarrufu:</strong>
                    <span className="text-gray-600 font-light">İnsan gücüyle saatler sürecek olan taşıma işlemi, asansör sistemiyle çok daha kısa sürede tamamlanır.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="text-brand-accent shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <strong className="block text-brand-dark">Çevreye Rahatsızlık Vermez:</strong>
                    <span className="text-gray-600 font-light">Bina içindeki asansörler meşgul edilmez, komşularınıza gürültü veya kirlilik rahatsızlığı verilmez.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 sticky top-32">
                <ShieldCheck className="w-12 h-12 text-brand-accent mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-bold text-brand-dark mb-4">Asansör Kurulumu İsteyin</h3>
                <p className="text-gray-600 font-light mb-8 text-sm">
                  Binanızın asansör kurulumuna uygunluğunu öğrenmek ve fiyat teklifi almak için bize ulaşın.
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