import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    react(),
    {
      name: 'font-preload',
      enforce: 'post',
      transformIndexHtml(html, ctx) {
        // Preload woff2 fonts to prevent CLS from font swapping
        if (ctx.bundle) {
          const fontLinks = Object.keys(ctx.bundle)
            .filter(name => name.endsWith('.woff2'))
            .map(name => `<link rel="preload" href="/${name}" as="font" type="font/woff2" crossorigin>`)
            .join('\n    ');
          if (fontLinks) {
            html = html.replace('<link rel="stylesheet"', fontLinks + '\n    <link rel="stylesheet"');
          }
        }
        return html;
      },
    },
  ],
  build: {
    target: 'es2020',
    rollupOptions: isSsrBuild ? {} : {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'react-vendor';
          }
        },
      },
    },
  },
  ssr: {
    target: 'webworker',
    noExternal: true,
  },
}))
