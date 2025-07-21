import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        UnoCSS(),
    ],
});
