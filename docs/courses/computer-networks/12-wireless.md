# Chapter 12: Wireless Networks

## Learning Objectives

1. Compare the 802.11 physical-layer standards and their performance characteristics.
2. Describe CSMA/CA and its role in wireless medium access.
3. Explain Bluetooth architecture including piconets and scatternets.
4. Analyze the architecture of cellular networks from 4G/LTE to 5G.
5. Describe mobility management including handover, location tracking, and roaming.

## 12.1 Wireless LANs

![Wireless Networks and Mobility Management](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/computer-networks/ch-15-wireless-mobile-networks.png)

### 12.1.1 IEEE 802.11 Standards

The IEEE 802.11 family defines wireless local-area network (WLAN) standards. Key physical-layer variants:

| Standard | Year | Frequency | Max Rate | Modulation | Notes |
|----------|------|-----------|----------|------------|-------|
| 802.11a | 1999 | 5 GHz | 54 Mbps | OFDM | 52 subcarriers |
| 802.11b | 1999 | 2.4 GHz | 11 Mbps | DSSS | Longer range than 11a |
| 802.11g | 2003 | 2.4 GHz | 54 Mbps | OFDM | Backward compatible with 11b |
| 802.11n | 2009 | 2.4/5 GHz | 600 Mbps | MIMO-OFDM | 4 spatial streams, 40 MHz channels |
| 802.11ac | 2013 | 5 GHz | 6.9 Gbps | MU-MIMO | Up to 8 streams, 160 MHz channels |
| 802.11ax (WiFi 6) | 2019 | 2.4/5/6 GHz | 9.6 Gbps | OFDMA,MU-MIMO | 1024-QAM, target wake time |
| 802.11be (WiFi 7) | 2024 | 2.4/5/6 GHz | 46 Gbps | 4096-QAM | 320 MHz channels, multi-link |

### 12.1.2 802.11 MAC

The 802.11 MAC uses CSMA/CA (Chapter 4) with optional RTS/CTS. The Distributed Coordination Function (DCF) is the basic access method. The Point Coordination Function (PCF) provides contention-free service through polling, but is rarely implemented. The Hybrid Coordination Function (HCF) introduced in 802.11e provides QoS through contention-free bursts (EDCA â€” Enhanced Distributed Channel Access).

**Fragmentation.** Large frames are fragmented to reduce the probability of corruption. Each fragment is acknowledged independently. The Fragment Threshold defaults to 2346 bytes.

**Power management.** A station may enter doze state and wake only at designated beacon intervals to receive buffered frames. The Access Point (AP) indicates buffered frames in the Traffic Indication Map (TIM). Stations send a PS-Poll frame to retrieve buffered data.

### 12.1.3 802.11 Frame Format

| Frame Control | Duration | Address 1 | Address 2 | Address 3 | Sequence | Address 4 | QoS | Payload | FCS |
|---------------|----------|-----------|-----------|-----------|----------|-----------|-----|---------|-----|
| 2 B           | 2 B      | 6 B       | 6 B       | 6 B       | 2 B      | 6 B       | 2 B | 0â€“2304 B | 4 B |

Address fields serve different roles depending on the To DS and From DS bits:
- Address 1: receiver address
- Address 2: transmitter address
- Address 3: for infrastructure mode, this is the destination (From DS) or source (To DS) address
- Address 4: used only in wireless bridge mode (WDS)

Frame types: Management (beacon, probe, association, authentication), Control (RTS, CTS, ACK, PS-Poll), and Data.

### 12.1.4 WiFi Security

Wired Equivalent Privacy (WEP) used RC4 encryption with a 40-bit key and is completely broken â€” it can be cracked in minutes. WiFi Protected Access (WPA) introduced TKIP (Temporal Key Integrity Protocol) as a stopgap. WPA2 (802.11i) uses AES-CCMP with 128-bit keys and is the minimum standard for new deployments. WPA3 (2018) replaces the pre-shared key handshake with Simultaneous Authentication of Equals (SAE), providing forward secrecy and protection against dictionary attacks.

## 12.2 Bluetooth

Bluetooth (IEEE 802.15.1) operates in the 2.4 GHz ISM band using frequency-hopping spread spectrum (FHSS) with 79 channels and 1600 hops per second.

**Piconet.** A Bluetooth piconet consists of one master and up to seven active slaves. All communication is between master and slave (slaves do not directly communicate). Scatternets connect multiple piconets through a slave that participates in multiple piconets.

**Bluetooth versions:**

- BR/EDR (Basic Rate/Enhanced Data Rate): 1â€“3 Mbps, classic Bluetooth for audio and file transfer.
- BLE (Bluetooth Low Energy, 4.0): 1 Mbps, designed for IoT with very low power consumption. Devices advertise their presence; a master initiates connections.
- Bluetooth 5: 2 Mbps (LE), extended range (4Ã—), mesh networking, and broadcast audio.
- Bluetooth 5.2: LE Audio with LC3 codec, multi-stream audio, broadcast audio.

## 12.3 Cellular Networks

### 12.3.1 4G/LTE

Long-Term Evolution (LTE) provides high-speed data for mobile devices. The LTE architecture:

- **UE (User Equipment):** mobile device.
- **eNodeB (eNB):** base station handling radio resource management.
- **EPC (Evolved Packet Core):** MME (mobility management), SGW (serving gateway), PGW (packet data network gateway).

LTE uses OFDMA in the downlink and SC-FDMA in the uplink. Subcarrier spacing is 15 kHz; resource blocks of 12 subcarriers Ã— 7 symbols (normal cyclic prefix) carry data. MIMO with up to 8Ã—8 in downlink and 4Ã—4 in uplink.

LTE-Advanced (3GPP Release 10) introduced carrier aggregation (up to 100 MHz, 5 Ã— 20 MHz component carriers), enhanced MIMO, and relay nodes.

### 12.3.2 5G NR

5G New Radio (3GPP Release 15/16) provides three service categories:

- **eMBB (enhanced Mobile Broadband):** peak rates 20 Gbps down, 10 Gbps up.
- **uRLLC (ultra-Reliable Low-Latency Communications):** 1 ms latency, 99.999% reliability.
- **mMTC (massive Machine-Type Communications):** 1 million devices per square kilometer.

5G key technologies:

- **OFDM with flexible numerology**: subcarrier spacing scales as $15 \times 2^\mu$ kHz ($\mu = 0,1,2,3,4$), enabling ticker subcarriers for low latency and wider channels for high throughput.
- **Beamforming**: massive MIMO antennas (up to 64/128 elements) focus energy in specific directions, improving signal quality and spatial multiplexing.
- **Network slicing**: multiple logical networks share the same physical infrastructure, each optimized for specific service requirements.
- **Edge computing**: user-plane functions deployed close to the radio access network for low-latency applications.

The 5G core uses a service-based architecture (SBA) with network functions (AMF, SMF, UPF, PCF, NRF) communicating via HTTP/2.

## 12.4 Mobility Management

### 12.4.1 Handover

Handover (handoff) transfers an active connection from one base station (or access point) to another.

**Hard handover.** The connection with the old base station is broken before the new connection is established (break-before-make). Used in GSM and some LTE scenarios. Packet loss during the interruption is inevitable.

**Soft handover.** The connection is maintained with both base stations simultaneously during the transition (make-before-break). Used in CDMA-based networks. Requires the mobile to receive/transmit on multiple channels.

**Horizontal vs. vertical handover.** Horizontal handover occurs between base stations of the same technology (e.g., LTE to LTE). Vertical handover occurs between different technologies (e.g., WiFi to 5G).

### 12.4.2 Location Management

Cellular networks track mobile devices through location areas and paging. The network divides coverage into location areas (LA) or tracking areas (TA). When a mobile crosses a TA boundary, it performs a tracking area update (TAU). When a call arrives for a mobile, the network pages all cells in the last known TA.

### 12.4.3 Roaming

Roaming allows a mobile device to connect to a visited network. The visited network uses the home network's authentication infrastructure. In LTE, the UE connects to a visited eNB and MME; the visited MME communicates with the home subscriber server (HSS) for authentication and with the home PGW for data.

## ðŸ’¡ Pro Tips

- **Avoid 2.4 GHz for dense deployments**: The 2.4 GHz band has only 3 non-overlapping channels. In apartment buildings or offices with many APs, use 5 GHz (more channels, less interference) or 6 GHz (WiFi 6E/7).
- **WPA3 is not optional for new networks**: WPA2 is still common but vulnerable to KRACK attacks. Deploy WPA3 with SAE for forward secrecy and dictionary-attack resistance.
- **5G network slicing requires RAN support**: Network slicing is not just a core feature â€” the RAN must also support slice-aware scheduling and QoS. Verify your gNB firmware supports 5G NR slicing before building slice-based services.
- **Handover tuning for VoIP**: For real-time voice, use soft handover (make-before-break) if available. Hard handover can cause audible gaps. Tune handover thresholds based on the UE speed â€” faster mobiles need earlier trigger.

## One-Sentence Takeaways

- IEEE 802.11 has evolved from 11 Mbps (802.11b) to 46 Gbps (802.11be/WiFi 7).
- CSMA/CA avoids wireless collisions via random backoff and optional RTS/CTS.
- Bluetooth uses frequency-hopping spread spectrum in 2.4 GHz piconets.
- 5G NR delivers 20 Gbps peak with 1 ms latency through massive MIMO and beamforming.
- Hard handover is break-before-make; soft handover is make-before-break.
- Roaming allows mobile devices to use visited network infrastructure via home authentication.

## Concept Comparison Table

| Technology | Range | Data Rate | Frequency | Power | Use Case |
|------------|-------|-----------|-----------|-------|----------|
| WiFi 6 (802.11ax) | ~50 m indoor | 9.6 Gbps | 2.4/5/6 GHz | ~10 W | LAN, web, streaming |
| WiFi 7 (802.11be) | ~50 m indoor | 46 Gbps | 2.4/5/6 GHz | ~10 W | AR/VR, high-res video |
| Bluetooth BLE | ~100 m | 2 Mbps | 2.4 GHz | <0.1 W | IoT, wearables |
| 4G/LTE | ~10 km | 300 Mbps | 700â€“2600 MHz | ~3 W | Mobile broadband |
| 5G NR (mmWave) | ~500 m | 20 Gbps | 24â€“47 GHz | ~3 W | Fixed wireless access |
| LoRaWAN | ~15 km | 50 kbps | 868/915 MHz | <0.1 W | Sensor networks |

## Quick Reference: 802.11 Standards Evolution

| Standard | Year | Max Rate | MIMO | Channel | Modulation |
|----------|------|----------|------|---------|------------|
| 802.11b | 1999 | 11 Mbps | No | 20 MHz | DSSS |
| 802.11g | 2003 | 54 Mbps | No | 20 MHz | OFDM |
| 802.11n | 2009 | 600 Mbps | 4Ã—4 | 40 MHz | MIMO-OFDM |
| 802.11ac | 2013 | 6.9 Gbps | 8Ã—8 | 160 MHz | MU-MIMO |
| 802.11ax (WiFi 6) | 2019 | 9.6 Gbps | 8Ã—8 | 160 MHz | OFDMA + MU-MIMO |
| 802.11be (WiFi 7) | 2024 | 46 Gbps | 16Ã—16 | 320 MHz | 4096-QAM, multi-link |

## Cross-Application Matrix

| Environment | Best Wireless Tech | Why |
|-------------|-------------------|-----|
| Home WiFi | WiFi 6 or 6E | Wide device support, good range |
| Industrial IoT | LoRaWAN | Long range, low power, sub-GHz |
| Warehouse tracking | BLE | Beacon-based asset tracking |
| Mobile broadband | 5G NR | High mobility, consistent throughput |
| Office floor | WiFi 6 (5 GHz) | High density, many APs |
| Smart home sensors | Zigbee Thread | Mesh, low power, local control |

## Chapter Quiz

1. **Why does WiFi use CSMA/CA instead of CSMA/CD?**
   - a) CA is more efficient
   - b) CD requires full-duplex; WiFi is half-duplex âœ“
   - c) CA prevents hidden terminal completely
   - d) Wireless collisions are impossible to detect

2. **Which WiFi generation supports 6 GHz?**
   - a) WiFi 5
   - b) WiFi 6 âœ“
   - c) WiFi 4
   - d) WiFi 3

3. **What is the maximum number of active slaves in a Bluetooth piconet?**
   - a) 3
   - b) 7 âœ“
   - c) 15
   - d) 31

4. **Which 5G service category targets 1 ms latency?**
   - a) eMBB
   - b) uRLLC âœ“
   - c) mMTC
   - d) MIMO

5. **In cellular handover, what is make-before-break called?**
   - a) Hard handover
   - b) Soft handover âœ“
   - c) Horizontal handover
   - d) Vertical handover

**Answers:** 1-b, 2-b, 3-b, 4-b, 5-b

## Summary

Wireless networks span personal-area (Bluetooth), local-area (WiFi), and wide-area (4G/5G) coverage. 802.11 has evolved from 11 Mbps (802.11b) to 46 Gbps (802.11be). CSMA/CA with RTS/CTS addresses the hidden terminal problem. Bluetooth uses frequency-hopping piconets. Cellular networks provide wide-area mobility: 4G/LTE achieves hundreds of Mbps; 5G targets 20 Gbps with 1 ms latency through massive MIMO, beamforming, and network slicing. Mobility management handles handover, location tracking, and roaming across heterogeneous access networks.

## Exercises

### Review Questions

1. Why does 802.11 use CSMA/CA rather than CSMA/CD?
2. What is the purpose of the RTS/CTS exchange in 802.11?
3. How does Bluetooth frequency hopping reduce interference?
4. What is network slicing in 5G, and what problem does it solve?
5. Distinguish between hard and soft handover.

### Application Problems

6. A WiFi network has 20 stations and an AP. The channel data rate is 300 Mbps. If each station transmits 1500-byte frames at an average rate of 50 frames per second, what is the offered load? Is the channel saturated? What is the approximate throughput under CSMA/CA with optimal parameters?
7. A 5G base station uses 64-element MIMO with 100 MHz bandwidth and 256-QAM. Compute the peak physical-layer data rate assuming 15 kHz subcarrier spacing, normal cyclic prefix, and 7/8 code rate.
8. An LTE mobile moves at 60 km/h through cells with 500 m radius. The tracking area contains 20 cells. Compute the rate of tracking area updates and the paging load per cell, assuming 0.1 calls per user per hour and 1000 users per cell.

### Challenge Problem

9. **Design a mobility handover protocol for high-speed rail.** A train travels at 350 km/h through 5G cells. Design a handover protocol that: (a) maintains a data rate of at least 100 Mbps per passenger, (b) limits handover interruption to under 5 ms, (c) handles handover between eNodeBs on the same gNB and between different gNBs, and (d) accommodates group handover (500 passengers simultaneously). Propose architectural enhancements to the 5G NR specification and compute the handover success probability given 1% radio link failure per handover.
