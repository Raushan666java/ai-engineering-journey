# Deployment & Repair Chat — Full session summary

**Date:** 2026-02-12
**Repository / Project:** karmabhoomi_v1 (Laravel + Vite + Inertia)
**Author:** GitHub Copilot

---

## 1) Short summary

This document captures the full troubleshooting session that restored the Laravel site build, repaired Vite issues, fixed phpMyAdmin routing, and resolved nginx/php-fpm binding problems so the site and phpMyAdmin are reachable.

Status at end of session:

- nginx is running and listening on port 80 ✅
- Laravel `public/build/manifest.json` produced (Vite build succeeded) ✅
- phpMyAdmin reachable at `/phpmyadmin/` (routing and PHP-FPM handling fixed) ✅
- PHP CLI switched to PHP 8.3; php8.3-fpm is running ✅
- Remaining: reviewed and mitigated "upstream sent too big header" by increasing fastcgi buffers and temporarily removing link-header middleware; consider re-enabling after optimizations ✅ (deferred)

---

## 2) Chronological highlights (what was done)

- Rebuilt server stack after OpenLiteSpeed removal → installed Nginx, php8.3-fpm, MariaDB, Redis.
- Cloned Laravel repo to `/var/www/html/karmabhoomi_v1`, ran `composer install`, migrations, APP_KEY setup.
- npm / Vite build initially failed due to server-only Inertia imports (Rollup pulled server code into client bundle).
  - Fixed `vite.config.js`: removed SSR entry from client input; aliased `@inertiajs/core` to client ESM and guarded server imports.
  - Re-ran `npm run build` — `public/build/manifest.json` created.
- phpMyAdmin 404 and document_root mismatch fixed by using `alias` and explicit `fastcgi_param SCRIPT_FILENAME` in nginx configuration.
- Fixed repeated "Primary script unknown" by correcting php location directives and file ownership.
- Increased nginx `fastcgi_buffers` and related sizes to mitigate "upstream sent too big header" errors.
- Detected very large `Link:` headers from Laravel middleware — temporarily removed `AddLinkHeadersForPreloadedAssets` in `app/Http/Kernel.php` to prevent oversized headers.
- Confirmed PHP-FPM environment via `phpinfo()` (pdo_mysql, mysqli, mysqlnd present).
- Found nginx was not binding to port 80 during parts of the session; restored/cleaned `/etc/nginx/sites-available/` to contain only `default`, wrote a correct `default` vhost, restarted nginx and verified port 80 listen and HTTP/200 responses.

---

## 3) Files changed (important)

- vite.config.js — prevented SSR/server modules from being bundled into client; added aliases and rollup externals for node built-ins.
- /etc/nginx/sites-available/default — cleaned/rewritten; added phpMyAdmin alias and proper PHP handling; increased FastCGI buffer sizes; ensured root -> `/var/www/html/karmabhoomi_v1/public`.
- app/Http/Kernel.php — temporarily removed `AddLinkHeadersForPreloadedAssets::class` from the `web` group.
- Created `/var/www/html/karmabhoomi_v1/public/phpinfo.php` (temporary) for FPM verification.

---

## 4) Commands & checks executed (key ones)

- npm / build
  - sudo -u www-data npm ci
  - sudo -u www-data npm run build
- PHP / Laravel
  - sudo -u www-data php8.3 artisan key:generate
  - sudo -u www-data php8.3 artisan migrate
  - sudo -u www-data php8.3 artisan optimize:clear
- nginx / system
  - sudo nginx -t
  - sudo systemctl restart nginx
  - sudo systemctl restart php8.3-fpm
- Diagnostics
  - curl -I http://127.0.0.1/
  - tail -f /var/log/nginx/multi-projects-error.log
  - phpinfo() page verification
  - ss -ltnp (confirm listening sockets)

---

## 5) Problems found and fixes applied

1. Vite build failing (Rollup pulled server.esm.js into client)
   - Fix: removed SSR entry from client input in `vite.config.js`, added alias for `@inertiajs/core` and guard aliases for server files.

2. phpMyAdmin 404 / 500 / Primary script unknown
   - Fix: used `location ^~ /phpmyadmin/ { alias /usr/share/phpmyadmin/; }` and `location ~ ^/phpmyadmin/(.+\.php)$` with explicit `fastcgi_param SCRIPT_FILENAME` and `fastcgi_pass unix:/run/php/php8.3-fpm.sock`.

3. "upstream sent too big header" (502) from nginx when Laravel emitted very large Link headers
   - Temporary Fix: increased `fastcgi_buffers`, `fastcgi_buffer_size` and `fastcgi_busy_buffers_size` in nginx; removed middleware that adds Link headers until preload headers are trimmed at the app level.

4. nginx not binding to port 80 intermittently
   - Fix: cleaned `/etc/nginx/sites-available/` to keep only `default`, restored a correct `default` vhost, reloaded nginx — port 80 now listens and returns HTTP/200.

5. PHP environment differences (CLI pointed to php8.5 while FPM was 8.3)
   - Action: switched CLI `php` alternative to php8.3 for consistency: `update-alternatives --set php /usr/bin/php8.3`.

---

## 6) Current endpoints (working)

- App root: http://72.62.229.38/ — returns HTTP/200
- phpMyAdmin: http://72.62.229.38/phpmyadmin/ — PHP/FPM handling fixed
- phpinfo (temporary): http://72.62.229.38/phpinfo.php

---

## 7) Remaining / recommended next steps

Priority:

1. Trim or limit asset Link headers (re-enable `AddLinkHeadersForPreloadedAssets` only after you reduce the number/size of preloads). I can implement a short-term reduction (limit preloads) or patch middleware to reduce header size.
2. Tail Laravel logs while exercising app flows and fix any application exceptions (DB connection or missing runtime config). Example: `tail -f storage/logs/laravel.log`.
3. Hardening: enable HTTPS (Let's Encrypt), add HTTP auth for phpMyAdmin or restrict by IP.
4. Optional cleanup: remove unused PHP packages (8.4/8.5) — perform stop/disable first, then purge only after confirm.

---

## 8) Quick reproduction / verification steps you can run

- Confirm site: curl -I http://72.62.229.38/
- Confirm phpMyAdmin: curl -I http://72.62.229.38/phpmyadmin/index.php
- Check FPM modules: access phpinfo.php or `sudo -u www-data php8.3 -i | egrep 'pdo|mysqli|mysqlnd'`
- View nginx errors: sudo tail -n 200 /var/log/nginx/multi-projects-error.log

---

## 9) Logs / notable error excerpts (captured during session)

- "Vite manifest not found" → solved by producing `public/build/manifest.json`.
- "Primary script unknown" in nginx — caused by incorrect `alias`/fastcgi SCRIPT_FILENAME mapping; fixed.
- "upstream sent too big header while reading response header from upstream" — mitigated by buffer increases and middleware change.

---

## 10) If you want me to continue now

Choose one or more:

- [ ] Re-enable and optimize Link header emission (reduce preloads)
- [ ] Remove unused PHP versions (stop/disable then purge)
- [ ] Enable HTTPS and secure phpMyAdmin
- [ ] Continue application-level fixes (DB migration, seed, runtime errors)

Reply with which actions to take and I'll proceed.

---

_End of document._


<!-- BUhmOTOiVkYt7X01b78Pnaqs2lmFWkO2 api key for migstral -->