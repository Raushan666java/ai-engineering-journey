/**
 * The dashboard is a single self-contained page: no build step, no framework,
 * no network calls except back to this server.
 */
export function dashboardHtml(token: string): string {
  const safeToken = token.replace(/[^A-Za-z0-9_-]/g, '');
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>PhoneBridge</title>
<style>
  :root {
    --ink: #1a1b23;
    --ink-soft: #4a4b52;
    --accent: #4446e8;
    --tint: #eef0ff;
    --line: #d0d2e6;
    --muted: #6a6b78;
    --bg: #f6f7fb;
  }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    font-family: Inter, -apple-system, "Segoe UI", system-ui, sans-serif;
    background: var(--bg);
    color: var(--ink);
    min-height: 100vh;
  }
  header {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 14px 20px;
    background: #fff;
    border-bottom: 1px solid var(--line);
    position: sticky;
    top: 0;
    z-index: 10;
  }
  .brand { font-weight: 700; letter-spacing: -0.02em; font-size: 18px; }
  .brand span { color: var(--accent); }
  #meta { color: var(--muted); font-size: 13px; font-family: "JetBrains Mono", ui-monospace, monospace; }
  .spacer { flex: 1; }
  .status { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--muted); }
  .dot { width: 8px; height: 8px; border-radius: 50%; background: #22c55e; }
  .dot.off { background: #ef4444; }
  main {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 320px;
    gap: 20px;
    padding: 20px;
    align-items: start;
    max-width: 1400px;
    margin: 0 auto;
  }
  @media (max-width: 900px) { main { grid-template-columns: 1fr; } }
  .screen-card {
    background: #fff;
    border: 1px solid var(--line);
    border-radius: 14px;
    padding: 14px;
    display: flex;
    justify-content: center;
  }
  #screen {
    max-height: 78vh;
    max-width: 100%;
    border-radius: 10px;
    border: 1px solid var(--line);
    cursor: crosshair;
    touch-action: none;
    background: #000;
  }
  aside {
    background: #fff;
    border: 1px solid var(--line);
    border-radius: 14px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  h2 {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.09em;
    color: var(--muted);
    margin: 0 0 8px;
  }
  .row { display: flex; gap: 8px; flex-wrap: wrap; }
  button {
    flex: 1 1 auto;
    min-width: 72px;
    padding: 10px 12px;
    border-radius: 9px;
    border: 1px solid var(--line);
    background: #fff;
    color: var(--ink);
    font: inherit;
    font-size: 13px;
    cursor: pointer;
    transition: background 0.12s, border-color 0.12s;
  }
  button:hover { background: var(--tint); border-color: var(--accent); }
  button:active { transform: translateY(1px); }
  button.primary { background: var(--accent); color: #fff; border-color: var(--accent); }
  button.primary:hover { background: #3335c9; }
  input[type=text] {
    width: 100%;
    padding: 10px 12px;
    border-radius: 9px;
    border: 1px solid var(--line);
    font: inherit;
    font-size: 13px;
  }
  input[type=text]:focus { outline: 2px solid var(--accent); outline-offset: 1px; }
  .hint { font-size: 12px; color: var(--muted); line-height: 1.5; }
  #log {
    font-family: "JetBrains Mono", ui-monospace, monospace;
    font-size: 11px;
    color: var(--muted);
    max-height: 120px;
    overflow-y: auto;
    border-top: 1px solid var(--line);
    padding-top: 10px;
    white-space: pre-wrap;
  }
</style>
</head>
<body>
<header>
  <div class="brand">Phone<span>Bridge</span></div>
  <div id="meta">connecting…</div>
  <div class="spacer"></div>
  <div class="status"><span class="dot" id="dot"></span><span id="state">live</span></div>
</header>

<main>
  <div class="screen-card">
    <img id="screen" alt="Device screen" draggable="false">
  </div>

  <aside>
    <div>
      <h2>Navigation</h2>
      <div class="row">
        <button data-key="4">Back</button>
        <button data-key="3">Home</button>
        <button data-key="187">Recents</button>
      </div>
    </div>

    <div>
      <h2>Hardware</h2>
      <div class="row">
        <button data-key="26">Power</button>
        <button data-key="24">Vol +</button>
        <button data-key="25">Vol −</button>
      </div>
      <div class="row" style="margin-top:8px">
        <button data-key="66">Enter</button>
        <button data-key="67">Delete</button>
        <button data-key="62">Space</button>
      </div>
    </div>

    <div>
      <h2>Type text</h2>
      <input type="text" id="text" placeholder="Send text to the phone…" autocomplete="off">
      <div class="row" style="margin-top:8px">
        <button class="primary" id="send">Send</button>
      </div>
    </div>

    <div>
      <h2>Refresh</h2>
      <div class="row">
        <button id="toggle">Pause</button>
        <button id="shot">Snapshot</button>
      </div>
      <p class="hint" style="margin-top:10px">
        Click the screen to tap. Drag to swipe. Everything goes to your own
        device over adb — nothing leaves this machine.
      </p>
    </div>

    <div id="log"></div>
  </aside>
</main>

<script>
  const TOKEN = ${JSON.stringify(safeToken)};
  const img = document.getElementById('screen');
  const dot = document.getElementById('dot');
  const stateEl = document.getElementById('state');
  const metaEl = document.getElementById('meta');
  const logEl = document.getElementById('log');

  let live = true;
  let busy = false;

  function log(message) {
    const stamp = new Date().toLocaleTimeString();
    logEl.textContent = '[' + stamp + '] ' + message + '\\n' + logEl.textContent;
  }

  async function api(path, body) {
    const res = await fetch('/api/' + path + '?token=' + encodeURIComponent(TOKEN), {
      method: body === undefined ? 'GET' : 'POST',
      headers: body === undefined ? {} : { 'Content-Type': 'application/json' },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
    if (!res.ok) {
      const detail = await res.text();
      throw new Error(path + ' → ' + res.status + ' ' + detail);
    }
    return res;
  }

  function refresh() {
    if (!live || busy) return;
    busy = true;
    const next = new Image();
    next.onload = () => {
      img.src = next.src;
      dot.className = 'dot';
      stateEl.textContent = 'live';
      busy = false;
    };
    next.onerror = () => {
      dot.className = 'dot off';
      stateEl.textContent = 'offline';
      busy = false;
    };
    next.src = '/api/shot?token=' + encodeURIComponent(TOKEN) + '&t=' + Date.now();
  }

  async function loadInfo() {
    try {
      const res = await api('info');
      const info = await res.json();
      const bits = [info.model, 'Android ' + info.android, info.batteryLevel + '%', info.batteryStatus]
        .filter(Boolean);
      metaEl.textContent = bits.join(' · ');
    } catch (error) {
      metaEl.textContent = String(error.message || error);
    }
  }

  // Tap and swipe: map displayed pixels back to device pixels.
  function toDevice(event) {
    const rect = img.getBoundingClientRect();
    const width = img.naturalWidth || rect.width;
    const height = img.naturalHeight || rect.height;
    return {
      x: ((event.clientX - rect.left) / rect.width) * width,
      y: ((event.clientY - rect.top) / rect.height) * height,
    };
  }

  let dragStart = null;

  img.addEventListener('pointerdown', (event) => {
    dragStart = toDevice(event);
    img.setPointerCapture(event.pointerId);
  });

  img.addEventListener('pointerup', async (event) => {
    if (!dragStart) return;
    const end = toDevice(event);
    const dx = Math.abs(end.x - dragStart.x);
    const dy = Math.abs(end.y - dragStart.y);

    try {
      if (dx < 12 && dy < 12) {
        await api('tap', { x: Math.round(dragStart.x), y: Math.round(dragStart.y) });
      } else {
        await api('swipe', {
          x1: Math.round(dragStart.x),
          y1: Math.round(dragStart.y),
          x2: Math.round(end.x),
          y2: Math.round(end.y),
        });
      }
    } catch (error) {
      log(String(error.message || error));
    }
    dragStart = null;
    refresh();
  });

  document.querySelectorAll('button[data-key]').forEach((button) => {
    button.addEventListener('click', async () => {
      try {
        await api('key', { code: button.dataset.key });
        refresh();
      } catch (error) {
        log(String(error.message || error));
      }
    });
  });

  document.getElementById('send').addEventListener('click', async () => {
    const field = document.getElementById('text');
    if (!field.value) return;
    try {
      await api('text', { text: field.value });
      field.value = '';
      refresh();
    } catch (error) {
      log(String(error.message || error));
    }
  });

  document.getElementById('text').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') document.getElementById('send').click();
  });

  document.getElementById('toggle').addEventListener('click', (event) => {
    live = !live;
    event.target.textContent = live ? 'Pause' : 'Resume';
    if (live) refresh();
  });

  document.getElementById('shot').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = '/api/shot?token=' + encodeURIComponent(TOKEN) + '&t=' + Date.now();
    link.download = 'screenshot-' + Date.now() + '.png';
    link.click();
  });

  loadInfo();
  setInterval(loadInfo, 30000);
  refresh();
  setInterval(refresh, 800);
</script>
</body>
</html>`;
}
