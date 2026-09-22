import Link from "next/link";
import { ArrowLeft, CheckCircle2, PhoneCall, ShieldCheck, ShieldAlert, MessageCircle } from "lucide-react";

export default function IklimlendirmeliDepolama() {
  const serviceTitle = "İklimlendirmeli Depolama";
  
  return (
    <div className="bg-gray-50 min-h-screen pb-24 font-sans selection:bg-brand-accent selection:text-white pt-24">
      
      {/* ÜST BÖLÜM - GÖRSEL VE BAŞLIK */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative rounded-3xl overflow-hidden h-[300px] md:h-[400px] shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1920&auto=format&fit=crop" 
            alt="İklimlendirmeli Eşya Depolama" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-transparent"></div>
          
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 w-full md:w-2/3">
            <Link href="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-6 text-sm font-medium w-max">
              <ArrowLeft size={16} /> Ana Sayfaya Dön
            </Link>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent border border-brand-accent/30 font-bold text-xs md:text-sm mb-4 w-max">
              <ShieldAlert size={16} /> Ultra Güvenli Muhafaza Alanı
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">{serviceTitle}</h1>
            <p className="text-gray-300 text-base md:text-xl font-light">Eşyalarınız için 7/24 güvenlik kameralı, nem ve rutubete karşı korumalı, kişiye özel kilitli depolama tesisleri.</p>
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
                <h2 className="text-2xl font-bold text-brand-dark mb-4">Eşyalarınız Evinizdeki Gibi Güvende</h2>
                <p className="mb-6 leading-relaxed">
                  Yurtdışı tayini, uzun süreli seyahatler, ev veya ofis tadilatı, ya da sadece alan kazanma ihtiyacı... Nedeni ne olursa olsun, eşyalarınızı geçici veya uzun süreli olarak güvenli bir yerde tutmanız gerektiğinde Varen Lojistik'in <strong className="text-brand-dark font-semibold">İklimlendirmeli Depolama</strong> tesisleri hizmetinizdedir.
                </p>
                <p className="mb-8 leading-relaxed">
                  Sıradan depoların aksine, tesislerimiz eşyalarınızın başına gelebilecek her türlü olumsuzluğa (yangın, su baskını, nem, rutubet) karşı özel olarak yalıtılmış, havalandırma sistemleriyle donatılmış ve tam kapsamlı olarak sigortalanmıştır.
                </p>
                
                <h3 className="text-xl font-bold text-brand-dark mt-8 mb-4 border-l-4 border-brand-accent pl-4">Hassas Koruma, Kişisel Gizlilik</h3>
                <p className="mb-6 leading-relaxed">
                  Gelişmiş iklimlendirme sistemlerimiz sayesinde elektronik eşyalarınız, beyaz eşyalarınız, sanat eserleriniz veya antika mobilyalarınız yıllarca kalsa dahi ilk günkü kondisyonunu korur. Eşyalarınız, sadece size tahsis edilen ve kilitlenen özel modüler odalarda tutulur, eşyalarınıza sizden başka hiç kimsenin erişimi olmaz.
                </p>
              </div>

              {/* Avantajlar Listesi */}
              <div className="mt-10 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100">
                <h3 className="text-lg font-bold text-brand-dark mb-6">Depolama Hizmetimizin Ayrıcalıkları</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-brand-accent shrink-0 mt-0.5" size={20} />
                    <span className="text-sm font-medium text-gray-700">Kişiye özel, kilitli ve yalıtımlı depolama modülleri</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-brand-accent shrink-0 mt-0.5" size={20} />
                    <span className="text-sm font-medium text-gray-700">7/24 kapalı devre güvenlik kamerası (CCTV) ve alarm sistemi</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-brand-accent shrink-0 mt-0.5" size={20} />
                    <span className="text-sm font-medium text-gray-700">Rutubet, nem ve haşerelere karşı periyodik profesyonel ilaçlama</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-brand-accent shrink-0 mt-0.5" size={20} />
                    <span className="text-sm font-medium text-gray-700">Günlük, aylık veya yıllık esnek fiyatlı kiralama opsiyonları</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SAĞ: Sabit İletişim / Aksiyon Modülü */}
          <div className="lg:w-1/3">
            <div className="bg-white p-8 rounded-3xl shadow-2xl shadow-black/5 border border-gray-100 sticky top-28">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-brand-accent mb-6">
                <ShieldAlert size={24} />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-2">Depo Alanınızı Ayırtın</h3>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">Depolanacak eşyalarınızın hacmini (oda sayısı vb.) ve tahmini kalma süresini bize iletin, size en uygun depo modülümüzü rezerve edelim.</p>
              
              <div className="space-y-4">
                <a 
                  href={`https://wa.me/905421804660?text=${encodeURIComponent(`Merhaba Varen Lojistik, ${serviceTitle} hizmetiniz hakkında aylık fiyatlandırma ve detaylı bilgi almak istiyorum.`)}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20b858] text-white py-4 px-4 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1"
                >
                  <MessageCircle size={22} /> WhatsApp'tan Fiyat Sorun
                </a>

                <a 
                  href="tel:+905421804660" 
                  className="w-full flex items-center justify-center gap-3 bg-brand-dark hover:bg-gray-800 text-white py-4 px-4 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1"
                >
                  <PhoneCall size={20} /> Depolama Uzmanını Ara
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-start gap-3 text-sm text-gray-600 font-medium">
                  <ShieldCheck className="text-brand-accent shrink-0" size={24} />
                  <span>Depomuzda kaldığı süre boyunca eşyalarınız afet ve hırsızlığa karşı Allianz güvencesindedir.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}