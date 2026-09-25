import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://varenlojistik.com'

  return {
    rules: [
      {
        // 1. GENEL ARAMA MOTORU BOTLARI (Google, Bing, Yandex vb.)
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',             // API uç noktaları arama sonuçlarında çıkmasın
          '/_next/',           // Next.js sistem ve build dosyalarını gizle
          '/admin/',           // Güvenlik için yönetici rotalarını engelle (ileride eklersen diye)
          '/test/',            // Geliştirme aşamasındaki sayfalar taranmasın
          '/*?*',              // URL parametreleri içeren sayfaları (örneğin filtreleme sorguları) engelle (Kopya içerik cezasını önler)
        ],
      },
      {
        // 2. GOOGLEBOT'A ÖZEL İZİNLER (Opsiyonel ama SEO için profesyonel bir dokunuş)
        userAgent: 'Googlebot',
        allow: '/',
        // Google'ın görsel arama botları logoları ve tır görsellerini rahatça tarasın
        disallow: ['/api/'], 
      },
      // 3. İSTENMEYEN VEYA ZARARLI BOTLARI ENGELLEME (Opsiyonel)
      // Sitenin sunucu kaynaklarını sömüren analiz botlarını engellemek istersen aktif edebilirsin:
      /*
      {
        userAgent: ['AhrefsBot', 'SemrushBot', 'MJ12bot', 'DotBot'],
        disallow: '/',
      }
      */
    ],
    // Botlara haritanın tam adresini net bir şekilde veriyoruz
    sitemap: `${baseUrl}/sitemap.xml`,
    
    // Yandex ve diğer bazı arama motorları için ana domaini kesinleştiriyoruz
    host: baseUrl,
  }
}