# PhoneBridge

A local control panel for **your own** Android device. Screen mirror, tap, swipe,
type, push files, install APKs and run shell commands — all through `adb`, with a
browser dashboard on top.

Zero dependencies. No build step. Node 22.6+ runs the TypeScript directly.

## Why it's built this way

Android has no remote-control port to discover. Every path to a device requires the
device to be unlocked and explicitly authorized — that's why the design is *pair
once, then control*, not *scan and connect*. Nothing here can attach to a phone that
hasn't granted access, and that's deliberate.

## Requirements

| Need | Check |
|---|---|
| Node 22.6+ | `node --version` |
| adb | auto-detected from `ANDROID_HOME`, `LOCALAPPDATA\Android\Sdk`, or `PATH` |
| Phone with Developer options | one-time setup below |

Override the adb location if needed:

```powershell
$env:PHONEBRIDGE_ADB = "C:\path\to\adb.exe"
```

## Setup (one time, on the phone)

1. Settings → About phone → Software information → tap **Build number** 7×
2. Settings → Developer options → enable **Wireless debugging**
3. Tap **Pair device with pairing code** — note the `IP:PORT` and 6-digit code
4. On this machine:

```powershell
.\phonebridge.cmd pair 10.125.38.80:<PAIR_PORT> <CODE>
.\phonebridge.cmd connect 10.125.38.80:<CONNECT_PORT>
```

Then:

```powershell
.\phonebridge.cmd devices
```

USB works too — plug in, tap **Allow** on the phone, skip the pair/connect steps.

## Commands

| Command | What it does |
|---|---|
| `devices` | list attached devices and their state |
| `pair <ip:port> <code>` | pair with wireless debugging |
| `connect <ip:port>` | connect to a paired device |
| `disconnect [ip:port]` | drop wireless connections |
| `info` | model, Android version, battery, storage, screen size |
| `shot [file]` | save a screenshot |
| `mirror` | live screen via scrcpy, if installed |
| `push <local> <remote>` | copy a file to the device |
| `pull <remote> <local>` | copy a file from the device |
| `install <file.apk>` | install or replace an APK |
| `shell <cmd>` | run a shell command on the device |
| `serve` | browser dashboard on `127.0.0.1:7000` |
| `token` | show the dashboard token |

Global options: `--serial <id>`, `--port <n>`, `--allow-lan`.

## Dashboard

```powershell
node src/cli.ts serve
```

It prints a URL with the token embedded. The page shows the live screen (refreshed
about every 0.8 s), and lets you:

- **click** the screen to tap
- **drag** to swipe
- Back / Home / Recents / Power / Volume buttons
- send text into the focused field
- download a snapshot

## Accessing it from another device

The dashboard binds to `127.0.0.1` by default — the phone's screen is sensitive, so
it is not exposed unless you ask:

```powershell
node src/cli.ts serve --allow-lan
```

For access away from home, prefer a private overlay network rather than exposing the
port:

```powershell
# install Tailscale on both devices, then:
node src/cli.ts serve --allow-lan
# browse to http://<tailscale-ip>:7000/?token=<token>
```

## Security model

- **Token required on every route.** Generated once at `~/.phonebridge/token`
  (`0600`), compared in constant time. Not in the project, not in git.
- **Loopback by default.** `--allow-lan` is opt-in and prints a warning.
- **No device access without authorization.** Unpaired devices show as
  `unauthorized` and are refused with a clear message.
- **Only your own device.** Installing or controlling a phone without the owner's
  consent is a criminal offence (India: IT Act §66). This tool assumes you own the
  hardware and have it in your hand.

## What it cannot do

By Android design, not by omission:

- no silent screen capture — `MediaProjection` always shows a consent dialog
- no camera or microphone access
- no reading other apps' private data
- no lock-screen bypass

Anything claiming otherwise is either root-level (bootloader unlock wipes the
device) or malware.

## Troubleshooting

| Symptom | Fix |
|---|---|
| `no device attached` | enable Wireless debugging, then `adb connect` |
| `device is unauthorized` | unlock the phone, tap **Allow** on the debugging prompt |
| `device is in state "offline"` | `adb disconnect` then `adb connect` again |
| dashboard 401 | use the full URL printed by `serve`, including `?token=` |
| port in use | `serve --port 7001` |
| wireless drops after reboot | re-run the two `adb` commands — pairing is remembered, the port is not |
