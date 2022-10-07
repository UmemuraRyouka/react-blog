// @type {import('next-sitemap).IConfig} 
const config = {
  siteUrl: 'https://*****',
  exclude: ['/server-sitemap.xml'],     // server-sitemap.xmlを静的なサイトマップに含めないように指定。
  robotsTxtOptions:{
    // server-sitemap.xmlをサイトマップのインデックスに追加するように指定
    additionalSitemaps: ['https://*****/sitemap.xml'],
  },
  outDir: './out',
}

module.exports = config