import Link from "next/link";
import { BookOpen, ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";

// Bütün makalelerin TAM METİNLERİ buraya eklendi
const fullBlogPosts = [
  {
    id: 1,
    title: "Ev Taşırken Dikkat Edilmesi Gereken 10 Altın Kural",
    date: "12 Ekim 2026",
    author: "Varen Lojistik Uzman Ekibi",
    category: "Taşınma Rehberi",
    readTime: "4 dk okuma",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
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
  {
    id: 2,
    title: "Kırılacak Eşyalar Nasıl Paketlenmeli?",
    date: "05 Ekim 2026",
    author: "Ambalaj ve Paketleme Departmanı",
    category: "Paketleme Teknikleri",
    readTime: "3 dk okuma",
    image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    content: (
      <>
        <p className="mb-6 leading-relaxed">Porselen takımlar, cam eşyalar, televizyonlar ve tablolar taşınma sırasında en çok hasar gören ürünlerdir. Profesyonel <strong className="text-brand-dark font-semibold">ambalajlama teknikleri</strong> ile bu riskleri sıfıra indirmek mümkündür.</p>
        <p className="mb-6 leading-relaxed">Öncelikle her bir bardak veya tabak ayrı ayrı ambalaj kağıdına veya balonlu naylona sarılmalıdır. Kolilerin alt kısmına yumuşak malzemeler (havlu, yastık kılıfı) yerleştirerek bir tampon bölge oluşturulmalı, koli kapatılmadan önce boşluklar kağıtlarla sıkıştırılmalıdır. Kolilerin üzerine mutlaka okunaklı bir şekilde "KIRILACAK" ibaresi yazılmalıdır.</p>
      </>
    )
  },
  {
    id: 3,
    title: "Şehirler Arası Nakliyat Fiyatları Neye Göre Belirlenir?",
    date: "28 Eylül 2026",
    author: "Fiyatlandırma ve Ekspertiz Ekibi",
    category: "Fiyatlandırma",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
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
];

export default function BlogListingPage() {
  return (
    <div className="bg-brand-light min-h-screen pb-24 pt-28 font-sans selection:bg-brand-accent selection:text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ÜST BAŞLIK ALANI (Ortalandı) */}
        <div className="mb-16 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-accent transition-colors mb-6 text-sm font-medium">
            <ArrowLeft size={16} /> Ana Sayfaya Dön
          </Link>
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-brand-accent font-semibold text-sm border border-orange-100">
              <BookOpen size={16} /> Bilgi Bankası
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-dark tracking-tight mb-4">
            Varen Lojistik <span className="text-brand-accent">Blog</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Taşınma rehberleri, ambalajlama teknikleri ve lojistik sektörü hakkında faydalı tüm içeriklerimiz aşağıda listelenmiştir. Okumaya devam edin.
          </p>
        </div>

        {/* BÜTÜN YAZILARIN TAM METİNLERİYLE ALT ALTA DİZİLİMİ */}
        <div className="flex flex-col gap-20">
          {fullBlogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              
              {/* Görsel Üstte */}
              <div className="relative h-64 md:h-96 w-full overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-bold text-brand-dark shadow-sm flex items-center gap-2">
                  <Tag size={16} className="text-brand-accent" /> {post.category}
                </div>
              </div>
              
              {/* TAM İÇERİK Altta */}
              <div className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-6 leading-tight">
                  {post.title}
                </h2>
                
                {/* Yazar ve Tarih Bilgisi */}
                <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-gray-500 text-sm font-medium mb-10 pb-6 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-brand-accent" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-brand-accent" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-brand-accent" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                {/* Makalenin Tam Metni */}
                <div className="prose prose-base md:prose-lg max-w-none text-gray-600 font-light leading-relaxed">
                  {post.content}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* EN ALTTA ANA SAYFAYA DÖN BUTONU */}
        <div className="mt-20 text-center border-t border-gray-200 pt-10">
          <Link href="/" className="inline-flex items-center justify-center gap-2 bg-brand-dark hover:bg-brand-accent text-white font-bold py-4 px-8 rounded-xl transition-all shadow-md hover:-translate-y-1 w-full sm:w-auto text-lg">
            <ArrowLeft size={20} /> Ana Sayfaya Dön
          </Link>
        </div>

      </div>
    </div>
  );
}