const SitemapGenerator = require('sitemap-generator');

try {
  const generator = SitemapGenerator('https://newssway.com', {
    stripQuerystring: false,
    filepath: './public/sitemap.xml', 
    maxDepth: 0,
  });

  generator.on('done', () => {
    console.log('Sitemap başarıyla oluşturuldu! 🎉');
  });

  generator.start();
} catch (error) {
  console.error('Bir hata oluştu:', error);
}
