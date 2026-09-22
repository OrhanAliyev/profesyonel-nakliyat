import Link from "next/link";
import { Home, Map, ArrowUpSquare, Briefcase, Package, ShieldCheck, ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Evden Eve Nakliyat",
    description: "Eşyalarınızı özenle paketliyor, yeni evinize sıfır hasar garantisi ve profesyonel ekibimizle taşıyoruz.",
    icon: <Home className="w-10 h-10 text-brand-accent" strokeWidth={1.5} />,
    href: "/hizmetler/evden-eve-nakliyat", // Yaptığımız sayfaya gider
  },
  {
    id: 2,
    title: "Şehirler Arası Taşıma",
    description: "Türkiye'nin 81 iline, geniş ve kapalı çelik kasa araç filomuzla zamanında ve güvenli teslimat sağlıyoruz.",
    icon: <Map className="w-10 h-10 text-brand-accent" strokeWidth={1.5} />,
    href: "/hizmetler/sehirler-arasi-tasima", // Birazdan yapacağımız sayfa
  },
  {
    id: 3,
    title: "Asansörlü Nakliyat",
    description: "Yüksek katlı binalarda eşyalarınızın merdivenlerde hasar görmemesi için dış cephe asansör sistemleri kullanıyoruz.",
    icon: <ArrowUpSquare className="w-10 h-10 text-brand-accent" strokeWidth={1.5} />,
    href: "/hizmetler/asansorlu-nakliyat", // Birazdan yapacağımız sayfa
  },
  {
    id: 4,
    title: "Ofis ve İş Yeri Taşıma",
    description: "İş akışınızın aksamaması için hafta sonu veya gece operasyonlarıyla ofis malzemelerinizi güvenle taşıyoruz.",
    icon: <Briefcase className="w-10 h-10 text-brand-accent" strokeWidth={1.5} />,
    href: "/hizmetler/ofis-tasima", // Birazdan yapacağımız sayfa
  },
  {
    id: 5,
    title: "Eşya Depolama",
    description: "Fazla eşyalarınız için 7/24 güvenlik kameralı, rutubetsiz ve kişiye özel kilitli depo alanları sunuyoruz.",
    icon: <Package className="w-10 h-10 text-brand-accent" strokeWidth={1.5} />,
    href: "/hizmetler/esya-depolama", // Birazdan yapacağımız sayfa
  },
  {
    id: 6,
    title: "Sigortalı Taşımacılık",
    description: "Tüm eşyalarınız taşıma süreci boyunca geniş kapsamlı nakliyat sigortası ile güvence altındadır.",
    icon: <ShieldCheck className="w-10 h-10 text-brand-accent" strokeWidth={1.5} />,
    href: "/hizmetler/sigortali-tasimacilik", // Birazdan yapacağımız sayfa
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark tracking-tight mb-4">
            Profesyonel Hizmetlerimiz
          </h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 font-light">
            Müşteri memnuniyeti odaklı, modern ekipmanlar ve uzman kadromuzla sunduğumuz lojistik çözümler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-default flex flex-col"
            >
              <div className="mb-6 p-4 bg-gray-50 rounded-lg inline-block self-start group-hover:bg-orange-50 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              
              {/* Burayı gerçek bir Link'e çevirdik */}
              <Link href={service.href} className="text-brand-accent font-semibold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:text-brand-accent-hover transition-colors w-max">
                Detaylı Bilgi
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}