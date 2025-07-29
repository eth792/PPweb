import { MetadataRoute } from 'next';
import { getPlugins } from '@/lib/plugins';
import { locales } from '@/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ppweb.example.com';
  const plugins = getPlugins();
  
  const routes: MetadataRoute.Sitemap = [];
  
  // Home pages for each locale
  for (const locale of locales) {
    routes.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    });
  }
  
  // Plugin pages for each locale
  for (const locale of locales) {
    for (const plugin of plugins) {
      routes.push({
        url: `${baseUrl}/${locale}/${plugin.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    }
  }
  
  return routes;
}