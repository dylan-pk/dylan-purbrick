import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  // Your GitHub Pages URL
  site: 'https://dylan-pk.github.io',
  // Your Repository Name
  base: '/dylan-purbrick', 
  vite: {
    plugins: [tailwind()],
  },
  integrations: [react()],
});