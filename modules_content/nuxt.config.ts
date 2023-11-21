import { resolve } from 'path';

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    '@': resolve(__dirname, './src'), // This is first way
    // assets: '/<rootDir>/assets', // This is second way
  },
  modules: ['@nuxt/content'],
  css: ['~/assets/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
