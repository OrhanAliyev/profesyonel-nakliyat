import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Eye, ShieldCheck, Award, Truck, Globe, CheckCircle2, Building2, ThumbsUp, MapPin, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Kurumsal | Profesyonel Evden Eve ve Şehirler Arası Nakliyat",
  description: "İstanbul merkezli profesyonel nakliye firması olarak, asansörlü, sigortalı, evden eve ve şehirler arası taşımacılık hizmetlerinde sektör lideriyiz. Kurumsal geçmişimiz ve kalite politikamız.",
};

export default function KurumsalPage() {
  return (
    <div className="bg-brand-light min-h-screen pb-24 font-sans selection:bg-brand-accent selection:text-white pt-24">
      
      {/* 1. ÜST BÖLÜM (HERO) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative rounded-3xl overflow-hidden h-[350px] md:h-[450px] shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1920&auto=format&fit=crop" 
            alt="Varen Lojistik Kurumsal" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-transparent"></div>
          
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 w-full md:w-2/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent border border-brand-accent/30 font-bold text-xs md:text-sm mb-4 w-max">
              <Building2 size={16} /> Hakkımızda
            </div>
            <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Gücümüzü <span className="text-brand-accent">Tecrübemizden</span> Alıyoruz.
            </h1>
            <p className="text-gray-300 text-base md:text-xl font-light max-w-xl leading-relaxed">
              Güven, tecrübe ve yenilikçi lojistik çözümleriyle Türkiye'nin her noktasına değer taşıyoruz.
            </p>
          </div>
        </div>
      </div>

      {/* 2. HİKAYEMİZ VE BİZ KİMİZ (SEO ODAKLI UZUN METİN) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Sol Metin Alanı */}
          <div className="lg:w-2/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-brand-accent font-semibold text-sm mb-6 border border-orange-100">
              <Briefcase size={16} />
              Kurumsal Geçmişimiz
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-6">Varen Lojistik: Biz Kimiz?</h2>
            
            <div className="prose prose-lg max-w-none text-gray-600 font-light leading-relaxed space-y-6">
              <p>
                Sektöre adım attığımız ilk günden bu yana, <strong>Varen Lojistik</strong> olarak temel gayemiz taşımacılık algısını tamamen değiştirmek olmuştur. Eskiden stresli, yorucu ve belirsizliklerle dolu olan taşınma sürecini; şeffaf, <strong>sigortalı nakliyat</strong> sözleşmeleriyle güvence altına alınmış, planlı ve tamamen müşteri odaklı kurumsal bir yapıya kavuşturduk.
              </p>
              <p>
                <strong>Evden eve nakliyat</strong> sektörü, yalnızca eşyaların bir yerden başka bir yere götürülmesi değil, aynı zamanda insanların anılarının, emeklerinin ve yeni bir hayata attıkları adımın güvenle taşınmasıdır. Bu bilinçle, <strong>İstanbul evden eve taşıma</strong> hizmetlerimiz başta olmak üzere, tüm Türkiye genelinde <strong>şehirler arası nakliyat</strong> operasyonlarını sıfır hata prensibiyle yürütüyoruz. Kapalı çelik kasa araç filomuz, iklim şartlarından etkilenmeyen izolasyonlu yapısıyla eşyalarınızı yolculuk boyunca maksimum düzeyde korur.
              </p>
              <p>
                Özellikle yüksek katlı binalarda ve dar merdivenli yapılarda yaşanan taşıma zorluklarını, filomuza kattığımız modern <strong>asansörlü taşımacılık</strong> sistemleri ile tamamen ortadan kaldırdık. Dış cephe asansörlerimiz sayesinde eşyalarınız bina merdivenlerine hiç değmeden, çarpma veya çizilme riski olmadan doğrudan evinize ulaştırılır. Bu sistem sadece güvenliği artırmakla kalmaz, aynı zamanda taşınma süresini yarı yarıya kısaltarak zamandan tasarruf etmenizi sağlar.
              </p>
              <p>
                Sadece bireysel taşımacılıkta değil, ticari lojistikte de iddialıyız. Kurumsal <strong>ofis taşıma</strong>, iş yeri yer değişimi, fuar taşımacılığı ve güvenli <strong>eşya depolama</strong> hizmetlerimizle işletmelerin iş kaybı yaşamadan yeni adreslerinde faaliyete geçmesini sağlıyoruz. Bünyemizde kesinlikle taşeron veya gündelikçi personel çalıştırmıyoruz. Ekibimizin tamamı sigortalı, kurum içi taşıma eğitimlerini tamamlamış, montaj ve demontaj konularında sertifikalı uzman marangozlardan ve paketleme profesyonellerinden oluşmaktadır.
              </p>
            </div>
          </div>

          {/* Sağ Taraf - Vurgulu Yüzen Kutu */}
          <div className="lg:w-1/3 w-full">
            <div className="bg-white p-8 rounded-3xl shadow-2xl shadow-black/5 border border-gray-100 sticky top-32">
              <ShieldCheck className="w-14 h-14 text-brand-accent mb-6 bg-orange-50 p-2 rounded-2xl" />
              <h3 className="text-2xl font-bold text-brand-dark mb-4">Resmi & Belgeli Hizmet</h3>
              <p className="text-gray-600 font-light mb-8 text-sm leading-relaxed border-b border-gray-100 pb-6">
                Firmamız T.C. Ulaştırma ve Altyapı Bakanlığı onaylı <strong>K3 Yetki Belgesi</strong>'ne sahip olup, korsan taşımacılığın aksine tüm operasyonlarını yasal düzenlemelere harfiyen uygun olarak gerçekleştirmektedir.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-green-100 p-1.5 rounded-full shrink-0 mt-0.5"><CheckCircle2 className="text-green-600 w-5 h-5" /></div>
                  <div>
                    <strong className="block text-brand-dark mb-1">Geniş Kapsamlı Sigorta</strong>
                    <span className="text-gray-500 font-light text-sm">Tüm eşyalarınız Allianz Sigorta güvencesi altındadır.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-green-100 p-1.5 rounded-full shrink-0 mt-0.5"><CheckCircle2 className="text-green-600 w-5 h-5" /></div>
                  <div>
                    <strong className="block text-brand-dark mb-1">Ücretsiz Ekspertiz</strong>
                    <span className="text-gray-500 font-light text-sm">Taşınma öncesi yerinde tespit ve net fiyat garantisi.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-green-100 p-1.5 rounded-full shrink-0 mt-0.5"><CheckCircle2 className="text-green-600 w-5 h-5" /></div>
                  <div>
                    <strong className="block text-brand-dark mb-1">1. Sınıf Paketleme</strong>
                    <span className="text-gray-500 font-light text-sm">Özel kraft kağıtlar ve darbe emici balonlu naylonlar.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* 3. NEDEN BİZ? (Koyu Renkli Özel Bölüm) */}
      <div className="py-24 bg-brand-dark text-white relative overflow-hidden mb-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">Neden Varen Lojistik ?</h2>
            <p className="text-gray-400 font-light text-lg">Yüzlerce nakliye firması arasından bizi ayıran, sektöre yön veren kalite standartlarımız.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10 hover:border-brand-accent/50 transition-colors group">
              <Truck className="w-14 h-14 text-brand-accent mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4">Kendi Araç Filomuz</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Komisyoncu veya aracı bir firma değiliz. Tamamı özmalımız olan, kapalı çelik kasalı, evden eve nakliyat için özel dizayn edilmiş, süspansiyonlu geniş araç filomuzla hizmet veriyoruz.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10 hover:border-brand-accent/50 transition-colors group">
              <ThumbsUp className="w-14 h-14 text-brand-accent mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4">Müşteri Memnuniyeti</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Referanslarımız, işimizin aynasıdır. Gerek bireysel ev taşımalarında gerekse kurumsal şirket taşımacılığında %100 müşteri memnuniyeti oranıyla sektörde en çok tavsiye edilen firmayız.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10 hover:border-brand-accent/50 transition-colors group">
              <MapPin className="w-14 h-14 text-brand-accent mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4">Tüm Türkiye'ye Kesintisiz Hizmet</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Merkezimiz İstanbul olsa da; Ankara, İzmir, Antalya, Bursa başta olmak üzere 81 ilimize haftalık düzenli şehirler arası parsiyel ve komple eşya taşıma seferleri düzenliyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. MİSYON & VİZYON KARTLARI */}
      <div className="bg-white py-16 border-y border-gray-100 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Vizyon */}
            <div className="bg-gray-50 p-12 rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-accent shadow-sm mb-8 group-hover:scale-110 transition-transform">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">Vizyonumuz</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Nakliyat sektöründe "güven ve kalite" kelimeleri ile eş anlamlı bir marka olmak. Teknolojik yenilikleri (yeni nesil mobil asansörler, akıllı lojistik takibi) taşıma süreçlerine en hızlı entegre eden, sadece Türkiye'de değil uluslararası arenada da lojistik çözümleriyle adından söz ettiren öncü nakliye şirketi konumuna yükselmek. Amacımız sadece eşya taşımak değil, sektörün standartlarını belirleyen kurum olmaktır.
              </p>
            </div>

            {/* Misyon */}
            <div className="bg-gray-50 p-12 rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-accent shadow-sm mb-8 group-hover:scale-110 transition-transform">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">Misyonumuz</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Müşterilerimizin taşınma sürecindeki tüm fiziksel yorgunluğunu ve psikolojik stresini sırtlanarak onlara anahtar teslim kusursuz bir deneyim sunmak. Taşıma sırasında doğaya saygılı, geri dönüştürülebilir ve çevreye duyarlı ambalaj malzemeleri kullanmak. Personelimizin sosyal ve finansal haklarını en üst düzeyde koruyarak mutlu çalışanlarla mutlu müşteriler yaratmak ve "koşulsuz müşteri memnuniyeti" ilkesinden ne pahasına olursa olsun taviz vermemek.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* 5. ÇAĞRI (CALL TO ACTION) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-accent to-orange-500 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Bizimle Sorunsuz Bir Başlangıca Hazır Mısınız?</h2>
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto font-medium">
              Uzman ekspertiz ekibimizin eşyalarınızı incelemesi ve size özel en uygun nakliye fiyatını sunması için hemen iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim" className="inline-flex items-center justify-center gap-2 bg-brand-dark hover:bg-gray-900 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1 text-lg">
                İletişime Geçin <ArrowRight size={20} />
              </Link>
              <a href="tel:+905421804660" className="inline-flex items-center justify-center gap-2 bg-white text-brand-dark hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:-translate-y-1 text-lg">
                Hemen Ara: 0542 180 46 60
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}