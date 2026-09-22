import { Camera } from "lucide-react";

const fleetImages = [
  {
    id: 1,
    title: "Geniş Çelik Kasa Araçlarımız",
    desc: "Her ev hacmine uygun, içi özel suntalam kaplı ve sarsıntı önleyici süspansiyonlu geniş araç filomuz.",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    colSpan: "md:col-span-2 lg:col-span-2", // Ekranda geniş yer kaplayacak
  },
  {
    id: 2,
    title: "Modüler Asansör Sistemleri",
    desc: "25. kata kadar güvenle ulaşabilen, eşyalarınızın merdiven hasarını sıfıra indiren dış cephe asansörlerimiz.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colSpan: "col-span-1",
  },
  {
    id: 3,
    title: "1. Sınıf Ambalajlama",
    desc: "Avrupa standartlarında, darbe emici balonlu naylon (patpat) ve kraft kağıtlarla kusursuz koruma.",
    img: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colSpan: "col-span-1",
  },
  {
    id: 4,
    title: "Uzman Kadro İş Başında",
    desc: "Taşeron değil, tamamı kendi bünyemizde sigortalı çalışan, mobilya montajında tecrübeli uzman ekibimiz.",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    colSpan: "md:col-span-2 lg:col-span-2",
  }
];

export default function FleetGallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Üst Başlık Kısmı */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light text-brand-accent font-semibold text-sm mb-6 border border-gray-200">
            <Camera size={16} />
            Sahadan Kareler
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark tracking-tight mb-4">
            Araç Filomuz ve Ekipmanlarımız
          </h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 font-light">
            Sözde değil özde kalite. Eşyalarınızı taşıdığımız araçları ve kullandığımız koruyucu materyalleri kendi gözlerinizle görün.
          </p>
        </div>

        {/* Galeri Grid Alanı */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 auto-rows-[300px]">
          {fleetImages.map((item) => (
            <div 
              key={item.id} 
              className={`relative rounded-2xl overflow-hidden group ${item.colSpan}`}
            >
              {/* Arka Plan Görseli */}
              <img 
                src={item.img} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Üzerine Gelince Çıkan Karanlık Katman (Overlay) */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>
              
              {/* Metin İçeriği */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}