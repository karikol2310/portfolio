import { render } from './dist/server/entry-server.js';

const BOT_UA = /googlebot|bingbot|yandexbot|duckduckbot|slurp|baiduspider|facebookexternalhit|twitterbot|rogerbot|linkedinbot|embedly|quora link preview|showyoubot|outbrain|pinterest|applebot|semrushbot|ahrefsbot|mj12bot|ia_archiver|google-inspectiontool|chrome-lighthouse/i;

function isBot(ua) {
  return BOT_UA.test(ua || '');
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const ua = request.headers.get('user-agent') || '';

    // Serve static assets directly
    if (url.pathname.startsWith('/assets/') ||
        /\.(js|css|woff2|woff|png|svg|xml|txt|json|ico)$/.test(url.pathname)) {
      return env.ASSETS.fetch(request);
    }

    // Bot request → SSR
    if (isBot(ua)) {
      const indexRes = await env.ASSETS.fetch(new Request(new URL('/index.html', request.url)));
      let html = await indexRes.text();

      const appHtml = render();

      // Replace the root div contents with SSR HTML and add hydration marker
      html = html.replace(
        /(<div id="root")>([\s\S]*?)(<\/div>\s*<\/body>)/,
        `$1 data-ssr>${appHtml}$3`
      );

      return new Response(html, {
        headers: {
          'content-type': 'text/html;charset=UTF-8',
          'cache-control': 'public, max-age=600',
          'x-render-mode': 'ssr',
        },
      });
    }

    // Regular user → CSR (serve static SPA)
    // Rewrite non-asset paths to /index.html for SPA routing
    const assetUrl = new URL('/index.html', request.url);
    return env.ASSETS.fetch(new Request(assetUrl, request));
  },
};
