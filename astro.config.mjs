import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false })],
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  server: { host: true },
});
