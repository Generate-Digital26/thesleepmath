import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://thesleepmath.com',
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.7,
      serialize: (item) => {
        // Homepage gets highest priority
        if (item.url === 'https://thesleepmath.com/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        }
        // Calculator pages get high priority
        else if (item.url.includes('calculator') || item.url.includes('quiz')) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        }
        // Core pages
        else if (item.url.includes('/about') || item.url.includes('/privacy')) {
          item.priority = 0.5;
          item.changefreq = 'yearly';
        }
        // Stub pages get lower priority
        else if (item.url.includes('/guides') || item.url.includes('/blog')) {
          item.priority = 0.3;
          item.changefreq = 'weekly';
        }
        return item;
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
