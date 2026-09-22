"use client";

import { useState } from "react";
import { Camera, Maximize2, X } from "lucide-react";
import Reveal from "./Reveal";

// İleride kendi depo, araç ve operasyon fotoğraflarınızı buraya ekleyeceksiniz
const galleryImages = [
  "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611514468491-c529e71b56fb?q=80&w=1200&auto=format&fit=crop",
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <Reveal direction="up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-brand-accent font-semibold text-sm mb-6 border border-orange-100">
            <Camera size={18} /> Sahadan Kareler
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight mb-6">
            Operasyon <span className="text-brand-accent">Galerisi</span>
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Geniş araç filomuz, profesyonel paketleme süreçlerimiz ve başarıyla tamamladığımız operasyonlardan kesitler.
          </p>
        </Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <Reveal key={index} direction="up" delay={index * 0.1}>
              <div 
                className="group relative w-full h-64 md:h-80 rounded-[2rem] overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
                onClick={() => setSelectedImage(src)}
              >
                <img 
                  src={src} 
                  alt={`Varen Lojistik Galeri ${index + 1}`} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-brand-accent text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    <Maximize2 size={24} />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox (Tam Ekran Büyütme) */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Büyütülmüş Görsel" 
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}