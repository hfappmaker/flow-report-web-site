import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  // LP の本番ドメイン。OG/Twitter カード等の絶対URL生成に使用される。
  site: 'https://about.flowreport.app',
  integrations: [tailwind({ applyBaseStyles: false })],
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  server: { host: true },
});
