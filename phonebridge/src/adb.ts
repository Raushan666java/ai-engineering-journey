import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { existsSync } from 'node:fs';
import { readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const execFileAsync = promisify(execFile);
const EXE = process.platform === 'win32' ? 'adb.exe' : 'adb';

export type Device = {
  serial: string;
  state: string;
  model: string;
  product: string;
  transport: string;
};

export type DeviceInfo = {
  model: string;
  manufacturer: string;
  android: string;
  sdk: string;
  batteryLevel: string;
  batteryStatus: string;
  screen: string;
  storage: string;
};

export type RunOptions = {
  timeoutMs?: number;
};

let cachedAdb: string | null = null;

/**
 * Locate adb: explicit override, then the standard Android SDK layout, then PATH.
 */
export function resolveAdbPath(): string {
  if (cachedAdb) return cachedAdb;

  const candidates: string[] = [];
  const override = process.env.PHONEBRIDGE_ADB;
  if (override) candidates.push(override);

  const sdkRoots = [
    process.env.ANDROID_HOME,
    process.env.ANDROID_SDK_ROOT,
    process.env.LOCALAPPDATA ? join(process.env.LOCALAPPDATA, 'Android', 'Sdk') : undefined,
  ];
  for (const root of sdkRoots) {
    if (root) candidates.push(join(root, 'platform-tools', EXE));
  }

  for (const candidate of candidates) {
    if (existsSync(candidate)) {
      cachedAdb = candidate;
      return candidate;
    }
  }

  cachedAdb = EXE;
  return cachedAdb;
}

function explainAdbError(error: unknown): Error {
  const err = error as NodeJS.ErrnoException & { stderr?: Buffer | string };
  if (err.code === 'ENOENT') {
    return new Error(
      'adb was not found. Install Android platform-tools, or point PHONEBRIDGE_ADB at adb.exe.',
    );
  }
  const stderr = err.stderr ? err.stderr.toString().trim() : '';
  if (stderr) return new Error(stderr);
  return new Error(err.message ?? 'adb command failed');
}

export async function adbText(args: string[], opts: RunOptions = {}): Promise<string> {
  try {
    const { stdout } = await execFileAsync(resolveAdbPath(), args, {
      timeout: opts.timeoutMs ?? 20_000,
      maxBuffer: 16 * 1024 * 1024,
      windowsHide: true,
    });
    return stdout.toString();
  } catch (error) {
    throw explainAdbError(error);
  }
}

export async function adbBuffer(args: string[], opts: RunOptions = {}): Promise<Buffer> {
  try {
    const { stdout } = await execFileAsync(resolveAdbPath(), args, {
      encoding: 'buffer',
      timeout: opts.timeoutMs ?? 30_000,
      maxBuffer: 64 * 1024 * 1024,
      windowsHide: true,
    });
    const out = stdout as unknown;
    if (Buffer.isBuffer(out)) return out;
    return Buffer.from(String(out));
  } catch (error) {
    throw explainAdbError(error);
  }
}

export async function listDevices(): Promise<Device[]> {
  const out = await adbText(['devices', '-l']);
  const lines = out.split(/\r?\n/).slice(1);
  const devices: Device[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    const parts = trimmed.split(/\s+/);
    const serial = parts[0];
    const state = parts[1];
    if (!serial || !state) continue;

    const props: Record<string, string> = {};
    for (const part of parts.slice(2)) {
      const idx = part.indexOf(':');
      if (idx > 0) props[part.slice(0, idx)] = part.slice(idx + 1);
    }

    devices.push({
      serial,
      state,
      model: (props.model ?? '').replace(/_/g, ' '),
      product: props.product ?? '',
      transport: props.transport_id ?? '',
    });
  }

  return devices;
}

/**
 * Resolve which device to talk to, with actionable errors instead of adb noise.
 */
export async function pickDevice(serial?: string): Promise<string> {
  const devices = await listDevices();

  if (serial) {
    const found = devices.find((d) => d.serial === serial);
    if (!found) throw new Error(`device "${serial}" is not attached`);
    if (found.state !== 'device') {
      throw new Error(
        `device "${serial}" is in state "${found.state}" — unlock the phone and accept the USB debugging prompt`,
      );
    }
    return serial;
  }

  const ready = devices.filter((d) => d.state === 'device');
  if (ready.length > 0) return ready[0].serial;

  const unauthorized = devices.filter((d) => d.state === 'unauthorized');
  if (unauthorized.length > 0) {
    throw new Error(
      'device is unauthorized — unlock the phone and tap "Allow" on the "Allow USB debugging?" prompt',
    );
  }

  throw new Error(
    'no device attached. Enable Developer options → Wireless debugging (or plug in USB) and pair first.',
  );
}

function isPng(buf: Buffer): boolean {
  return buf.length > 8 && buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47;
}

/**
 * Grab a PNG screenshot. Uses exec-out, and falls back to pull-on-file when a
 * platform mangles the binary stream.
 */
export async function screenshot(serial: string): Promise<Buffer> {
  const direct = await adbBuffer(['-s', serial, 'exec-out', 'screencap', '-p']);
  if (isPng(direct)) return direct;

  const remote = '/sdcard/phonebridge-shot.png';
  const local = join(tmpdir(), `phonebridge-${Date.now()}.png`);

  await adbText(['-s', serial, 'shell', 'screencap', '-p', remote]);
  await adbText(['-s', serial, 'pull', remote, local]);
  const pulled = await readFile(local);
  await rm(local, { force: true }).catch(() => {});
  await adbText(['-s', serial, 'shell', 'rm', '-f', remote]).catch(() => {});

  if (!isPng(pulled)) throw new Error('screencap returned data that is not a PNG');
  return pulled;
}

export async function tap(serial: string, x: number, y: number): Promise<void> {
  await adbText(['-s', serial, 'shell', 'input', 'tap', String(Math.round(x)), String(Math.round(y))]);
}

export async function swipe(
  serial: string,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  durationMs = 250,
): Promise<void> {
  await adbText([
    '-s',
    serial,
    'shell',
    'input',
    'swipe',
    String(Math.round(x1)),
    String(Math.round(y1)),
    String(Math.round(x2)),
    String(Math.round(y2)),
    String(Math.round(durationMs)),
  ]);
}

export async function keyEvent(serial: string, code: string): Promise<void> {
  await adbText(['-s', serial, 'shell', 'input', 'keyevent', code]);
}

export async function typeText(serial: string, text: string): Promise<void> {
  const escaped = text
    .replace(/'/g, `'\\''`)
    .replace(/ /g, '%s')
    .replace(/[\r\n]+/g, ' ');
  await adbText(['-s', serial, 'shell', `input text '${escaped}'`]);
}

export async function deviceInfo(serial: string): Promise<DeviceInfo> {
  const info: DeviceInfo = {
    model: '',
    manufacturer: '',
    android: '',
    sdk: '',
    batteryLevel: '',
    batteryStatus: '',
    screen: '',
    storage: '',
  };

  try {
    const props = await adbText(['-s', serial, 'shell', 'getprop']);
    const read = (key: string): string => {
      const match = props.match(new RegExp(`\\[${key}\\]: \\[(.*?)\\]`));
      return match ? match[1] : '';
    };
    info.model = read('ro.product.model');
    info.manufacturer = read('ro.product.manufacturer');
    info.android = read('ro.build.version.release');
    info.sdk = read('ro.build.version.sdk');
  } catch {
    // getprop failing is not fatal for a control panel
  }

  try {
    const battery = await adbText(['-s', serial, 'shell', 'dumpsys', 'battery']);
    info.batteryLevel = battery.match(/level:\s*(\d+)/)?.[1] ?? '';
    const status = battery.match(/status:\s*(\d+)/)?.[1] ?? '';
    info.batteryStatus =
      { '1': 'unknown', '2': 'charging', '3': 'discharging', '4': 'not charging', '5': 'full' }[status] ??
      status;
  } catch {
    // ignore
  }

  try {
    const size = await adbText(['-s', serial, 'shell', 'wm', 'size']);
    info.screen = size.match(/(\d+x\d+)/)?.[1] ?? '';
  } catch {
    // ignore
  }

  try {
    const df = await adbText(['-s', serial, 'shell', 'df', '-h', '/data']);
    const row = df.split(/\r?\n/).find((line) => /\/data/.test(line));
    if (row) {
      const cols = row.trim().split(/\s+/);
      info.storage = `${cols[3] ?? '?'} free of ${cols[1] ?? '?'}`;
    }
  } catch {
    // ignore
  }

  return info;
}
