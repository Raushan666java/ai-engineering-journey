# AITO Integration & Registration Form Tutorial ✅

This document explains how the AITO India location API was integrated into the application, which files were changed, how the proxy + fallback works, the frontend changes to the register form, validation rules, and how to test/troubleshoot.

---

## 🎯 Goal

Provide location lookups (states, districts, blocks, panchayats) using AITO API while keeping the API key & requests server-side, caching results, and providing a resilient fallback for endpoint variations.

---

## 🔧 Files changed / created

- `app/Http/Controllers/Api/LocationController.php` — server-side proxy, caching, fallback logic and logging
- `routes/api.php` — added routes:
    - `GET /api/locations/states/{country}`
    - `GET /api/locations/districts/{state}`
    - `GET /api/locations/blocks/{district}`
    - `GET /api/locations/panchayats/{block}`
- `resources/views/auth/register.blade.php` — frontend form + JS that calls proxy endpoints and supports manual entry
- `resources/views/components/location/selects.blade.php` — select inputs and manual toggles
- `resources/views/components/scripts/location-scripts.blade.php` — legacy scripts (kept for backward compatibility)
- `app/Http/Requests/RegisterUserRequest.php` — validation (requires select or manual entry for block/panchayat)
- `.env` — `AITO_BASE_URL` updated/added

---

## 1) Configuration & env

1. Add AITO settings to `.env` (or verify existing):

AITO_BASE_URL=https://aitoindia.org
AITO_API_KEY=your_api_key_if_required

2. `config/services.php` includes:

```php
'aito' => [
  'base_url' => env('AITO_BASE_URL', 'https://aitoindia.org'),
  'key' => env('AITO_API_KEY', null),
],
```

3. After changes: run

```bash
php artisan config:clear && php artisan cache:clear && php artisan route:clear
```

---

## 2) Server-side proxy (LocationController)

Main principles:

- Always call AITO from the server (prevents CORS and exposes API key only to server).
- Cache responses (default TTL 3600s) to reduce requests.
- If cached value is an empty array, perform one live fetch to refresh it (avoids stale empty cache).
- Support `?nocache=1` for debugging/forced live fetch.
- If the first request returns 404, attempt a fallback path (strip `get-` prefix and try `api/locations/...`).
- Log success/warnings to `storage/logs/laravel.log`.

Key behavior:

- `request($path, $query, $cacheSeconds)` handles fetch, fallback, caching and logs.
- `normalizeList(...)` standardizes different response shapes to `[ {id, name}, ...]`.

---

## 3) Routes

Add to `routes/api.php`:

```php
Route::get('locations/states/{country}', [LocationController::class, 'states']);
Route::get('locations/districts/{state}', [LocationController::class, 'districts']);
Route::get('locations/blocks/{district}', [LocationController::class, 'blocks']);
Route::get('locations/panchayats/{block}', [LocationController::class, 'panchayats']);
```

---

## 4) Frontend changes (Register form)

- Blade adds `const BASE_URL = "{{ url('') }}";` so requests respect the application subfolder.
- JS helper `populate(selectId, data, placeholder)` populates selects and shows manual inputs when results are empty.
- Manual entry toggles for block & panchayat (`#block-manual-toggle` / `#panchayat-manual-toggle`) and corresponding inputs `block_manual`, `panchayat_manual`.
- Auto-load India states on page load using `INDIA_ID` from server-rendered `countries` collection.

Example usage:

```js
$.get(`${BASE_URL}/api/locations/states/${countryId}`, function(data) { ... });
```

---

## 5) Validation & Backend registration

`RegisterUserRequest` enforces:

- Either `block` or `block_manual` is required (via `required_without`), likewise `panchayat` or `panchayat_manual`.
- Standard rules for email, password, file uploads, and date of birth.

`RegisteredUserController@store`:

- Validates request using `RegisterUserRequest`
- Safely handles `profile_picture` upload with `store('uploads','public')`
- Resolves `block`/`panchayat` to names: prefer manual entries if present, otherwise fetch name by id from DB models
- Creates user and logs them in

---

## 6) Testing instructions (manual)

1. Verify direct AITO endpoint works:

```bash
curl -i https://aitoindia.org/get-states/1
```

2. Verify proxy endpoint (force live fetch):

```bash
curl -i "http://localhost/jyoti_credit_foundation/api/locations/states/1?nocache=1"
```

3. Verify cached path returns the same list without `?nocache=1`
4. Test form flow:
    - Open: http://localhost/jyoti_credit_foundation/register
    - Confirm states/districts/blocks load
    - Test manual toggle when blocks/panchayats are empty
    - Submit and verify the created user and saved block/panchayat values

---

## 7) Troubleshooting & common issues

- 404 from `http://localhost/api/...` → missing app subfolder. Use `BASE_URL = "{{ url('') }}"` or call `/jyoti_credit_foundation/api/...` in dev.
- Empty result from proxy: check cache key via tinker: `cache()->get('aito:get-states/1:')` — Controller will refresh an empty cached value once.
- Logs: check `storage/logs/laravel.log` for `AITO request failed` and `AITO fallback attempt` messages.
- Network: validate server can reach `https://aitoindia.org` (use `curl` from server).

---

## 8) Next improvements / recommendations

- Add automated feature tests for the registration flow (cover select & manual entries). I can create tests that mock HTTP calls with `Http::fake()`.
- Add middleware or headers indicating 'X-Cache-Status' for debugging production caching behavior.
- Add rate-limit or exponential backoff if AITO returns 429 frequently.

---

If you'd like, I can add a `docs/` page for each of: (1) Controller tests, (2) Frontend integration, (3) Example feature tests. Tell me which one to author next.
