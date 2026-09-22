import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, PhoneCall, ShieldCheck, MapPin, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Eşya Depolama | Güvenli, Rutubetsiz ve Kameralı Depolar",
  description: "Fazla eşyalarınız için 7/24 güvenlik kameralı, rutubetsiz ve kişiye özel kilitli depo alanları sunuyoruz. Eşyalarınız güvende.",
};

export default function EsyaDepolama() {
  return (
    <div className="bg-brand-light min-h-screen">
      
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 bg-brand-dark/90 z-10"></div>
        <div className="relative z-20 text-center px-4">
          <Package className="w-16 h-16 text-brand-accent mx-auto mb-4 opacity-80" strokeWidth={1} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Eşya Depolama
          </h1>
          <div className="w-16 h-1 bg-brand-accent mx-auto mb-4"></div>
          <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
            Fazla eşyalarınız için modern, güvenli ve kişiye özel depolama çözümleri.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-brand-dark mb-6">
                Eşyalarınız Bize Emanet
              </h2>
              <p className="text-gray-600 font-light leading-relaxed mb-8 text-lg">
                Ev tadilatı, geçici süreyle yurt dışına taşınma veya sadece yaşam alanınızda yer açma ihtiyacı... Sebebiniz ne olursa olsun, eşyalarınızı sizin için ilk günkü gibi muhafaza ediyoruz. Özel ambalajlama tekniklerimizle paketlenen eşyalarınız, modern depolama tesislerimizde güvenle saklanır.
              </p>
              
              <h3 className="text-2xl font-bold text-brand-dark mb-6">
                Depolama Tesislerimizin Özellikleri
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <CheckCircle className="text-brand-accent shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <strong className="block text-brand-dark">Yüksek Güvenlik:</strong>
                    <span className="text-gray-600 font-light">Tesislerimiz 7/24 kapalı devre kamera sistemleri (CCTV) ve profesyonel güvenlik personeli ile korunmaktadır.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="text-brand-accent shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <strong className="block text-brand-dark">İklimlendirme ve Rutubet Kontrolü:</strong>
                    <span className="text-gray-600 font-light">Eşyalarınızın küflenme, paslanma veya ahşap deformasyonuna uğramaması için depolarımız düzenli olarak havalandırılır ve nem dengesi korunur.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="text-brand-accent shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <strong className="block text-brand-dark">Kişiye Özel Alanlar:</strong>
                    <span className="text-gray-600 font-light">Eşyalarınız başkalarının eşyalarıyla karışmaz. Sadece sizin erişiminize açık, kilitli özel odalarda veya konteynerlerde muhafaza edilir.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 sticky top-32">
                <ShieldCheck className="w-12 h-12 text-brand-accent mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-bold text-brand-dark mb-4">Depolama Teklifi Alın</h3>
                <p className="text-gray-600 font-light mb-8 text-sm">
                  Eşyalarınızın hacmine ve depolama süresine göre size en uygun fiyat teklifini sunalım.
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