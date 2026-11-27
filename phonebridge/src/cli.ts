#!/usr/bin/env node
import { spawn } from 'node:child_process';
import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { adbText, deviceInfo, listDevices, pickDevice, screenshot } from './adb.ts';
import { getOrCreateToken, tokenPath } from './config.ts';
import { startServer } from './server.ts';

type Parsed = {
  positional: string[];
  flags: Map<string, string | true>;
};

function parseArgs(argv: string[]): Parsed {
  const positional: string[] = [];
  const flags = new Map<string, string | true>();

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg.startsWith('--')) {
      const key = arg.slice(2);
      const next = argv[i + 1];
      if (next && !next.startsWith('-')) {
        flags.set(key, next);
        i++;
      } else {
        flags.set(key, true);
      }
    } else if (arg.startsWith('-') && arg.length > 1) {
      flags.set(arg.slice(1), true);
    } else {
      positional.push(arg);
    }
  }

  return { positional, flags };
}

function flagString(flags: Map<string, string | true>, key: string): string | undefined {
  const value = flags.get(key);
  return typeof value === 'string' ? value : undefined;
}

const USAGE = `PhoneBridge — control your own Android device from this machine.

Usage: phonebridge <command> [options]

Commands
  devices                 List attached devices
  pair <ip:port> <code>   Pair with wireless debugging (6-digit code)
  connect <ip:port>       Connect to a paired device
  disconnect [ip:port]    Drop wireless connections
  info                    Model, Android version, battery, storage, screen
  shot [file]             Save a screenshot (default: screenshot-<time>.png)
  mirror                  Open the live screen with scrcpy (if installed)
  push <local> <remote>   Copy a file to the device
  pull <remote> <local>   Copy a file from the device
  install <file.apk>      Install (or replace) an APK
  shell <command...>      Run a shell command on the device
  serve                   Start the browser dashboard
  token                   Show the dashboard token and where it is stored

Options
  --serial <id>           Target a specific device
  --port <n>              Dashboard port (default 7000)
  --allow-lan             Bind the dashboard to all interfaces (token still required)

Setup
  1. Phone: Settings → About phone → tap Build number 7×
  2. Phone: Developer options → Wireless debugging → Pair device with pairing code
  3. Pair and connect (both ports are shown on the phone):
       phonebridge pair 10.125.38.80:<pair-port> <code>
       phonebridge connect 10.125.38.80:<connect-port>
  4. phonebridge devices

Nothing here can install or control a device without it being unlocked and
authorized first — that is the Android security model, not a limitation.`;

async function main(): Promise<void> {
  const [command, ...rest] = process.argv.slice(2);
  const { positional, flags } = parseArgs(rest);
  const serial = flagString(flags, 'serial');

  if (!command || command === 'help' || command === '--help' || command === '-h') {
    console.log(USAGE);
    return;
  }

  if (command === 'devices') {
    const devices = await listDevices();
    if (devices.length === 0) {
      console.log('No devices attached.');
      console.log('Enable Wireless debugging on the phone, pair, then connect.');
      return;
    }
    for (const device of devices) {
      const label = device.model || device.product || 'unknown';
      console.log(`${device.serial}  ${device.state.padEnd(13)} ${label}`);
    }
    return;
  }

  if (command === 'pair') {
    const [address, code] = positional;
    if (!address || !code) {
      console.error('usage: phonebridge pair <ip:pair-port> <6-digit-code>');
      process.exitCode = 1;
      return;
    }
    process.stdout.write(await adbText(['pair', address, code], { timeoutMs: 60_000 }));
    return;
  }

  if (command === 'connect') {
    const address = positional[0];
    if (!address) {
      console.error('usage: phonebridge connect <ip:port>');
      process.exitCode = 1;
      return;
    }
    process.stdout.write(await adbText(['connect', address], { timeoutMs: 30_000 }));
    return;
  }

  if (command === 'disconnect') {
    const address = positional[0];
    const args = address ? ['disconnect', address] : ['disconnect'];
    process.stdout.write(await adbText(args, { timeoutMs: 30_000 }));
    return;
  }

  if (command === 'info') {
    const device = await pickDevice(serial);
    const info = await deviceInfo(device);
    const rows: Array<[string, string]> = [
      ['device', device],
      ['model', `${info.manufacturer} ${info.model}`.trim()],
      ['android', `${info.android} (sdk ${info.sdk})`],
      ['battery', `${info.batteryLevel}% ${info.batteryStatus}`.trim()],
      ['screen', info.screen],
      ['storage', info.storage],
    ];
    for (const [key, value] of rows) {
      console.log(`${key.padEnd(8)} ${value || '—'}`);
    }
    return;
  }

  if (command === 'shot') {
    const device = await pickDevice(serial);
    const target = positional[0] ?? `screenshot-${Date.now()}.png`;
    const png = await screenshot(device);
    await writeFile(target, png);
    console.log(`Saved ${resolve(target)} (${Math.round(png.length / 1024)} KB)`);
    return;
  }

  if (command === 'mirror') {
    const device = await pickDevice(serial);
    const child = spawn('scrcpy', ['--serial', device], { stdio: 'inherit', shell: process.platform === 'win32' });
    child.on('error', () => {
      console.error('scrcpy is not installed. Install it, or use the browser dashboard:');
      console.error('  winget install --id Genymobile.scrcpy -e');
      console.error('  phonebridge serve');
    });
    return;
  }

  if (command === 'push' || command === 'pull') {
    const [from, to] = positional;
    if (!from || !to) {
      console.error(`usage: phonebridge ${command} <source> <destination>`);
      process.exitCode = 1;
      return;
    }
    const device = await pickDevice(serial);
    const args = command === 'push' ? ['-s', device, 'push', from, to] : ['-s', device, 'pull', from, to];
    process.stdout.write(await adbText(args, { timeoutMs: 300_000 }));
    return;
  }

  if (command === 'install') {
    const apk = positional[0];
    if (!apk) {
      console.error('usage: phonebridge install <file.apk>');
      process.exitCode = 1;
      return;
    }
    const device = await pickDevice(serial);
    process.stdout.write(await adbText(['-s', device, 'install', '-r', apk], { timeoutMs: 300_000 }));
    return;
  }

  if (command === 'shell') {
    if (positional.length === 0) {
      console.error('usage: phonebridge shell <command...>');
      process.exitCode = 1;
      return;
    }
    const device = await pickDevice(serial);
    process.stdout.write(await adbText(['-s', device, 'shell', positional.join(' ')], { timeoutMs: 120_000 }));
    return;
  }

  if (command === 'serve') {
    const token = getOrCreateToken();
    const port = Number(flagString(flags, 'port') ?? 7000);
    const allowLan = flags.get('allow-lan') === true;
    await startServer({
      host: allowLan ? '0.0.0.0' : '127.0.0.1',
      port,
      token,
      serial,
    });
    return;
  }

  if (command === 'token') {
    console.log(getOrCreateToken());
    console.log(`stored in ${tokenPath()}`);
    return;
  }

  console.error(`unknown command: ${command}`);
  console.error('run "phonebridge help" for usage');
  process.exitCode = 1;
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
