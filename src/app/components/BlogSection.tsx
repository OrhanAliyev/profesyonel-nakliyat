import { BookOpen, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Ev Taşırken Dikkat Edilmesi Gereken 10 Altın Kural",
    slug: "ev-tasirken-dikkat-edilmesi-gereken-10-altin-kural",
    excerpt: "Taşınma sürecini stresten uzak, planlı ve hasarsız atlatmanız için uzman ekibimizden hayat kurtaran ipuçları.",
    category: "Taşınma Rehberi",
    readTime: "4 dk okuma",
    image: "/images/blog1.jpg"
  },
  {
    id: 2,
    title: "Kırılacak Eşyalar Nasıl Paketlenmeli?",
    slug: "kirilacak-esyalar-nasil-paketlenmeli",
    excerpt: "Bardaklar, tabaklar ve hassas elektronik cihazlarınızı kolilerken uygulamanız gereken profesyonel ambalajlama teknikleri.",
    category: "Paketleme",
    readTime: "3 dk okuma",
    image: "/images/blog2.jpg"
  },
  {
    id: 3,
    title: "Şehirler Arası Nakliyat Fiyatları Neye Göre Belirlenir?",
    slug: "sehirler-arasi-nakliyat-fiyatlari",
    excerpt: "Uzun yol taşımacılığında maliyetleri etkileyen faktörler ve bütçenizi korumanızı sağlayacak şeffaf fiyatlandırma rehberi.",
    category: "Fiyatlandırma",
    readTime: "5 dk okuma",
    image: "/images/blog3.jpg"
  }
];

export default function BlogSection() {
  return (
    <section className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlık Alanı */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-brand-accent font-semibold text-sm mb-6 border border-orange-100">
              <BookOpen size={16} />
              Bilgi Bankası
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark tracking-tight mb-4">
              Nakliyat Rehberi
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Sektörel tecrübemizi sizlerle paylaşıyoruz. Taşınma sürecinizi kolaylaştıracak faydalı içerikler.
            </p>
          </div>
          
          {/* MASAÜSTÜ TÜM YAZILARI GÖR BUTONU DÜZELTİLDİ */}
          <Link href="/blog" className="hidden md:inline-flex items-center gap-2 text-brand-accent font-bold hover:text-brand-accent-hover transition-colors group">
            Tüm Yazıları Gör <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Kartları (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group">
              {/* Görsel */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-brand-dark shadow-sm">
                  {post.category}
                </div>
              </div>
              
              {/* İçerik */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-gray-400 text-xs font-medium mb-4">
                  <Clock size={14} />
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-brand-dark mb-3 line-clamp-2 group-hover:text-brand-accent transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 font-light text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-brand-dark font-bold hover:text-brand-accent transition-colors mt-auto text-sm w-max">
                  Yazıyı Oku <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* MOBİL İÇİN TÜM YAZILAR BUTONU DÜZELTİLDİ */}
        <div className="mt-10 text-center md:hidden">
          <Link href="/blog" className="inline-flex items-center justify-center gap-2 w-full py-4 bg-gray-100 text-brand-dark font-bold rounded-xl hover:bg-gray-200 transition-colors">
            Tüm Yazıları Gör <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}