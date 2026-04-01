// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
// https://astro.build/config
export default defineConfig({
  site: 'https://chinawebfoundry.com',
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: [],
  },
});
