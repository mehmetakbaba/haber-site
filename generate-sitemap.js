const SitemapGenerator = require('sitemap-generator');

// Burada kendi site URL'ini veriyorsun
const generator = SitemapGenerator('https://newssway.com', {
  stripQuerystring: false, // Query parametreleri silinsin mi?
  filepath: 'C:/Users/Mehmet/OneDrive/Masaüstü/haber-site/public/sitemap.xml', // Kaydedilecek yer
  maxDepth: 0, // 0 = sonsuz derinlik (her şeyi tarar)
});

// Olaylar
generator.on('done', () => {
  console.log('Sitemap başarıyla oluşturuldu! 🎉');
});

// Başlat
generator.start();
