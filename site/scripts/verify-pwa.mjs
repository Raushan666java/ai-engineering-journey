/**
 * Assert the installable-app surface, on the built tree or on the live site.
 *
 *   node scripts/verify-pwa.mjs          # build/
 *   node scripts/verify-pwa.mjs --live   # https://raushan666java.github.io/ai-engineering-journey
 *
 * An "installable" app fails silently in all the interesting ways: a manifest
 * that parses but declares no 512px icon, a service worker that registers but
 * never handles a navigation, a scope that leaves the start_url outside the
 * app. None of those throw. Each one is checked here by name.
 */
import fs from 'node:fs';
import path from 'node:path';

const LIVE = process.argv.includes('--live');
const BASE = 'https://raushan666java.github.io/ai-engineering-journey/';

const checks = [];
const ok = (name, pass, detail = '') => checks.push([name, pass, detail]);

async function load(rel) {
  if (!LIVE) {
    const p = path.join('build', rel);
    if (!fs.existsSync(p)) return null;
    return {text: fs.readFileSync(p, 'utf8'), bytes: fs.readFileSync(p)};
  }
  const res = await fetch(new URL(rel, BASE));
  if (!res.ok) return null;
  const buf = Buffer.from(await res.arrayBuffer());
  return {text: buf.toString('utf8'), bytes: buf, status: res.status, type: res.headers.get('content-type')};
}

// --- manifest -------------------------------------------------------------

const manifestRaw = await load('manifest.json');
ok('manifest is served', Boolean(manifestRaw), LIVE ? mb(manifestRaw) : 'build/manifest.json');

let manifest = null;
try {
  manifest = JSON.parse(manifestRaw.text);
} catch {
  /* reported below */
}
ok('manifest is valid JSON', Boolean(manifest), manifest ? '' : 'unparseable');

if (manifest) {
  ok('manifest has a name', /^[A-Za-z]/.test(manifest.name || ''), manifest.name || '(empty)');
  ok('manifest has a short_name', (manifest.short_name || '').length > 0 && (manifest.short_name || '').length <= 12, `${manifest.short_name || '(missing)'} (${(manifest.short_name || '').length} chars, max 12 for a launcher)`);
  ok('manifest declares standalone display', ['standalone', 'fullscreen', 'minimal-ui'].includes(manifest.display), manifest.display);
  ok('manifest declares theme_color', /^#[0-9a-f]{6}$/i.test(manifest.theme_color || ''), manifest.theme_color);
  ok('manifest declares background_color', /^#[0-9a-f]{6}$/i.test(manifest.background_color || ''), manifest.background_color);

  // Chrome will not offer install without a 512px icon, and an Android launcher
  // crops a non-maskable one into a star shape, so both are required.
  const sizes = (manifest.icons || []).map((i) => i.sizes);
  const purposes = (manifest.icons || []).map((i) => i.purpose || 'any');
  ok('manifest has a 192px icon', sizes.includes('192x192'), sizes.join(', '));
  ok('manifest has a 512px icon', sizes.includes('512x512'), '');
  ok('manifest has a maskable icon', purposes.some((p) => p.includes('maskable')), purposes.join(', '));

  const scopeUrl = new URL(manifest.scope, BASE);
  const startUrl = new URL(manifest.start_url, BASE);
  ok('start_url is inside scope', startUrl.href.startsWith(scopeUrl.href), `${startUrl.pathname} within ${scopeUrl.pathname}`);
  ok('start_url loads the site root', startUrl.pathname === scopeUrl.pathname, startUrl.pathname);

  for (const icon of manifest.icons || []) {
    const file = await load(icon.src);
    const isPng = file && file.bytes[0] === 0x89 && file.bytes.slice(1, 4).toString('ascii') === 'PNG';
    ok(`icon ${icon.src} is a real PNG`, Boolean(isPng), file ? `${(file.bytes.length / 1024).toFixed(1)} KB` : 'missing');
  }
}

// --- service worker -------------------------------------------------------

const sw = await load('sw.js');
ok('service worker is served', Boolean(sw), sw ? `${(sw.bytes.length / 1024).toFixed(1)} KB` : 'missing');

if (sw) {
  ok('service worker handles install', /addEventListener\(\s*['"]install['"]/.test(sw.text), '');
  ok('service worker handles activate', /addEventListener\(\s*['"]activate['"]/.test(sw.text), '');
  ok('service worker handles fetch', /addEventListener\(\s*['"]fetch['"]/.test(sw.text), '');
  // The whole point of the app: a navigation that misses the cache has to land
  // on the offline page rather than the browser's dinosaur.
  ok('service worker falls back to an offline page', /offline\.html/.test(sw.text), '');
  ok('service worker does not precache the whole corpus', !/MAX_PAGES\s*=\s*\d{4,}/.test(sw.text), (/(MAX_PAGES\s*=\s*\d+)/.exec(sw.text) || [])[1] || 'no cap');
}

const offline = await load('offline.html');
ok('offline page exists', Boolean(offline), offline ? `${(offline.text.length / 1024).toFixed(1)} KB` : 'missing');
if (offline) {
  ok('offline page is self-contained', !/<link[^>]+stylesheet[^>]+href=["']https?:/.test(offline.text), 'no external stylesheet to fetch while offline');
  ok('offline page has a way back', /href="\.\/"/.test(offline.text), 'links to the site root');
}

// --- the page that registers it ------------------------------------------

const home = await load('index.html');
ok('home page loads', Boolean(home), LIVE ? `HTTP ${home?.status}` : 'build/index.html');
if (home) {
  ok('home page links the manifest', /rel=["']manifest["']/.test(home.text), (/(<link[^>]+manifest[^>]*>)/.exec(home.text) || [])[1] || '');
  ok('home page declares an apple touch icon', /rel=["']apple-touch-icon["']/.test(home.text), '');
  ok('home page declares a theme color', /name=["']theme-color["']/.test(home.text), '');
}

if (!LIVE) {
  // The registration lives in a client module, so the only proof it was bundled
  // is the string in an emitted chunk.
  const dir = 'build/assets/js';
  let found = 0;
  if (fs.existsSync(dir)) {
    for (const f of fs.readdirSync(dir)) {
      if (!f.endsWith('.js')) continue;
      if (fs.readFileSync(path.join(dir, f), 'utf8').includes('serviceWorker')) found++;
    }
  }
  ok('service-worker registration was bundled', found > 0, `${found} chunk(s)`);
}

function mb(x) {
  return x ? `HTTP ${x.status}, ${(x.bytes.length / 1024).toFixed(1)} KB, ${x.type}` : 'missing';
}

let failed = 0;
for (const [name, pass, detail] of checks) {
  if (!pass) failed++;
  console.log(`${pass ? 'PASS' : 'FAIL'}  ${name.padEnd(44)} ${detail}`);
}
console.log(`\n${failed === 0 ? 'ALL PWA CHECKS PASSED' : `${failed} CHECK(S) FAILED`}`);
process.exit(failed === 0 ? 0 : 1);
