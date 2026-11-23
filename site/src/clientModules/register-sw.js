/**
 * Register the service worker that turns the site into an installable app.
 *
 * `static/sw.js` does the caching; this only registers it, and only in a
 * production build. In `docusaurus start` a service worker would sit in front of
 * the dev server and serve yesterday's HTML from cache, which looks like a
 * broken hot reload.
 *
 * This runs at module scope on purpose. Docusaurus dispatches `onRouteUpdate`
 * and `onRouteDidUpdate` to client modules but not `onClientEntry`, so an
 * exported `onClientEntry` would be imported and never called. A client module
 * is imported once when the client bundle boots, which is exactly the moment we
 * want.
 *
 * The browser's own rules decide when to install: a manifest with a name, icons,
 * a start_url and a service worker that handles navigations. Once those are all
 * present Chrome offers "Add to Home screen", and the app opens without an
 * address bar.
 */

const canRegister =
  typeof window !== 'undefined' &&
  process.env.NODE_ENV === 'production' &&
  'serviceWorker' in navigator &&
  // An iframe (a preview, an embed) must not claim a service worker scope.
  window.self === window.top;

let started = false;

function register() {
  if (started) return;
  started = true;

  navigator.serviceWorker.register('./sw.js').catch(() => {
    // Registration fails behind some proxies and in private windows. The site
    // works exactly as before without it, so this must never surface as an
    // error to the reader.
  });
}

if (canRegister) {
  if (document.readyState === 'complete') {
    register();
  } else {
    window.addEventListener('load', register, {once: true});
  }
}

export {};
