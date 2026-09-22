import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    role: "Evden Eve Taşıma",
    comment: "İlk defa bir nakliye firmasıyla sorunsuz taşındım. Eşyalarım çok iyi paketlenmişti ve tam söyledikleri saatte geldiler. Kesinlikle tavsiye ederim.",
  },
  {
    id: 2,
    name: "Ayşe Kaya",
    role: "Ofis Taşımacılığı",
    comment: "Şirketimizin tüm ofis mobilyalarını ve hassas elektronik cihazlarını sıfır çizikle yeni plazamıza taşıdılar. Ekip çok profesyonel ve saygılıydı.",
  },
  {
    id: 3,
    name: "Mehmet Demir",
    role: "Şehirler Arası Nakliyat",
    comment: "İstanbul'dan Ankara'ya taşınma sürecimizde bizi hiç yormadılar. Asansörlü sistemleri sayesinde eşyalar çok hızlı ve güvenli indirildi. Fiyat/performans mükemmel.",
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200 relative overflow-hidden">
      
      {/* Arka plan için hafif bir dekoratif ikon */}
      <Quote className="absolute top-10 left-10 w-64 h-64 text-gray-200 opacity-50 transform -rotate-12" strokeWidth={0.5} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-3 block">
            SOSYAL KANIT
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark tracking-tight mb-4">
            Müşterilerimiz Ne Diyor?
          </h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 font-light">
            Bizim için en büyük referans, mutlu müşterilerimizdir. İşte hizmet verdiğimiz bazı kişilerin deneyimleri.
          </p>
        </div>

        {/* Yorum Kartları Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative group"
            >
              {/* Küçük Şık Tırnak İşareti */}
              <Quote className="absolute top-8 right-8 w-8 h-8 text-brand-accent opacity-20 group-hover:opacity-100 transition-opacity" strokeWidth={1} />
              
              {/* Yıldızlar (5 Yıldız) */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-accent text-brand-accent" />
                ))}
              </div>
              
              {/* Yorum Metni */}
              <p className="text-gray-600 font-light leading-relaxed mb-8 italic">
                "{review.comment}"
              </p>
              
              {/* Müşteri Bilgisi */}
              <div className="mt-auto border-t border-gray-100 pt-6">
                <h4 className="text-brand-dark font-bold text-lg">{review.name}</h4>
                <span className="text-brand-accent text-sm font-medium">{review.role}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}