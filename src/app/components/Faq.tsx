"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Eşyalarım taşıma sırasında sigortalanıyor mu?",
    answer: "Evet, tüm taşıma süreci boyunca eşyalarınız geniş kapsamlı nakliyat sigortası ile güvence altındadır. Olası bir kaza durumunda zararınız poliçe kapsamında eksiksiz karşılanır."
  },
  {
    question: "Paketleme ve ambalajlama işlemini siz mi yapıyorsunuz?",
    answer: "Tüm mobilyalarınız, beyaz eşyalarınız ve kırılacak eşyalarınız uzman ekibimiz tarafından darbe emici özel malzemelerle (patpat, havalı naylon, kraft kağıt) paketlenir. Sizin hiçbir şeye dokunmanıza gerek kalmaz."
  },
  {
    question: "Asansörlü taşıma her binaya kurulabiliyor mu?",
    answer: "Asansör kurulumu için binanızın dış cephesi, balkon durumu ve sokağın genişliği önemlidir. Ücretsiz ekspertiz ekibimiz taşınma öncesi gelerek binanızın uygunluğunu kontrol eder ve planlamayı yapar."
  },
  {
    question: "Şehirler arası taşınma süreci kaç gün sürüyor?",
    answer: "İller arası mesafeye bağlı olarak değişmekle birlikte, özel çelik kasa araçlarımızla eşyalarınız yüklendikten sonraki 24 ile 48 saat içerisinde yeni adresinize teslim edilir ve kurulumları tamamlanır."
  },
  {
    question: "Mobilyaların söküm ve kurulum işlemleri fiyata dahil mi?",
    answer: "Evet; gardırop, TV ünitesi, yemek masası ve yatak gibi mobilyalarınızın demontajı (sökülmesi) ve yeni evinizde istediğiniz odalara tekrar montajı uzman marangozlarımız tarafından ücretsiz yapılmaktadır."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // İlk soru varsayılan olarak açık gelsin

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Sol Taraf - Başlık ve İletişim Yönlendirmesi */}
          <div className="lg:w-1/3 sticky top-32">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-brand-accent font-semibold text-sm mb-6 border border-orange-100">
              <HelpCircle size={16} />
              Aklınıza Takılanlar
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight mb-6">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-gray-600 font-light leading-relaxed mb-8">
              Taşınma süreciyle ilgili en çok merak edilen soruları sizin için derledik. Farklı bir sorunuz varsa bizimle anında iletişime geçebilirsiniz.
            </p>
            <Link href="/#iletisim" className="inline-flex items-center gap-2 text-brand-accent font-bold hover:text-brand-accent-hover transition-colors">
              <MessageCircle size={20} />
              WhatsApp'tan Soru Sor
            </Link>
          </div>

          {/* Sağ Taraf - Akordiyon Soru Listesi */}
          <div className="lg:w-2/3 w-full space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                  openIndex === index 
                    ? "bg-white border-brand-accent shadow-md" 
                    : "bg-white border-gray-200 hover:border-gray-300 shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`font-semibold text-lg pr-8 ${openIndex === index ? "text-brand-accent" : "text-brand-dark"}`}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-6 h-6 shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-brand-accent" : "text-gray-400"}`} 
                  />
                </button>
                
                {/* Cevap İçeriği (Yumuşak Açılma Efekti) */}
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 text-gray-600 font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}