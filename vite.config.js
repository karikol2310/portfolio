import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'async-css',
      enforce: 'post',
      transformIndexHtml(html) {
        return html.replace(
          /(<link rel="stylesheet"[^>]*)(>)/g,
          '$1 media="print" onload="this.media=\'all\'"$2<noscript>$1$2</noscript>'
        );
      },
    },
  ],
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'react-vendor';
          }
        },
      },
    },
  },
})
