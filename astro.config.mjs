// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://dave-blog.pages.dev',
	integrations: [sitemap()],
});
