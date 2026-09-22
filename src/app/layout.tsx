import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Bileşenlerimizi içeri aktarıyoruz
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Varen Lojistik | Güvenilir Şehir İçi ve Şehirler Arası Taşıma",
  description: "İstanbul şehir içi ve Türkiye geneli sigortalı, asansörlü, profesyonel evden eve nakliyat hizmeti. Hemen hızlı fiyat teklifi alın.",
  keywords: "evden eve nakliyat, istanbul nakliye, şehirler arası taşımacılık, asansörlü nakliyat, sigortalı taşıma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // Google için Yerel İşletme (Local Business) Schema Markup Kodu
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Varen Lojistik",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "description": "İstanbul merkezli asansörlü, sigortalı evden eve ve şehirler arası Varen Lojistik firması.",
    "telephone": "+90 542 180 46 60",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Atatürk Mah. Lojistik Cad. No:12",
      "addressLocality": "Ataşehir",
      "addressRegion": "İstanbul",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.9890466,
      "longitude": 29.1171092
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "₺₺"
  };

  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        {/* JSON-LD Script'i */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/* Navbar her sayfanın en üstünde sabit duracak */}
        <Navbar />
        
        {/* Main içine üstten padding veriyoruz ki sabit Navbar içeriklerin üstünü kapatmasın. */}
        <main className="pt-20 flex-grow">{children}</main>
        
        {/* Footer her sayfanın en altında duracak */}
        <Footer />

        {/* TÜM SAYFALARDA SAĞ ALTTA SABİT DURACAK WHATSAPP BUTONU */}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}