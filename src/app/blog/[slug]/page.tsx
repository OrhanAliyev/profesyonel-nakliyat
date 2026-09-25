import { notFound } from "next/navigation";
import { Calendar, User, ArrowLeft, Tag, Clock, Share2, Printer } from "lucide-react";
import Link from "next/link";

// Tüm blog yazılarımızın veritabanı (Okuma süreleri eklendi)
const blogPosts: Record<string, any> = {
  "ev-tasirken-dikkat-edilmesi-gereken-10-altin-kural": {
    title: "Ev Taşırken Dikkat Edilmesi Gereken 10 Altın Kural",
    date: "12 Ekim 2026",
    author: "Varen Lojistik Uzman Ekibi",
    category: "Taşınma Rehberi",
    readTime: "4 dk okuma",
    image: "/images/blog1.jpg",
    content: (
      <>
        <p className="mb-6 leading-relaxed">Taşınma süreci, doğru planlanmadığında oldukça stresli ve yorucu bir deneyime dönüşebilir. Ancak profesyonel bir <strong className="text-brand-dark font-semibold">evden eve nakliyat firmasıyla</strong> çalışmak ve süreci önceden organize etmek, bu stresi tamamen ortadan kaldırır. İşte sorunsuz bir taşınma için dikkat etmeniz gereken altın kurallar.</p>
        
        <h3 className="text-2xl font-bold text-brand-dark mt-10 mb-4 border-l-4 border-brand-accent pl-4">1. Planlamaya Erken Başlayın</h3>
        <p className="mb-6 leading-relaxed">Taşınma gününden en az 2-3 hafta önce hazırlıklara başlamalısınız. Kullanmadığınız eşyaları ayırmak, yeni evinizin planını çıkarmak ve nakliye firmasıyla <strong className="text-brand-dark font-semibold">ücretsiz ekspertiz</strong> için görüşmek ilk adımlarınız olmalıdır.</p>
        
        <h3 className="text-2xl font-bold text-brand-dark mt-10 mb-4 border-l-4 border-brand-accent pl-4">2. Kurumsal ve Sigortalı Bir Firma Seçin</h3>
        <p className="mb-6 leading-relaxed">Eşyalarınızı kime emanet ettiğiniz çok önemlidir. K3 Yetki belgesine sahip, sözleşmeli ve <strong className="text-brand-dark font-semibold">sigortalı nakliyat</strong> yapan şirketleri tercih edin. Biz Varen Lojistik olarak, eşyalarınızı Allianz Sigorta güvencesiyle taşıyoruz.</p>
        
        <h3 className="text-2xl font-bold text-brand-dark mt-10 mb-4 border-l-4 border-brand-accent pl-4">3. Kırılacak Eşyalar İçin Özel Ambalajlama</h3>
        <p className="mb-6 leading-relaxed">Mutfak eşyaları, elektronik cihazlar ve antika ürünler standart kolileme yöntemleriyle taşınmamalıdır. Çift katmanlı havalı naylonlar (patpat) ve darbe emici kraft kağıtlar kullanılmalıdır. Eğer paketlemeyi kendiniz yapmıyorsanız, bu işlemi uzman ekibimize bırakabilirsiniz.</p>
        
        <h3 className="text-2xl font-bold text-brand-dark mt-10 mb-4 border-l-4 border-brand-accent pl-4">4. Asansörlü Taşımacılığı Değerlendirin</h3>
        <p className="mb-6 leading-relaxed">Eski binanız veya taşınacağınız yeni ev yüksek katlıysa, bina merdivenlerinin darlığı eşyalarınızın çizilmesine neden olabilir. <strong className="text-brand-dark font-semibold">Asansörlü nakliyat</strong> sistemleri, eşyalarınızın balkon veya pencereden hasarsız ve çok daha hızlı taşınmasını sağlar.</p>
      </>
    )
  },
  "kirilacak-esyalar-nasil-paketlenmeli": {
    title: "Kırılacak Eşyalar Nasıl Paketlenmeli?",
    date: "05 Ekim 2026",
    author: "Ambalaj ve Paketleme Departmanı",
    category: "Paketleme Teknikleri",
    readTime: "3 dk okuma",
    image: "/images/blog2.jpg",
    content: (
      <>
        <p className="mb-6 leading-relaxed">Porselen takımlar, cam eşyalar, televizyonlar ve tablolar taşınma sırasında en çok hasar gören ürünlerdir. Profesyonel <strong className="text-brand-dark font-semibold">ambalajlama teknikleri</strong> ile bu riskleri sıfıra indirmek mümkündür.</p>
        <p className="mb-6 leading-relaxed">Öncelikle her bir bardak veya tabak ayrı ayrı ambalaj kağıdına veya balonlu naylona sarılmalıdır. Kolilerin alt kısmına yumuşak malzemeler (havlu, yastık kılıfı) yerleştirerek bir tampon bölge oluşturulmalı, koli kapatılmadan önce boşluklar kağıtlarla sıkıştırılmalıdır. Kolilerin üzerine mutlaka okunaklı bir şekilde "KIRILACAK" ibaresi yazılmalıdır.</p>
      </>
    )
  },
  "sehirler-arasi-nakliyat-fiyatlari": {
    title: "Şehirler Arası Nakliyat Fiyatları Neye Göre Belirlenir?",
    date: "28 Eylül 2026",
    author: "Fiyatlandırma ve Ekspertiz Ekibi",
    category: "Fiyatlandırma",
    readTime: "5 dk okuma",
    image: "/images/blog3.jpg",
    content: (
      <>
        <p className="mb-6 leading-relaxed">Şehirler arası taşınmalarda fiyatı belirleyen birçok farklı kriter bulunmaktadır. Şeffaf ve sürpriz maliyetler içermeyen bir teklif almak için bu kriterleri bilmeniz oldukça önemlidir.</p>
        <h3 className="text-2xl font-bold text-brand-dark mt-10 mb-4 border-l-4 border-brand-accent pl-4">1. Eşya Hacmi (Oda Sayısı)</h3>
        <p className="mb-6 leading-relaxed">Fiyatı belirleyen en temel unsur eşyalarınızın hacmidir. 1+1 bir evin eşyası ile 3+1 bir evin eşyası farklı araç tipleri ve farklı ambalaj miktarları gerektirdiği için fiyatlandırmaları da doğrudan değişir.</p>
        <h3 className="text-2xl font-bold text-brand-dark mt-10 mb-4 border-l-4 border-brand-accent pl-4">2. İki Şehir Arasındaki Mesafe</h3>
        <p className="mb-6 leading-relaxed">Katedilecek kilometre, yakıt maliyetleri ve personel giderlerini doğrudan etkiler. Aynı zamanda eşyanın parsiyel (paylaşımlı) mi yoksa komple (size özel araç) mi gideceği de fiyatı değiştiren önemli bir detaydır.</p>
      </>
    )
  }
};

export default async function BlogPostDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts[resolvedParams.slug];
  
  if (!post) {
    notFound();
  }

  return (
    <div className="bg-brand-light min-h-screen pb-24 font-sans selection:bg-brand-accent selection:text-white">
      
      {/* Blog Üst Görsel ve Başlık (Hero) */}
      <section className="relative w-full h-[60vh] min-h-[400px] md:min-h-[500px] flex items-end justify-center overflow-hidden bg-brand-dark pt-20 md:pt-16">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-overlay transition-transform duration-1000 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent z-10"></div>
        
        <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent text-white font-semibold text-xs md:text-sm mb-4 md:mb-6 shadow-lg">
            <Tag size={16} />
            {post.category}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 md:mb-8 leading-tight drop-shadow-lg">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-4 sm:gap-x-6 text-gray-300 text-sm font-medium bg-white/10 px-6 py-3 rounded-full backdrop-blur-md border border-white/20 shadow-xl">
            <div className="flex items-center gap-2">
              <User size={18} className="text-brand-accent" />
              <span>{post.author}</span>
            </div>
            <div className="hidden sm:block text-gray-500">•</div>
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-brand-accent" />
              <span>{post.date}</span>
            </div>
            <div className="hidden sm:block text-gray-500">•</div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-brand-accent" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Makale İçeriği (Gölgeli ve Yükseltilmiş Kart) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 md:-mt-16 relative z-30">
        <div className="bg-white rounded-2xl shadow-2xl shadow-black/5 border border-gray-100 p-6 md:p-14">
          
          {/* Kurumsal Aksiyon Çubuğu (Paylaş / Yazdır) - ONCLICK KALDIRILDI */}
          <div className="flex justify-end gap-5 mb-8 border-b border-gray-100 pb-4">
            <button className="flex items-center gap-2 text-gray-400 hover:text-brand-accent transition-colors text-sm font-medium group">
              <Share2 size={16} className="group-hover:scale-110 transition-transform" /> Paylaş
            </button>
            <button className="flex items-center gap-2 text-gray-400 hover:text-brand-accent transition-colors text-sm font-medium group">
              <Printer size={16} className="group-hover:scale-110 transition-transform" /> Yazdır
            </button>
          </div>

          <div className="prose prose-base md:prose-lg max-w-none text-gray-600 font-light leading-relaxed">
            {post.content}
          </div>
          
          <hr className="my-8 md:my-10 border-gray-100" />
          
          {/* Aksiyon Butonları (Mobil Uyumlu) */}
          <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-6">
            <Link href="/" className="inline-flex items-center gap-2 text-brand-dark font-bold hover:text-brand-accent transition-colors w-full sm:w-auto justify-center py-3 sm:py-0 border border-gray-200 sm:border-none rounded-lg sm:rounded-none">
              <ArrowLeft size={20} />
              Ana Sayfaya Dön
            </Link>
            <Link href="/iletisim" className="inline-flex items-center justify-center gap-2 px-8 py-4 sm:py-3 bg-brand-accent text-white font-bold rounded-lg hover:bg-brand-accent-hover transition-all shadow-lg shadow-orange-500/30 w-full sm:w-auto text-center hover:-translate-y-1">
              Hizmetlerimiz İçin Fiyat Alın
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}