import { createServer } from 'node:http';
import type { IncomingMessage, ServerResponse } from 'node:http';
import { networkInterfaces } from 'node:os';
import {
  deviceInfo,
  keyEvent,
  listDevices,
  pickDevice,
  screenshot,
  swipe,
  tap,
  typeText,
} from './adb.ts';
import { safeEqual } from './config.ts';
import { dashboardHtml } from './dashboard.ts';

export type ServeOptions = {
  host: string;
  port: number;
  token: string;
  serial?: string;
};

const MAX_BODY_BYTES = 64 * 1024;

function readBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks: Buffer[] = [];
    req.on('data', (chunk: Buffer) => {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        reject(new Error('request body too large'));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

function json(res: ServerResponse, status: number, payload: unknown): void {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(body),
    'Cache-Control': 'no-store',
  });
  res.end(body);
}

function text(res: ServerResponse, status: number, body: string): void {
  res.writeHead(status, {
    'Content-Type': 'text/plain; charset=utf-8',
    'Content-Length': Buffer.byteLength(body),
  });
  res.end(body);
}

function presentedToken(req: IncomingMessage, url: URL): string {
  const header = req.headers.authorization;
  if (header && header.startsWith('Bearer ')) return header.slice(7).trim();
  return url.searchParams.get('token') ?? '';
}

function lanAddresses(): string[] {
  const found: string[] = [];
  for (const entries of Object.values(networkInterfaces())) {
    for (const entry of entries ?? []) {
      if (entry.family === 'IPv4' && !entry.internal) found.push(entry.address);
    }
  }
  return found;
}

/**
 * Serves the dashboard plus a tiny control API. Every route is token-gated,
 * so binding to the LAN does not hand out control of the phone.
 */
export function startServer(options: ServeOptions): Promise<void> {
  const { host, port, token, serial } = options;

  // One screenshot at a time: a slow device must not build a request backlog.
  let shotInFlight: Promise<Buffer> | null = null;

  const server = createServer(async (req, res) => {
    const url = new URL(req.url ?? '/', `http://${req.headers.host ?? 'localhost'}`);

    if (!safeEqual(presentedToken(req, url), token)) {
      json(res, 401, { error: 'invalid or missing token' });
      return;
    }

    try {
      const route = `${req.method ?? 'GET'} ${url.pathname}`;

      if (route === 'GET /' || route === 'GET /index.html') {
        const html = dashboardHtml(token);
        res.writeHead(200, {
          'Content-Type': 'text/html; charset=utf-8',
          'Content-Length': Buffer.byteLength(html),
          'Cache-Control': 'no-store',
        });
        res.end(html);
        return;
      }

      if (route === 'GET /api/devices') {
        json(res, 200, { devices: await listDevices() });
        return;
      }

      if (route === 'GET /api/info') {
        const device = await pickDevice(serial);
        json(res, 200, await deviceInfo(device));
        return;
      }

      if (route === 'GET /api/shot') {
        const device = await pickDevice(serial);
        if (!shotInFlight) {
          shotInFlight = screenshot(device).finally(() => {
            shotInFlight = null;
          });
        }
        const png = await shotInFlight;
        res.writeHead(200, {
          'Content-Type': 'image/png',
          'Content-Length': png.length,
          'Cache-Control': 'no-store',
        });
        res.end(png);
        return;
      }

      if (req.method === 'POST') {
        const device = await pickDevice(serial);
        const body = await readBody(req);
        const payload = body ? (JSON.parse(body) as Record<string, unknown>) : {};

        if (route === 'POST /api/tap') {
          await tap(device, Number(payload.x), Number(payload.y));
          json(res, 200, { ok: true });
          return;
        }

        if (route === 'POST /api/swipe') {
          await swipe(
            device,
            Number(payload.x1),
            Number(payload.y1),
            Number(payload.x2),
            Number(payload.y2),
            Number(payload.durationMs ?? 250),
          );
          json(res, 200, { ok: true });
          return;
        }

        if (route === 'POST /api/key') {
          const code = String(payload.code ?? '');
          if (!/^\d+$/.test(code)) {
            json(res, 400, { error: 'code must be a numeric keyevent' });
            return;
          }
          await keyEvent(device, code);
          json(res, 200, { ok: true });
          return;
        }

        if (route === 'POST /api/text') {
          const value = String(payload.text ?? '');
          if (!value) {
            json(res, 400, { error: 'text is required' });
            return;
          }
          await typeText(device, value);
          json(res, 200, { ok: true });
          return;
        }
      }

      json(res, 404, { error: `no route for ${route}` });
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      json(res, 500, { error: message });
    }
  });

  server.on('error', (error: NodeJS.ErrnoException) => {
    if (error.code === 'EADDRINUSE') {
      console.error(`port ${port} is already in use — pick another with --port`);
    } else {
      console.error(error.message);
    }
    process.exit(1);
  });

  return new Promise((resolve) => {
    server.listen(port, host, () => {
      const base = `http://${host}:${port}`;
      console.log(`PhoneBridge dashboard: ${base}/?token=${token}`);
      if (host === '0.0.0.0') {
        for (const address of lanAddresses()) {
          console.log(`  on your network:  http://${address}:${port}/?token=${token}`);
        }
        console.log('  LAN mode is on — anyone with the token can drive this device.');
      }
      console.log('Ctrl+C to stop.');
      resolve();
    });
  });
}
