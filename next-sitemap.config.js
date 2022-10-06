// @type {import('next-sitemap).IConfig} 
const config = {
  siteUrl: 'https://*****',
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions:{
    additionalSitemaps: ['https://*****/sitemap.xml'],
  },
  outDir: './out',
}

module.exports = config