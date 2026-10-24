import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // LP の本番ドメイン。OG/Twitter カード等の絶対URL生成に使用される。
  site: 'https://about.flowreport.app',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  server: { host: true },
});
