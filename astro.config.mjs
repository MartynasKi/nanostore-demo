import { defineConfig } from 'astro/config';
import alpine from '@astrojs/alpinejs';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import solid from '@astrojs/solid-js';
import svelte from '@astrojs/svelte';
import vue from '@astrojs/vue';

export default defineConfig({
  integrations: [
    alpine({ entrypoint: '/src/alpine.ts' }),
    preact({ include: ['**/preact/**'] }),
    react({ include: ['**/react/**'] }),
    solid({ include: ['**/solid/**'] }),
    svelte(),
    vue(),
  ],
});
