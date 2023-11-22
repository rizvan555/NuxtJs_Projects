import { resolve } from 'path';

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    '@': resolve(__dirname, './src'), // This is first way
    // assets: '/<rootDir>/assets', // This is second way
  },
  modules: ['@pinia/nuxt'],
  css: ['~/assets/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  routeRules: {
    // Homepage pre-rendered at build time
    '/': { prerender: true },
  },
});
