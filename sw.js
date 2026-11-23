/*
 * AI Engineering Journey - service worker
 *
 * What the site needs to become an app:
 *
 *   - open instantly from the home screen, with no browser chrome
 *   - keep working on a train, in a hostel, anywhere without signal
 *   - search offline
 *
 * What it must NOT do: download 613 MB on install. The corpus is 1,422 pages of
 * ~321 KB each plus 146 MB of JS chunks, and a first visit that pulls all of it
 * is worse than no app at all. So nothing is precached except the shell, and
 * pages are cached as they are read.
 *
 * Strategies, by request type:
 *
 *   navigation     stale-while-revalidate. The reader gets the cached page in
 *                  the same tick, and the fresher copy is fetched in the
 *                  background for next time. A docs site updated daily does not
 *                  need network-first, and network-first makes every tap wait.
 *   /assets/       cache-first. Those filenames are content-hashed, so a hit is
 *                  never stale.
 *   search-index   cache-first, refreshed in the background. It is 20 MB, so it
 *                  is fetched on first search rather than on install.
 *   jsdelivr       cache-first. That is the KaTeX stylesheet and fonts; without
 *                  caching it, every formula loses its styling offline.
 *   everything     cache-first with a background refresh.
 *
 * Bump VERSION when the shell changes shape. Pages are revalidated on their own
 * and do not need a bump, but activate() deletes only caches whose name carries
 * an older version, so a bump is also the "clear everything" lever.
 */

const VERSION = 'v1';

const PAGE_CACHE = `pages-${VERSION}`;
const ASSET_CACHE = `assets-${VERSION}`;
const SEARCH_CACHE = `search-${VERSION}`;
const CDN_CACHE = `cdn-${VERSION}`;

const CACHES = [PAGE_CACHE, ASSET_CACHE, SEARCH_CACHE, CDN_CACHE];

const SCOPE = self.registration.scope; // .../ai-engineering-journey/
const OFFLINE_URL = `${SCOPE}offline.html`;

const SHELL = [
  SCOPE,
  OFFLINE_URL,
  `${SCOPE}manifest.json`,
  `${SCOPE}icons/icon-192.png`,
  `${SCOPE}icons/icon-512.png`,
  `${SCOPE}icons/icon-maskable-512.png`,
];

// Reading habits: a phone that has opened 400 chapters is a phone that has been
// used for months. Past that the oldest page is evicted rather than growing the
// cache forever.
const MAX_PAGES = 400;
const MAX_ASSETS = 800;
const MAX_CDN = 40;

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(PAGE_CACHE);
      // allSettled, not all: one missing icon must not abort the install and
      // leave the app permanently un-installable.
      await Promise.allSettled(SHELL.map((url) => cache.add(new Request(url, {cache: 'reload'}))));
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(names.filter((n) => !CACHES.includes(n)).map((n) => caches.delete(n)));
      await self.clients.claim();
    })(),
  );
});

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  if (url.origin !== self.location.origin) {
    // KaTeX ships from jsdelivr with an SRI hash. Caching it is what keeps
    // every formula typeset offline; the hash is checked at parse time, so a
    // tampered cache entry cannot be used.
    if (url.hostname === 'cdn.jsdelivr.net') {
      event.respondWith(cacheFirst(request, CDN_CACHE, MAX_CDN));
    }
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(handleNavigation(request));
    return;
  }

  if (url.pathname.endsWith('/search-index.json')) {
    event.respondWith(staleWhileRevalidate(request, SEARCH_CACHE));
    return;
  }

  if (url.pathname.includes('/assets/')) {
    event.respondWith(cacheFirst(request, ASSET_CACHE, MAX_ASSETS));
    return;
  }

  event.respondWith(staleWhileRevalidate(request, ASSET_CACHE, MAX_ASSETS));
});

/**
 * Docusaurus emits directory routes, and GitHub Pages redirects `/a/b` to
 * `/a/b/`. Caching both shapes stores the same page twice and makes offline
 * behaviour depend on which one was visited, so navigations are always keyed
 * with the trailing slash.
 */
function canonical(request) {
  const url = new URL(request.url);
  if (!url.pathname.endsWith('/') && !/\.[a-z0-9]+$/i.test(url.pathname)) {
    url.pathname += '/';
  }
  url.search = '';
  url.hash = '';
  return new Request(url.toString(), {method: 'GET'});
}

async function matchLoose(cache, request) {
  const direct = await cache.match(request);
  if (direct) return direct;

  const url = new URL(request.url);
  const toggled = new URL(url.toString());
  toggled.pathname = url.pathname.endsWith('/')
    ? url.pathname.replace(/\/+$/, '')
    : `${url.pathname}/`;
  return cache.match(toggled.toString());
}

async function handleNavigation(request) {
  const cache = await caches.open(PAGE_CACHE);
  const key = canonical(request);
  const cached = await matchLoose(cache, key);

  // Kick the refresh off regardless; it must never block the response.
  const refresh = fetch(request)
    .then(async (response) => {
      // 404 and 500 must not be cached: a bad deploy would otherwise be pinned
      // onto every device that was online during it.
      if (response && response.ok) {
        await cache.put(key, response.clone());
        await trim(PAGE_CACHE, MAX_PAGES);
      }
      return response;
    })
    .catch(() => null);

  if (cached) {
    void refresh;
    return cached;
  }

  const fresh = await refresh;
  if (fresh) return fresh;

  const offline = await caches.match(OFFLINE_URL);
  if (offline) return offline;

  return new Response('You are offline and this chapter has not been opened yet.', {
    status: 503,
    headers: {'Content-Type': 'text/plain; charset=utf-8'},
  });
}

async function cacheFirst(request, cacheName, limit) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response && response.ok) {
      await cache.put(request, response.clone());
      if (limit) await trim(cacheName, limit);
    }
    return response;
  } catch (error) {
    return new Response('', {status: 504, statusText: 'Offline'});
  }
}

async function staleWhileRevalidate(request, cacheName, limit) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);

  const refresh = fetch(request)
    .then(async (response) => {
      if (response && response.ok) {
        await cache.put(request, response.clone());
        if (limit) await trim(cacheName, limit);
      }
      return response;
    })
    .catch(() => null);

  if (cached) {
    void refresh;
    return cached;
  }

  const fresh = await refresh;
  return fresh || new Response('', {status: 504, statusText: 'Offline'});
}

/** Drop the oldest entries once a cache passes `limit`. */
async function trim(cacheName, limit) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length <= limit) return;
  // Cache keys come back in insertion order, so the head is the oldest.
  const excess = keys.length - limit;
  for (let i = 0; i < excess; i++) await cache.delete(keys[i]);
}
