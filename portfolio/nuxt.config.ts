import { defineNuxtConfig } from 'nuxt/config';
import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    // modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/fonts'],
    modules: ['@nuxt/eslint', '@nuxt/image'],
    vite: {
        plugins: [tailwindcss() as any],
    },
    css: ['~/assets/css/main.css'],
});
