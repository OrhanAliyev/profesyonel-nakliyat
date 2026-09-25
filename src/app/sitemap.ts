import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://varenlojistik.com'
  
  // Google'a her zaman en taze tarihi vererek "site sürekli güncel" sinyali gönderiyoruz
  const currentDate = new Date().toISOString()

  // 1. STATİK VE STRATEJİK SAYFALAR (SEO Hiyerarşisi)
  const staticPages = [
    // Ana Sayfa: En yüksek öncelik. Her gün taranması istenir.
    { url: '', priority: 1.0, changeFrequency: 'daily' as const },
    
    // Ana Hizmetler: Şirketin para kazandıran sayfaları. Yüksek öncelik.
    { url: '/hizmetlerimiz', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/sektorel-cozumler', priority: 0.9, changeFrequency: 'weekly' as const },
    
    // Blog Ana Dizini: Yeni yazılar ekleneceği için sık taranması gerekir.
    { url: '/blog', priority: 0.9, changeFrequency: 'daily' as const },
    
    // Kurumsal Kimlik: Güvenilirlik için önemli ama içeriği az değişir.
    { url: '/kurumsal', priority: 0.8, changeFrequency: 'monthly' as const },
    
    // İletişim: Standart sayfa, en düşük öncelikli statik sayfa.
    { url: '/iletisim', priority: 0.7, changeFrequency: 'yearly' as const },
  ]

  const staticRoutes: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: currentDate,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))

  // 2. DİNAMİK BLOG SAYFALARI (İçerik Pazarlaması)
  let dynamicRoutes: MetadataRoute.Sitemap = []
  
  try {
    // BURAYA KENDİ VERİTABANI/API ÇAĞRINI YAZACAKSIN
    // const posts = await fetch('https://api.seninsiten.com/posts').then(res => res.json())
    
    // Şimdilik örnek veri (Veritabanı bağlandığında burayı dinamik hale getir)
    const posts: Array<{ slug: string; updatedAt?: string }> = [
      // { slug: 'lojistik-sektorunde-dijitallesme', updatedAt: '2026-09-20' },
      // { slug: 'istanbul-ankara-tasimacilik', updatedAt: '2026-09-22' }
    ]

    dynamicRoutes = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      // Yazının gerçek güncellenme tarihi varsa onu ver, yoksa bugünü kullan
      lastModified: post.updatedAt ? new Date(post.updatedAt).toISOString() : currentDate,
      // Blog yazıları yayınlandıktan sonra çok sık değişmez, haftalık tarama yeterlidir
      changeFrequency: 'weekly' as const,
      // Alt sayfalar Google algoritmasında genelde 0.6 - 0.7 bandında tutulur
      priority: 0.7, 
    }))
  } catch (error) {
    console.error('Sitemap dinamik rotaları oluşturulurken hata:', error)
  }

  // Bütün haritayı birleştirip Google botlarına teslim ediyoruz
  return [...staticRoutes, ...dynamicRoutes]
}